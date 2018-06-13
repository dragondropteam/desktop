// All content copyright DigiPen Institute of Technology 2016
'use strict';
goog.provide('Blockly.Blocks.wink');
goog.require('Blockly.Blocks');

// Block Colors
const WINK_EYES_BOTH_COLOUR = '#b71c1c'; // Hue: 330
const WINK_EYE_LEFT_COLOUR = '#d32f2f';
const WINK_EYE_RIGHT_COLOUR = '#f44336';
const WINK_INPUT_COLOUR = '#F97E35';
const WINK_SENSORS_COLOUR = '#756f5a';//756f5a
const WINK_IR_COMMUNICATION_COLOUR = '#607d8b';//607d8b
const WINK_MOTORS_COLOUR = '#459A9A';//459A9A

const WINK_SPEAKER_COLOUR = '#d84315';
const WINK_EYES_DEFAULT_FIELD_COLOUR = '#FF6666'; // Default for Color Pallet selection fields. FF6666 is nice.
const WINK_SETUP_AND_LOOP_COLOR = '#558B2F';


// region WINK EYES
//Set eye color left/right/on/off/rgb
//c functions
//eyesRed(); eyesGreen(); eyesBlue(); eyesPurple(); eyesPink(); eyesYellow(); eyesOrange();
//eyesCyan(); eyesWhite();

Blockly.Blocks['seteyesred'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETEYESRED)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYES_BOTH_COLOUR);
        this.setTooltip(Blockly.Msg.SETEYESRED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESRED_HELP_URL);
    }
};

Blockly.Blocks['seteyesgreen'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETEYESGREEN)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYES_BOTH_COLOUR);
        this.setTooltip(Blockly.Msg.SETEYESGREEN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESGREEN_HELP_URL);
    }
};

Blockly.Blocks['seteyesblue'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETEYESBLUE)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYES_BOTH_COLOUR);
        this.setTooltip(Blockly.Msg.SETEYESBLUE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESBLUE_HELP_URL);
    }
};

Blockly.Blocks['seteyespurple'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETEYESPURPLE)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYES_BOTH_COLOUR);
        this.setTooltip(Blockly.Msg.SETEYESPURPLE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESPURPLE_HELP_URL);
    }
};

Blockly.Blocks['seteyespink'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETEYESPINK)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYES_BOTH_COLOUR);
        this.setTooltip(Blockly.Msg.SETEYESPINK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESPINK_HELP_URL);
    }
};

Blockly.Blocks['seteyesyellow'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETEYESYELLOW)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYES_BOTH_COLOUR);
        this.setTooltip(Blockly.Msg.SETEYESYELLOW_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESYELLOW_HELP_URL);
    }
};

Blockly.Blocks['seteyescyan'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETEYESCYAN)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYES_BOTH_COLOUR);
        this.setTooltip(Blockly.Msg.SETEYESCYAN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESCYAN_HELP_URL);
    }
};

Blockly.Blocks['seteyesorange'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETEYESORANGE)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYES_BOTH_COLOUR);
        this.setTooltip(Blockly.Msg.SETEYESORANGE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESORANGE_HELP_URL);
    }
};

Blockly.Blocks['seteyeswhite'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETEYESWHITE)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYES_BOTH_COLOUR);
        this.setTooltip(Blockly.Msg.SETEYESWHITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESWHITE_HELP_URL);
    }
};

Blockly.Blocks['seteyesrgb'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SETEYESRGB)
            .appendField(new Blockly.FieldColour(WINK_EYES_DEFAULT_FIELD_COLOUR), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYES_BOTH_COLOUR);
        this.setTooltip(Blockly.Msg.SETEYESRGB_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETEYESRGB_HELP_URL);
    }
};

Blockly.Blocks['turneyesoff'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.TURNEYESOFF);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYES_BOTH_COLOUR);
        this.setTooltip(Blockly.Msg.TURNEYESOFF_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TURNEYESOFF_HELP_URL);
    }
};

