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
 * @fileoverview Generating Dart for math blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.C.math');

goog.require('Blockly.C');


Blockly.C.addReservedWords('Math');

Blockly.C['math_number'] = function(block) {
  // Numeric value.
  var code = parseFloat(block.getFieldValue('NUM'));
  var order;
  if (code == Infinity) {
    code = 'double.INFINITY';
    order = Blockly.C.ORDER_UNARY_POSTFIX;
  } else if (code == -Infinity) {
    code = '-double.INFINITY';
    order = Blockly.C.ORDER_UNARY_PREFIX;
  } else {
    // -4.abs() returns -4 in Dart due to strange order of operation choices.
    // -4 is actually an operator and a number.  Reflect this in the order.
    order = code < 0 ?
        Blockly.C.ORDER_UNARY_PREFIX : Blockly.C.ORDER_ATOMIC;
  }
  return [code, order];
};

Blockly.C['math_arithmetic'] = function(block) {
  // Basic arithmetic operators, and power.
  var OPERATORS = {
    'ADD': [' + ', Blockly.C.ORDER_ADDITIVE],
    'MINUS': [' - ', Blockly.C.ORDER_ADDITIVE],
    'MULTIPLY': [' * ', Blockly.C.ORDER_MULTIPLICATIVE],
    'DIVIDE': [' / ', Blockly.C.ORDER_MULTIPLICATIVE],
    'POWER': [null, Blockly.C.ORDER_NONE]  // Handle power separately.
  };
  var tuple = OPERATORS[block.getFieldValue('OP')];
  var operator = tuple[0];
  var order = tuple[1];
  var argument0 = Blockly.C.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.C.valueToCode(block, 'B', order) || '0';
  var code;
  // Power in C++ requires a special case since it has no operator.
  if (!operator) {
    Blockly.C.definitions_['import_dart_math'] =
        '#include <math.h>';
    code = 'pow(' + argument0 + ', ' + argument1 + ')';
    return [code, Blockly.C.ORDER_UNARY_POSTFIX];
  }
  code = argument0 + operator + argument1;
  return [code, order];
};

Blockly.C['math_single'] = function(block) {
  // Math operators with single operand.
  var operator = block.getFieldValue('OP');
  var code;
  var arg;
  if (operator == 'NEG') {
    // Negation is a special case given its different operator precedence.
    arg = Blockly.C.valueToCode(block, 'NUM',
        Blockly.C.ORDER_UNARY_PREFIX) || '0';
    if (arg[0] == '-') {
      // --3 is not legal in Dart.
      arg = ' ' + arg;
    }
    code = '-' + arg;
    return [code, Blockly.C.ORDER_UNARY_PREFIX];
  }
  Blockly.C.definitions_['import_dart_math'] =
      '#include <math.h>';
  if (operator == 'ABS' || operator.substring(0, 5) == 'ROUND') {
    arg = Blockly.C.valueToCode(block, 'NUM',
        Blockly.C.ORDER_UNARY_POSTFIX) || '0';
  } else if (operator == 'SIN' || operator == 'COS' || operator == 'TAN') {
    arg = Blockly.C.valueToCode(block, 'NUM',
        Blockly.C.ORDER_MULTIPLICATIVE) || '0';
  } else {
    arg = Blockly.C.valueToCode(block, 'NUM',
        Blockly.C.ORDER_NONE) || '0';
  }
  // First, handle cases which generate values that don't need parentheses
  // wrapping the code.
  switch (operator) {
    case 'ABS':
      code = 'abs(' + arg + ')';
      break;
    case 'ROOT':
      code = 'sqrt(' + arg + ')';
      break;
    case 'LN':
      code = 'log(' + arg + ')';
      break;
    case 'EXP':
      code = 'exp(' + arg + ')';
      break;
    case 'POW10':
      code = 'pow(10,' + arg + ')';
      break;
    case 'ROUND':
      code = 'round(' + arg + ')';
      break;
    case 'ROUNDUP':
      code = 'ceil(' + arg + ')';
      break;
    case 'ROUNDDOWN':
      code = 'floor(' + arg + ')';
      break;
    case 'SIN':
      code = 'sin(' + arg + ' / 180 * 3.14f)';
      break;
    case 'COS':
      code = 'cos(' + arg + ' / 180 * 3.14f)';
      break;
    case 'TAN':
      code = 'tan(' + arg + ' / 180 * 3.14f)';
      break;
  }
  if (code) {
    return [code, Blockly.C.ORDER_UNARY_POSTFIX];
  }
  // Second, handle cases which generate values that may need parentheses
  // wrapping the code.
  switch (operator) {
    case 'LOG10':
      code = 'log10(' + arg + ')';
      break;
    case 'ASIN':
      code = 'asin(' + arg + ') / 3.14f * 180';
      break;
    case 'ACOS':
      code = 'acos(' + arg + ') / 3.14f * 180';
      break;
    case 'ATAN':
      code = 'atan(' + arg + ') / 3.14f * 180';
      break;
    default:
      throw 'Unknown math operator: ' + operator;
  }
  return [code, Blockly.C.ORDER_MULTIPLICATIVE];
};

