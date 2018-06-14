'use strict';
goog.provide('Blockly.Blocks.arduino');
goog.require('Blockly.Blocks');

const ARDUINO_REQUIRED_BLOCKS_COLOUR = '#558B2F'; //'#689f38';


const ARDUINO_TIME_COLOUR = '#726dc5';//377ae2
const ARDUINO_PINS_COLOUR = '#4d6bc4';//'#2c897f';
const ARDUINO_ANALOG_IO_COLOUR = '#439bbc';//'#2aaf44';
const ARDUINO_ADVANCED_IO_COLOUR = '#2c897f';//'#6c9e28';
const ARDUINO_EEPROM_COLOUR = '#44a14f';//bfab36
const ARDUINO_SERVO_COLOUR = '#73a82b';//d2aa35
const ARDUINO_SERIAL_COLOUR = '#bfab36';//9d5b32
const ARDUINO_CONSTANTS_COLOUR = '#c08027';//'#e6505b';

// Unused?
const ARDUINO_RANDOM_NUMBER_COLOUR = 150;//'#283593';
const ARDUINO_BITS_AND_BYTES_COLOUR = 180;//'#1565c0';
const ARDUINO_MATH_COLOUR = 240;//'#00695c';



//region REQUIRED BLOCKS

/**
 * There has to be a different hardware startup block for arduino as
 * we do not have the hardware setup step
 * @type {{init: Blockly.Blocks.hardwarestartup.init}}
 */
Blockly.Blocks['hardwarestartup_arduino'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SETUP);
        this.appendStatementInput("do")
            .setCheck(null);
        this.setColour(ARDUINO_REQUIRED_BLOCKS_COLOUR);
        this.setTooltip(Blockly.Msg.HARDWARESTARTUP_ARDUINO_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HARDWARESTARTUP_ARDUINO_HELP_URL);
    }
};

//endregion WINK REQUIRED BLOCKS

//region TIME

Blockly.Blocks['delayseconds'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DELAY);
        this.appendValueInput("SECONDS")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(Blockly.Msg.SECONDS);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_TIME_COLOUR);
        this.setTooltip(Blockly.Msg.DELAY_SECONDS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DELAY_SECONDS_HELP_URL);
    }
};

Blockly.Blocks['delayms'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DELAY);
        this.appendValueInput("MILLISECONDS")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(Blockly.Msg.MILLISECONDS);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_TIME_COLOUR);
        this.setTooltip(Blockly.Msg.DELAY_MILLISECONDS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DELAY_MILLISECONDS_HELP_URL);
    }
};

Blockly.Blocks['delaymicroseconds'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DELAY);
        this.appendValueInput("MICROSECONDS")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(Blockly.Msg.MICROSECONDS);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_TIME_COLOUR);
        this.setTooltip(Blockly.Msg.DELAY_MICROSECONDS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DELAY_MICROSECONDS_HELP_URL);
    }
};

Blockly.Blocks['seconds'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SECONDS + ' ' + Blockly.Msg.SINCE_START);
        this.setOutput(true, "Number");
        this.setColour(ARDUINO_TIME_COLOUR);
        this.setTooltip(Blockly.Msg.SECONDS_SINCE_START_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SECONDS_SINCE_START_HELP_URL);
    }
};

Blockly.Blocks['milliseconds'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MILLISECONDS + ' ' + Blockly.Msg.SINCE_START);
        this.setOutput(true, "Number");
        this.setColour(ARDUINO_TIME_COLOUR);
        this.setTooltip(Blockly.Msg.MILLISECONDS_SINCE_START_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.MILLISECONDS_SINCE_START_HELP_URL);
    }
};

Blockly.Blocks['microseconds'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MICROSECONDS + ' ' + Blockly.Msg.SINCE_START);
        this.setOutput(true, "Number");
        this.setColour(ARDUINO_TIME_COLOUR);
        this.setTooltip(Blockly.Msg.MICROSECONDS_SINCE_START_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.MICROSECONDS_SINCE_START_HELP_URL);
    }
};

