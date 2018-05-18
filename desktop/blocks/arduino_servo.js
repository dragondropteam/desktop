'use strict';
goog.provide('Blockly.Blocks.arduino_servo');

goog.require('Blockly.Blocks');

//region SERVO

Blockly.Blocks['servo_attach'] = {
  init: function () {
    this.appendValueInput('PIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.SERVO_ATTACH_FIELD_1);
    this.appendValueInput('SERVO')
      .setCheck('SERVO')
      .appendField(Blockly.Msg.SERVO_ATTACH_FIELD_2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ARDUINO_SERVO_COLOUR);
    this.setTooltip(Blockly.Msg.SERVO_ATTACH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SERVO_ATTACH_HELP_URL);
  },

  onchange: function (e) {
    if (!this.getInputTargetBlock('SERVO')) {
      this.setWarningText(Blockly.Msg.SERVO_CANNOT_BE_NULL);
    }else{
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['servo_write'] = {
  init: function () {
    this.appendValueInput('ANGLE')
      .setCheck('Number')
      .appendField(Blockly.Msg.SERVO_WRITE_FIELD_1);
    this.appendValueInput('SERVO')
      .setCheck('SERVO')
      .appendField(Blockly.Msg.SERVO_WRITE_FIELD_2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ARDUINO_SERVO_COLOUR);
    this.setTooltip(Blockly.Msg.SERVO_WRITE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SERVO_WRITE_HELP_URL);
  },

  onchange: function (e) {
    if (!this.getInputTargetBlock('SERVO')) {
      this.setWarningText(Blockly.Msg.SERVO_CANNOT_BE_NULL);
    }else{
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['servo_write_microseconds'] = {
  init: function () {
    this.appendValueInput('MICROS')
      .setCheck('Number')
      .appendField(Blockly.Msg.SERVO_WRITE_MICROSECONDS_FIELD_1);
    this.appendValueInput('SERVO')
      .setCheck('SERVO')
      .appendField(Blockly.Msg.SERVO_WRITE_MICROSECONDS_FIELD_2);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ARDUINO_SERVO_COLOUR);
    this.setTooltip(Blockly.Msg.SERVO_WRITE_MICROSECONDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SERVO_WRITE_MICROSECONDS_HELP_URL);
  },

  onchange: function (e) {
    if (!this.getInputTargetBlock('SERVO')) {
      this.setWarningText(Blockly.Msg.SERVO_CANNOT_BE_NULL);
    }else{
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['servo_read'] = {
  init: function () {
    this.appendValueInput('SERVO')
      .setCheck('SERVO')
      .appendField(Blockly.Msg.SERVO_READ_FIELD_1);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setColour(ARDUINO_SERVO_COLOUR);
    this.setTooltip(Blockly.Msg.SERVO_READ_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SERVO_READ_HELP_URL);
  },

  onchange: function (e) {
    if (!this.getInputTargetBlock('SERVO')) {
      this.setWarningText(Blockly.Msg.SERVO_CANNOT_BE_NULL);
    }else{
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['servo_attached'] = {
  init: function () {
    this.appendValueInput('SERVO')
      .setCheck('SERVO')
      .appendField(Blockly.Msg.SERVO_ATTACHED_FIELD_1);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(ARDUINO_SERVO_COLOUR);
    this.setTooltip(Blockly.Msg.SERVO_ATTACHED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SERVO_ATTACHED_HELP_URL);
  },

  onchange: function (e) {
    if (!this.getInputTargetBlock('SERVO')) {
      this.setWarningText(Blockly.Msg.SERVO_CANNOT_BE_NULL);
    }else{
      this.setWarningText(null);
    }
  }
};

Blockly.Blocks['servo_detach'] = {
  init: function () {
    this.appendValueInput('SERVO')
      .setCheck('SERVO')
      .appendField(Blockly.Msg.SERVO_DETACH_FIELD_1);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(ARDUINO_SERVO_COLOUR);
    this.setTooltip(Blockly.Msg.SERVO_DETACH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SERVO_DETACH_HELP_URL);
  },

  onchange: function (e) {
    if (!this.getInputTargetBlock('SERVO')) {
      this.setWarningText(Blockly.Msg.SERVO_CANNOT_BE_NULL);
    }else{
      this.setWarningText(null);
    }
  }
};

//endregion
