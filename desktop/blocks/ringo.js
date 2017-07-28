/**
 * All content copyright DigiPen Institute of Technology 2016
 */

"use strict";

goog.provide('Blockly.Blocks.ringo');

goog.require('Blockly.Blocks');

const RINGO_COLOUR = 290;
const HELP_URL = 'http://www.plumgeek.com/ringo.html';

/**
 * There has to be a different hardware startup block for ringo as
 * the hardware setup step is HardwareSetup not hardwareSetup
 * @type {{init: Blockly.Blocks.hardwarestartup.init}}
 */
Blockly.Blocks['hardwarestartup_ringo'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("setup");
        this.appendStatementInput("do")
            .setCheck(null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

//region NAVIGATION
Blockly.Blocks['get_gyro_calibration_multiplier'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Get Gyro Calibration Multiplier");
        this.setOutput(true, "Number");
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['begin_navigation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Begin Navigation");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['simple_gyro_navigation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Simple Gyro Navigation");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['simple_navigation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Simple Navigation");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

//Default these to 50 and 800 see Navigation.h:46-48
Blockly.Blocks['navigation_xy'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Navigation XY with");
        this.appendValueInput("gyro_sensitivity")
            .setCheck("Number")
            .appendField("Gyro Sensitivity");
        this.appendValueInput("accel_sensitivity")
            .setCheck("Number")
            .appendField("Acceleration Sensitivity");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['calibrate_navigation_sensors'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Calibrate Navigation Sensors');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['zero_navigation'] = {
  init: function() {
      this.appendDummyInput()
          .appendField('Reset Navigation');
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(RINGO_COLOUR);
      this.setTooltip('');
      this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['pause_navigation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Pause Navigation');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['resume_navigation'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Resume Navigation');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['navigation_paused'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Is Navigation Paused');
        this.setOutput(true, 'Boolean');
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['delay_with_navigation_ms'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Delay With Navigation for ');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.appendValueInput("milliseconds")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField("milliseconds");
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['delay_with_simple_navigation_ms'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Delay With Simple Navigation for');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.appendValueInput("milliseconds")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField("milliseconds");
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['present_heading'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Present Heading');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_degrees_x'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Degrees X');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_degrees_per_second_z'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Degrees Per Second Z');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_degrees_per_second_x'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Degrees Per Second X');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_degrees_per_second_y'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Degrees Per Second Y');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_degrees_to_stop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Degrees To Stop');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_accel_x'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get X Acceleration');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_accel_y'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Y Acceleration');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_accel_z'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Z Acceleration');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_accel_y_unzeroed'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Y Acceleration Unzeroed');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_vel_x'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get X Velocity');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_vel_y'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Y Velocity');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_pos_x'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get X Position');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_pos_y'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Y Position');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['is_stationary'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Is Ringo Stationary');
        this.setOutput(true, 'Boolean');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['non_stationary_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Non-Stationary Value');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['non_stationary_axis'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Non-Stationary Axis');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

//endregion

//region COMPUTATION
Blockly.Blocks['min_turn'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Minimum Turn');
        this.appendValueInput('changeInDegrees')
            .setCheck('Number');
        this.appendDummyInput()
            .appendField('Degrees');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['min_turn_to_heading'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Minimum Turn to Heading');
        this.setOutput(true, 'Number');
        this.appendValueInput('desiredHeading')
            .setCheck('Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['vector_to_degrees'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Vector To Degrees');
        this.appendValueInput('xComponent')
            .setCheck('Number')
            .appendField('X Component');
        this.appendValueInput('yComponent')
            .setCheck('Number')
            .appendField('Y Component');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
        this.setInputsInline(true);
    }
};
//endregion

//region gyro
Blockly.Blocks['gyro_set_range'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Set Gyro Range');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.appendValueInput(range)
            .setCheck('Number');
    }
};

Blockly.Blocks['gyro_buffer_size'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Gyro Buffer Size');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['gyro_get_axis'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Gyro Axis');
        this.appendValueInput('axis')
            .setCheck('Number');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['gyro_set_frequency'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Set Gyro Frequency');
        this.appendValueInput('frequency')
            .setCheck('Number');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['gyro_get_range_from_chip'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Gyro Range From Chip');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
    }
};


//endregion

//region pixels
Blockly.Blocks['set_pixel_rgb'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set")
            .appendField(new Blockly.FieldDropdown([["Left Eye", "EYE_LEFT"], ["Right Eye", "EYE_RIGHT"], ["Body Top", "BODY_TOP"], ["Body Bottom", "BODY_BOTTOM"], ["Tail Top", "TAIL_TOP"], ["Tail Bottom", "TAIL_BOTTOM"]]), "PIXEL")
            .appendField("Pixel");
        this.appendValueInput("RED")
            .setCheck("Number")
            .appendField("Red");
        this.appendValueInput("GREEN")
            .setCheck("Number")
            .appendField("Green");
        this.appendValueInput("BLUE")
            .setCheck("Number")
            .appendField("Blue");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['set_pixel_rgb_colour'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set")
            .appendField(new Blockly.FieldDropdown([["Left Eye", "EYE_LEFT"], ["Right Eye", "EYE_RIGHT"], ["Body Top", "BODY_TOP"], ["Body Bottom", "BODY_BOTTOM"], ["Tail Top", "TAIL_TOP"], ["Tail Bottom", "TAIL_BOTTOM"]]), "PIXEL")
            .appendField('to')
            .appendField(new Blockly.FieldColour("#ff0000"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
    }
};


Blockly.Blocks['set_all_pixel_rgb'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set All Pixels to");
        this.appendValueInput("RED")
            .setCheck("Number")
            .appendField("Red");
        this.appendValueInput("GREEN")
            .setCheck("Number")
            .appendField("Green");
        this.appendValueInput("BLUE")
            .setCheck("Number")
            .appendField("Blue");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['refresh_pixels'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Refresh Pixels');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['set_all_pixel_rgb_colour'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set All Pixels to")
            .appendField(new Blockly.FieldColour("#ff0000"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
    }
};
//endregion

//region motor
Blockly.Blocks['get_motor_max'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Motor Max');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_left_motor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Current Left Motor Speed');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_right_motor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Get Current Right Motor Speed');
        this.setOutput(true, 'Number');
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['motors_begin'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Begin Motors');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);

    }
};
//endregion

//region MOVEMENT
Blockly.Blocks['maintain_heading_reset'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Reset Maintain Heading');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['maintain_heading'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Maintain Heading with ");
        this.appendValueInput("HEADING")
            .setCheck("Number")
            .appendField("Direction");
        this.appendValueInput("SPEED")
            .setCheck("Number")
            .appendField("and Speed");
        this.appendValueInput("WIGGLE")
            .setCheck("Number")
            .appendField("and Wiggle");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['drive_arc'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Drive in An Arc");
        this.appendValueInput("HEADING")
            .setCheck("Number")
            .appendField("Turning (degrees)");
        this.appendValueInput("LEFT_SPEED")
            .setCheck("Number")
            .appendField("With Left Motor At");
        this.appendValueInput("RIGHT_SPEED")
            .setCheck("Number")
            .appendField("With Right Motor At");
        this.appendValueInput("MAX_EXPECTED_TURN_TIME")
            .setCheck("Number")
            .appendField("With Max Expected Turn Time (milliseconds)");
        this.appendValueInput("MAX_EXPECTED_SKID_TIME")
            .setCheck("Number")
            .appendField("With Max Expected Skid Time (milliseconds)");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};
// This is function only exists in the header not in the actual implementation
// if it does come into existence it can just be uncommented
// Blockly.Blocks['heading_with_shortest_distance'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('Get Heading with Shortest Distance');
//         this.appendValueInput('HEADING');
//         this.setOutput(true, 'Number');
//         this.setInputsInline(true);
//         this.setTooltip('');
//         this.setHelpUrl(HELP_URL);
//         this.setColour(RINGO_COLOUR);
//     }
// };
//endregion

//region ANIMATIONS
Blockly.Blocks['play_start_chirp'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Play Start Chirp');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['play_ack'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Play Acknowledgment Chirp');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['play_non_ack'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Play Non-Acknowledgment Chirp');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['play_anger'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Player Anger');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);

    }
};


Blockly.Blocks['play_boredom'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Play Boredom');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['play_excited'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Play Excited');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);

    }
};
//endregion

//region SOUND FUNCTIONS
Blockly.Blocks['play_chirp'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Play Chirp');
        this.appendValueInput('FREQUENCY')
            .setCheck('Number')
            .appendField('With Frequency');
        this.appendValueInput('AMPLITUDE')
            .setCheck('Number')
            .appendField('With Amplitude');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['off_chirp'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Turn Chirp Off');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);

    }
};
//endregion

//region PIXEL WRAPPERS
Blockly.Blocks['off_pixels'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Turn All Pixels Off');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['off_pixel'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Turn')
            .appendField(new Blockly.FieldDropdown([["Left Eye", "EYE_LEFT"], ["Right Eye", "EYE_RIGHT"], ["Body Top", "BODY_TOP"], ["Body Bottom", "BODY_BOTTOM"], ["Tail Top", "TAIL_TOP"], ["Tail Bottom", "TAIL_BOTTOM"]]), "PIXEL")
            .appendField('off');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['random_eyes'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Set Eyes To A Random Colour');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip('');
        this.setHelpUrl(HELP_URL);

    }
};
//endregion

