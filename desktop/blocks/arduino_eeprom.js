'use strict';
goog.provide('Blockly.Blocks.arduino_eeprom');

goog.require('Blockly.Blocks');

//region EEPROM
Blockly.Blocks['eeprom_read'] = {
    init: function () {
        this.appendValueInput("ADDRESS")
            .setCheck("Number")
            .appendField(Blockly.Msg.EEPROM_READ_FIELD_1);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip(Blockly.Msg.EEPROM_READ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.EEPROM_READ_HELP_URL);
    }
};

Blockly.Blocks['eeprom_write'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.EEPROM_WRITE_FIELD_1);
        this.appendValueInput("ADDRESS")
            .setCheck("Number")
            .appendField(Blockly.Msg.EEPROM_WRITE_FIELD_2);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(120);
        this.setTooltip(Blockly.Msg.EEPROM_WRITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.EEPROM_WRITE_HELP_URL);
    }
};

Blockly.Blocks['eeprom_update'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.EEPROM_UPDATE_FIELD_1);
        this.appendValueInput("ADDRESS")
            .setCheck("Number")
                .appendField(Blockly.Msg.EEPROM_UPDATE_FIELD_2);
        this.setInputsInline(true);

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(120);
        this.setTooltip(Blockly.Msg.EEPROM_UPDATE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.EEPROM_UPDATE_HELP_URL);
    }
};

Blockly.Blocks['eeprom_get'] = {
    init: function () {
        this.appendValueInput("ADDRESS")
            .setCheck("Number")
            .appendField(Blockly.Msg.EEPROM_GET_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.EEPROM_GET_FIELD_2)
            .appendField(new Blockly.FieldVariable("item"), "VAR");
        this.setInputsInline(true);

        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setColour(120);
        this.setTooltip(Blockly.Msg.EEPROM_GET_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.EEPROM_GET_HELP_URL);
    }
};

Blockly.Blocks['eeprom_put'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.EEPROM_PUT_FIELD_1);
        this.appendValueInput("ADDRESS")
            .setCheck("Number")
            .appendField(Blockly.Msg.EEPROM_PUT_FIELD_2);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip(Blockly.Msg.EEPROM_PUT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.EEPROM_PUT_HELP_URL);
    }
};

//endregion
