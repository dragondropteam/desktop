/**
 * Created by lukepowell on 3/28/17.
 *
 * See procedures for were the base of this file game from
 *
 * @author luke.powell@digipen.edu (Luke Powell
 * @fileoverview Block definitions to allow object oriented programming
 *
 */
const CLASS_COLOUR = 230;
const CALL_IN_CLASS_MSG = 'in %1 instance';

//region HELPERS
function disableIfNotInClassBlock(root) {
    //Assume that the block is illegal
    let legal = false;
    let inClass = false;

    let block = root;
    do {
        if (block.type == 'class_definition') {
            legal = true;
            inClass = true;
            break;
        }
        block = block.getSurroundParent();
    } while (block);

    if (legal) {
        //If we are coming from a illegal state we need to make sure this block is reenabled and the warning text
        //is cleared. If we are coming from a legal state this will do nothing
        root.setDisabled(false);
        root.setWarningText(null);
    } else {
        root.setDisabled(true);
        if (!inClass) {
            root.setWarningText(Blockly.Msg.INSIDE_CLASS_ONLY_WARNING);
        }
    }

    return block;
}

function getClassForBlock(root) {
    let block = root;
    do {
        if (block.type == 'class_definition') {
            return block;
        }
        block = block.getSurroundParent();
    } while (block);

    return null;
}
//endregion
//region SUPER
Blockly.Blocks['super_mutatorcontainer'] = {
    /**
     * Mutator block for procedure container.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = false;
        this.setColour(CLASS_COLOUR);
    }
};

Blockly.Blocks['super_mutatorarg'] = {
    /**
     * Mutator block for procedure argument.
     * @this Blockly.Block
     */
    init: function () {
        let field = new Blockly.FieldTextInput('x', this.validator_);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE)
            .appendField(field, 'NAME');
        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = false;

        // Create the default variable when we drag the block in from the flyout.
        // Have to do this after installing the field on the block.
        field.onFinishEditing_ = this.createNewVar_;
        field.onFinishEditing_('x');
        this.setColour(CLASS_COLOUR);
    },
    /**
     * Obtain a valid name for the procedure.
     * Merge runs of whitespace.  Strip leading and trailing whitespace.
     * Beyond this, all names are legal.
     * @param {string} newVar User-supplied name.
     * @return {?string} Valid name, or null if a name was not specified.
     * @private
     * @this Blockly.Block
     */
    validator_: function (newVar) {
        newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
        return newVar || null;
    },
    /**
     * Called when focusing away from the text field.
     * Creates a new variable with this name.
     * @param {string} newText The new variable name.
     * @private
     * @this Blockly.FieldTextInput
     */
    createNewVar_: function (newText) {
        let source = this.sourceBlock_;
        if (source && source.workspace && source.workspace.options
            && source.workspace.options.parentWorkspace) {
            source.workspace.options.parentWorkspace.createVariable(newText);
        }
    }
};

//Blockly.Msg.CLASSES_SUPER_CONSTRUCTOR_TITLE
Blockly.Blocks['super_constructor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('call super constructor');
        this.setPreviousStatement(true, ["CALL_SUPER"], true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(['super_mutatorarg']));
        this.arguments_ = [];
        this.setColour(CLASS_COLOUR);
    },

    getClassDef: function () {
        return this.getFieldValue('NAME');
    },
    /**
     * Create XML to represent the argument inputs.
     * @param {=boolean} opt_paramIds If true include the IDs of the parameter
     *     quarks.  Used by DragonDrop.Classes.mutateCallers for reconnection.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function (opt_paramIds) {
        let container = document.createElement('mutation');
        if (opt_paramIds) {
            container.setAttribute('name', this.getFieldValue('NAME'));
        }
        for (let i = 0; i < this.arguments_.length; i++) {
            let parameter = document.createElement('arg');
            parameter.setAttribute('name', this.arguments_[i]);
            if (opt_paramIds && this.paramIds_) {
                parameter.setAttribute('paramId', this.paramIds_[i]);
            }
            container.appendChild(parameter);
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
        for (let i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
            if (childNode.nodeName.toLowerCase() == 'arg') {
                this.arguments_.push(childNode.getAttribute('name'));
            }
        }
        this.updateParams_();
        this.updateShape();
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function (workspace) {
        let containerBlock = workspace.newBlock('class_mutatorcontainer');
        containerBlock.initSvg();

        // Parameter list.
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.arguments_.length; i++) {
            let paramBlock = workspace.newBlock('class_mutatorarg');
            paramBlock.initSvg();
            paramBlock.setFieldValue(this.arguments_[i], 'NAME');
            // Store the old location.
            paramBlock.oldLocation = i;
            connection.connect(paramBlock.previousConnection);
            connection = paramBlock.nextConnection;
        }

        return containerBlock;
    },
    updateShape: function () {
        let i;
        for (i = 0; i < this.arguments_.length; i++) {
            let field = this.getField('ARGNAME' + i);
            if (field) {
                // Ensure argument name is up to date.
                // The argument name field is deterministic based on the mutation,
                // no need to fire a change event.
                Blockly.Events.disable();
                try {
                    field.setValue(this.arguments_[i]);
                } finally {
                    Blockly.Events.enable();
                }
            } else {
                // Add new input.
                field = new Blockly.FieldLabel(this.arguments_[i]);
                let input = this.appendValueInput('ARG' + i)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(field, 'ARGNAME' + i);
                input.init();
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ARG' + i)) {
            this.removeInput('ARG' + i);
            i++;
        }
    }, /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function (containerBlock) {
        // Parameter list.
        this.arguments_ = [];
        this.paramIds_ = [];
        let paramBlock = containerBlock.getInputTargetBlock('STACK');
        while (paramBlock) {
            this.arguments_.push(paramBlock.getFieldValue('NAME'));
            this.paramIds_.push(paramBlock.id);
            paramBlock = paramBlock.nextConnection &&
                paramBlock.nextConnection.targetBlock();
        }
        this.updateShape();
    },
    /**
     * Update the display of parameters for this procedure definition block.
     * Display a warning if there are duplicately named parameters.
     * @private
     * @this Blockly.Block
     */
    updateParams_: function () {
        // Check for duplicated arguments.
        let badArg = false;
        let hash = {};
        for (let i = 0; i < this.arguments_.length; i++) {
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

        //unlike with constructors, methods, and procedures this block will end up with the parameters
    },
    onchange: function (event) {
        if (!this.workspace || this.isInFlyout) {
            return;
        }

        disableIfNotInClassBlock(this);
    }
};
//endregion

