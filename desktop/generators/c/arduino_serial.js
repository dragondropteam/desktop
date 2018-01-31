/**
 * All content copyright DigiPen institute of Technology
 * Created by lukepowell on 5/3/17.
 */
Blockly.C['serial_begin'] = function (block) {
    const value_speed = Blockly.C.valueToCode(block, 'SPEED', Blockly.C.ORDER_ATOMIC);
    return `Serial.begin(${value_speed});\n`;
};

Blockly.C['serial_end'] = function (block) {
    return 'Serial.end();\n';
};

Blockly.C['serial_print'] = function (block) {
    const value_output = Blockly.C.valueToCode(block, 'OUTPUT', Blockly.C.ORDER_ATOMIC);
    return `Serial.print(${value_output});\n`;
};

Blockly.C['serial_print_line'] = function (block) {
    const value_output = Blockly.C.valueToCode(block, 'OUTPUT', Blockly.C.ORDER_ATOMIC);
    return `Serial.println(${value_output});\n`;
};

Blockly.C['serial_read'] = function (block) {
    return ['Serial.read()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['serial_available'] = function () {
    return ['Serial.available()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['serial_available_write'] = function () {
    return ['Serial.availableForWrite()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['serial_find'] = function (block) {
    const target = Blockly.C.valueToCode(block, 'TARGET', Blockly.C.ORDER_ATOMIC);
    return [`Serial.find(${target})`, Blockly.C.ORDER_ATOMIC];
};


Blockly.C['serial_find_until'] = function (block) {
    const target = Blockly.C.valueToCode(block, 'TARGET', Blockly.C.ORDER_ATOMIC);
    const terminal = Blockly.C.valueToCode(block, 'terminal', Blockly.C.ORDER_ATOMIC);
    return [`Serial.find(${target}, ${terminal})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['serial_flush'] = function () {
    return 'Serial.flush();\n';
};

Blockly.C['serial_parse_int'] = function () {
    return ['Serial.parseInt()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['serial_parse_float'] = function () {
    return ['Serial.parseFloat()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['serial_peek'] = function () {
    return ['Serial.peek()', Blockly.C.ORDER_ATOMIC];
};

Blockly.C['serial_read_bytes'] = function (block) {
    const buffer = Blockly.C.valueToCode(block, 'BUFFER', Blockly.C.ORDER_ATOMIC) || 'nullptr';
    const length = Blockly.C.valueToCode(block, 'LENGTH', Blockly.C.ORDER_ATOMIC) || '0';
    return [`Serial.readBytes(${buffer}, ${length})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['serial_read_bytes_until'] = function (block) {
    const buffer = Blockly.C.valueToCode(block, 'BUFFER', Blockly.C.ORDER_ATOMIC) || 'nullptr';
    const length = Blockly.C.valueToCode(block, 'LENGTH', Blockly.C.ORDER_ATOMIC) || '0';
    const terminal = Blockly.C.valueToCode(block, 'TERMINAL', Blockly.C.ORDER_ATOMIC) || '0';
    return [`Serial.readBytes(${terminal}, ${buffer}, ${length})`, Blockly.C.ORDER_ATOMIC];
};

Blockly.C['serial_set_timeout'] = function (block) {
  const milliseconds = Blockly.C.valueToCode(block, 'MILLISECONDS', Blockly.C.ORDER_ATOMIC) || '0';
  return `Serial.setTimeout(${milliseconds});\n`;
};
