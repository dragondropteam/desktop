#ifndef DRAGONDROP_H
#define DRAGONDROP_H


// Sensor Features
extern void sensorLineFollow(int speed, bool showEyes);
extern void sensorLineAvoid(int speed, bool showEyes);

// Light effects
extern void lightEffectPolice(int duration);
extern void lightEffectDisco(int duration);
extern void lightEffectRainbow(int duration);
extern void lightEffectFireworks(int duration);

// Obstacle-related movement
extern void approachObstacles();
extern void avoidObstacles();
extern void exploreEnvironment();

// Beginner movements
extern void forwardSlow(int duration);
extern void forwardMedium(int duration);
extern void forwardFast(int duration);
extern void backwardSlow(int duration);
extern void backwardMedium(int duration);
extern void backwardFast(int duration);
extern void turnLeftDegrees(int degrees);
extern void turnRightDegrees(int degrees);

//Time Methods
extern int convertToMilliseconds(int seconds);
extern unsigned long seconds();

#endif
