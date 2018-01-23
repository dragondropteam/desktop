//All content copyright DigiPen Institute of Technology 2016
'use strict';
//Set eye color left/right/on/off/rgb
//c functions
//eyesRed(); eyesGreen(); eyesBlue(); eyesPurple(); eyesPink(); eyesYellow(); eyesOrange();
//eyesCyan(); eyesWhite();
Blockly.Blocks['seteyesred_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeRed.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeRed.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESRED_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETEYESRED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESRED_HELP_URL);
    }
};

Blockly.Blocks['seteyesgreen_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGreen.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGreen.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESGREEN_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETEYESGREEN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESGREEN_HELP_URL);
    }
};

Blockly.Blocks['seteyesblue_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlue.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlue.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESBLUE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETEYESBLUE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESBLUE_HELP_URL);
    }
};

Blockly.Blocks['seteyespurple_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePurple.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePurple.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESPURPLE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETEYESPURPLE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESPURPLE_HELP_URL);
    }
};

Blockly.Blocks['seteyespink_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePink.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePink.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESPINK_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETEYESPINK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESPINK_HELP_URL);
    }
};

Blockly.Blocks['seteyesyellow_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeYellow.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeYellow.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESYELLOW_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETEYESYELLOW_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESYELLOW_HELP_URL);
    }
};

Blockly.Blocks['seteyescyan_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeCyan.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeCyan.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESCYAN_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETEYESCYAN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESCYAN_HELP_URL);
    }
};

Blockly.Blocks['seteyesorange_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOrange.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOrange.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESORANGE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETEYESORANGE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESORANGE_HELP_URL);
    }
};

Blockly.Blocks['seteyeswhite_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeWhite.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeWhite.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESWHITE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETEYESWHITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESWHITE_HELP_URL);
    }
};

Blockly.Blocks['setleftred_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeRedSelected.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTRED_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETLEFTRED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTRED_HELP_URL);
    }
};
Blockly.Blocks['setleftgreen_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGreenSelected.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTGREEN_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETLEFTGREEN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTGREEN_HELP_URL);
    }
};

Blockly.Blocks['setleftblue_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlueSelected.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTBLUE_FIE/LD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETLEFTBLUE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTBLUE_HELP_URL);
    }
};
Blockly.Blocks['setleftpurple_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePurpleSelected.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTPURPLE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETLEFTPURPLE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTPURPLE_HELP_URL);
    }
};
Blockly.Blocks['setleftpink_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePinkSelected.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTPINK_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETLEFTPINK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTPINK_HELP_URL);
    }
};
Blockly.Blocks['setleftyellow_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeYellowSelected.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTYELLOW_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETLEFTYELLOW_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTYELLOW_HELP_URL);
    }
};
Blockly.Blocks['setleftcyan_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeCyanSelected.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTCYAN_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETLEFTCYAN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTCYAN_HELP_URL);
    }
};
Blockly.Blocks['setleftorange_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOrangeSelected.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTORANGE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETLEFTORANGE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTORANGE_HELP_URL);
    }
};

Blockly.Blocks['setleftwhite_icon'] = {

    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeWhiteSelected.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTWHITE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETLEFTWHITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTWHITE_HELP_URL);
    }
};

Blockly.Blocks['setrightred_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeRedSelected.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTRED_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETRIGHTRED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTRED_HELP_URL);
    }
};

Blockly.Blocks['setrightgreen_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGreenSelected.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTGREEN_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETRIGHTGREEN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTGREEN_HELP_URL);
    }
};

Blockly.Blocks['setrightblue_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlueSelected.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTBLUE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETRIGHTBLUE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTBLUE_HELP_URL);
    }
};

Blockly.Blocks['setrightpurple_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePurpleSelected.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTPURPLE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETRIGHTPURPLE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTPURPLE_HELP_URL);
    }
};

Blockly.Blocks['setrightpink_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePinkSelected.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTPINK_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETRIGHTPINK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTPINK_HELP_URL);
    }
};

Blockly.Blocks['setrightyellow_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeYellowSelected.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTYELLOW_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETRIGHTYELLOW_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTYELLOW_HELP_URL);
    }
};

Blockly.Blocks['setrightcyan_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeCyanSelected.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTCYAN_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETRIGHTCYAN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTCYAN_HELP_URL);
    }
};

Blockly.Blocks['setrightorange_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOrangeSelected.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTORANGE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETRIGHTORANGE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTORANGE_HELP_URL);
    }
};

Blockly.Blocks['setrightwhite_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeWhiteSelected.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTWHITE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETRIGHTWHITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTWHITE_HELP_URL);
    }
};

Blockly.Blocks['seteyesrgb_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradient.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradient.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETEYESRGB_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESRGB_HELP_URL);
    }
};

Blockly.Blocks['setleftrgb_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradientSelected.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETLEFTRGB_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTRGB_HELP_URL);
    }
};

Blockly.Blocks['setrightrgb_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradientSelected.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SETRIGHTRGB_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTRGB_HELP_URL);
    }
};
Blockly.Blocks['turneyesoff_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOff.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOff.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.TURNEYESOFF_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TURNEYESOFF_HELP_URL);
    }
};

Blockly.Blocks['turnlefteyeoff_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOff.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.TURNLEFTEYEOFF_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TURNLEFTEYEOFF_HELP_URL);
    }
};

Blockly.Blocks['turnrighteyeoff_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOff.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.TURNRIGHTEYEOFF_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TURNRIGHTEYEOFF_HELP_URL);
    }
};

Blockly.Blocks['hardwarestartup_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.HARDWARESTARTUP_FIELD_1);
        this.appendStatementInput("do")
            .setCheck(null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.HARDWARESTARTUP_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HARDWARESTARTUP_HELP_URL);
    }
};

Blockly.Blocks['loop_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LOOP_FIELD_1);
        this.appendStatementInput("do")
            .setCheck(null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.LOOP_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LOOP_HELP_URL);
    }
};

Blockly.Blocks['set_left_eye_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradientSelected.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.appendValueInput("RED")
            .setCheck("Number")
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'red.png'), ICON_SIZE, ICON_SIZE));
        this.appendValueInput("GREEN")
            .setCheck("Number")
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'green.png'), ICON_SIZE, ICON_SIZE));
        this.appendValueInput("BLUE")
            .setCheck("Number")
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'blue.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SET_LEFT_EYE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_LEFT_EYE_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['set_right_eye_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradientSelected.png'), ICON_SIZE, ICON_SIZE));
        this.appendValueInput("RED")
            .setCheck("Number")
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'red.png'), ICON_SIZE, ICON_SIZE));
        this.appendValueInput("GREEN")
            .setCheck("Number")
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'green.png'), ICON_SIZE, ICON_SIZE));
        this.appendValueInput("BLUE")
            .setCheck("Number")
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'blue.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SET_RIGHT_EYE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_RIGHT_EYE_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


Blockly.Blocks['set_eyes_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradient.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradient.png'), ICON_SIZE, ICON_SIZE));
        this.appendValueInput("RED")
            .setCheck("Number")
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'red.png'), ICON_SIZE, ICON_SIZE));
        this.appendValueInput("GREEN")
            .setCheck("Number")
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'green.png'), ICON_SIZE, ICON_SIZE));
        this.appendValueInput("BLUE")
            .setCheck("Number")
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'blue.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SET_EYES_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_EYES_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


Blockly.Blocks['perform_police_lights_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradient.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradient.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradient.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradient.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradient.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.SET_EYES_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_EYES_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

