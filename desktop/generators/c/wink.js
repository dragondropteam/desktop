/**
 * All content copyright DigiPen Institute of Technology 2016
 */
'use strict';
goog.provide('Blockly.C.winks');

goog.require('Blockly.C');

Blockly.C['seteyesred'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `eyesRed(${value_intensity});\n`
};

Blockly.C['seteyesgreen'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `eyesGreen(${value_intensity});\n`
};

Blockly.C['seteyesblue'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `eyesBlue(${value_intensity});\n`
};

Blockly.C['seteyespurple'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `eyesPurple(${value_intensity});\n`
};

Blockly.C['seteyespink'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `eyesPink(${value_intensity});\n`
};

Blockly.C['seteyesyellow'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `eyesYellow(${value_intensity});\n`
};

Blockly.C['seteyescyan'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMƒresIC) || '0';
  return `eyesCyan(${value_intensity});\n`;
};

Blockly.C['seteyesorange'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `eyesOrange(${value_intensity});\n`;
};

Blockly.C['seteyeswhite'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `eyesWhite(${value_intensity});\n`;
};

Blockly.C['setleftred'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `leftRed(${value_intensity});\n`
};

Blockly.C['setleftgreen'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `leftGreen(${value_intensity});\n`
};

Blockly.C['setleftblue'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `leftBlue(${value_intensity});\n`
};

Blockly.C['setleftpurple'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `leftPurple(${value_intensity});\n`
};

Blockly.C['setleftpink'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `leftPink(${value_intensity});\n`
};

Blockly.C['setleftyellow'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `leftYellow(${value_intensity});\n`
};

Blockly.C['setleftcyan'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `leftCyan(${value_intensity});\n`;
};

Blockly.C['setleftorange'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `leftOrange(${value_intensity});\n`;
};

Blockly.C['setleftwhite'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `leftWhite(${value_intensity});\n`;
};

Blockly.C['setrightred'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `rightRed(${value_intensity});\n`
};

Blockly.C['setrightgreen'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `rightGreen(${value_intensity});\n`
};

Blockly.C['setrightblue'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `rightBlue(${value_intensity});\n`
};

Blockly.C['setrightpurple'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `rightPurple(${value_intensity});\n`
};

Blockly.C['setrightpink'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `rightPink(${value_intensity});\n`
};

Blockly.C['setrightyellow'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `rightYellow(${value_intensity});\n`
};

Blockly.C['setrightcyan'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `rightCyan(${value_intensity});\n`;
};

Blockly.C['setrightorange'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `rightOrange(${value_intensity});\n`;
};

Blockly.C['setrightwhite'] = function(block){
  var value_intensity = Blockly.C.valueToCode(block, 'INTENSITY', Blockly.C.ORDER_ATOMIC) || '0';
  return `rightWhite(${value_intensity});\n`;
};

Blockly.C['seteyesrgb'] = function(block){
    var colour_name = block.getFieldValue('NAME') || '#000000';
    var red = parseInt(colour_name.substring(1,3),16);
    var green = parseInt(colour_name.substring(3,5),16);
    var blue = parseInt(colour_name.substring(5,7),16);
    return `eyesRGB(${red}, ${green}, ${blue});\n`;
};

Blockly.C['setleftrgb'] = function(block){
    var colour_name = block.getFieldValue('NAME') || '#000000';
    var red = parseInt(colour_name.substring(1,3),16);
    var green = parseInt(colour_name.substring(3,5),16);
    var blue = parseInt(colour_name.substring(5,7),16);
    return `leftRGB(${red}, ${green}, ${blue});\n`;
};

Blockly.C['setrightrgb'] = function(block){
    var colour_name = block.getFieldValue('NAME') || '#000000';
    console.log(colour_name);
    var red = parseInt(colour_name.substring(1,3),16);
    var green = parseInt(colour_name.substring(3,5),16);
    var blue = parseInt(colour_name.substring(5,7),16);
    return `rightRGB(${red}, ${green}, ${blue});\n`;
};

Blockly.C['set_left_eye'] = function(block) {
  var value_red = Blockly.C.valueToCode(block, 'RED', Blockly.C.ORDER_ATOMIC) || '0';
  var value_green = Blockly.C.valueToCode(block, 'GREEN', Blockly.C.ORDER_ATOMIC) || '0';
  var value_blue = Blockly.C.valueToCode(block, 'BLUE', Blockly.C.ORDER_ATOMIC) || '0';
  return `leftRGB(${value_red},${value_green},${value_blue});\n`;
};

Blockly.C['set_right_eye'] = function(block) {
  var value_red = Blockly.C.valueToCode(block, 'RED', Blockly.C.ORDER_ATOMIC) || '0';
  var value_green = Blockly.C.valueToCode(block, 'GREEN', Blockly.C.ORDER_ATOMIC) || '0';
  var value_blue = Blockly.C.valueToCode(block, 'BLUE', Blockly.C.ORDER_ATOMIC) || '0';
  return `rightRGB(${value_red},${value_green},${value_blue});\n`;
};

Blockly.C['set_eyes'] = function(block) {
  var value_red = Blockly.C.valueToCode(block, 'RED', Blockly.C.ORDER_ATOMIC) || '0';
  var value_green = Blockly.C.valueToCode(block, 'GREEN', Blockly.C.ORDER_ATOMIC) || '0';
  var value_blue = Blockly.C.valueToCode(block, 'BLUE', Blockly.C.ORDER_ATOMIC) || '0';
  return `eyesRGB(${value_red},${value_green},${value_blue});\n`;
};

Blockly.C['turneyesoff'] = function(block){
  return 'eyesOff();\n';
};

