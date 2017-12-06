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
 * @fileoverview Generating C for procedure blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * Modifications copyright DigiPen Institute of Technology
 */
goog.provide('Blockly.C.procedures');

goog.require('Blockly.C');

function getCType(varType) {
    switch (varType) {
        case 'INTEGER':
            return 'int';
        case 'BOOLEAN':
            return 'bool';
        case 'FLOAT':
            return 'float';
        case 'STRING':
            return 'String';
        case 'CHARACTER':
            return 'char';
        default:
            return 'int';
    }
}
Blockly.C['procedures_defreturn'] = function (block) {
    // Define a procedure with a return value.
    var funcName = Blockly.C.variableDB_.getName(block.getFieldValue('NAME'),
        Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.C.statementToCode(block, 'STACK');
    if (Blockly.C.STATEMENT_PREFIX) {
        branch = Blockly.C.prefixLines(
                Blockly.C.STATEMENT_PREFIX.replace(/%1/g,
                    '\'' + block.id + '\''), Blockly.C.INDENT) + branch;
    }
    if (Blockly.C.INFINITE_LOOP_TRAP) {
        branch = Blockly.C.INFINITE_LOOP_TRAP.replace(/%1/g,
                '\'' + block.id + '\'') + branch;
    }
    var returnValue = Blockly.C.valueToCode(block, 'RETURN',
            Blockly.C.ORDER_NONE) || '';
    if (returnValue) {
        returnValue = '  return ' + returnValue + ';\n';
    }
    var returnType = returnValue ? 'int' : 'void';
    var args = [];
    for (var x = 0; x < block.arguments_.length; x++) {
        args[x] = 'int ' + Blockly.C.variableDB_.getName(block.arguments_[x],
                Blockly.Variables.NAME_TYPE);
    }
    var code = returnType + ' ' + funcName + '(' + args.join(', ') + ') {\n' +
        branch + returnValue + '}';
    code = Blockly.C.scrub_(block, code);
    Blockly.C.definitions_[funcName] = code;
    return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.C['procedures_defnoreturn'] = Blockly.C['procedures_defreturn'];

Blockly.C['procedures_callreturn'] = function (block) {
    // Call a procedure with a return value.
    var funcName = Blockly.C.variableDB_.getName(block.getFieldValue('NAME'),
        Blockly.Procedures.NAME_TYPE);
    var args = [];
    for (var x = 0; x < block.arguments_.length; x++) {
        args[x] = Blockly.C.valueToCode(block, 'ARG' + x,
                Blockly.C.ORDER_NONE) || '0';
    }
    var code = funcName + '(' + args.join(', ') + ')';
    return [code, Blockly.C.ORDER_UNARY_POSTFIX];
};

Blockly.C['procedures_callnoreturn'] = function (block) {
    // Call a procedure with no return value.
    var funcName = Blockly.C.variableDB_.getName(block.getFieldValue('NAME'),
        Blockly.Procedures.NAME_TYPE);
    var args = [];
    for (var x = 0; x < block.arguments_.length; x++) {
        args[x] = Blockly.C.valueToCode(block, 'ARG' + x,
                Blockly.C.ORDER_NONE) || '0';
    }
    var code = funcName + '(' + args.join(', ') + ');\n';
    return code;
};

Blockly.C['procedures_ifreturn'] = function (block) {
    // Conditionally return value from a procedure.
    var condition = Blockly.C.valueToCode(block, 'CONDITION',
            Blockly.C.ORDER_NONE) || 'false';
    var code = 'if (' + condition + ') {\n';
    if (block.hasReturnValue_) {
        var value = Blockly.C.valueToCode(block, 'VALUE',
                Blockly.C.ORDER_NONE) || '0';
        code += '  return ' + value + ';\n';
    } else {
        code += '  return;\n';
    }
    code += '}\n';
    return code;
};

/**
 * Begin modifications copyright DigiPen Institute of Technology
 */
Blockly.C['procedures_ifreturn_typed'] = Blockly.C['procedures_ifreturn'];

Blockly.C['procedures_return_typed'] = function (block) {
    if (block.hasReturnValue_) {
        const value = Blockly.C.valueToCode(block, 'VALUE',
                Blockly.C.ORDER_NONE) || '0';
        return '  return ' + value + ';\n';
    } else {
        return '  return;\n';
    }
};

Blockly.C['procedures_defreturn_typed'] = function (block) {
    // Define a procedure with a return value.
    var funcName = Blockly.C.variableDB_.getName(block.getFieldValue('NAME'),
        Blockly.Procedures.NAME_TYPE);
    var branch = Blockly.C.statementToCode(block, 'STACK');
    if (Blockly.C.STATEMENT_PREFIX) {
        branch = Blockly.C.prefixLines(
                Blockly.C.STATEMENT_PREFIX.replace(/%1/g,
                    '\'' + block.id + '\''), Blockly.C.INDENT) + branch;
    }
    if (Blockly.C.INFINITE_LOOP_TRAP) {
        branch = Blockly.C.INFINITE_LOOP_TRAP.replace(/%1/g,
                '\'' + block.id + '\'') + branch;
    }
    var returnValue = Blockly.C.valueToCode(block, 'RETURN',
            Blockly.C.ORDER_NONE) || '';
    if (returnValue) {
        returnValue = '  return ' + returnValue + ';\n';
    }
    var returnType = returnValue ? getCType(block.getFieldValue('TYPE')) : 'int';
    var args = [];
    for (var x = 0; x < block.arguments_.length; x++) {
        let varType = getCType(block.workspace.getVariableType(block.arguments_[x]));
        args[x] = `${varType} ${Blockly.C.variableDB_.getName(block.arguments_[x],
            Blockly.Variables.NAME_TYPE)}`;
    }
    var code = returnType + ' ' + funcName + '(' + args.join(', ') + ') {\n' +
        branch + returnValue + '}';
    code = Blockly.C.scrub_(block, code);
    Blockly.C.functions_[funcName] = `${returnType} ${funcName} (${args.join(', ')});`;
    Blockly.C.definitions_[funcName] = code;
    return null;
};

// Defining a procedure without a return value uses the same generator as
// a procedure with a return value.
Blockly.C['procedures_defnoreturn_typed'] = Blockly.C['procedures_defreturn_typed'];

Blockly.C['procedures_callreturn_typed'] = function (block) {
    // Call a procedure with a return value.
    var funcName = Blockly.C.variableDB_.getName(block.getFieldValue('NAME'),
        Blockly.Procedures.NAME_TYPE);
    var args = [];
    for (var x = 0; x < block.arguments_.length; x++) {
        args[x] = Blockly.C.valueToCode(block, 'ARG' + x,
                Blockly.C.ORDER_NONE) || '0';
    }
    var code = funcName + '(' + args.join(', ') + ')';
    return [code, Blockly.C.ORDER_UNARY_POSTFIX];
};

Blockly.C['procedures_callnoreturn_typed'] = Blockly.C['procedures_callnoreturn'];

Blockly.C['cast_block'] = function (block) {
    var value_value = Blockly.C.valueToCode(block, 'VALUE', Blockly.C.ORDER_ATOMIC);
    var dropdown_type = block.getFieldValue('TYPE');
    if (dropdown_type === 'STRING') {
        return [`new String(${value_value})`, Blockly.C.ORDER_NONE];
    } else {
        var cType = getCType(dropdown_type);
        return [`(${cType})(${value_value})`, Blockly.C.ORDER_NONE];
    }
};


/**
 * Simple return block with no condition
 * @param block
 * @return {string}
 */
Blockly.C['procedures_return'] = function (block) {
    if (block.hasReturnValue_) {
        let value = Blockly.C.valueToCode(block, 'VALUE',
            Blockly.C.ORDER_NONE) || '0';
        return 'return ' + value + ';\n';
    } else {
        return 'return;\n';
    }
};
/**
 * End modifications
 */