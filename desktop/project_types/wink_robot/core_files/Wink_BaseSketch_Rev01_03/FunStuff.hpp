/*

Wink Robot:  FunStuff.h  Rev01.01  12/2015

This code includes various fun and animated things Wink can do. For example, sounds,
lighting sequences, dance moves, etc. Users are encouraged to build their own
"fun stuff" examples and share their work on the forum.  http://forum.plumgeek.com/

This code was written by Kevin King and 
Dustin Soodak for Plum Geek LLC.
Portions from other open source projects where noted.
This code is licensed under:
Creative Commons Attribution-ShareAlike 2.0 Generic (CC BY-SA 2.0)
https://creativecommons.org/licenses/by-sa/2.0/

Visit http://www.plumgeek.com for Wink information.
Visit http://www.arduino.cc to learn about the Arduino.

*/


// THIS IS THE FUNSTUFF "HEADER" FILE. IF YOU WANT TO KNOW HOW
// A FUNCTION WORKS, LOOK FOR IT IN THE FunStuff TAB. (THE
// TAB THAT DOES NOT HAVE A ".h" AFTER IT).


#ifndef FUNSTUFF_H
#define FUNSTUFF_H


// ***************************************************
// Global Variables - Can be accessed from within any function
// ***************************************************

int presentSpeedRight, presentSpeedLeft;      //remembers present motor speed
char eyesColor[6];                            //holder array for present eye color
char eyesPrevColor[6];                        //holder array for previous eye color when changing eye color

// ***************************************************
// end Global Variables
// ***************************************************

// ***************************************************
// Short Animations
// ***************************************************

extern void playStartChirp(void); //put in begin() to indicate that unit has restarted.


// ***************************************************
// end Short Animations
// ***************************************************





#endif