Blockly.Blocks['eyesprevcolour'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.EYESPREVCOLOUR);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYES_BOTH_COLOUR);
        this.setTooltip(Blockly.Msg.EYESPREVCOLOUR_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.EYESPREVCOLOUR_HELP_URL);
    }
};

Blockly.Blocks['set_eyes'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_EYES);
        this.appendValueInput("RED")
            .setCheck("Number")
            .appendField(Blockly.Msg.RED);
        this.appendValueInput("GREEN")
            .setCheck("Number")
            .appendField(Blockly.Msg.GREEN);
        this.appendValueInput("BLUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.BLUE);
        this.setInputsInline(true);
        this.setColour(WINK_EYES_BOTH_COLOUR);
        this.setTooltip(Blockly.Msg.SET_EYES_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_EYES_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

//endregion Wink Eyes

//region WINK LEFT EYE

Blockly.Blocks['setleftred'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETLEFTRED)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_LEFT_COLOUR);
        this.setTooltip(Blockly.Msg.SETLEFTRED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTRED_HELP_URL);
    }
};

Blockly.Blocks['setleftgreen'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETLEFTGREEN)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_LEFT_COLOUR);
        this.setTooltip(Blockly.Msg.SETLEFTGREEN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTGREEN_HELP_URL);
    }
};

Blockly.Blocks['setleftblue'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETLEFTBLUE)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_LEFT_COLOUR);
        this.setTooltip(Blockly.Msg.SETLEFTBLUE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTBLUE_HELP_URL);
    }
};

Blockly.Blocks['setleftpurple'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETLEFTPURPLE)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_LEFT_COLOUR);
        this.setTooltip(Blockly.Msg.SETLEFTPURPLE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTPURPLE_HELP_URL);
    }
};

Blockly.Blocks['setleftpink'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETLEFTPINK)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_LEFT_COLOUR);
        this.setTooltip(Blockly.Msg.SETLEFTPINK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTPINK_HELP_URL);
    }
};

Blockly.Blocks['setleftyellow'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETLEFTYELLOW)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_LEFT_COLOUR);
        this.setTooltip(Blockly.Msg.SETLEFTYELLOW_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTYELLOW_HELP_URL);
    }
};

Blockly.Blocks['setleftcyan'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETLEFTCYAN)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_LEFT_COLOUR);
        this.setTooltip(Blockly.Msg.SETLEFTCYAN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTCYAN_HELP_URL);
    }
};

Blockly.Blocks['setleftorange'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETLEFTORANGE)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_LEFT_COLOUR);
        this.setTooltip(Blockly.Msg.SETLEFTORANGE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTORANGE_HELP_URL);
    }
};

Blockly.Blocks['setleftwhite'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETLEFTWHITE)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_LEFT_COLOUR);
        this.setTooltip(Blockly.Msg.SETLEFTWHITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTWHITE_HELP_URL);
    }
};

Blockly.Blocks['setleftrgb'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SETLEFTRGB)
            .appendField(new Blockly.FieldColour(WINK_EYES_DEFAULT_FIELD_COLOUR), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_LEFT_COLOUR);
        this.setTooltip(Blockly.Msg.SETLEFTRGB_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETLEFTRGB_HELP_URL);
    }
};

Blockly.Blocks['turnlefteyeoff'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.TURNLEFTEYEOFF);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_LEFT_COLOUR);
        this.setTooltip(Blockly.Msg.TURNLEFTEYEOFF_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TURNLEFTEYEOFF_HELP_URL);
    }
};

Blockly.Blocks['leftprevcolour'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LEFTPREVCOLOUR);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_LEFT_COLOUR);
        this.setTooltip(Blockly.Msg.LEFTPREVCOLOUR_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LEFTPREVCOLOUR_HELP_URL);
    }
};

