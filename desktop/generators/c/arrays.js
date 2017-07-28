/**
 * All content copyright DigiPen Institute of Technology 2016
 */

/**
 * @fileoverview Generating C++ for arrays blocks
 * @author luke.powell@digipen.edu (Luke Powell)
 */
'use strict';

goog.provide('Blockly.C.arrays');

goog.require('Blockly.C');

Blockly.C['typed_arrays_create_with'] = function (block) {
    // Create a list with any number of elements of any type.
    let type;
    let defaultValue;
    switch (block.ctype) {
        case 'INTEGER':
            type = 'int';
            defaultValue = '0';
            break;
        case 'FLOAT':
            type = 'float';
            defaultValue = '0';
            break;
        case 'STRING':
            type = 'string';
            defaultValue = '""';
            break;
        case 'BOOLEAN':
            type = 'bool';
            defaultValue = 'false';
            break;
        default:
            type = 'int';
            defaultValue = '0';
            break;
    }
    let code = new Array(block.itemCount_);
    for (let n = 0; n < block.itemCount_; n++) {
        code[n] = Blockly.C.valueToCode(block, 'ADD' + n,
                Blockly.C.ORDER_NONE) || defaultValue;
    }
    code = `new ${type}[${block.itemCount_}]{${code.join(', ')}}`;
    return [code, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['typed_arrays_setIndex'] = function (block) {
    const variable_array = Blockly.C.variableDB_.getName(block.getFieldValue('ARRAY'), Blockly.Variables.NAME_TYPE);
    const value_index = Blockly.C.valueToCode(block, 'INDEX', Blockly.C.ORDER_ATOMIC);
    const value_value = Blockly.C.valueToCode(block, 'VALUE', Blockly.C.ORDER_ATOMIC);
    //We can restrict the user's input to be a Number however we cannot restrict it further to an integral value
    //just cast it to make everything happy
    return `${variable_array}[(int)${value_index}] = ${value_value};\n`;
};

Blockly.C['typed_arrays_getIndex'] = function (block) {
    const variable_array = Blockly.C.variableDB_.getName(block.getFieldValue('ARRAY'), Blockly.Variables.NAME_TYPE);
    const value_index = Blockly.C.valueToCode(block, 'INDEX', Blockly.C.ORDER_ATOMIC);
    return [`${variable_array}[(int)${value_index}]`, Blockly.C.ORDER_NONE];
};

Blockly.C['typed_arrays_delete'] = function (block) {
    const variable_array = Blockly.C.variableDB_.getName(block.getFieldValue('ARRAY'), Blockly.Variables.NAME_TYPE);
    return `delete ${variable_array};\n`;
};
