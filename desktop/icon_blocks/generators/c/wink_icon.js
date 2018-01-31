Blockly.C['seteyesred_icon'] = Blockly.C['seteyesred'];
Blockly.C['seteyesgreen_icon'] = Blockly.C['seteyesgreen'];
Blockly.C['seteyesblue_icon'] = Blockly.C['seteyesblue'];
Blockly.C['seteyespink_icon'] = Blockly.C['seteyespink'];
Blockly.C['seteyesyellow_icon'] = Blockly.C['seteyesyellow'];
Blockly.C['seteyescyan_icon'] = Blockly.C['seteyescyan'];
Blockly.C['seteyesorange_icon'] = Blockly.C['seteyesorange'];
Blockly.C['seteyeswhite_icon'] = Blockly.C['seteyeswhite'];

Blockly.C['setleftred_icon'] = Blockly.C['setleftred'];
Blockly.C['setleftgreen_icon'] = Blockly.C['setleftgreen'];
Blockly.C['setleftblue_icon'] = Blockly.C['setleftblue'];
Blockly.C['setleftpink_icon'] = Blockly.C['setleftpink'];
Blockly.C['setleftyellow_icon'] = Blockly.C['setleftyellow'];
Blockly.C['setleftcyan_icon'] = Blockly.C['setleftcyan'];
Blockly.C['setleftorange_icon'] = Blockly.C['setleftorange'];
Blockly.C['setleftwhite_icon'] = Blockly.C['setleftwhite'];

Blockly.C['setrightred_icon'] = Blockly.C['setrightred'];
Blockly.C['setrightgreen_icon'] = Blockly.C['setrightgreen'];
Blockly.C['setrightblue_icon'] = Blockly.C['setrightblue'];
Blockly.C['setrightpink_icon'] = Blockly.C['setrightpink'];
Blockly.C['setrightyellow_icon'] = Blockly.C['setrightyellow'];
Blockly.C['setrightcyan_icon'] = Blockly.C['setrightcyan'];
Blockly.C['setrightorange_icon'] = Blockly.C['setrightorange'];
Blockly.C['setrightwhite_icon'] = Blockly.C['setrightwhite'];

Blockly.C['turnlefteyeoff_icon'] = Blockly.C['turnlefteyeoff'];
Blockly.C['turnrighteyeoff_icon'] = Blockly.C['turnrighteyeoff'];
Blockly.C['turneyesoff_icon'] = Blockly.C['turneyesoff'];

Blockly.C['seteyesrgb_icon'] = Blockly.C['seteyesrgb'];
Blockly.C['setleftrgb_icon'] = Blockly.C['setleftrgb'];
Blockly.C['setrightrgb_icon'] = Blockly.C['setrightrgb'];

Blockly.C['set_left_eye_icon'] = Blockly.C['set_left_eye'];
Blockly.C['set_right_eye_icon'] = Blockly.C['set_right_eye'];
Blockly.C['set_eyes_icon'] = Blockly.C['set_eyes'];


// Light Effects, Icon only - hence the lack of linkup.
Blockly.C['light_effect_police_icon'] = function(block) {
    const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
    return `lightEffectPolice( ${duration} );\n`;
};

Blockly.C['light_effect_disco_icon'] = function(block) {
    const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
    return `lightEffectDisco( ${duration} );\n`;
};

Blockly.C['light_effect_rainbow_icon'] = function(block) {
    const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
    return `lightEffectRainbow( ${duration} );\n`;
};

Blockly.C['light_effect_fireworks_icon'] = function(block) {
    const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
    return `lightEffectFireworks( ${duration} );\n`;
};




Blockly.C['sensors_line_follow_icon'] = function(block) {
    const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
    return `sensorLineFollow( ${duration} );\n`;
};
