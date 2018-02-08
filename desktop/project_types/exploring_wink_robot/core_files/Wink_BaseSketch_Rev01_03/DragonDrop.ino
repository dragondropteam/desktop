// Header inclusions: 
#include "DragonDrop.hpp"
#include "WinkHardware.hpp"
#include <Adafruit_NeoPixel.h>

// Defines
#define EYE_LEFT  0
#define EYE_RIGHT 1
#define EYE_COUNT 2
#define EYE_MIN 0
#define EYE_MAX 255
#define LIGHT_SENSOR_MAX 1000.0
#define LIGHT_SENSOR_MIN 0


// Global, file-specific variables
static double leftOuter, leftInner, rightInner, rightOuter;  
static int displayDelay = 0;
static const int displayDelayReset = 4;



/**
 * Scales the provided light sensor value to display visible for an eye.
 * 
 * @returns a constraned value between EYE_MIN and EYE_MAX for debug output of light sensors.
 */
static int scaleLightSensorForEyes(int toScale)
{
  return constrain(((1.0 / (double)toScale) * EYE_MAX) * 15, EYE_MIN, EYE_MAX);
}



/**
 * Scale light sensor information for the motors to be applied.
 *
 * @param sensorInput The value read from the sensor. Capped at LIGHT_SENSOR_MAX
 * @param motorMaxSpeed The speed to scale to 
 */
static int scaleLightSensorForMotor(double sensorInput, int motorMaxSpeed)
{
  double unscaledSpeedValue = 0; 
  if(sensorInput > LIGHT_SENSOR_MAX)
    sensorInput = LIGHT_SENSOR_MAX;

  unscaledSpeedValue = (double)sensorInput / LIGHT_SENSOR_MAX;;
  unscaledSpeedValue *= motorMaxSpeed; // max motor value
  return unscaledSpeedValue;
}



/**
 * Moves the wink robot back using the left motor. Blocks until complete.
 *
 * @param moveSpeed The speed at which the wink robot backs up.
 * @param backupTime Time, in Milliseconds, to perform the action for.
 */
static void backLeft(int moveSpeed, int backupTime)
{
  motors(-moveSpeed, moveSpeed / 2);
  delay(backupTime);
}



/**
 * Moves the wink robot back using the right motor. Blocks until complete.
 *
 * @param moveSpeed The speed at which the wink robot backs up.
 * @param backupTime Time, in Milliseconds, to perform the action for.
 */
static void backRight(int moveSpeed, int backupTime)
{
  motors(moveSpeed / 2, -moveSpeed);
  delay(backupTime);
}



/**
 * Reads sensor values into global values. 
 * Code via http://www.plumgeek.com/learn-to-code.html
 */
static void readLines(void){
  
  //declare "local" variables, which are only used inside this function
  int leftLineSensorValueOff, rightLineSensorValueOff; 

  //make sure all bottom IR light sources are off before we begin
  digitalWrite(LineLeftOuter,LOW);       
  digitalWrite(LineRightOuter,LOW);
  digitalWrite(LineLeftInner,LOW);                  
  digitalWrite(LineRightInner,LOW);
  delayMicroseconds(500);                //short delay to allow sensors to stabalize to new light levels

  //measure sensors with IR light sources turned off
  leftLineSensorValueOff=analogRead(LineSenseLeft);
  rightLineSensorValueOff=analogRead(LineSenseRight);

  //turn on the outer light sources, then re-read the sensors
  digitalWrite(LineLeftOuter,HIGH);      //turn on outer IR light sources
  digitalWrite(LineRightOuter,HIGH);  
  delayMicroseconds(500);                //short delay to allow sensors to stabalize to new light levels

  //measure with outers on, subtract out the dark readings from above
  leftOuter = analogRead(LineSenseLeft)-leftLineSensorValueOff;
  rightOuter = analogRead(LineSenseRight)-rightLineSensorValueOff;

  //turn off outer light sources, turn on inner light sources, then re-read the sensors
  digitalWrite(LineLeftOuter,LOW);       //turn off outer IR light sources
  digitalWrite(LineRightOuter,LOW);
  digitalWrite(LineLeftInner,HIGH);      //turn on inner IR light sources
  digitalWrite(LineRightInner,HIGH);
  delayMicroseconds(500);                //short delay to allow sensors to stabalize to new light levels

  //measure with inners on, subtract out the dark readings from above
  leftInner = analogRead(LineSenseLeft)-leftLineSensorValueOff;
  rightInner = analogRead(LineSenseRight)-rightLineSensorValueOff;

  //turn inner light sources back off
  digitalWrite(LineLeftInner,LOW);      //turn off inner IR light sources
  digitalWrite(LineRightInner,LOW);  
}



