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

/**
 * @fileoverview array blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Blocks.arrays');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.arrays.HUE = 260;

Blockly.Blocks['typed_arrays_create_with'] = {
    /**
     * Block for creating a array with any number of elements of any type.
     * @this Blockly.Block
     */
    init: function () {
        this.setInputsInline(false);
        this.setColour(Blockly.Blocks.arrays.HUE);
        this.itemCount_ = 3;
        this.updateShape_();
        this.ctype = 'ArrayINT';
        this.setOutput(true, this.ctype);
        this.setMutator(new Blockly.Mutator(['arrays_create_with_item']));
    },
    /**
     * Create XML to represent array inputs.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function () {
        let container = document.createElement('mutation');
        container.setAttribute('items', this.itemCount_);
        container.setAttribute('ctype', this.ctype);
        return container;
    },
    /**
     * Parse XML to restore the array inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function (xmlElement) {
        this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
        this.ctype = xmlElement.getAttribute('ctype');
        console.log(`this.ctype ${this.ctype}`);
        this.updateShape_();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function (workspace) {
        let containerBlock = workspace.newBlock('arrays_create_with_container');
        containerBlock.initSvg();
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.itemCount_; i++) {
            let itemBlock = workspace.newBlock('arrays_create_with_item');
            itemBlock.initSvg();
            connection.connect(itemBlock.previousConnection);
            connection = itemBlock.nextConnection;
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function (containerBlock) {
        let itemBlock = containerBlock.getInputTargetBlock('STACK');
        // Count number of inputs.
        let connections = [];
        while (itemBlock) {
            connections.push(itemBlock.valueConnection_);
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
        // Disconnect any children that don't belong.
        for (let i = 0; i < this.itemCount_; i++) {
            let connection = this.getInput('ADD' + i).connection.targetConnection;
            if (connection && connections.indexOf(connection) == -1) {
                connection.disconnect();
            }
        }
        this.itemCount_ = connections.length;
        this.updateShape_();
        // Reconnect any child blocks.
        for (let i = 0; i < this.itemCount_; i++) {
            Blockly.Mutator.reconnect(connections[i], this, 'ADD' + i);
        }
    },
    onchange: function (changeEvent) {
        if (changeEvent.type != Blockly.Events.CHANGE) {
            return;
        }

        //Type has changed update the check
        if (this.workspace.getBlockById(changeEvent.blockId) != this) {
            return;
        }

        if (changeEvent.element == 'field' && changeEvent.name == 'TYPE') {
            this.ctype = changeEvent.newValue;
            if (changeEvent.newValue == 'INTEGER') {
                this.setOutput(true, 'ArrayINT');
            } else if (changeEvent.newValue == 'FLOAT') {
                this.setOutput(true, 'ArrayFLOAT');
            } else if (changeEvent.newValue == 'BOOLEAN') {
                this.setOutput(true, 'ArrayBOOL');
            } else if (changeEvent.newValue == 'STRING') {
                this.setOutput(true, 'ArraySTRING');
            }

            let i = 0;
            let input;
            while (input = this.getInput('ADD' + i)) {
                if (this.ctype == 'INTEGER') {
                    input.setCheck('Number');
                } else if (this.ctype == 'FLOAT') {
                    input.setCheck('Number');
                } else if (this.ctype == 'BOOLEAN') {
                    input.setCheck('Boolean');
                } else if (this.ctype == 'STRING') {
                    input.setCheck('String');
                }
                i++;
            }
        }
    },
    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections: function (containerBlock) {
        let itemBlock = containerBlock.getInputTargetBlock('STACK');
        let i = 0;
        while (itemBlock) {
            let input = this.getInput('ADD' + i);
            itemBlock.valueConnection_ = input && input.connection.targetConnection;
            i++;
            itemBlock = itemBlock.nextConnection &&
                itemBlock.nextConnection.targetBlock();
        }
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @private
     * @this Blockly.Block
     */
    updateShape_: function () {
        // this.appendDummyInput('TYPEDROP')
        //     .appendField(new Blockly.FieldDropdown([["integer", "INTEGER"], ["float", "FLOAT"], ["boolean", "BOOLEAN"], ["char", "CHARACTER"], ["string", "STRING"]]), "TYPE");
        if (this.itemCount_ && this.getInput('EMPTY')) {
            this.removeInput('EMPTY');
        } else if (!this.itemCount_ && !this.getInput('EMPTY')) {
            this.appendDummyInput('EMPTY')
                .appendField('Create Empty Array')
                .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TYPE_INT, "INTEGER"], [Blockly.Msg.TYPE_FLOAT, "FLOAT"], [Blockly.Msg.TYPE_BOOL, "BOOLEAN"], [Blockly.Msg.TYPE_CHAR, "CHARACTER"], [Blockly.Msg.TYPE_STRING, "STRING"]]), "TYPE");
        }

        // Add new inputs.
        if (this.ctype == 'INTEGER') {
            this.setOutput(true, 'ArrayINT');
        } else if (this.ctype == 'FLOAT') {
            this.setOutput(true, 'ArrayFLOAT');
        } else if (this.ctype == 'BOOLEAN') {
            this.setOutput(true, 'ArrayBOOL');
        } else if (this.ctype == 'STRING') {
            this.setOutput(true, 'ArraySTRING');
        }

        for (var i = 0; i < this.itemCount_; i++) {
            if (!this.getInput('ADD' + i)) {
                const input = this.appendValueInput('ADD' + i);
                if (this.ctype == 'INTEGER') {
                    input.setCheck('Number');
                } else if (this.ctype == 'FLOAT') {
                    input.setCheck('Number');
                } else if (this.ctype == 'BOOLEAN') {
                    input.setCheck('Boolean');
                } else if (this.ctype == 'STRING') {
                    input.setCheck('String');
                }
                if (i == 0) {
                    input.appendField(Blockly.Msg.TYPED_ARRAYS_CREATE_WITH_FIELD_1);
                    input.appendField(new Blockly.FieldDropdown([[Blockly.Msg.TYPE_INT, "INTEGER"], [Blockly.Msg.TYPE_FLOAT, "FLOAT"], [Blockly.Msg.TYPE_BOOL, "BOOLEAN"], [Blockly.Msg.TYPE_CHAR, "CHARACTER"], [Blockly.Msg.TYPE_STRING, "STRING"]]), "TYPE");
                    input.appendField(Blockly.Msg.TYPED_ARRAYS_CREATE_WITH_FIELD_2);
                }
            } else {
                const input = this.getInput(`ADD${i}`);
                if (this.ctype == 'INTEGER') {
                    input.setCheck('Number');
                } else if (this.ctype == 'FLOAT') {
                    input.setCheck('Number');
                } else if (this.ctype == 'BOOLEAN') {
                    input.setCheck('Boolean');
                } else if (this.ctype == 'STRING') {
                    input.setCheck('String');
                }
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ADD' + i)) {
            this.removeInput('ADD' + i);
            i++;
        }
    }
};

