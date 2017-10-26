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
            .appendField(Blockly.Msg.GETELEMENTBYID_TITLE)
            .appendField(new Blockly.FieldTextInput('ID'), "ID");
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
            .appendField(Blockly.Msg.DOM_GETCONTEXT_DOM)
            .appendField(new Blockly.FieldVariable('dom'), "DOM");
        this.appendDummyInput()
            .appendField(Blockly.Msg.DOM_GETCONTEXT_CONTEXT)
            .appendField(new Blockly.FieldTextInput('2d'), "CONTEXT");
        this.setInputsInline(true);
        this.setColour(DOM_COLOUR);
        this.setOutput(true, null);
    }
};

Blockly.Blocks['set_height'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_HEIGHT_DOM)
            .appendField(new Blockly.FieldVariable('dom'), "DOMVAR");
        this.appendValueInput("HEIGHT")
            .setCheck(null)
            .appendField(Blockly.Msg.SET_HEIGHT_TITLE);
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
            .appendField(Blockly.Msg.SET_WIDTH_DOM)
            .appendField(new Blockly.FieldVariable('dom'), "DOMVAR");
        this.appendValueInput("WIDTH")
            .setCheck(null)
            .appendField(Blockly.Msg.SET_WIDTH_TITLE);
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
            .appendField(Blockly.Msg.ADD_EVENT_LISTENER_TITLE)
            .appendField(new Blockly.FieldVariable('element'), "ELEMENT")
            .appendField(Blockly.Msg.ADD_EVENT_LISTENER_EVENT_TYPE)
            .appendField(new Blockly.FieldTextInput('eventType'), "EVENT_TYPE");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField(Blockly.Msg.ADD_EVENT_LISTENER_ON)
            .appendField(new Blockly.FieldVariable('event_'), "EVENT")
            .appendField(Blockly.Msg.ADD_EVENT_LISTENER_DO);
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
            .appendField(Blockly.Msg.SET_ATTRIBUTE_DOM)
            .appendField(new Blockly.FieldVariable('element'), "ELEMENT")
            .appendField(Blockly.Msg.SET_ATTRIBUTE_TITLE)
            .appendField(new Blockly.FieldTextInput('attribute'), "ATTRIBUTE")
            .appendField(new Blockly.FieldTextInput('value'), "VALUE");
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
            .appendField(Blockly.Msg.CONSOLE_LOG_TITLE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(DOM_COLOUR);
        this.setTooltip(Blockly.Msg.CONSOLE_LOG_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CONSOLE_LOG_HELP_URL);
    }
};
//endregion document methods
