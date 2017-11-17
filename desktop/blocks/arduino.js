'use strict';
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');

/**
 * There has to be a different hardware startup block for arduino as
 * we do not have the hardware setup step
 * @type {{init: Blockly.Blocks.hardwarestartup.init}}
 */
Blockly.Blocks['hardwarestartup_arduino'] = {
    init: function() {
        this.appendDummyInput()
          .appendField(Blockly.Msg.HARDWARESTARTUP_ARDUINO_FIELD_1);
        this.appendStatementInput("do")
          .setCheck(null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.HARDWARESTARTUP_ARDUINO_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HARDWARESTARTUP_ARDUINO_HELP_URL);
    }
};

//region TIME

Blockly.Blocks['delayms'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DELAYMS_FIELD_1);
        this.appendValueInput("MILLISECONDS")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(Blockly.Msg.DELAYMS_FIELD_2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip(Blockly.Msg.DELAYMS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DELAYMS_HELP_URL);
    }
};

Blockly.Blocks['delaymicroseconds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DELAYMICROSECONDS_FIELD_1);
        this.appendValueInput("MICROSECONDS")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(Blockly.Msg.DELAYMICROSECONDS_FIELD_2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip(Blockly.Msg.DELAYMICROSECONDS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DELAYMICROSECONDS_HELP_URL);
    }
};

Blockly.Blocks['milliseconds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MILLISECONDS_FIELD_1);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip(Blockly.Msg.MILLISECONDS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.MILLISECONDS_HELP_URL);
    }
};

Blockly.Blocks['microseconds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MICROSECONDS_FIELD_1);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip(Blockly.Msg.MICROSECONDS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.MICROSECONDS_HELP_URL);
    }
};
//endregion

//region PINS
Blockly.Blocks['pininput'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PININPUT_FIELD_1);
        this.appendValueInput("PIN")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(Blockly.Msg.PININPUT_FIELD_2)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PININPUT_MODE_DROPDOWN_1, "INPUT"], [Blockly.Msg.PININPUT_MODE_DROPDOWN_2, "OUTPUT"], [Blockly.Msg.PININPUT_MODE_DROPDOWN_3, "INPUT_PULLUP"]]), "MODE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip(Blockly.Msg.PININPUT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PININPUT_HELP_URL);
    }
};


Blockly.Blocks['digitalwrite'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DIGITALWRITE_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.DIGITALWRITE_VALUE_DROPDOWN_1, "HIGH"], [Blockly.Msg.DIGITALWRITE_VALUE_DROPDOWN_2, "LOW"]]), "VALUE");
        this.appendValueInput("PIN")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(Blockly.Msg.DIGITALWRITE_FIELD_2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip(Blockly.Msg.DIGITALWRITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DIGITALWRITE_HELP_URL);
    }
};

Blockly.Blocks['digital_read'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DIGITAL_READ_FIELD_1);
        this.appendValueInput("PIN")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip(Blockly.Msg.DIGITAL_READ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DIGITAL_READ_HELP_URL);
    }
};
//endregion

//region CONSTANTS
Blockly.Blocks['high'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.HIGH_FIELD_1);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip(Blockly.Msg.HIGH_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HIGH_HELP_URL);
    }
};


Blockly.Blocks['low'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LOW_FIELD_1);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip(Blockly.Msg.LOW_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LOW_HELP_URL);
    }
};

Blockly.Blocks['led_builtin'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LED_BUILTIN_FIELD_1);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip(Blockly.Msg.LED_BUILTIN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LED_BUILTIN_HELP_URL);
    }
};

//endregion

//region ANALOG I/O
Blockly.Blocks['analog_reference'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ANALOG_REFERENCE_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ANALOG_REFERENCE_TYPE_DROPDOWN_1, "DEFAULT"], [Blockly.Msg.ANALOG_REFERENCE_TYPE_DROPDOWN_2, "EXTERNAL"], [Blockly.Msg.ANALOG_REFERENCE_TYPE_DROPDOWN_3, "INTERNAL"], [Blockly.Msg.ANALOG_REFERENCE_TYPE_DROPDOWN_4, "INTERNAL1V1"], [Blockly.Msg.ANALOG_REFERENCE_TYPE_DROPDOWN_5, "INTERNAL2V56"]]), "TYPE");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip(Blockly.Msg.ANALOG_REFERENCE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ANALOG_REFERENCE_HELP_URL);
    }
};

Blockly.Blocks['analog_read'] = {
    init: function() {
        this.appendValueInput("PIN")
            .setCheck("Number")
            .appendField(Blockly.Msg.ANALOG_READ_FIELD_1);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip(Blockly.Msg.ANALOG_READ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ANALOG_READ_HELP_URL);
    }
};

