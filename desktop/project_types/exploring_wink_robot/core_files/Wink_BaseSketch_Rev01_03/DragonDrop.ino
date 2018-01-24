// Header inclusions: 
#include "DragonDrop.hpp"
#include "WinkHardware.hpp"
#include <Adafruit_NeoPixel.h>

// Defines
#define EYE_LEFT  0
#define EYE_RIGHT 1



// Random in a range of 20 of the number provided.
static int rRange(int num, int range) {
    return random(num - range, num + range);
}


// Delays a specific ammount and does not exceed it.
// If max is 0, we don't bother counting, we just delay by amt.
// MODIFIES INPUTS: curr
static void delayPreciesly(int *curr, int max, int wait_time) {
    if(max > 0) {
        if(*curr + wait_time > max)
            delay(max - *curr);
        else
            delay(wait_time);

        *curr += wait_time;
    } else {
        delay(wait_time);
    }
}


// Runs a police effect for exactly the duration specififed, 
// error is time to switch between light states.
void lightEffectPolice(int duration) {
    const int wait_time = 250;
    unsigned int runtime = 0;
    bool is_left_light = false;
    
    // Run until duration exceeded, or forever if duration is <= 0.
    while(runtime < duration || duration <= 0) {    
        // Alternate lights
        if(is_left_light) {
            rightOff();
            leftRed(200);
        } else {
            leftOff();
            rightBlue(200);
        }

        // Delay. If delay is negative/0, we just do this forever, but still
        // Swap which light we'll do next.
        delayPreciesly(&runtime, duration, wait_time);
        is_left_light = !is_left_light;     
    }
}


// Twinkling Effect
void lightEffectDisco(int duration) {
    const int wait_time = 125;
    unsigned int runtime = 0;
    
    while(runtime < duration || duration <= 0) {
        // Choose an eye to make 'twinkle'
        if(random(2) == 0) 
            leftEye(rRange(100, 70), rRange(150, 100), rRange(200, 40));
        else 
            rightEye(rRange(100, 70), rRange(150, 100), rRange(200, 40));
        
        // Update duration
        delayPreciesly(&runtime, duration, wait_time);
    }
}


// Produces a gradual change of a rainbow-like effect, cycling through 
// all colors over about 3 seconds.
void lightEffectRainbow(int duration) {
    const int wait_time = 4;
    unsigned int runtime = 0;
    int r = 255;
    int g = 0; 
    int b = 0;

    // Cascade through r->g->b so long as duration is not exceeded.
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
        eyesRGB(r*.8,g*.8, b*.8);

        // Update duration
        delayPreciesly(&runtime, duration, wait_time);
    }
}


// Decays by a fixed value. On account of int truncation, 
// any values will cut off at zero.
// MODIFIES INPUTS: r g b
static void decay(int *r, int *g, int *b, float decay_scalar) {
    *r *= decay_scalar;
    *g *= decay_scalar;
    *b *= decay_scalar;
}


// Scales up values of r/g/b, but with a cap of 255. Cap adjustable in code.
// MODIFIES INPUTS: r g b
static void bump(int *r, int *g, int *b, int bump_amount) {
    const int limit = 255; 
    const int minimum = 12;

    if(*r > minimum)
        *r = constrain(*r + bump_amount, 0, limit);

    if(*g > minimum)
        *g = constrain(*g + bump_amount, 0, limit);

    if(*b > minimum)
        *b = constrain(*b + bump_amount, 0, limit);
}


// Creates a diminishing flickering color in each eye semi-randomly.
// Consider: const array of predictable eye patterns instead of random.
void lightEffectFireworks(int duration) {
    const int wait_time = 3;    // MS delay between effect ticks.
    int delay_firework = 0;     // cycle delay until next firework.
    int delay_flicker = 0;      // cycke delay until next flicker.
    const int bump_amount = 30; // Amount of 'flicker' the fireworks have.
    unsigned int runtime = 0;   // time this has gone for, approximately MS.

    // Left and right RGB values for fiddling later.
    int l_r = 0, l_g = 0, l_b = 0;
    int r_r = 0, r_g = 0, r_b = 0;

    // create diminishing flickering color per each eye, randomly.
    while(runtime < duration || duration <= 0) {

        // If our wait time is up, choose an eye and create new firework.
        if(delay_firework <= 0)
        {
            // Set one eye randomly to Orange-ish
            if(random(2) == 0) {
                l_r = constrain(l_r + rRange(120, 100), 0, 255); 
                l_g = constrain(l_g + rRange(120, 100), 0, 255);
                l_b = constrain(l_b + rRange(120, 100), 0, 255);
            } else {
                r_r = constrain(r_r + rRange(120, 100), 0, 255); 
                r_g = constrain(r_g + rRange(120, 100), 0, 255); 
                r_b = constrain(r_b + rRange(120, 100), 0, 255);
            }

            // Reassign next wait time.
            delay_firework = rRange(300, 280);
        }

        // Slowly fade out
        decay(&l_r, &l_g, &l_b, .991);
        decay(&r_r, &r_g, &r_b, .991);

        // Create flicker effect
        if(delay_flicker <= 0) {
            bump(&l_r, &l_g, &l_b, bump_amount);
            bump(&r_r, &r_g, &r_b, bump_amount);

            delay_flicker = 45;
        }
    
        // Update eyes
        leftRGB(l_r, l_g, l_b);
        rightRGB(r_r, r_g, r_b);

        // Update duration
        delayPreciesly(&runtime, duration, wait_time);
        --delay_firework;
        --delay_flicker;
    }
}