Blockly.Blocks['set_left_eye'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_LEFT_EYE);
        this.appendValueInput("RED")
            .setCheck("Number")
            .appendField(Blockly.Msg.RED);
        this.appendValueInput("GREEN")
            .setCheck("Number")
            .appendField(Blockly.Msg.GREEN);
        this.appendValueInput("BLUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.BLUE);
        this.setInputsInline(true);
        this.setColour(WINK_EYE_LEFT_COLOUR);
        this.setTooltip(Blockly.Msg.SET_LEFT_EYE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_LEFT_EYE_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

//endregion Wink Left Eye

//region WINK RIGHT EYE

Blockly.Blocks['setrightred'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETRIGHTRED)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_RIGHT_COLOUR);
        this.setTooltip(Blockly.Msg.SETRIGHTRED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTRED_HELP_URL);
    }
};

Blockly.Blocks['setrightgreen'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETRIGHTGREEN)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_RIGHT_COLOUR);
        this.setTooltip(Blockly.Msg.SETRIGHTGREEN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTGREEN_HELP_URL);
    }
};

Blockly.Blocks['setrightblue'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETRIGHTBLUE)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_RIGHT_COLOUR);
        this.setTooltip(Blockly.Msg.SETRIGHTBLUE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTBLUE_HELP_URL);
    }
};

Blockly.Blocks['setrightpurple'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETRIGHTPURPLE)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_RIGHT_COLOUR);
        this.setTooltip(Blockly.Msg.SETRIGHTPURPLE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTPURPLE_HELP_URL);
    }
};

Blockly.Blocks['setrightpink'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETRIGHTPINK)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_RIGHT_COLOUR);
        this.setTooltip(Blockly.Msg.SETRIGHTPINK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTPINK_HELP_URL);
    }
};

Blockly.Blocks['setrightyellow'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETRIGHTYELLOW)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_RIGHT_COLOUR);
        this.setTooltip(Blockly.Msg.SETRIGHTYELLOW_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTYELLOW_HELP_URL);
    }
};

Blockly.Blocks['setrightcyan'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETRIGHTCYAN)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_RIGHT_COLOUR);
        this.setTooltip(Blockly.Msg.SETRIGHTCYAN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTCYAN_HELP_URL);
    }
};

Blockly.Blocks['setrightorange'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETRIGHTORANGE)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_RIGHT_COLOUR);
        this.setTooltip(Blockly.Msg.SETRIGHTORANGE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTORANGE_HELP_URL);
    }
};

Blockly.Blocks['setrightwhite'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField(Blockly.Msg.SETRIGHTWHITE)
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_RIGHT_COLOUR);
        this.setTooltip(Blockly.Msg.SETRIGHTWHITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTWHITE_HELP_URL);
    }
};

Blockly.Blocks['setrightrgb'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SETRIGHTRGB)
            .appendField(new Blockly.FieldColour(WINK_EYES_DEFAULT_FIELD_COLOUR), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_RIGHT_COLOUR);
        this.setTooltip(Blockly.Msg.SETRIGHTRGB_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETRIGHTRGB_HELP_URL);
    }
};

Blockly.Blocks['turnrighteyeoff'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.TURNRIGHTEYEOFF);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_RIGHT_COLOUR);
        this.setTooltip(Blockly.Msg.TURNRIGHTEYEOFF_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TURNRIGHTEYEOFF_HELP_URL);
    }
};

Blockly.Blocks['rightprevcolour'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.RIGHTPREVCOLOUR);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_EYE_RIGHT_COLOUR);
        this.setTooltip(Blockly.Msg.RIGHTPREVCOLOUR_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.RIGHTPREVCOLOUR_HELP_URL);
    }
};

