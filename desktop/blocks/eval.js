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
            .appendField(Blockly.Msg.JAVASCRIPT_EVAL_FIELD_1)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.JAVASCRIPT_EVAL_DEFAULT_TEXT), 'EVAL');
        this.setColour('#ff6d00');
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip(Blockly.Msg.JAVASCRIPT_EVAL_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.JAVASCRIPT_EVAL_HELP_URL);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['javascript_eval_output'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.JAVASCRIPT_EVAL_OUTPUT_FIELD_1)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.JAVASCRIPT_EVAL_DEFAULT_TEXT), 'EVAL');
        this.setColour('#ff6d00');
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.JAVASCRIPT_EVAL_OUTPUT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.JAVASCRIPT_EVAL_OUTPUT_HELP_URL);
        this.setInputsInline(true);
    }
};
