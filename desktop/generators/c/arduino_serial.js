/**
 * All content copyright DigiPen institute of Technology
 * Created by lukepowell on 5/3/17.
 */
Blockly.C['serial_begin'] = function(block) {
    const value_speed = Blockly.C.valueToCode(block, 'SPEED', Blockly.C.ORDER_ATOMIC);
    return `Serial.begin(${value_speed});\n`;
};

Blockly.C['serial_end'] = function(block) {
    return 'Serial.end();\n';
};

Blockly.C['serial_print'] = function(block) {
    const value_output = Blockly.C.valueToCode(block, 'OUTPUT', Blockly.C.ORDER_ATOMIC);
    return `Serial.print(${value_output});\n`;
};

Blockly.C['serial_print_line'] = function(block) {
    const value_output = Blockly.C.valueToCode(block, 'OUTPUT', Blockly.C.ORDER_ATOMIC);
    return `Serial.println(${value_output});\n`;
};

Blockly.C['serial_read'] = function(block) {
    return ['Serial.read()', Blockly.C.ORDER_ATOMIC];
};
