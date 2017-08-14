//All content copyright DigiPen Institute of Technology 2016
'use strict';
goog.provide('Blockly.Blocks.wink');

goog.require('Blockly.Blocks');

//Set eye color left/right/on/off/rgb
//c functions
//eyesRed(); eyesGreen(); eyesBlue(); eyesPurple(); eyesPink(); eyesYellow(); eyesOrange();
//eyesCyan(); eyesWhite();
Blockly.Blocks['seteyesred'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setEyesRed")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['seteyesgreen'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setEyesGreen")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['seteyesblue'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setEyesBlue")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['seteyespurple'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setEyesPurple")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['seteyespink'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setEyesPink")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['seteyesyellow'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setEyesYellow")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['seteyescyan'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setEyesCyan")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['seteyesorange'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setEyesOrange")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['seteyeswhite'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setEyesWhite")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['setleftred'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setLeftRed")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['setleftgreen'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setLeftGreen")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['setleftblue'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setLeftBlue")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['setleftpurple'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setLeftPurple")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['setleftpink'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setLeftPink")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['setleftyellow'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setLeftYellow")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['setleftcyan'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setLeftCyan")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['setleftorange'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setLeftOrange")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['setleftwhite'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setLeftWhite")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['setrightred'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setRightRed")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['setrightgreen'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setRightGreen")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['setrightblue'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setRightBlue")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['setrightpurple'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setRightPurple")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['setrightpink'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setRightPink")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['setrightyellow'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setRightYellow")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['setrightcyan'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setRightCyan")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['setrightorange'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setRightOrange")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['setrightwhite'] = {
    init: function () {
        this.appendValueInput("INTENSITY")
            .appendField("setRightWhite")
            .setCheck("Number");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['seteyesrgb'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("setEyesColor")
            .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['setleftrgb'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("setLeftColor")
            .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['setrightrgb'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("setRightColor")
            .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['turneyesoff'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("turnEyesOff");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['turnlefteyeoff'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("turnLeftEyeOff");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['turnrighteyeoff'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("turnRightEyeOff");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['eyesprevcolour'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("eyesPreviousColor");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['leftprevcolour'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("leftPreviousColor");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['rightprevcolour'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("rightPreviousColor");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['hardwarestartup'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("setup");
        this.appendStatementInput("do")
            .setCheck(null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['loop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("loop");
        this.appendStatementInput("do")
            .setCheck(null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['acceleratemotors'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Accelerate Motors");
        this.appendValueInput("startspeed")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Start Speed");
        this.appendValueInput("endspeed")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("End Speed");
        this.appendValueInput("duration")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Duration");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['motors'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Set Motor Speed");
        this.appendValueInput("leftspeed")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Left Speed");
        this.appendValueInput("rightspeed")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Right Speed");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['spinleft'] = {
    init: function () {
        this.appendValueInput("speed")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Spin Left");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['spinright'] = {
    init: function () {
        this.appendValueInput("speed")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Spin Right");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['bestill'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Be Still");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['buttonwait'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Wait For Button Press");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['beepms'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Beep");
        this.appendValueInput("beepms")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT);
        this.appendDummyInput()
            .appendField("Milliseconds");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['beepon'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Turn Beep On");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};
Blockly.Blocks['beepoff'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Turn Beep Off");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['setirlight'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Turn")
            .appendField(new Blockly.FieldDropdown([["Head Light", "HEADLIGHT"], ["Line Left Outer", "LINELEFTOUTER"], ["Line Left Inner", "LINELEFTINNER"], ["Line Right Outer", "LINERIGHTOUTER"], ["Line Right Inner", "LINERIGHTINNER"]]), "LIGHT")
            .appendField(new Blockly.FieldDropdown([["On", "ON"], ["Off", "OFF"]]), "STATE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['readsensor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Read")
            .appendField(new Blockly.FieldDropdown([["Line Sensor Left", "LINESENSELEFT"], ["Line Sensor Right", "LINESENSERIGHT"], ["Ambient Sensor Left", "AMBIENTSENSORLEFT"], ["Ambient Sensor Center", "AMBIENTSENSORCENTER"], ["Ambient Sensor Right", "AMBIENTSENSORRIGHT"]]), "LIGHT");
        this.setOutput(true, "Number");
        this.setColour(120);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};


Blockly.Blocks['set_left_eye'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Set Left Eye");
        this.appendValueInput("RED")
            .setCheck("Number")
            .appendField("Red");
        this.appendValueInput("GREEN")
            .setCheck("Number")
            .appendField("Green");
        this.appendValueInput("BLUE")
            .setCheck("Number")
            .appendField("Blue");
        this.setInputsInline(true);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['set_right_eye'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Set Right Eye");
        this.appendValueInput("RED")
            .setCheck("Number")
            .appendField("Red");
        this.appendValueInput("GREEN")
            .setCheck("Number")
            .appendField("Green");
        this.appendValueInput("BLUE")
            .setCheck("Number")
            .appendField("Blue");
        this.setInputsInline(true);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};


Blockly.Blocks['set_eyes'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Set Eyes");
        this.appendValueInput("RED")
            .setCheck("Number")
            .appendField("Red");
        this.appendValueInput("GREEN")
            .setCheck("Number")
            .appendField("Green");
        this.appendValueInput("BLUE")
            .setCheck("Number")
            .appendField("Blue");
        this.setInputsInline(true);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['button_pressed'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Button Pressed");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['turn_by_values'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("turn")
            .appendField(new Blockly.FieldDropdown([["left", "left"], ["right", "right"]]), "direction");
        this.appendDummyInput()
            .appendField("speed")
            .appendField(new Blockly.FieldNumber(50, 0, 255), "speed");
        this.appendDummyInput()
            .appendField("delay")
            .appendField(new Blockly.FieldNumber(370, 0), "duration");
        this.appendDummyInput()
            .appendField("milliseconds");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

//We are going to assume 4 bytes not specified explicitly in the name
Blockly.Blocks['restart_ir'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Restart IR");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('Start listening for IR should be setup and in loop after processing an input');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
    }
};

Blockly.Blocks['is_ir_done'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Is IR Done?");
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip('Checks to see if we received an IR input to process');
        this.setHelpUrl('http://www.plumgeek.com/learn-to-code.html/');
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
            .appendField("When ")
            .appendField(new Blockly.FieldDropdown([["1", "IR_1"], ["2", "IR_2"], ["3", "IR_3"], ["4", "IR_4"], ["5", "IR_5"], ["6", "IR_6"], ["7", "IR_7"], ["8", "IR_8"], ["9", "IR_9"], ["10", "IR_10"], ["Forward", "IR_Forward"], ["Left", "IR_Left"], ["Right", "IR_Right"], ["Backward", "IR_Backward"], ["Power", "IR_Power"], ["Plum Logo", "IR_PlumLogo"], ["Menu", "IR_Menu"], ["A", "IR_A"], ["B", "IR_B"], ["X", "IR_X"], ["Play", "IR_Play"]]), "BUTTON")
            .appendField("is pressed");
        this.appendStatementInput("NAME")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    },
};

Blockly.Blocks['ir_control_container'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("When IR is done");
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};


Blockly.Blocks['ir_control_control'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("check key for press");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

const WINK_IR_BUTTONS = [["1", "IR_1"], ["2", "IR_2"], ["3", "IR_3"], ["4", "IR_4"], ["5", "IR_5"], ["6", "IR_6"], ["7", "IR_7"], ["8", "IR_8"], ["9", "IR_9"], ["10", "IR_10"], ["Forward", "IR_Forward"], ["Left", "IR_Left"], ["Right", "IR_Right"], ["Backward", "IR_Backward"], ["Power", "IR_Power"], ["Plum Logo", "IR_PlumLogo"], ["Menu", "IR_Menu"], ["A", "IR_A"], ["B", "IR_B"], ["X", "IR_X"], ["Play", "IR_Play"]];

Blockly.Blocks['ir_when'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("When IR is done");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setMutator(new Blockly.Mutator(['ir_control_control']));

        this.keyPressChecks = 0;
    },

    mutationToDom: function () {
        console.log('mutationToDom');
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
                .appendField("If ")
                .appendField(field, "BUTTON" + i)
                .appendField("is pressed");
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
            .appendField("Wink IR Button:")
            .appendField(new Blockly.FieldDropdown(WINK_IR_BUTTONS), "BUTTONS");
        this.setOutput(true, "Number");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};
