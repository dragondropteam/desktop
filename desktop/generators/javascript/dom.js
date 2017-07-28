//region document methods
Blockly.JavaScript['getelementbyid'] = function (block) {
    const text_ID = block.getFieldValue('ID');
    const code = `document.getElementById('${text_ID}')`;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['dom_getcontext'] = function (block) {
    const variable_dom = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('DOM'), Blockly.Variables.NAME_TYPE);
    const text_context = block.getFieldValue('CONTEXT');
    return [`${variable_dom}.getContext('${text_context}')`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set_height'] = function (block) {
    const variable_domvar = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('DOMVAR'), Blockly.Variables.NAME_TYPE);
    const value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${variable_domvar}.height = ${value_height};\n`;
};

Blockly.JavaScript['set_width'] = function (block) {
    const variable_domvar = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('DOMVAR'), Blockly.Variables.NAME_TYPE);
    const value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
    return `${variable_domvar}.width = ${value_width};\n`;
};

Blockly.JavaScript['set_attribute'] = function(block) {
  const variable_element = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ELEMENT'), Blockly.Variables.NAME_TYPE);
  const text_attribute = block.getFieldValue('ATTRIBUTE');
  const text_value = block.getFieldValue('VALUE');
  return `${variable_element}.setAttribute(${text_attribute},${text_value});\n`;
};
Blockly.JavaScript['add_event_listener'] = function(block) {
    const variable_element = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('ELEMENT'), Blockly.Variables.NAME_TYPE);
    const text_event_type = block.getFieldValue('EVENT_TYPE');
    const variable_event = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EVENT'), Blockly.Variables.NAME_TYPE);
    const statements_do = Blockly.JavaScript.statementToCode(block, 'DO');
    return `${variable_element}.addEventListener('${text_event_type}', function(${variable_event}){\n${statements_do}});\n`;
};
Blockly.JavaScript['console_log'] = function(block) {
  const value_value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `console.log(${value_value});\n`;
};
//endregion document methods
