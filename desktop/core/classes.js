/**
 * Created by lukepowell on 3/28/17.
 */

goog.provide('DragonDrop');
goog.provide('DragonDrop.Classes');

goog.require('Blockly.Blocks');
goog.require('Blockly.Workspace');
goog.require('Blockly.Variables');
goog.require('goog.string');

DragonDrop.Classes.NAME_TYPE ='CLASSES';

DragonDrop.Classes.flyoutCategory = function(workspace){
    // let classInstances = workspace.classList;
    let xmlList = [];

    let classDefinition = goog.dom.createDom('block');
    classDefinition.setAttribute('type', 'class_definition');
    xmlList.push(classDefinition);

    let methodDefinition = goog.dom.createDom('block');
    methodDefinition.setAttribute('type', 'method_defnoreturn');
    xmlList.push(methodDefinition);

    let methodDefinitionReturn = goog.dom.createDom('block');
    methodDefinitionReturn.setAttribute('type', 'method_defreturn');
    xmlList.push(methodDefinitionReturn);

    let memberDefinition = goog.dom.createDom('block');
    memberDefinition.setAttribute('type', 'member_definition');
    xmlList.push(memberDefinition);

    let thisReference = goog.dom.createDom('block');
    thisReference.setAttribute('type', 'this_reference');
    xmlList.push(thisReference);

    let superConstructor = goog.dom.createDom('block');
    superConstructor.setAttribute('type', 'super_constructor');
    xmlList.push(superConstructor);

    // let thisGet = goog.dom.createDom('block');
    // thisGet.setAttribute('type', 'get_member_this');
    // xmlList.push(thisGet);

    let classes = DragonDrop.Classes.allClasses(workspace);

    for (let i = 0; i < classes.length; ++i) {
        let className = classes[i].getFieldValue('NAME');
        let classTypeBlock = goog.dom.createDom('block');
        classTypeBlock.setAttribute('type', 'class_type');
        let mutation = goog.dom.createDom('mutation');
        mutation.setAttribute('name', className);
        classTypeBlock.appendChild(mutation);
        xmlList.push(classTypeBlock);
    }

    for(let i = 0; i < classes.length; ++i){
        let className = classes[i].getFieldValue('NAME');
        let members = DragonDrop.Classes.getMembersOf(workspace, className);
        members.forEach((member) =>
        {
            let getMemberBlock = goog.dom.createDom('block');
            let setMemberBlock = goog.dom.createDom('block');

            let getMutation = goog.dom.createDom('mutation');
            let setMutation = goog.dom.createDom('mutation');

            getMutation.setAttribute('name', className);
            getMutation.setAttribute('member_name', member.getFieldValue('NAME'));

            setMutation.setAttribute('name', className);
            setMutation.setAttribute('member_name', member.getFieldValue('NAME'));

            getMemberBlock.setAttribute('type', 'get_member_in_class');
            getMemberBlock.appendChild(getMutation);

            setMemberBlock.setAttribute('type', 'set_member_in_class');
            setMemberBlock.appendChild(setMutation);

            xmlList.push(getMemberBlock);
            xmlList.push(setMemberBlock);
        });
    }

    //region CREATE_CONSTRUCTORS
    for(let i = 0; i < classes.length; ++i){
        // console.log(classes[i]);
        let createInstanceOfClass = goog.dom.createDom('block');
        let mutation = goog.dom.createDom('mutation');
        mutation.setAttribute('name', classes[i].getFieldValue('NAME'));
        createInstanceOfClass.setAttribute('type', 'create_instance_of_class');
        createInstanceOfClass.appendChild(mutation);
        for (let j = 0; j < classes[i].arguments_.length; ++j) {
            let arg = goog.dom.createDom('arg');
            arg.setAttribute('name', classes[i].arguments_[j]);
            mutation.appendChild(arg);
        }
        xmlList.push(createInstanceOfClass);
    }
    //endregion

    //region METHODS
    function populateMethods(procedureList, templateName) {
        for (let i = 0; i < procedureList.length; i++) {
            let name = procedureList[i][0];
            let args = procedureList[i][1];
            // <block type="method_callnoreturn" gap="16">
            //   <mutation name="do something">
            //     <arg name="x"></arg>
            //   </mutation>
            // </block>
            let block = goog.dom.createDom('block');
            block.setAttribute('type', templateName);
            block.setAttribute('gap', 16);
            let mutation = goog.dom.createDom('mutation');
            mutation.setAttribute('name', name);
            block.appendChild(mutation);
            for (let j = 0; j < args.length; j++) {
                let arg = goog.dom.createDom('arg');
                arg.setAttribute('name', args[j]);
                mutation.appendChild(arg);
            }
            xmlList.push(block);
        }
    }

    let tuple = DragonDrop.Classes.allMethods(workspace);
    populateMethods(tuple[0], 'method_callnoreturn');
    populateMethods(tuple[1], 'method_callreturn');
    //endregion

    return xmlList;
};

