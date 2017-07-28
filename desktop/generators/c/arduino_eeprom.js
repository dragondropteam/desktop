'use strict';
goog.provide('Blockly.C.arduino_eeprom');

goog.require('Blockly.C');

//region EEPROM

function AddInclude(){
    Blockly.C.definitions_['import_eeprom'] = '#include <EEPROM.h>';
}

Blockly.C['eeprom_read'] = function (block) {
    AddInclude();
    const address = Blockly.C.valueToCode(block, 'ADDRESS', Blockly.C.ORDER_ATOMIC);
    return [`EEPROM.read(${address})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['eeprom_write'] = function (block) {
    AddInclude();
    const address = Blockly.C.valueToCode(block, 'ADDRESS', Blockly.C.ORDER_ATOMIC);
    const value = Blockly.C.valueToCode(block, 'VALUE', Blockly.C.ORDER_ATOMIC);
    return `EEPROM.write(${address}, ${value});\n`;
};

Blockly.C['eeprom_update'] = function (block) {
    AddInclude();
    const address = Blockly.C.valueToCode(block, 'ADDRESS', Blockly.C.ORDER_ATOMIC);
    const value = Blockly.C.valueToCode(block, 'VALUE', Blockly.C.ORDER_ATOMIC);
    return `EEPROM.update(${address}, ${value});\n`;
};

Blockly.C['eeprom_get'] = function (block) {
    AddInclude();
    const address = Blockly.C.valueToCode(block, 'ADDRESS', Blockly.C.ORDER_ATOMIC);
    const variable = Blockly.C.variableDB_.getName(block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return `EEPROM.get(${address}, ${variable});\n`
};

Blockly.C['eeprom_put'] = function (block) {
    AddInclude();
    const address = Blockly.C.valueToCode(block, 'ADDRESS', Blockly.C.ORDER_ATOMIC);
    const value = Blockly.C.valueToCode(block, 'VALUE', Blockly.C.ORDER_ATOMIC);
    return `EEPROM.put(${address}, ${value});\n`;
};

//endregion