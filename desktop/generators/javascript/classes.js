/**
 * Created by lukepowell on 3/28/17.
 */
Blockly.JavaScript['class_definition'] = function(block) {
    let text_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    let value_extends = Blockly.JavaScript.valueToCode(block, 'extends', Blockly.JavaScript.ORDER_ATOMIC);
    if (value_extends) {
        value_extends = `extends ${value_extends} `;
    } else {
        value_extends = '';
    }

    let statements_methods = Blockly.JavaScript.statementToCode(block, 'METHODS');
    let statements_members = Blockly.JavaScript.statementToCode(block, 'CONSTRUCTOR');
    let args = [];
    for (let i = 0; i < block.arguments_.length; i++) {
        args[i] = Blockly.JavaScript.variableDB_.getName(block.arguments_[i],
            Blockly.Variables.NAME_TYPE);
    }
    return `class ${text_name} ${value_extends}{\nconstructor(${args.join(',')}){\n${statements_members}}\n${statements_methods}\n};\n`;
};

Blockly.JavaScript['method_definition'] = function(block) {
    let text_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    let statements_method_statements = Blockly.JavaScript.statementToCode(block, 'METHOD_STATEMENTS');
    return `${text_name}(){\n${statements_method_statements}\n}\n`;
};

Blockly.JavaScript['member_definition'] = function(block) {
    let text_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    let value_default = Blockly.JavaScript.valueToCode(block, 'DEFAULT', Blockly.JavaScript.ORDER_ATOMIC) || '0';

    return `\tthis.${text_name} = ${value_default};\n`;
};

Blockly.JavaScript['this_reference'] = function(block) {
    return ['this', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_member_in_class'] = function(block) {
    const instance = Blockly.JavaScript.valueToCode(block, 'INSTANCE', Blockly.JavaScript.ORDER_NONE);
    //The name that the user entered is only guaranteed to not have leading or trailing spaces. This will convert the
    //name into an actual legally usable state
    const legalMemberName = Blockly.JavaScript.variableDB_.getName(block.memberName, Blockly.Procedures.NAME_TYPE);
    return [`${instance}.${legalMemberName}`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * @deprecated
 * @param block
 * @returns {[*,*]}
 */
Blockly.JavaScript['get_member_this'] = function(block) {
    const dropdown_members = block.getFieldValue('MEMBERS');
    // TODO: Assemble JavaScript into code variable.
    let code = '...';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_NEW];
};


Blockly.JavaScript['method_defreturn'] = function(block) {
    // Define a procedure with a return value.
    let funcName = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);

    let branch = Blockly.JavaScript.statementToCode(block, 'STACK');

    if (Blockly.JavaScript.STATEMENT_PREFIX) {
        branch = Blockly.JavaScript.prefixLines(
                Blockly.JavaScript.STATEMENT_PREFIX.replace(/%1/g,
                    '\'' + block.id + '\''), Blockly.JavaScript.INDENT) + branch;
    }

    if (Blockly.JavaScript.INFINITE_LOOP_TRAP) {
        branch = Blockly.JavaScript.INFINITE_LOOP_TRAP.replace(/%1/g,
                '\'' + block.id + '\'') + branch;
    }

    let returnValue = Blockly.JavaScript.valueToCode(block, 'RETURN',
            Blockly.JavaScript.ORDER_NONE) || '';

    if (returnValue) {
        returnValue = '  return ' + returnValue + ';\n';
    }

    let args = [];
    for (let i = 0; i < block.arguments_.length; i++) {
        args[i] = Blockly.JavaScript.variableDB_.getName(block.arguments_[i],
            Blockly.Variables.NAME_TYPE);
    }

    return `${funcName}(${args.join(', ')}) \{\n${branch}${returnValue}}\n`;
};

Blockly.JavaScript['method_defnoreturn'] = Blockly.JavaScript['method_defreturn'];

Blockly.JavaScript['create_instance_of_class'] = function(block) {
    const args = [];
    for (let i = 0; i < block.arguments_.length; i++) {
        args[i] = Blockly.JavaScript.valueToCode(block, 'ARG' + i,
                Blockly.JavaScript.ORDER_COMMA) || 'null';
    }
    //The name that the user entered is only guaranteed to not have leading or trailing spaces. This will convert the
    //name into an actual legally usable state
    const legalMemberName = Blockly.JavaScript.variableDB_.getName(block.name, Blockly.Procedures.NAME_TYPE);
    return [`new ${legalMemberName}(${args.join(', ')})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set_member_in_class'] = function(block) {
    const instance = Blockly.JavaScript.valueToCode(block, 'INSTANCE', Blockly.JavaScript.ORDER_ATOMIC);
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    //The name that the user entered is only guaranteed to not have leading or trailing spaces. This will convert the
    //name into an actual legally usable state
    const legalMemberName = Blockly.JavaScript.variableDB_.getName(block.memberName, Blockly.Procedures.NAME_TYPE);
    return `${instance}.${legalMemberName} = ${value};\n`;
};

Blockly.JavaScript['method_callreturn'] = function(block) {
    // Call a procedure with a return value.
    const funcName = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    const instance = Blockly.JavaScript.valueToCode(block, 'INSTANCE', Blockly.JavaScript.ORDER_ATOMIC);
    const args = [];
    for (let i = 0; i < block.arguments_.length; i++) {
        args[i] = Blockly.JavaScript.valueToCode(block, 'ARG' + i,
                Blockly.JavaScript.ORDER_COMMA) || 'null';
    }
    const code = `${instance}.${funcName}(${args.join(', ')})`;
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['method_callnoreturn'] = function(block) {
    // Call a procedure with no return value.
    const funcName = Blockly.JavaScript.variableDB_.getName(
        block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    const instance = Blockly.JavaScript.valueToCode(block, 'INSTANCE', Blockly.JavaScript.ORDER_ATOMIC);
    const args = [];
    for (let i = 0; i < block.arguments_.length; i++) {
        args[i] = Blockly.JavaScript.valueToCode(block, 'ARG' + i,
                Blockly.JavaScript.ORDER_COMMA) || 'null';
    }
    return `${instance}.${funcName}(${args.join(', ')});`;
};

Blockly.JavaScript['class_type'] = function (block) {
    return [block.name, Blockly.JavaScript.ORDER_ATOMIC];
};


Blockly.JavaScript['super_constructor'] = function (block) {
    const args = [];
    for (let i = 0; i < block.arguments_.length; i++) {
        args[i] = Blockly.JavaScript.valueToCode(block, 'ARG' + i,
                Blockly.JavaScript.ORDER_COMMA) || 'null';
    }
    return `super(${args.join(', ')});\n`
};