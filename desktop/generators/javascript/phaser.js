/**
 * Created by lukepowell on 12/15/16.
 *
 * All content Copyright DigiPen Institute of Technology 2016
 */

//region MEMBER_FUNCTIONS
/**
 * Generic method to translate a block for a set_<object>_<type>_member block
 * @param block A block containing two value inputs OBJECT and VALUE representing the object the member is on and the value to set it to and a field ELEMENT to determine the member
 * @return {[string,*]}
 */
function getMember(block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const element = block.getFieldValue('ELEMENT');
    return [`${object}.${element}`, Blockly.JavaScript.ORDER_ATOMIC];
}

function getField(block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const field = block.getFieldValue('FIELD');
    return [`${object}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
}

/**
 * Generic method to translate a block for a get_<object>_<type>_member block
 * @param block A block containing a value input OBJECT representing the object the member is on and a field ELEMENT to determine the member
 * @return {string}
 */
function setMember(block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const element = block.getFieldValue('ELEMENT');
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.${element} = ${value};\n`;
}

//endregion
//region STARTUP
Blockly.JavaScript['phaser_simple_init'] = function (block) {

    Blockly.JavaScript.addReservedWords('game, preload, create, update');

    const number_width = block.getFieldValue('WIDTH');
    const number_height = block.getFieldValue('HEIGHT');
    const statements_preload = Blockly.JavaScript.statementToCode(block, 'PRELOAD');
    const statements_create = Blockly.JavaScript.statementToCode(block, 'CREATE');
    const statements_update = Blockly.JavaScript.statementToCode(block, 'UPDATE');

    const phaser = `var game = new Phaser.Game(${number_width}, ${number_height}, Phaser.AUTO, '', {preload: preload, create: create, update: update});\n\n`;
    const preload = `function preload() {\n${statements_preload}\n}\n\n`;
    const create = `function create() {\n  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;\n  this.scale.pageAlignHorizontally = true;\n  this.scale.pageAlignVertically = true;\n  this.scale.updateLayout( true );\n${statements_create}\n}\n\n`;
    const update = `function update() {\n${statements_update}\n}\n\n`;
    return phaser + preload + create + update;
};

Blockly.JavaScript['start_phaser_for_states'] = function (block) {
    const number_width = block.getFieldValue('WIDTH');
    const number_height = block.getFieldValue('HEIGHT');
    return `var game = new Phaser.Game(${number_width}, ${number_height}, Phaser.AUTO, '');\n`;
};

Blockly.JavaScript['center_and_stretch'] = function (block) {
    return 'game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;\n  this.scale.pageAlignHorizontally = true;\n  this.scale.pageAlignVertically = true;\n  this.scale.updateLayout( true );\n'
};
//endregion

//region STEPPING

Blockly.JavaScript['enable_step'] = function (block) {
    return `game.enableStep();\n`;
};

Blockly.JavaScript['disable_step'] = function (block) {
    return `game.disableStep();\n`;
};

Blockly.JavaScript['step'] = function (block) {
    return `game.step();\n`;
};

//endregion

//region DRAWPRIMITIVES

Blockly.JavaScript['create_graphics_object'] = function (block) {
    const value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    const value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Change ORDER_NONE to the correct strength.
    return [`game.add.graphics(${value_x}, ${value_y})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['draw_shapes_with_colour'] = function (block) {
    let value_colour = Blockly.JavaScript.valueToCode(block, 'colour', Blockly.JavaScript.ORDER_ATOMIC);
    const variable_graphics_object_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('graphics_object_name'), Blockly.Variables.NAME_TYPE);
    const statements_shape_draw_functions = Blockly.JavaScript.statementToCode(block, 'shape draw functions');
    const toHexColorFunc = Blockly.JavaScript.provideFunction_(
        'toHexColor',
        ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
        '(color) {',
            'return color.replace("#", "0x");',
            '}']);

    return `${variable_graphics_object_name}.beginFill(${toHexColorFunc}(${value_colour}));\n
${statements_shape_draw_functions}\n
${variable_graphics_object_name}.endFill();\n`;
};

Blockly.JavaScript['draw_rectangle'] = function (block) {
    const value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    const value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    const value_w = Blockly.JavaScript.valueToCode(block, 'w', Blockly.JavaScript.ORDER_ATOMIC);
    const value_h = Blockly.JavaScript.valueToCode(block, 'h', Blockly.JavaScript.ORDER_ATOMIC);
    const variable_graphics_object_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('graphics_object_name'), Blockly.Variables.NAME_TYPE);

    return `${variable_graphics_object_name}.drawRect(${value_x}, ${value_y}, ${value_w}, ${value_h});\n`;
};

Blockly.JavaScript['draw_circle'] = function (block) {
    const value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    const value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    const value_diameter = Blockly.JavaScript.valueToCode(block, 'DIAMETER', Blockly.JavaScript.ORDER_ATOMIC);
    const variable_graphics_object_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('graphics_object_name'), Blockly.Variables.NAME_TYPE);

    return `${variable_graphics_object_name}.drawCircle(${value_x}, ${value_y}, ${value_diameter});\n`;
};


//endregion

//region SPRITE/IMAGE
Blockly.JavaScript['create_image'] = function (block) {
    const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_NONE);
    const source = Blockly.JavaScript.valueToCode(block, 'SRC', Blockly.JavaScript.ORDER_NONE);

    return `game.load.image(${tag}, ${source});\n`;
};

Blockly.JavaScript['addspritewithatlas'] = function (block) {
    const value_tag = Blockly.JavaScript.valueToCode(block, 'tag', Blockly.JavaScript.ORDER_ATOMIC);
    const value_text_source = Blockly.JavaScript.valueToCode(block, 'text_source', Blockly.JavaScript.ORDER_ATOMIC);
    const value_text_xmlsource = Blockly.JavaScript.valueToCode(block, 'text_xmlsource', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.load.atlasXML(${value_tag}, ${value_text_source}, ${value_text_xmlsource})\n`;
};

Blockly.JavaScript['imagesubtextureatlas'] = function (block) {
    const value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    const value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    const value_spritesource = Blockly.JavaScript.valueToCode(block, 'spritesource', Blockly.JavaScript.ORDER_ATOMIC);
    const value_xmlsubtexture = Blockly.JavaScript.valueToCode(block, 'xmlsubtexture', Blockly.JavaScript.ORDER_ATOMIC);
    return [`game.add.sprite(${value_x}, ${value_y}, ${value_spritesource}, ${value_xmlsubtexture} )`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['add_image'] = function (block) {
    const x_pos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
    const y_pos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
    const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);

    return [`game.add.sprite(${x_pos}, ${y_pos}, ${tag})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['add_animation'] = function (block) {
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('object'), Blockly.Variables.NAME_TYPE);
    const text_name = block.getFieldValue('NAME');
    const value_frames = Blockly.JavaScript.valueToCode(block, 'FRAMES', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const number_fps = block.getFieldValue('FPS');
    const checkbox_loop = block.getFieldValue('LOOP') == 'TRUE';
    return `${variable_object}.animations.add('${text_name}', ${value_frames}, ${number_fps}, ${checkbox_loop});\n`;
};

// These blocks move towards using value input verus variable fields, this allows the students to for example loop through
// a list of objects they want an animation to start playing on
Blockly.JavaScript['add_animation_vi'] = function (block) {
    const variable_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const text_name = block.getFieldValue('NAME');
    const value_frames = Blockly.JavaScript.valueToCode(block, 'FRAMES', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const number_fps = block.getFieldValue('FPS');
    const checkbox_loop = block.getFieldValue('LOOP') == 'TRUE';
    return `${variable_object}.animations.add('${text_name}', ${value_frames}, ${number_fps}, ${checkbox_loop});\n`;
};

Blockly.JavaScript['create_sprite_sheet'] = function (block) {
    const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
    const source = Blockly.JavaScript.valueToCode(block, 'SRC', Blockly.JavaScript.ORDER_NONE);
    const number_frame_width = block.getFieldValue('FRAME_WIDTH');
    const number_frame_height = block.getFieldValue('FRAME_HEIGHT');
    return `game.load.spritesheet(${tag}, ${source}, ${number_frame_width}, ${number_frame_height});\n`;
};

Blockly.JavaScript['add_child'] = function (block) {
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
    return `${variable_object}.addChild(${value_child});\n`;
};

Blockly.JavaScript['add_child_vi'] = function (block) {
    const variable_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
    return `${variable_object}.addChild(${value_child});\n`;
};

Blockly.JavaScript['add_child_at'] = function (block) {
    const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    const value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
    return `${variable_object}.addChildAt(${value_child}, ${value_index});\n`;
};

Blockly.JavaScript['add_child_at_vi'] = function (block) {
    const child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return `${object}.addChildAt(${child}, ${index});\n`;
};

Blockly.JavaScript['align_in'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const container = Blockly.JavaScript.valueToCode(block, 'CONTAINER', Blockly.JavaScript.ORDER_ATOMIC);
    const dropdown_position = block.getFieldValue('POSITION');
    const offset_x = Blockly.JavaScript.valueToCode(block, 'OFFSETX', Blockly.JavaScript.ORDER_ATOMIC);
    const offset_y = Blockly.JavaScript.valueToCode(block, 'OFFSETY', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.alignIn(${container}, Phaser.${dropdown_position}, ${offset_x}, ${offset_y});\n`;
};

Blockly.JavaScript['align_to'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const container = Blockly.JavaScript.valueToCode(block, 'CONTAINER', Blockly.JavaScript.ORDER_ATOMIC);
    const dropdown_position = block.getFieldValue('POSITION');
    const offset_x = Blockly.JavaScript.valueToCode(block, 'OFFSETX', Blockly.JavaScript.ORDER_ATOMIC);
    const offset_y = Blockly.JavaScript.valueToCode(block, 'OFFSETY', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.alignTo(${container}, Phaser.${dropdown_position}, ${offset_x}, ${offset_y});\n`;
};

Blockly.JavaScript['bring_to_top'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.bringToTop();\n`;
};

Blockly.JavaScript['check_world_bounds'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.checkWorldBounds = ${value_bool};\n`;
};

/**
 * @deprecated
 * @param block
 * @return {[string,*]}
 */
Blockly.JavaScript['contains'] = function (block) {
    const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    return [`${variable_object}.contains(${value_child})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['contains_vi'] = function (block) {
    const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${object}.contains(${value_child})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['crop'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_rectangle = Blockly.JavaScript.valueToCode(block, 'RECTANGLE', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.crop(${value_rectangle});\n`;
};

Blockly.JavaScript['clear_cropping'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.crop();\n`;
};

Blockly.JavaScript['destroy_sprite'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.destroy(${value_bool});\n`;
};

Blockly.JavaScript['get_child_at'] = function (block) {
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    const value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${variable_object}.getChildAt(${value_index})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_child_at_vi'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${object}.getChildAt(${value_index})`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * @deprecated
 * @param block
 * @return {[string,*]}
 */
Blockly.JavaScript['get_child_index'] = function (block) {
    const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    return [`${variable_object}.getChildIndex(${value_child})`, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['get_child_index_vi'] = function (block) {
    const child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${object}.getChildIndex(${child})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['load_texture'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_texture = Blockly.JavaScript.valueToCode(block, 'TEXTURE', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.loadTexture(${value_texture});\n`;
};

Blockly.JavaScript['move_down'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.moveDown();\n`;
};

Blockly.JavaScript['move_up'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.moveUp();\n`;
};

Blockly.JavaScript['sprite_overlap'] = function (block) {
    const value_sprite_a = Blockly.JavaScript.valueToCode(block, 'SPRITEA', Blockly.JavaScript.ORDER_ATOMIC);
    const value_sprite_b = Blockly.JavaScript.valueToCode(block, 'SPRITEB', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${value_sprite_a}.overlap(${value_sprite_b})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['out_of_bounds_kill'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.outOfBoundsKill = ${value_bool};\n`;
};

Blockly.JavaScript['out_of_bounds_faint'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_bool = Blockly.JavaScript.valueToCode(block, 'BOOL', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.outOfBoundsFaint = ${value_bool};\n`;
};

/**
 * @deprecated
 * @param block
 * @return {string}
 */
Blockly.JavaScript['remove_child'] = function (block) {
    const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    return `${variable_object}.removeChild(${value_child});\n`;
};

/**
 * @deprecated
 * @param block
 * @return {string}
 */
Blockly.JavaScript['remove_child_at'] = function (block) {
    const value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    return `${variable_object}.removeChildAt(${value_index});\n`;
};

/**
 * @deprecated
 * @param block
 * @return {string}
 */
Blockly.JavaScript['remove_children'] = function (block) {
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    return `${variable_object}.removeChildren();\n`;
};

Blockly.JavaScript['remove_child_vi'] = function (block) {
    const child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.removeChild(${child});\n`;
};

Blockly.JavaScript['remove_child_at_vi'] = function (block) {
    const value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.removeChildAt(${value_index});\n`;
};

Blockly.JavaScript['remove_children_vi'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.removeChildren();\n`;
};

Blockly.JavaScript['reset_frame'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.resetFrame();\n`;
};

Blockly.JavaScript['resize_frame'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_parent = Blockly.JavaScript.valueToCode(block, 'PARENT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
    const value_height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.resetFrame(${value_parent}, ${value_width}, ${value_height});\n`;
};

Blockly.JavaScript['send_to_back'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.sendToBack();\n`;
};

/**
 * @deprecated
 * @param block
 * @return {string}
 */
Blockly.JavaScript['set_child_index'] = function (block) {
    const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
    const variable_parent = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('PARENT'), Blockly.Variables.NAME_TYPE);
    const value_index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
    return `${variable_parent}.setChildIndex(${value_child}, ${value_index});\n`;
};

Blockly.JavaScript['set_child_index_vi'] = function (block) {
    const child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.setChildIndex(${child}, ${index});\n`;
};

Blockly.JavaScript['set_sprite_frame'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_frame = Blockly.JavaScript.valueToCode(block, 'FRAME', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.setFrame(${value_frame});\n`;
};

Blockly.JavaScript['set_scale_min_max'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const minX = Blockly.JavaScript.valueToCode(block, 'MINX', Blockly.JavaScript.ORDER_ATOMIC);
    const minY = Blockly.JavaScript.valueToCode(block, 'MINY', Blockly.JavaScript.ORDER_ATOMIC);
    const maxX = Blockly.JavaScript.valueToCode(block, 'MAXX', Blockly.JavaScript.ORDER_ATOMIC);
    const maxY = Blockly.JavaScript.valueToCode(block, 'MAXY', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.setScaleMinMax(${minX}, ${minY}, ${maxX}, ${maxY});\n`;
};

Blockly.JavaScript['clear_scale_min_max'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.setScaleMinMax();\n`;
};

Blockly.JavaScript['set_texture'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_texture = Blockly.JavaScript.valueToCode(block, 'TEXTURE', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.setTexture(${value_texture});\n`;
};

Blockly.JavaScript['swap_children'] = function (block) {
    const value_parent = Blockly.JavaScript.valueToCode(block, 'PARENT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
    const value_child2 = Blockly.JavaScript.valueToCode(block, 'CHILD2', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_parent}.swapChildren(${value_child}, ${value_child2});\n`;
};

//endregion

//region GROUPS
Blockly.JavaScript['create_group'] = function (block) {
    return [`game.add.group()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['create_object_in_group_with_frame'] = function (block) {
    const xPos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const yPos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const frame = Blockly.JavaScript.valueToCode(block, 'FRAME', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const tag = block.getFieldValue('TAG');
    const group = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('GROUP'), Blockly.Variables.NAME_TYPE);
    return [`${group}.create(${xPos}, ${yPos}, '${tag}, ${frame}')`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['create_object_in_group_with_frame_vi'] = function (block) {
    const xPos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const yPos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const frame = Blockly.JavaScript.valueToCode(block, 'FRAME', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${group}.create(${xPos}, ${yPos}, ${tag}, ${frame})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['call_function_on_group'] = function (block) {
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    const func_name = Blockly.JavaScript.valueToCode(block, 'FUNCTION', Blockly.JavaScript.ORDER_ATOMIC);

    return `${group}.forEachAlive(${func_name}, this);\n`;
};

Blockly.JavaScript['add_to_group'] = function (block) {
    const newItem = Blockly.JavaScript.valueToCode(block, 'NEW_ITEM', Blockly.JavaScript.ORDER_ATOMIC);
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    return `${group}.add(${newItem});\n`;
};

Blockly.JavaScript['remove_from_group'] = function (block) {
    const child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    const destroy = block.getFieldValue('DESTROY') == 'TRUE';
    return `${group}.remove(${child}, ${destroy});\n`;
};

Blockly.JavaScript['group_contains'] = function (block) {
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    const child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${group}.contains(${child})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['group_count_alive_dead'] = function (block) {
    const state = block.getFieldValue('STATE');
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${group}.count${state}()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['destroy_group'] = function (block) {
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    const handleChildren = block.getFieldValue('HANDLE_CHILDREN') == 'TRUE';
    return `${group}.destroy(${handleChildren});\n`;
};

Blockly.JavaScript['group_get_all'] = function (block) {
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${group}.getAll()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['group_get_at'] = function (block) {
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    const index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${group}.getAt(${index})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['group_get_closest_to'] = function (block) {
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${group}.getClosestTo(${object})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['group_get_first_alive_dead'] = function (block) {
    const mode = block.getFieldValue('MODE');
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${group}.getFirst${mode}()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['group_get_first_alive_fainted'] = function (block) {
    const mode = block.getFieldValue('MODE');
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${group}.getFirst${mode}()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['group_get_random'] = function (block) {
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${group}.getRandom()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['group_get_random_exists'] = function (block) {
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${group}.getRandomExists()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['group_remove_all'] = function (block) {
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    const destroyChildren = block.getFieldValue('DESTROY_CHILDREN') == 'TRUE';
    return `${group}.removeAll(${destroyChildren});\n`;
};

Blockly.JavaScript['add_to_world'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.world.add(${object});\n`;
};
//endregion

//region PHYSICS

//region DYNAMICS
Blockly.JavaScript['physics_move_to_location'] = function(block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.physics.arcade.moveToXY(${object}, ${x}, ${y}, ${speed}, ${time});\n`;
};

Blockly.JavaScript['physics_move_to_pointer'] = function(block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.physics.arcade.moveToPointer(${object}, ${speed}, ${pointer}, ${time});\n`;
};

Blockly.JavaScript['physics_accelerate_to_location'] = function(block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x_location = Blockly.JavaScript.valueToCode(block, 'X_LOCATION', Blockly.JavaScript.ORDER_ATOMIC);
  const y_location = Blockly.JavaScript.valueToCode(block, 'Y_LOCATION', Blockly.JavaScript.ORDER_ATOMIC);
  const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  const x_max = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_max = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.physics.arcade.accelerateToXY(${object}, ${x_location}, ${y_location}, ${speed}, ${x_max}, ${y_max});\n`;
};

Blockly.JavaScript['physics_accelerate_to_pointer'] = function(block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);
  const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  const x_max = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_max = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.physics.arcade.accelerateToPointer(${object}, ${pointer}, ${speed}, ${x_max}, ${y_max});\n`;
};

Blockly.JavaScript['physics_accelerate_to_object'] = function(block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);
  const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
  const x_max = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_max = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.physics.arcade.accelerateToObject(${object}, ${target}, ${speed}, ${x_max}, ${y_max});\n`;
};
//physics SET blocks
Blockly.JavaScript['set_physics_boolean_field']
  = Blockly.JavaScript['set_physics_point_field']
  = function (block) {
  const field = block.getFieldValue('FIELD');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.physics.arcade.${field} = ${value};\n`;
};

//physics GET blocks
Blockly.JavaScript['get_physics_boolean_field']
  = Blockly.JavaScript['get_physics_point_field']
  = function (block) {
  const field = block.getFieldValue('FIELD');
  return [`game.physics.arcade.${field}`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
//endregion

//region COLLISION
Blockly.JavaScript['check_collision'] = function(block) {
  var direction = block.getFieldValue('DIRECTION');
  var collide = block.getFieldValue('COLLIDE') == 'TRUE';

  return `game.physics.arcade.checkCollision.${direction} = ${collide};\n`;
};

Blockly.JavaScript['get_objects_under_pointer'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);

  return [`game.physics.arcade.getObjectsUnderPointer(${pointer}, ${group})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['collide_with_arrow_function'] = function (block) {
    const objectA = Blockly.JavaScript.valueToCode(block, 'OBJECTA', Blockly.JavaScript.ORDER_ATOMIC);
    const objectB = Blockly.JavaScript.valueToCode(block, 'OBJECTB', Blockly.JavaScript.ORDER_ATOMIC);
    const statements_callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');// TODO: Assemble JavaScript into code variable.
    return `game.physics.arcade.collide(${objectA}, ${objectB}, (${objectA}, ${objectB}) => {
        ${statements_callback}
    });\n`;
};

Blockly.JavaScript['get_objects_at_location'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.getObjectsAtLocation(${x}, ${y}, ${group})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['collision_get_objects_at_location_function'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const functionName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);

  return `game.physics.arcade.getObjectsAtLocation(${x}, ${y}, ${group}, ${functionName});\n`;
};

Blockly.JavaScript['physics_intersects'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.intersects(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

//endregion

//region PHYSICS_STARTUP
Blockly.JavaScript['start_physics'] = function (block) {
    const dropdown_system = block.getFieldValue('SYSTEM');
    return `game.physics.startSystem(Phaser.Physics.${dropdown_system});\n`
};

Blockly.JavaScript['start_arcade_physics'] = function () {
    return 'game.physics.startSystem(Phaser.Physics.ARCADE);\n';
};

Blockly.JavaScript['enable_body_group'] = function (block) {
    const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('object'), Blockly.Variables.NAME_TYPE);
    return `${object}.enableBody = true;\n`;
};

Blockly.JavaScript['enable_body_group_vi'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.enableBody = true;\n`;
};

Blockly.JavaScript['enable_arcade_physics_for_object'] = function (block) {
    const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('object'), Blockly.Variables.NAME_TYPE);
    return `game.physics.arcade.enable(${object});\n`;
};

Blockly.JavaScript['enable_arcade_physics_for_object_vi'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.physics.arcade.enable(${object});\n`;
};
//endregion

//region UTIL

Blockly.JavaScript['physics_closest'] = function(block) {
  const source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC);
  const target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);

  return [`game.physics.arcade.closest(${source}, ${target})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['physics_farthest'] = function(block) {
  const source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC);
  const target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);

  return [`game.physics.arcade.farthest(${source}, ${target})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['physics_distance_between'] = function(block) {
  const source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC);
  const target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.distanceBetween(${source}, ${target})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['physics_distance_to_pointer'] = function(block) {
  const source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC);
  const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.distanceToPointer(${source}, ${pointer})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['physics_distance_to_location'] = function(block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.distanceToXY(${object}, ${x}, ${y})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
//endregion

//region BODY

Blockly.JavaScript['debug_body'] = function (block) {
    const body = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_ATOMIC);

    return `game.debug.body(${body});\n`;
};

Blockly.JavaScript['stop_body'] = function (block) {
    const object_name = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_ATOMIC);

    return `${object_name}.body.stop();\n`;
};



Blockly.JavaScript['set_body_field_point'] = function (block) {
    const field = block.getFieldValue('FIELD');
    const element = block.getFieldValue('ELEMENT');
    const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return `${object}.body.${field}.${element} = ${value};\n`;
};


Blockly.JavaScript['set_body_field_point_vi'] = function (block) {
    const field = block.getFieldValue('FIELD');
    const element = block.getFieldValue('ELEMENT');
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return `${object}.body.${field}.${element} = ${value};\n`;
};


Blockly.JavaScript['set_body_field_point_class_vi'] = function (block) {
    const field = block.getFieldValue('FIELD');
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC) || 'new Point()';
    return `${object}.body.${field} = ${point};\n`;
};

Blockly.JavaScript['get_body_field_point_class'] = function (block) {
    const field = block.getFieldValue('FIELD');
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    return [`${object}.body.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set_body_boolean_field'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const element = block.getFieldValue('ELEMENT');
    const value = block.getFieldValue('VALUE') == 'TRUE';
    return `${object}.body.${element} = ${value};\n`;
};

Blockly.JavaScript['set_body_boolean_field_vi'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const element = block.getFieldValue('ELEMENT');
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.body.${element} = ${value};\n`;
};

Blockly.JavaScript['get_body_boolean_field'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const element = block.getFieldValue('ELEMENT');
    return [`${object}.body.${element}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set_body_numeric_field'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const element = block.getFieldValue('ELEMENT');
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return `${object}.body.${element} = ${value};\n`;
};

Blockly.JavaScript['get_body_numeric_field'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const element = block.getFieldValue('ELEMENT');
    return [`${object}.body.${element}`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

Blockly.JavaScript['create_object_in_group'] = function (block) {
    const xPos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const yPos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const tag = block.getFieldValue('TAG');
    const group = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('GROUP'), Blockly.Variables.NAME_TYPE);
    return [`${group}.create(${xPos}, ${yPos}, '${tag}')`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['create_object_in_group_vi'] = function (block) {
    const xPos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const yPos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${group}.create(${xPos}, ${yPos}, ${tag})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['collide'] = function (block) {
    const variable_lhs = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('LHS'), Blockly.Variables.NAME_TYPE);
    const variable_rhs = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RHS'), Blockly.Variables.NAME_TYPE);
    return `game.physics.arcade.collide(${variable_lhs}, ${variable_rhs});\n`;
};

Blockly.JavaScript['collide_vi'] = function (block) {
    const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
    const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.physics.arcade.collide(${lhs}, ${rhs});\n`;
};

Blockly.JavaScript['set_immovable'] = function (block) {
    const body = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('BODY'), Blockly.Variables.NAME_TYPE);
    const immovable = block.getFieldValue('IMMOVABLE') == 'TRUE';
    return `${body}.body.immovable = ${immovable};\n`;
};

/**
 * @deprecated
 * @param block
 * @returns {*[]}
 */
Blockly.JavaScript['is_body_touching'] = function (block) {
    const body = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('BODY'), Blockly.Variables.NAME_TYPE);
    const direction = block.getFieldValue('DIRECTION');
    return [`${body}.body.touching.${direction}`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['is_body_touching_vi'] = function (block) {
    const body = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_ATOMIC);
    const direction = block.getFieldValue('DIRECTION');
    return [`${body}.body.touching.${direction}`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @returns {string}
 */
Blockly.JavaScript['collide_with_world_bounds'] = function (block) {
    const variable_body = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('BODY'), Blockly.Variables.NAME_TYPE);
    const collide = block.getFieldValue('COLLIDE') == 'TRUE';
    return `${variable_body}.body.collideWorldBounds = ${collide};\n`;
};

Blockly.JavaScript['collide_with_world_bounds_vi'] = function (block) {
    const body = Blockly.JavaScript.valueToCode(block, 'BODY', Blockly.JavaScript.ORDER_ATOMIC);
    const collide = block.getFieldValue('COLLIDE') == 'TRUE';
    return `${body}.body.collideWorldBounds = ${collide};\n`;
};

Blockly.JavaScript['check_overlap'] = function (block) {
    const lhs = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('LHS'), Blockly.Variables.NAME_TYPE);
    const rhs = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('RHS'), Blockly.Variables.NAME_TYPE);
    const functionName = block.getFieldValue('NAME');
    return `game.physics.arcade.overlap(${lhs}, ${rhs}, ${functionName}, null, this);\n`;
};

Blockly.JavaScript['check_overlap_vi'] = function (block) {
    const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
    const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
    const functionName = block.getFieldValue('NAME');
    return `game.physics.arcade.overlap(${lhs}, ${rhs}, ${functionName}, null, this);\n`;
};

Blockly.JavaScript['check_overlap_vi_procedure_field'] = function (block) {
    const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
    const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
    const functionName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    return `game.physics.arcade.overlap(${lhs}, ${rhs}, ${functionName}, null, this);\n`;
};

Blockly.JavaScript['overlap_boolean'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.overlap(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['collide_function_field'] = function (block) {
    const lhs = Blockly.JavaScript.valueToCode(block, 'OBJECTA', Blockly.JavaScript.ORDER_ATOMIC);
    const rhs = Blockly.JavaScript.valueToCode(block, 'OBJECTB', Blockly.JavaScript.ORDER_ATOMIC);
    const functionName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
    return `game.physics.arcade.collide(${lhs}, ${rhs}, ${functionName});\n`;
};

Blockly.JavaScript['collide_boolean'] = function (block) {
  const lhs = Blockly.JavaScript.valueToCode(block, 'OBJECTA', Blockly.JavaScript.ORDER_ATOMIC);
  const rhs = Blockly.JavaScript.valueToCode(block, 'OBJECTB', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.physics.arcade.collide(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

/*Blockly.JavaScript['move_to_pointer'] = function (block) {
    const value_gameobject = Blockly.JavaScript.valueToCode(block, 'GAMEOBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.physics.arcade.moveToPointer(${value_gameobject}, ${value_speed}, ${pointer});\n`;
};*/

/*Blockly.JavaScript['move_to_pointer_extended'] = function (block) {
    const gameobject = Blockly.JavaScript.valueToCode(block, 'GAMEOBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    const maximumTime = Blockly.JavaScript.valueToCode(block, 'MAXIMUM_TIME', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.physics.arcade.moveToPointer(${gameobject}, ${speed}, game.input.mousePointer, ${maximumTime});\n`;
};*/

Blockly.JavaScript['move_to_object'] = function (block) {
    const gameobject = Blockly.JavaScript.valueToCode(block, 'GAMEOBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    const maximumTime = Blockly.JavaScript.valueToCode(block, 'MAXIMUM_TIME', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.physics.arcade.moveToObject(${gameobject}, ${object}, ${speed}, ${maximumTime});\n`;
};

Blockly.JavaScript['acceleration_from_rotation'] = function (block) {
    const rotation = Blockly.JavaScript.valueToCode(block, 'ROTATION', Blockly.JavaScript.ORDER_ATOMIC);
    const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    return [`game.physics.arcade.accelerationFromRotation(${rotation}, ${speed})`, Blockly.JavaScript.ORDER_NONE];
};

//endregion

//region ANIMATION
Blockly.JavaScript['play_animation'] = function (block) {
    const animation = Blockly.JavaScript.valueToCode(block, 'ANIMATION', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    return `${object}.animations.play(${animation});\n`;
};

Blockly.JavaScript['play_animation_vi'] = function (block) {
    const animation = Blockly.JavaScript.valueToCode(block, 'ANIMATION', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || null;
    return `${object}.animations.play(${animation});\n`;
};


Blockly.JavaScript['stop_animation'] = function (block) {
    const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    return `${object}.animations.stop();\n`;
};

Blockly.JavaScript['stop_animation_vi'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.animations.stop();\n`;
};

Blockly.JavaScript['set_frame'] = function (block) {
    const frameNumber = Blockly.JavaScript.valueToCode(block, 'FRAME_NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    return `${object}.frame = ${frameNumber};\n`;
};

Blockly.JavaScript['set_frame_vi'] = function (block) {
    const frameNumber = Blockly.JavaScript.valueToCode(block, 'FRAME_NUMBER', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.frame = ${frameNumber};\n`;
};

Blockly.JavaScript['animation_get_animation'] = function (block) {
    const value_sprite = Blockly.JavaScript.valueToCode(block, 'Sprite', Blockly.JavaScript.ORDER_ATOMIC);
    const text_name = block.getFieldValue('NAME');
    return [`${value_sprite}.animations.getAnimation("${text_name}")`, Blockly.JavaScript.ORDER_ATOMIC];
};

/**
 * @deprecated
 * @param block
 * @return {string}
 */
Blockly.JavaScript['animation_next'] = function (block) {
    const number_framecount = block.getFieldValue('FRAMECOUNT');
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    return `${variable_object}.animations.next(${number_framecount});\n`;
};

/**
 * @deprecated
 * @param block
 * @return {string}
 */
Blockly.JavaScript['animation_previous'] = function (block) {
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    const number_framecount = block.getFieldValue('FRAMECOUNT');
    return `${variable_object}.animations.previous(${number_framecount});\n`;
};

Blockly.JavaScript['animation_next_vi'] = function (block) {
    const framecount = Blockly.JavaScript.valueToCode(block, 'FRAMECOUNT', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.animations.next(${framecount});\n`;
};

Blockly.JavaScript['animation_previous_vi'] = function (block) {
    const framecount = Blockly.JavaScript.valueToCode(block, 'FRAMECOUNT', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.animations.previous(${framecount});\n`
};

Blockly.JavaScript['refresh_frame'] = function (block) {
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    return `${variable_object}.animations.refreshFrame();\n`;
};

Blockly.JavaScript['animation_update'] = function (block) {
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    return [`${variable_object}.animations.update()`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @return {[string,*]}
 */
Blockly.JavaScript['validate_frames'] = function (block) {
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('Object'), Blockly.Variables.NAME_TYPE);
    const value_frames = Blockly.JavaScript.valueToCode(block, 'FRAMES', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${variable_object}.animations.validateFrames(${value_frames}, true)`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['validate_frames_vi'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const frames = Blockly.JavaScript.valueToCode(block, 'FRAMES', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${object}.animations.validateFrames(${frames}, true)`, Blockly.JavaScript.ORDER_NONE];
};

/**
 * @deprecated
 * @param block
 * @return {string}
 */
Blockly.JavaScript['animation_destroy'] = function (block) {
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    return `${variable_object}.animations.destroy();\n`;
};

Blockly.JavaScript['animation_destroy_vi'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.animations.destroy();\n`;
};

Blockly.JavaScript['get_animation_property'] = function (block) {
    const value_sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_ATOMIC);
    const dropdown_field = block.getFieldValue('FIELD');
    return [`${value_sprite}.animations.${dropdown_field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set_animation_property'] = function (block) {
    const dropdown_field = block.getFieldValue('FIELD');
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    const value_newproperty = Blockly.JavaScript.valueToCode(block, 'NEWPROPERTY', Blockly.JavaScript.ORDER_ATOMIC);
    return `${variable_object}.animations.${dropdown_field} = ${value_newproperty};\n`;
};

Blockly.JavaScript['set_animation_property_vi'] = function (block) {
    const field = block.getFieldValue('FIELD');
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const newProperty = block.getFieldValue('VALUE') == 'TRUE';
    return `${object}.animations.${field} = ${newProperty};\n`;
};

// Animation SET blocks
Blockly.JavaScript['set_animation_boolean_field_vi']
    = Blockly.JavaScript['set_animation_numeric_field']
    = Blockly.JavaScript['set_animation_string_field']
    = function (block) {
    const field = block.getFieldValue('FIELD');
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const newProperty = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.animations.currentAnim.${field} = ${newProperty};\n`;
};

// Animation GET blocks
Blockly.JavaScript['get_animation_boolean_field_vi']
    = Blockly.JavaScript['get_animation_numeric_field']
    = Blockly.JavaScript['get_animation_string_field']
    = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const field = block.getFieldValue('FIELD');
    return [`${object}.animations.currentAnim.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};


//endregion

//region INPUT

//region MOUSE
Blockly.JavaScript['get_current_mouse_position'] = function (block) {
    const direction = block.getFieldValue('DIRECTION');
    return [`game.input.${direction}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['is_mouse_button_clicked'] = function (block) {
    return [`game.input.mousePointer.${block.getFieldValue('BUTTON')}.isDown`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_active_pointer'] = function(block) {
  return [`game.input.activePointer`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

//region Keyboard
Blockly.JavaScript['create_cursor_keys'] = function (block) {
    return ['game.input.keyboard.createCursorKeys()', Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['is_key_down'] = function (block) {
    const dropdown_key = block.getFieldValue('KEY');
    return [`game.input.keyboard.isDown(Phaser.Keyboard.${dropdown_key})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['add_key'] = function(block) {
  const dropdown_key = block.getFieldValue('KEYCODE');
  return [`game.input.keyboard.addKey(Phaser.Keyboard.${dropdown_key})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_key_boolean_field']
  = Blockly.JavaScript['get_key_numeric_field']
  = function (block) {
  const field = block.getFieldValue('FIELD');
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['key_just_pressed'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.justPressed()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['key_just_released'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.justReleased()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['key_reset'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  const hard = block.getFieldValue('HARD') == 'TRUE';
  return `${key}.reset(${hard});\n`;
};

Blockly.JavaScript['key_up_duration'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.upDuration(${duration})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['key_down_duration'] = function (block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${key}.downDuration(${duration})`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

//region INPUT_HANDLER
Blockly.JavaScript['input_handler_enable'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.inputEnabled = true;\n`;
};

Blockly.JavaScript['set_input_handler_boolean_field']
  = Blockly.JavaScript['set_input_handler_numeric_field']
  = Blockly.JavaScript['set_input_handler_point_field']
  = function (block) {
  const field = block.getFieldValue('FIELD');
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const newProperty = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.${field} = ${newProperty};\n`;
};

Blockly.JavaScript['get_input_handler_boolean_field']
  = Blockly.JavaScript['get_input_handler_numeric_field']
  = Blockly.JavaScript['get_input_handler_point_field']
  = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const field = block.getFieldValue('FIELD');
  return [`${object}.input.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_bounds_rect_set'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const rect = Blockly.JavaScript.valueToCode(block, 'RECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.boundsRect = ${rect};\n`;
};

Blockly.JavaScript['input_handler_enable_drag'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.enableDrag();\n`;
};

Blockly.JavaScript['input_handler_enable_drag_complex'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const center = block.getFieldValue('CENTER') === 'TRUE';
  const top = block.getFieldValue('ALPHA') === 'TRUE';
  const pixel = block.getFieldValue('PIXEL') === 'TRUE';
  const alpha = Blockly.JavaScript.valueToCode(block, 'ALPHA', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.enableDrag(${center}, ${top}, ${pixel}, ${alpha});\n`;
};

Blockly.JavaScript['input_handler_check_pointer_down'] = function (block) {
  const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.checkPointerDown(${pointer})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_check_pointer_over'] = function (block) {
  const pointer = Blockly.JavaScript.valueToCode(block, 'POINTER', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.checkPointerOver(${pointer})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_disable_drag'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.disableDrag();\n`;
};

Blockly.JavaScript['input_handler_enable_snap'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `${object}.input.enableSnap(${x}, ${y});\n`;
};

Blockly.JavaScript['input_handler_enable_snap_complex'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const drag = block.getFieldValue('DRAG') === 'TRUE';
  const release = block.getFieldValue('RELEASE') === 'TRUE';
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const offset_x = Blockly.JavaScript.valueToCode(block, 'OFFSET_X', Blockly.JavaScript.ORDER_ATOMIC);
  const offset_y = Blockly.JavaScript.valueToCode(block, 'OFFSET_Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `${object}.input.enableSnap(${x}, ${y}, ${drag}, ${release}, ${offset_x}, ${offset_y});\n`;
};

Blockly.JavaScript['input_handler_disable_snap'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.disableSnap();\n`;
};

Blockly.JavaScript['input_handler_check_pixel'] = function (block) {
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.checkPixel(${x}, ${y})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_is_pixel_perfect'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.isPixelPerfect()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_just_pressed'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.justPressed(0, ${time})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_just_released'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.justReleased(0, ${time})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_over_duration'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.overDuration()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_pointer_over'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerOver()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_just_over'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.justOver(0, ${time})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_down_duration'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.downDuration()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_pointer_up'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerUp()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_pointer_down'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerUp()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_start'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const priority = Blockly.JavaScript.valueToCode(block, 'PRIORITY', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.start(${priority});\n`;
};

Blockly.JavaScript['input_handler_stop'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.stop();\n`;
};

Blockly.JavaScript['input_handler_just_out'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.justOut(0, ${time})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_pointer_out'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerOut()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_pointer_x'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerX()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_pointer_y'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerY()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_pointer_position'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const position = `new Phaser.Point(${object}.input.pointerX(), ${object}.input.pointerY())`;
  return [`${position}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_reset'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.reset();\n`;
};

Blockly.JavaScript['input_handler_destroy'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${object}.input.destroy();\n`;
};

Blockly.JavaScript['input_handler_pointer_dragged'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.input.pointerDragged()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['input_handler_set_drag_lock'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const horizontal = block.getFieldValue('HORIZONTAL') === 'TRUE';
  const vertical = block.getFieldValue('VERTICAL') === 'TRUE';
  return `${object}.input.setDragLock(${horizontal}, ${vertical});\n`;
};
//endregion
//endregion

//region WORLD
Blockly.JavaScript['get_world_property'] = function (block) {
    const dropdown_name = block.getFieldValue('NAME');
    return [`game.world.${dropdown_name}`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['set_world_bounds'] = function (block) {
    const value_x = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
    const value_y = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
    const value_w = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
    const value_h = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.world.setBounds(${value_x}, ${value_y}, ${value_w}, ${value_h});\n`;
};

Blockly.JavaScript['create_point'] = function (block) {
    const value_x = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
    const value_y = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
    return [`new Phaser.Point(${value_x}, ${value_y})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['set_scale'] = function (block) {
    const xScale = Blockly.JavaScript.valueToCode(block, 'SCALE_X', Blockly.JavaScript.ORDER_ATOMIC);
    const yScale = Blockly.JavaScript.valueToCode(block, 'SCALE_Y', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    return `${object}.scale.setTo(${xScale}, ${yScale});\n`;
};

Blockly.JavaScript['set_scale_vi'] = function (block) {
    const xScale = Blockly.JavaScript.valueToCode(block, 'SCALE_X', Blockly.JavaScript.ORDER_ATOMIC);
    const yScale = Blockly.JavaScript.valueToCode(block, 'SCALE_Y', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.scale.setTo(${xScale}, ${yScale});\n`;
};

Blockly.JavaScript['set_pos'] = function (block) {
    const param_name = block.getFieldValue('PARAM');
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);

    return `${object}.${param_name} = ${val};\n`;
};

Blockly.JavaScript['set_velocity'] = function (block) {
    const param_name = block.getFieldValue('PARAM');
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const val = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);

    return `${object}.${param_name} = ${val};\n`;
};

Blockly.JavaScript['get_param'] = function (block) {
    const param_name = block.getFieldValue('PARAM');
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);

    return [`${object}.${param_name}`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['get_world_reference'] = function (block) {
    return [`game.world`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['set_game_pause'] = function(block) {
  var paused = Blockly.JavaScript.valueToCode(block, 'PAUSED', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.paused = ${paused};\n`;
};

Blockly.JavaScript['get_game_pause'] = function(block) {
  return [`game.paused`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

//region GAMEOBJECT

//region GAMEOBJECT.PROPERTIES
Blockly.JavaScript['set_game_object_point_field'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const field = block.getFieldValue('PROPERTY');
    const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.${field} = ${point};\n`;
};

Blockly.JavaScript['get_game_object_point_field'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const field = block.getFieldValue('PROPERTY');
    return [`${object}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set_game_object_boolean_field'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const field = block.getFieldValue('PROPERTY');
    const boolean = block.getFieldValue('BOOLEAN') == 'TRUE';
    return `${object}.${field} = ${boolean};\n`;
};

Blockly.JavaScript['set_game_object_boolean_field_vi'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const field = block.getFieldValue('PROPERTY');
    const boolean = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.${field} = ${boolean};\n`;
};

Blockly.JavaScript['get_game_object_boolean_field'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const field = block.getFieldValue('PROPERTY');
    return [`${object}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set_game_object_numeric_field'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const field = block.getFieldValue('PROPERTY');
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.${field} = ${value};\n`;
};

Blockly.JavaScript['get_game_object_numeric_field'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const field = block.getFieldValue('PROPERTY');
    return [`${object}.${field}`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

Blockly.JavaScript['set_object_anchor'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_NONE);
    const value_x_pos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
    const value_y_pos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.anchor.setTo(${value_x_pos}, ${value_y_pos});\n`;
};

Blockly.JavaScript['kill_object'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.kill();\n`;
};

Blockly.JavaScript['faint_object'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.faint();\n`;
};

Blockly.JavaScript['destroy_object'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.destroy();\n`;
};

Blockly.JavaScript['object_inCamera'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${object}.inCamera`, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['camera_follow'] = function (block) {
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.
    return `game.camera.follow(${variable_object}, undefined, 0.5, 0.5);\n`;

};

Blockly.JavaScript['camera_follow_vi'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.camera.follow(${object});\n`;
};

Blockly.JavaScript['camera_follow_vi_complex'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.camera.follow(${object});\n`;
};

Blockly.JavaScript['camera_follow_vi_styled'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const style = block.getFieldValue('STYLE');
    return `game.camera.follow(${object}, Phaser.Camera.${style});\n`;
};

Blockly.JavaScript['camera_follow_vi_complex'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const lerpX = Blockly.JavaScript.valueToCode(block, 'LERP_X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const lerpY = Blockly.JavaScript.valueToCode(block, 'LERP_Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const style = block.getFieldValue('STYLE');
    return `game.camera.follow(${object}, ${style}, ${lerpX}, ${lerpY});\n`;
};

Blockly.JavaScript['get_camera'] = function (block) {
    return [`game.camera`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['object_set_to'] = function (block) {
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    const value_setx = Blockly.JavaScript.valueToCode(block, 'setx', Blockly.JavaScript.ORDER_ATOMIC);
    const value_sety = Blockly.JavaScript.valueToCode(block, 'sety', Blockly.JavaScript.ORDER_ATOMIC);
    return `${variable_object}.setTo(${value_setx}, ${value_sety});\n`;
};

// Blockly.JavaScript['send_to_back'] = function (block) {
//     const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
//     return `game.world.sendToBack(${variable_object});\n`;
// };

Blockly.JavaScript['add_text'] = function (block) {
    const value_x_pos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
    const value_y_pos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
    const value_initial_text = Blockly.JavaScript.valueToCode(block, 'INITIAL_TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_font_size = Blockly.JavaScript.valueToCode(block, 'FONT_SIZE', Blockly.JavaScript.ORDER_ATOMIC);
    const colour_fill = block.getFieldValue('FILL');
    return [`game.add.text(${value_x_pos}, ${value_y_pos}, ${value_initial_text}, { fontSize: '${value_font_size}px', fill: '${colour_fill}'})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['set_text'] = function (block) {
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    const value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${variable_object}.text = ${value_text};\n`;
};

Blockly.JavaScript['set_text_vi'] = function (block) {
    const variable_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${variable_object}.text = ${value_text};\n`;
};

Blockly.JavaScript['get_bounds'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${value_object}.getBounds()`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['get_rotation'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${value_object}.angle`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['rotate'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.angle += ${value_angle};\n`;
};

Blockly.JavaScript['set_rotation'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_rotation = Blockly.JavaScript.valueToCode(block, 'ROTATION', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.angle = ${value_angle};\n`;
};

Blockly.JavaScript['get_local_bounds'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${value_object}.getLocalBounds()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['reset'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_x_pos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
    const value_y_pos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.reset(${value_x_pos}, ${value_y_pos});\n`;
};

Blockly.JavaScript['revive'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.revive();\n`;
};
Blockly.JavaScript['create_bitmapFont'] = function (block) {
    const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_NONE);
    const source = Blockly.JavaScript.valueToCode(block, 'SRC', Blockly.JavaScript.ORDER_NONE);
    const xml = Blockly.JavaScript.valueToCode(block, 'XML', Blockly.JavaScript.ORDER_NONE);

    return `game.load.bitmapFont(${tag}, ${source}, ${xml});\n`;
};

Blockly.JavaScript['move_by'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);

  return `${object}.position.add(${x}, ${y});\n`;
};
//endregion
//region DRAW CIRCLE
Blockly.JavaScript['drawcircle'] = function (block) {
    const value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
    const value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
    const value_diameter = Blockly.JavaScript.valueToCode(block, 'DIAMETER', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
//endregion

//region GET_OBJECT_WIDTH
//TODO: TO COMPLETE
Blockly.JavaScript['get_object_width'] = function (block) {
    const variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    return [`${variable_name}.width`, Blockly.JavaScript.ORDER_NONE];
};
//endregion
//region SET_OBJECT_WIDTH
Blockly.JavaScript['set_object_width'] = function (block) {
    const variable_name = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
    const value_name = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${variable_name} = ${value_name}`, Blockly.JavaScript.ORDER_NONE];
};
//endregion

//region PARTICLE_EMITTER
Blockly.JavaScript['addemitter'] = function (block) {
    const value_x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const value_y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const value_maxparticles = Blockly.JavaScript.valueToCode(block, 'maxParticles', Blockly.JavaScript.ORDER_ATOMIC) || '1';

    return [`game.add.emitter(${value_x}, ${value_y}, ${value_maxparticles})`, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['emitters_make_particles'] = function (block) {
    const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
    const text_tag = block.getFieldValue('TAG');
    return `${variable_emitter}.makeParticles('${text_tag}');\n`;
};

Blockly.JavaScript['emitter_make_particles'] = function (block) {
    const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const keys = Blockly.JavaScript.valueToCode(block, 'KEYS', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const frames = Blockly.JavaScript.valueToCode(block, 'FRAMES', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const quantity = Blockly.JavaScript.valueToCode(block, 'QUANTITY', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const collide = block.getFieldValue('COLLIDE') == 'TRUE';
    const collideWorldBounds = block.getFieldValue('COLLIDEWORLDBOUNDS') == 'TRUE';
    return `${emitter}.makeParticles(${keys}, ${frames}, ${quantity}, ${collide}, ${collideWorldBounds});\n`;
};

Blockly.JavaScript['emitters_set_rotation'] = function (block) {
    const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
    const x_rotation = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    const y_rotation = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    return `${variable_emitter}.setRotation(${x_rotation}, ${y_rotation});\n`;
};

Blockly.JavaScript['emitters_set_rotation_vi'] = function (block) {
    const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC);
    const min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
    const max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
    return `${emitter}.setRotation(${min}, ${max});\n`;
};

/**
 * @deprecated
 * @param block
 * @return {string}
 */
Blockly.JavaScript['emitters_set_alpha'] = function (block) {
    const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
    const value_min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
    const value_max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
    const value_rate = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || null;
    return `${variable_emitter}.setAlpha(${value_min}, ${value_max}, ${value_rate});\n`;
};

Blockly.JavaScript['emitters_set_alpha_vi'] = function (block) {
    const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC) || '1';
    const max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC) || '1';
    const rate = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    return `${emitter}.setAlpha(${min}, ${max}, ${rate});\n`;
};

Blockly.JavaScript['emitters_set_scale'] = function (block) {
    const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
    const value_minx = Blockly.JavaScript.valueToCode(block, 'MINX', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const value_maxx = Blockly.JavaScript.valueToCode(block, 'MAXX', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const value_miny = Blockly.JavaScript.valueToCode(block, 'MINY', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const value_maxy = Blockly.JavaScript.valueToCode(block, 'MAXY', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const value_rate = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || null;
    return `${variable_emitter}.setScale(${value_minx}, ${value_maxx}, ${value_miny}, ${value_maxy}, ${value_rate});\n`;
};

Blockly.JavaScript['emitters_set_scale_vi'] = function (block) {
    const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC);
    const minx = Blockly.JavaScript.valueToCode(block, 'MINX', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const maxx = Blockly.JavaScript.valueToCode(block, 'MAXX', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const miny = Blockly.JavaScript.valueToCode(block, 'MINY', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const maxy = Blockly.JavaScript.valueToCode(block, 'MAXY', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const rate = Blockly.JavaScript.valueToCode(block, 'RATE', Blockly.JavaScript.ORDER_ATOMIC) || null;
    return `${emitter}.setScale(${minx}, ${maxx}, ${miny}, ${maxy}, ${rate});\n`;
};

/**
 * @deprecated
 * @param block
 * @return {string}
 */
Blockly.JavaScript['emitters_set_speed'] = function (block) {
    const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
    const value_minx = Blockly.JavaScript.valueToCode(block, 'MINX', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const value_maxx = Blockly.JavaScript.valueToCode(block, 'MAXX', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const value_miny = Blockly.JavaScript.valueToCode(block, 'MINY', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const value_maxy = Blockly.JavaScript.valueToCode(block, 'MAXY', Blockly.JavaScript.ORDER_ATOMIC) || null;

    const setMin = `${variable_emitter}.minParticleSpeed.set(${value_minx}, ${value_miny});\n`;
    const setMax = `${variable_emitter}.maxParticleSpeed.set(${value_maxx}, ${value_maxy});\n`;
    return setMin + setMax;
};

Blockly.JavaScript['emitters_set_speed_vi'] = function (block) {
    const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC);
    const minx = Blockly.JavaScript.valueToCode(block, 'MINX', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const maxx = Blockly.JavaScript.valueToCode(block, 'MAXX', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const miny = Blockly.JavaScript.valueToCode(block, 'MINY', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const maxy = Blockly.JavaScript.valueToCode(block, 'MAXY', Blockly.JavaScript.ORDER_ATOMIC) || null;

    const setMin = `${emitter}.minParticleSpeed.set(${minx}, ${miny});\n`;
    const setMax = `${emitter}.maxParticleSpeed.set(${maxx}, ${maxy});\n`;

    return setMin + setMax;
};

Blockly.JavaScript['emitters_set_gravity'] = function (block) {
    const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
    const value_gravity = Blockly.JavaScript.valueToCode(block, 'GRAVITY', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    return `${variable_emitter}.gravity = ${value_gravity};\n`;
};

Blockly.JavaScript['emitters_set_gravity_vi'] = function (block) {
    const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const gravity = Blockly.JavaScript.valueToCode(block, 'GRAVITY', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    return `${emitter}.gravity = ${gravity};\n`;
};

Blockly.JavaScript['emitters_set_width'] = function (block) {
    const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
    const value_width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    return `${variable_emitter}.width = ${value_width};\n`;
};

Blockly.JavaScript['emitters_start'] = function (block) {
    const variable_emitter = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('EMITTER'), Blockly.Variables.NAME_TYPE);
    const bool_explode = Blockly.JavaScript.valueToCode(block, 'EXPLODE', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const value_lifespan = Blockly.JavaScript.valueToCode(block, 'LIFESPAN', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const value_frequency = Blockly.JavaScript.valueToCode(block, 'FREQUENCY', Blockly.JavaScript.ORDER_ATOMIC) || null;
    const value_quantity = Blockly.JavaScript.valueToCode(block, 'QUANTITY', Blockly.JavaScript.ORDER_ATOMIC) || null;
    return `${variable_emitter}.start(${bool_explode}, ${value_lifespan}, ${value_frequency}, ${value_quantity});\n`;
};

Blockly.JavaScript['emitters_start_vi'] = function (block) {
    const emitter = Blockly.JavaScript.valueToCode(block, 'EMITTER', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const explode = block.getFieldValue('EXPLODE') == 'TRUE';
    const lifespan = Blockly.JavaScript.valueToCode(block, 'LIFESPAN', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const frequency = Blockly.JavaScript.valueToCode(block, 'FREQUENCY', Blockly.JavaScript.ORDER_ATOMIC) || '250';
    const quantity = Blockly.JavaScript.valueToCode(block, 'QUANTITY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return `${emitter}.start(${explode}, ${lifespan}, ${frequency}, ${quantity});\n`;
};

Blockly.JavaScript['set_emit_from'] = function (block) {
    const value_object = Blockly.JavaScript.valueToCode(block, 'Object', Blockly.JavaScript.ORDER_ATOMIC);
    const dropdown_cord = block.getFieldValue('cord');
    const value_emit_loc = Blockly.JavaScript.valueToCode(block, 'emit_loc', Blockly.JavaScript.ORDER_ATOMIC);
    return `${value_object}.emit${dropdown_cord} = ${value_emit_loc};\n`;
};
//endregion EMITTERS

//region DEBUG
Blockly.JavaScript['debug_sprite'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_x = Blockly.JavaScript.valueToCode(block, 'X_VAL', Blockly.JavaScript.ORDER_ATOMIC);
    const value_y = Blockly.JavaScript.valueToCode(block, 'Y_VAL', Blockly.JavaScript.ORDER_ATOMIC);

    return `game.debug.spriteInfo(${object}, ${value_x}, ${value_y});\n`;
};

/*Blockly.JavaScript['debug_body_info'] = function(block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.debug.bodyInfo(${object},${0},${20});\n`;
};*/
Blockly.JavaScript['debug_body_info'] = function(block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.spriteInfo(${object}, ${x_pos}, ${y_pos}, ${colour});\n`;
};

Blockly.JavaScript['debug_camera'] = function (block) {
  const camera = Blockly.JavaScript.valueToCode(block, 'CAMERA', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);
  return `game.debug.camera(${camera},${colour});\n`;
};

Blockly.JavaScript['debug_camera_info'] = function(block) {
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.cameraInfo(${`game.camera`}, ${x_pos}, ${y_pos}, ${colour});\n`;
};

Blockly.JavaScript['debug_input_info'] = function(block) {
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.inputInfo(${x_pos}, ${y_pos}, ${colour});\n`;
};

Blockly.JavaScript['debug_key'] = function(block) {
  const dropdown_key = block.getFieldValue('KEY');
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.key(game.input.keyboard.addKey(Phaser.Keyboard.${dropdown_key}), ${x_pos}, ${y_pos});\n`;//, ${colour});\n`;
};

Blockly.JavaScript['debug_physics_group'] = function (block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const check_exists = block.getFieldValue('CHECK_EXISTS') == 'TRUE';
  //return `${group}.destroy(${check_exists});\n`;
  return `game.debug.physicsGroup(${group});\n`;//, ${"'#73ff5c'"}, ${true}, ${check_exists});\n`;
};

Blockly.JavaScript['debug_rectangle'] = function(block) {
  const rect = Blockly.JavaScript.valueToCode(block, 'RECT', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.rectangle(${rect},${colour});\n`;
};

Blockly.JavaScript['debug_sound'] = function(block) {
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.sound(${x_pos}, ${y_pos}, ${colour});\n`;
};

Blockly.JavaScript['debug_sound_info'] = function(block) {
  const sound = Blockly.JavaScript.valueToCode(block, 'SOUND', Blockly.JavaScript.ORDER_ATOMIC);
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.soundInfo(${sound}, ${x_pos}, ${y_pos}, ${colour});\n`;
};

Blockly.JavaScript['debug_sprite_coords'] = function(block) {
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_ATOMIC);
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.spriteCoords(${sprite}, ${x_pos}, ${y_pos}, ${colour});\n`;
};

Blockly.JavaScript['debug_sprite_info'] = function(block) {
  const sprite = Blockly.JavaScript.valueToCode(block, 'SPRITE', Blockly.JavaScript.ORDER_ATOMIC);
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.spriteInfo(${sprite}, ${x_pos}, ${y_pos}, ${colour});\n`;
};

Blockly.JavaScript['debug_text'] = function(block) {
  const text = Blockly.JavaScript.valueToCode(block, 'TEXT', Blockly.JavaScript.ORDER_ATOMIC);
  const x_pos = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  const y_pos = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);

  return `game.debug.text(${text}, ${x_pos}, ${y_pos}, ${colour});\n`;
};
//endregion

//region STATES
Blockly.JavaScript['statemanager_add_state'] = function (block) {
    const value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    const text_key = block.getFieldValue('KEY');

    return `game.state.add('${text_key}', ${value_name});\n`;
};

Blockly.JavaScript['statemanager_start_state'] = function (block) {
    const tag = block.getFieldValue('TAG');

    return `game.state.start('${tag}');\n`;
};

Blockly.JavaScript['statemanager_get_current_state'] = function(block) {
    return [`game.state.getCurrentState()`,Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['statemanager_restart_state'] = function(block) {
  return `game.state.restart();\n`;
};

Blockly.JavaScript['statemanager_check_state'] = function(block) {
  const key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`game.state.checkState(${key})`, Blockly.JavaScript.ORDER_NONE];
};

//endregion

//region GEOMETRY
Blockly.JavaScript['rectangle_create'] = function (block) {
    const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    return [`new Phaser.Rectangle(${x}, ${y}, ${width}, ${height})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


Blockly.JavaScript['rectangle_intersects'] = function (block) {
  const rectA = Blockly.JavaScript.valueToCode(block, 'RECT_A', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  const rectB = Blockly.JavaScript.valueToCode(block, 'RECT_B', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
  return [`Phaser.Rectangle.intersects(${rectA}, ${rectB})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

//region POINT
Blockly.JavaScript['point_create'] = function (block) {
    const x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    const y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    return [`new Phaser.Point(${x}, ${y})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['point_get_element'] = function (block) {
    const element = block.getFieldValue('ELEMENT');
    const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${point}.${element}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['point_set_element'] = function (block) {
    const element = block.getFieldValue('ELEMENT');
    const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    return `${point}.${element} = ${value};\n`;
};

Blockly.JavaScript['point_set_magnitude'] = function (block) {
    const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    return `${point}.setMagnitude(${value});\n`;
};

Blockly.JavaScript['points_add'] = function (block) {
    const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
    const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.Point.add(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_subtract'] = function (block) {
    const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
    const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.Point.subtract(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_angle_between'] = function (block) {
    const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
    const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.Point.angle(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_distance'] = function (block) {
    const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
    const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.Point.distance(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_divide'] = function (block) {
    const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
    const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.Point.divide(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_equals'] = function (block) {
    const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
    const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.Point.equals(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_interpolate'] = function (block) {
    const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
    const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
    const f = Blockly.JavaScript.valueToCode(block, 'F', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.Point.interpolate(${lhs}, ${rhs}, ${f})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_multiply'] = function (block) {
    const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
    const rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.Point.multiply(${lhs}, ${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_negate'] = function (block) {
    const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.Point.negative(${lhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_normalize'] = function (block) {
    const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.Point.normalize(${lhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_perpendicular'] = function (block) {
    const lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.Point.perp(${lhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_centroid'] = function(block) {
  var array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
  return [`Phaser.Point.centroid(${array})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_clamp'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.clamp(${min}, ${max});\n`;
};

Blockly.JavaScript['points_clamp_x'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.clampX(${min}, ${max});\n`;
};

Blockly.JavaScript['points_clamp_y'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.clampY(${min}, ${max});\n`;
};

Blockly.JavaScript['points_clone'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${point}.clone()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_copy_from'] = function(block) {
  var source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC);
  var target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);
  return `${target}.copyFrom(${source});\n`;
};

Blockly.JavaScript['points_cross'] = function(block) {
  var lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  var rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${lhs}.cross(${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_dot'] = function(block) {
  var lhs = Blockly.JavaScript.valueToCode(block, 'LHS', Blockly.JavaScript.ORDER_ATOMIC);
  var rhs = Blockly.JavaScript.valueToCode(block, 'RHS', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${lhs}.dot(${rhs})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_add_member'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.add(${x}, ${y});\n`;
};

Blockly.JavaScript['points_subtract_member'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.subtract(${x}, ${y});\n`;
};

Blockly.JavaScript['points_divide_member'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.divide(${x}, ${y});\n`;
};

Blockly.JavaScript['points_multiply_member'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var x = Blockly.JavaScript.valueToCode(block, 'X', Blockly.JavaScript.ORDER_ATOMIC);
  var y = Blockly.JavaScript.valueToCode(block, 'Y', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.multiply(${x}, ${y});\n`;
};

Blockly.JavaScript['points_ceil'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.ceil();\n`;
};

Blockly.JavaScript['points_floor'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.floor();\n`;
};

Blockly.JavaScript['points_get_magnitude'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${point}.getMagnitude()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_get_magnitude_squared'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${point}.getMagnitudeSq()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_invert'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.invert();\n`;
};

Blockly.JavaScript['points_is_zero'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${point}.isZero()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['points_limit'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.limit(${max});\n`;
};

Blockly.JavaScript['points_set_to_polar'] = function(block) {
  var point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC);
  var degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
  var radius = Blockly.JavaScript.valueToCode(block, 'RADIUS', Blockly.JavaScript.ORDER_ATOMIC);
  return `${point}.setToPolar(${degrees}, ${radius}, true);\n`;
};
//endregion
//endregion

//region SOUND
Blockly.JavaScript['load_sound'] = function (block) {
    const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
    const source = Blockly.JavaScript.valueToCode(block, 'SOURCE', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.load.audio(${tag}, ${source});\n`;
};

Blockly.JavaScript['play_sound'] = function (block) {
    const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
    const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
    const looping = block.getFieldValue('LOOPING') == 'TRUE';
    return `game.sound.play(${tag}, ${volume}, ${looping});\n`;
};

Blockly.JavaScript['add_sound'] = function (block) {
    const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
    const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
    const looping = block.getFieldValue('LOOPING') == 'TRUE';
    return [`game.add.audio(${tag}, ${volume}, ${looping})`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['remove_sound'] = function (block) {
    const tag = Blockly.JavaScript.valueToCode(block, 'TAG', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.sound.removeByKey(${tag});\n`;
};

Blockly.JavaScript['stop_pause_resume_sounds'] = function (block) {
    const option = block.getFieldValue('OPTION');
    return `game.sound.${option}All();\n`;
};

Blockly.JavaScript['set_sound_boolean_member'] = Blockly.JavaScript['set_sound_numeric_member'] = setMember;
Blockly.JavaScript['get_sound_boolean_member'] = Blockly.JavaScript['get_sound_numeric_member'] = Blockly.JavaScript['get_sound_string_member'] = getMember;


Blockly.JavaScript['sound_fade_in'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const loop = block.getFieldValue('LOOP') == 'TRUE';
    return `${object}.fadeIn(${duration}, ${loop});\n`
};

Blockly.JavaScript['sound_fade_out'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    return `${object}.fadeOut(${duration});\n`
};

Blockly.JavaScript['sound_fade_to'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.fadeTo(${duration}, ${volume});\n`
};

Blockly.JavaScript['sound_loop_full'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
    return `${object}.loopFull(${volume});\n`
};

Blockly.JavaScript['sound_stop'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    return `${object}.stop();\n`
};

Blockly.JavaScript['sound_pause'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    return `${object}.pause();\n`
};

Blockly.JavaScript['sound_resume'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    return `${object}.resume();\n`
};

Blockly.JavaScript['sound_play'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_ATOMIC);
    const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
    const loop = block.getFieldValue('LOOP') == 'TRUE';
    const restart = block.getFieldValue('RESTART') == 'TRUE';

    return `${object}.play('', ${position}, ${volume}, ${loop}, ${restart});\n`;
};

Blockly.JavaScript['sound_restart'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const position = Blockly.JavaScript.valueToCode(block, 'POSITION', Blockly.JavaScript.ORDER_ATOMIC);
    const volume = Blockly.JavaScript.valueToCode(block, 'VOLUME', Blockly.JavaScript.ORDER_ATOMIC);
    const loop = block.getFieldValue('LOOP') == 'TRUE';

    return `${object}.play('', ${position}, ${volume}, ${loop});\n`;
};
//endregion

//region CAMERA
Blockly.JavaScript["game_camera"] = function() {
    return ['game.camera', Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['camera_fade'] = function (block) {
    const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);
    const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    const toHexColorFunc = Blockly.JavaScript.provideFunction_(
        'toHexColor',
        ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
        '(color) {',
            'return color.replace("#", "0x");',
            '}']);

    return `game.camera.fade(${toHexColorFunc}(${colour}), ${time}, true);\n`;
};

Blockly.JavaScript['camera_flash'] = function (block) {
    const colour = Blockly.JavaScript.valueToCode(block, 'COLOUR', Blockly.JavaScript.ORDER_ATOMIC);
    const time = Blockly.JavaScript.valueToCode(block, 'TIME', Blockly.JavaScript.ORDER_ATOMIC);
    const toHexColorFunc = Blockly.JavaScript.provideFunction_(
        'toHexColor',
        ['function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ +
            '(color) {',
            'return color.replace("#", "0x");',
            '}']);

    return `game.camera.flash(${toHexColorFunc}(${colour}), ${time}, true);\n`;
};

Blockly.JavaScript['camera_focus_on'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.camera.focusOn(${object});\n`;
};

Blockly.JavaScript['camera_focus_on_xy'] = function (block) {
    const posX = Blockly.JavaScript.valueToCode(block, 'POSX', Blockly.JavaScript.ORDER_ATOMIC);
    const posY = Blockly.JavaScript.valueToCode(block, 'POSY', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.camera.focusOnXY(${posX}, ${posY});\n`;
};

Blockly.JavaScript['camera_reset'] = function (block) {
    return `game.camera.reset();\n`;
};

Blockly.JavaScript['camera_reset_fx'] = function (block) {
    return `game.camera.resetFX();\n`;
};

Blockly.JavaScript['camera_set_bounds_to_world'] = function (block) {
    return `game.camera.setBoundsToWorld();\n`;
};

Blockly.JavaScript['camera_set_position'] = function (block) {
    const posX = Blockly.JavaScript.valueToCode(block, 'POSX', Blockly.JavaScript.ORDER_ATOMIC);
    const posY = Blockly.JavaScript.valueToCode(block, 'POSY', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.camera.setPosition(${posX}, ${posY});\n`;
};

Blockly.JavaScript['camera_set_size'] = function (block) {
    const width = Blockly.JavaScript.valueToCode(block, 'WIDTH', Blockly.JavaScript.ORDER_ATOMIC);
    const height = Blockly.JavaScript.valueToCode(block, 'HEIGHT', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.camera.setSize(${width}, ${height});\n`;
};

Blockly.JavaScript['camera_shake'] = function (block) {
    const intensity = Blockly.JavaScript.valueToCode(block, 'INTENSITY', Blockly.JavaScript.ORDER_ATOMIC);
    const direction = block.getFieldValue('DIRECTION');
    const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.camera.shake(${intensity}, ${duration}, true, Phaser.Camera.${direction});\n`;
};

Blockly.JavaScript['camera_unfollow'] = function (block) {
    return `game.camera.unfollow();\n`;
};
//endregion

//region LIST.METHODS
Blockly.JavaScript['list_find_closest'] = function (block) {
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.ArrayUtils.findClosest(${value}, ${array})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['list_get_random'] = function (block) {
    const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.ArrayUtils.getRandomItem(${array})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['number_list'] = function (block) {
    const start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC);
    const end = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.ArrayUtils.numberArray(${start}, ${end})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['number_list_step'] = function (block) {
    const start = Blockly.JavaScript.valueToCode(block, 'START', Blockly.JavaScript.ORDER_ATOMIC);
    const end = Blockly.JavaScript.valueToCode(block, 'END', Blockly.JavaScript.ORDER_ATOMIC);
    const step = Blockly.JavaScript.valueToCode(block, 'STEP', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.ArrayUtils.numberArrayStep(${start}, ${end}, ${step})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['list_remove_random_item'] = function (block) {
    const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
    return [`Phaser.ArrayUtils.removeRandomItem(${array})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['list_shuffle'] = function (block) {
    const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
    return `Phaser.ArrayUtils.shuffle(${array});\n`;
};
//endregion

//region RANDOMISATION
Blockly.JavaScript['create_random_generator'] = function (block) {
    return [`new Phaser.RandomDataGenerator([new Date().getTime()])`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['create_random_generator_seeded'] = function (block) {
    const seed = Blockly.JavaScript.valueToCode(block, 'SEED', Blockly.JavaScript.ORDER_ATOMIC);
    return [`new Phaser.RandomDataGenerator(${seed})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random_angle'] = function (block) {
    return [`game.rnd.angle()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random_pick'] = function (block) {
    const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
    return [`game.rnd.pick(${array})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random_pick_weighted'] = function (block) {
    const array = Blockly.JavaScript.valueToCode(block, 'ARRAY', Blockly.JavaScript.ORDER_ATOMIC);
    return [`game.rnd.weightedPick(${array})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random_real'] = function (block) {
    return [`game.rnd.real()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random_real_in_range'] = function (block) {
    const min = Blockly.JavaScript.valueToCode(block, 'MIN', Blockly.JavaScript.ORDER_ATOMIC);
    const max = Blockly.JavaScript.valueToCode(block, 'MAX', Blockly.JavaScript.ORDER_ATOMIC);
    return [`game.rnd.realInRange(${min}, ${max})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random_sign'] = function (block) {
    return [`game.rnd.sign()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['random_boolean'] = function () {
    return ['game.rnd.pick([true, false])', Blockly.JavaScript.ORDER_NONE];
};
//endregion

//region MATH
Blockly.JavaScript['math_deg_to_rad'] = function (block) {
    const degrees = Blockly.JavaScript.valueToCode(block, 'DEGREES', Blockly.JavaScript.ORDER_ATOMIC);
    return [`game.math.degToRad(${degrees})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['math_rad_to_deg'] = function (block) {
    const radians = Blockly.JavaScript.valueToCode(block, 'RADIANS', Blockly.JavaScript.ORDER_ATOMIC);
    return [`game.math.radToDeg(${radians})`, Blockly.JavaScript.ORDER_NONE];
};
//endregion

//region TIME
Blockly.JavaScript['get_time_numeric_member'] = function (block) {
    const property = block.getFieldValue('PROPERTY');
    return [`game.time.${property}`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['set_time_numeric_member'] = function (block) {
    const property = block.getFieldValue('PROPERTY');
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.time.${property} = ${value};\n`;
};

Blockly.JavaScript['delta_time_seconds'] = function (block) {
    return [`game.time.physicsElapsed`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['delta_time_milliseconds'] = function (block) {
    return [`game.time.physicsElapsedMS`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

//region TIMER
Blockly.JavaScript['create_timer'] = function (block) {
    const autoDestroy = block.getFieldValue('AUTO_DESTROY') === 'TRUE';
    return [`game.time.create(${autoDestroy})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['time_constants'] = function (block) {
    const constant = block.getFieldValue('VALUE');
    return [`${constant}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['start_timer'] = function (block) {
    const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
    return `${timer}.start(${delay});\n`;
};

Blockly.JavaScript['timer_add_event'] = function (block) {
    const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
    const callback = block.getFieldValue('CALLBACK');
    return `${timer}.add(${delay}, ${callback});\n`;
};

Blockly.JavaScript['timer_loop_event'] = function (block) {
    const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
    const callback = block.getFieldValue('CALLBACK');
    return `${timer}.loop(${delay}, ${callback});\n`;
};

Blockly.JavaScript['timer_repeat_event'] = function (block) {
    const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const repeatCount = Blockly.JavaScript.valueToCode(block, 'REPEAT_COUNT', Blockly.JavaScript.ORDER_ATOMIC) || '0';
    const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
    const callback = block.getFieldValue('CALLBACK');
    return `${timer}.repeat(${delay}, ${repeatCount}, ${callback});\n`;
};

Blockly.JavaScript['timer_destroy'] = function (block) {
    const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
    return `${timer}.destroy();\n`;
};

Blockly.JavaScript['timer_pause'] = function (block) {
    const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
    return `${timer}.pause();\n`;
};

Blockly.JavaScript['timer_resume'] = function (block) {
    const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
    return `${timer}.resume();\n`;
};

Blockly.JavaScript['timer_stop'] = function (block) {
    const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
    const clearEvents = block.getFieldValue('CLEAR_EVENTS');
    return `${timer}.stop(${clearEvents});\n`;
};

Blockly.JavaScript['timer_set_on_complete_callback'] = function (block) {
    const timer = Blockly.JavaScript.valueToCode(block, 'TIMER', Blockly.JavaScript.ORDER_ATOMIC);
    const callback = block.getFieldValue('CALLBACK');
    return `${timer}.onComplete.add(${callback});\n`;
};
//endregion

//region EASING
Blockly.JavaScript['phaser_easing'] = function (block) {
    const ease = block.getFieldValue('EASING');
    const direction = block.getFieldValue('DIRECTION');
    return [`Phaser.${ease}.${direction}`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['phaser_easing_linear'] = function (block) {
    const ease = block.getFieldValue('EASING');
    return [`Phaser.Easing.Linear.None`, Blockly.JavaScript.ORDER_ATOMIC];
};
//endregion

//region TWEEN
Blockly.JavaScript['phaser_game_add_tween_to'] = Blockly.JavaScript['phaser_game_add_tween_from'] = function (block) {
    const target = Blockly.JavaScript.valueToCode(block, 'TARGET', Blockly.JavaScript.ORDER_ATOMIC);
    const duration = Blockly.JavaScript.valueToCode(block, 'DURATION', Blockly.JavaScript.ORDER_ATOMIC);
    const ease = Blockly.JavaScript.valueToCode(block, 'EASE', Blockly.JavaScript.ORDER_ATOMIC);
    const autostart = block.getFieldValue('AUTOSTART') === 'TRUE';
    const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC);
    const repeat = Blockly.JavaScript.valueToCode(block, 'REPEAT', Blockly.JavaScript.ORDER_ATOMIC);
    const yoyo = block.getFieldValue('YOYO') === 'TRUE';
    let objectProperties = '';
    for (let i = 0; i < block.properties_.length; ++i) {
        objectProperties += `${block.properties_[i]}: ${Blockly.JavaScript.valueToCode(block, 'PROP' + i, Blockly.JavaScript.ORDER_COMMA)},`
    }
    return [`game.add.tween(${target}).to({${objectProperties}}, ${duration}, ${ease}, ${autostart}, ${delay}, ${repeat}, ${yoyo})`, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['phaser_stop_tween'] = function (block) {
    const tween = Blockly.JavaScript.valueToCode(block, 'TWEEN', Blockly.JavaScript.ORDER_ATOMIC);
    const complete = block.getFieldValue('COMPLETE') === 'TRUE';
    return `${tween}.stop(${complete});\n`;
};

Blockly.JavaScript['phaser_pause_tween'] = function (block) {
    const tween = Blockly.JavaScript.valueToCode(block, 'TWEEN', Blockly.JavaScript.ORDER_ATOMIC);
    return `${tween}.pause();\n`;
};

Blockly.JavaScript['phaser_resume_tween'] = function (block) {
    const tween = Blockly.JavaScript.valueToCode(block, 'TWEEN', Blockly.JavaScript.ORDER_ATOMIC);
    return `${tween}.pause();\n`;
};

Blockly.JavaScript['phaser_start_tween'] = function (block) {
    const tween = Blockly.JavaScript.valueToCode(block, 'TWEEN', Blockly.JavaScript.ORDER_ATOMIC);
    return `${tween}.pause();\n`;
};

Blockly.JavaScript['phaser_yoyo_tween'] = function (block) {
    const tween = Blockly.JavaScript.valueToCode(block, 'TWEEN', Blockly.JavaScript.ORDER_ATOMIC);
    const enable = block.getFieldValue('ENABLE') === 'TRUE';
    const delay = Blockly.JavaScript.valueToCode(block, 'DELAY', Blockly.JavaScript.ORDER_ATOMIC);
    const index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
    return `${tween}.yoyo(${enable}, ${delay}, ${index});\n`;
};
//endregion

//region POINTER
Blockly.JavaScript['pointer_get_device_buttons_field'] = getField;
//endregion

//region DEVICE_BUTTON
Blockly.JavaScript['device_button_get_boolean_field'] = Blockly.JavaScript['device_button_get_numeric_field'] = getField;

Blockly.JavaScript['device_button_just_released'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.justReleased()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['device_button_just_pressed'] = function (block) {
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${object}.justPressed()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
//endregion