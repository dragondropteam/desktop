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
 * @fileoverview Procedure blocks for Blockly.
 * @author fraser@google.com (Neil Fraser)
 */

/**
 * File modified by DigiPen Institute of Technology modifications copyright DigiPen Institute of Technology
 * - Added a procedures_return block to allow a return from any point in the application without resorting using
 *   procedure_ifreturn and passing in true
 * @author luke.powell@digipen.edu (Luke Powell)
 */
'use strict';

/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.procedures.HUE = "#AA3A69";

Blockly.Blocks['procedures_defnoreturn_icon'] = {
    /**
     * Block for defining a procedure with no return value.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'functions.png'), ICON_SIZE, ICON_SIZE));
        var nameField = new Blockly.FieldTextInput(
            Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,
            Blockly.Procedures.rename);
        nameField.setSpellcheck(false);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE)
            .appendField(nameField, 'NAME')
            .appendField('', 'PARAMS');
        this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
        if (Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT) {
            this.setCommentText(Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT);
        }
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
        this.arguments_ = [];
        this.setStatements_(true);
        this.statementConnection_ = null;
    },
    /**
     * Add or remove the statement block from this function definition.
     * @param {boolean} hasStatements True if a statement block is needed.
     * @this Blockly.Block
     */
    setStatements_: function (hasStatements) {
        if (this.hasStatements_ === hasStatements) {
            return;
        }
        if (hasStatements) {
            this.appendStatementInput('STACK')
                .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_DO);
            if (this.getInput('RETURN')) {
                this.moveInputBefore('STACK', 'RETURN');
            }
        } else {
            this.removeInput('STACK', true);
        }
        this.hasStatements_ = hasStatements;
    },
    /**
     * Update the display of parameters for this procedure definition block.
     * Display a warning if there are duplicately named parameters.
     * @private
     * @this Blockly.Block
     */
    updateParams_: function () {
        // Check for duplicated arguments.
        var badArg = false;
        var hash = {};
        for (var i = 0; i < this.arguments_.length; i++) {
            if (hash['arg_' + this.arguments_[i].toLowerCase()]) {
                badArg = true;
                break;
            }
            hash['arg_' + this.arguments_[i].toLowerCase()] = true;
        }
        if (badArg) {
            this.setWarningText(Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING);
        } else {
            this.setWarningText(null);
        }
        // Merge the arguments into a human-readable list.
        var paramString = '';
        if (this.arguments_.length) {
            paramString = Blockly.Msg.PROCEDURES_BEFORE_PARAMS +
                ' ' + this.arguments_.join(', ');
        }
        // The params field is deterministic based on the mutation,
        // no need to fire a change event.
        Blockly.Events.disable();
        try {
            this.setFieldValue(paramString, 'PARAMS');
        } finally {
            Blockly.Events.enable();
        }
    },
    /**
     * Create XML to represent the argument inputs.
     * @param {boolean} opt_paramIds If true include the IDs of the parameter
     *     quarks.  Used by Blockly.Procedures.mutateCallers for reconnection.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function (opt_paramIds) {
        var container = document.createElement('mutation');
        if (opt_paramIds) {
            container.setAttribute('name', this.getFieldValue('NAME'));
        }
        for (var i = 0; i < this.arguments_.length; i++) {
            var parameter = document.createElement('arg');
            parameter.setAttribute('name', this.arguments_[i]);
            if (opt_paramIds && this.paramIds_) {
                parameter.setAttribute('paramId', this.paramIds_[i]);
            }
            container.appendChild(parameter);
        }

        // Save whether the statement input is visible.
        if (!this.hasStatements_) {
            container.setAttribute('statements', 'false');
        }
        return container;
    },
    /**
     * Parse XML to restore the argument inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function (xmlElement) {
        this.arguments_ = [];
        for (var i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
            if (childNode.nodeName.toLowerCase() == 'arg') {
                this.arguments_.push(childNode.getAttribute('name'));
            }
        }
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this);

        // Show or hide the statement input.
        this.setStatements_(xmlElement.getAttribute('statements') !== 'false');
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('procedures_mutatorcontainer');
        containerBlock.initSvg();

        // Check/uncheck the allow statement box.
        if (this.getInput('RETURN')) {
            containerBlock.setFieldValue(this.hasStatements_ ? 'TRUE' : 'FALSE',
                'STATEMENTS');
        } else {
            containerBlock.getInput('STATEMENT_INPUT').setVisible(false);
        }

        // Parameter list.
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 0; i < this.arguments_.length; i++) {
            var paramBlock = workspace.newBlock('procedures_mutatorarg');
            paramBlock.initSvg();
            paramBlock.setFieldValue(this.arguments_[i], 'NAME');
            // Store the old location.
            paramBlock.oldLocation = i;
            connection.connect(paramBlock.previousConnection);
            connection = paramBlock.nextConnection;
        }
        // Initialize procedure's callers with blank IDs.
        Blockly.Procedures.mutateCallers(this);
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function (containerBlock) {
        // Parameter list.
        this.arguments_ = [];
        this.paramIds_ = [];
        var paramBlock = containerBlock.getInputTargetBlock('STACK');
        while (paramBlock) {
            this.arguments_.push(paramBlock.getFieldValue('NAME'));
            this.paramIds_.push(paramBlock.id);
            paramBlock = paramBlock.nextConnection &&
                paramBlock.nextConnection.targetBlock();
        }
        this.updateParams_();
        Blockly.Procedures.mutateCallers(this);

        // Show/hide the statement input.
        var hasStatements = containerBlock.getFieldValue('STATEMENTS');
        if (hasStatements !== null) {
            hasStatements = hasStatements == 'TRUE';
            if (this.hasStatements_ != hasStatements) {
                if (hasStatements) {
                    this.setStatements_(true);
                    // Restore the stack, if one was saved.
                    Blockly.Mutator.reconnect(this.statementConnection_, this, 'STACK');
                    this.statementConnection_ = null;
                } else {
                    // Save the stack, then disconnect it.
                    var stackConnection = this.getInput('STACK').connection;
                    this.statementConnection_ = stackConnection.targetConnection;
                    if (this.statementConnection_) {
                        var stackBlock = stackConnection.targetBlock();
                        stackBlock.unplug();
                        stackBlock.bumpNeighbours_();
                    }
                    this.setStatements_(false);
                }
            }
        }
    },
    /**
     * Return the signature of this procedure definition.
     * @return {!Array} Tuple containing three elements:
     *     - the name of the defined procedure,
     *     - a list of all its arguments,
     *     - that it DOES NOT have a return value.
     * @this Blockly.Block
     */
    getProcedureDef: function () {
        return [this.getFieldValue('NAME'), this.arguments_, false];
    },
    /**
     * Return all variables referenced by this block.
     * @return {!Array.<string>} List of variable names.
     * @this Blockly.Block
     */
    getVars: function () {
        return this.arguments_;
    },
    /**
     * Notification that a variable is renaming.
     * If the name matches one of this block's variables, rename it.
     * @param {string} oldName Previous name of variable.
     * @param {string} newName Renamed variable.
     * @this Blockly.Block
     */
    renameVar: function (oldName, newName) {
        var change = false;
        for (var i = 0; i < this.arguments_.length; i++) {
            if (Blockly.Names.equals(oldName, this.arguments_[i])) {
                this.arguments_[i] = newName;
                change = true;
            }
        }
        if (change) {
            this.updateParams_();
            // Update the mutator's variables if the mutator is open.
            if (this.mutator.isVisible()) {
                var blocks = this.mutator.workspace_.getAllBlocks();
                for (var i = 0, block; block = blocks[i]; i++) {
                    if (block.type == 'procedures_mutatorarg' &&
                        Blockly.Names.equals(oldName, block.getFieldValue('NAME'))) {
                        block.setFieldValue(newName, 'NAME');
                    }
                }
            }
        }
    },
    /**
     * Add custom menu options to this block's context menu.
     * @param {!Array} options List of menu options to add to.
     * @this Blockly.Block
     */
    customContextMenu: function (options) {
        // Add option to create caller.
        var option = {enabled: true};
        var name = this.getFieldValue('NAME');
        option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace('%1', name);
        var xmlMutation = goog.dom.createDom('mutation');
        xmlMutation.setAttribute('name', name);
        for (var i = 0; i < this.arguments_.length; i++) {
            var xmlArg = goog.dom.createDom('arg');
            xmlArg.setAttribute('name', this.arguments_[i]);
            xmlMutation.appendChild(xmlArg);
        }
        var xmlBlock = goog.dom.createDom('block', null, xmlMutation);
        xmlBlock.setAttribute('type', this.callType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);

        // Add options to create getters for each parameter.
        if (!this.isCollapsed()) {
            for (var i = 0; i < this.arguments_.length; i++) {
                var option = {enabled: true};
                var name = this.arguments_[i];
                option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
                var xmlField = goog.dom.createDom('field', null, name);
                xmlField.setAttribute('name', 'VAR');
                var xmlBlock = goog.dom.createDom('block', null, xmlField);
                xmlBlock.setAttribute('type', 'variables_get');
                option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
                options.push(option);
            }
        }
    },
    callType_: 'procedures_callnoreturn'
};

