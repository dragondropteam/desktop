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
const DOM_COLOUR = '#bcd5d1';;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


Blockly.Blocks['getelementbyid'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("getElementById with ID")
            .appendField(new Blockly.FieldTextInput("ID"), "ID");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(DOM_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['dom_getcontext'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("for dom")
            .appendField(new Blockly.FieldVariable("dom"), "DOM");
        this.appendDummyInput()
            .appendField("get context")
            .appendField(new Blockly.FieldTextInput("2d"), "CONTEXT");
        this.setInputsInline(true);
        this.setColour(DOM_COLOUR);
        this.setOutput(true, null);
    }
};

Blockly.Blocks['set_height'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("DOM variable")
            .appendField(new Blockly.FieldVariable("domvar"), "DOMVAR");
        this.appendValueInput("HEIGHT")
            .setCheck(null)
            .appendField("set height");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(DOM_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['set_width'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("DOM variable")
            .appendField(new Blockly.FieldVariable("domvar"), "DOMVAR");
        this.appendValueInput("WIDTH")
            .setCheck(null)
            .appendField("set width");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(DOM_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['add_event_listener'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("add event listener to dom element")
            .appendField(new Blockly.FieldVariable("element"), "ELEMENT")
            .appendField("for event of type")
            .appendField(new Blockly.FieldTextInput("eventType"), "EVENT_TYPE");
        this.appendStatementInput("DO")
            .setCheck(null)
            .appendField("on")
            .appendField(new Blockly.FieldVariable("event_"), "EVENT")
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['set_attribute'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for dom element")
        .appendField(new Blockly.FieldVariable("element"), "ELEMENT")
        .appendField("set Attribute")
        .appendField(new Blockly.FieldTextInput("attribute"), "ATTRIBUTE")
        .appendField(new Blockly.FieldTextInput("value"), "VALUE");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(DOM_COLOUR);
  }
};

Blockly.Blocks['console_log'] = {
  init: function() {
    this.appendValueInput("VALUE")
        .setCheck(null)
        .appendField("console log");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(DOM_COLOUR);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
//endregion document methods