//region CLASS
Blockly.Blocks['class_definition'] = {
    init: function () {
        this.appendValueInput("extends")
            .setCheck(null)
            .appendField(Blockly.Msg.CLASS_DEFINITION_CLASS)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.CLASS_DEFINITION_DEFAULT_NAME, DragonDrop.Classes.rename), "NAME")
            .appendField(Blockly.Msg.CLASS_DEFINITION_EXTENDS);
        this.appendStatementInput("METHODS")
            .setCheck("METHOD_DEFINITION", true)
            .appendField(Blockly.Msg.CLASS_DEFINITION_METHODS);
        this.appendStatementInput("CONSTRUCTOR")
            .setCheck(["MEMBER_DEFINITION", "CALL_SUPER"])
            .appendField(Blockly.Msg.CLASS_DEFINITION_CONSTRUCT, "CONSTRUCTOR");
        this.setInputsInline(false);
        this.setColour(CLASS_COLOUR);
        this.setTooltip(Blockly.Msg.CLASS_DEFINITION_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CLASS_DEFINITION_HELP_URL);
        this.setMutator(new Blockly.Mutator(['class_mutatorarg']));
        this.arguments_ = [];
    },
    getClassDef: function () {
        return this.getFieldValue('NAME');
    },
    getConstructorDef: function () {
        return [this.getFieldValue('NAME'), this.arguments_];
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
     * Create XML to represent the argument inputs.
     * @param {=boolean} opt_paramIds If true include the IDs of the parameter
     *     quarks.  Used by DragonDrop.Classes.mutateCallers for reconnection.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function (opt_paramIds) {
        let container = document.createElement('mutation');
        if (opt_paramIds) {
            container.setAttribute('name', this.getFieldValue('NAME'));
        }
        for (let i = 0; i < this.arguments_.length; i++) {
            let parameter = document.createElement('arg');
            parameter.setAttribute('name', this.arguments_[i]);
            if (opt_paramIds && this.paramIds_) {
                parameter.setAttribute('paramId', this.paramIds_[i]);
            }
            container.appendChild(parameter);
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
        for (let i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
            if (childNode.nodeName.toLowerCase() == 'arg') {
                this.arguments_.push(childNode.getAttribute('name'));
            }
        }
        this.updateParams_();
        DragonDrop.Classes.mutateConstructors(this);
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function (workspace) {
        let containerBlock = workspace.newBlock('class_mutatorcontainer');
        containerBlock.initSvg();

        // Parameter list.
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.arguments_.length; i++) {
            let paramBlock = workspace.newBlock('class_mutatorarg');
            paramBlock.initSvg();
            paramBlock.setFieldValue(this.arguments_[i], 'NAME');
            // Store the old location.
            paramBlock.oldLocation = i;
            connection.connect(paramBlock.previousConnection);
            connection = paramBlock.nextConnection;
        }

        // Initialize procedure's callers with blank IDs.
        DragonDrop.Classes.mutateConstructors(this);
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
        let paramBlock = containerBlock.getInputTargetBlock('STACK');
        while (paramBlock) {
            this.arguments_.push(paramBlock.getFieldValue('NAME'));
            this.paramIds_.push(paramBlock.id);
            paramBlock = paramBlock.nextConnection &&
                paramBlock.nextConnection.targetBlock();
        }
        this.updateParams_();
        DragonDrop.Classes.mutateConstructors(this);
    },
    /**
     * Update the display of parameters for this procedure definition block.
     * Display a warning if there are duplicate named parameters.
     * @private
     * @this Blockly.Block
     */
    updateParams_: function () {
        // Check for duplicated arguments.
        let badArg = false;
        let hash = {};
        for (let i = 0; i < this.arguments_.length; i++) {
            if (hash['arg_' + this.arguments_[i].toLowerCase()]) {
                badArg = true;
                break;
            }
            hash['arg_' + this.arguments_[i].toLowerCase()] = true;
        }
        if (badArg) {
            this.setWarningText(Blockly.Msg.CLASS_DEFINITION_DUPLICATE_WARNING);
        } else {
            this.setWarningText(null);
        }
        // Merge the arguments into a human-readable list.
        let paramString = '';
        if (this.arguments_.length) {
            paramString = Blockly.Msg.PROCEDURES_BEFORE_PARAMS +
                ' ' + this.arguments_.join(', ');
        }
        // The params field is deterministic based on the mutation,
        // no need to fire a change event.
        Blockly.Events.disable();
        try {
            this.setFieldValue(paramString == '' ? Blockly.Msg.CLASS_DEFINITION_CONSTRUCT : Blockly.Msg.CLASS_DEFINITION_CONSTRUCT_PARAM.replace('%1', paramString), 'CONSTRUCTOR');
        } finally {
            Blockly.Events.enable();
        }
    }
};
Blockly.Blocks['class_mutatorcontainer'] = {
    /**
     * Mutator block for procedure container.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = false;
        this.setColour(CLASS_COLOUR);
    }
};
Blockly.Blocks['class_mutatorarg'] = {
    /**
     * Mutator block for procedure argument.
     * @this Blockly.Block
     */
    init: function () {
        let field = new Blockly.FieldTextInput('x', this.validator_);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE)
            .appendField(field, 'NAME');
        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = false;

        // Create the default variable when we drag the block in from the flyout.
        // Have to do this after installing the field on the block.
        field.onFinishEditing_ = this.createNewVar_;
        field.onFinishEditing_('x');
        this.setColour(CLASS_COLOUR);
    },
    /**
     * Obtain a valid name for the procedure.
     * Merge runs of whitespace.  Strip leading and trailing whitespace.
     * Beyond this, all names are legal.
     * @param {string} newVar User-supplied name.
     * @return {?string} Valid name, or null if a name was not specified.
     * @private
     * @this Blockly.Block
     */
    validator_: function (newVar) {
        newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
        return newVar || null;
    },
    /**
     * Called when focusing away from the text field.
     * Creates a new variable with this name.
     * @param {string} newText The new variable name.
     * @private
     * @this Blockly.FieldTextInput
     */
    createNewVar_: function (newText) {
        let source = this.sourceBlock_;
        if (source && source.workspace && source.workspace.options
            && source.workspace.options.parentWorkspace) {
            source.workspace.options.parentWorkspace.createVariable(newText);
        }
    }
};
//endregion


Blockly.Blocks['method_definition'] = {
    init: function () {
        this.appendStatementInput("METHOD_STATEMENTS")
            .setCheck(null)
            .appendField(Blockly.Msg.METHOD_DEFINITION_TITLE)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.METHOD_DEFINITION_DEFAULT_TEXT), "NAME");
        this.setPreviousStatement(true, ["METHOD_DEFINITION", "CLASS_DEFINITION"]);
        this.setNextStatement(true, "METHOD_DEFINITION");
        this.setColour(CLASS_COLOUR);
        this.setTooltip(Blockly.Msg.METHOD_DEFINITION_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.METHOD_DEFINITION_HELP_URL);
    },
    onchange: function (event) {
        if (!workspace || this.isInFlyout) {
            return;
        }

        disableIfNotInClassBlock(this);
    }
};

Blockly.Blocks['member_definition'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.MEMBER_DEFINITION_CREATE)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.MEMBER_DEFINITION_DEFAULT_TEXT, DragonDrop.Classes.rename), "NAME");
        this.appendValueInput("DEFAULT")
            .setCheck(null)
            .appendField(Blockly.Msg.MEMBER_DEFINITION_WITH_VALUE);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(CLASS_COLOUR);
        this.setTooltip(Blockly.Msg.MEMBER_DEFINITION_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.MEMBER_DEFINITION_HELP_URL);
    },
    onchange(){
        if (this.isInFlyout) {
            return;
        }

        let block = disableIfNotInClassBlock(this);

        if (block) {
            this.name = block.getFieldValue('NAME');
        }
    },
    mutationToDom: function () {
        let container = document.createElement('mutation');
        container.setAttribute('name', this.name);
        return container;
    },
    domToMutation: function (xmlElement) {
        this.name = xmlElement.getAttribute('name');
        // this.getField('NAME').setText(`Create ${this.name} instance`);
    }
};