//endregion

//region PINS
Blockly.Blocks['pininput'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PININPUT);
        this.appendValueInput("PIN")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(Blockly.Msg.TO)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PININPUT_MODE_DROPDOWN_INPUT, "INPUT"], [Blockly.Msg.PININPUT_MODE_DROPDOWN_OUTPUT, "OUTPUT"], [Blockly.Msg.PININPUT_MODE_DROPDOWN_INPUT_PULLUP, "INPUT_PULLUP"]]), "MODE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_PINS_COLOUR);
        this.setTooltip(Blockly.Msg.PININPUT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PININPUT_HELP_URL);
    }
};


Blockly.Blocks['digitalwrite'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DIGITALWRITE)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HIGH, "HIGH"], [Blockly.Msg.LOW, "LOW"]]), "VALUE");
        this.appendValueInput("PIN")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(Blockly.Msg.DIGITALWRITE_NUMBER);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_PINS_COLOUR);
        this.setTooltip(Blockly.Msg.DIGITALWRITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DIGITALWRITE_HELP_URL);
    }
};

Blockly.Blocks['digital_read'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DIGITAL_READ);
        this.appendValueInput("PIN")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(ARDUINO_PINS_COLOUR);
        this.setTooltip(Blockly.Msg.DIGITAL_READ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DIGITAL_READ_HELP_URL);
    }
};
//endregion

//region CONSTANTS
Blockly.Blocks['high'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.HIGH);
        this.setOutput(true, "Number");
        this.setColour(ARDUINO_CONSTANTS_COLOUR);
        this.setTooltip(Blockly.Msg.HIGH_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HIGH_HELP_URL);
    }
};


Blockly.Blocks['low'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LOW);
        this.setOutput(true, "Number");
        this.setColour(ARDUINO_CONSTANTS_COLOUR);
        this.setTooltip(Blockly.Msg.LOW_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LOW_HELP_URL);
    }
};

Blockly.Blocks['led_builtin'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LED_BUILTIN);
        this.setOutput(true, "Number");
        this.setColour(ARDUINO_CONSTANTS_COLOUR);
        this.setTooltip(Blockly.Msg.LED_BUILTIN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LED_BUILTIN_HELP_URL);
    }
};

//endregion

//region ANALOG I/O
Blockly.Blocks['analog_reference'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ANALOG_REFERENCE)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ANALOG_REFERENCE_TYPE_DROPDOWN_DEFAULT, "DEFAULT"], [Blockly.Msg.ANALOG_REFERENCE_TYPE_DROPDOWN_EXTERNAL, "EXTERNAL"], [Blockly.Msg.ANALOG_REFERENCE_TYPE_DROPDOWN_INTERNAL1, "INTERNAL"], [Blockly.Msg.ANALOG_REFERENCE_TYPE_DROPDOWN_INTERAL2, "INTERNAL1V1"], [Blockly.Msg.ANALOG_REFERENCE_TYPE_DROPDOWN_INTERAL3, "INTERNAL2V56"]]), "TYPE");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_ANALOG_IO_COLOUR);
        this.setTooltip(Blockly.Msg.ANALOG_REFERENCE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ANALOG_REFERENCE_HELP_URL);
    }
};

Blockly.Blocks['analog_read'] = {
    init: function () {
        this.appendValueInput("PIN")
            .setCheck("Number")
            .appendField(Blockly.Msg.ANALOG_READ);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(ARDUINO_ANALOG_IO_COLOUR);
        this.setTooltip(Blockly.Msg.ANALOG_READ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ANALOG_READ_HELP_URL);
    }
};

