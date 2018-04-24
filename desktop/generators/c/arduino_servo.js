'use strict';
goog.provide('Blockly.C.arduino_servo');

goog.require('Blockly.C');

//region SERVO

Blockly.C['servo_attach'] = function (block) {
  Blockly.C.definitions_['include_servo'] = '#include <Servo.h>';
  const servo = Blockly.C.valueToCode(block, 'SERVO', Blockly.C.ORDER_ATOMIC);
  const pin = Blockly.C.valueToCode(block, 'PIN', Blockly.C.ORDER_ATOMIC);
  return `${servo}.attach(${pin});\n`;
};

Blockly.C['servo_write'] = function (block) {
  Blockly.C.definitions_['include_servo'] = '#include <Servo.h>';
  const servo = Blockly.C.valueToCode(block, 'SERVO', Blockly.C.ORDER_ATOMIC);
  const angle = Blockly.C.valueToCode(block, 'ANGLE', Blockly.C.ORDER_ATOMIC);
  return `${servo}.write(${angle});\n`;
};

Blockly.C['servo_write_microseconds'] = function (block) {
  Blockly.C.definitions_['include_servo'] = '#include <Servo.h>';
  const servo = Blockly.C.valueToCode(block, 'SERVO', Blockly.C.ORDER_ATOMIC);
  const micros = Blockly.C.valueToCode(block, 'MICROS', Blockly.C.ORDER_ATOMIC);
  return `${servo}.writeMicroseconds(${micros});\n`;
};

Blockly.C['servo_read'] = function (block) {
  Blockly.C.definitions_['include_servo'] = '#include <Servo.h>';
  const servo = Blockly.C.valueToCode(block, 'SERVO', Blockly.C.ORDER_ATOMIC);
  return [`${servo}.read()`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['servo_attached'] = function (block) {
  Blockly.C.definitions_['include_servo'] = '#include <Servo.h>';
  const servo = Blockly.C.valueToCode(block, 'SERVO', Blockly.C.ORDER_ATOMIC);
  return [`${servo}.attached()`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['servo_detach'] = function (block) {
  Blockly.C.definitions_['include_servo'] = '#include <Servo.h>';
  const servo = Blockly.C.valueToCode(block, 'SERVO', Blockly.C.ORDER_ATOMIC);
  return `${servo}.detach();\n`;
};

//endregion