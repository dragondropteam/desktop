// Header inclusions: 
#include "DragonDrop.hpp"
#include "WinkHardware.hpp"
#include <Adafruit_NeoPixel.h>



// Global, file-specific variables
static double leftOuter, leftInner, rightInner, rightOuter;  
static int displayDelay = 0;
static const int displayDelayReset = 4;



static int scaleForSensor(int i)
{
  return constrain(((1.0 / (double)i) * 255) * 15, 0, 255);
}



static int scaleForMotor(double sensorInput, int motorMaxSpeed)
{
  // 1000 is used because that is the max from a given sensor.
  if(sensorInput > 1000)
    sensorInput = 1000;
    
  double val = (double)sensorInput / 1000;
  val *= motorMaxSpeed; // max motor value
  return val;
}



static void readLines(void){ // Via http://www.plumgeek.com/learn-to-code.html
  
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
 * Displays in the serial output the sensor information as both a graph and 
 */
static void displaySensorOutput(void) {
  const int scalarBar = 100;
  for(int i = 0; i < 15; ++i) 
    Serial.println();

  for(int i = 0; i < 10; ++i)
  {
    int iterThreshold = (10 - i) * scalarBar;
    if(leftOuter > iterThreshold) { Serial.print("#"); Serial.print("\t");} else {Serial.print(" "); Serial.print("\t");}
    if(leftInner > iterThreshold) { Serial.print("#"); Serial.print("\t");} else {Serial.print(" "); Serial.print("\t");}
    if(rightInner > iterThreshold) { Serial.print("#"); Serial.print("\t");} else {Serial.print(" "); Serial.print("\t");}
    if(rightOuter > iterThreshold) { Serial.print("#"); Serial.print("\t");} else {Serial.print(" "); Serial.print("\t");}
    Serial.print("\n");
  }
  
  Serial.println("l_out, l_inn, r_inn, r_out");
  Serial.print(leftOuter);Serial.print("\t");
  Serial.print(leftInner);Serial.print("\t");
  Serial.print(rightInner);Serial.print("\t");
  Serial.println(rightOuter);

  displayDelay = displayDelayReset;
}



void sensorLineFollow(int duration){
  // NOTE: The lower limit seems to be 30 or so.
  // Radius 1 inch max: 50
  // Tuning speed: 40
  const int speedOfMovement = 30;
  
  // Weights for inner vs outer sensors
  const double innerBiasPercentage = 50; 
  const double weightInner = ((innerBiasPercentage/100)) * 2;
  const double weightOuter = (1 - (innerBiasPercentage/100)) * 2;
  const double scaleInner = 1.0;
  const double scaleOuter = 1.0;
  
  readLines();

  //// Debug graphs
  // if(displayDelay-- <= 0)
  // displaySensorOutput();

  //// Debug visuals
  //leftRGB(0, scaleForSensor(leftInner), scaleForSensor(leftOuter));
  //rightRGB(0, scaleForSensor(rightInner), scaleForSensor(rightOuter));

  motors(scaleForMotor((leftOuter * weightOuter * scaleOuter + leftInner * weightInner * scaleInner) / 2, speedOfMovement)
       , scaleForMotor((rightOuter * weightOuter  * scaleOuter+ rightInner * weightInner * scaleInner) / 2, speedOfMovement));

  delay(10);
} //end of loop() 