Blockly.Blocks['analog_write'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.ANALOG_WRITE);
        this.appendValueInput("PIN")
            .setCheck("Number")
            .appendField(Blockly.Msg.ANALOG_WRITE_NUMBER);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_ANALOG_IO_COLOUR);
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
            .appendField(Blockly.Msg.RANDOM_SEED);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_RANDOM_NUMBER_COLOUR);
        this.setTooltip(Blockly.Msg.RANDOM_SEED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.RANDOM_SEED_HELP_URL);
    }
};

Blockly.Blocks['random'] = {
    init: function () {
        this.appendValueInput("MIN")
            .setCheck("Number")
            .appendField(Blockly.Msg.RANDOM);
        this.appendValueInput("MAX")
            .setCheck("Number")
            .appendField(Blockly.Msg.AND);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(ARDUINO_RANDOM_NUMBER_COLOUR);
        this.setTooltip(Blockly.Msg.RANDOM_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.RANDOM_HELP_URL);
    }
};

Blockly.Blocks['arduino_random_seed'] = {
  init: function() {
    this.appendValueInput('SEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.ARDUINO_RANDOM_SEED);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_RANDOM_SEED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_RANDOM_SEED_HELP_URL);
  }
};

Blockly.Blocks['arduino_random'] = {
  init: function() {
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.ARDUINO_RANDOM);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.AND);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(Blockly.Blocks.math.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_RANDOM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_RANDOM_HELP_URL);
  }
};

Blockly.Blocks['arduino_srand'] = {
  init: function() {
    this.appendValueInput('SEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.ARDUINO_SRAND);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(Blockly.Blocks.math.HUE);
    this.setTooltip(Blockly.Msg.ARDUINO_SRAND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ARDUINO_SRAND_HELP_URL);
  }
};
//endregion

//region BITS AND BYTES

Blockly.Blocks['bit'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(ARDUINO_BITS_AND_BYTES_COLOUR);
        this.setTooltip(Blockly.Msg.BIT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BIT_HELP_URL);
    }
};

Blockly.Blocks['bit_clear'] = {
    init: function () {
        this.appendValueInput("POSITION")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_CLEAR);
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_CLEAR_NUMBER);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_BITS_AND_BYTES_COLOUR);
        this.setTooltip(Blockly.Msg.BIT_CLEAR_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BIT_CLEAR_HELP_URL);
    }
};

Blockly.Blocks['bit_set'] = {
    init: function () {
        this.appendValueInput("POSITION")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_SET);
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_SET_NUMBER);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_BITS_AND_BYTES_COLOUR);
        this.setTooltip(Blockly.Msg.BIT_SET_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BIT_SET_HELP_URL);
    }
};

Blockly.Blocks['bit_write'] = {
    init: function () {
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_WRITE);
        this.appendValueInput("POSITION")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_WRITE_POSITION);
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_WRITE_VALUE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_BITS_AND_BYTES_COLOUR);
        this.setTooltip(Blockly.Msg.BIT_WRITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BIT_WRITE_HELP_URL);
    }
};

Blockly.Blocks['bit_read'] = {
    init: function () {
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_READ);
        this.appendValueInput("POSITION")
            .setCheck("Number")
            .appendField(Blockly.Msg.BIT_READ_POSITION);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(ARDUINO_BITS_AND_BYTES_COLOUR);
        this.setTooltip(Blockly.Msg.BIT_READ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BIT_READ_HELP_URL);
    }
};

Blockly.Blocks['high_byte'] = {
    init: function () {
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField(Blockly.Msg.HIGH_BYTE);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(ARDUINO_BITS_AND_BYTES_COLOUR);
        this.setTooltip(Blockly.Msg.HIGH_BYTE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HIGH_BYTE_HELP_URL);
    }
};

Blockly.Blocks['low_byte'] = {
    init: function () {
        this.appendValueInput("NUMBER")
            .setCheck("Number")
            .appendField(Blockly.Msg.LOW_BYTE);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(ARDUINO_BITS_AND_BYTES_COLOUR);
        this.setTooltip(Blockly.Msg.LOW_BYTE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LOW_BYTE_HELP_URL);
    }
};

