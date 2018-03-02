/**
 * All content copyright DigiPen Institute of Technology 2016
 */
'use strict';
goog.provide('Blockly.C.winks');
goog.require('Blockly.C');



//region WINK EYES

Blockly.C['seteyesred'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `eyesRed(${value_intensity});\n`
};

Blockly.C['seteyesgreen'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `eyesGreen(${value_intensity});\n`
};

Blockly.C['seteyesblue'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `eyesBlue(${value_intensity});\n`
};

Blockly.C['seteyespurple'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `eyesPurple(${value_intensity});\n`
};

Blockly.C['seteyespink'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `eyesPink(${value_intensity});\n`
};

Blockly.C['seteyesyellow'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `eyesYellow(${value_intensity});\n`
};

Blockly.C['seteyescyan'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `eyesCyan(${value_intensity});\n`;
};

Blockly.C['seteyesorange'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `eyesOrange(${value_intensity});\n`;
};

Blockly.C['seteyeswhite'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `eyesWhite(${value_intensity});\n`;
};

Blockly.C['seteyesrgb'] = function (block) {
    let colour_name = block.getFieldValue('NAME') || '#000000';
    let red = parseInt(colour_name.substring(1, 3), 16);
    let green = parseInt(colour_name.substring(3, 5), 16);
    let blue = parseInt(colour_name.substring(5, 7), 16);
    return `eyesRGB(${red}, ${green}, ${blue});\n`;
};

Blockly.C['set_eyes'] = function (block) {
    let value_red = Blockly.C.valueToCode(block, 'RED', Blockly.C.ORDER_ATOMIC) || '0';
    let value_green = Blockly.C.valueToCode(block, 'GREEN', Blockly.C.ORDER_ATOMIC) || '0';
    let value_blue = Blockly.C.valueToCode(block, 'BLUE', Blockly.C.ORDER_ATOMIC) || '0';
    return `eyesRGB(${value_red},${value_green},${value_blue});\n`;
};

Blockly.C['turneyesoff'] = function (block) {
    return 'eyesOff();\n';
};

Blockly.C['eyesprevcolour'] = function (block) {
    return 'eyesPrevCol();\n';
};

//endregion WINK EYES

//region WINK EYE LEFT

Blockly.C['setleftred'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `leftRed(${value_intensity});\n`
};

Blockly.C['setleftgreen'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `leftGreen(${value_intensity});\n`
};

Blockly.C['setleftblue'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `leftBlue(${value_intensity});\n`
};

Blockly.C['setleftpurple'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `leftPurple(${value_intensity});\n`
};

Blockly.C['setleftpink'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `leftPink(${value_intensity});\n`
};

Blockly.C['setleftyellow'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `leftYellow(${value_intensity});\n`
};

Blockly.C['setleftcyan'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `leftCyan(${value_intensity});\n`;
};

Blockly.C['setleftorange'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `leftOrange(${value_intensity});\n`;
};

Blockly.C['setleftwhite'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `leftWhite(${value_intensity});\n`;
};

Blockly.C['setleftrgb'] = function (block) {
    let colour_name = block.getFieldValue('NAME') || '#000000';
    let red = parseInt(colour_name.substring(1, 3), 16);
    let green = parseInt(colour_name.substring(3, 5), 16);
    let blue = parseInt(colour_name.substring(5, 7), 16);
    return `leftRGB(${red}, ${green}, ${blue});\n`;
};

Blockly.C['set_left_eye'] = function (block) {
    let value_red = Blockly.C.valueToCode(block, 'RED', Blockly.C.ORDER_ATOMIC) || '0';
    let value_green = Blockly.C.valueToCode(block, 'GREEN', Blockly.C.ORDER_ATOMIC) || '0';
    let value_blue = Blockly.C.valueToCode(block, 'BLUE', Blockly.C.ORDER_ATOMIC) || '0';
    return `leftRGB(${value_red},${value_green},${value_blue});\n`;
};

Blockly.C['turnlefteyeoff'] = function (block) {
    return 'leftOff();\n';
};

Blockly.C['leftprevcolour'] = function (block) {
    return 'leftPrevCol();\n';
};

//endregion WINK EYE LEFT

//region EYES RIGHT

Blockly.C['setrightred'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `rightRed(${value_intensity});\n`
};

Blockly.C['setrightgreen'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `rightGreen(${value_intensity});\n`
};

