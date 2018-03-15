//All content copyright DigiPen Institute of Technology 2016
'use strict';

// Block Colors
const WINK_ICON_BLOCK_COLOUR_EYES_LEFT = '#6b6b6b'; //330;
const WINK_ICON_BLOCK_COLOUR_EYES_RIGHT = '#6b6b6b'; //330;
const WINK_ICON_BLOCK_COLOUR_EYES_BOTH = '#6b6b6b'; //330;
const WINK_ICON_BLOCK_COLOUR_LIGHT_EFFECTS = '#848484'; //330;

const WINK_ICON_MOVEMENT_COLOUR = '#348783'; //330;
const WINK_ICON_MOVEMENT_ADVANCED_COLOUR = '#459A9A'; //330;

const WINK_ICON_SENSOR_BEHAVIORS = '#F36B28'; //330;
const WINK_ICON_SENSOR_INPUTS = '#F97E35'; //330;
const WINK_ICON_SENSOR_OUTPUTS = '#FF9042'; //330;

const WINK_ICON_TIME_COLOUR = '#2175CE';//'#2C85DB';



//region REQUIRED_BLOCKS

Blockly.Blocks['hardwarestartup_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.HARDWARESTARTUP_FIELD_1);
        this.appendStatementInput("do")
            .setCheck(null);
        this.setColour('#1565c0');
        this.setTooltip(Blockly.Msg.HARDWARESTARTUP_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HARDWARESTARTUP_HELP_URL);
    }
};

//endregion

//region WINK_ICON_LIGHT_EFFECTS

Blockly.Blocks['light_effect_police_icon'] = {
    init: function () {
        this.setInputsInline(true);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'policeCar.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'clock.svg'), ICON_SIZE, ICON_SIZE));
        this.setColour(WINK_ICON_BLOCK_COLOUR_LIGHT_EFFECTS);
        this.appendValueInput("DURATION")
            .setCheck("Number");
        this.setTooltip(Blockly.Msg.LIGHT_EFFECT_POLICE_LIGHTS);
        this.setHelpUrl(Blockly.Msg.LIGHT_EFFECT_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['light_effect_disco_icon'] = {
    init: function () {
        this.setInputsInline(true);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'DiscoBall.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'clock.svg'), ICON_SIZE, ICON_SIZE));
        this.setColour(WINK_ICON_BLOCK_COLOUR_LIGHT_EFFECTS);
        this.appendValueInput("DURATION")
            .setCheck("Number");
        this.setTooltip(Blockly.Msg.LIGHT_EFFECT_DISCO_LIGHTS);
        this.setHelpUrl(Blockly.Msg.LIGHT_EFFECT_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['light_effect_rainbow_icon'] = {
    init: function () {
        this.setInputsInline(true);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'Rainbow.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'clock.svg'), ICON_SIZE, ICON_SIZE));
        this.setColour(WINK_ICON_BLOCK_COLOUR_LIGHT_EFFECTS);
        this.appendValueInput("DURATION")
            .setCheck("Number");
        this.setTooltip(Blockly.Msg.LIGHT_EFFECT_RAINBOW_LIGHT);
        this.setHelpUrl(Blockly.Msg.LIGHT_EFFECT_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['light_effect_fireworks_icon'] = {
    init: function () {
        this.setInputsInline(true);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'Fireworks.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'clock.svg'), ICON_SIZE, ICON_SIZE));
        this.setColour(WINK_ICON_BLOCK_COLOUR_LIGHT_EFFECTS);
        this.appendValueInput("DURATION")
            .setCheck("Number");
        this.setTooltip(Blockly.Msg.LIGHT_EFFECT_FIREWORK_LIGHTS);
        this.setHelpUrl(Blockly.Msg.LIGHT_EFFECT_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

//endregion light effects

//region WINK_ICON_EYES

Blockly.Blocks['seteyesred_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeRed.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeRed.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESRED_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_BOTH);
        this.setTooltip(Blockly.Msg.SETEYESRED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESRED_HELP_URL);
    }
};

Blockly.Blocks['seteyesgreen_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGreen.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGreen.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESGREEN_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_BOTH);
        this.setTooltip(Blockly.Msg.SETEYESGREEN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESGREEN_HELP_URL);
    }
};

Blockly.Blocks['seteyesblue_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlue.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlue.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESBLUE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_BOTH);
        this.setTooltip(Blockly.Msg.SETEYESBLUE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESBLUE_HELP_URL);
    }
};

Blockly.Blocks['seteyespurple_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePurple.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePurple.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESPURPLE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_BOTH);
        this.setTooltip(Blockly.Msg.SETEYESPURPLE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESPURPLE_HELP_URL);
    }
};

Blockly.Blocks['seteyespink_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePink.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePink.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESPINK_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_BOTH);
        this.setTooltip(Blockly.Msg.SETEYESPINK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESPINK_HELP_URL);
    }
};

Blockly.Blocks['seteyesyellow_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeYellow.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeYellow.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESYELLOW_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_BOTH);
        this.setTooltip(Blockly.Msg.SETEYESYELLOW_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESYELLOW_HELP_URL);
    }
};

Blockly.Blocks['seteyescyan_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeCyan.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeCyan.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESCYAN_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_BOTH);
        this.setTooltip(Blockly.Msg.SETEYESCYAN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESCYAN_HELP_URL);
    }
};

Blockly.Blocks['seteyesorange_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOrange.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOrange.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETEYESORANGE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_BOTH);
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
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_BOTH);
        this.setTooltip(Blockly.Msg.SETEYESWHITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESWHITE_HELP_URL);
    }
};

Blockly.Blocks['seteyesrgb_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradient.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradient.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_BOTH);
        this.setTooltip(Blockly.Msg.SETEYESRGB_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESRGB_HELP_URL);
    }
};

Blockly.Blocks['turneyesoff_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOff.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOff.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_BOTH);
        this.setTooltip(Blockly.Msg.TURNEYESOFF_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TURNEYESOFF_HELP_URL);
    }
};

Blockly.Blocks['set_eyes_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradient.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradient.svg'), ICON_SIZE, ICON_SIZE));
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
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_BOTH);
        this.setTooltip(Blockly.Msg.SET_EYES_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_EYES_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

//endregion wink icon eyes

//region WINK_ICON_EYE_LEFT

Blockly.Blocks['setleftred_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeRedSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTRED_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_LEFT);
        this.setTooltip(Blockly.Msg.SETLEFTRED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTRED_HELP_URL);
    }
};

