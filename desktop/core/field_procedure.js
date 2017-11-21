/**
 * @license
 *
 * Copyright DigiPen Institute of Technology
 */

/**
 * @fileoverview Procedure input field
 * Modified field_variable.js to work with procedures instead of variable blocks
 * @author luke.powell@digipen.edu (Luke Powell)
 */
'use strict';

goog.provide('Blockly.FieldProcedure');

goog.require('Blockly.FieldDropdown');
goog.require('Blockly.Msg');
goog.require('Blockly.Variables');
goog.require('goog.string');


/**
 * Class for a variable's dropdown field.
 * @param {?string} varname The default name for the variable.  If null,
 *     a unique variable name will be generated.
 * @param {Function=} opt_validator A function that is executed when a new
 *     option is selected.  Its sole argument is the new option value.
 * @extends {Blockly.FieldDropdown}
 * @constructor
 */
Blockly.FieldProcedure = function (varname, opt_validator) {
    Blockly.FieldProcedure.superClass_.constructor.call(this,
        Blockly.FieldProcedure.dropdownCreate, opt_validator);
    this.setValue(varname || '');
};
goog.inherits(Blockly.FieldProcedure, Blockly.FieldDropdown);

/**
 * Install this dropdown on a block.
 */
Blockly.FieldProcedure.prototype.init = function () {
    if (this.fieldGroup_) {
        // Dropdown has already been initialized once.
        return;
    }
    Blockly.FieldProcedure.superClass_.init.call(this);
    if (!this.getValue()) {
        // Variables without names get uniquely named for this workspace.
        var workspace =
            this.sourceBlock_.isInFlyout ?
                this.sourceBlock_.workspace.targetWorkspace :
                this.sourceBlock_.workspace;
        this.setValue(Blockly.Variables.generateUniqueName(workspace));
    }
};

/**
 * Get the variable's name (use a variableDB to convert into a real name).
 * Unline a regular dropdown, variables are literal and have no neutral value.
 * @return {string} Current text.
 */
Blockly.FieldProcedure.prototype.getValue = function () {
    return this.getText();
};

/**
 * Set the variable name.
 * @param {string} newValue New text.
 */
Blockly.FieldProcedure.prototype.setValue = function (newValue) {
    if (this.sourceBlock_ && Blockly.Events.isEnabled()) {
        Blockly.Events.fire(new Blockly.Events.Change(
            this.sourceBlock_, 'field', this.name, this.value_, newValue));
    }
    this.value_ = newValue;
    this.setText(newValue);
};

/**
 * Return a sorted list of variable names for variable dropdown menus.
 * Include a special option at the end for creating a new variable name.
 * @return {!Array.<string>} Array of variable names.
 * @this {!Blockly.FieldProcedure}
 */
Blockly.FieldProcedure.dropdownCreate = function () {
    let procedureList = [];
    if (this.sourceBlock_ && this.sourceBlock_.workspace) {
        procedureList = this.sourceBlock_.workspace.getAllProcedures();
    }

    // Ensure that the currently selected variable is an option.
    let name = this.getText() || ' ';
    if (name && procedureList.indexOf(name) == -1) {
        procedureList.push(name);
    }
    procedureList.sort(goog.string.caseInsensitiveCompare);
    // procedureList.push(Blockly.Msg.RENAME_VARIABLE);
    // procedureList.push(Blockly.Msg.DELETE_VARIABLE.replace('%1', name));
    // Variables are not language-specific, use the name as both the user-facing
    // text and the internal representation.
    let options = [];
    for (let i = 0; i < procedureList.length; i++) {
        options[i] = [procedureList[i], procedureList[i]];
    }
    return options;
};
