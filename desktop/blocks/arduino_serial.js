//All content copyright DigiPen Institute of Technology 2016
Blockly.Blocks['serial_read'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SERIAL_READ_FIELD_1);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.SERIAL_READ_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_READ_HELP_URL);
    }
};

Blockly.Blocks['serial_print_line'] = {
    init: function() {
        this.appendValueInput("OUTPUT")
            .setCheck(null)
            .appendField(Blockly.Msg.SERIAL_PRINT_LINE_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.SERIAL_PRINT_LINE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_PRINT_LINE_HELP_URL);
    }
};

Blockly.Blocks['serial_print'] = {
    init: function() {
        this.appendValueInput("OUTPUT")
            .setCheck(null)
            .appendField(Blockly.Msg.SERIAL_PRINT_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.SERIAL_PRINT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_PRINT_HELP_URL);
    }
};

Blockly.Blocks['serial_end'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SERIAL_END_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.SERIAL_END_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_END_HELP_URL);
    }
};

Blockly.Blocks['serial_begin'] = {
    init: function() {
        this.appendValueInput("SPEED")
            .setCheck(null)
            .appendField(Blockly.Msg.SERIAL_BEGIN_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SERIAL_BEGIN_FIELD_2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.SERIAL_BEGIN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SERIAL_BEGIN_HELP_URL);
    }
};