Blockly.Blocks['setleftgreen_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGreenSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTGREEN_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_LEFT);
        this.setTooltip(Blockly.Msg.SETLEFTGREEN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTGREEN_HELP_URL);
    }
};

Blockly.Blocks['setleftblue_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlueSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTBLUE_FIE/LD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_LEFT);
        this.setTooltip(Blockly.Msg.SETLEFTBLUE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTBLUE_HELP_URL);
    }
};

Blockly.Blocks['setleftpurple_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePurpleSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTPURPLE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_LEFT);
        this.setTooltip(Blockly.Msg.SETLEFTPURPLE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTPURPLE_HELP_URL);
    }
};

Blockly.Blocks['setleftpink_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePinkSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTPINK_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_LEFT);
        this.setTooltip(Blockly.Msg.SETLEFTPINK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTPINK_HELP_URL);
    }
};

Blockly.Blocks['setleftyellow_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeYellowSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTYELLOW_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_LEFT);
        this.setTooltip(Blockly.Msg.SETLEFTYELLOW_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTYELLOW_HELP_URL);
    }
};

Blockly.Blocks['setleftcyan_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeCyanSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTCYAN_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_LEFT);
        this.setTooltip(Blockly.Msg.SETLEFTCYAN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTCYAN_HELP_URL);
    }
};

Blockly.Blocks['setleftorange_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOrangeSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTORANGE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_LEFT);
        this.setTooltip(Blockly.Msg.SETLEFTORANGE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTORANGE_HELP_URL);
    }
};

Blockly.Blocks['setleftwhite_icon'] = {

    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeWhiteSelected.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETLEFTWHITE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_LEFT);
        this.setTooltip(Blockly.Msg.SETLEFTWHITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTWHITE_HELP_URL);
    }
};

Blockly.Blocks['setleftrgb_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradientSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_LEFT);
        this.setTooltip(Blockly.Msg.SETLEFTRGB_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTRGB_HELP_URL);
    }
};

Blockly.Blocks['turnlefteyeoff_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOff.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_LEFT);
        this.setTooltip(Blockly.Msg.TURNLEFTEYEOFF_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TURNLEFTEYEOFF_HELP_URL);
    }
};

