/**
 * Copyright DigiPen Institute of Technology 2017
 */

/**
 * @fileoverview DOM blocks for Blockly.
 * @author clarissa.jarem@digipen.edu (Clarissa Jarem)
 * @author luke.powell@digipen.edu (Luke Powell)
 */
'use strict';

goog.provide('Blockly.Blocks.dom');

goog.require('Blockly.Blocks');

//region document methods
const DOM_COLOUR = '#bcd5d1';

Blockly.Blocks['getelementbyid'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GETELEMENTBYID_FIELD_1)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.GETELEMENTBYID_ID_TEXT_DEFAULT), "ID");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(DOM_COLOUR);
        this.setTooltip(Blockly.Msg.GETELEMENTBYID_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GETELEMENTBYID_HELP_URL);
    }
};

Blockly.Blocks['dom_getcontext'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DOM_GETCONTEXT_FIELD_1)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.DOM_VAR_DEFAULT), "DOM");
        this.appendDummyInput()
            .appendField(Blockly.Msg.DOM_GETCONTEXT_FIELD_2)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.DOM_GETCONTEXT_CONTEXT_TEXT_DEFAULT), "CONTEXT");
        this.setInputsInline(true);
        this.setColour(DOM_COLOUR);
        this.setOutput(true, null);
    }
};

Blockly.Blocks['set_height'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_HEIGHT_FIELD_1)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.DOM_VAR_DEFAULT), "DOMVAR");
        this.appendValueInput("HEIGHT")
            .setCheck(null)
            .appendField(Blockly.Msg.SET_HEIGHT_FIELD_2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(DOM_COLOUR);
        this.setTooltip(Blockly.Msg.SET_HEIGHT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_HEIGHT_HELP_URL);
    }
};

Blockly.Blocks['set_width'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_WIDTH_FIELD_1)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.DOM_VAR_DEFAULT), "DOMVAR");
        this.appendValueInput("WIDTH")
            .setCheck(null)
            .appendField(Blockly.Msg.SET_WIDTH_FIELD_2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(DOM_COLOUR);
        this.setTooltip(Blockly.Msg.SET_WIDTH_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_WIDTH_HELP_URL);
    }
};

Blockly.Blocks['add_event_listener'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADD_EVENT_LISTENER_FIELD_1)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.DOM_ELEMENT_VAR_DEFAULT), "ELEMENT")
            .appendField(Blockly.Msg.ADD_EVENT_LISTENER_FIELD_2)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.ADD_EVENT_LISTENER_EVENT_TYPE_TEXT_DEFAULT), "EVENT_TYPE");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField(Blockly.Msg.ADD_EVENT_LISTENER_FIELD_3)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.DOM_EVENT_VAR_DEFAULT), "EVENT")
            .appendField(Blockly.Msg.ADD_EVENT_LISTENER_FIELD_4);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.ADD_EVENT_LISTENER_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ADD_EVENT_LISTENER_HELP_URL);
    }
};

Blockly.Blocks['set_attribute'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_ATTRIBUTE_FIELD_1)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.DOM_ELEMENT_VAR_DEFAULT), "ELEMENT")
            .appendField(Blockly.Msg.SET_ATTRIBUTE_FIELD_2)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.SET_ATTRIBUTE_ATTRIBUTE_TEXT_DEFAULT), "ATTRIBUTE")
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.SET_ATTRIBUTE_VALUE_TEXT_DEFAULT), "VALUE");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(DOM_COLOUR);
    }
};

Blockly.Blocks['console_log'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField(Blockly.Msg.CONSOLE_LOG_FIELD_1);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(DOM_COLOUR);
        this.setTooltip(Blockly.Msg.CONSOLE_LOG_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CONSOLE_LOG_HELP_URL);
    }
};
//endregion document methods
