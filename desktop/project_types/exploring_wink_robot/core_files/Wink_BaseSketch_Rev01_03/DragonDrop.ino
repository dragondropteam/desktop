// Header inclusions: 
#include "DragonDrop.hpp"
#include "WinkHardware.hpp"
#include <Adafruit_NeoPixel.h>

// Eye positioning
#define EYE_LEFT  0
#define EYE_RIGHT 1
#define EYE_COUNT 2
#define EYE_MIN 0
#define EYE_MAX 255

// Obstacle related
#define ROTATION_LEFT 0
#define ROTATION_RIGHT 1

// Obstacle avoiding and approaching varaibles.
int lastDirection = ROTATION_LEFT;
int consecutiveWiggles = 0;
int consecutiveLeft = 0;
int consecutiveRight = 0;

// Variables associated with ambient light sensors
double ambientSensorLeft, ambientSensorCenter, ambientSensorRight; 
int centerLightOff, centerLightOn, centerLightOnly;



////////////////////////////////////////////
// Static, file-specific helper functions //
////////////////////////////////////////////
/**
 * Picks a int within specified spread of the center. 
 * Not clamped at all, and will not function with negatives.
 *
 * @param center Center of the random number range.
 * @param spread Amount random value must be within Center.
 * @returns Random int within specified spread of the center.
 */
static int randomSpread(int center, int spread) {
    return random(center - spread, center + spread);
}


/**
 * If there is a max, delays a specific ammount and does not exceed it.
 * If max is 0, we don't bother counting, we just delay by incrementBy.
 * This function is blocking.
 *
 * @param currentTime Pointer to the current time value that is modified.
 * @param maxTime Limit of the currentTime value, not to be exceeded.
 * @param incrementBy The pointer to a blue value scaled by decayScalar.
 */
static void delayPreciesly(int *currentTime, int maxTime, int incrementBy) {
    if(maxTime > 0) {
        if(*currentTime + incrementBy > maxTime)
            delay(maxTime - *currentTime);
        else
            delay(incrementBy);

        *currentTime += incrementBy;
    } else {
        delay(incrementBy);
    }
}


/**
 * decays by a fixed scalar, decayScalar. r,g,b are ints, meaning all values
 * are truncated automatically. There are no value contraints past those of int.
 *
 * @param r Pointer to a red value scaled by decayScalar.
 * @param g Pointer to a green value scaled by decayScalar.
 * @param b Pointer to a blue value scaled by decayScalar.
 * @param decayScalar Scales r,g,b with no constraints.
 */
static void decay(int *r, int *g, int *b, float decayScalar) {
    *r *= decayScalar;
    *g *= decayScalar;
    *b *= decayScalar;
}


/**
 * Scales up r,g,b, but with a cap of EYE_MAX. Cap is based on the limits of
 * the uint8_t type, but handled as an int to allow saturation.
 *
 * @param r Pointer to a red value modified by adding amountToBumpBy.
 * @param g Pointer to a green value modified by adding amountToBumpBy.
 * @param b Pointer to a blue value modified by adding amountToBumpBy.
 * @param amountToBumpBy Value to add to and potentially saturate r,g,b by
 */
static void bump(int *r, int *g, int *b, int amountToBumpBy) {
    const int limit = EYE_MAX; // The value to not be exceeded by bumping.
    const int minimum = 12;     // Arbitrary. Currently tuned to be ~5% of limit.

    if(*r > minimum)
        *r = constrain(*r + amountToBumpBy, minimum, limit);

    if(*g > minimum)
        *g = constrain(*g + amountToBumpBy, minimum, limit);

    if(*b > minimum)
        *b = constrain(*b + amountToBumpBy, minimum, limit);
}


/**
 * Converts the specified integer representing seconds to milliseconds.
 *
 * @param seconds The number of seconds to convert to milliseconds.
 * @returns Specified seconds converted to milliseconds.
 */
static int convertToMilliseconds(int seconds) {
    return seconds * 1000;
}



/**
 * A function for debugging IR sensor values using ASCII in the 
 * serial output. Output for the wink robot is, by default,
 * set at 57600 baud.
 */
