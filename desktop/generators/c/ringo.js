/**
 * Created by lukepowell on 12/12/16.
 *
 * All contents copyright DigiPen Institute of Technology
 */
'use strict';
goog.provide('Blockly.C.ringo');

goog.require('Blockly.C');

//region NAVIGATION
Blockly.C['hardwarestartup_ringo'] = function(block){
    var statements_do = Blockly.C.statementToCode(block, 'do');
    Blockly.C.definitions_['setup'] = `// Below is the "setup" function. It runs one time as soon as Wink turns on. You can add stuff\n// to this function if you want, but hardwareBegin() should always be the first code in the list.\nvoid setup(){\n\tHardwareBegin();\n${statements_do}}\n`;
    return null;
};

Blockly.C['get_gyro_calibration_multiplier'] = function(block) {
    return ['GetGyroCalibrationMultiplier()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['begin_navigation'] = function(block) {
    return 'NavigationBegin();\n';
};

Blockly.C['simple_gyro_navigation'] = function(block) {
    return 'SimpleGyroNavigation();\n';
};

Blockly.C['simple_navigation'] = function(block) {
  return 'SimpleNavigation();\n';
};

Blockly.C['navigation_xy'] = function(block) {
    let gyro_value = Blockly.C.valueToCode(block, 'gyro_sensitivity', Blockly.C.ORDER_ATOMIC) || '0';
    let accel_value = Blockly.C.valueToCode(block, 'accel_sensitivity', Blockly.C.ORDER_ATOMIC) || '0';
    return `NavigationXY(${gyro_value}, ${accel_value});\n`;
};

Blockly.C['calibrate_navigation_sensors'] = function() {
  return 'CalibrateNavigationSensors();\n';
};

Blockly.C['zero_navigation'] =  function() {
  return 'ZeroNavigation();\n';
};

Blockly.C['pause_navigation'] = function () {
    return 'PauseNavigation();\n';
};

Blockly.C['resume_navigation'] = function () {
    return 'ResumeNavigation();\n';
};

Blockly.C['navigation_paused'] = function () {
    return ['NavigationPaused()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['delay_with_navigation_ms'] = function (block) {
    let ms_value = Blockly.C.valueToCode(block, 'milliseconds', Blockly.C.ORDER_ATOMIC);
    return `DelayWithNavigation(${ms_value});\n`;
};

Blockly.C['delay_with_simple_navigation_ms'] = function (block) {
    let ms_value = Blockly.C.valueToCode(block, 'milliseconds', Blockly.C.ORDER_ATOMIC);
    return `DelayWithSimpleNavigation(${ms_value});\n`;
};

Blockly.C['present_heading'] = function (block) {
    return ['PresentHeading()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_degrees_x'] = function (block) {
    return ['GetDegreesX()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_degrees_per_second_z'] = function(block){
    return ['GetDegreesPerSecond()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_degrees_per_second_x'] = function (block) {
    return ['GetDegreesPerSecondX()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_degrees_per_second_y'] = function(block) {
    return ['GetDegreesPerSecondY()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_degrees_to_stop'] = function(block) {
    return ['GetDegreesToStop()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_accel_x'] = function(block) {
  return ['GetAccelerationX()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_accel_y'] = function (block) {
    return ['GetAccelerationY()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_accel_z'] = function(block) {
    return ['GetAccelerationZ()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_accel_y_unzeroed'] = function (block) {
    return ['GetAccelerationYUnZeroed()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_vel_x'] = function (block) {
    return ['GetVelocityX()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_vel_y'] = function(block){
  return ['GetVelocityY()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_pos_x'] = function (block) {
    return ['GetPositionX()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_pos_y'] = function (block) {
    return ['GetPositionY()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['is_stationary'] = function (block) {
    return ['IsStationary', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['non_stationary_value'] = function(block) {
    return ['NonStationaryValue', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['non_stationary_axis'] = function (block) {
    return ['NonStationaryAxis', Blockly.C.ORDER_ATOMIC];
};
//endregion

//region COMPUTATION
Blockly.C['min_turn'] = function(block) {
  let changeInDegrees = Blockly.C.valueToCode(block, 'changeInDegrees', Blockly.C.ORDER_ATOMIC) || '0';
  return [`MinTurn(${changeInDegrees})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['min_turn_to_heading'] = function(block) {
  let desiredHeading = Blockly.C.valueToCode(block, 'desiredHeading', Blockly.C.ORDER_ATOMIC) || '0';
  return [`MinTurnToHeading(${desiredHeading})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['vector_to_degrees'] = function (block) {
    let xComponent = Blockly.C.valueToCode(block, 'xComponent', Blockly.C.ORDER_ATOMIC) || '0';
    let yComponent = Blockly.C.valueToCode(block, 'yComponent', Blockly.C.ORDER_ATOMIC) || '0';

    return [`VectorToDegrees(${xComponent}, ${yComponent})`, Blockly.C.ORDER_ATOMIC];
};
//endregion

//region PIXELS
Blockly.C['set_pixel_rgb'] = function(block) {
    const dropdown_pixel = block.getFieldValue('PIXEL');
    const value_red = Blockly.C.valueToCode(block, 'RED', Blockly.C.ORDER_ATOMIC) || '0';
    const value_green = Blockly.C.valueToCode(block, 'GREEN', Blockly.C.ORDER_ATOMIC) || '0';
    const value_blue = Blockly.C.valueToCode(block, 'BLUE', Blockly.C.ORDER_ATOMIC) || '0';
    return `SetPixelRGB(${dropdown_pixel}, ${value_red}, ${value_green}, ${value_blue});\n`;
};

Blockly.C['set_pixel_rgb_colour'] = function (block) {
    const dropdown_pixel = block.getFieldValue('PIXEL');
    const colour_name = block.getFieldValue('COLOUR') || '#000000';
    const red = parseInt(colour_name.substring(1, 3), 16);
    const green = parseInt(colour_name.substring(3, 5), 16);
    const blue = parseInt(colour_name.substring(5, 7), 16);
    return `SetPixelRGB(${dropdown_pixel}, ${red}, ${green}, ${blue});\n`;
};

Blockly.C['set_all_pixel_rgb'] = function(block) {
    const value_red = Blockly.C.valueToCode(block, 'RED', Blockly.C.ORDER_ATOMIC) || '0';
    const value_green = Blockly.C.valueToCode(block, 'GREEN', Blockly.C.ORDER_ATOMIC) || '0';
    const value_blue = Blockly.C.valueToCode(block, 'BLUE', Blockly.C.ORDER_ATOMIC) || '0';
    return `SetAllPixelsRGB( ${value_red}, ${value_green}, ${value_blue});\n`;
};

Blockly.C['refresh_pixels'] = function (block) {
    return 'RefreshPixels();\n';
};

Blockly.C['set_all_pixel_rgb_colour'] = function (block) {
    const colour_name = block.getFieldValue('COLOUR') || '#000000';
    const red = parseInt(colour_name.substring(1, 3), 16);
    const green = parseInt(colour_name.substring(3, 5), 16);
    const blue = parseInt(colour_name.substring(5, 7), 16);
    return `SetAllPixelsRGB(${red}, ${green}, ${blue});\n`;
};
//endregion

//region motor
Blockly.C['get_motor_max'] = function (block) {
    return ['MOTOR_MAX', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_left_motor'] = function (block) {
    return ['LeftMotor', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_right_motor'] = function (block) {
    return ['RightMotor', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['motors_begin'] = function (block) {
    return 'MotorsBegin();\n';
};
//endregion

//region movement
Blockly.C['maintain_heading_reset'] = function (block) {
    return 'MaintainHeadingReset();\n';
};

Blockly.C['maintain_heading'] = function (block) {
    const value_heading = Blockly.C.valueToCode(block, 'HEADING', Blockly.C.ORDER_ATOMIC) || '0';
    const value_speed = Blockly.C.valueToCode(block, 'SPEED', Blockly.C.ORDER_ATOMIC) || '0';
    const value_wiggle = Blockly.C.valueToCode(block, 'WIGGLE', Blockly.C.ORDER_ATOMIC) || '0';
    return `MaintainHeading(${value_heading}, ${value_speed}, ${value_wiggle});\n`;
};

Blockly.C['drive_arc'] = function(block) {
    const value_heading = Blockly.C.valueToCode(block, 'HEADING', Blockly.C.ORDER_ATOMIC) || '0';
    const value_left_speed = Blockly.C.valueToCode(block, 'LEFT_SPEED', Blockly.C.ORDER_ATOMIC) || '0';
    const value_right_speed = Blockly.C.valueToCode(block, 'RIGHT_SPEED', Blockly.C.ORDER_ATOMIC) || '0';
    const value_max_expected_turn_time = Blockly.C.valueToCode(block, 'MAX_EXPECTED_TURN_TIME', Blockly.C.ORDER_ATOMIC) || '0';
    const value_max_expected_skid_time = Blockly.C.valueToCode(block, 'MAX_EXPECTED_SKID_TIME', Blockly.C.ORDER_ATOMIC) || '0';
    return `DriveArc(${value_heading}, ${value_left_speed}, ${value_right_speed}, ${value_max_expected_turn_time}, ${value_max_expected_skid_time});\n`;
};

// Blockly.C['heading_with_shortest_distance'] = function (block) {
//     const heading = Blockly.C.valueToCode(block, 'HEADING', Blockly.C.ORDER_ATOMIC) || '0';
//     return [`HeadingWithShortestDistance(${heading})`, Blockly.C.ORDER_ATOMIC];
// };
//endregion

//region ANIMATIONS
Blockly.C['play_start_chirp'] = function (block) {
    return 'PlayStartChirp();\n';
};

Blockly.C['play_ack'] = function (block) {
    return 'PlayAck();\n';
};

Blockly.C['play_non_ack'] = function (block) {
    return 'PlayNonAck();\n';
};

Blockly.C['play_anger'] = function (block) {
    return 'PlayAnger();\n';
};

Blockly.C['play_boredom'] = function (block) {
    return 'PlayBoredom();\n';
};

Blockly.C['play_excited'] = function (block) {
    return 'PlayExcited();\n';
};
//endregion

//region SOUND FUNCTIONS
Blockly.C['play_chirp'] = function (block) {
    const frequency = Blockly.C.valueToCode(block, 'FREQUENCY', Blockly.C.ORDER_ATOMIC) || '0';
    const amplitude = Blockly.C.valueToCode(block, 'AMPLITUDE', Blockly.C.ORDER_ATOMIC) || '0';
    return `PlayChirp(${frequency}, ${amplitude});\n`;
};

Blockly.C['off_chirp'] = function (block) {
    return 'OffChirp();\n';
};
//endregion

//region PIXEL WRAPPERS
Blockly.C['off_pixels'] = function (block) {
    return 'OffPixels();\n';
};

Blockly.C['off_pixel'] = function (block) {
    const dropdown_pixel = block.getFieldValue('PIXEL');
    return `OffPixel(${dropdown_pixel});\n`;
};

Blockly.C['random_eyes'] = function (block) {
    return 'RandomEyes();\n';
};
//endregion