Blockly.C['turnlefteyeoff'] = function(block){
  return 'leftOff();\n';
};

Blockly.C['turnrighteyeoff'] = function(block){
  return 'rightOff();\n';
};

Blockly.C['eyesprevcolour'] = function(block){
  return 'eyesPrevCol();\n';
};

Blockly.C['leftprevcolour'] = function(block){
  return 'leftPrevCol();\n';
};

Blockly.C['rightprevcolour'] = function(block){
  return 'rightPrevCol();\n';
};

Blockly.C['hardwarestartup'] = function(block){
  var statements_do = Blockly.C.statementToCode(block, 'do');
  Blockly.C.definitions_['setup'] = `// Below is the "setup" function. It runs one time as soon as Wink turns on. You can add stuff\n// to this function if you want, but hardwareBegin() should always be the first code in the list.\nvoid setup(){\n\thardwareBegin();\n${statements_do}}\n`;
  return null;
};

Blockly.C['loop'] = function(block){
  var statements_do = Blockly.C.statementToCode(block, 'do');
  Blockly.C.definitions_['loop'] = `// Below is the "loop" function. This is where you'll write most of your code. Whatever is included\n// inside the "loop" function will run over and over until Wink runs out of power or you turn him off.\nvoid loop(){\n${statements_do}}\n`;
  return null;
};

Blockly.C['acceleratemotors'] = function(block){
  var value_startspeed = Blockly.C.valueToCode(block, 'startsspeed', Blockly.C.ORDER_ATOMIC) || '0';
  var value_endspeed = Blockly.C.valueToCode(block, 'endspeed', Blockly.C.ORDER_ATOMIC) || '0';
  var value_duration = Blockly.C.valueToCode(block, 'duration', Blockly.C.ORDER_ATOMIC) || '0';

  return `accelerateMotors(${value_startspeed}, ${value_endspeed}, ${value_duration});\n`;
};

Blockly.C['bestill'] = function(block){
  return 'beStill();\n';
};

Blockly.C['motors'] = function(block){
  var value_leftspeed = Blockly.C.valueToCode(block, 'leftspeed', Blockly.C.ORDER_ATOMIC) || '0';
  var value_rightspeed = Blockly.C.valueToCode(block, 'rightspeed', Blockly.C.ORDER_ATOMIC) || '0';
  return `motors(${value_leftspeed}, ${value_rightspeed});\n`;
};

Blockly.C['spinleft'] = function(block){
  var value_speed = Blockly.C.valueToCode(block, 'speed', Blockly.C.ORDER_ATOMIC) || '0';
  return `spinLeft(${value_speed});\n`;
};

Blockly.C['spinright'] = function(block){
  var value_speed = Blockly.C.valueToCode(block, 'speed', Blockly.C.ORDER_ATOMIC) || '0';
  return `spinRight(${value_speed});\n`;
};

Blockly.C['buttonwait'] = function(block){
  return `waitForButton();\n`;
};

Blockly.C['beepms'] = function(block){
  var value_beep = Blockly.C.valueToCode(block, 'beepms', Blockly.C.ORDER_ATOMIC) || '0';
  return `beep(${value_beep});\n`;
};

Blockly.C['beepon'] = function(block){
  return 'beepOn();\n';
};

Blockly.C['beepoff'] = function(block){
  return 'beepOff();\n';
};

Blockly.C['setirlight'] = function(block){
  var dropdown_light = block.getFieldValue('LIGHT');
  var dropdown_state = block.getFieldValue('STATE');

  var light ;
  var state = 'HIGH';
  switch(dropdown_light){
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

  switch(dropdown_state){
    case 'ON':
      state = 'HIGH';
      break;
    case 'OFF':
      state = 'LOW';
      break;
  }

  return `digitalWrite(${light}, ${state});\n`;
};


Blockly.C['readsensor'] = function(block){
  var dropdown_light = block.getFieldValue('LIGHT');

  var light ;
  switch(dropdown_light){
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

  var code = `analogRead(${light})`;
  return [code, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['button_pressed'] = function(block) {
  var code = 'buttonPressed()';
  return [code, Blockly.C.ORDER_NONE];
};


Blockly.C['turn_by_values'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var number_speed = block.getFieldValue('speed');
  var number_duration = block.getFieldValue('duration');

  var code = '';
  switch (dropdown_direction) {
    case 'left':
      return `spinLeft(${number_speed});\ndelay(${number_duration});\nbeStill();\n`;
    case 'right':
      return `spinRight(${number_speed});\ndelay(${number_duration});\nbeStill();\n`;
    default:
  }
  return [code, Blockly.C.ORDER_NONE];
};

Blockly.C['restart_ir'] = function(block){
  return "//Listen for 4 byte packets\nRxIRRestart(4);\n";
};

Blockly.C['is_ir_done'] = function(block){
  return ["/*Check for completion of IR read*/\nIsIRDone()", Blockly.C.ORDER_NONE];
};

Blockly.C['ir_when'] = function(block){
  if(block.keyPressChecks == 0){
    return '';
  }

  var code = 'if(IsIRDone()){\n';

  for(var i = 1; i <= block.keyPressChecks; ++i){
    var prefix = i == 1 ? '\tif' : '\telse if';
    var dropDown = block.getFieldValue('BUTTON' + i);
    var statement = Blockly.C.statementToCode(block, 'CHECK' + i);
    statement = statement.replace('\n','\n\t');
    code += `${prefix}(${dropDown}){\n${statement}\t}\n`;
  }


  code += '}\nelse{\n\tRxIRRestart(4);\n}\n';
  return code;
};