Blockly.Blocks['procedures_defreturn_icon'] = {
    /**
     * Block for defining a procedure with a return value.
     * @this Blockly.Block
     */
    init: function () {
        var nameField = new Blockly.FieldTextInput(
            Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE,
            Blockly.Procedures.rename);
        nameField.setSpellcheck(false);
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage(path_.join(iconsPath, 'functions.png'), ICON_SIZE, ICON_SIZE));
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
            .appendField(nameField, 'NAME')
            .appendField('', 'PARAMS');
        this.appendValueInput('RETURN')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
        this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
        if (Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT) {
            this.setCommentText(Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT);
        }
        this.setColour(Blockly.Blocks.procedures.HUE);
        this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
        this.setInputsInline(true);
        this.arguments_ = [];
        this.setStatements_(true);
        this.statementConnection_ = null;
    },
    setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,
    updateParams_: Blockly.Blocks['procedures_defnoreturn'].updateParams_,
    mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
    domToMutation: Blockly.Blocks['procedures_defnoreturn'].domToMutation,
    decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
    compose: Blockly.Blocks['procedures_defnoreturn'].compose,
    /**
     * Return the signature of this procedure definition.
     * @return {!Array} Tuple containing three elements:
     *     - the name of the defined procedure,
     *     - a list of all its arguments,
     *     - that it DOES have a return value.
     * @this Blockly.Block
     */
    getProcedureDef: function () {
        return [this.getFieldValue('NAME'), this.arguments_, true];
    },
    getVars: Blockly.Blocks['procedures_defnoreturn'].getVars,
    renameVar: Blockly.Blocks['procedures_defnoreturn'].renameVar,
    customContextMenu: Blockly.Blocks['procedures_defnoreturn'].customContextMenu,
    callType_: 'procedures_callreturn'
};

//Override the defType for both means to call a procedure to reference our icon based definitions
Blockly.Blocks['procedures_callnoreturn'].defType_ = 'procedures_defnoreturn_icon';
Blockly.Blocks['procedures_callreturn'].defType_ = 'procedures_defreturn_icon';

//Add in our custom definitions to ifreturn and return to ensure that those blocks show up as valid children
Blockly.Blocks['procedures_ifreturn'].FUNCTION_TYPES.push('procedures_defreturn_icon');
Blockly.Blocks['procedures_ifreturn'].FUNCTION_TYPES.push('procedures_defnoreturn_icon');
Blockly.Blocks['procedures_return'].FUNCTION_TYPES.push('procedures_defreturn_icon');
Blockly.Blocks['procedures_return'].FUNCTION_TYPES.push('procedures_defnoreturn_icon');