Blockly.C['math_constant'] = function(block) {
  // Constants: PI, E, the Golden Ratio, sqrt(2), 1/sqrt(2), INFINITY.
  var CONSTANTS = {
    'PI': ['3.14159265359f', Blockly.C.ORDER_UNARY_POSTFIX],
    'E': ['2.71828f', Blockly.C.ORDER_UNARY_POSTFIX],
    'GOLDEN_RATIO':
        ['(1.0f + sqrt(5.0f)) / 2.0f', Blockly.C.ORDER_MULTIPLICATIVE],
    'SQRT2': ['sqrt(2)', Blockly.C.ORDER_UNARY_POSTFIX],
    'SQRT1_2': ['sqrt(1.0f/2.0f)', Blockly.C.ORDER_UNARY_POSTFIX],
    'INFINITY': ['INFINITY', Blockly.C.ORDER_ATOMIC]
  };

  Blockly.C.definitions_['import_dart_math'] =
      '#include <math.h>';

  var constant = block.getFieldValue('CONSTANT');
  return CONSTANTS[constant];
};

Blockly.C['math_number_property'] = function(block) {
  // Check if a number is even, odd, prime, whole, positive, or negative
  // or if it is divisible by certain number. Returns true or false.
  var number_to_check = Blockly.C.valueToCode(block, 'NUMBER_TO_CHECK',
      Blockly.C.ORDER_MULTIPLICATIVE);
  if (!number_to_check) {
    return ['false', Blockly.Python.ORDER_ATOMIC];
  }
  var dropdown_property = block.getFieldValue('PROPERTY');
  var code;
  if (dropdown_property == 'PRIME') {
    // Prime is a special case as it is not a one-liner test.
    Blockly.C.definitions_['import_dart_math'] =
        '#include <math.h>';
    var functionName = Blockly.C.provideFunction_(
        'math_isPrime',
        [ 'bool ' + Blockly.C.FUNCTION_NAME_PLACEHOLDER_ + '(n) {',
          '  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods',
          '  if (n == 2 || n == 3) {',
          '    return true;',
          '  }',
          '  // False if n is null, negative, is 1, or not whole.',
          '  // And false if n is divisible by 2 or 3.',
          '  if (n == null || n <= 1 || n % 1 != 0 || n % 2 == 0 ||' +
            ' n % 3 == 0) {',
          '    return false;',
          '  }',
          '  // Check all the numbers of form 6k +/- 1, up to sqrt(n).',
          '  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {',
          '    if (n % (x - 1) == 0 || n % (x + 1) == 0) {',
          '      return false;',
          '    }',
          '  }',
          '  return true;',
          '}']);
    code = functionName + '(' + number_to_check + ')';
    return [code, Blockly.C.ORDER_UNARY_POSTFIX];
  }
  switch (dropdown_property) {
    case 'EVEN':
      code = number_to_check + ' % 2 == 0';
      break;
    case 'ODD':
      code = number_to_check + ' % 2 == 1';
      break;
    case 'WHOLE':
      code = number_to_check + ' % 1 == 0';
      break;
    case 'POSITIVE':
      code = number_to_check + ' > 0';
      break;
    case 'NEGATIVE':
      code = number_to_check + ' < 0';
      break;
    case 'DIVISIBLE_BY':
      var divisor = Blockly.C.valueToCode(block, 'DIVISOR',
          Blockly.C.ORDER_MULTIPLICATIVE);
      if (!divisor) {
        return ['false', Blockly.Python.ORDER_ATOMIC];
      }
      code = number_to_check + ' % ' + divisor + ' == 0';
      break;
  }
  return [code, Blockly.C.ORDER_EQUALITY];
};

Blockly.C['math_change'] = function(block) {
  // Add to a variable in place.
  var argument0 = Blockly.C.valueToCode(block, 'DELTA',
      Blockly.C.ORDER_ADDITIVE) || '0';
  var varName = Blockly.C.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return `${varName} = ${varName} + ${argument0};\n`;
};

// Rounding functions have a single operand.
Blockly.C['math_round'] = Blockly.C['math_single'];
// Trigonometry functions have a single operand.
Blockly.C['math_trig'] = Blockly.C['math_single'];