Blockly.Blocks['set_right_eye'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_RIGHT_EYE);
        this.appendValueInput("RED")
            .setCheck("Number")
            .appendField(Blockly.Msg.RED);
        this.appendValueInput("GREEN")
            .setCheck("Number")
            .appendField(Blockly.Msg.GREEN);
        this.appendValueInput("BLUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.BLUE);
        this.setInputsInline(true);
        this.setColour(WINK_EYE_RIGHT_COLOUR);
        this.setTooltip(Blockly.Msg.SET_RIGHT_EYE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_RIGHT_EYE_HELP_URL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

//endregion Wink Right Eye

//region WINK REQUIRED BLOCKS

Blockly.Blocks['hardwarestartup'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.HARDWARESTARTUP);
        this.appendStatementInput("do")
            .setCheck(null);
        this.setColour(WINK_SETUP_AND_LOOP_COLOR);
        this.setTooltip(Blockly.Msg.HARDWARESTARTUP_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.HARDWARESTARTUP_HELP_URL);
    }
};

Blockly.Blocks['loop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.LOOP);
        this.appendStatementInput("do")
            .setCheck(null);
        this.setColour(WINK_SETUP_AND_LOOP_COLOR);
        this.setTooltip(Blockly.Msg.LOOP_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LOOP_HELP_URL);
    }
};

//endregion Wink Required Blocks

//region WINK MOTORS

Blockly.Blocks['acceleratemotors'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ACCELERATEMOTORS);
        this.appendValueInput("startspeed")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ACCELERATEMOTORS_START);
        this.appendValueInput("endspeed")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.ACCELERATEMOTORS_END);
        this.appendValueInput("duration")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.DURATION);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_MOTORS_COLOUR);
        this.setTooltip(Blockly.Msg.ACCELERATEMOTORS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ACCELERATEMOTORS_HELP_URL);
    }
};

Blockly.Blocks['motors'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MOTORS);
        this.appendValueInput("leftspeed")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.MOTORS_LEFT);
        this.appendValueInput("rightspeed")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.MOTORS_RIGHT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_MOTORS_COLOUR);
        this.setTooltip(Blockly.Msg.MOTORS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.MOTORS_HELP_URL);
    }
};

Blockly.Blocks['spinleft'] = {
    init: function () {
        this.appendValueInput("speed")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.SPINLEFT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_MOTORS_COLOUR);
        this.setTooltip(Blockly.Msg.SPINLEFT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SPINLEFT_HELP_URL);
    }
};

Blockly.Blocks['spinright'] = {
    init: function () {
        this.appendValueInput("speed")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.SPINRIGHT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_MOTORS_COLOUR);
        this.setTooltip(Blockly.Msg.SPINRIGHT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SPINRIGHT_HELP_URL);
    }
};

Blockly.Blocks['turn_by_values'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.TURN)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT, "left"], [Blockly.Msg.RIGHT, "right"]]), "direction");
        this.appendDummyInput()
            .appendField(Blockly.Msg.SPEED)
            .appendField(new Blockly.FieldNumber(50, 0, 255), "speed");
        this.appendDummyInput()
            .appendField(Blockly.Msg.DELAY)
            .appendField(new Blockly.FieldNumber(370, 0), "duration");
        this.appendDummyInput()
            .appendField(Blockly.Msg.MILLISECONDS);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_MOTORS_COLOUR);
        this.setTooltip(Blockly.Msg.TURN_BY_VALUES_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TURN_BY_VALUES_HELP_URL);
    }
};

Blockly.Blocks['bestill'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.BESTILL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_MOTORS_COLOUR);
        this.setTooltip(Blockly.Msg.BESTILL_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BESTILL_HELP_URL);
    }
};

// endregion motors

//region WINK INPUT

Blockly.Blocks['buttonwait'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.BUTTONWAIT);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_INPUT_COLOUR);
        this.setTooltip(Blockly.Msg.BUTTONWAIT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BUTTONWAIT_HELP_URL);
    }
};

Blockly.Blocks['button_pressed'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.BUTTON_PRESSED);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(WINK_INPUT_COLOUR);
        this.setTooltip(Blockly.Msg.BUTTON_PRESSED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BUTTON_PRESSED_HELP_URL);
    }
};

