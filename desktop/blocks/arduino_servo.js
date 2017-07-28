'use strict';
goog.provide('Blockly.Blocks.arduino_servo');

goog.require('Blockly.Blocks');

//region SERVO

Blockly.Blocks['servo_attach'] = {
    init: function () {
        this.appendValueInput("PIN")
            .setCheck("Number")
            .appendField("Attach pin");
        this.appendValueInput("SERVO")
            .setCheck("SERVO")
            .appendField("to servo");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/ServoAttach');
    }
};

Blockly.Blocks['servo_write'] = {
    init: function () {
        this.appendValueInput("ANGLE")
            .setCheck("Number")
            .appendField("Set angle to");
        this.appendValueInput("SERVO")
            .setCheck("SERVO")
            .appendField("on servo");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/ServoWrite');
    }
};

Blockly.Blocks['servo_write_microseconds'] = {
    init: function () {
        this.appendValueInput("MICROS")
            .setCheck("Number")
            .appendField("Set microseconds to");
        this.appendValueInput("SERVO")
            .setCheck("SERVO")
            .appendField("on servo");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/ServoWriteMicroseconds');
    }
};

Blockly.Blocks['servo_read'] = {
    init: function () {
        this.appendValueInput("SERVO")
            .setCheck("SERVO")
            .appendField("Read from servo");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        // this.setPreviousStatement(true, null);
        // this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/ServoRead');
    }
};

Blockly.Blocks['servo_attached'] = {
    init: function () {
        this.appendValueInput("SERVO")
            .setCheck("SERVO")
            .appendField("Check servo");
        this.setInputsInline(true);
        this.setOutput(true, "Boolean");
        // this.setPreviousStatement(true, null);
        // this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/ServoAttached');
    }
};

Blockly.Blocks['servo_detach'] = {
    init: function () {
        this.appendValueInput("SERVO")
            .setCheck("SERVO")
            .appendField("Detach servo");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/ServoDetach');
    }
};

//endregion