Blockly.C['math_on_list'] = function(block) {
  // Math functions for lists.
  var func = block.getFieldValue('OP');
  var list = Blockly.C.valueToCode(block, 'LIST',
      Blockly.C.ORDER_NONE) || '[]';
  var code;
  switch (func) {
    case 'SUM':
      var functionName = Blockly.C.provideFunction_(
          'math_sum',
          [ 'num ' + Blockly.C.FUNCTION_NAME_PLACEHOLDER_ +
              '(List myList) {',
            '  num sumVal = 0;',
            '  myList.forEach((num entry) {sumVal += entry;});',
            '  return sumVal;',
            '}']);
      code = functionName + '(' + list + ')';
      break;
    case 'MIN':
      Blockly.C.definitions_['import_dart_math'] =
          '#include <math.h>';
      var functionName = Blockly.C.provideFunction_(
          'math_min',
          [ 'num ' + Blockly.C.FUNCTION_NAME_PLACEHOLDER_ +
              '(List myList) {',
            '  if (myList.isEmpty) return null;',
            '  num minVal = myList[0];',
            '  myList.forEach((num entry) ' +
              '{minVal = Math.min(minVal, entry);});',
            '  return minVal;',
            '}']);
      code = functionName + '(' + list + ')';
      break;
    case 'MAX':
      Blockly.C.definitions_['import_dart_math'] =
          '#include <math.h>';
      var functionName = Blockly.C.provideFunction_(
          'math_max',
          [ 'num ' + Blockly.C.FUNCTION_NAME_PLACEHOLDER_ +
              '(List myList) {',
            '  if (myList.isEmpty) return null;',
            '  num maxVal = myList[0];',
            '  myList.forEach((num entry) ' +
                  '{maxVal = Math.max(maxVal, entry);});',
            '  return maxVal;',
            '}']);
      code = functionName + '(' + list + ')';
      break;
    case 'AVERAGE':
      // This operation exclude null and values that are not int or float:
      //   math_mean([null,null,"aString",1,9]) == 5.0.
      var functionName = Blockly.C.provideFunction_(
          'math_average',
          [ 'num ' + Blockly.C.FUNCTION_NAME_PLACEHOLDER_ +
              '(List myList) {',
            '  // First filter list for numbers only.',
            '  List localList = new List.from(myList);',
            '  localList.removeMatching((a) => a is! num);',
            '  if (localList.isEmpty) return null;',
            '  num sumVal = 0;',
            '  localList.forEach((num entry) {sumVal += entry;});',
            '  return sumVal / localList.length;',
            '}']);
      code = functionName + '(' + list + ')';
      break;
    case 'MEDIAN':
      var functionName = Blockly.C.provideFunction_(
          'math_median',
          [ 'num ' + Blockly.C.FUNCTION_NAME_PLACEHOLDER_ +
              '(List myList) {',
            '  // First filter list for numbers only, then sort, ' +
              'then return middle value',
            '  // or the average of two middle values if list has an ' +
              'even number of elements.',
            '  List localList = new List.from(myList);',
            '  localList.removeMatching((a) => a is! num);',
            '  if (localList.isEmpty) return null;',
            '  localList.sort((a, b) => (a - b));',
            '  int index = localList.length ~/ 2;',
            '  if (localList.length % 2 == 1) {',
            '    return localList[index];',
            '  } else {',
            '    return (localList[index - 1] + localList[index]) / 2;',
            '  }',
            '}']);
      code = functionName + '(' + list + ')';
      break;
    case 'MODE':
      Blockly.C.definitions_['import_dart_math'] =
          '#include <math.h>';
      // As a list of numbers can contain more than one mode,
      // the returned result is provided as an array.
      // Mode of [3, 'x', 'x', 1, 1, 2, '3'] -> ['x', 1].
      var functionName = Blockly.C.provideFunction_(
          'math_modes',
          [ 'List ' + Blockly.C.FUNCTION_NAME_PLACEHOLDER_ +
              '(List values) {',
            '  List modes = [];',
            '  List counts = [];',
            '  int maxCount = 0;',
            '  for (int i = 0; i < values.length; i++) {',
            '    var value = values[i];',
            '    bool found = false;',
            '    int thisCount;',
            '    for (int j = 0; j < counts.length; j++) {',
            '      if (counts[j][0] == value) {',
            '        thisCount = ++counts[j][1];',
            '        found = true;',
            '        break;',
            '      }',
            '    }',
            '    if (!found) {',
            '      counts.add([value, 1]);',
            '      thisCount = 1;',
            '    }',
            '    maxCount = Math.max(thisCount, maxCount);',
            '  }',
            '  for (int j = 0; j < counts.length; j++) {',
            '    if (counts[j][1] == maxCount) {',
            '        modes.add(counts[j][0]);',
            '    }',
            '  }',
            '  return modes;',
            '}']);
      code = functionName + '(' + list + ')';
      break;
    case 'STD_DEV':
      Blockly.C.definitions_['import_dart_math'] =
          '#include <math.h>';
      var functionName = Blockly.C.provideFunction_(
          'math_standard_deviation',
          [ 'num ' + Blockly.C.FUNCTION_NAME_PLACEHOLDER_ +
              '(List myList) {',
            '  // First filter list for numbers only.',
            '  List numbers = new List.from(myList);',
            '  numbers.removeMatching((a) => a is! num);',
            '  if (numbers.isEmpty) return null;',
            '  num n = numbers.length;',
            '  num sum = 0;',
            '  numbers.forEach((x) => sum += x);',
            '  num mean = sum / n;',
            '  num sumSquare = 0;',
            '  numbers.forEach((x) => sumSquare += ' +
                  'Math.pow(x - mean, 2));',
            '  return Math.sqrt(sumSquare / n);',
            '}']);
      code = functionName + '(' + list + ')';
      break;
    case 'RANDOM':
      Blockly.C.definitions_['import_dart_math'] =
          '#include <math.h>';
      var functionName = Blockly.C.provideFunction_(
          'math_random_item',
          [ 'dynamic ' + Blockly.C.FUNCTION_NAME_PLACEHOLDER_ +
              '(List myList) {',
            '  int x = new Math.Random().nextInt(myList.length);',
            '  return myList[x];',
            '}']);
      code = functionName + '(' + list + ')';
      break;
    default:
      throw 'Unknown operator: ' + func;
  }
  return [code, Blockly.C.ORDER_UNARY_POSTFIX];
};