Blockly.C['setrightblue'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `rightBlue(${value_intensity});\n`
};

Blockly.C['setrightpurple'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `rightPurple(${value_intensity});\n`
};

Blockly.C['setrightpink'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `rightPink(${value_intensity});\n`
};

Blockly.C['setrightyellow'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `rightYellow(${value_intensity});\n`
};

Blockly.C['setrightcyan'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `rightCyan(${value_intensity});\n`;
};

Blockly.C['setrightorange'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `rightOrange(${value_intensity});\n`;
};

Blockly.C['setrightwhite'] = function (block) {
    let value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
    return `rightWhite(${value_intensity});\n`;
};

Blockly.C['setrightrgb'] = function (block) {
    let colour_name = block.getFieldValue('NAME') || '#000000';
    console.log(colour_name);
    let red = parseInt(colour_name.substring(1, 3), 16);
    let green = parseInt(colour_name.substring(3, 5), 16);
    let blue = parseInt(colour_name.substring(5, 7), 16);
    return `rightRGB(${red}, ${green}, ${blue});\n`;
};

Blockly.C['set_right_eye'] = function (block) {
    let value_red = Blockly.C.valueToCode(block, 'RED', Blockly.C.ORDER_ATOMIC) || '0';
    let value_green = Blockly.C.valueToCode(block, 'GREEN', Blockly.C.ORDER_ATOMIC) || '0';
    let value_blue = Blockly.C.valueToCode(block, 'BLUE', Blockly.C.ORDER_ATOMIC) || '0';
    return `rightRGB(${value_red},${value_green},${value_blue});\n`;
};

Blockly.C['turnrighteyeoff'] = function (block) {
    return 'rightOff();\n';
};

Blockly.C['rightprevcolour'] = function (block) {
    return 'rightPrevCol();\n';
};

//endregion EYES RIGHT

//region WINK REQUIRED BLOCKS
// These blocks are always generated in the project.

Blockly.C['hardwarestartup'] = function (block) {
    let statements_do = Blockly.C.statementToCode(block, 'do');
    Blockly.C.definitions_['setup'] = `// Below is the "setup" function. It runs one time as soon as Wink turns on. You can add stuff\n// to this function if you want, but hardwareBegin() should always be the first code in the list.\nvoid setup(){\n\thardwareBegin();\n${statements_do}}\n`;
    return null;
};

Blockly.C['loop'] = function (block) {
    let statements_do = Blockly.C.statementToCode(block, 'do');
    Blockly.C.definitions_['loop'] = `// Below is the "loop" function. This is where you'll write most of your code. Whatever is included\n// inside the "loop" function will run over and over until Wink runs out of power or you turn him off.\nvoid loop(){\n${statements_do}}\n`;
    return null;
};

//endregion REQUIRED SECTIONS

//region WINK MOTORS

Blockly.C['acceleratemotors'] = function (block) {
    let value_startspeed = Blockly.C.valueToCode(block, 'startsspeed', Blockly.C.ORDER_ATOMIC) || '0';
    let value_endspeed = Blockly.C.valueToCode(block, 'endspeed', Blockly.C.ORDER_ATOMIC) || '0';
    let value_duration = Blockly.C.valueToCode(block, 'duration', Blockly.C.ORDER_ATOMIC) || '0';

    return `accelerateMotors(${value_startspeed}, ${value_endspeed}, ${value_duration});\n`;
};

Blockly.C['bestill'] = function (block) {
    return 'beStill();\n';
};

Blockly.C['motors'] = function (block) {
    let value_leftspeed = Blockly.C.valueToCode(block, 'leftspeed', Blockly.C.ORDER_ATOMIC) || '0';
    let value_rightspeed = Blockly.C.valueToCode(block, 'rightspeed', Blockly.C.ORDER_ATOMIC) || '0';
    return `motors(${value_leftspeed}, ${value_rightspeed});\n`;
};

Blockly.C['spinleft'] = function (block) {
    let value_speed = Blockly.C.valueToCode(block, 'speed', Blockly.C.ORDER_ATOMIC) || '0';
    return `spinLeft(${value_speed});\n`;
};

Blockly.C['spinright'] = function (block) {
    let value_speed = Blockly.C.valueToCode(block, 'speed', Blockly.C.ORDER_ATOMIC) || '0';
    return `spinRight(${value_speed});\n`;
};

