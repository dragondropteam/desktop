// Color Configuration
//const ARDUINO_SERIAL_COLOUR = '#5B67A5'; // Hue 230


//All content copyright DigiPen Institute of Technology 2016
Blockly.Blocks['serial_read'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SERIAL_READ_FIELD_1);
        this.setOutput(true, null);
        this.setColour(ARDUINO_SERIAL_COLOUR);
        this.setTooltip(Blockly.Msg.SERIAL_READ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_READ_HELP_URL);
    }
};

Blockly.Blocks['serial_print_line'] = {
    init: function () {
        this.appendValueInput("OUTPUT")
            .setCheck(null)
            .appendField(Blockly.Msg.SERIAL_PRINT_LINE_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_SERIAL_COLOUR);
        this.setTooltip(Blockly.Msg.SERIAL_PRINT_LINE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_PRINT_LINE_HELP_URL);
    }
};

Blockly.Blocks['serial_print'] = {
    init: function () {
        this.appendValueInput("OUTPUT")
            .setCheck(null)
            .appendField(Blockly.Msg.SERIAL_PRINT_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_SERIAL_COLOUR);
        this.setTooltip(Blockly.Msg.SERIAL_PRINT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_PRINT_HELP_URL);
    }
};

Blockly.Blocks['serial_end'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SERIAL_END_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_SERIAL_COLOUR);
        this.setTooltip(Blockly.Msg.SERIAL_END_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_END_HELP_URL);
    }
};

Blockly.Blocks['serial_begin'] = {
    init: function () {
        this.appendValueInput("SPEED")
            .setCheck(null)
            .appendField(Blockly.Msg.SERIAL_BEGIN_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SERIAL_BEGIN_FIELD_2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(ARDUINO_SERIAL_COLOUR);
        this.setTooltip(Blockly.Msg.SERIAL_BEGIN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_BEGIN_HELP_URL);
    }
};

Blockly.Blocks['serial_available'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARDUINO_SERIAL_AVAILABLE);
        this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_AVAILABLE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_AVAILABLE_HELP_URL);
        this.setOutput(true, 'Number');
        this.setColour(ARDUINO_SERIAL_COLOUR);
    }
};

Blockly.Blocks['serial_available_write'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARDUINO_SERIAL_AVAILABLE_FOR_WRITE);
        this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_AVAILABLE_FOR_WRITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_AVAILABLE_FOR_WRITE_HELP_URL);
        this.setOutput(true, 'Number');
        this.setColour(ARDUINO_SERIAL_COLOUR);
    }
};

Blockly.Blocks['serial_find'] = {
    init: function () {
        this.appendValueInput('TARGET')
            .setCheck('String')
            .appendField(Blockly.Msg.ARDUINO_SERIAL_FIND);
        this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_FIND_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_FIND_HELP_URL);
        this.setColour(ARDUINO_SERIAL_COLOUR);
        this.setOutput(true, 'Boolean');
    }
};

Blockly.Blocks['serial_find_until'] = {
    init: function () {
        this.appendValueInput('TARGET')
            .setCheck('String')
            .appendField(Blockly.Msg.ARDUINO_SERIAL_FIND_UNTIL);
        this.appendValueInput('TERMINAL')
            .setCheck('String')
            .appendField(Blockly.Msg.ARDUINO_SERIAL_UNTIL);
        this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_FIND_UNTIL_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_FIND_UNTIL_HELP_URL);
        this.setColour(ARDUINO_SERIAL_COLOUR);
        this.setOutput(true, 'Boolean');
    }
};

Blockly.Blocks['serial_flush'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARDUINO_SERIAL_FLUSH);
        this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_FLUSH_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_FLUSH_HELP_URL);
        this.setNextStatement(true);
        this.setPreviousStatement(true)
        this.setColour(ARDUINO_SERIAL_COLOUR);
    }
};

Blockly.Blocks['serial_parse_float'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARDUINO_SERIAL_PARSE_FLOAT);
        this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_PARSE_FLOAT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_PARSE_FLOAT_HELP_URL);
        this.setOutput(true, 'Number');
        this.setColour(ARDUINO_SERIAL_COLOUR);
    }
};

Blockly.Blocks['serial_parse_int'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARDUINO_SERIAL_PARSE_INT);
        this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_PARSE_INT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_PARSE_INT_HELP_URL);
        this.setOutput(true, 'Number');
        this.setColour(ARDUINO_SERIAL_COLOUR);
    }
};

Blockly.Blocks['serial_peek'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ARDUINO_SERIAL_PEEK);
        this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_PEEK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_PEEK_HELP_URL);
        this.setOutput(true, 'Number');
        this.setColour(ARDUINO_SERIAL_COLOUR);
    }
};
Blockly.Blocks['serial_read_bytes'] = {
    init: function() {
        this.appendValueInput('BUFFER')
            .setCheck('ArrayINT')
            .appendField(Blockly.Msg.ARDUINO_SERIAL_READ_BYTES);
        this.appendValueInput('LENGTH')
            .setCheck('Number')
            .appendField(Blockly.Msg.ARDUINO_SERIAL_READ_BYTES_UP_TO);
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_READ_BYTES_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_READ_BYTES_HELP_URL);
        this.setOutput(true, 'Number');
        this.setColour(ARDUINO_SERIAL_COLOUR);
    }
};

Blockly.Blocks['serial_read_bytes_until'] = {
    init: function() {
        this.appendValueInput('BUFFER')
            .setCheck('ArrayINT')
            .appendField(Blockly.Msg.ARDUINO_SERIAL_READ_BYTES);
        this.appendValueInput('LENGTH')
            .setCheck('Number')
            .appendField(Blockly.Msg.ARDUINO_SERIAL_READ_BYTES_UP_TO);
        this.appendValueInput('TERMINAL')
            .setCheck('Number')
            .appendField(Blockly.Msg.ARDUINO_SERIAL_READ_BYTES_UNTIL_TERMINAL)
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_READ_BYTES_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_READ_BYTES_HELP_URL);
        this.setOutput(true, 'Number');
        this.setColour(ARDUINO_SERIAL_COLOUR);
    }
};

Blockly.Blocks['serial_set_timeout'] = {
    init: function() {
        this.appendValueInput('MILLISECONDS')
            .setCheck('Number')
            .appendField(Blockly.Msg.ARDUINO_SERIAL_SET_TIMEOUT);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MILLISECONDS);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.ARDUINO_SERIAL_SET_TIMEOUT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ARDUINO_SERIAL_SET_TIMEOUT);
        this.setColour(ARDUINO_SERIAL_COLOUR);
        this.setInputsInline(true);
    }
};

