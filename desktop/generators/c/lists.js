/**
* All content copyright DigiPen Institute of Technology 2016
*/

/**
 * @fileoverview Generating C++ for lists blocks
 * @author luke.powell@digipen.edu (Luke Powell)
 */
'use strict';

goog.provide('Blockly.C.lists');

goog.require('Blockly.C');


Blockly.C.addReservedWords('Math');

Blockly.C['lists_create_empty'] = function(block) {
  Blockly.C.definitions_['include_list'] = '#include <list>';
  // Create an empty list.
  return ['std::list<int>()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['lists_create_with'] = function(block) {
  // Create a list with any number of elements of any type.
  var code = new Array(block.itemCount_);
  for (var n = 0; n < block.itemCount_; n++) {
    code[n] = Blockly.C.valueToCode(block, 'ADD' + n,
        Blockly.C.ORDER_NONE) || 'null';
  }
  code = '[' + code.join(', ') + ']';
  return [code, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['lists_repeat'] = function(block) {
  // Create a list with one element repeated.
  var argument0 = Blockly.C.valueToCode(block, 'ITEM',
    Blockly.C.ORDER_NONE) || 'null';
  var argument1 = Blockly.C.valueToCode(block, 'NUM',
    Blockly.C.ORDER_NONE) || '0';
  var code = 'new List.filled(' + argument1 + ', ' + argument0 + ')';
  return [code, Blockly.C.ORDER_UNARY_POSTFIX];
};

Blockly.C['lists_length'] = function(block) {
  // String or array length.
  var argument0 = Blockly.C.valueToCode(block, 'VALUE',
      Blockly.C.ORDER_UNARY_POSTFIX) || '[]';
  return [argument0 + '.length', Blockly.C.ORDER_UNARY_POSTFIX];
};

Blockly.C['lists_isEmpty'] = function(block) {
  // Is the string null or array empty?
  var argument0 = Blockly.C.valueToCode(block, 'VALUE',
      Blockly.C.ORDER_UNARY_POSTFIX) || '[]';
  return [argument0 + '.isEmpty', Blockly.C.ORDER_UNARY_POSTFIX];
};

Blockly.C['lists_indexOf'] = function(block) {
  // Find an item in the list.
  var operator = block.getFieldValue('END') == 'FIRST' ?
      'indexOf' : 'lastIndexOf';
  var argument0 = Blockly.C.valueToCode(block, 'FIND',
      Blockly.C.ORDER_NONE) || '\'\'';
  var argument1 = Blockly.C.valueToCode(block, 'VALUE',
      Blockly.C.ORDER_UNARY_POSTFIX) || '[]';
  var code = argument1 + '.' + operator + '(' + argument0 + ') + 1';
  return [code, Blockly.C.ORDER_UNARY_POSTFIX];
};

Blockly.C['lists_getIndex'] = function(block) {
  // Get element at index.
  // Note: Until January 2013 this block did not have MODE or WHERE inputs.
  var mode = block.getFieldValue('MODE') || 'GET';
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.C.valueToCode(block, 'AT',
      Blockly.C.ORDER_UNARY_PREFIX) || '1';
  var list = Blockly.C.valueToCode(block, 'VALUE',
      Blockly.C.ORDER_UNARY_POSTFIX) || '[]';

  if (where == 'FIRST') {
    if (mode == 'GET') {
      var code = list + '.first';
      return [code, Blockly.C.ORDER_UNARY_POSTFIX];
    } else if (mode == 'GET_REMOVE') {
      var code = list + '.removeAt(0)';
      return [code, Blockly.C.ORDER_UNARY_POSTFIX];
    } else if (mode == 'REMOVE') {
      return list + '.removeAt(0);\n';
    }
  } else if (where == 'LAST') {
    if (mode == 'GET') {
      var code = list + '.last';
      return [code, Blockly.C.ORDER_UNARY_POSTFIX];
    } else if (mode == 'GET_REMOVE') {
      var code = list + '.removeLast()';
      return [code, Blockly.C.ORDER_UNARY_POSTFIX];
    } else if (mode == 'REMOVE') {
      return list + '.removeLast();\n';
    }
  } else if (where == 'FROM_START') {
    // Blockly uses one-based indicies.
    if (Blockly.isNumber(at)) {
      // If the index is a naked number, decrement it right now.
      at = parseInt(at, 10) - 1;
    } else {
      // If the index is dynamic, decrement it in code.
      at += ' - 1';
    }
    if (mode == 'GET') {
      var code = list + '[' + at + ']';
      return [code, Blockly.C.ORDER_UNARY_POSTFIX];
    } else if (mode == 'GET_REMOVE') {
      var code = list + '.removeAt(' + at + ')';
      return [code, Blockly.C.ORDER_UNARY_POSTFIX];
    } else if (mode == 'REMOVE') {
      return list + '.removeAt(' + at + ');\n';
    }
  } else if (where == 'FROM_END') {
    if (mode == 'GET') {
      var functionName = Blockly.C.provideFunction_(
          'lists_get_from_end',
          [ 'dynamic ' + Blockly.C.FUNCTION_NAME_PLACEHOLDER_ +
              '(List myList, num x) {',
            '  x = myList.length - x;',
            '  return myList.removeAt(x);',
            '}']);
      code = functionName + '(' + list + ', ' + at + ')';
      return [code, Blockly.C.ORDER_UNARY_POSTFIX];
    } else if (mode == 'GET_REMOVE' || mode == 'REMOVE') {
      var functionName = Blockly.C.provideFunction_(
          'lists_remove_from_end',
          [ 'dynamic ' + Blockly.C.FUNCTION_NAME_PLACEHOLDER_ +
              '(List myList, num x) {',
            '  x = myList.length - x;',
            '  return myList.removeAt(x);',
            '}']);
      code = functionName + '(' + list + ', ' + at + ')';
      if (mode == 'GET_REMOVE') {
        return [code, Blockly.C.ORDER_UNARY_POSTFIX];
      } else if (mode == 'REMOVE') {
        return code + ';\n';
      }
    }
  } else if (where == 'RANDOM') {
    Blockly.C.definitions_['import_dart_math'] =
        'import \'dart:math\' as Math;';
    var functionName = Blockly.C.provideFunction_(
        'lists_get_random_item',
        [ 'dynamic ' + Blockly.C.FUNCTION_NAME_PLACEHOLDER_ +
            '(List myList, bool remove) {',
          '  int x = new Math.Random().nextInt(myList.length);',
          '  if (remove) {',
          '    return myList.removeAt(x);',
          '  } else {',
          '    return myList[x];',
          '  }',
          '}']);
    code = functionName + '(' + list + ', ' + (mode != 'GET') + ')';
    if (mode == 'GET' || mode == 'GET_REMOVE') {
      return [code, Blockly.C.ORDER_UNARY_POSTFIX];
    } else if (mode == 'REMOVE') {
      return code + ';\n';
    }
  }
  throw 'Unhandled combination (lists_getIndex).';
};

Blockly.C['lists_setIndex'] = function(block) {
  // Set element at index.
  // Note: Until February 2013 this block did not have MODE or WHERE inputs.
  var list = Blockly.C.valueToCode(block, 'LIST',
      Blockly.C.ORDER_UNARY_POSTFIX) || '[]';
  var mode = block.getFieldValue('MODE') || 'GET';
  var where = block.getFieldValue('WHERE') || 'FROM_START';
  var at = Blockly.C.valueToCode(block, 'AT',
      Blockly.C.ORDER_ADDITIVE) || '1';
  var value = Blockly.C.valueToCode(block, 'TO',
      Blockly.C.ORDER_ASSIGNMENT) || 'null';
  // Cache non-trivial values to variables to prevent repeated look-ups.
  // Closure, which accesses and modifies 'list'.
  function cacheList() {
    if (list.match(/^\w+$/)) {
      return '';
    }
    var listVar = Blockly.C.variableDB_.getDistinctName(
        'tmp_list', Blockly.Variables.NAME_TYPE);
    var code = 'List ' + listVar + ' = ' + list + ';\n';
    list = listVar;
    return code;
  }
  if (where == 'FIRST') {
    if (mode == 'SET') {
      return list + '[0] = ' + value + ';\n';
    } else if (mode == 'INSERT') {
      return list + '.insert(0, ' + value + ');\n';
    }
  } else if (where == 'LAST') {
    if (mode == 'SET') {
      var code = cacheList();
      code += list + '[' + list + '.length - 1] = ' + value + ';\n';
      return code;
    } else if (mode == 'INSERT') {
      return list + '.add(' + value + ');\n';
    }
  } else if (where == 'FROM_START') {
    // Blockly uses one-based indicies.
    if (Blockly.isNumber(at)) {
      // If the index is a naked number, decrement it right now.
      at = parseInt(at, 10) - 1;
    } else {
      // If the index is dynamic, decrement it in code.
      at += ' - 1';
    }
    if (mode == 'SET') {
      return list + '[' + at + '] = ' + value + ';\n';
    } else if (mode == 'INSERT') {
      return list + '.insert(' + at + ', ' + value + ');\n';
    }
  } else if (where == 'FROM_END') {
    var code = cacheList();
    if (mode == 'SET') {
      code += list + '[' + list + '.length - ' + at + '] = ' + value + ';\n';
      return code;
    } else if (mode == 'INSERT') {
      code += list + '.insert(' + list + '.length - ' + at + ', ' +
          value + ');\n';
      return code;
    }
  } else if (where == 'RANDOM') {
    Blockly.C.definitions_['import_dart_math'] =
        'import \'dart:math\' as Math;';
    var code = cacheList();
    var xVar = Blockly.C.variableDB_.getDistinctName(
        'tmp_x', Blockly.Variables.NAME_TYPE);
    code += 'int ' + xVar +
        ' = new Math.Random().nextInt(' + list + '.length);';
    if (mode == 'SET') {
      code += list + '[' + xVar + '] = ' + value + ';\n';
      return code;
    } else if (mode == 'INSERT') {
      code += list + '.insert(' + xVar + ', ' + value + ');\n';
      return code;
    }
  }
  throw 'Unhandled combination (lists_setIndex).';
};

Blockly.C['lists_getSublist'] = function(block) {
  // Get sublist.
  var list = Blockly.C.valueToCode(block, 'LIST',
      Blockly.C.ORDER_UNARY_POSTFIX) || '[]';
  var where1 = block.getFieldValue('WHERE1');
  var where2 = block.getFieldValue('WHERE2');
  var at1 = Blockly.C.valueToCode(block, 'AT1',
      Blockly.C.ORDER_NONE) || '1';
  var at2 = Blockly.C.valueToCode(block, 'AT2',
      Blockly.C.ORDER_NONE) || '1';
  if ((where1 == 'FIRST' || where1 == 'FROM_START' && Blockly.isNumber(at1)) &&
      (where2 == 'LAST' || where2 == 'FROM_START' && Blockly.isNumber(at2))) {
    // Simple case that can be done inline.
    at1 = where1 == 'FIRST' ? 0 : parseInt(at1, 10) - 1;
    if (where2 == 'LAST') {
      code = list + '.sublist(' + at1 + ')';
    } else {
      at2 = parseInt(at2, 10);
      code = list + '.sublist(' + at1 + ', ' + at2 + ')';
    }
  } else {
    var functionName = Blockly.C.provideFunction_(
        'lists_get_sublist',
        [ 'List ' + Blockly.C.FUNCTION_NAME_PLACEHOLDER_ +
            '(list, where1, at1, where2, at2) {',
          '  int getAt(where, at) {',
          '    if (where == \'FROM_START\') {',
          '      at--;',
          '    } else if (where == \'FROM_END\') {',
          '      at = list.length - at;',
          '    } else if (where == \'FIRST\') {',
          '      at = 0;',
          '    } else if (where == \'LAST\') {',
          '      at = list.length - 1;',
          '    } else {',
          '      throw \'Unhandled option (lists_getSublist).\';',
          '    }',
          '    return at;',
          '  }',
          '  at1 = getAt(where1, at1);',
          '  at2 = getAt(where2, at2) + 1;',
          '  return list.sublist(at1, at2);',
          '}']);
    var code = functionName + '(' + list + ', \'' +
        where1 + '\', ' + at1 + ', \'' + where2 + '\', ' + at2 + ')';
  }
  return [code, Blockly.C.ORDER_UNARY_POSTFIX];
};

Blockly.C['lists_split'] = function(block) {
  // Block for splitting text into a list, or joining a list into text.
  var value_input = Blockly.C.valueToCode(block, 'INPUT',
      Blockly.C.ORDER_UNARY_POSTFIX);
  var value_delim = Blockly.C.valueToCode(block, 'DELIM',
      Blockly.C.ORDER_NONE) || '\'\'';
  var mode = block.getFieldValue('MODE');
  if (mode == 'SPLIT') {
    if (!value_input) {
      value_input = '\'\'';
    }
    var functionName = 'split';
  } else if (mode == 'JOIN') {
    if (!value_input) {
      value_input = '[]';
    }
    var functionName = 'join';
  } else {
    throw 'Unknown mode: ' + mode;
  }
  var code = value_input + '.' + functionName + '(' + value_delim + ')';
  return [code, Blockly.C.ORDER_UNARY_POSTFIX];
};
