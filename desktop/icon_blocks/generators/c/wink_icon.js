Blockly.C['seteyesred_icon'] = Blockly.C['seteyesred'];
Blockly.C['seteyesgreen_icon'] = Blockly.C['seteyesgreen'];
Blockly.C['seteyesblue_icon'] = Blockly.C['seteyesblue'];
Blockly.C['seteyespurple_icon'] = Blockly.C['seteyespurple'];
Blockly.C['seteyespink_icon'] = Blockly.C['seteyespink'];
Blockly.C['seteyesyellow_icon'] = Blockly.C['seteyesyellow'];
Blockly.C['seteyescyan_icon'] = Blockly.C['seteyescyan'];
Blockly.C['seteyesorange_icon'] = Blockly.C['seteyesorange'];
Blockly.C['seteyeswhite_icon'] = Blockly.C['seteyeswhite'];

Blockly.C['setleftred_icon'] = Blockly.C['setleftred'];
Blockly.C['setleftgreen_icon'] = Blockly.C['setleftgreen'];
Blockly.C['setleftblue_icon'] = Blockly.C['setleftblue'];
Blockly.C['setleftpurple_icon'] = Blockly.C['setleftpurple'];
Blockly.C['setleftpink_icon'] = Blockly.C['setleftpink'];
Blockly.C['setleftyellow_icon'] = Blockly.C['setleftyellow'];
Blockly.C['setleftcyan_icon'] = Blockly.C['setleftcyan'];
Blockly.C['setleftorange_icon'] = Blockly.C['setleftorange'];
Blockly.C['setleftwhite_icon'] = Blockly.C['setleftwhite'];

Blockly.C['setrightred_icon'] = Blockly.C['setrightred'];
Blockly.C['setrightgreen_icon'] = Blockly.C['setrightgreen'];
Blockly.C['setrightblue_icon'] = Blockly.C['setrightblue'];
Blockly.C['setrightpurple_icon'] = Blockly.C['setrightpurple'];
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

// Beginners Movements
Blockly.C['motors_beginner_rotate_left_icon'] = function(block) {
    const degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
    return `turnLeftDegrees( ${degrees} );\n`;
};
Blockly.C['sensors_line_follow_icon'] = function(block) {
    const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    const showEyes = block.getFieldValue('SHOW_EYES') == 'TRUE';
    return `sensorLineFollow( ${speed}, ${showEyes} );\n`;
};
// Obstacle related
Blockly.C['obstacle_avoid_icon'] = function(block)    { return 'avoidObstacles();\n'; };
Blockly.C['obstacle_approach_icon'] = function(block) { return 'approachObstacles();\n'; };

Blockly.C['motors_beginner_rotate_right_icon'] = function(block) {
    const degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
    return `turnRightDegrees( ${degrees} );\n`;
};


function moveWithDuration(block, functionName) {
    const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
    return `${functionName}(${duration});\n`;
}

Blockly.C['motors_beginner_forward_slow_icon'] = function(block){ return moveWithDuration(block, 'forwardSlow') };
Blockly.C['motors_beginner_forward_medium_icon'] = function(block){ return moveWithDuration(block, 'forwardMedium') };
Blockly.C['motors_beginner_forward_fast_icon'] = function(block){ return moveWithDuration(block, 'forwardFast') };
Blockly.C['motors_beginner_backward_slow_icon'] = function(block){ return moveWithDuration(block, 'backwardSlow') };
Blockly.C['motors_beginner_backward_medium_icon'] = function(block){ return moveWithDuration(block, 'backwardMedium') };
Blockly.C['motors_beginner_backward_fast_icon'] = function(block){ return moveWithDuration(block, 'backwardFast') };



Blockly.C['sensors_line_avoid_icon'] = function(block) {
    const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    const showEyes = block.getFieldValue('SHOW_EYES') == 'TRUE';
    return `sensorLineAvoid( ${speed}, ${showEyes} );\n`;
};

Blockly.C['bestill_icon'] = Blockly.C['bestill'];