'use strict';
goog.provide('Blockly.C.arduino');

goog.require('Blockly.C');

Blockly.C['hardwarestartup_arduino'] = function(block){
  var statements_do = Blockly.C.statementToCode(block, 'do');
  Blockly.C.definitions_['setup'] = `// Below is the "setup" function. It runs one time as soon as the board turns on. You can add stuff\nvoid setup(){\n${statements_do}}\n`;
  return null;
};

//region TIME
Blockly.C['milliseconds'] = function(block) {
  return ['millis()' , Blockly.C.ORDER_NONE];
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

Blockly.C['microseconds'] = function(block) {
	return ['micros()' , Blockly.C.ORDER_NONE];
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

Blockly.C['delayms'] = function(block) {
  var value_milliseconds = Blockly.C.valueToCode(block, 'MILLISECONDS', Blockly.C.ORDER_ATOMIC) || '0';
  return 'delay( ' + value_milliseconds + ' );\n';
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

Blockly.C['delaymicroseconds'] = function(block) {
  var value_microseconds = Blockly.C.valueToCode(block, 'MICROSECONDS', Blockly.C.ORDER_ATOMIC) || '0';
  return 'delayMicroseconds( ' + value_microseconds + ' );\n';
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


//endregion

//region CONSTANTS

Blockly.C['high'] = function(block){
	return ['HIGH', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['low'] = function(block){
	return ['LOW', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['led_builtin'] = function(block){
	return ['LED_BUILTIN', Blockly.C.ORDER_ATOMIC];
};

//endregion


//region DIGITAL I/O
Blockly.C['pininput'] = function(block) {
    var pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC) || '0';
    var mode = block.getFieldValue('MODE') || '0';
    return `pinMode(${pin}, ${mode});\n`;
};

Blockly.C['digitalwrite'] = function(block) {
	var value = block.getFieldValue('VALUE') || 'HIGH';
	var pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC);
	return `digitalWrite(${pin}, ${value});\n`;
};

Blockly.C['digital_read'] = function(block) {
    var value_pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC);
    var code = `digitalRead(${value_pin})`;
    return [code, Blockly.C.ORDER_ATOMIC];
};
//endregion

//region ANALOG IO
Blockly.C['analog_reference'] = function(block) {
    var type = block.getFieldValue('TYPE');
    return `analogReference(${type});\n`;
};

Blockly.C['analog_read'] = function(block){
    var pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC);
    return [`analogRead(${pin})`, Blockly.C.ORDER_ATOMIC];
};


Blockly.C['analog_write'] = function(block) {
    var value = Blockly.C.valueToCode(block, 'VALUE', Blockly.C.ORDER_ATOMIC);
    var pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC);
    return `analogWrite(${pin}, ${value});\n`;
};
//endregion

//region DUO AND ZERO ONLY

//endregion

//region ADVANCED I/O

Blockly.C['tone_pin_freq_duration'] = function(block) {
    var frequency = Blockly.C.valueToCode(block, 'FREQUENCY', Blockly.C.ORDER_ATOMIC);
    var pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC);
    var duration = Blockly.C.valueToCode(block, 'DURATION', Blockly.C.ORDER_ATOMIC);
    return `tone(${pin}, ${frequency}, ${duration});\n`;
};

Blockly.C['tone_pin_freq'] = function(block) {
    var frequency = Blockly.C.valueToCode(block, 'FREQUENCY', Blockly.C.ORDER_ATOMIC) || '0';
    var pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC) || '0';
    return `tone(${pin}, ${frequency});\n`;
};


//endregion

//region RANDOM NUMBERS

Blockly.C['random_seed'] = function (block) {
    var seed = Blockly.C.valueToCode(block, 'SEED', Blockly.C.ORDER_ATOMIC);
    return `randomSeed(${seed});\n`;
};

Blockly.C['random'] = function (block) {
    var min = Blockly.C.valueToCode(block, 'MIN', Blockly.C.ORDER_ATOMIC) || '0';
    var max = Blockly.C.valueToCode(block, 'MAX', Blockly.C.ORDER_ATOMIC);
    return [`random(${min}, ${max})`, Blockly.C.ORDER_ATOMIC];
};

//endregion

//region BITS AND BYTES

Blockly.C['bit'] = function (block) {
    var value = Blockly.C.valueToCode(block, 'VALUE', Blockly.C.ORDER_ATOMIC);
    return [`bit(${value})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['bit_clear'] = function (block) {
    var num = Blockly.C.valueToCode(block, 'NUMBER', Blockly.C.ORDER_ATOMIC);
    var position = Blockly.C.valueToCode(block, 'POSITION', Blockly.C.ORDER_ATOMIC);
    return `bitClear(${num}, ${position});\n`;
};

Blockly.C['bit_set'] = function (block) {
    var num = Blockly.C.valueToCode(block, 'NUMBER', Blockly.C.ORDER_ATOMIC);
    var position = Blockly.C.valueToCode(block, 'POSITION', Blockly.C.ORDER_ATOMIC);
    return `bitSet(${num}, ${position});\n`;
};

Blockly.C['bit_write'] = function (block) {
    var num = Blockly.C.valueToCode(block, 'NUMBER', Blockly.C.ORDER_ATOMIC);
    var position = Blockly.C.valueToCode(block, 'POSITION', Blockly.C.ORDER_ATOMIC);
    var value = Blockly.C.valueToCode(block, 'VALUE', Blockly.C.ORDER_ATOMIC);
    return `bitWrite(${num}, ${position}, ${value});\n`;
};

Blockly.C['bit_read'] = function (block) {
    var num = Blockly.C.valueToCode(block, 'NUMBER', Blockly.C.ORDER_ATOMIC);
    var position = Blockly.C.valueToCode(block, 'POSITION', Blockly.C.ORDER_ATOMIC);
    return [`bitRead(${num}, ${position})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['high_byte'] = function (block) {
    var num = Blockly.C.valueToCode(block, 'NUMBER', Blockly.C.ORDER_ATOMIC);
    return [`highByte(${num})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['low_byte'] = function (block) {
    var num = Blockly.C.valueToCode(block, 'NUMBER', Blockly.C.ORDER_ATOMIC);
    return [`lowByte(${num})`, Blockly.C.ORDER_ATOMIC];
};

//endregion