//endregion Wink Input

//region WINK SPEAKER

Blockly.Blocks['beepms'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.BEEPMS);
        this.appendValueInput("beepms")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MILLISECONDS);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_SPEAKER_COLOUR);
        this.setTooltip(Blockly.Msg.BEEPMS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BEEPMS_HELP_URL);
    }
};

Blockly.Blocks['beepon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.BEEPON);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_SPEAKER_COLOUR);
        this.setTooltip(Blockly.Msg.BEEPON_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BEEPON_HELP_URL);
    }
};

Blockly.Blocks['beepoff'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.BEEPOFF);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_SPEAKER_COLOUR);
        this.setTooltip(Blockly.Msg.BEEPOFF_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.BEEPOFF_HELP_URL);
    }
};

//endregion Wink Speaker

//region WINK SENSORS

Blockly.Blocks['setirlight'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.TURN)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SETIRLIGHT_LIGHT_DROPDOWN_HEAD, "HEADLIGHT"], [Blockly.Msg.SETIRLIGHT_LIGHT_DROPDOWN_LEFT_OUTER, "LINELEFTOUTER"], [Blockly.Msg.SETIRLIGHT_LIGHT_DROPDOWN_LEFT_INNER, "LINELEFTINNER"], [Blockly.Msg.SETIRLIGHT_LIGHT_DROPDOWN_RIGHT_OUTER, "LINERIGHTOUTER"], [Blockly.Msg.SETIRLIGHT_LIGHT_DROPDOWN_RIGHT_INNER, "LINERIGHTINNER"]]), "LIGHT")
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ON, "ON"], [Blockly.Msg.OFF, "OFF"]]), "STATE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_SENSORS_COLOUR);
        this.setTooltip(Blockly.Msg.SETIRLIGHT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SETIRLIGHT_HELP_URL);
    }
};

Blockly.Blocks['readsensor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.READSENSOR)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.READSENSOR_LIGHT_DROPDOWN_LINE_LEFT, "LINESENSELEFT"], [Blockly.Msg.READSENSOR_LIGHT_DROPDOWN_LINE_RIGHT, "LINESENSERIGHT"], [Blockly.Msg.AMBIENT_LEFT, "AMBIENTSENSORLEFT"], [Blockly.Msg.READSENSOR_LIGHT_DROPDOWN_AMBIENT_CENTER, "AMBIENTSENSORCENTER"], [Blockly.Msg.READSENSOR_LIGHT_DROPDOWN_AMBIENT_RIGHT, "AMBIENTSENSORRIGHT"]]), "LIGHT");
        this.setOutput(true, "Number");
        this.setColour(WINK_SENSORS_COLOUR);
        this.setTooltip(Blockly.Msg.READSENSOR_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.READSENSOR_HELP_URL);
    }
};

//endregion Wink Sensors

//region WINK IR COMMUNICATION

//We are going to assume 4 bytes not specified explicitly in the name
Blockly.Blocks['restart_ir'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.RESTART_IR);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_IR_COMMUNICATION_COLOUR);
        this.setTooltip(Blockly.Msg.RESTART_IR_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.RESTART_IR_HELP_URL);
    }
};

Blockly.Blocks['is_ir_done'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.IS_IR_DONE);
        this.setOutput(true, null);
        this.setColour(WINK_IR_COMMUNICATION_COLOUR);
        this.setTooltip(Blockly.Msg.IS_IR_DONE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.IS_IR_DONE_HELP_URL);
    }
};