Blockly.Blocks['set_left_eye_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradientSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
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
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_LEFT);
        this.setTooltip(Blockly.Msg.SET_LEFT_EYE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_LEFT_EYE_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

//endregion wink icon eye left

//region WINK_ICON_EYE_RIGHT

Blockly.Blocks['setrightred_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeRedSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTRED_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_RIGHT);
        this.setTooltip(Blockly.Msg.SETRIGHTRED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTRED_HELP_URL);
    }
};

Blockly.Blocks['setrightgreen_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGreenSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTGREEN_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_RIGHT);
        this.setTooltip(Blockly.Msg.SETRIGHTGREEN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTGREEN_HELP_URL);
    }
};

Blockly.Blocks['setrightblue_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlueSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTBLUE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_RIGHT);
        this.setTooltip(Blockly.Msg.SETRIGHTBLUE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTBLUE_HELP_URL);
    }
};

Blockly.Blocks['setrightpurple_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePurpleSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTPURPLE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_RIGHT);
        this.setTooltip(Blockly.Msg.SETRIGHTPURPLE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTPURPLE_HELP_URL);
    }
};

Blockly.Blocks['setrightpink_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyePinkSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTPINK_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_RIGHT);
        this.setTooltip(Blockly.Msg.SETRIGHTPINK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTPINK_HELP_URL);
    }
};

Blockly.Blocks['setrightyellow_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeYellowSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTYELLOW_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_RIGHT);
        this.setTooltip(Blockly.Msg.SETRIGHTYELLOW_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTYELLOW_HELP_URL);
    }
};

Blockly.Blocks['setrightcyan_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeCyanSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTCYAN_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_RIGHT);
        this.setTooltip(Blockly.Msg.SETRIGHTCYAN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTCYAN_HELP_URL);
    }
};

Blockly.Blocks['setrightorange_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOrangeSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTORANGE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_RIGHT);
        this.setTooltip(Blockly.Msg.SETRIGHTORANGE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTORANGE_HELP_URL);
    }
};

Blockly.Blocks['setrightwhite_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeWhiteSelected.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendValueInput("INTENSITY")
            // .appendField(Blockly.Msg.SETRIGHTWHITE_FIELD_1)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_RIGHT);
        this.setTooltip(Blockly.Msg.SETRIGHTWHITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTWHITE_HELP_URL);
    }
};

Blockly.Blocks['setrightrgb_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradientSelected.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.appendDummyInput()
            .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_RIGHT);
        this.setTooltip(Blockly.Msg.SETRIGHTRGB_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTRGB_HELP_URL);
    }
};

Blockly.Blocks['turnrighteyeoff_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeOff.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_RIGHT);
        this.setTooltip(Blockly.Msg.TURNRIGHTEYEOFF_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TURNRIGHTEYEOFF_HELP_URL);
    }
};

Blockly.Blocks['set_right_eye_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeBlack.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradientSelected.svg'), ICON_SIZE, ICON_SIZE));
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
        this.setColour(WINK_ICON_BLOCK_COLOUR_EYES_RIGHT);
        this.setTooltip(Blockly.Msg.SET_RIGHT_EYE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_RIGHT_EYE_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

//endregion

//region WINK_ICON_MOTOR_BEGINNER

Blockly.Blocks['bestill_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'stop.svg'), ICON_SIZE, ICON_SIZE));
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_ICON_MOVEMENT_COLOUR);
        this.setTooltip(Blockly.Msg.BESTILL_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BESTILL_HELP_URL);
    }
};