Blockly.C['turn_by_values'] = function (block) {
    let dropdown_direction = block.getFieldValue('direction');
    let number_speed = block.getFieldValue('speed');
    let number_duration = block.getFieldValue('duration');

    let code = '';
    switch (dropdown_direction) {
        case 'left':
            return `spinLeft(${number_speed});\ndelay(${number_duration});\nbeStill();\n`;
        case 'right':
            return `spinRight(${number_speed});\ndelay(${number_duration});\nbeStill();\n`;
        default:
    }
    return [code, Blockly.C.ORDER_NONE];
};

//endregion WINK MOTORS

//region WINK INPUT
Blockly.C['buttonwait'] = function (block) {
    return `waitForButton();\n`;
};

Blockly.C['button_pressed'] = function (block) {
    let code = 'buttonPressed()';
    return [code, Blockly.C.ORDER_NONE];
};

//endregion WINK INPUT

//region WINK SPEAKER

Blockly.C['beepms'] = function (block) {
    let value_beep = Blockly.C.valueToCode(block, 'beepms', Blockly.C.ORDER_ATOMIC) || '0';
    return `beep(${value_beep});\n`;
};

Blockly.C['beepon'] = function (block) {
    return 'beepOn();\n';
};

Blockly.C['beepoff'] = function (block) {
    return 'beepOff();\n';
};

//endregion WINK SPEAKER

//region WINK SENSORS

Blockly.C['setirlight'] = function (block) {
    let dropdown_light = block.getFieldValue('LIGHT');
    let dropdown_state = block.getFieldValue('STATE');

    let light;
    let state = 'HIGH';
    switch (dropdown_light) {
        case 'HEADLIGHT':
            light = 'Headlight';
            break;
        case 'LINELEFTINNER':
            light = 'LineLeftInner';
            break;
        case 'LINELEFTOUTER':
            light = 'LineLeftOuter';
            break;
        case 'LINERIGHTINNER':
            light = 'LineRightInner';
            break;
        case 'LINERIGHTOUTER':
            light = 'LineRightOuter';
            break;
    }

    switch (dropdown_state) {
        case 'ON':
            state = 'HIGH';
            break;
        case 'OFF':
            state = 'LOW';
            break;
    }

    return `digitalWrite(${light}, ${state});\n`;
};


Blockly.C['readsensor'] = function (block) {
    let dropdown_light = block.getFieldValue('LIGHT');

    let light;
    switch (dropdown_light) {
        case 'LINESENSELEFT':
            light = 'LineSenseLeft';
            break;
        case 'LINESENSERIGHT':
            light = 'LineSenseRight';
            break;
        case 'AMBIENTSENSORLEFT':
            light = 'AmbientSenseLeft';
            break;
        case 'AMBIENTSENSORCENTER':
            light = 'AmbientSenseCenter';
            break;
        case 'AMBIENTSENSORRIGHT':
            light = 'AmbientSenseRight';
            break;
    }

    let code = `analogRead(${light})`;
    return [code, Blockly.C.ORDER_ATOMIC];
};

//endregion WINK SENSORS

//region WINK IR COMMUNICATION

Blockly.C['restart_ir'] = function (block) {
    return "//Listen for 4 byte packets\nRxIRRestart(4);\n";
};

Blockly.C['is_ir_done'] = function (block) {
    return ["/*Check for completion of IR read*/\nIsIRDone()", Blockly.C.ORDER_NONE];
};

Blockly.C['ir_when'] = function (block) {
    if (block.keyPressChecks == 0) {
        return '';
    }

    let code = 'if(IsIRDone()){\n\tint button = GetIRButton();\n';

    for (let i = 1; i <= block.keyPressChecks; ++i) {
        let prefix = i == 1 ? '\tif' : '\telse if';
        let dropDown = block.getFieldValue('BUTTON' + i);
        let statement = Blockly.C.statementToCode(block, 'CHECK' + i);
        statement = statement.replace('\n', '\n\t');
        code += `${prefix}(button == ${dropDown}){\n  ${statement}  RxIRRestart(4);\n  }\n`;
    }

    code += '\telse{\n    RxIRRestart(4);\n  }\n}\n';
    return code;
};

Blockly.C['ir_button'] = function (block) {
    let irButton = block.getFieldValue('BUTTONS');
    return [irButton, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['get_pressed_ir_button'] = function() {
    return ['GetIRButton()', Blockly.C.ORDER_ATOMIC];
};

//endregion WINK IR COMMUNICATION

