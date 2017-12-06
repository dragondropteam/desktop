/*

Wink Robot:  FunStuff  Rev01.01  12/2015

This code includes various "animation" things Wink can do. For example, sounds,
lighting sequences, dance moves, etc. Users are encouraged to build their own
"animations" and share their work on the forum.  http://forum.plumgeek.com/

This code was written by Kevin King and 
Dustin Soodak for Plum Geek LLC.
Portions from other open source projects where noted.
This code is licensed under:
Creative Commons Attribution-ShareAlike 2.0 Generic (CC BY-SA 2.0)
https://creativecommons.org/licenses/by-sa/2.0/

Visit http://www.plumgeek.com for Wink information.
Visit http://www.arduino.cc to learn about the Arduino.

*/

#include "FunStuff.hpp"


// ***************************************************
// Short Animations
// ***************************************************


void playStartChirp(void){//Ver. 1.0, Kevin King   
  // This is the startup sequence that plays when Wink is reset(put in begin())
  // feel free to edit this function to make your Wink do something different when he starts up
  eyesBlue(100);  // blue at 100 brightness
  beep(10);       // beep for 10 milliseconds
  delay(40);      // wait another 40 milliseconds
  eyesOff();      // turn the eyes back off
  
}


// ***************************************************
// end Short Animations
// ***************************************************






