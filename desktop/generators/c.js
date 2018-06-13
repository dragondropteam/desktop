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
 * @fileoverview Helper functions for generating Dart for blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.C');

goog.require('Blockly.Generator');


/**
 * Dart code generator.
 * @type {!Blockly.Generator}
 */
Blockly.C = new Blockly.Generator('C');

Blockly.C.type = 'wink';

/**
 * List of illegal variable names.
 * This is not intended to be a security feature.  Blockly is 100% client-side,
 * so bypassing this list is trivial.  This is intended to prevent users from
 * accidentally clobbering a built-in object or function.
 * @private
 */
Blockly.C.addReservedWords(
    'auto', 'else', 'long', 'switch', 'break', 'enum', 'register', 'typedef', 'case', 'extern', 'return', 'union', 'char',
    'float', 'short', 'unsigned', 'const', 'for', 'signed', 'void', 'continue', 'goto', 'sizeof', 'volatile',
    'default', 'if', 'static', 'while', 'do', 'int', 'struct', '_Packed', 'double');


/**
 * Order of operation ENUMs.
 * http://en.cppreference.com/w/cpp/language/operator_precedence
 */
Blockly.C.ORDER_ATOMIC = 0;            // 0 "" ...
Blockly.C.ORDER_UNARY_POSTFIX = 1;     // expr++ expr-- () [] .
Blockly.C.ORDER_FUNCTION_CALL = 1;     // f()
Blockly.C.ORDER_FUNCTIONAL_CAST = 1;   // type() type{}
Blockly.C.ORDER_SUBSCRIPT = 1;         // []
Blockly.C.ORDER_MEMBER_ACCESS = 1;     // . ->
Blockly.C.ORDER_UNARY_PREFIX = 2;      // -expr !expr ~expr ++expr --expr
Blockly.C.ORDER_NOT = 2;               // ! ~
Blockly.C.ORDER_C_STYLE_CAST = 2;      // (int)a
Blockly.C.ORDER_INDIRECTION = 2;       // *a
Blockly.C.ORDER_ADDRESS_OF = 2;        // &a
Blockly.C.ORDER_SIZEOF = 2;            // sizeof
Blockly.C.ORDER_NEW = 2;               // new new[]
Blockly.C.ORDER_DELETE = 2;            // delete delete[]
Blockly.C.ORDER_POINTER_TO_MEMBER = 3; // .* ->*
Blockly.C.ORDER_MULTIPLICATIVE = 4;    // * / %
Blockly.C.ORDER_ADDITIVE = 5;          // + -
Blockly.C.ORDER_SHIFT = 6;             // << >>
Blockly.C.ORDER_RELATIONAL  = 7;       // >= > <= <
Blockly.C.ORDER_EQUALITY = 8;          // == !=
Blockly.C.ORDER_BITWISE_AND = 9;       // &
Blockly.C.ORDER_BITWISE_XOR = 10;      // ^
Blockly.C.ORDER_BITWISE_OR = 11;       // |
Blockly.C.ORDER_LOGICAL_AND = 12;      // &&
Blockly.C.ORDER_LOGICAL_OR = 13;       // ||
Blockly.C.ORDER_CONDITIONAL = 14;      // expr ? expr : expr
Blockly.C.ORDER_THROW = 14;            // throw
Blockly.C.ORDER_ASSIGNMENT = 14;       // = *= /= ~/= %= += -= <<= >>= &= ^= |=
Blockly.C.ORDER_COMMA = 15;            // ,
Blockly.C.ORDER_NONE = 99;             // (...)



/**
 * @return {string}
 */
function DefineVar(name, type){
    return `${type} ${Blockly.C.variableDB_.getName(name, Blockly.Variables.NAME_TYPE)};`;
}

Blockly.C.TYPE_CONVERSION = [];
Blockly.C.TYPE_CONVERSION['INTEGER'] = ['int', Blockly.Msg.TYPE_INT];
Blockly.C.TYPE_CONVERSION['BOOLEAN'] = ['bool', Blockly.Msg.TYPE_BOOL];
Blockly.C.TYPE_CONVERSION['FLOAT'] = ['float', Blockly.Msg.TYPE_FLOAT];
Blockly.C.TYPE_CONVERSION['STRING'] = ['String', Blockly.Msg.TYPE_STRING];
// Blockly.C.TYPE_CONVERSION['CHARACTER'] = 'char';
Blockly.C.TYPE_CONVERSION['ArrayINT'] = ['int *', Blockly.Msg.TYPE_INT_ARR];
Blockly.C.TYPE_CONVERSION['ArrayFLOAT'] = ['float *', Blockly.Msg.TYPE_FLOAT_ARR];
Blockly.C.TYPE_CONVERSION['ArrayBoolean'] = ['bool *', Blockly.Msg.TYPE_BOOL_ARR];
Blockly.C.TYPE_CONVERSION['ArrayString'] = ['String *', Blockly.Msg.TYPE_STRING_ARR];

/**
 * Initialise the database of variable names.
 * @param {!Blockly.Workspace} workspace Workspace to generate code from.
 */