DragonDrop.Classes.allClasses = function(root){
    let blocks = root.getAllBlocks();
    let classes = [];
    for(let i = 0; i < blocks.length; ++i){
        if(blocks[i].type == 'class_definition'){
            classes.push(blocks[i]);
        }
    }
    return classes;
};


DragonDrop.Classes.createClass = function(workspace){
    let text;
    while(true){
        text = Blockly.Variables.promptName('Create Class', '');
        if(text){
            //See if letiable already exists
        }else{
            text = null;
            break;
        }
    }
    return text;
};

DragonDrop.Classes.getMembersOf = function(root, className){
    let blocks = root.getAllBlocks();
    let members = [];
    for(let i = 0; i < blocks.length; ++i){
        if(blocks[i].type == 'member_definition' && blocks[i].name == className){
            members.push(blocks[i]);
        }
    }
    return members;
};

//REGION NAMING
//Copied and modified from core/procedures.js
/**
* Ensure two identically-named procedures don't exist.
* @param {string} name Proposed procedure name.
* @param {!Blockly.Block} block Block to disambiguate.
* @return {string} Non-colliding name.
*/
DragonDrop.Classes.findLegalName = function(name, block) {
    if (block.isInFlyout) {
        // Flyouts can have multiple procedures called 'do something'.
        return name;
    }
    while (!DragonDrop.Classes.isLegalName_(name, block.workspace, block)) {
        // Collision with another procedure.
        let r = name.match(/^(.*?)(\d+)$/);
        if (!r) {
            name += '2';
        } else {
            name = r[1] + (parseInt(r[2], 10) + 1);
        }
    }
    return name;
};

/**
 * Does this procedure have a legal name?  Illegal names include names of
 * procedures already defined.
 * @param {string} name The questionable name.
 * @param {!Blockly.Workspace} workspace The workspace to scan for collisions.
 * @param {Blockly.Block=} opt_exclude Optional block to exclude from
 *     comparisons (one doesn't want to collide with oneself).
 * @return {boolean} True if the name is legal.
 * @private
 */
DragonDrop.Classes.isLegalName_ = function(name, workspace, opt_exclude) {
    let blocks = workspace.getAllBlocks();
    // Iterate through every block and check the name.
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i] == opt_exclude) {
            continue;
        }
        if(blocks[i].getClassDef){
            let className = blocks[i].getClassDef();
            if(Blockly.Names.equals(className, name)){
                return false;
            }
        }
    }
    return true;
};

/**
 * Rename a procedure.  Called by the editable field.
 * @param {string} name The proposed new name.
 * @return {string} The accepted name.
 * @this {!Blockly.Field}
 */
DragonDrop.Classes.rename = function(name) {
    // Strip leading and trailing whitespace.  Beyond this, all names are legal.
    name = name.replace(/^[\s\xa0]+|[\s\xa0]+$/g, '');

    // Ensure two identically-named procedures don't exist.
    let legalName = DragonDrop.Classes.findLegalName(name, this.sourceBlock_);
    let oldName = this.text_;
    if (oldName != name && oldName != legalName) {
        // Rename any callers.
        let blocks = this.sourceBlock_.workspace.getAllBlocks();
        for (let i = 0; i < blocks.length; i++) {
            if(blocks[i].renameClass){
                blocks[i].renameClass(oldName, legalName);
            }
            if(blocks[i].renameMember){
                blocks[i].renameMember(oldName, legalName);
            }
        }
    }
    return legalName;
};


/**
 * Find all the callers of a named procedure.
 * @param {string} name Name of procedure.
 * @param {!Blockly.Workspace} workspace The workspace to find callers in.
 * @return {!Array.<!Blockly.Block>} Array of caller blocks.
 */
DragonDrop.Classes.getCallers = function (name, workspace) {
    let callers = [];
    let blocks = workspace.getAllBlocks();
    // Iterate through every block and check the name.
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].getMethodCall) {
            let procName = blocks[i].getMethodCall();
            // Procedure name may be null if the block is only half-built.
            if (procName && Blockly.Names.equals(procName, name)) {
                callers.push(blocks[i]);
            }
        }

    }
    return callers;
};

/**
 * Find all the callers of a named procedure.
 * @param {string} name Name of procedure.
 * @param {!Blockly.Workspace} workspace The workspace to find callers in.
 * @return {!Array.<!Blockly.Block>} Array of caller blocks.
 */
DragonDrop.Classes.getConstructors = function (name, workspace) {
    let callers = [];
    let blocks = workspace.getAllBlocks();
    // Iterate through every block and check the name.
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].getConstructorCall) {
            let constructorName = blocks[i].getConstructorCall();
            if (name && Blockly.Names.equals(constructorName, name)) {
                callers.push(blocks[i]);
            }
        }
    }
    return callers;
};

