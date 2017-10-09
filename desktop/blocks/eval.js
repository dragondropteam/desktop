/**
 * Created by lukepowell on 10/4/17.
 * @fileoverview Block to allow arbitrary JavaScript code to be run by advanced students
 * @author luke.powell@digipen.edu (Luke Powell)
 * @copyright DigiPen Institute of Technology 2017
 */

'use strict';
goog.provide('Blockly.Blocks.eval');
goog.require('Blockly.Blocks');

Blockly.Blocks['javascript_eval'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('eval')
            .appendField(new Blockly.FieldTextInput(), 'EVAL');
        this.setColour('#ff6d00');
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('Execute the JavaScript expression');
        this.setHelpUrl('developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval');
        this.setInputsInline(true);
    }
};

Blockly.Blocks['javascript_eval_output'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('eval with output')
            .appendField(new Blockly.FieldTextInput(), 'EVAL');
        this.setColour('#ff6d00');
        this.setOutput(true);
        this.setTooltip('Execute the JavaScript expression returning the value');
        this.setHelpUrl('developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval');
        this.setInputsInline(true);
    }
};