//
// {
//   "type": "block_type",
//   "message0": "When  %1 is pressed %2 %3",
//   "args0": [
//     {
//       "type": "field_dropdown",
//       "name": "NAME",
//       "options": [
//         [
//           "1",
//           "IR_1"
//         ],
//         [
//           "2",
//           "IR_2"
//         ],
//         [
//           "3",
//           "IR_3"
//         ],
//         [
//           "4",
//           "IR_4"
//         ],
//         [
//           "5",
//           "IR_5"
//         ],
//         [
//           "6",
//           "IR_6"
//         ],
//         [
//           "7",
//           "IR_7"
//         ],
//         [
//           "8",
//           "IR_8"
//         ],
//         [
//           "9",
//           "IR_9"
//         ],
//         [
//           "10",
//           "IR_10"
//         ],
//         [
//           "Forward",
//           "FORWARD"
//         ],
//         [
//           "Left",
//           "LEFT"
//         ],
//         [
//           "Right",
//           "RIGHT"
//         ],
//         [
//           "Backword",
//           "BACKWORD"
//         ],
//         [
//           "Power",
//           "POWER"
//         ],
//         [
//           "Plum Logo",
//           "PLUMLOGO"
//         ],
//         [
//           "Menu",
//           "MENU"
//         ],
//         [
//           "A",
//           "A"
//         ],
//         [
//           "B",
//           "B"
//         ],
//         [
//           "X",
//           "X"
//         ]
//       ]
//     },
//     {
//       "type": "input_dummy"
//     },
//     {
//       "type": "input_statement",
//       "name": "NAME"
//     }
//   ],
//   "inputsInline": true,
//   "previousStatement": null,
//   "nextStatement": null,
//   "colour": 330,
//   "tooltip": "",
//   "helpUrl": "http://www.example.com/"
// }
Blockly.Blocks['ir_control'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.IR_CONTROL)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_1, "IR_1"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_2, "IR_2"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_3, "IR_3"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_4, "IR_4"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_5, "IR_5"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_6, "IR_6"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_7, "IR_7"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_8, "IR_8"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_9, "IR_9"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_10, "IR_10"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_FORWARD, "IR_Forward"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_LEFT, "IR_Left"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_RIGHT, "IR_Right"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_BACKWARD, "IR_Backward"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_POWER, "IR_Power"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_LOGO, "IR_PlumLogo"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_MENU, "IR_Menu"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_A, "IR_A"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_B, "IR_B"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_X, "IR_X"], [Blockly.Msg.IR_CONTROL_BUTTON_DROPDOWN_PLAY, "IR_Play"]]), "BUTTON")
            .appendField(Blockly.Msg.IR_CONTROL_PRESSED);
        this.appendStatementInput("NAME")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_IR_COMMUNICATION_COLOUR);
        this.setTooltip(Blockly.Msg.IR_CONTROL_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.IR_CONTROL_HELP_URL);
    },
};

Blockly.Blocks['ir_control_container'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.WHEN_IR_DONE);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setColour(WINK_IR_COMMUNICATION_COLOUR);
        this.setTooltip(Blockly.Msg.IR_CONTROL_CONTAINER_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.IR_CONTROL_CONTAINER_HELP_URL);
    }
};

Blockly.Blocks['ir_control_control'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.IR_CONTROL_CONTROL);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_IR_COMMUNICATION_COLOUR);
        this.setTooltip(Blockly.Msg.IR_CONTROL_CONTROL_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.IR_CONTROL_CONTROL_HELP_URL);
    }
};

const WINK_IR_BUTTONS = [["1", "IR_1"], ["2", "IR_2"], ["3", "IR_3"], ["4", "IR_4"], ["5", "IR_5"], ["6", "IR_6"], ["7", "IR_7"], ["8", "IR_8"], ["9", "IR_9"], ["10", "IR_10"], ["forward", "IR_Forward"], ["left", "IR_Left"], ["right", "IR_Right"], ["backward", "IR_Backward"], ["power", "IR_Power"], ["plum logo", "IR_PlumLogo"], ["menu", "IR_Menu"], ["a", "IR_A"], ["b", "IR_B"], ["x", "IR_X"], ["play", "IR_Play"]];

