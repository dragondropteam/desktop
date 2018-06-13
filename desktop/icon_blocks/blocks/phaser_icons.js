Blockly.Blocks['phaser_simple_init_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'gamecontroler.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT);
        this.appendDummyInput()
            .appendField(Blockly.Msg.WIDTH)
            .appendField(new Blockly.FieldNumber(800), "WIDTH")
            .appendField(Blockly.Msg.HEIGHT)
            .appendField(new Blockly.FieldNumber(600), "HEIGHT");
        this.appendStatementInput("PRELOAD")
            .setCheck(null)
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_PRELOAD);
        this.appendStatementInput("CREATE")
            .setCheck(null)
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_CREATE);
        this.appendStatementInput("UPDATE")
            .setCheck(null)
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_UPDATE);
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
            .appendField(Blockly.Msg.CREATE_IMAGE);
        this.setColour(PHASER_COLOUR);
        this.appendValueInput('TAG')
            .appendField(Blockly.Msg.TAG)
            .setCheck('String');
        this.appendValueInput('SRC')
            .appendField(Blockly.Msg.SOURCE)
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
            .appendField(Blockly.Msg.ADD_TEXT);
        this.appendValueInput("X_POS")
            .setCheck("Number")
            .appendField(Blockly.Msg.X);
        this.appendValueInput("Y_POS")
            .setCheck("Number")
            .appendField(Blockly.Msg.Y);
        this.appendValueInput("INITIAL_TEXT")
            .setCheck("String")
            .appendField(Blockly.Msg.ADD_TEXT_INITIAL);
        this.appendValueInput("FONT_SIZE")
            .setCheck("Number")
            .appendField(Blockly.Msg.ADD_TEXT_FONT_SIZE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADD_TEXT_FONT_COLOUR)
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
            .appendField(Blockly.Msg.SET_TEXT_VI);
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField(Blockly.Msg.TO);
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
            .appendField(Blockly.Msg.FAINT_OBJECT);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
        this.setTooltip(Blockly.Msg.FAINT_OBJECT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.FAINT_OBJECT_HELP_URL);
    }
};

// Assigning to default block to get the icon.
Blockly.Blocks['comment_oneline'] = Blockly.Blocks['comment_oneline_icon'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'comment.svg'), ICON_SIZE / 2, ICON_SIZE / 2))
            .appendField(new Blockly.FieldTextInput(''), 'TEXT');
        this.setColour(EVAL_JAVASCRIPT_COLOUR);
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};