/*

Wink Robot:  WinkHardware  Rev01.02  12/2015

This code was written by Kevin King and 
Dustin Soodak for Plum Geek LLC.
Portions from other open source projects where noted.
This code is licensed under:
Creative Commons Attribution-ShareAlike 2.0 Generic (CC BY-SA 2.0)
https://creativecommons.org/licenses/by-sa/2.0/

Visit http://www.plumgeek.com for Wink information.
Visit http://www.arduino.cc to learn about the Arduino.

*/

#include "WinkHardware.h"
#include <Adafruit_NeoPixel.h>
#include <EEPROM.h>

// ***************************************************
// Wink Hardware Initialization
// ***************************************************

void hardwareBegin(void){//Ver. 1.0, Kevin King

  pinMode(MotorDirection_Left, OUTPUT);
  pinMode(MotorDirection_Right, OUTPUT);
  analogWrite(MotorDrive_Left,0);  //make sure motors are stopped
  analogWrite(MotorDrive_Right,0); //make sure motors are stopped
  pinMode(Beeper,OUTPUT);
  digitalWrite(Beeper, LOW);
  pinMode(HeadLight,OUTPUT);
  digitalWrite(HeadLight, LOW);
  pinMode(LineLeftOuter,OUTPUT);
  digitalWrite(LineLeftOuter, LOW);
  pinMode(LineLeftInner,OUTPUT);
  digitalWrite(LineLeftInner, LOW);
  pinMode(LineRightOuter,OUTPUT);
  digitalWrite(LineRightOuter, LOW);
  pinMode(LineRightInner,OUTPUT);
  digitalWrite(LineRightInner, LOW);
  pinMode(ExtIO, INPUT_PULLUP);
  pinMode(Light_Bus, OUTPUT);  
  digitalWrite(Light_Bus, LOW);
  
  pinMode(Button,INPUT);
  eyesOff();
  Serial.begin(SERIAL_SPEED);  

}

// ***************************************************
// End of Wink Hardware Initialization
// ***************************************************


// ***************************************************
// Wink General Functionality
// ***************************************************

char buttonPressed(void){//Ver. 1.0, Dustin Soodak
  return (digitalRead(Button)==1);  // returns 1 (or "true") if button is being pressed. 
                                    // returns 0 (or "false") if not pressed.
}

void waitForButton(void){  // Ver 1.0, Kevin King
  while(!buttonPressed()){          // waits for button to be pressed
    //do nothing (while waiting for button press)
  }
}

void beep(int beepTime){  // Ver 1.0, Kevin King
  if ((lastBeep+50) > millis()){
    delay((lastBeep+70)-millis());
  }
  if (beepTime > MAX_BEEP_TIME){
    beepTime = MAX_BEEP_TIME;
  }
  if (beepTime < MIN_BEEP_TIME){
    beepTime = MIN_BEEP_TIME;
  }
  digitalWrite(Beeper, HIGH);
  delay(beepTime);
  digitalWrite(Beeper, LOW);
  lastBeep = millis();
}

void beepOn(void){
  digitalWrite(Beeper, HIGH);
}

void beepOff(void){
  digitalWrite(Beeper, LOW);
}

void accelerateMotors(int startSpeed, int finalSpeed, int duration){  // Ver 1.0 Kevin King
  int i;
  int stepCount;
  int stepTime;
  stepCount = abs(finalSpeed-startSpeed);
  stepTime = duration/stepCount;

  if (finalSpeed>startSpeed){                     //if final speed > start speed
      for (i=startSpeed; i<= finalSpeed; i++){    //start low and increment up
        motors(i,i);
        delay(stepTime);
      }    
  }
  else {
      for (i=startSpeed; i>= finalSpeed; i--){   //else start high and decrement down
        motors(i,i);
        delay(stepTime);
      }    
  }
}

void spinLeft(int spinSpeed){
  motors(-spinSpeed,spinSpeed);
}

void spinRight(int spinSpeed){
  motors(spinSpeed,-spinSpeed);
}

void beStill(void){
  motors(0,0);
}