Blockly.Blocks['this_reference'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.THIS_REFERENCE_THIS);
        this.setOutput(true, null);
        this.setColour(CLASS_COLOUR);
        this.setTooltip(Blockly.Msg.THIS_REFERENCE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.THIS_REFERENCE_HELP_URL);
    }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.get_member_this.init, onchange: Blockly.Blocks.get_member_this.onchange}}
 */
Blockly.Blocks['get_member_this'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("get this.")
            .appendField(new Blockly.FieldDropdown([["option", "OPTIONNAME"], ["option", "OPTIONNAME"], ["option", "OPTIONNAME"]]), "MEMBERS");
        this.setOutput(true, null);
        this.setColour(CLASS_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    },
    onchange: function () {
        //There is no need to run this logic if this is simply a block in the flyout
        if (this.isInFlyout) {
            return;
        }


        //Assume that the block is illegal
        let legal = false;
        let hasMembers = true;
        let inClass = false;

        //This block can only exist if a parent is a class_definition
        let block = this;
        do {
            if (block.type == 'class_definition') {
                legal = true;
                inClass = true;
                break;
            }
            block = block.getSurroundParent();
        } while (block);

        console.log('||START||');
        let members;
        if (block) {
            members = block.getInput('MEMBERS');

            if (!members) {
                hasMembers = false;
                legal = false;
            }

            let memberNames = [];

            let nextConnection = members.connection.targetConnection;
            do {
                let name = nextConnection.getSourceBlock().getField('NAME');
                console.log(name);
                nextConnection = nextConnection.nextConnection;
            } while (nextConnection);
        }
        console.log('||END||');

        if (legal) {
            console.log(members);

            //If we are coming from a illegal state we need to make sure this block is reenabled and the warning text
            //is cleared. If we are coming from a legal state this will do nothing
            this.setDisabled(false);
            this.setWarningText(null);
        } else {
            this.setDisabled(true);
            if (!inClass) {
                this.setWarningText('This block can only be used inside of a class!');
            } else if (!hasMembers) {
                this.setWarningText('This block can only be used inside of a class with members!');
            }
        }
    }
};

Blockly.Blocks['class_type'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("", "NAME");
        this.setOutput(true, "Class");
        this.setColour(CLASS_COLOUR);
        this.setTooltip(Blockly.Msg.CLASS_TYPE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CLASS_TYPE_HELP_URL);
    },
    mutationToDom: function () {
        let container = document.createElement('mutation');
        container.setAttribute('name', this.name);
        return container;
    },
    domToMutation: function (xmlElement) {
        this.name = xmlElement.getAttribute('name');
        this.updateClassName();
    },
    updateClassName: function () {
        this.getField('NAME').setText(this.name);
    },
    renameClass: function (oldName, legalName) {
        if (Blockly.Names.equals(oldName, this.name)) {
            this.name = legalName;
            this.updateClassName();
        }
    },
};

Blockly.Blocks['get_member_in_class'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_MEMBER_IN_CLASS_INSTANCE_NAME.replace('%1', Blockly.Msg.GET_MEMBER_IN_CLASS_INSTANCE_NAME_DEFAULT), 'INSTANCE_NAME');
        this.appendValueInput('INSTANCE')
            .setCheck('Class');
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_MEMBER_IN_CLASS_GET_VALUE, 'MEMBER_NAME');
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(CLASS_COLOUR);
        this.setTooltip(Blockly.Msg.GET_MEMBER_IN_CLASS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_MEMBER_IN_CLASS_HELP_URL);
    },
    mutationToDom: function () {
        let container = document.createElement('mutation');
        container.setAttribute('name', this.name);
        container.setAttribute('member_name', this.memberName);
        return container;
    },
    domToMutation: function (xmlElement) {
        this.name = xmlElement.getAttribute('name');
        this.memberName = xmlElement.getAttribute('member_name');
        this.updateClassName();
        this.updateMemberName();
    },
    updateClassName: function () {
        this.getField('INSTANCE_NAME').setText(Blockly.Msg.GET_MEMBER_IN_CLASS_INSTANCE_NAME.replace('%1', this.name));
    },
    renameClass: function (oldName, legalName) {
        if (Blockly.Names.equals(oldName, this.name)) {
            this.name = legalName;
            this.updateClassName();
        }
    },
    updateMemberName: function () {
        this.getField('MEMBER_NAME').setText(Blockly.Msg.GET_MEMBER_IN_CLASS_GET_MEMBER_NAME.replace('%1', this.memberName));
    },
    renameMember: function (oldName, legalName) {
        if (Blockly.Names.equals(oldName, this.memberName)) {
            this.memberName = legalName;
            this.updateMemberName();
        }
    },
    customContextMenu: function (options) {
        //This will allow us to create a set from this get
        let option = {enabled: true};
        let xmlMutation = goog.dom.createDom('mutation');
        xmlMutation.setAttribute('name', this.name);
        xmlMutation.setAttribute('member_name', this.memberName);
        let xmlBlock = goog.dom.createDom('block', null, xmlMutation);
        xmlBlock.setAttribute('type', 'set_member_in_class');
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        option.text = Blockly.Msg.CLASS_CONTEXT_CREATE_MEMBER_SETTER.replace('%1', this.name).replace('%2', this.memberName);
        options.push(option);

        //Add in a quick means to get a this reference
        option = {enabled: true}
        xmlBlock = goog.dom.createDom('block');
        xmlBlock.setAttribute('type', 'this_reference');
        option.text = Blockly.Msg.CLASS_CONTEXT_CREATE_THIS;
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
    }
};

