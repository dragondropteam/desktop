'use strict';
goog.provide('Blockly.Blocks.arduino_eeprom');

goog.require('Blockly.Blocks');

//region EEPROM
Blockly.Blocks['eeprom_read'] = {
    init: function () {
        this.appendValueInput("ADDRESS")
            .setCheck("Number")
            .appendField("EEPROM Read address");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/EEPROMRead');
    }
};

Blockly.Blocks['eeprom_write'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField("EEPROM write value");
        this.appendValueInput("ADDRESS")
            .setCheck("Number")
            .appendField("to address");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/EEPROMWrite');
    }
};

Blockly.Blocks['eeprom_update'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField("EEPROM update value at");
        this.appendValueInput("ADDRESS")
            .setCheck("Number")
                .appendField("(if different than current) to address");
        this.setInputsInline(true);

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/EEPROMUpdate');
    }
};

Blockly.Blocks['eeprom_get'] = {
    init: function () {
        this.appendValueInput("ADDRESS")
            .setCheck("Number")
            .appendField("EEPROM get data from address");
        this.appendDummyInput()
            .appendField('and store in')
            .appendField(new Blockly.FieldVariable("item"), "VAR");
        this.setInputsInline(true);

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/EEPROMGet');
    }
};

Blockly.Blocks['eeprom_put'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField("EEPROM set");
        this.appendValueInput("ADDRESS")
            .setCheck("Number")
            .appendField("to address");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/EEPROMPut');
    }
};

//endregion