void motors(int LeftMotorSpeed, int RightMotorSpeed){//Ver. 1.1, Dustin Soodak

  if(LeftMotorSpeed>MOTOR_MAX)
    LeftMotorSpeed=MOTOR_MAX;
  if(LeftMotorSpeed<-MOTOR_MAX)
    LeftMotorSpeed=-MOTOR_MAX;
  if(RightMotorSpeed>MOTOR_MAX)
    RightMotorSpeed=MOTOR_MAX;
  if(RightMotorSpeed<-MOTOR_MAX)
    RightMotorSpeed=-MOTOR_MAX;

  if(LeftMotorSpeed<0){
    digitalWrite(MotorDirection_Left,0);
    //Serial.print("left - ");
  }
  else{
    digitalWrite(MotorDirection_Left,1);
  }
  if(RightMotorSpeed<0){
    digitalWrite(MotorDirection_Right,0);
  }
  else{
    digitalWrite(MotorDirection_Right,1);
  }  
  analogWrite(MotorDrive_Left,abs(LeftMotorSpeed));
  analogWrite(MotorDrive_Right,abs(RightMotorSpeed));

  presentSpeedRight = RightMotorSpeed;     //update global variables
  presentSpeedLeft = LeftMotorSpeed;       //update global variables

}

// ***************************************************
// End of Wink General Functionality
// ***************************************************


// ***************************************************
// Simple Read Functions (returns simple values for sensors)
// ***************************************************
  //returns 8-bit values (0 to 255) for sensor reads
byte simpleLightLevelRight(void){
  int level;
  char x;
  char eyesWereOn=0;
  for(x=1;x<=6;x++){
    if(eyesColor[x]>0){
      eyesWereOn=1;
      Serial.print("o");
    }
  }
  if(eyesWereOn!=0){
    eyesOff();
    delay(1);  // allow sensor to stabalize
  }
  level = analogRead(AmbientSenseRight);
  level = level/4;
  if(eyesWereOn!=0){
    eyesPrevCol();
  }
  return level;
}

byte simpleLightLevelLeft(void){
  int level;
  char x;
  char eyesWereOn=0;
  for(x=1;x<=6;x++){
    if(eyesColor[x]>0){
      eyesWereOn=1;
      Serial.print("o");
    }
  }
  if(eyesWereOn!=0){
    eyesOff();
    delay(1);  // allow sensor to stabalize
  }
  level = analogRead(AmbientSenseLeft);
  level = level/4;
  if(eyesWereOn!=0){
    eyesPrevCol();
  }
  return level;
}

  //extern char simpleLeftLightLevel(void);
  //extern char simpleCenterLightLevel(void);

// ***************************************************
// end Simple Read Functions
// ***************************************************


// ***************************************************
// Eye Functions
// ***************************************************

void eyesOff(void){//Ver. 1.0, Kevin King    //turns off a specific pixel
  setPixelRGB(0,0,0,0);                             //turn off left eye
  setPixelRGB(1,0,0,0);                             //turn off right eye
}

void leftOff(void){//Ver. 1.0, Kevin King    //turns off a specific pixel
  setPixelRGB(1,0,0,0);                             //turn off left eye
}

void rightOff(void){//Ver. 1.0, Kevin King    //turns off a specific pixel
  setPixelRGB(0,0,0,0);                             //turn off right eye
}

void eyesPrevCol(void){
  setPixelRGB(1,eyesPrevColor[1],eyesPrevColor[0],eyesPrevColor[2]);  //recall left eye color from last time it was updated
  setPixelRGB(0,eyesPrevColor[4],eyesPrevColor[3],eyesPrevColor[5]);  //recall right eye color from last time it was updated                          
}

void leftOn(void){
  setPixelRGB(1,eyesColor[1],eyesColor[0],eyesColor[2]);  //recall left eye color from last time it was updated                        
}

void rightOn(void){
  setPixelRGB(0,eyesColor[4],eyesColor[3],eyesColor[5]);  //recall right eye color from last time it was updated                          
}

// Make eyes a random color
void randomEyes(void){//Ver. 1.0, Kevin King             //Sets the pair of eyes to a random color
  int red, green, blue;
  red = random(120);
  green = random(120);
  blue = random(120);
  eyesRGB(red,green,blue);
}

void randomLeft(void){//Ver. 1.0, Kevin King             //Sets the pair of eyes to a random color
  int red, green, blue;
  red = random(120);
  green = random(120);
  blue = random(120);
  leftRGB(red,green,blue);
}

void randomRight(void){//Ver. 1.0, Kevin King             //Sets the pair of eyes to a random color
  int red, green, blue;
  red = random(120);
  green = random(120);
  blue = random(120);
  rightRGB(red,green,blue);
}


// Easy functions for common light colors
void eyesRed(byte brightness){
  eyesRGB(brightness,0,0);
}

void eyesGreen(byte brightness){
  eyesRGB(0,brightness,0);
}