//endregion

//region DUO AND ZERO ONLY

//endregion

//region ADVANCED I/O
Blockly.Blocks['tone_pin_freq'] = {
    init: function () {
        this.appendValueInput("FREQUENCY")
            .setCheck("Number")
            .appendField(Blockly.Msg.TONE_PIN_FREQ);
        this.appendValueInput("PIN")
            .setCheck("Number")
            .appendField(Blockly.Msg.TONE_PIN_FREQ_PIN);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_ADVANCED_IO_COLOUR);
        this.setTooltip(Blockly.Msg.TONE_PIN_FREQ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TONE_PIN_FREQ_HELP_URL);
    }
};

Blockly.Blocks['tone_pin_freq_duration'] = {
    init: function () {
        this.appendValueInput("FREQUENCY")
            .setCheck("Number")
            .appendField(Blockly.Msg.TONE_PIN_FREQ_DURATION);
        this.appendValueInput("PIN")
            .setCheck("Number")
            .appendField(Blockly.Msg.TONE_PIN_FREQ_DURATION_PIN);
        this.appendValueInput("DURATION")
            .setCheck("Number")
            .appendField(Blockly.Msg.FOR);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MILLISECONDS);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_ADVANCED_IO_COLOUR);
        this.setTooltip(Blockly.Msg.TONE_PIN_FREQ_DURATION_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TONE_PIN_FREQ_DURATION_HELP_URL);
    }
};

Blockly.Blocks['advanced_io_pulse_in'] = {
    init: function () {
        this.appendValueInput('PIN')
            .setCheck('Number')
            .appendField(Blockly.Msg.ADVANCED_IO_PULSE_IN)
            .appendField(Blockly.Msg.PIN);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HIGH, 'HIGH'], [Blockly.Msg.LOW, 'LOW']]), 'VALUE');
        this.setTooltip(Blockly.Msg.ADVANCED_IO_PULSE_IN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ADVANCED_IO_PULSE_IN_HELP_URL);
        this.setColour(ARDUINO_ADVANCED_IO_COLOUR);
        this.setOutput(true, 'Number');
    }
};

Blockly.Blocks['advanced_io_pulse_in_timeout'] = {
    init: function () {
        this.appendValueInput('PIN')
            .setCheck('Number')
            .appendField(Blockly.Msg.ADVANCED_IO_PULSE_IN)
            .appendField(Blockly.Msg.PIN);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HIGH, 'HIGH'], [Blockly.Msg.LOW, 'LOW']]), 'VALUE')
        this.appendValueInput('TIMEOUT')
            .setCheck('Number')
            .appendField(Blockly.Msg.TIMEOUT);
        this.setTooltip(Blockly.Msg.ADVANCED_IO_PULSE_IN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ADVANCED_IO_PULSE_IN_HELP_URL);
        this.setColour(ARDUINO_ADVANCED_IO_COLOUR);
        this.setOutput(true, 'Number');
    }
};

Blockly.Blocks['advanced_io_pulse_in_long'] = {
    init: function () {
        this.appendValueInput('PIN')
            .setCheck('Number')
            .appendField(Blockly.Msg.ADVANCED_IO_PULSE_IN_LONG)
            .appendField(Blockly.Msg.PIN);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HIGH, 'HIGH'], [Blockly.Msg.LOW, 'LOW']]), 'VALUE')
        this.setTooltip(Blockly.Msg.ADVANCED_IO_PULSE_IN_LONG_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ADVANCED_IO_PULSE_IN_LONG_HELP_URL);
        this.setColour(ARDUINO_ADVANCED_IO_COLOUR);
        this.setOutput(true, 'Number');
    }
};

