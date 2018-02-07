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
 * A function for debugging IR sensor values using ASCII in the 
 * serial output.
 */
static void displayIRSensorOutput(void) { 
  const int scalarBar = 5; 
  for(int i = 0; i < 8; ++i)  
    Serial.println(); 
 
  // Draw graph 
  for(int i = 0; i < 10; ++i) 
  { 
    int iterThreshold = (10 - i) * scalarBar; 
    if(ambientSensorLeft > iterThreshold) { Serial.print(" #"); Serial.print("\t");} else {Serial.print(" "); Serial.print("\t");} 
    if(ambientSensorCenter > iterThreshold) { Serial.print("#"); Serial.print("\t");} else {Serial.print(" "); Serial.print("\t");} 
    if(ambientSensorRight > iterThreshold) { Serial.print("#"); Serial.print("\t");} else {Serial.print(" "); Serial.print("\t");} 
    Serial.print("\n"); 
  } 
   
  // Print out numbers 
  Serial.println("ir_L,   ir_C,   ir_R"); 
  Serial.print(ambientSensorLeft);Serial.print("\t"); 
  Serial.print(ambientSensorCenter);Serial.print("\t"); 
  Serial.println(ambientSensorRight);
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
 * Has wink drive about and interact with the world using the
 * ambient IR sensors. While there are tutorials that use the
 * IR headliught for barrier avoidance, they do not cover the
 * other side ambient sensors well at all, and the material 
 * wink is starting to avoid comes a lot more into play.
 */
void avoidObstacles(){
  delay(100); //delay to allow for wink to go forward for a bit.

  // Note: Maximum sensor value is 1024.
  // Note: Headlight only impacts center sensor value
  ambientSensorLeft = analogRead(AmbientSenseLeft); //read sensor
  ambientSensorCenter = analogRead(AmbientSenseCenter); //read sensor
  ambientSensorRight = analogRead(AmbientSenseRight); //read sensor

  // IR Sensor initial scale and bias values
  const double skew = .8;
  const double numPow = 4;

  // Min speed and max speed in forward and backward 
  const double minSpeed = -30;
  const double maxSpeed = 30;
  const double motorOutputLinearScalar = 10;

  // If abs val below bump thresh, apply scalar to try and get it out.
  const double minMotorThreshold = 20;
  const double smallMotorValueScalar = 3;

  // Initial calculation for scaling based on motor input
  const int left_val = scaleForMotor(pow(ambientSensorLeft, numPow)* skew + pow(ambientSensorCenter, numPow) * (1 - skew), numPow, maxSpeed - minSpeed);
  const int right_val = scaleForMotor(pow(ambientSensorRight, numPow) * skew + pow(ambientSensorCenter, numPow) * (1 - skew), numPow, maxSpeed - minSpeed);

  // Output values
  double leftMotorOutput = minSpeed + right_val * motorOutputLinearScalar;
  double rightMotorOutput =  minSpeed + left_val * motorOutputLinearScalar;

  // Scale values if they're too close to 0.
  if(abs(leftMotorOutput) < minMotorThreshold)
    leftMotorOutput *= smallMotorValueScalar;

  if(abs(rightMotorOutput) < minMotorThreshold)
    rightMotorOutput *= smallMotorValueScalar;

  // Cap values to ensure they never exceed a max.
  const int absoluteSpeedCap = 80;
  leftMotorOutput = constrain(leftMotorOutput, -absoluteSpeedCap, absoluteSpeedCap);
  rightMotorOutput = constrain(rightMotorOutput, -absoluteSpeedCap, absoluteSpeedCap);

  // Apply values
  motors(leftMotorOutput, rightMotorOutput);  

  // Debug output if necessary.
  // Note: Do not use the LEDs. As they are LEDs, they 
  // are capable of messing with the IR sensor values.
  //displayIRSensorOutput();
}