Blockly.Blocks['arrays_create_with_container'] = {
    /**
     * Mutator block for list container.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(Blockly.Blocks.lists.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['arrays_create_with_item'] = {
    /**
     * Mutator bolck for adding items.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(Blockly.Blocks.lists.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['typed_arrays_setIndex'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.TYPED_ARRAYS_SETINDEX_FIELD_1)
            .appendField(new Blockly.FieldVariable('array'), "ARRAY");
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField(Blockly.Msg.TYPED_ARRAYS_SETINDEX_FIELD_2);
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField(Blockly.Msg.TYPED_ARRAYS_SETINDEX_FIELD_3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.TYPED_ARRAYS_SETINDEX_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TYPED_ARRAYS_SETINDEX_HELP_URL);
    },

    onchange: function (changeEvent) {
        if (changeEvent.type != Blockly.Events.CHANGE) {
            return;
        }

        //Type has changed update the check
        if (this.workspace.getBlockById(changeEvent.blockId) != this) {
            return;
        }

        if (changeEvent.element == 'field' && changeEvent.name == 'ARRAY') {
            const varType = this.workspace.getVariableTypeExcludeId(changeEvent.newValue, changeEvent.blockId);
            if (!varType.startsWith('Array')) {
                this.setWarningText(Blockly.Msg.TYPED_ARRAYS_NOT_ARRAY_WARNING.replace('%1', changeEvent.newValue));
            } else {
                this.setWarningText(null);
            }
        }
    }
};

Blockly.Blocks['typed_arrays_getIndex'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.TYPED_ARRAYS_GETINDEX_FIELD_1)
            .appendField(new Blockly.FieldVariable('array'), "ARRAY");
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField(Blockly.Msg.TYPED_ARRAYS_GETINDEX_FIELD_2);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.TYPED_ARRAYS_GETINDEX_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TYPED_ARRAYS_GETINDEX_HELP_URL);
    },

    onchange: function (changeEvent) {
        if (changeEvent.type != Blockly.Events.CHANGE) {
            return;
        }

        //Type has changed update the check
        if (this.workspace.getBlockById(changeEvent.blockId) != this) {
            return;
        }

        if (changeEvent.element == 'field' && changeEvent.name == 'ARRAY') {
            const varType = this.workspace.getVariableTypeExcludeId(changeEvent.newValue, changeEvent.blockId);
            if (!varType.startsWith('Array')) {
                this.setWarningText(Blockly.Msg.TYPED_ARRAYS_NOT_ARRAY_WARNING.replace('%1', changeEvent.newValue));
            } else {
                this.setWarningText(null);
            }
        }
    }
};

Blockly.Blocks['typed_arrays_delete'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.TYPED_ARRAYS_DELETE_TITLE)
            .appendField(new Blockly.FieldVariable('array'), "ARRAY");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip(Blockly.Msg.TYPED_ARRAYS_DELETE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.TYPED_ARRAYS_DELETE_HELP_URL);
    },
    onchange: function (changeEvent) {
        if (changeEvent.type != Blockly.Events.CHANGE) {
            return;
        }

        //Type has changed update the check
        if (this.workspace.getBlockById(changeEvent.blockId) != this) {
            return;
        }

        if (changeEvent.element == 'field' && changeEvent.name == 'ARRAY') {
            const varType = this.workspace.getVariableTypeExcludeId(changeEvent.newValue, changeEvent.blockId);
            if (!varType.startsWith('Array')) {
                this.setWarningText(Blockly.Msg.TYPED_ARRAYS_NOT_ARRAY_WARNING.replace('%1', changeEvent.newValue));
            } else {
                this.setWarningText(null);
            }
        }
    }
};
