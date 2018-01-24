// Header inclusions: 
#include "DragonDrop.hpp"
#include "WinkHardware.hpp"
#include <Adafruit_NeoPixel.h>

// Defines
#define EYE_LEFT  0
#define EYE_RIGHT 1



// Returns an int that is based on the central number, 
// plus or minus the range provided. Not clamped at all.
static int rRange(int centralNumber, int range) {
    return random(centralNumber - range, centralNumber + range);
}


// Delays a specific ammount and does not exceed it.
// If max is 0, we don't bother counting, we just delay by amt.
// MODIFIES INPUTS: curr
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


// Decays by a fixed . On account of int truncation, 
// any s will cut off at zero.
// MODIFIES INPUTS: r g b
static void decay(int *r, int *g, int *b, float decayScalar) {
    *r *= decayScalar;
    *g *= decayScalar;
    *b *= decayScalar;
}


// Scales up s of r/g/b, but with a cap of 255. Cap adjustable in code.
// MODIFIES INPUTS: r g b
static void bump(int *r, int *g, int *b, int amountToBumpBy) {
    const int limit = 255; 
    const int minimum = 12;

    if(*r > minimum)
        *r = constrain(*r + amountToBumpBy, 0, limit);

    if(*g > minimum)
        *g = constrain(*g + amountToBumpBy, 0, limit);

    if(*b > minimum)
        *b = constrain(*b + amountToBumpBy, 0, limit);
}


// Runs a police effect for exactly the duration specififed, 
// error is time to switch between light states.
void lightEffectPolice(int duration) {
    const int waitTime = 250;
    unsigned int runtime = 0;
    bool isLeftLight = false;

    // Run until duration exceeded, or forever if duration is <= 0.
    eyesOff();
    duration *= 1000;
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


// Twinkling Effect
void lightEffectDisco(int duration) {
    const int waitTime = 125;
    unsigned int runtime = 0;

    // Choose some vaguely blue-ish disco colors randomly
    eyesOff();
    duration *= 1000;
    while(runtime < duration || duration <= 0) {

        // Choose an eye to make 'twinkle'
        if(random(2) == 0) 
            leftEye(rRange(100, 70), rRange(150, 100), rRange(200, 40));
        else 
            rightEye(rRange(100, 70), rRange(150, 100), rRange(200, 40));
        
        // Update duration
        delayPreciesly(&runtime, duration, waitTime);
    }
}


// Produces a gradual change of a rainbow-like effect, cycling through 
// all colors over about 3 seconds.
void lightEffectRainbow(int duration) {
    const int waitTime = 4;
    unsigned int runtime = 0;
    int r = 255;
    int g = 0; 
    int b = 0;
    
    // Cascade through r->g->b so long as duration is not exceeded.
    eyesOff();
    duration *= 1000;
    while(runtime < duration || duration <= 0) {
        
        if(r == 255) {
            if(b == 0)
                ++g;
            else
                --b;
        }
        if(g == 255) {
            if(r == 0)
                ++b;
            else
                --r;
        }
        if(b == 255) {
            if(g == 0)
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


// Creates a diminishing flickering color in each eye semi-randomly.
// Consider: const array of predictable eye patterns instead of random.
void lightEffectFireworks(int duration) {
    const int waitTime = 3;           // MS delay between effect ticks.
    const int flickerBumpAmount = 30; // Amount of 'flicker' the fireworks have.
    int delayForFirework = 0;         // cycle delay until next firework.
    int delayForFlicker = 0;          // cycke delay until next flicker.
    unsigned int runtime = 0;         // time this has gone for, approximately MS.

    // Left and right RGB s for fiddling later.
    int leftR = 0, leftG = 0, leftB = 0;
    int rightR = 0, rightG = 0, rightB = 0;

    // create diminishing flickering color per each eye, randomly.
    eyesOff();
    duration *= 1000;
    while(runtime < duration || duration <= 0) {

        // If our wait time is up, choose an eye and create new firework.
        if(delayForFirework <= 0)
        {
            // Set one eye randomly
            if(random(2) == 0) {
                leftR = constrain(leftR + rRange(120, 100), 0, 255); 
                leftG = constrain(leftG + rRange(120, 100), 0, 255);
                leftB = constrain(leftB + rRange(120, 100), 0, 255);
            } else {
                rightR = constrain(rightR + rRange(120, 100), 0, 255); 
                rightG = constrain(rightG + rRange(120, 100), 0, 255); 
                rightB = constrain(rightB + rRange(120, 100), 0, 255);
            }

            // Reassign next wait time.
            delayForFirework = rRange(300, 280);
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
