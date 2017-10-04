/**
 * Created by lukepowell on 10/4/17.
 * @fileoverview Block to allow arbitrary JavaScript code to be run by advanced students
 * @author luke.powell@digipen.edu (Luke Powell)
 * @copyright DigiPen Institute of Technology 2017
 */

'use strict';
goog.provide('Blockly.JavaScript.eval');
goog.require('Blockly.JavaScript');

Blockly.JavaScript['javascript_eval'] = function(block){
    const evalStr = block.getFieldValue('EVAL');
    return `${evalStr}\n`;
};


Blockly.JavaScript['javascript_eval_output'] = function(block){
    const evalStr = block.getFieldValue('EVAL');
    return [`${evalStr}`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
