//All content copyright DigiPen Institute of Technology 2016
Blockly.Blocks['serial_read'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Serial Read First Byte");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['serial_print_line'] = {
    init: function() {
        this.appendValueInput("OUTPUT")
            .setCheck(null)
            .appendField("Serial Print Line");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['serial_print'] = {
    init: function() {
        this.appendValueInput("OUTPUT")
            .setCheck(null)
            .appendField("Serial Print");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['serial_end'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Serial end");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['serial_begin'] = {
    init: function() {
        this.appendValueInput("SPEED")
            .setCheck(null)
            .appendField("Serial Begin at ");
        this.appendDummyInput()
            .appendField("bits per second (baud)");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};