void eyesBlue(byte brightness){
  eyesRGB(0,0,brightness);
}

void eyesPurple(byte brightness){
  byte n;
  n=brightness/2;
  eyesRGB(n,0,brightness);
}

void eyesPink(byte brightness){
  byte n;
  n=brightness/2;
  eyesRGB(brightness,0,n);
}

void eyesYellow(byte brightness){
  eyesRGB(brightness,brightness,0);
}

void eyesOrange(byte brightness){
  byte n;
  n=brightness/4;
  eyesRGB(brightness,n,0);
}

void eyesCyan(byte brightness){
  eyesRGB(0,brightness,brightness);
}

void eyesWhite(byte brightness){
  eyesRGB(brightness,brightness,brightness);
}

//left eye colors
void leftRed(byte brightness){
  leftRGB(brightness,0,0);
}

void leftGreen(byte brightness){
  leftRGB(0,brightness,0);
}

void leftBlue(byte brightness){
  leftRGB(0,0,brightness);
}

void leftPurple(byte brightness){
  byte n;
  n=brightness/2;
  leftRGB(n,0,brightness);
}

void leftPink(byte brightness){
  byte n;
  n=brightness/2;
  leftRGB(brightness,0,n);
}

void leftYellow(byte brightness){
  leftRGB(brightness,brightness,0);
}

void leftOrange(byte brightness){
  byte n;
  n=brightness/4;
  leftRGB(brightness,n,0);
}

void leftCyan(byte brightness){
  leftRGB(0,brightness,brightness);
}

void leftWhite(byte brightness){
  leftRGB(brightness,brightness,brightness);
}

//right eye colors
void rightRed(byte brightness){
  rightRGB(brightness,0,0);
}

void rightGreen(byte brightness){
  rightRGB(0,brightness,0);
}

void rightBlue(byte brightness){
  rightRGB(0,0,brightness);
}

void rightPurple(byte brightness){
  byte n;
  n=brightness/2;
  rightRGB(n,0,brightness);
}

void rightPink(byte brightness){
  byte n;
  n=brightness/2;
  rightRGB(brightness,0,n);
}

void rightYellow(byte brightness){
  rightRGB(brightness,brightness,0);
}

void rightOrange(byte brightness){
  byte n;
  n=brightness/4;
  rightRGB(brightness,n,0);
}

void rightCyan(byte brightness){
  rightRGB(0,brightness,brightness);
}

void rightWhite(byte brightness){
  rightRGB(brightness,brightness,brightness);
}

/// lower level functions to control eyes
void eyesRGB(byte red, byte green, byte blue){//Ver. 1.0, Kevin King     //makes eyes the given color, automatically calls refreshPixels()
  updateEyesPrevColor();
  setPixelRGB(1,green,red,blue);                            //set left eye
  setPixelRGB(0,green,red,blue);                            //set right eye
  eyesColor[0]=red; eyesColor[1]=green; eyesColor[2]=blue;  //save present left eye color to holding array eyesColor
  eyesColor[3]=red; eyesColor[4]=green; eyesColor[5]=blue;  //save present right eye color to holding array eyesColor
}

void leftEye(byte Red, byte Green, byte Blue){//Ver. 1.0, Kevin King     //makes left eye the given color, automatically calls refreshPixels()
  updateEyesPrevColor();
  setPixelRGB(1,Green,Red,Blue);                            //set left eye
  eyesColor[0]=Red; eyesColor[1]=Green; eyesColor[2]=Blue;  //save present left eye color to holding array eyesColor
}

void rightEye(byte Red, byte Green, byte Blue){//Ver. 1.0, Kevin King     //makes right eye the given color, automatically calls refreshPixels()
  updateEyesPrevColor();
  setPixelRGB(0,Green,Red,Blue);                            //set right eye
  eyesColor[3]=Red; eyesColor[4]=Green; eyesColor[5]=Blue;  //save present right eye color to holding array eyesColor
}

void leftRGB(byte Red, byte Green, byte Blue){//Ver. 1.0, Kevin King     //makes left eye the given color, automatically calls refreshPixels()
  updateEyesPrevColor();
  setPixelRGB(1,Green,Red,Blue);                            //set left eye
  eyesColor[0]=Red; eyesColor[1]=Green; eyesColor[2]=Blue;  //save present left eye color to holding array eyesColor
}