static void displayIRSensorOutput(void) { 
  Serial.flush();
  const int scalarBar = 5; 
  for(int i = 0; i < 4; ++i)  
    Serial.println(); 

  // Read sensors
  ambientSensorLeft = analogRead(AmbientSenseLeft);     
  ambientSensorCenter = analogRead(AmbientSenseCenter);
  ambientSensorRight = analogRead(AmbientSenseRight);

  // Draw graph in serial output
  for(int i = 0; i < 10; ++i) { 
    int iterThreshold = (10 - i) * scalarBar; 
    if(ambientSensorLeft > iterThreshold)   Serial.print(" #\t"); else Serial.print(" \t");
    if(ambientSensorCenter > iterThreshold) Serial.print("#\t");  else Serial.print(" \t");
    if(ambientSensorRight > iterThreshold)  Serial.print("#\t");  else Serial.print(" \t");
    Serial.print("\n"); 
  } 
   
  // Print out numbers 
  Serial.println("ir_L,    ir_C,     ir_R"); 
  Serial.print(ambientSensorLeft);   Serial.print("\t"); 
  Serial.print(ambientSensorCenter); Serial.print("\t"); 
  Serial.println(ambientSensorRight);
  Serial.flush();
} 


/**
 * Scales avoidance motor. Takes the inputs provided and allows them
 * to be scaled based on the other values being tracked. For use
 * with obstacle avoidance and apprach.
 */
static int scaleForMotor(double sensorInput, double numPow, double maxSpeed) {
  // Sensor max is 1024 but ambient light levels tend to not go above 50 unless a flashlight is involved.
  const double cap = pow(20.0, numPow); 
  if(sensorInput > cap)
    sensorInput = cap;
    
  return sensorInput / cap * maxSpeed;
}


/**
 * Updates the value of the centerLightOff, centerLightOn,
 * and centerLightOnly global variables dynamically. CenterLightOnly
 * will now contain a value adjuted for current ambient IR sensor inputs.
 */
static void updateCenterIRSensor() {
  // Dynamically read center value and offset it 
  // so ambient IR change is not an issue.
  // Start by getting center value while IR headlight is off...
  digitalWrite(Headlight, LOW);                    //turn off IR Headlight
  delay(1);                                        //delay 1 millisecond
  centerLightOff = analogRead(AmbientSenseCenter); //read sensor

  // ...then when IR headlight is on...
  digitalWrite(Headlight, HIGH);                  //turn on IR Headlight
  delay(1);                                       //delay 1 millisecond
  centerLightOn = analogRead(AmbientSenseCenter); //read sensor

  // .. and finally calucalte center light.
  centerLightOnly = centerLightOn - centerLightOff;
}


/**
 * Runs a police light effect for the duration specified.
 *
 * @param duration The time in seconds to run the police lights for.
 */
void lightEffectPolice(int duration) {
    const int waitTime = 250;
    unsigned int runtime = 0;
    bool isLeftLight = false;

    // Run until duration exceeded, or forever if duration is <= 0.
    eyesOff();
    duration = convertToMilliseconds(duration);
    while(runtime < duration || duration <= 0) {    

        // Alternate lights
        if(isLeftLight) {
            rightOff();
            leftRed(200);
        } else {
            leftOff();
            rightBlue(200);
        }

        // Delay. If delay is negative/0, we just do this forever, but still
        // Swap which light we'll do next.
        delayPreciesly(&runtime, duration, waitTime);
        isLeftLight = !isLeftLight;     
    }
}




////////////////////////////////////////////////////////////////
// Functions designed for external use with DragonDrop Blocks //
////////////////////////////////////////////////////////////////
/**
 * Produces a Twinkling Effect that's very blue and white heavy, like a discoball
 *
 * @param duration The duration of the disco effect in seconds.
 */