/**
 * When a constructor definition changes its parameters, find and edit all its
 * callers.
 * @param {!Blockly.Block} defBlock Procedure definition block.
 */
DragonDrop.Classes.mutateConstructors = function (defBlock) {
    let oldRecordUndo = Blockly.Events.recordUndo;
    let name = defBlock.getConstructorDef()[0];
    let xmlElement = defBlock.mutationToDom(true);
    let callers = DragonDrop.Classes.getConstructors(name, defBlock.workspace);
    for (let i = 0, caller; caller = callers[i]; i++) {
        let oldMutationDom = caller.mutationToDom();
        let oldMutation = oldMutationDom && Blockly.Xml.domToText(oldMutationDom);
        caller.domToMutation(xmlElement);
        let newMutationDom = caller.mutationToDom();
        let newMutation = newMutationDom && Blockly.Xml.domToText(newMutationDom);
        if (oldMutation != newMutation) {
            // Fire a mutation on every caller block.  But don't record this as an
            // undo action since it is deterministically tied to the procedure's
            // definition mutation.
            Blockly.Events.recordUndo = false;
            Blockly.Events.fire(new Blockly.Events.Change(
                caller, 'mutation', null, oldMutation, newMutation));
            Blockly.Events.recordUndo = oldRecordUndo;
        }
    }
};

/**
 * When a procedure definition changes its parameters, find and edit all its
 * callers.
 * @param {!Blockly.Block} defBlock Procedure definition block.
 */
DragonDrop.Classes.mutateCallers = function(defBlock) {
    let oldRecordUndo = Blockly.Events.recordUndo;
    let name = defBlock.getMethodDef()[0];
    let xmlElement = defBlock.mutationToDom(true);
    let callers = DragonDrop.Classes.getCallers(name, defBlock.workspace);
    for (let i = 0, caller; caller = callers[i]; i++) {
        let oldMutationDom = caller.mutationToDom();
        let oldMutation = oldMutationDom && Blockly.Xml.domToText(oldMutationDom);
        caller.domToMutation(xmlElement);
        let newMutationDom = caller.mutationToDom();
        let newMutation = newMutationDom && Blockly.Xml.domToText(newMutationDom);
        if (oldMutation != newMutation) {
            // Fire a mutation on every caller block.  But don't record this as an
            // undo action since it is deterministically tied to the procedure's
            // definition mutation.
            Blockly.Events.recordUndo = false;
            Blockly.Events.fire(new Blockly.Events.Change(
                caller, 'mutation', null, oldMutation, newMutation));
            Blockly.Events.recordUndo = oldRecordUndo;
        }
    }
};

/**
 * Find the definition block for the named procedure.
 * @param {string} name Name of procedure.r
 * @param {!Blockly.Workspace} workspace The workspace to search.
 * @return {Blockly.Block} The procedure definition block, or null not found.
 */
DragonDrop.Classes.getDefinition = function(name, workspace) {
    //Methods are by definition not top blocks so we have to look through all the blocks not just the top blocks
    let blocks = workspace.getAllBlocks();
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].getMethodDef) {
            let tuple = blocks[i].getMethodDef();
            if (tuple && Blockly.Names.equals(tuple[0], name)) {
                return blocks[i];
            }
        }
        if (blocks[i].getClassDef) {
            if (Blockly.Names.equals(blocks[i].getClassDef(), name)) {
                return blocks[i];
            }
        }
    }
    return null;
};

/**
 * Find all user-created procedure definitions in a workspace.
 * @param {!Blockly.Workspace} root Root workspace.
 * @return {!Array.<!Array.<!Array>>} Pair of arrays, the
 *     first contains procedures without return variables, the second with.
 *     Each procedure is defined by a three-element list of name, parameter
 *     list, and return value boolean.
 */
DragonDrop.Classes.allMethods = function(root) {
    let blocks = root.getAllBlocks();
    let proceduresReturn = [];
    let proceduresNoReturn = [];
    for (let i = 0; i < blocks.length; i++) {
        if (blocks[i].getMethodDef) {
            let tuple = blocks[i].getMethodDef();
            if (tuple) {
                if (tuple[2]) {
                    proceduresReturn.push(tuple);
                } else {
                    proceduresNoReturn.push(tuple);
                }
            }
        }
    }
    proceduresNoReturn.sort(DragonDrop.Classes.procTupleComparator_);
    proceduresReturn.sort(DragonDrop.Classes.procTupleComparator_);
    return [proceduresNoReturn, proceduresReturn];
};

/**
 * Comparison function for case-insensitive sorting of the first element of
 * a tuple.
 * @param {!Array} ta First tuple.
 * @param {!Array} tb Second tuple.
 * @return {number} -1, 0, or 1 to signify greater than, equality, or less than.
 * @private
 */
DragonDrop.Classes.procTupleComparator_ = function(ta, tb) {
    return ta[0].toLowerCase().localeCompare(tb[0].toLowerCase());
};
//ENDREGION

