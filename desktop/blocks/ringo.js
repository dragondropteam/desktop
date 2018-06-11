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
            .appendField(Blockly.Msg.HARDWARESTARTUP_RINGO_FIELD_1);
        this.appendStatementInput("do")
            .setCheck(null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.HARDWARESTARTUP_RINGO_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HARDWARESTARTUP_RINGO_HELP_URL);
    }
};

//region NAVIGATION
Blockly.Blocks['get_gyro_calibration_multiplier'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_GYRO_CALIBRATION_MULTIPLIER_FIELD_1);
        this.setOutput(true, "Number");
        this.setColour(290);
        this.setTooltip(Blockly.Msg.GET_GYRO_CALIBRATION_MULTIPLIER_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['begin_navigation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.BEGIN_NAVIGATION_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip(Blockly.Msg.BEGIN_NAVIGATION_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['simple_gyro_navigation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SIMPLE_GYRO_NAVIGATION_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip(Blockly.Msg.SIMPLE_GYRO_NAVIGATION_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['simple_navigation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SIMPLE_NAVIGATION_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip(Blockly.Msg.SIMPLE_NAVIGATION_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};

//Default these to 50 and 800 see Navigation.h:46-48
Blockly.Blocks['navigation_xy'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.NAVIGATION_XY_FIELD_1);
        this.appendValueInput("gyro_sensitivity")
            .setCheck("Number")
            .appendField(Blockly.Msg.NAVIGATION_XY_FIELD_2);
        this.appendValueInput("accel_sensitivity")
            .setCheck("Number")
            .appendField(Blockly.Msg.NAVIGATION_XY_FIELD_3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip(Blockly.Msg.NAVIGATION_XY_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['calibrate_navigation_sensors'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CALIBRATE_NAVIGATION_SENSORS_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.CALIBRATE_NAVIGATION_SENSORS_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['zero_navigation'] = {
  init: function() {
      this.appendDummyInput()
          .appendField(Blockly.Msg.ZERO_NAVIGATION_FIELD_1);
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(RINGO_COLOUR);
      this.setTooltip(Blockly.Msg.ZERO_NAVIGATION_TOOLTIP);
      this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['pause_navigation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PAUSE_NAVIGATION_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.PAUSE_NAVIGATION_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['resume_navigation'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.RESUME_NAVIGATION_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.RESUME_NAVIGATION_TOOLTIP);
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['navigation_paused'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.NAVIGATION_PAUSED_FIELD_1);
        this.setOutput(true, 'Boolean');
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.NAVIGATION_PAUSED_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['delay_with_navigation_ms'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DELAY_WITH_NAVIGATION_MS_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.DELAY_WITH_NAVIGATION_MS_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.appendValueInput("milliseconds")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(Blockly.Msg.DELAY_WITH_NAVIGATION_MS_FIELD_2);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['delay_with_simple_navigation_ms'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DELAY_WITH_SIMPLE_NAVIGATION_MS_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.DELAY_WITH_SIMPLE_NAVIGATION_MS_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.appendValueInput("milliseconds")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(Blockly.Msg.DELAY_WITH_SIMPLE_NAVIGATION_MS_FIELD_2);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['present_heading'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PRESENT_HEADING_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.PRESENT_HEADING_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_degrees_x'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_DEGREES_X_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_DEGREES_X_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_degrees_per_second_z'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_DEGREES_PER_SECOND_Z_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_DEGREES_PER_SECOND_Z_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_degrees_per_second_x'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_DEGREES_PER_SECOND_X_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_DEGREES_PER_SECOND_X_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_degrees_per_second_y'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_DEGREES_PER_SECOND_Y_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_DEGREES_PER_SECOND_Y_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_degrees_to_stop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_DEGREES_TO_STOP_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_DEGREES_TO_STOP_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_accel_x'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_ACCEL_X_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_ACCEL_X_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_accel_y'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_ACCEL_Y_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_ACCEL_Y_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_accel_z'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_ACCEL_Z_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_ACCEL_Z_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_accel_y_unzeroed'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_ACCEL_Y_UNZEROED_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_ACCEL_Y_UNZEROED_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_vel_x'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_VEL_X_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_VEL_X_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_vel_y'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_VEL_Y_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_VEL_Y_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_pos_x'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_POS_X_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_POS_X_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_pos_y'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_POS_Y_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_POS_Y_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['is_stationary'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.IS_STATIONARY_FIELD_1);
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.IS_STATIONARY_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['non_stationary_value'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.NON_STATIONARY_VALUE_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.NON_STATIONARY_VALUE_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['non_stationary_axis'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.NON_STATIONARY_AXIS_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.NON_STATIONARY_AXIS_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['delay_with_navigation_seconds'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DELAY_WITH_NAVIGATION_SECONDS);
    this.appendValueInput('SECONDS')
      .setCheck("Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.SECONDS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.DELAY_WITH_NAVIGATION_SECONDS_TOOLTIP);
    this.setHelpUrl(HELP_URL);
    this.setColour(RINGO_COLOUR);
  }
};

Blockly.Blocks['delay_with_simple_navigation_seconds'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DELAY_WITH_SIMPLE_NAVIGATION_SECONDS);
    this.appendValueInput('SECONDS')
      .setCheck("Number");
    this.appendDummyInput()
      .appendField(Blockly.Msg.SECONDS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.DELAY_WITH_SIMPLE_NAVIGATION_SECONDS_TOOLTIP);
    this.setHelpUrl(HELP_URL);
    this.setColour(RINGO_COLOUR);
  }
};


//endregion

//region COMPUTATION
Blockly.Blocks['min_turn'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MIN_TURN_FIELD_1);
        this.appendValueInput('changeInDegrees')
            .setCheck('Number');
        this.appendDummyInput()
            .appendField(Blockly.Msg.MIN_TURN_FIELD_2);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.MIN_TURN_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['min_turn_to_heading'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MIN_TURN_TO_HEADING_FIELD_1);
        this.setOutput(true, 'Number');
        this.appendValueInput('desiredHeading')
            .setCheck('Number');
        this.setTooltip(Blockly.Msg.MIN_TURN_TO_HEADING_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['vector_to_degrees'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.VECTOR_TO_DEGREES_FIELD_1);
        this.appendValueInput('xComponent')
            .setCheck('Number')
            .appendField(Blockly.Msg.VECTOR_TO_DEGREES_FIELD_2);
        this.appendValueInput('yComponent')
            .setCheck('Number')
            .appendField(Blockly.Msg.VECTOR_TO_DEGREES_FIELD_3);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.VECTOR_TO_DEGREES_TOOLTIP);
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
            .appendField(Blockly.Msg.GYRO_SET_RANGE_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.GYRO_SET_RANGE_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.appendValueInput(range)
            .setCheck('Number');
    }
};

Blockly.Blocks['gyro_buffer_size'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GYRO_BUFFER_SIZE_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GYRO_BUFFER_SIZE_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['gyro_get_axis'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GYRO_GET_AXIS_FIELD_1);
        this.appendValueInput('axis')
            .setCheck('Number');
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GYRO_GET_AXIS_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['gyro_set_frequency'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GYRO_SET_FREQUENCY_FIELD_1);
        this.appendValueInput('frequency')
            .setCheck('Number');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.GYRO_SET_FREQUENCY_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['gyro_get_range_from_chip'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GYRO_GET_RANGE_FROM_CHIP_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GYRO_GET_RANGE_FROM_CHIP_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};


//endregion

//region pixels
Blockly.Blocks['set_pixel_rgb'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_PIXEL_RGB_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SET_PIXEL_RGB_PIXEL_DROPDOWN_1, "EYE_LEFT"], [Blockly.Msg.SET_PIXEL_RGB_PIXEL_DROPDOWN_2, "EYE_RIGHT"], [Blockly.Msg.SET_PIXEL_RGB_PIXEL_DROPDOWN_3, "BODY_TOP"], [Blockly.Msg.SET_PIXEL_RGB_PIXEL_DROPDOWN_4, "BODY_BOTTOM"], [Blockly.Msg.SET_PIXEL_RGB_PIXEL_DROPDOWN_5, "TAIL_TOP"], [Blockly.Msg.SET_PIXEL_RGB_PIXEL_DROPDOWN_6, "TAIL_BOTTOM"]]), "PIXEL")
            .appendField(Blockly.Msg.SET_PIXEL_RGB_FIELD_2);
        this.appendValueInput("RED")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_PIXEL_RGB_FIELD_3);
        this.appendValueInput("GREEN")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_PIXEL_RGB_FIELD_4);
        this.appendValueInput("BLUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_PIXEL_RGB_FIELD_5);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.SET_PIXEL_RGB_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['set_pixel_rgb_colour'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_PIXEL_RGB_COLOUR_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SET_PIXEL_RGB_COLOUR_PIXEL_DROPDOWN_1, "EYE_LEFT"], [Blockly.Msg.SET_PIXEL_RGB_COLOUR_PIXEL_DROPDOWN_2, "EYE_RIGHT"], [Blockly.Msg.SET_PIXEL_RGB_COLOUR_PIXEL_DROPDOWN_3, "BODY_TOP"], [Blockly.Msg.SET_PIXEL_RGB_COLOUR_PIXEL_DROPDOWN_4, "BODY_BOTTOM"], [Blockly.Msg.SET_PIXEL_RGB_COLOUR_PIXEL_DROPDOWN_5, "TAIL_TOP"], [Blockly.Msg.SET_PIXEL_RGB_COLOUR_PIXEL_DROPDOWN_6, "TAIL_BOTTOM"]]), "PIXEL")
            .appendField(Blockly.Msg.SET_PIXEL_RGB_COLOUR_FIELD_2)
            .appendField(new Blockly.FieldColour("#ff0000"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.SET_PIXEL_RGB_COLOUR_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};


Blockly.Blocks['set_all_pixel_rgb'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_ALL_PIXEL_RGB_FIELD_1);
        this.appendValueInput("RED")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_ALL_PIXEL_RGB_FIELD_2);
        this.appendValueInput("GREEN")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_ALL_PIXEL_RGB_FIELD_3);
        this.appendValueInput("BLUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_ALL_PIXEL_RGB_FIELD_4);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.SET_ALL_PIXEL_RGB_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['refresh_pixels'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.REFRESH_PIXELS_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.REFRESH_PIXELS_TOOLTIP);
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['set_all_pixel_rgb_colour'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_ALL_PIXEL_RGB_COLOUR_FIELD_1)
            .appendField(new Blockly.FieldColour("#ff0000"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.SET_ALL_PIXEL_RGB_COLOUR_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};
//endregion

//region motor
Blockly.Blocks['get_motor_max'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_MOTOR_MAX_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_MOTOR_MAX_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_left_motor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_LEFT_MOTOR_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_LEFT_MOTOR_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['get_right_motor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_RIGHT_MOTOR_FIELD_1);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_RIGHT_MOTOR_TOOLTIP);
        this.setHelpUrl(HELP_URL);
        this.setColour(RINGO_COLOUR);
    }
};

Blockly.Blocks['motors_begin'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MOTORS_BEGIN_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.MOTORS_BEGIN_TOOLTIP);
        this.setHelpUrl(HELP_URL);

    }
};
//endregion

//region MOVEMENT
Blockly.Blocks['maintain_heading_reset'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MAINTAIN_HEADING_RESET_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.MAINTAIN_HEADING_TOOLTIP);
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['maintain_heading'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MAINTAIN_HEADING_FIELD_1);
        this.appendValueInput("HEADING")
            .setCheck("Number")
            .appendField(Blockly.Msg.MAINTAIN_HEADING_FIELD_2);
        this.appendValueInput("SPEED")
            .setCheck("Number")
            .appendField(Blockly.Msg.MAINTAIN_HEADING_FIELD_3);
        this.appendValueInput("WIGGLE")
            .setCheck("Number")
            .appendField(Blockly.Msg.MAINTAIN_HEADING_FIELD_4);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip(Blockly.Msg.MAINTAIN_HEADING_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['drive_arc'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DRIVE_ARC_FIELD_1);
        this.appendValueInput("HEADING")
            .setCheck("Number")
            .appendField(Blockly.Msg.DRIVE_ARC_FIELD_2);
        this.appendValueInput("LEFT_SPEED")
            .setCheck("Number")
            .appendField(Blockly.Msg.DRIVE_ARC_FIELD_3);
        this.appendValueInput("RIGHT_SPEED")
            .setCheck("Number")
            .appendField(Blockly.Msg.DRIVE_ARC_FIELD_4);
        this.appendValueInput("MAX_EXPECTED_TURN_TIME")
            .setCheck("Number")
            .appendField(Blockly.Msg.DRIVE_ARC_FIELD_5);
        this.appendValueInput("MAX_EXPECTED_SKID_TIME")
            .setCheck("Number")
            .appendField(Blockly.Msg.DRIVE_ARC_FIELD_6);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(290);
        this.setTooltip(Blockly.Msg.DRIVE_ARC_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['rotate_accurate'] = {
  init: function() {
    this.appendValueInput('HEADING')
      .setCheck("Number")
      .appendField(Blockly.Msg.ROTATE);
    this.appendValueInput('MAX_EXPECTED_TURN_TIME')
      .setCheck("Number")
      .appendField(Blockly.Msg.DEGREES)
      .appendField(Blockly.Msg.WITH);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MAX_EXPECTED_TURN_TIME);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(290);
    this.setTooltip(Blockly.Msg.ROTATE_ACCURATE_TOOLTIP);
    this.setHelpUrl(HELP_URL);
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
            .appendField(Blockly.Msg.PLAY_START_CHIRP_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.PLAY_START_CHIRP_TOOLTIP);
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['play_ack'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PLAY_ACK_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.PLAY_ACK_TOOLTIP);
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['play_non_ack'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PLAY_NON_ACK_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.PLAY_NON_ACK_TOOLTIP);
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['play_anger'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PLAY_ANGER_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.PLAY_ANGER_TOOLTIP);
        this.setHelpUrl(HELP_URL);

    }
};


Blockly.Blocks['play_boredom'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PLAY_BOREDOM_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.PLAY_BOREDOM_TOOLTIP);
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['play_excited'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PLAY_EXCITED_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.PLAY_EXCITED_TOOLTIP);
        this.setHelpUrl(HELP_URL);

    }
};
//endregion

//region SOUND FUNCTIONS
Blockly.Blocks['play_chirp'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PLAY_CHIRP_FIELD_1);
        this.appendValueInput('FREQUENCY')
            .setCheck('Number')
            .appendField(Blockly.Msg.PLAY_CHIRP_FIELD_2);
        this.appendValueInput('AMPLITUDE')
            .setCheck('Number')
            .appendField(Blockly.Msg.PLAY_CHIRP_FIELD_3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.PLAY_CHIRP_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['off_chirp'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.OFF_CHIRP_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.OFF_CHIRP_TOOLTIP);
        this.setHelpUrl(HELP_URL);

    }
};
//endregion

//region PIXEL WRAPPERS
Blockly.Blocks['off_pixels'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.OFF_PIXELS_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.OFF_PIXELS_TOOLTIP);
        this.setHelpUrl(HELP_URL);

    }
};

Blockly.Blocks['off_pixel'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.OFF_PIXEL_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.OFF_PIXEL_PIXEL_DROPDOWN_1, "EYE_LEFT"], [Blockly.Msg.OFF_PIXEL_PIXEL_DROPDOWN_2, "EYE_RIGHT"], [Blockly.Msg.OFF_PIXEL_PIXEL_DROPDOWN_3, "BODY_TOP"], [Blockly.Msg.OFF_PIXEL_PIXEL_DROPDOWN_4, "BODY_BOTTOM"], [Blockly.Msg.OFF_PIXEL_PIXEL_DROPDOWN_5, "TAIL_TOP"], [Blockly.Msg.OFF_PIXEL_PIXEL_DROPDOWN_6, "TAIL_BOTTOM"]]), "PIXEL")
            .appendField(Blockly.Msg.OFF_PIXEL_FIELD_2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.OFF_PIXEL_TOOLTIP);
        this.setHelpUrl(HELP_URL);
    }
};