/**
 * Displays in the serial output the sensor information as both a graph and number.
 * Used for debug output with serial output.
 */
static void displayLightSensorOutput(void) {
  const int scalarBar = 100;
  for(int i = 0; i < 15; ++i) 
    Serial.println();

  // Draw graph
  for(int i = 0; i < 10; ++i)
  {
    int iterThreshold = (10 - i) * scalarBar;
    if(leftOuter > iterThreshold) { Serial.print("#"); Serial.print("\t");} else {Serial.print(" "); Serial.print("\t");}
    if(leftInner > iterThreshold) { Serial.print("#"); Serial.print("\t");} else {Serial.print(" "); Serial.print("\t");}
    if(rightInner > iterThreshold) { Serial.print("#"); Serial.print("\t");} else {Serial.print(" "); Serial.print("\t");}
    if(rightOuter > iterThreshold) { Serial.print("#"); Serial.print("\t");} else {Serial.print(" "); Serial.print("\t");}
    Serial.print("\n");
  }
  
  // Print out numbers
  Serial.println("l_out, l_inn, r_inn, r_out");
  Serial.print(leftOuter);Serial.print("\t");
  Serial.print(leftInner);Serial.print("\t");
  Serial.print(rightInner);Serial.print("\t");
  Serial.println(rightOuter);

  displayDelay = displayDelayReset;
}



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
 * Tell the Wink robot to follow a dark line on a white surface at minimum 1/4 inch (ideally 3/8 - 5/8) 
 * in thickness with turns no more tight than a circle with 1 inch radius.
 * 
 * @param speed The speed by which you follow the line. 30-35 is recommended. Lowest is 25, highest about 50.
 * @param showEyes wether or not to show the visual indication of sensors on the eyes.
 */
void sensorLineFollow(int speed, bool showEyes) {
  // Weights for inner vs outer sensors. Can be tuned as necessary.
  // Setting to 100 disregards outer sensors entirely, 0 disregards inner sensors.
  const double innerBiasPercentage = 50; // Value from 0 to 100
  const double weightInner = ((innerBiasPercentage/100)) * 2;
  const double weightOuter = (1 - (innerBiasPercentage/100)) * 2;
  
  // Update global values for sensors
  readLines();

  //// Uncomment for Debug graphs using serial output
  // if(displayDelay-- <= 0)
  //   displayLightSensorOutput();

  // Debug visuals using eyes
  if(showEyes) {
    leftRGB(0, scaleLightSensorForEyes(leftInner), scaleLightSensorForEyes(leftOuter));
    rightRGB(0, scaleLightSensorForEyes(rightInner), scaleLightSensorForEyes(rightOuter));
  }

  // Apply weights, and other tweakables.
  motors(scaleLightSensorForMotor((leftOuter * weightOuter + leftInner * weightInner) / 2, speed)
       , scaleLightSensorForMotor((rightOuter * weightOuter + rightInner * weightInner) / 2, speed));

  delay(10);
} 




/**
 * Causes the robot to travel in a straight line until it runs over a line, 
 * at which point it will back up and try to go forward at a different angle.
 * 
 * @param speed The speed by which the robot moves around.
 * @param showEyes wether or not to show the visual indication of sensors on the eyes.
 */
void sensorLineAvoid(int speed, bool showEyes) {
  const double combinedLeft = (leftOuter + leftInner) / 2;
  const double combinedRight = (rightOuter + rightInner) / 2;
  const int threshold = 500;
  const int backupTime = 400;

  // Update info. Consider state machine for reading.
  readLines();

  // Left sensor handling
  if(combinedLeft > threshold) {
    if(showEyes)
      leftPurple(combinedLeft / LIGHT_SENSOR_MAX * EYE_MAX);
  } else {
    if(showEyes)
      leftPurple(EYE_MIN);

    if(combinedRight > threshold)
      backRight(speed, backupTime);
  }

  // Right sensor handling
  if(combinedRight > threshold) {
    if(showEyes)
      rightPurple(combinedRight / LIGHT_SENSOR_MAX * EYE_MAX);
  } else {
    if(showEyes)
      rightPurple(EYE_MIN);
    
    if(combinedLeft > threshold)
      backLeft(speed, backupTime); 
  }

  // Default case handling.
  if(combinedRight > threshold || combinedLeft > threshold)
    motors(speed, speed);
   else
    motors(0,0);
}
