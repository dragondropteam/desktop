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
          .appendField("setup");
        this.appendStatementInput("do")
          .setCheck(null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

//region TIME

Blockly.Blocks['delayms'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Delay");
        this.appendValueInput("MILLISECONDS")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField("Milliseconds");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/Delay');
    }
};

Blockly.Blocks['delaymicroseconds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Delay");
        this.appendValueInput("MICROSECONDS")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField("Microseconds");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/DelayMicroseconds');
    }
};

Blockly.Blocks['milliseconds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Milliseconds Since Start ");
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/Millis');
    }
};

Blockly.Blocks['microseconds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Microseconds Since Start ");
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/Micros');
    }
};
//endregion

//region PINS
Blockly.Blocks['pininput'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set Pin # ");
        this.appendValueInput("PIN")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField("to")
            .appendField(new Blockly.FieldDropdown([["input", "INPUT"], ["output", "OUTPUT"], ["input_pullup", "INPUT_PULLUP"]]), "MODE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};


Blockly.Blocks['digitalwrite'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Digital Write")
            .appendField(new Blockly.FieldDropdown([["HIGH", "HIGH"], ["LOW", "LOW"]]), "VALUE");
        this.appendValueInput("PIN")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField("to pin #");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('Writes either HIGH or LOW to the given pin');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/DigitalWrite');
    }
};

Blockly.Blocks['digital_read'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Digital Read Pin #");
        this.appendValueInput("PIN")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('Reads either HIGH or LOW from a digital pin');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/DigitalRead');
    }
};
//endregion

//region CONSTANTS
Blockly.Blocks['high'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("HIGH");
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/Constants');
    }
};


Blockly.Blocks['low'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("LOW");
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/Constants');
    }
};

Blockly.Blocks['led_builtin'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("LED_BUILTIN");
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/Constants');
    }
};

//endregion

//region ANALOG I/O
Blockly.Blocks['analog_reference'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set Analog Reference To")
            .appendField(new Blockly.FieldDropdown([["DEFAULT", "DEFAULT"], ["EXTERNAL", "EXTERNAL"], ["INTERNAL (Not Available on Mega)", "INTERNAL"], ["INTERNAL1V1 (Mega Only)", "INTERNAL1V1"], ["INTERNAL2V56 (Mega Only)", "INTERNAL2V56"]]), "TYPE");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('Set the reference voltage for analog input');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/AnalogReference');
    }
};

Blockly.Blocks['analog_read'] = {
    init: function() {
        this.appendValueInput("PIN")
            .setCheck("Number")
            .appendField("Analog Read Pin #");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('Read the value from the given analog pin');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/AnalogRead');
    }
};

Blockly.Blocks['analog_write'] = {
    init: function() {
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField("Analog Write ");
        this.appendValueInput("PIN")
            .setCheck("Number")
            .appendField("to Pin #");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/AnalogWrite');
    }
};
//endregion

//region RANDOM NUMBERS
Blockly.Blocks['random_seed'] = {
    init: function () {
        this.appendValueInput("SEED")
            .setCheck("Number")
            .appendField("Randomize seed with value");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/RandomSeed');
    }
};

Blockly.Blocks['random'] = {
    init: function () {
        this.appendValueInput("MIN")
            .setCheck("Number")
            .appendField("Random value between");
        this.appendValueInput("MAX")
            .setCheck("Number")
            .appendField("and");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/Random');
    }
};
//endregion

//region BITS AND BYTES

Blockly.Blocks['bit'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField("Value of bit");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/Bit');
    }
};

Blockly.Blocks['bit_clear'] = {
    init: function () {
        this.appendValueInput("POSITION")
            .setCheck("Number")
            .appendField("Clear bit");
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField("from Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/BitClear');
    }
};

Blockly.Blocks['bit_set'] = {
    init: function () {
        this.appendValueInput("POSITION")
            .setCheck("Number")
            .appendField("Set bit");
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField("in Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/BitSet');
    }
};

Blockly.Blocks['bit_write'] = {
    init: function () {
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField("Set Number");
        this.appendValueInput("POSITION")
            .setCheck("Number")
            .appendField("at Position");
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField("with Value");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/BitWrite');
    }
};

Blockly.Blocks['bit_read'] = {
    init: function () {
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField("Read Number");
        this.appendValueInput("POSITION")
            .setCheck("Number")
            .appendField("at Position");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/BitRead');
    }
};

Blockly.Blocks['high_byte'] = {
    init: function () {
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField("Get high-byte from Number");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/HighByte');
    }
};

Blockly.Blocks['low_byte'] = {
    init: function () {
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField("Get low-byte from Number");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/LowByte');
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
            .appendField("Play Frequency");
        this.appendValueInput("PIN")
            .setCheck("Number")
            .appendField("on Pin #");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/Tone');
    }
};

Blockly.Blocks['tone_pin_freq_duration'] = {
    init: function() {
        this.appendValueInput("FREQUENCY")
            .setCheck("Number")
            .appendField("Play Frequency");
        this.appendValueInput("PIN")
            .setCheck("Number")
            .appendField("on Pin #");
        this.appendValueInput("DURATION")
            .setCheck("Number")
            .appendField("for ");
        this.appendDummyInput()
            .appendField("Milliseconds");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('https://www.arduino.cc/en/Reference/Tone');
    }
};
//endregion