Blockly.Blocks['set_member_in_class'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_MEMBER_IN_CLASS_IN_INSTANCE.replace('%1', Blockly.Msg.SET_MEMBER_IN_CLASS_INSTANCE_DEFAULT), 'INSTANCE_NAME');
        this.appendValueInput("INSTANCE")
            .setCheck(null);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_MEMBER_IN_CLASS_MEMBER_NAME_DEFUALT, 'MEMBER_NAME');
        this.appendValueInput("VALUE")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(CLASS_COLOUR);
        this.setTooltip(Blockly.Msg.SET_MEMBER_IN_CLASS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_MEMBER_IN_CLASS_HELP_URL);
    },
    mutationToDom: function () {
        let container = document.createElement('mutation');
        container.setAttribute('name', this.name);
        container.setAttribute('member_name', this.memberName);
        return container;
    },
    domToMutation: function (xmlElement) {
        this.name = xmlElement.getAttribute('name');
        this.memberName = xmlElement.getAttribute('member_name');
        this.getField('INSTANCE_NAME').setText(Blockly.Msg.SET_MEMBER_IN_CLASS_IN_INSTANCE.replace('%1', this.name));
        this.getField('MEMBER_NAME').setText(Blockly.Msg.SET_MEMBER_IN_CLASS_SET_MEMBER_NAME.replace('%1', this.memberName));
    },
    updateClassName: function () {
        this.getField('INSTANCE_NAME').setText(Blockly.Msg.SET_MEMBER_IN_CLASS_IN_INSTANCE.replace('%1', this.name));
    },
    renameClass: function (oldName, legalName) {
        if (Blockly.Names.equals(oldName, this.name)) {
            this.name = legalName;
            this.updateClassName();
        }
    },
    updateMemberName: function () {
        this.getField('MEMBER_NAME').setText(Blockly.Msg.SET_MEMBER_IN_CLASS_GET_MEMBER_NAME.replace('%1', this.memberName));
    },
    renameMember: function (oldName, legalName) {
        if (Blockly.Names.equals(oldName, this.memberName)) {
            this.memberName = legalName;
            this.updateMemberName();
        }
    },
    customContextMenu: function (options) {
        let option = {enabled: true};
        let xmlMutation = goog.dom.createDom('mutation');
        xmlMutation.setAttribute('name', this.name);
        xmlMutation.setAttribute('member_name', this.memberName);
        let xmlBlock = goog.dom.createDom('block', null, xmlMutation);
        xmlBlock.setAttribute('type', 'get_member_in_class');
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        option.text = Blockly.Msg.CLASS_CONTEXT_CREATE_MEMBER_GETTER.replace('%1', this.name).replace('%2', this.memberName);
        options.push(option);

        //Add in a quick means to get a this reference
        option = {enabled: true}
        xmlBlock = goog.dom.createDom('block');
        xmlBlock.setAttribute('type', 'this_reference');
        option.text = Blockly.Msg.CLASS_CONTEXT_CREATE_THIS;
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);
    }
};

Blockly.Blocks['create_instance_of_class'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CREATE_INSTANCE_OF_CLASS_DEFAULT, "NAME");
        this.setOutput(true, "Class");
        this.setColour(CLASS_COLOUR);
        this.setTooltip(Blockly.Msg.CREATE_INSTANCE_OF_CLASS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CREATE_INSTANCE_OF_CLASS_HELP_URL);
        this.arguments_ = [];
    },
    /**
     * Notification that the procedure's parameters have changed.
     * @param {!Array.<string>} paramNames New param names, e.g. ['x', 'y', 'z'].
     * @param {!Array.<string>} paramIds IDs of params (consistent for each
     *     parameter through the life of a mutator, regardless of param renaming),
     *     e.g. ['piua', 'f8b_', 'oi.o'].
     * @private
     * @this Blockly.Block
     */
    setProcedureParameters_: function (paramNames, paramIds) {
        // Data structures:
        // this.arguments = ['x', 'y']
        //     Existing param names.
        // this.quarkConnections_ {piua: null, f8b_: Blockly.Connection}
        //     Look-up of paramIds to connections plugged into the call block.
        // this.quarkIds_ = ['piua', 'f8b_']
        //     Existing param IDs.
        // Note that quarkConnections_ may include IDs that no longer exist, but
        // which might reappear if a param is reattached in the mutator.
        let defBlock = DragonDrop.Classes.getDefinition(this.name,
            this.workspace);
        let mutatorOpen = defBlock && defBlock.mutator &&
            defBlock.mutator.isVisible();
        if (!mutatorOpen) {
            this.quarkConnections_ = {};
            this.quarkIds_ = null;
        }
        if (!paramIds) {
            // Reset the quarks (a mutator is about to open).
            return;
        }
        if (goog.array.equals(this.arguments_, paramNames)) {
            // No change.
            this.quarkIds_ = paramIds;
            return;
        }
        if (paramIds.length != paramNames.length) {
            throw 'Error: paramNames and paramIds must be the same length.';
        }
        this.setCollapsed(false);
        if (!this.quarkIds_) {
            // Initialize tracking for this block.
            this.quarkConnections_ = {};
            if (paramNames.join('\n') == this.arguments_.join('\n')) {
                // No change to the parameters, allow quarkConnections_ to be
                // populated with the existing connections.
                this.quarkIds_ = paramIds;
            } else {
                this.quarkIds_ = [];
            }
        }
        // Switch off rendering while the block is rebuilt.
        let savedRendered = this.rendered;
        this.rendered = false;
        // Update the quarkConnections_ with existing connections.
        for (let i = 0; i < this.arguments_.length; i++) {
            let input = this.getInput('ARG' + i);
            if (input) {
                let connection = input.connection.targetConnection;
                this.quarkConnections_[this.quarkIds_[i]] = connection;
                if (mutatorOpen && connection &&
                    paramIds.indexOf(this.quarkIds_[i]) == -1) {
                    // This connection should no longer be attached to this block.
                    connection.disconnect();
                    connection.getSourceBlock().bumpNeighbours_();
                }
            }
        }
        // Rebuild the block's arguments.
        this.arguments_ = [].concat(paramNames);
        this.updateShape_();
        this.quarkIds_ = paramIds;
        // Reconnect any child blocks.
        if (this.quarkIds_) {
            for (let i = 0; i < this.arguments_.length; i++) {
                let quarkId = this.quarkIds_[i];
                if (quarkId in this.quarkConnections_) {
                    let connection = this.quarkConnections_[quarkId];
                    if (!Blockly.Mutator.reconnect(connection, this, 'ARG' + i)) {
                        // Block no longer exists or has been attached elsewhere.
                        delete this.quarkConnections_[quarkId];
                    }
                }
            }
        }
        // Restore rendering and show the changes.
        this.rendered = savedRendered;
        if (this.rendered) {
            this.render();
        }
    },

    /**
     * Modify this block to have the correct number of arguments.
     * @private
     * @this Blockly.Block
     */
    updateShape_: function () {
        let i;
        for (i = 0; i < this.arguments_.length; i++) {
            let field = this.getField('ARGNAME' + i);
            if (field) {
                // Ensure argument name is up to date.
                // The argument name field is deterministic based on the mutation,
                // no need to fire a change event.
                Blockly.Events.disable();
                try {
                    field.setValue(this.arguments_[i]);
                } finally {
                    Blockly.Events.enable();
                }
            } else {
                // Add new input.
                field = new Blockly.FieldLabel(this.arguments_[i]);
                let input = this.appendValueInput('ARG' + i)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(field, 'ARGNAME' + i);
                input.init();
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ARG' + i)) {
            this.removeInput('ARG' + i);
            i++;
        }
        // Add 'with:' if there are parameters, remove otherwise.
        let topRow = this.getInput('TOPROW');
        if (topRow) {
            if (this.arguments_.length) {
                if (!this.getField('WITH')) {
                    topRow.appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS, 'WITH');
                    topRow.init();
                }
            } else {
                if (this.getField('WITH')) {
                    topRow.removeField('WITH');
                }
            }
        }
    },
    /**
     * Notification that a variable is renaming.
     * If the name matches one of this block's variables, rename it.
     * @param {string} oldName Previous name of variable.
     * @param {string} newName Renamed variable.
     * @this Blockly.Block
     */
    renameVar: function (oldName, newName) {
        for (let i = 0; i < this.arguments_.length; i++) {
            if (Blockly.Names.equals(oldName, this.arguments_[i])) {
                this.arguments_[i] = newName;
                this.getField('ARGNAME' + i).setValue(newName);
            }
        }
    },
    mutationToDom: function () {
        let container = document.createElement('mutation');
        container.setAttribute('name', this.name);
        for (let i = 0; i < this.arguments_.length; i++) {
            let parameter = document.createElement('arg');
            parameter.setAttribute('name', this.arguments_[i]);
            container.appendChild(parameter);
        }
        return container;
    },

    domToMutation: function (xmlElement) {
        this.name = xmlElement.getAttribute('name');
        this.getField('NAME').setText(Blockly.Msg.CREATE_INSTANCE_OF_CLASS_TITLE.replace('%1', this.name));
        let args = [];
        let paramIds = [];
        for (let i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
            if (childNode.nodeName.toLowerCase() == 'arg') {
                args.push(childNode.getAttribute('name'));
                paramIds.push(childNode.getAttribute('paramId'));
            }
        }
        this.setProcedureParameters_(args, paramIds);
    },
    renameClass: function (oldName, legalName) {
        if (Blockly.Names.equals(oldName, this.name)) {
            this.name = legalName;
            this.getField('NAME').setText(Blockly.Msg.CREATE_INSTANCE_OF_CLASS_TITLE.replace('%1', this.name));
        }
    },
    getConstructorCall: function () {
        return this.name;
    }
};