Blockly.Blocks['analog_write'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.ANALOG_WRITE_FIELD_1);
        this.appendValueInput("PIN")
            .setCheck("Number")
            .appendField(Blockly.Msg.ANALOG_WRITE_FIELD_2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip(Blockly.Msg.ANALOG_WRITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ANALOG_WRITE_HELP_URL);
    }
};
//endregion

//region RANDOM NUMBERS
Blockly.Blocks['random_seed'] = {
    init: function () {
        this.appendValueInput("SEED")
            .setCheck("Number")
            .appendField(Blockly.Msg.RANDOM_SEED_FIELD_1);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip(Blockly.Msg.RANDOM_SEED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.RANDOM_SEED_HELP_URL);
    }
};

Blockly.Blocks['random'] = {
    init: function () {
        this.appendValueInput("MIN")
            .setCheck("Number")
            .appendField(Blockly.Msg.RANDOM_FIELD_1);
        this.appendValueInput("MAX")
            .setCheck("Number")
            .appendField(Blockly.Msg.RANDOM_FIELD_2);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip(Blockly.Msg.RANDOM_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.RANDOM_HELP_URL);
    }
};
//endregion

//region BITS AND BYTES

Blockly.Blocks['bit'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_FIELD_1);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip(Blockly.Msg.BIT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BIT_HELP_URL);
    }
};

Blockly.Blocks['bit_clear'] = {
    init: function () {
        this.appendValueInput("POSITION")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_CLEAR_FIELD_1);
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_CLEAR_FIELD_2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip(Blockly.Msg.BIT_CLEAR_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BIT_CLEAR_HELP_URL);
    }
};

Blockly.Blocks['bit_set'] = {
    init: function () {
        this.appendValueInput("POSITION")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_SET_FIELD_1);
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_SET_FIELD_2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip(Blockly.Msg.BIT_SET_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BIT_SET_HELP_URL);
    }
};

Blockly.Blocks['bit_write'] = {
    init: function () {
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_WRITE_FIELD_1);
        this.appendValueInput("POSITION")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_WRITE_FIELD_2);
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_WRITE_FIELD_3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip(Blockly.Msg.BIT_WRITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BIT_WRITE_HELP_URL);
    }
};

Blockly.Blocks['bit_read'] = {
    init: function () {
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_READ_FIELD_1);
        this.appendValueInput("POSITION")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_READ_FIELD_2);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip(Blockly.Msg.BIT_READ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BIT_READ_HELP_URL);
    }
};

Blockly.Blocks['high_byte'] = {
    init: function () {
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField(Blockly.Msg.HIGH_BYTE_FIELD_1);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip(Blockly.Msg.HIGH_BYTE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HIGH_BYTE_HELP_URL);
    }
};

Blockly.Blocks['low_byte'] = {
    init: function () {
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField(Blockly.Msg.LOW_BYTE_FIELD_1);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip(Blockly.Msg.LOW_BYTE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LOW_BYTE_HELP_URL);
    }
};

//endregion

//region DUO AND ZERO ONLY

//endregion

//region ADVANCED I/O
Blockly.Blocks['tone_pin_freq'] = {
    init: function() {
        this.appendValueInput("FREQUENCY")
            .setCheck("Number")
            .appendField(Blockly.Msg.TONE_PIN_FREQ_FIELD_1);
        this.appendValueInput("PIN")
            .setCheck("Number")
            .appendField(Blockly.Msg.TONE_PIN_FREQ_FIELD_2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip(Blockly.Msg.TONE_PIN_FREQ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TONE_PIN_FREQ_HELP_URL);
    }
};

Blockly.Blocks['tone_pin_freq_duration'] = {
    init: function() {
        this.appendValueInput("FREQUENCY")
            .setCheck("Number")
            .appendField(Blockly.Msg.TONE_PIN_FREQ_DURATION_FIELD_1);
        this.appendValueInput("PIN")
            .setCheck("Number")
            .appendField(Blockly.Msg.TONE_PIN_FREQ_DURATION_FIELD_2);
        this.appendValueInput("DURATION")
            .setCheck("Number")
            .appendField(Blockly.Msg.TONE_PIN_FREQ_DURATION_FIELD_3);
        this.appendDummyInput()
            .appendField(Blockly.Msg.TONE_PIN_FREQ_DURATION_FIELD_4);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip(Blockly.Msg.TONE_PIN_FREQ_DURATION_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TONE_PIN_FREQ_DURATION_HELP_URL);
    }
};
//endregion