Blockly.Blocks['motors_beginner_forward_slow_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'Icons.psdchevrons1-up.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(WINK_ICON_MOVEMENT_COLOUR);
        this.appendValueInput("DURATION")
            .setCheck("Number");
        this.setTooltip(Blockly.Msg.WINK_MOVEMENT_FORWARD);
        this.setHelpUrl(Blockly.Msg.WINK_GENERAL_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['motors_beginner_forward_medium_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'Icons.psdchevrons2-up.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(WINK_ICON_MOVEMENT_COLOUR);
        this.appendValueInput("DURATION")
            .setCheck("Number");
        this.setTooltip(Blockly.Msg.WINK_MOVEMENT_FORWARD);
        this.setHelpUrl(Blockly.Msg.WINK_GENERAL_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['motors_beginner_forward_fast_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'chevrons3-up.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(WINK_ICON_MOVEMENT_COLOUR);
        this.appendValueInput("DURATION")
            .setCheck("Number");
        this.setTooltip(Blockly.Msg.WINK_MOVEMENT_FORWARD);
        this.setHelpUrl(Blockly.Msg.WINK_GENERAL_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['motors_beginner_backward_slow_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'Icons.psdchevrons1-down.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(WINK_ICON_MOVEMENT_COLOUR);
        this.appendValueInput("DURATION")
            .setCheck("Number");
        this.setTooltip(Blockly.Msg.WINK_MOVEMENT_BACKWARD);
        this.setHelpUrl(Blockly.Msg.WINK_GENERAL_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['motors_beginner_backward_medium_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'Icons.psdchevrons2-down.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(WINK_ICON_MOVEMENT_COLOUR);
        this.appendValueInput("DURATION")
            .setCheck("Number");
        this.setTooltip(Blockly.Msg.WINK_MOVEMENT_BACKWARD);
        this.setHelpUrl(Blockly.Msg.WINK_GENERAL_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['motors_beginner_backward_fast_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'chevrons3-down.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(WINK_ICON_MOVEMENT_COLOUR);
        this.appendValueInput("DURATION")
            .setCheck("Number");
        this.setTooltip(Blockly.Msg.WINK_MOVEMENT_BACKWARD);
        this.setHelpUrl(Blockly.Msg.WINK_GENERAL_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['motors_beginner_rotate_left_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'leftArrow.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(WINK_ICON_MOVEMENT_COLOUR);
        this.appendValueInput("DEGREES")
            .setCheck("Number");
        this.setTooltip(Blockly.Msg.WINK_MOVEMENT_ROTATION);
        this.setHelpUrl(Blockly.Msg.WINK_GENERAL_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['motors_beginner_rotate_right_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'rightArrow.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(WINK_ICON_MOVEMENT_COLOUR);
        this.appendValueInput("DEGREES")
            .setCheck("Number");
        this.setTooltip(Blockly.Msg.WINK_MOVEMENT_ROTATION);
        this.setHelpUrl(Blockly.Msg.WINK_GENERAL_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

//endregion

//region WINK_ICON_SENSOR_BEHAVIOR

Blockly.Blocks['sensors_line_follow_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'LineFollowing.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(WINK_ICON_MOVEMENT_COLOUR);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'Icons.psdchevrons2-up.png'), ICON_SIZE, ICON_SIZE));
        this.appendValueInput("SPEED")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradient.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("TRUE"), "SHOW_EYES");
        this.setColour(WINK_ICON_SENSOR_BEHAVIORS);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['sensors_line_avoid_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'lineAvoidance.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(WINK_ICON_MOVEMENT_COLOUR);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'Icons.psdchevrons2-up.png'), ICON_SIZE, ICON_SIZE));
        this.appendValueInput("SPEED")
            .setCheck("Number");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'eyeGradient.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("TRUE"), "SHOW_EYES");
        this.setColour(WINK_ICON_SENSOR_BEHAVIORS);
        this.setTooltip('');
        this.setHelpUrl('');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['obstacle_avoid_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'warning.svg'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(WINK_ICON_SENSOR_BEHAVIORS);
        this.setTooltip(Blockly.Msg.SENSOR_OBSTACLE_AVOID_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.WINK_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['obstacle_approach_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'ApproachingObstacle.png'), ICON_SIZE, ICON_SIZE));
        this.setInputsInline(true);
        this.setColour(WINK_ICON_SENSOR_BEHAVIORS);
        this.setTooltip(Blockly.Msg.SENSOR_OBSTACLE_APPROACH_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.WINK_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

//endregion beginner movement

//region WINK_ICON_TIME

Blockly.Blocks['delayseconds_icon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'stop.svg'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'clock.svg'), ICON_SIZE, ICON_SIZE));
        this.appendValueInput("SECONDS")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour(WINK_ICON_TIME_COLOUR);
        this.setTooltip(Blockly.Msg.DELAY_SECONDS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DELAY_SECONDS_HELP_URL);
    }
};

Blockly.Blocks['seconds_icon'] = {
    init: function () {
        this.setInputsInline(true);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'clock.svg'), ICON_SIZE, ICON_SIZE));
        this.setOutput(true, "Number");
        this.setColour(WINK_ICON_TIME_COLOUR);
        this.setTooltip(Blockly.Msg.SECONDS_SINCE_START_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SECONDS_SINCE_START_HELP_URL);
    }
};

//endregion wink icon time


// Unsorted
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