//Methods, modified code from the blocks/method.js
Blockly.Blocks['method_defnoreturn'] = {
    /**
     * Block for defining a procedure with no return value.
     * @this Blockly.Block
     */
    init: function () {
        let nameField = new Blockly.FieldTextInput(
            Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE,
            DragonDrop.Classes.rename);
        nameField.setSpellcheck(false);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE)
            .appendField(nameField, 'NAME')
            .appendField('', 'PARAMS');
        this.setMutator(new Blockly.Mutator(['method_mutatorarg']));
        if (Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT) {
            this.setCommentText(Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT);
        }

        this.setTooltip(Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFNORETURN_HELPURL);
        this.arguments_ = [];
        this.setStatements_(true);
        this.statementConnection_ = null;
        this.setPreviousStatement(true, ["METHOD_DEFINITION", "CLASS_DEFINITION"], true);
        this.setNextStatement(true, 'METHOD_DEFINITION', true);
        this.setColour(CLASS_COLOUR);
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
        let badArg = false;
        let hash = {};
        for (let i = 0; i < this.arguments_.length; i++) {
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
        let paramString = '';
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
     * @param {=boolean} opt_paramIds If true include the IDs of the parameter
     *     quarks.  Used by DragonDrop.Classes.mutateCallers for reconnection.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function (opt_paramIds) {
        let container = document.createElement('mutation');
        if (opt_paramIds) {
            container.setAttribute('name', this.getFieldValue('NAME'));
        }
        for (let i = 0; i < this.arguments_.length; i++) {
            let parameter = document.createElement('arg');
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
        for (let i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
            if (childNode.nodeName.toLowerCase() == 'arg') {
                this.arguments_.push(childNode.getAttribute('name'));
            }
        }
        this.updateParams_();
        DragonDrop.Classes.mutateCallers(this);

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
        let containerBlock = workspace.newBlock('method_mutatorcontainer');
        containerBlock.initSvg();

        // Check/uncheck the allow statement box.
        if (this.getInput('RETURN')) {
            containerBlock.setFieldValue(this.hasStatements_ ? 'TRUE' : 'FALSE',
                'STATEMENTS');
        } else {
            containerBlock.getInput('STATEMENT_INPUT').setVisible(false);
        }

        // Parameter list.
        let connection = containerBlock.getInput('STACK').connection;
        for (let i = 0; i < this.arguments_.length; i++) {
            let paramBlock = workspace.newBlock('method_mutatorarg');
            paramBlock.initSvg();
            paramBlock.setFieldValue(this.arguments_[i], 'NAME');
            // Store the old location.
            paramBlock.oldLocation = i;
            connection.connect(paramBlock.previousConnection);
            connection = paramBlock.nextConnection;
        }
        // Initialize procedure's callers with blank IDs.
        DragonDrop.Classes.mutateCallers(this);
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
        let paramBlock = containerBlock.getInputTargetBlock('STACK');
        while (paramBlock) {
            this.arguments_.push(paramBlock.getFieldValue('NAME'));
            this.paramIds_.push(paramBlock.id);
            paramBlock = paramBlock.nextConnection &&
                paramBlock.nextConnection.targetBlock();
        }
        this.updateParams_();
        DragonDrop.Classes.mutateCallers(this);

        // Show/hide the statement input.
        let hasStatements = containerBlock.getFieldValue('STATEMENTS');
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
                    let stackConnection = this.getInput('STACK').connection;
                    this.statementConnection_ = stackConnection.targetConnection;
                    if (this.statementConnection_) {
                        let stackBlock = stackConnection.targetBlock();
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
    getMethodDef: function () {
        return [this.getFieldValue('NAME'), this.arguments_, false, getClassForBlock(this)];
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
        let change = false;
        for (let i = 0; i < this.arguments_.length; i++) {
            if (Blockly.Names.equals(oldName, this.arguments_[i])) {
                this.arguments_[i] = newName;
                change = true;
            }
        }
        if (change) {
            this.updateParams_();
            // Update the mutator's variables if the mutator is open.
            if (this.mutator.isVisible()) {
                let blocks = this.mutator.workspace_.getAllBlocks();
                for (let i = 0, block; block = blocks[i]; i++) {
                    if (block.type == 'method_mutatorarg' &&
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
        let option = {enabled: true};
        let name = this.getFieldValue('NAME');
        option.text = Blockly.Msg.PROCEDURES_CREATE_DO.replace('%1', name);
        let xmlMutation = goog.dom.createDom('mutation');
        xmlMutation.setAttribute('name', name);
        for (let i = 0; i < this.arguments_.length; i++) {
            let xmlArg = goog.dom.createDom('arg');
            xmlArg.setAttribute('name', this.arguments_[i]);
            xmlMutation.appendChild(xmlArg);
        }
        let xmlBlock = goog.dom.createDom('block', null, xmlMutation);
        xmlBlock.setAttribute('type', this.callType_);
        option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
        options.push(option);

        // Add options to create getters for each parameter.
        if (!this.isCollapsed()) {
            for (let i = 0; i < this.arguments_.length; i++) {
                let option = {enabled: true};
                let name = this.arguments_[i];
                option.text = Blockly.Msg.VARIABLES_SET_CREATE_GET.replace('%1', name);
                let xmlField = goog.dom.createDom('field', null, name);
                xmlField.setAttribute('name', 'VAR');
                let xmlBlock = goog.dom.createDom('block', null, xmlField);
                xmlBlock.setAttribute('type', 'variables_get');
                option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
                options.push(option);
            }
        }
    },
    onchange: function (event) {
        if (!workspace || this.isInFlyout) {
            return;
        }

        disableIfNotInClassBlock(this);
    },
    callType_: 'method_callnoreturn'
};

Blockly.Blocks['method_defreturn'] = {
    /**
     * Block for defining a procedure with a return value.
     * @this Blockly.Block
     */
    init: function () {
        let nameField = new Blockly.FieldTextInput(
            Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE,
            DragonDrop.Classes.rename);
        nameField.setSpellcheck(false);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
            .appendField(nameField, 'NAME')
            .appendField('', 'PARAMS');
        this.appendValueInput('RETURN')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
        this.setMutator(new Blockly.Mutator(['method_mutatorarg']));
        if (Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT) {
            this.setCommentText(Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT);
        }

        this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
        this.arguments_ = [];
        this.setStatements_(true);
        this.statementConnection_ = null;

        this.setPreviousStatement(true, ["METHOD_DEFINITION", "CLASS_DEFINITION"]);
        this.setNextStatement(true, 'METHOD_DEFINITION');
        this.setColour(CLASS_COLOUR);
    },
    setStatements_: Blockly.Blocks['method_defnoreturn'].setStatements_,
    updateParams_: Blockly.Blocks['method_defnoreturn'].updateParams_,
    mutationToDom: Blockly.Blocks['method_defnoreturn'].mutationToDom,
    domToMutation: Blockly.Blocks['method_defnoreturn'].domToMutation,
    decompose: Blockly.Blocks['method_defnoreturn'].decompose,
    compose: Blockly.Blocks['method_defnoreturn'].compose,
    /**
     * Return the signature of this procedure definition.
     * @return {!Array} Tuple containing three elements:
     *     - the name of the defined procedure,
     *     - a list of all its arguments,
     *     - that it DOES have a return value.
     * @this Blockly.Block
     */
    getMethodDef: function () {
        return [this.getFieldValue('NAME'), this.arguments_, true, getClassForBlock(this)];
    },
    getVars: Blockly.Blocks['method_defnoreturn'].getVars,
    renameVar: Blockly.Blocks['method_defnoreturn'].renameVar,
    customContextMenu: Blockly.Blocks['method_defnoreturn'].customContextMenu,
    callType_: 'method_callreturn',
    onchange: Blockly.Blocks['method_defnoreturn'].onchange
};

Blockly.Blocks['method_mutatorcontainer'] = {
    /**
     * Mutator block for procedure container.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE);
        this.appendStatementInput('STACK');
        this.appendDummyInput('STATEMENT_INPUT')
            .appendField(Blockly.Msg.PROCEDURES_ALLOW_STATEMENTS)
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'STATEMENTS');

        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
        this.contextMenu = false;
        this.setColour(CLASS_COLOUR);
    }
};

Blockly.Blocks['method_mutatorarg'] = {
    /**
     * Mutator block for procedure argument.
     * @this Blockly.Block
     */
    init: function () {
        let field = new Blockly.FieldTextInput('x', this.validator_);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE)
            .appendField(field, 'NAME');
        this.setPreviousStatement(true);
        this.setNextStatement(true);

        this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
        this.contextMenu = false;

        // Create the default variable when we drag the block in from the flyout.
        // Have to do this after installing the field on the block.
        field.onFinishEditing_ = this.createNewVar_;
        field.onFinishEditing_('x');
        this.setColour(CLASS_COLOUR);
    },
    /**
     * Obtain a valid name for the procedure.
     * Merge runs of whitespace.  Strip leading and trailing whitespace.
     * Beyond this, all names are legal.
     * @param {string} newVar User-supplied name.
     * @return {?string} Valid name, or null if a name was not specified.
     * @private
     * @this Blockly.Block
     */
    validator_: function (newVar) {
        newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
        return newVar || null;
    },
    /**
     * Called when focusing away from the text field.
     * Creates a new variable with this name.
     * @param {string} newText The new variable name.
     * @private
     * @this Blockly.FieldTextInput
     */
    createNewVar_: function (newText) {
        let source = this.sourceBlock_;
        if (source && source.workspace && source.workspace.options
            && source.workspace.options.parentWorkspace) {
            source.workspace.options.parentWorkspace.createVariable(newText);
        }
    }
};

Blockly.Blocks['method_callnoreturn'] = {
    /**
     * Block for calling a procedure with no return value.
     * @this Blockly.Block
     */
    init: function () {
        this.appendDummyInput('TOPROW')
            .appendField('call')
            .appendField(this.id, 'NAME');
        this.appendValueInput('INSTANCE')
            .appendField(CALL_IN_CLASS_MSG.replace('%1', this.class_ || 'class'), 'INSTANCE_NAME')
            .setCheck('Class');
        this.setPreviousStatement(true);
        this.setNextStatement(true);

        // Tooltip is set in renameProcedure.
        this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLNORETURN_HELPURL);
        this.arguments_ = [];
        this.quarkConnections_ = {};
        this.quarkIds_ = null;
        this.class_ = null;
        this.setColour(CLASS_COLOUR);
    },
    /**
     * Returns the name of the procedure this block calls.
     * @return {string} Procedure name.
     * @this Blockly.Block
     */
    getMethodCall: function () {
        // The NAME field is guaranteed to exist, null will never be returned.
        return /** @type {string} */ (this.getFieldValue('NAME'));
    },
    /**
     * Notification that a procedure is renaming.
     * If the name matches this block's procedure, rename it.
     * @param {string} oldName Previous name of procedure.
     * @param {string} newName Renamed procedure.
     * @this Blockly.Block
     */
    renameProcedure: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getMethodCall())) {
            this.setFieldValue(newName, 'NAME');
            this.setFieldValue(CALL_IN_CLASS_MSG.replace('%1', this.class_ || 'class'), 'INSTANCE_NAME');
            this.setTooltip(
                (this.outputConnection ? Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP :
                    Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP)
                    .replace('%1', newName));
        }
    },
    /**
     * Notification that the procedure's parameters have changed.
     * @param {!Array.<string>} paramNames New param names, e.g. ['x', 'y', 'z'].
     * @param {!Array.<string>} paramIds IDs of params (consistent for each
     *     parameter through the life of a mutator, regardless of param renaming),
     *     e.g. ['piua', 'f8b_', 'oi.o'].
     * @private
     * @this Blockly.Block
     */
    setProcedureParameters_: function (paramNames, paramIds) {
        // Data structures:
        // this.arguments = ['x', 'y']
        //     Existing param names.
        // this.quarkConnections_ {piua: null, f8b_: Blockly.Connection}
        //     Look-up of paramIds to connections plugged into the call block.
        // this.quarkIds_ = ['piua', 'f8b_']
        //     Existing param IDs.
        // Note that quarkConnections_ may include IDs that no longer exist, but
        // which might reappear if a param is reattached in the mutator.
        let defBlock = DragonDrop.Classes.getDefinition(this.getMethodCall(),
            this.workspace);
        let mutatorOpen = defBlock && defBlock.mutator &&
            defBlock.mutator.isVisible();
        if (!mutatorOpen) {
            this.quarkConnections_ = {};
            this.quarkIds_ = null;
        }
        if (!paramIds) {
            // Reset the quarks (a mutator is about to open).
            return;
        }
        if (goog.array.equals(this.arguments_, paramNames)) {
            // No change.
            this.quarkIds_ = paramIds;
            return;
        }
        if (paramIds.length != paramNames.length) {
            throw 'Error: paramNames and paramIds must be the same length.';
        }
        this.setCollapsed(false);
        if (!this.quarkIds_) {
            // Initialize tracking for this block.
            this.quarkConnections_ = {};
            if (paramNames.join('\n') == this.arguments_.join('\n')) {
                // No change to the parameters, allow quarkConnections_ to be
                // populated with the existing connections.
                this.quarkIds_ = paramIds;
            } else {
                this.quarkIds_ = [];
            }
        }
        // Switch off rendering while the block is rebuilt.
        let savedRendered = this.rendered;
        this.rendered = false;
        // Update the quarkConnections_ with existing connections.
        for (let i = 0; i < this.arguments_.length; i++) {
            let input = this.getInput('ARG' + i);
            if (input) {
                let connection = input.connection.targetConnection;
                this.quarkConnections_[this.quarkIds_[i]] = connection;
                if (mutatorOpen && connection &&
                    paramIds.indexOf(this.quarkIds_[i]) == -1) {
                    // This connection should no longer be attached to this block.
                    connection.disconnect();
                    connection.getSourceBlock().bumpNeighbours_();
                }
            }
        }
        // Rebuild the block's arguments.
        this.arguments_ = [].concat(paramNames);
        this.updateShape_();
        this.quarkIds_ = paramIds;
        // Reconnect any child blocks.
        if (this.quarkIds_) {
            for (let i = 0; i < this.arguments_.length; i++) {
                let quarkId = this.quarkIds_[i];
                if (quarkId in this.quarkConnections_) {
                    let connection = this.quarkConnections_[quarkId];
                    if (!Blockly.Mutator.reconnect(connection, this, 'ARG' + i)) {
                        // Block no longer exists or has been attached elsewhere.
                        delete this.quarkConnections_[quarkId];
                    }
                }
            }
        }
        // Restore rendering and show the changes.
        this.rendered = savedRendered;
        if (this.rendered) {
            this.render();
        }
    },
    /**
     * Modify this block to have the correct number of arguments.
     * @private
     * @this Blockly.Block
     */
    updateShape_: function () {
        let i;
        for (i = 0; i < this.arguments_.length; i++) {
            let field = this.getField('ARGNAME' + i);
            if (field) {
                // Ensure argument name is up to date.
                // The argument name field is deterministic based on the mutation,
                // no need to fire a change event.
                Blockly.Events.disable();
                try {
                    field.setValue(this.arguments_[i]);
                } finally {
                    Blockly.Events.enable();
                }
            } else {
                // Add new input.
                field = new Blockly.FieldLabel(this.arguments_[i]);
                let input = this.appendValueInput('ARG' + i)
                    .setAlign(Blockly.ALIGN_RIGHT)
                    .appendField(field, 'ARGNAME' + i);
                input.init();
            }
        }
        // Remove deleted inputs.
        while (this.getInput('ARG' + i)) {
            this.removeInput('ARG' + i);
            i++;
        }
        // Add 'with:' if there are parameters, remove otherwise.
        let topRow = this.getInput('TOPROW');
        if (topRow) {
            if (this.arguments_.length) {
                if (!this.getField('WITH')) {
                    topRow.appendField(Blockly.Msg.PROCEDURES_CALL_BEFORE_PARAMS, 'WITH');
                    topRow.init();
                }
            } else {
                if (this.getField('WITH')) {
                    topRow.removeField('WITH');
                }
            }
        }
    },
    /**
     * Create XML to represent the (non-editable) name and arguments.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function () {
        let container = document.createElement('mutation');
        container.setAttribute('name', this.getMethodCall());
        container.setAttribute('class', this.class_);
        for (let i = 0; i < this.arguments_.length; i++) {
            let parameter = document.createElement('arg');
            parameter.setAttribute('name', this.arguments_[i]);
            container.appendChild(parameter);
        }
        return container;
    },
    /**
     * Parse XML to restore the (non-editable) name and parameters.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function (xmlElement) {
        let name = xmlElement.getAttribute('name');
        this.class_ = xmlElement.getAttribute('class');
        this.renameProcedure(this.getMethodCall(), name);
        let args = [];
        let paramIds = [];
        for (let i = 0, childNode; childNode = xmlElement.childNodes[i]; i++) {
            if (childNode.nodeName.toLowerCase() == 'arg') {
                args.push(childNode.getAttribute('name'));
                paramIds.push(childNode.getAttribute('paramId'));
            }
        }
        this.setProcedureParameters_(args, paramIds);
    },
    /**
     * Notification that a variable is renaming.
     * If the name matches one of this block's variables, rename it.
     * @param {string} oldName Previous name of variable.
     * @param {string} newName Renamed variable.
     * @this Blockly.Block
     */
    renameVar: function (oldName, newName) {
        for (let i = 0; i < this.arguments_.length; i++) {
            if (Blockly.Names.equals(oldName, this.arguments_[i])) {
                this.arguments_[i] = newName;
                this.getField('ARGNAME' + i).setValue(newName);
            }
        }
    },
    /**
     * Procedure calls cannot exist without the corresponding procedure
     * definition.  Enforce this link whenever an event is fired.
     * @this Blockly.Block
     */
    onchange: function (event) {
        if (!this.workspace || this.workspace.isFlyout) {
            // Block is deleted or is in a flyout.
            return;
        }
        if (event.type == Blockly.Events.CREATE &&
            event.ids.indexOf(this.id) != -1) {
            // Look for the case where a procedure call was created (usually through
            // paste) and there is no matching definition.  In this case, create
            // an empty definition block with the correct signature.
            let name = this.getMethodCall();
            let def = DragonDrop.Classes.getDefinition(name, this.workspace);
            if (def && (def.type != this.defType_ ||
                JSON.stringify(def.arguments_) != JSON.stringify(this.arguments_))) {
                // The signatures don't match.
                def = null;
            }
            if (!def) {
                Blockly.Events.setGroup(event.group);
                /**
                 * Create matching definition block.
                 * <xml>
                 *   <block type="method_defreturn" x="10" y="20">
                 *     <mutation name="test">
                 *       <arg name="x"></arg>
                 *     </mutation>
                 *     <field name="NAME">test</field>
                 *   </block>
                 * </xml>
                 */
                let xml = goog.dom.createDom('xml');
                let block = goog.dom.createDom('block');
                block.setAttribute('type', this.defType_);
                let xy = this.getRelativeToSurfaceXY();
                let x = xy.x + Blockly.SNAP_RADIUS * (this.RTL ? -1 : 1);
                let y = xy.y + Blockly.SNAP_RADIUS * 2;
                block.setAttribute('x', x);
                block.setAttribute('y', y);
                let mutation = this.mutationToDom();
                block.appendChild(mutation);
                let field = goog.dom.createDom('field');
                field.setAttribute('name', 'NAME');
                field.appendChild(document.createTextNode(this.getMethodCall()));
                block.appendChild(field);
                xml.appendChild(block);
                Blockly.Xml.domToWorkspace(xml, this.workspace);
                Blockly.Events.setGroup(false);
            }
        } else if (event.type == Blockly.Events.DELETE) {
            // Look for the case where a procedure definition has been deleted,
            // leaving this block (a procedure call) orphaned.  In this case, delete
            // the orphan.
            let name = this.getMethodCall();
            let def = DragonDrop.Classes.getDefinition(name, this.workspace);
            if (!def) {
                Blockly.Events.setGroup(event.group);
                this.dispose(true, false);
                Blockly.Events.setGroup(false);
            }
        } else if (event.type == Blockly.Events.CHANGE && this.id == event.blockId) {
            console.log(this.getInput('RETURN'));
            let ret = this.getInput('RETURN');
            if (ret) {
                ret.setCheck(typeToCheckType(this.getFieldValue('TYPE')));
            }
        }

    },
    /**
     * Add menu option to find the definition block for this call.
     * @param {!Array} options List of menu options to add to.
     * @this Blockly.Block
     */
    customContextMenu: function (options) {
        let option = {enabled: true};
        option.text = Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF;
        let name = this.getMethodCall();
        let workspace = this.workspace;
        option.callback = function () {
            let def = DragonDrop.Classes.getDefinition(name, workspace);
            def && def.select();
        };
        options.push(option);
    },
    defType_: 'method_defnoreturn'
};

Blockly.Blocks['method_callreturn'] = {
    /**
     * Block for calling a procedure with a return value.
     * @this Blockly.Block
     */
    init: function () {

        this.appendDummyInput('TOPROW')
            .appendField('call')
            .appendField(this.id, 'NAME');
        this.appendValueInput('INSTANCE')
            .appendField(CALL_IN_CLASS_MSG.replace('%1', this.class_ || 'class'), 'INSTANCE_NAME')
            .setCheck('Class');
        this.setOutput(true);

        // Tooltip is set in domToMutation.
        this.setHelpUrl(Blockly.Msg.PROCEDURES_CALLRETURN_HELPURL);
        this.arguments_ = [];
        this.quarkConnections_ = {};
        this.quarkIds_ = null;

        this.setColour(CLASS_COLOUR);
    },
    getMethodCall: Blockly.Blocks['method_callnoreturn'].getMethodCall,
    renameProcedure: Blockly.Blocks['method_callnoreturn'].renameProcedure,
    setProcedureParameters_: Blockly.Blocks['method_callnoreturn'].setProcedureParameters_,
    updateShape_: Blockly.Blocks['method_callnoreturn'].updateShape_,
    mutationToDom: Blockly.Blocks['method_callnoreturn'].mutationToDom,
    domToMutation: Blockly.Blocks['method_callnoreturn'].domToMutation,
    renameVar: Blockly.Blocks['method_callnoreturn'].renameVar,
    onchange: Blockly.Blocks['method_callnoreturn'].onchange,
    customContextMenu: Blockly.Blocks['method_callnoreturn'].customContextMenu,
    defType_: 'method_defreturn'
};


Blockly.Blocks['method_ifreturn'] = {
    /**
     * Block for conditionally returning a value from a procedure.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput('CONDITION')
            .setCheck('Boolean')
            .appendField(Blockly.Msg.CONTROLS_IF_MSG_IF);
        this.appendValueInput('VALUE')
            .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(CLASS_COLOUR);
        this.setTooltip(Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_IFRETURN_HELPURL);
        this.hasReturnValue_ = true;
    },
    /**
     * Create XML to represent whether this block has a return value.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function () {
        var container = document.createElement('mutation');
        container.setAttribute('value', Number(this.hasReturnValue_));
        return container;
    },
    /**
     * Parse XML to restore whether this block has a return value.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function (xmlElement) {
        var value = xmlElement.getAttribute('value');
        this.hasReturnValue_ = (value == 1);
        if (!this.hasReturnValue_) {
            this.removeInput('VALUE');
            this.appendDummyInput('VALUE')
                .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
        }
    },
    /**
     * Called whenever anything on the workspace changes.
     * Add warning if this flow block is not nested inside a loop.
     * @param {!Blockly.Events.Abstract} e Change event.
     * @this Blockly.Block
     */
    onchange: function (e) {
        var legal = false;
        // Is the block nested in a procedure?
        var block = this;
        do {
            if (this.FUNCTION_TYPES.indexOf(block.type) != -1) {
                legal = true;
                break;
            }
            block = block.getSurroundParent();
        } while (block);
        if (legal) {
            // If needed, toggle whether this block has a return value.
            if (block.type == 'method_defnoreturn' && this.hasReturnValue_) {
                this.removeInput('VALUE');
                this.appendDummyInput('VALUE')
                    .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
                this.hasReturnValue_ = false;
            } else if (block.type == 'method_defreturn' && !this.hasReturnValue_) {
                this.removeInput('VALUE');
                this.appendValueInput('VALUE')
                    .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
                this.hasReturnValue_ = true;
            }
            this.setWarningText(null);
        } else {
            this.setWarningText(Blockly.Msg.PROCEDURES_IFRETURN_WARNING);
        }
    },
    /**
     * List of block types that are functions and thus do not need warnings.
     * To add a new function type add this to your code:
     * Blockly.Blocks['procedures_ifreturn'].FUNCTION_TYPES.push('custom_func');
     */
    FUNCTION_TYPES: ['method_defnoreturn', 'method_defreturn']
};

/**
 * In most cases the return at the end of a procedure or a conditional if are sufficient. However there are circumstances
 * where you want to some behavior in the if statements body then return. This block allows that to be accomplished
 *
 * @type {{init: Blockly.Blocks.procedures_return.init, mutationToDom: Blockly.Blocks.procedures_return.mutationToDom, domToMutation: Blockly.Blocks.procedures_return.domToMutation, onchange: Blockly.Blocks.procedures_return.onchange, FUNCTION_TYPES: [*]}}
 */
Blockly.Blocks['method_return'] = {
    /**
     * Block for conditionally returning a value from a procedure.
     * @this Blockly.Block
     */
    init: function () {
        this.appendValueInput('VALUE')
            .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(CLASS_COLOUR);
        this.setTooltip(Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PROCEDURES_IFRETURN_HELPURL);
        this.hasReturnValue_ = true;
    },
    /**
     * Create XML to represent whether this block has a return value.
     * @return {!Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function () {
        var container = document.createElement('mutation');
        container.setAttribute('value', Number(this.hasReturnValue_));
        return container;
    },
    /**
     * Parse XML to restore whether this block has a return value.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function (xmlElement) {
        var value = xmlElement.getAttribute('value');
        this.hasReturnValue_ = (value == 1);
        if (!this.hasReturnValue_) {
            this.removeInput('VALUE');
            this.appendDummyInput('VALUE')
                .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN);
        }
    },
    /**
     * Called whenever anything on the workspace changes.
     * Add warning if this flow block is not nested inside a loop.
     * @param {!Blockly.Events.Abstract} e Change event.
     * @this Blockly.Block
     */
    onchange: Blockly.Blocks['method_ifreturn'].onchange,
    /**
     * List of block types that are functions and thus do not need warnings.
     * To add a new function type add this to your code:
     * Blockly.Blocks['procedures_ifreturn'].FUNCTION_TYPES.push('custom_func');
     */
    FUNCTION_TYPES: ['method_defnoreturn', 'method_defreturn']
};
