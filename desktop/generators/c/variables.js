/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2014 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Generating Dart for variable blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.C.variables');

goog.require('Blockly.C');


Blockly.C['variables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.C.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.C.valueToCode(block, 'VALUE',
      Blockly.C.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.C.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};

Blockly.C['variable_set_typed'] = function(block) {
  var defaultValue;
  switch(block.cType){
    case 'STRING':
      defaultValue = '""';
      break;
    case 'BOOLEAN':
      defaultValue = 'true';
      break;
    case 'FLOAT':
      defaultValue = '0.0';
      break;
    case 'CHARACTER':
    case 'INTEGER':
    default:
      defaultValue = '0';
      break;
  }
  var argument0 = Blockly.C.valueToCode(block, 'VALUE',
      Blockly.C.ORDER_ASSIGNMENT) || defaultValue;
  if(argument0.includes('.')){
    argument0 += 'f';
  }
  var varName = Blockly.C.variableDB_.getName(block.getFieldValue('VAR'),
    Blockly.Variables.NAME_TYPE);
  if(block.cType == 'INTEGER')
    return `${varName} = (int)${argument0};\n`;
  else if(block.cType == 'FLOAT')
    return `${varName} = ${argument0};\n`;
  else
    return `${varName} = ${argument0};\n`;
};

Blockly.C['variables_get_typed'] = function(block){
  // Variable getter.
  var code = Blockly.C.variableDB_.getName(block.getFieldValue('VAR'),
    Blockly.Variables.NAME_TYPE);
  return [code, Blockly.C.ORDER_ATOMIC];
};