void rightRGB(byte Red, byte Green, byte Blue){//Ver. 1.0, Kevin King     //makes right eye the given color, automatically calls refreshPixels()
  updateEyesPrevColor();
  setPixelRGB(0,Green,Red,Blue);                            //set right eye
  eyesColor[3]=Red; eyesColor[4]=Green; eyesColor[5]=Blue;  //save present right eye color to holding array eyesColor
}

void updateEyesPrevColor(void){
  char index;
  for(index=0;index<6;index++){
    if(eyesPrevColor[index]!=eyesColor[index])eyesPrevColor[index]=eyesColor[index];
  }
  //if(eyesPrevColor[1]!=eyesColor[1])eyesPrevColor[1]=eyesColor[1];
  //eyesPrevColor[0]=eyesColor[0]; eyesPrevColor[1]=eyesColor[1]; eyesPrevColor[2]=eyesColor[2];  //save present left eye color to holding array eyesPrevColor
  //eyesPrevColor[3]=eyesColor[3]; eyesPrevColor[4]=eyesColor[4]; eyesPrevColor[5]=eyesColor[5];  //save present right eye color to holding array eyesPrevColor
}

// ***************************************************
// end Eye Functions
// ***************************************************



// ***************************************************
// Wink Eye "NeoPixel" Functions
// ***************************************************

// These functions use the Adafruit NeePixel Libraray https://github.com/adafruit/Adafruit_NeoPixel

Adafruit_NeoPixel pixels = Adafruit_NeoPixel(NUM_PIXELS, Light_Bus, NEO_GRB + NEO_KHZ800);

void setPixelRGB(int Pixel, int Red, int Green, int Blue){//Ver. 1.0, Dustin Soodak
  if(Pixel>1)
    Pixel=1;
  if(Pixel<0)
    Pixel=0;
  pixels.setPixelColor(Pixel, pixels.Color(Red,Green,Blue));
  pixels.show();
}

void setAllPixelsRGB(int Red, int Green, int Blue){//Ver. 1.0, Dustin Soodak
  char i;
  for(i=0;i<NUM_PIXELS;i++){
    pixels.setPixelColor(i, pixels.Color(Red,Green,Blue)); 
  }
  pixels.show();   
}

void refreshPixels(void){//Ver. 1.0, Dustin Soodak
  pixels.show();  
}

// ***************************************************
// End of Wink Eye "NeoPixel" Functions
// ***************************************************


// ***************************************************
// IR
// ***************************************************

void TxIR(unsigned char *Data, int Length){//Ver. 1.2, Dustin Soodak
    int i;
    char j;
    const uint16_t Freq=38000,UsOn=10; //For R2=2k pull up, 8 us delay before pin falls. Inputs (28000,5) give a decent square wave in this case. 
    RxIRStop();
    //EnableIROutputs(1);
    ModulateIR(Freq,UsOn);    //start sending 38 kHz carrier
    delayMicroseconds(9000);
    //EnableIROutputs(0);               //EnableIROutputs(0) turns off IR 38khz out but this makes receiver voltage go high.
    ModulateIR(Freq, 0);      //stop sending 38 kHz carrier
    delayMicroseconds(4500);
    //EnableIROutputs(1);
    ModulateIR(Freq,UsOn);    //start sending 38 kHz carrier
    delayMicroseconds(455); //520
    for(i=0;i<Length;i++){      
      for(j=0;j<8;j++){
        //EnableIROutputs(0);
        ModulateIR(Freq, 0);      //stop sending 38 kHz carrier
        if((Data[i])&(1<<j))
          delayMicroseconds(1620);  //1610
        else
          delayMicroseconds(510);   //580
        //EnableIROutputs(1);
        ModulateIR(Freq,UsOn);    //start sending 38 kHz carrier
        delayMicroseconds(455);  //520
      }      
    }//end for(i=0;i<Length;i++)    
    //ModulateIR(38000, 0);
    ModulateIR(Freq, 0);      //stop sending 38 kHz carrier
    //EnableIROutputs(1); 
}//end TxIR()