Blockly.Blocks['ir_when'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.WHEN_IR_DONE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(WINK_IR_COMMUNICATION_COLOUR);
        this.setTooltip(Blockly.Msg.IR_WHEN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.IR_WHEN_HELP_URL);
        this.setMutator(new Blockly.Mutator(['ir_control_control']));

        this.keyPressChecks = 0;
    },

    mutationToDom: function () {
        //console.log('mutationToDom');
        if (this.keyPressChecks == 0) {
            return null;
        }

        const container = document.createElement('mutation');
        container.setAttribute('keypresschecks', this.keyPressChecks);
        return container;
    },

    domToMutation: function (xmlElement) {
        console.log('domToMutation');
        this.keyPressChecks = parseInt(xmlElement.getAttribute('keypresschecks'), 10) || 0;
        this.updateShape_();
    },

    compose: function (containerBlock) {
        console.log('compose');
        let clauseBlock = containerBlock.nextConnection.targetBlock();

        this.keyPressChecks = 0;

        let statementConnections = [null];

        while (clauseBlock) {
            console.log('ClauseBlock: %o', clauseBlock);
            this.keyPressChecks++;
            statementConnections.push(clauseBlock.statementConnection_);
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
        }

        this.updateShape_();

        console.log('StatementConnections: ' + statementConnections.length);

        for (let i = 1; i <= this.keyPressChecks; ++i) {
            Blockly.Mutator.reconnect(statementConnections[i], this, 'CHECK' + i);
        }

        console.log('compose: ' + this.keyPressChecks);
    },

    decompose: function (workspace) {
        console.log('decompose');
        let containerBlock = workspace.newBlock('ir_control_container');
        containerBlock.initSvg();

        let connection = containerBlock.nextConnection;
        for (let i = 1; i <= this.keyPressChecks; ++i) {
            let keyPressBlock = workspace.newBlock('ir_control_control');
            keyPressBlock.initSvg();
            connection.connect(keyPressBlock.previousConnection);
        }
        return containerBlock;
    },

    updateShape_: function () {
        console.log('updateShape_');
        let i = 1;

        let values = [null];
        let input = this.getInput('CHECK' + i);

        while (input) {
            values.push(this.getFieldValue("BUTTON" + i));
            this.removeInput('CHECK' + i);
            i++;
            input = this.getInput('CHECK' + i);
        }

        for (i = 1; i <= this.keyPressChecks; ++i) {
            let field = new Blockly.FieldDropdown(WINK_IR_BUTTONS);
            if (values[i]) {
                field.setValue(values[i]);
            }
            this.appendStatementInput('CHECK' + i)
                .appendField(Blockly.Msg.IR_WHEN)
                .appendField(field, Blockly.Msg.IR_WHEN_BUTTON + i)
                .appendField(Blockly.Msg.IR_WHEN_PRESSED);
        }
    },

    saveConnections: function (containerBlock) {
        console.log('saveConnections');
        let clauseBlock = containerBlock.nextConnection.targetBlock();
        let i = 1;
        while (clauseBlock) {
            let input = this.getInput('CHECK' + i);
            clauseBlock.statementConnection_ = input && input.connection.targetConnection;
            ++i;
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
        }
    }
};

Blockly.Blocks['ir_button'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.IR_BUTTON)
            .appendField(new Blockly.FieldDropdown(WINK_IR_BUTTONS), "BUTTONS");
        this.setOutput(true, "Number");
        this.setColour(WINK_IR_COMMUNICATION_COLOUR);
        this.setTooltip(Blockly.Msg.IR_BUTTON_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.IR_BUTTON_HELP_URL);
    }
};

Blockly.Blocks['get_pressed_ir_button'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_PRESSED_IR_BUTTON);
        this.setOutput(true, "Number");
        this.setColour(WINK_IR_COMMUNICATION_COLOUR);
        this.setTooltip(Blockly.Msg.GET_PRESSED_IR_BUTTON_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_PRESSED_IR_BUTTON_HELP_URL);
    }
};

//endregion IR Communication