Blockly.Blocks['random_eyes'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.RANDOM_EYES_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(RINGO_COLOUR);
        this.setTooltip(Blockly.Msg.RANDOM_EYES_TOOLTIP);
        this.setHelpUrl(HELP_URL);

    }
};
//endregion

//region SENSORS
Blockly.Blocks['read_side_sensors'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.READ_SIDE_SENSORS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.READ_SIDE_SENSORS_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['read_left_light_sensor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.READ_LEFT_LIGHT_SENSOR);
    this.setOutput(true, 'Number');
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.READ_LEFT_LIGHT_SENSOR_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['edge_lights_on'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EDGE_LIGHTS_ON);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.EDGE_LIGHTS_ON_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['edge_lights_off'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EDGE_LIGHTS_OFF);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.EDGE_LIGHTS_OFF_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['read_right_light_sensor'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.READ_RIGHT_LIGHT_SENSOR);
    this.setOutput(true, 'Number');
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.READ_RIGHT_LIGHT_SENSOR_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['reset_look_at_edge'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RESET_LOOK_AT_EDGE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.RESET_LOOK_AT_EDGE_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['look_at_edge'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOK_AT_EDGE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.LOOK_AT_EDGE_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['look_for_edge'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOK_FOR_EDGE);
    this.setOutput(true, 'Number');
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.LOOK_FOR_EDGE_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['read_edge_light_sensors'] = {
  init: function() {
    this.appendValueInput('AVERAGE')
      .setCheck(null)
      .appendField(Blockly.Msg.READ_EDGE_LIGHT_SENSORS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.READ_EDGE_LIGHT_SENSORS_AVERAGE)
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.READ_EDGE_LIGHT_SENSORS_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['is_over_edge'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.IS_OVER_EDGE);
    this.setOutput(true, 'Number');
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.IS_OVER_EDGE_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['switch_ambient_to_edge'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SWITCH_AMBIENT_TO_EDGE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.SWITCH_AMBIENT_TO_EDGE_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['switch_edge_to_ambient'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SWITCH_EDGE_TO_AMBIENT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.SWITCH_EDGE_TO_AMBIENT_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};
//endregion

//region INPUT
Blockly.Blocks['switch_button_to_pixels'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SWITCH_BUTTON_TO_PIXELS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.SWITCH_BUTTON_TO_PIXELS_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['switch_pixels_to_button'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SWITCH_PIXELS_TO_BUTTON);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.SWITCH_PIXELS_TO_BUTTON_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['switch_motors_to_serial'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SWITCH_MOTORS_TO_SERIAL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.SWITCH_MOTORS_TO_SERIAL_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['ringo_button_pressed'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.BUTTON_PRESSED);
    this.setOutput(true, 'Number');
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.BUTTON_PRESSED_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};

Blockly.Blocks['heading_with_shortest_distance'] = {
  init: function() {
    this.appendValueInput('HEADING')
      .setCheck('Number')
      .appendField(Blockly.Msg.HEADING_WITH_SHORTEST_DISTANCE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEGREES);
    this.setOutput(true, 'Number');
    this.setColour(RINGO_COLOUR);
    this.setTooltip(Blockly.Msg.HEADING_WITH_SHORTEST_DISTANCE_TOOLTIP);
    this.setHelpUrl(HELP_URL);
  }
};
//endregion