void ModulateIR(unsigned int Frequency, unsigned int OnTime){//Ver. 1.0, Dustin Soodak 
  //ModulateIR(38000,6) seems to produce best square wave for 38kHz.
  //Frequency is in Hz
  //OnTime is in units of UsOn
  uint16_t temp;
  uint16_t period,dutycycle;
  uint8_t prescalerbits;
  if(OnTime>100)
    OnTime=100;
  if (F_CPU/Frequency/2>=0x10000){
    if(F_CPU/Frequency/2>=0x10000*8){
        prescalerbits=0b011;//prescaler 64
        period=F_CPU/Frequency/(2*16);
        dutycycle=F_CPU/1000000*OnTime/2/64;               
    }
    else{
      prescalerbits = 0b010;// prescaler 8
      period=F_CPU/Frequency/(2*8);
      dutycycle=F_CPU/1000000*OnTime/2/8;
    }
  }
  else{
    prescalerbits = 0b001;  //on but no prescaling
    period=F_CPU/Frequency/(2*1);
    dutycycle=F_CPU/1000000*OnTime/2/1;
  }
  if(OnTime==0){
    TCCR1A=0;
    TCCR1B=0;
    pinMode(Beeper,INPUT);
    
    //Serial.println("off");
  }
  else{
    TCCR1B&=~0b00000111;//turn off timer    
    ICR1=period;
    OCR1B=dutycycle;
    TCCR1A = (0b10<<4) | 0b10;//COM1B1 COM1B0, and WGM11 WGM10
    TCCR1B = (0b10<<3) | prescalerbits;//WGM13 WGM12, and off/(on with prescaler)    
  }
}

void TxIRKey(byte key){//Ver. 1.0, Kevin King
  if(key<1){
    // do nothing
  }
  else if(key>21){
    // do nothing
  }
  else{     // actually send IR key if it was within correct range
  key-=1;   //subract 1 from key number so it matches array IRRemoteButtons
  irData[0]=0x00;irData[1]=0xFF;     // all remote keys begin with 0x00, 0xFF
  irData[2]=IRRemoteButtons[key][0]; // add 3rd value
  irData[3]=IRRemoteButtons[key][1]; // add 4th value
  TxIR(irData,4);                    // actually transmit via any enabled IR sources
  }
}//end TxIRKey()

int IRTransitionCount=0;
char IRBitNum=0,IRByte=0,IRNumOfBytes=0;
unsigned char IRBytes[20];
uint16_t IRPrevTime=0,IRTime;
uint32_t MsAtLastIR=0;//used for end of communication timeout
volatile char IRReceiving=0;
char IRActive=0;
char IRMaxByteCount=4;


void RxIRRestart(char BytesToLookFor){//Ver. 1.2, Dustin Soodak
  int i;
  detachInterrupt(1);//interrupt 1 is I/O 3 which is _38kHz_R
  TCCR1A = 0x00;          // COM1A1=0, COM1A0=0 => Disconnect Pin OC1 from Timer/Counter 1 -- PWM11=0,PWM10=0 => PWM Operation disabled
  // ICNC1=0 => Capture Noise Canceler disabled -- ICES1=0 => Input Capture Edge Select (not used) -- CTC1=0 => Clear Timer/Counter 1 on Compare/Match
  // CS12=0 CS11=1 CS10=1 => Set prescaler to clock/64
  TCCR1B = 0x03;          // 8MHz clock with prescaler 0x03 means TCNT1 increments every 8uS
  // ICIE1=0 => Timer/Counter 1, Input Capture Interrupt Enable -- OCIE1A=0 => Output Compare A Match Interrupt Enable -- OCIE1B=0 => Output Compare B Match Interrupt Enable
  // TOIE1=0 => Timer 1 Overflow Interrupt Enable
  TIMSK1 = 0x00;          
  pinMode(_38kHz_Rx, INPUT_PULLUP);  
  IRReceiving=0;  
  IRTransitionCount=0;
  IRPrevTime=0;
  MsAtLastIR=0;IRBitNum=0;IRByte=0;IRNumOfBytes=0;
  IRActive=1;
  IRMaxByteCount=BytesToLookFor;
  attachInterrupt(1, IRHandler, CHANGE);//interrupt 1 is I/O 3 which is _38kHz_Rx  
}
void RxIRStop(void){//Ver. 1.2, Dustin Soodak
  detachInterrupt(1);//interrupt 1 is I/O 3 which is _38kHz_Rx    
  TCCR1B=0;//turn off timer        
  pinMode(_38kHz_Rx, INPUT_PULLUP);  
  
  MsAtLastIR=0;//so IRHandler() recognizes it as first falling edge of next transition
  IRReceiving=0;
  IRActive=0;
  IRTransitionCount=0;//so IsIRDone() does not expect anything just because RxIRStop() called.
}

// Infrared transmit and recieve functions are based on:
//http://playground.arduino.cc/Code/InfraredReceivers by Paul Malmsten 
//https://github.com/z3t0/Arduino-IRremote by Ken Shirriff