void lightEffectDisco(int duration) {
    const int waitTime = 125;
    unsigned int runtime = 0;

    // Choose some vaguely blue-ish disco colors randomly
    eyesOff();
    duration = convertToMilliseconds(duration);
    while(runtime < duration || duration <= 0) {

        // Choose an eye to make 'twinkle'
        if(random(2) == EYE_LEFT) 
            leftEye(randomSpread(100, 70), randomSpread(150, 100), randomSpread(200, 40));
        else 
            rightEye(randomSpread(100, 70), randomSpread(150, 100), randomSpread(200, 40));
        
        // Update duration
        delayPreciesly(&runtime, duration, waitTime);
    }
}


/**
 * Produces a gradual change of a rainbow-like effect, cycling through 
 * all colors over about 3 seconds.
 *
 * @param duration The duration of the rainbow effect in seconds.
 */
void lightEffectRainbow(int duration) {
    const int waitTime = 4;   // The time in milliseconds between update loops
    unsigned int runtime = 0; // The amount of time run so far.

    // Eye coloring
    int r = EYE_MAX;
    int g = EYE_MIN;
    int b = EYE_MIN;
    
    // Cascade through r->g->b so long as duration is not exceeded.
    eyesOff();
    duration = convertToMilliseconds(duration);
    while(runtime < duration || duration <= 0) {
        
        if(r == EYE_MAX) {
            if(b == EYE_MIN)
                ++g;
            else
                --b;
        }
        if(g == EYE_MAX) {
            if(r == EYE_MIN)
                ++b;
            else
                --r;
        }
        if(b == EYE_MAX) {
            if(g == EYE_MIN)
                ++r;
            else
                --g;
        }

        // Scaled to approximately 200 brightness.
        eyesRGB(r * .8, g * .8, b * .8);

        // Update duration
        delayPreciesly(&runtime, duration, waitTime);
    }
}


/**
 * Creates a diminishing flickering color in each eye semi-randomly.
 * Feature consideration: const array of predictable eye patterns instead of random.
 *
 * @param duration The duration of the firework effect in seconds.
 */
void lightEffectFireworks(int duration) {
    const int waitTime = 3;           // MS delay between effect ticks.
    const int flickerBumpAmount = 30; // Amount of 'flicker' the fireworks have.
    int delayForFirework = 0;         // cycle delay until next firework.
    int delayForFlicker = 0;          // cycke delay until next flicker.
    unsigned int runtime = 0;         // time this has gone for, approximately MS.

    // Left and right RGB s for fiddling later.
    int leftR = EYE_MIN, leftG = EYE_MIN, leftB = EYE_MIN;
    int rightR = EYE_MIN, rightG = EYE_MIN, rightB = EYE_MIN;

    // create diminishing flickering color per each eye, randomly.
    eyesOff();
    duration = convertToMilliseconds(duration);
    while(runtime < duration || duration <= 0) {

        // If our wait time is up, choose an eye randomly and create new firework.
        if(delayForFirework <= 0) {
            if(random(EYE_COUNT) == EYE_LEFT) {
                leftR = constrain(leftR + randomSpread(120, 100), EYE_MIN, EYE_MAX); 
                leftG = constrain(leftG + randomSpread(120, 100), EYE_MIN, EYE_MAX);
                leftB = constrain(leftB + randomSpread(120, 100), EYE_MIN, EYE_MAX);
            } else {
                rightR = constrain(rightR + randomSpread(120, 100), EYE_MIN, EYE_MAX); 
                rightG = constrain(rightG + randomSpread(120, 100), EYE_MIN, EYE_MAX); 
                rightB = constrain(rightB + randomSpread(120, 100), EYE_MIN, EYE_MAX);
            }

            // Reassign next wait time.
            delayForFirework = randomSpread(300, 280);
        }

        // Slowly fade out
        decay(&leftR, &leftG, &leftB, .991);
        decay(&rightR, &rightG, &rightB, .991);

        // Create flicker effect
        if(delayForFlicker <= 0) {
            bump(&leftR, &leftG, &leftB, flickerBumpAmount);
            bump(&rightR, &rightG, &rightB, flickerBumpAmount);

            delayForFlicker = 45;
        }
    
        // Update eyes
        leftRGB(leftR, leftG, leftB);
        rightRGB(rightR, rightG, rightB);

        // Update duration
        delayPreciesly(&runtime, duration, waitTime);
        --delayForFirework;
        --delayForFlicker;
    }
}


