Blockly.Blocks['phaser_simple_init_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'gamecontroler.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_2)
            .appendField(new Blockly.FieldNumber(800), "WIDTH")
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_3)
            .appendField(new Blockly.FieldNumber(600), "HEIGHT");
        this.appendStatementInput("PRELOAD")
            .setCheck(null)
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_4);
        this.appendStatementInput("CREATE")
            .setCheck(null)
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_5);
        this.appendStatementInput("UPDATE")
            .setCheck(null)
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_6);
        this.setColour(PHASER_STARTUP_COLOUR);
        this.setTooltip(Blockly.Msg.PHASER_SIMPLE_INIT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PHASER_SIMPLE_INIT_HELP_URL);
    }
};

Blockly.Blocks['create_image_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'addPicture.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(Blockly.Msg.CREATE_IMAGE_FIELD_1);
        this.setColour(PHASER_COLOUR);
        this.appendValueInput('TAG')
            .appendField(Blockly.Msg.CREATE_IMAGE_FIELD_2)
            .setCheck('String');
        this.appendValueInput('SRC')
            .appendField(Blockly.Msg.CREATE_IMAGE_FIELD_3)
            .setCheck('String');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setInputsInline(false);
        this.setTooltip(Blockly.Msg.CREATE_IMAGE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CREATE_IMAGE_HELP_URL);
    }
};

Blockly.Blocks['add_text_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'text.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADD_TEXT_FIELD_1);
        this.appendValueInput("X_POS")
            .setCheck("Number")
            .appendField(Blockly.Msg.ADD_TEXT_FIELD_2);
        this.appendValueInput("Y_POS")
            .setCheck("Number")
            .appendField(Blockly.Msg.ADD_TEXT_FIELD_3);
        this.appendValueInput("INITIAL_TEXT")
            .setCheck("String")
            .appendField(Blockly.Msg.ADD_TEXT_FIELD_4);
        this.appendValueInput("FONT_SIZE")
            .setCheck("Number")
            .appendField(Blockly.Msg.ADD_TEXT_FIELD_5);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADD_TEXT_FIELD_6)
            .appendField(new Blockly.FieldColour("#ff0000"), "FILL");
        this.setOutput(true, null);
        this.setInputsInline(false);
        this.setTooltip(Blockly.Msg.ADD_TEXT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ADD_TEXT_HELP_URL);
        this.setColour(PHASER_TEXT_COLOUR);
    }
};


Blockly.Blocks['set_text_vi_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'text.png'), ICON_SIZE, ICON_SIZE));
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.SET_TEXT_VI_FIELD_1);
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField(Blockly.Msg.SET_TEXT_VI_FIELD_2);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SET_TEXT_VI_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_TEXT_VI_HELP_URL);
        this.setColour(PHASER_TEXT_COLOUR);
    }
};

Blockly.Blocks['faint_object_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'sleeping.png'), ICON_SIZE, ICON_SIZE));
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.FAINT_OBJECT_FIELD_1);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
        this.setTooltip(Blockly.Msg.FAINT_OBJECT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.FAINT_OBJECT_HELP_URL);
    }
};