Blockly.C.init = function (workspace) {
    // Create a dictionary of definitions to be printed before the code.
    Blockly.C.definitions_ = Object.create(null);
    Blockly.C.functions_ = Object.create(null);

    // Create a dictionary mapping desired function names in definitions_
    // to actual function names (to avoid collisions with user functions).
    Blockly.C.functionNames_ = Object.create(null);

    if (!Blockly.C.variableDB_) {
        Blockly.C.variableDB_ =
            new Blockly.Names(Blockly.C.RESERVED_WORDS_);
    } else {
        Blockly.C.variableDB_.reset();
    }

    let defvars = [];
    let variables = Blockly.Variables.allVariables(workspace);
    for (let i = 0; i < variables.length; i++) {
        let varType = workspace.getVariableType(variables[i]);
        defvars[i] = DefineVar(variables[i], Blockly.C.TYPE_CONVERSION[varType][0]);
    }

    Blockly.C.definitions_['variables'] = defvars.join('\n');
};

/**
 * Prepend the generated code with the variable definitions.
 * @param {string} code Generated code.
 * @return {string} Completed code.
 */
Blockly.C.finish = function (code) {
    //console.log(Blockly.C.type);
    // Indent every line.
    if (code) {
        code = Blockly.C.prefixLines(code, Blockly.C.INDENT);
    }

    //include some standard libraries here
    var header = '/*Wink Robot\n' +
            'Wink_BaseSketch_Rev01_03\n' +
            'Version 1.3 01/2016\n' +

            'This is a basic sketch that can be used as a starting point\n' +
            'for various functionality of the Wink robot.\n' +

            'This code was written by Kevin King and\n' +
            'Dustin Soodak for Plum Geek LLC.\n' +
            'Portions from other open source projects where noted.\n' +
            'This code is licensed under:\n' +
            'Creative Commons Attribution-ShareAlike 2.0 Generic (CC BY-SA 2.0)\n' +
            'https://creativecommons.org/licenses/by-sa/2.0/\n' +
            'Visit http://www.plumgeek.com for Wink information.\n' +
            'Visit http://www.arduino.cc to learn about the Arduino.\n' +

            '*/\n' +

            '#include "WinkHardware.hpp"  // Leave this line first. Do not edit this line. This causes Arduino\n' +
            '                           // to include background functions when turning your code into\n' +
            '                           // machine language Wink can understand.\n'
        ;
    //2 spaces instead of a tab
    var end = '\n  return 0;\n}\n';

    // Convert the definitions dictionary into a list.
    var imports = [];
    var definitions = [];
    for (var name in Blockly.C.definitions_) {
        var def = Blockly.C.definitions_[name];
        if (def.match(/^include\s/)) {
            imports.push(def);
        } else {
            definitions.push(def);
        }
    }

    var functions = [];
    for (var func in Blockly.C.functions_) {
        functions.push(Blockly.C.functions_[func]);
    }

    // Clean up temporary data.
    delete Blockly.C.definitions_;
    delete Blockly.C.functionNames_;
    delete Blockly.C.functions_;
    Blockly.C.variableDB_.reset();

    var allDefs = header + imports.join('\n') + functions.join('\n') + '\n' + definitions.join('\n\n');
    return allDefs.replace(/\n\n+/g, '\n\n').replace(/\n*$/, '\n\n') + code;
};

/**
 * Naked values are top-level blocks with outputs that aren't plugged into
 * anything.  A trailing semicolon is needed to make this legal.
 * @param {string} line Line of generated code.
 * @return {string} Legal line of code.
 */
Blockly.C.scrubNakedValue = function (line) {
    return line + ';\n';
};

/**
 * Encode a string as a properly escaped C string, complete with quotes.
 * @param {string} string Text to encode.
 * @return {string} C string.
 * @private
 */
Blockly.C.quote_ = function (string) {
    return goog.string.quote(string);
};

/**
 * Common tasks for generating Dart from blocks.
 * Handles comments for the specified block and any connected value blocks.
 * Calls any statements following this block.
 * @param {!Blockly.Block} block The current block.
 * @param {string} code The Dart code created for this block.
 * @return {string} Dart code with comments and subsequent blocks added.
 * @private
 */
Blockly.C.scrub_ = function (block, code) {
    var commentCode = '';
    // Only collect comments for blocks that aren't inline.
    if (!block.outputConnection || !block.outputConnection.targetConnection) {
        // Collect comment for this block.
        var comment = block.getCommentText();
        if (comment) {
            commentCode += Blockly.C.prefixLines(comment, '// ') + '\n';
        }
        // Collect comments for all value arguments.
        // Don't collect comments for nested statements.
        for (var x = 0; x < block.inputList.length; x++) {
            if (block.inputList[x].type == Blockly.INPUT_VALUE) {
                var childBlock = block.inputList[x].connection.targetBlock();
                if (childBlock) {
                    var comment = Blockly.C.allNestedComments(childBlock);
                    if (comment) {
                        commentCode += Blockly.C.prefixLines(comment, '// ');
                    }
                }
            }
        }
    }
    var nextBlock = block.nextConnection && block.nextConnection.targetBlock();
    var nextCode = Blockly.C.blockToCode(nextBlock);
    return commentCode + code + nextCode;
};