/**
 * Obstacle avoidance code. Has a few feastures, notably counts the
 * number of times similar actions are performs then spits in a near-180
 * degree arc in order to try and escape the pattern or trap. 
 */
void avoidObstacles() {
  const int speed = 30;                       
  const int turnDelay = 250;                   // How long we turn for each 'tick'
  const int wigglesBeforeTurnaround = 4;       // Number of oscilating wiggles before turning around
  const int similarTriesBeforeTurnaround = 8;  // Number of times to try turning in a consecutive direction
  const int centerLightUpperThreshold = 50;    // The sensor value at which we start caring.
  const int centerLightLowerThreshold = 8;     // Minimum value for us to consider using middle IR sensor
  const double motorPowerBias = .2;            // Value from 0 to 1. Higher values bias backwards more.

  // Use IR headlight to re-evaluate center IR input.
  updateCenterIRSensor();

  // Go forward if threshold is not exceeded.
  if (centerLightOnly < centerLightUpperThreshold 
  && analogRead(AmbientSenseCenter) > centerLightLowerThreshold) { //threshold from above 
    motors(speed,speed); //drive forward
    consecutiveWiggles = 0;
  } else {

    // Handle getting a motor stuck on something and making it continuously try to turn into the wall
    if(consecutiveLeft > similarTriesBeforeTurnaround) {
      consecutiveLeft = 0;
      motors(speed, -speed);
      delay(800);
      return;
    } else if(consecutiveRight > similarTriesBeforeTurnaround) {
      consecutiveRight = 0;
      motors(-speed, speed);
      delay(800);
      return;
    }
  
    // Hande turnaround when number of tries is exceeded.
    // Alternate between turning left and right to get out of a bind. 
    // Delays turn randomly within ~60-120 degrees from current.
    if(++consecutiveWiggles > wigglesBeforeTurnaround) {
      if(random(2) == ROTATION_LEFT) {
        motors(-speed, speed); // Turn left
      } else {
        motors(speed, -speed); // Turn right
      }

      // Perform action, update values.
      delay(random(600, 1000));
      consecutiveWiggles = 0; 
      return;
    }

    // Handle the left or right adjustment. Keep tabs of the number
    // of 'wiggles' as well, so we can do something about it if the
    // robot gets stuck.
    if(analogRead(AmbientSenseLeft) < analogRead(AmbientSenseRight)) {
      ++consecutiveLeft;
      consecutiveRight = 0;
      motors(-speed * (1 + motorPowerBias), speed * (1 - motorPowerBias));
    } else {
      ++consecutiveRight;
      consecutiveLeft = 0;
      motors(speed * (1 + motorPowerBias), -speed * (1 - motorPowerBias));
    }
    
    delay(turnDelay);
  }
}


/**
 * At short range, approaches small obstacles located in front of it.
 * Stops once it reaches a close enough distance to the object, waiting
 * for it to move or adjust.
 **/
void approachObstacles() {
  const int motorSpeed = 30;
  const int updateDelay = 15;
  const int centerLightThreshold = 50;

  // Use IR headlight to re-evaluate center IR input.
  updateCenterIRSensor();
  
  if (centerLightOnly < centerLightThreshold) { //threshold from above 
    motors(motorSpeed, motorSpeed); //drive forward
  } else {
    const int adjustThreshold = 2;   // Ambient sensor difference required to act.
    const double motorPowerBias = 0; // Value from 0 to 1.
    const double ambientLeft = analogRead(AmbientSenseLeft);
    const double ambientRight = analogRead(AmbientSenseRight);
    
    // Adjust to try and center the obstacle
    if(ambientLeft - ambientRight > adjustThreshold)
      motors(-motorSpeed * (1 - motorPowerBias), motorSpeed * (1 + motorPowerBias));
    else if (ambientRight - ambientLeft > adjustThreshold)
      motors(motorSpeed * (1 + motorPowerBias), -motorSpeed * (1 - motorPowerBias)); 
    else
      motors(0, 0);
    
    // Wait for next update.
    delay(updateDelay);
  }
}