Blockly.Blocks['advanced_io_pulse_in_long_timeout'] = {
    init: function () {
        this.appendValueInput('PIN')
            .setCheck('Number')
            .appendField(Blockly.Msg.ADVANCED_IO_PULSE_IN_LONG)
            .appendField(Blockly.Msg.PIN);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HIGH, 'HIGH'], [Blockly.Msg.LOW, 'LOW']]), 'VALUE')
        this.appendValueInput('TIMEOUT')
            .setCheck('Number')
            .appendField(Blockly.Msg.TIMEOUT);
        this.setTooltip(Blockly.Msg.ADVANCED_IO_PULSE_IN_LONG_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ADVANCED_IO_PULSE_IN_LONG_HELP_URL);
        this.setColour(ARDUINO_ADVANCED_IO_COLOUR);
        this.setOutput(true, 'Number');
    }
};

Blockly.Blocks['advanced_io_shift_in'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADVANCED_IO_SHIFT_IN);
        this.appendValueInput('DATA_PIN')
            .setCheck('Number')
            .appendField(Blockly.Msg.ADVANCED_IO_DATA_PIN);
        this.appendValueInput('CLOCK_PIN')
            .setCheck('Number')
            .appendField(Blockly.Msg.ADVANCED_IO_CLOCK_PIN);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADVANCED_IO_BIT_ORDER )
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ADVANCED_IO_LEAST_SIGNIFICANT_BIT_FIRST, 'LSBFIRST'], [Blockly.Msg.ADVANCED_IO_BIT_FIRST, 'MSBFIRST']]), 'BIT_ORDER');
        this.setTooltip(Blockly.Msg.ADVANCED_IO_PULSE_IN_LONG_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ADVANCED_IO_PULSE_IN_LONG_HELP_URL);
        this.setColour(ARDUINO_ADVANCED_IO_COLOUR);
        this.setInputsInline(false);
        this.setOutput(true, 'Number');
    }
};

Blockly.Blocks['advanced_io_shift_out'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADVANCED_IO_SHIFT_OUT);
        this.appendValueInput('DATA_PIN')
            .setCheck('Number')
            .appendField(Blockly.Msg.ADVANCED_IO_DATA_PIN);
        this.appendValueInput('CLOCK_PIN')
            .setCheck('Number')
            .appendField(Blockly.Msg.ADVANCED_IO_CLOCK_PIN);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ADVANCED_IO_LEAST_SIGNIFICANT_BIT_FIRST, 'LSBFIRST'], [Blockly.Msg.ADVANCED_IO_BIT_FIRST, 'MSBFIRST']]), 'BIT_ORDER');
        this.appendValueInput('VALUE')
            .setCheck('Number')
            .appendField(Blockly.Msg.VALUE);
        this.setTooltip(Blockly.Msg.ADVANCED_IO_SHIFT_OUT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ADVANCED_IO_SHIFT_OUT_HELP_URL);
        this.setColour(ARDUINO_ADVANCED_IO_COLOUR);
        this.setInputsInline(false);
        this.setOutput(true, 'Number');
    }
};

//endregion

//region MATH
Blockly.Blocks['arduino_math_map'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARDUINO_MATH_MAP);
        this.appendValueInput('VALUE')
            .setCheck('Number');
        this.appendValueInput('FROM_LOW')
            .setCheck('Number')
            .appendField(Blockly.Msg.ARDUINO_MATH_MAP_FROM_LOW);
        this.appendValueInput('FROM_HIGH')
            .setCheck('Number')
            .appendField(Blockly.Msg.ARDUINO_MATH_MAP_FROM_HIGH);
        this.appendValueInput('TO_LOW')
            .setCheck('Number')
            .appendField(Blockly.Msg.ARDUINO_MATH_MAP_TO_LOW);
        this.appendValueInput('TO_HIGH')
            .setCheck('Number')
            .appendField(Blockly.Msg.ARDUINO_MATH_MAP_TO_HIGH);
        this.setColour(ARDUINO_MATH_COLOUR);
        this.setOutput(true, 'Number');
    }
};

//endregion