void IRHandler(void){//Ver. 2.0, Dustin Soodak, Kevin King
  //using interrupt 1 is I/O 3 which is _38kHz_Rx  
  int16_t dTime;
  char Level;
  noInterrupts();
  IRTime=TCNT1;
   
  Level=digitalRead(_38kHz_Rx);  

  if(!Level){//note; 38khz IR signal makes level go low
    IRReceiving=1;
  }
  if((millis()-MsAtLastIR>15) && (IRNumOfBytes<IRMaxByteCount)) {//should never be more than 9 inside valid signal
    TCNT1=0;
    IRPrevTime=0;
    IRTransitionCount=0;
    IRBitNum=0;IRNumOfBytes=0;IRByte=0;  
    //IRReceiving=1;  
  }  
  else{  
    if(IRTime>IRPrevTime)
      dTime=IRTime-IRPrevTime;
    else
      dTime=0xFFFF-IRPrevTime+1+IRTime;   
    IRPrevTime=IRTime;    
    dTime=dTime<<3;
    if(IRTransitionCount>=3 && (IRTransitionCount&1)){//should be high
      if(dTime>1000){
        IRByte|=(1<<IRBitNum); 
      }
      if(dTime<300){//error
         IRNumOfBytes=0;
         IRReceiving=0;
      }
      IRBitNum++;
      if(IRBitNum>7){
        if(IRNumOfBytes<IRMaxByteCount){
          IRBytes[IRNumOfBytes]=IRByte;
          IRNumOfBytes++;
        }        
        else{
           IRReceiving=0;           
        }
        IRBitNum=0; 
        IRByte=0;               
      }      
    }
    IRTransitionCount++;
  }
  MsAtLastIR=millis();
  interrupts();
}

char IsIRDone(void){//Ver. 1.0, Dustin Soodak
  return ((millis()-MsAtLastIR>40 || IRNumOfBytes==IRMaxByteCount) && IRTransitionCount);  
}

//Note: first and second bytes are always 0x00 and 0xFF. IRRemoteButtons[] contains the third and fourth bytes.
const byte IRRemoteButtons[][2]={
  {0x0C,0xF3},//"1" key: 1
  {0x18,0xE7},//"2" key: 2
  {0x5E,0xA1},//"3" key: 3
  {0x08,0xF7},//"4" key: 4
  {0x1C,0xE3},//"5" key: 5
  {0x5A,0xA5},//"6" key: 6
  {0x42,0xBD},//"7" key: 7
  {0x52,0xAD},//"8" key: 8
  {0x4A,0xB5},//"9" key: 9
  {0x16,0xE9},//"0" key: 10
  {0x40,0xBF},//"FORWARD" key: 11
  {0x07,0xF8},//"LEFT" key: 12
  {0x09,0xF6},//"RIGHT" key: 13
  {0x19,0xE6},//"BACKWARD" key: 14
  {0x45,0xBA},//"POWER" key: 15
  {0x46,0xB9},//"PLUM LOGO" key: 16
  {0x47,0xB8},//"MENU" key: 17
  {0x44,0xBB},//"A" key: 18
  {0x43,0xBC},//"B" key: 19
  {0x15,0xEA},//"PLAY" key: 20
  {0x0D,0xF2}//"X" key: 21
};
byte GetIRButton(void){//Ver. 2.0, Dustin Soodak, Kevin King
  byte ButtonNumber=0,i;

    for(i=0;i<sizeof(IRRemoteButtons)/2;i++){
      if(IRBytes[2]==IRRemoteButtons[i][0] && IRBytes[3]==IRRemoteButtons[i][1]){
        ButtonNumber=i+1;
        break; 
      }
    } 

    return ButtonNumber;       //return the button number that was pressed
    
}// end GetIRButton()

// ***************************************************
// end IR
// ***************************************************


// ***************************************************
// Timer
// ***************************************************

int32_t Timer_InitTime=0,Timer_StoppedTime=0;
char Timer_Running=0;
int32_t GetTime(void){//Ver. 1.0, Dustin Soodak
  if(Timer_Running){
    return millis()-(uint32_t)Timer_InitTime;
  }
  else
    return Timer_StoppedTime;
}
void RestartTimer(void){//Ver. 1.0, Dustin Soodak
  Timer_InitTime=millis();
  Timer_Running=1;
}
void StopTimer(void){//Ver. 1.0, Dustin Soodak
  if(Timer_Running){
    Timer_StoppedTime=millis()-(uint32_t)Timer_InitTime;
    Timer_Running=0;
  }
}

// ***************************************************
// end Timer
// ***************************************************