Blockly.C['math_modulo'] = function(block) {
  // Remainder computation.
  var argument0 = Blockly.C.valueToCode(block, 'DIVIDEND',
      Blockly.C.ORDER_MULTIPLICATIVE) || '0';
  var argument1 = Blockly.C.valueToCode(block, 'DIVISOR',
      Blockly.C.ORDER_MULTIPLICATIVE) || '0';
  var code = argument0 + ' % ' + argument1;
  return [code, Blockly.C.ORDER_MULTIPLICATIVE];
};

Blockly.C['math_constrain'] = function(block) {
  // Constrain a number between two limits.
  Blockly.C.definitions_['import_dart_math'] =
      '#include <math.h>';
  var argument0 = Blockly.C.valueToCode(block, 'VALUE',
      Blockly.C.ORDER_NONE) || '0';
  var argument1 = Blockly.C.valueToCode(block, 'LOW',
      Blockly.C.ORDER_NONE) || '0';
  var argument2 = Blockly.C.valueToCode(block, 'HIGH',
      Blockly.C.ORDER_NONE) || 'double.INFINITY';
  var code = 'min(max(' + argument0 + ', ' + argument1 + '), ' +
      argument2 + ')';
  return [code, Blockly.C.ORDER_UNARY_POSTFIX];
};

Blockly.C['math_random_int'] = function(block) {
  // Random integer between [X] and [Y].
  Blockly.C.definitions_['import_dart_math'] =
      '#include <math.h>';
  var argument0 = Blockly.C.valueToCode(block, 'FROM',
      Blockly.C.ORDER_NONE) || '0';
  var argument1 = Blockly.C.valueToCode(block, 'TO',
      Blockly.C.ORDER_NONE) || '0';
  var functionName = Blockly.C.provideFunction_(
      'math_random_int',
      [ 'int ' + Blockly.C.FUNCTION_NAME_PLACEHOLDER_ + '(int a, int b) {',
        '  if (a > b) {',
        '    // Swap a and b to ensure a is smaller.',
        '    int c = a;',
        '    a = b;',
        '    b = c;',
        '  }',
        '  return (rand() % (b - a)) + a;',
        '}']);
  var code = functionName + '(' + argument0 + ', ' + argument1 + ')';
  return [code, Blockly.C.ORDER_UNARY_POSTFIX];
};

Blockly.C['math_random_float'] = function(block) {
  // Random fraction between 0 and 1.
  Blockly.C.definitions_['import_dart_math'] =
      '#include <math.h>';
  return ['new Math.Random().nextDouble()', Blockly.C.ORDER_UNARY_POSTFIX];
};

Blockly.C['arduino_random_seed'] = function(block) {
  var seed = Blockly.C.valueToCode(block, 'SEED', Blockly.C.ORDER_ATOMIC);
  return `randomSeed(${seed});\n`;
};

Blockly.C['arduino_random'] = function(block) {
  var min = Blockly.C.valueToCode(block, 'MIN', Blockly.C.ORDER_ATOMIC);
  var max = Blockly.C.valueToCode(block, 'MAX', Blockly.C.ORDER_ATOMIC);
  return [`random(${min}, ${max});\n`, Blockly.C.ORDER_ATOMIC];
};