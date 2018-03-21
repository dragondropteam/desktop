 /**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
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

/** Modifications made by DigiPen Institute of Technology
 *
 */

/**
 * @fileoverview Variable blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.variables');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.variables.HUE = "#381ECC";
const types = GetTypes();


function GetTypes() {
    if(!Blockly.C || !Blockly.C.TYPE_CONVERSION){
        return [];
    }


    let types = [];
    for(let element in Blockly.C.TYPE_CONVERSION){
        types.push([Blockly.C.TYPE_CONVERSION[element][1],element]);
    }
    return types;
}

Blockly.Blocks['variables_get'] = {
    /**
     * Block for variable getter.
     * @this Blockly.Block
     */
    init: function () {
        this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable(
                Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
    },
    contextMenuType_: 'variables_set',
    /**
     * Add menu option to create getter/setter block for this setter/getter.
     * @param {!Array} options List of menu options to add to.
     * @this Blockly.Block
     */
    customContextMenu: function (options) {
        var option = {enabled: true};
        var name = this.getFieldValue('VAR');
        option.text = this.contextMenuMsg_.replace('%1', name);
        var xmlField = goog.dom.createDom('field', null, name);
        xmlField.setAttribute('name', 'VAR');
        var xmlBlock = goog.dom.createDom('block', null, xmlField);
        xmlBlock.setAttribute('type', this.contextMenuType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
    }
};

Blockly.Blocks['variables_set'] = {
    /**
     * Block for variable setter.
     * @this Blockly.Block
     */
    init: function () {
        this.jsonInit({
            "message0": Blockly.Msg.VARIABLES_SET,
            "args0": [
                {
                    "type": "field_variable",
                    "name": "VAR",
                    "variable": Blockly.Msg.VARIABLES_DEFAULT_NAME
                },
                {
                    "type": "input_value",
                    "name": "VALUE"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": Blockly.Blocks.variables.HUE,
            "tooltip": Blockly.Msg.VARIABLES_SET_TOOLTIP,
            "helpUrl": Blockly.Msg.VARIABLES_SET_HELPURL
        });
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    },
    contextMenuType_: 'variables_get',
    customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
};


Blockly.Blocks['variables_get_typed'] = {
    /**
     * Block for variable getter.
     * @this Blockly.Block
     */
    init: function () {
        console.log("WE MADE A TYPED < GET > VARIABLE W/ TYPE " + this.type_);
        this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
        this.setColour(Blockly.Blocks.variables.HUE);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(types), "TYPE")
            .appendField(new Blockly.FieldVariable(
                Blockly.Msg.VARIABLES_DEFAULT_NAME), 'VAR');
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
    },
    contextMenuType_: 'variable_set_typed',
    /**
     * Add menu option to create getter/setter block for this setter/getter.
     * @param {!Array} options List of menu options to add to.
     * @this Blockly.Block
     */
    customContextMenu: function (options) {
        let option = {enabled: true};

        let name = this.getFieldValue('VAR');
        option.text = this.contextMenuMsg_.replace('%1', name);

        // <field name="VAR">Example</field>
        let xmlField = goog.dom.createDom('field', null, name);
        xmlField.setAttribute('name', 'VAR');

        // <mutation type="..." ctype="..."></mutation>
        let mutationField = goog.dom.createDom('mutation', null);
        mutationField.setAttribute('type', this.type_);
        mutationField.setAttribute('ctype', this.cType);

        // <field name="TYPE">...</field>
        let typeField = goog.dom.createDom('field', null, this.cType);
        typeField.setAttribute('name', 'TYPE');

        // Actually constructs the XML using google's create DOM (variadic)
        let xmlBlock = goog.dom.createDom('block', null, xmlField, mutationField, typeField);
        xmlBlock.setAttribute('type', this.contextMenuType_);

        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
    },
    onchange: function (changeEvent) {
        if (changeEvent.type != Blockly.Events.CHANGE) {
            return;
        }

        //Type has changed update the check
        if (this.workspace.getBlockById(changeEvent.blockId) != this) {
            return;
        }

        if (changeEvent.element == 'field' && changeEvent.name == 'VAR') {
            var varType = this.workspace.getVariableTypeExcludeId(changeEvent.newValue, changeEvent.blockId);
            this.cType = varType;
            if (this.cType == 'INTEGER' || this.cType == 'FLOAT') {
                this.type_ = 'Number';
            } else if (this.cType == 'BOOLEAN') {
                this.type_ = 'Boolean';
            } else if (this.cType == 'STRING') {
                this.type_ = 'String';
            } else {
                this.type_ = this.cType;
            }
        }

        if (changeEvent.element == 'field' && changeEvent.name == 'TYPE') {
            console.log("Set type for fields");
            this.cType = changeEvent.newValue;
            if (changeEvent.newValue == 'INTEGER' || changeEvent.newValue == 'FLOAT') {
                this.type_ = 'Number';
            } else if (changeEvent.newValue == 'BOOLEAN') {
                this.type_ = 'Boolean';
            } else if (changeEvent.newValue == 'STRING') {
                this.type_ = 'String';
            } else {
                this.type_ = this.cType;
            }
        }

        this.setOutput(true, this.type_);
        this.workspace.changeVariableType(this.getFieldValue('VAR'), this.type_, this.cType);
    },

    mutationToDom: function () {
        var container = document.createElement('mutation');
        container.setAttribute('type', this.type_);
        container.setAttribute('ctype', this.cType);
        return container;
    },

    domToMutation: function (xmlElement) {
        this.type_ = xmlElement.getAttribute('type') || 'Number';
        this.cType = xmlElement.getAttribute('ctype') || 'INTEGER';
        this.setOutput(true, this.type_);
    },
};

Blockly.Blocks['variable_set_typed'] = {

    init: function () {
        console.log("WE MADE A TYPED < SET > VARIABLE W/ TYPE " + this.type_);
        this.appendValueInput("VALUE")
        //.setCheck("Number")
            .appendField(Blockly.Msg.VARIABLE_SET_TYPED_FIELD_1)
            .appendField(new Blockly.FieldDropdown(types), "TYPE")
            .appendField(new Blockly.FieldVariable(Blockly.Msg.VARIABLE_SET_TYPED_DEFAULT_VAR), "VAR")
            .appendField(Blockly.Msg.VARIABLE_SET_TYPED_FIELD_2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.VARIABLE_SET_TYPED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VARIABLE_SET_TYPED_HELP_URL);
        // Should match types
        this.type_ = 'Number';
        this.cType = 'INTEGER';
        this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    },

    onchange: function (changeEvent) {
        if (changeEvent.type != Blockly.Events.CHANGE) {
            return;
        }

        //Type has changed update the check
        if (this.workspace.getBlockById(changeEvent.blockId) != this) {
            return;
        }

        if (changeEvent.element == 'field' && changeEvent.name == 'VAR') {
            var varType = this.workspace.getVariableTypeExcludeId(changeEvent.newValue, changeEvent.blockId);
            this.cType = varType;
            if (this.cType == 'INTEGER' || this.cType == 'FLOAT') {
                this.type_ = 'Number';
            } else if (this.cType == 'BOOLEAN') {
                this.type_ = 'Boolean';
            } else if (this.cType == 'STRING') {
                this.type_ = 'String';
            } else {
                this.type_ = this.cType;
            }
        }

        if (changeEvent.element == 'field' && changeEvent.name == 'TYPE') {
            this.cType = changeEvent.newValue;
            if (changeEvent.newValue == 'INTEGER' || changeEvent.newValue == 'FLOAT') {
                this.type_ = 'Number';
            } else if (changeEvent.newValue == 'BOOLEAN') {
                this.type_ = 'Boolean';
            } else if (changeEvent.newValue == 'STRING') {
                this.type_ = 'String';
            } else {
                this.type_ = this.cType;
            }
        }

        this.getInput("VALUE").setCheck(this.type_);
        this.workspace.changeVariableType(this.getFieldValue('VAR'), this.type_, this.cType);
    },

    mutationToDom: function () {
        var container = document.createElement('mutation');
        container.setAttribute('type', this.type_);
        container.setAttribute('ctype', this.cType);
        this.workspace.changeVariableType(this.getFieldValue('VAR'), this.type_, this.cType);
        return container;
    },

    domToMutation: function (xmlElement) {
        this.type_ = xmlElement.getAttribute('type') || 'Number';
        this.cType = xmlElement.getAttribute('ctype') || 'INTEGER';
        this.getInput("VALUE").setCheck(this.type_);
        this.workspace.changeVariableType(this.getFieldValue('VAR'), this.type_, this.cType);
    },
    contextMenuType_: 'variables_get_typed',
    customContextMenu: Blockly.Blocks['variables_get_typed'].customContextMenu
};
