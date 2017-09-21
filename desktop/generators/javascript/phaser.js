/**
 * Created by lukepowell on 12/15/16.
 *
 * All content Copyright DigiPen Institute of Technology 2016
 */

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
    return `game.load.atlasXML(${value_tag},${value_text_source},${value_text_xmlsource})\n`;
};

Blockly.JavaScript['imagesubtextureatlas'] = function (block) {
    const value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    const value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    const value_spritesource = Blockly.JavaScript.valueToCode(block, 'spritesource', Blockly.JavaScript.ORDER_ATOMIC);
    const value_xmlsubtexture = Blockly.JavaScript.valueToCode(block, 'xmlsubtexture', Blockly.JavaScript.ORDER_ATOMIC);
    return [`game.add.sprite(${value_x},${value_y},${value_spritesource},${value_xmlsubtexture} )`, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript['call_function_on_group'] = function (block) {
    const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
    const func_name = Blockly.JavaScript.valueToCode(block, 'FUNCTION', Blockly.JavaScript.ORDER_ATOMIC);

    return `${group}.forEachAlive(${func_name}, this);\n`;
};

Blockly.JavaScript['add_to_group'] = function(block) {
  const new_item = Blockly.JavaScript.valueToCode(block, 'NEW_ITEM', Blockly.JavaScript.ORDER_ATOMIC);
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  return `${group}.add(${new_item});\n`;
};

Blockly.JavaScript['remove_from_group'] = function(block) {
  const child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const destroy = Blockly.JavaScript.valueToCode(block, 'DESTROY', Blockly.JavaScript.ORDER_ATOMIC);
  return `${group}.remove(${child}, ${destroy});\n`;
};

Blockly.JavaScript['group_contains'] = function(block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const child = Blockly.JavaScript.valueToCode(block, 'CHILD', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.contains(${child})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['count_dead'] = function(block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.countDead()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['count_living'] = function(block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.countLiving()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['destroy_group'] = function(block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const handle_children = Blockly.JavaScript.valueToCode(block, 'HANDLE_CHILDREN', Blockly.JavaScript.ORDER_ATOMIC);
  return `${group}.destroy(${handle_children});\n`;
};

Blockly.JavaScript['group_get_all'] = function(block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.getAll()`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['group_get_at'] = function(block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const index = Blockly.JavaScript.valueToCode(block, 'INDEX', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.getAt(${index})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['group_get_closest_to'] = function(block) {
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.getClosestTo(${object})`, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['group_get_first_alive_dead'] = function(block) {
  const mode = block.getFieldValue('MODE');
  const group = Blockly.JavaScript.valueToCode(block, 'GROUP', Blockly.JavaScript.ORDER_ATOMIC);
  return [`${group}.getFirst${mode}()`, Blockly.JavaScript.ORDER_NONE];
};

//endregion

//region PHYSICS

//region COLLISION
Blockly.JavaScript['collide_with_arrow_function'] = function (block) {
    const objectA = Blockly.JavaScript.valueToCode(block, 'OBJECTA', Blockly.JavaScript.ORDER_ATOMIC);
    const objectB = Blockly.JavaScript.valueToCode(block, 'OBJECTB', Blockly.JavaScript.ORDER_ATOMIC);
    const statements_callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');// TODO: Assemble JavaScript into code variable.
    return `game.physics.arcade.collide(${objectA}, ${objectB}, (${objectA}, ${objectB}) => {
        ${statements_callback}
    });\n`;
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

//region BODY
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
    const element = block.getFieldValue('ELEMENT');
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC) || 'null';
    const point = Blockly.JavaScript.valueToCode(block, 'POINT', Blockly.JavaScript.ORDER_ATOMIC) || 'new Point()';
    return `${object}.body.${field}.${element} = ${point};\n`;
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

Blockly.JavaScript['move_to_pointer'] = function (block) {
    const value_gameobject = Blockly.JavaScript.valueToCode(block, 'GAMEOBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.physics.arcade.moveToPointer(${value_gameobject}, ${value_speed});\n`;
};


Blockly.JavaScript['move_to_pointer_extended'] = function (block) {
    const gameobject = Blockly.JavaScript.valueToCode(block, 'GAMEOBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    const maximumTime = Blockly.JavaScript.valueToCode(block, 'MAXIMUM_TIME', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.physics.arcade.moveToPointer(${gameobject}, ${speed}, game.input.activePointer, ${maximumTime});\n`;
};

Blockly.JavaScript['move_to_object'] = function (block) {
    const gameobject = Blockly.JavaScript.valueToCode(block, 'GAMEOBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    const speed = Blockly.JavaScript.valueToCode(block, 'SPEED', Blockly.JavaScript.ORDER_ATOMIC);
    const maximumTime = Blockly.JavaScript.valueToCode(block, 'MAXIMUM_TIME', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.physics.arcade.moveToObject(${gameobject},${object}, ${speed}, ${maximumTime});\n`;
};

Blockly.JavaScript['acceleration_from_rotation'] = function (block) {
    const value_rotation = Blockly.JavaScript.valueToCode(block, 'rotation', Blockly.JavaScript.ORDER_ATOMIC);
    const value_speed = Blockly.JavaScript.valueToCode(block, 'speed', Blockly.JavaScript.ORDER_ATOMIC);
    return [`game.physics.arcade.accelerationFromRotation(${value_rotation}, ${value_speed})`, Blockly.JavaScript.ORDER_NONE];
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
    const newproperty = block.getFieldValue('VALUE') == 'TRUE';
    return `${object}.animations.${field} = ${newproperty};\n`;
};
//endregion

//region INPUT
Blockly.JavaScript['create_cursor_keys'] = function (block) {
    return ['game.input.keyboard.createCursorKeys()', Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['is_key_down'] = function (block) {
    const dropdown_key = block.getFieldValue('KEY');
    return [`game.input.keyboard.isDown(Phaser.Keyboard.${dropdown_key})`, Blockly.JavaScript.ORDER_NONE];
};
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
//endregion

//region GAME OBJECT

//region GAME OBJECT PROPERTIES
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

Blockly.JavaScript['object_inCamera'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return [`${object}.inCamera`, Blockly.JavaScript.ORDER_NONE];
};
Blockly.JavaScript['camera_follow'] = function (block) {
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    // TODO: Assemble JavaScript into code variable.
    return `game.camera.follow(${variable_object});\n`;

};

Blockly.JavaScript['camera_follow_vi'] = function (block) {
    const object = Blockly.JavaScript.valueToCode(block, 'OBJECT', Blockly.JavaScript.ORDER_ATOMIC);
    return `game.camera.follow(${object});\n`;

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

Blockly.JavaScript['send_to_back'] = function (block) {
    const variable_object = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('OBJECT'), Blockly.Variables.NAME_TYPE);
    return `game.world.sendToBack(${variable_object});\n`;
};
Blockly.JavaScript['add_text'] = function (block) {
    const value_x_pos = Blockly.JavaScript.valueToCode(block, 'X_POS', Blockly.JavaScript.ORDER_ATOMIC);
    const value_y_pos = Blockly.JavaScript.valueToCode(block, 'Y_POS', Blockly.JavaScript.ORDER_ATOMIC);
    const value_initial_text = Blockly.JavaScript.valueToCode(block, 'INITIAL_TEXT', Blockly.JavaScript.ORDER_ATOMIC);
    const value_font_size = Blockly.JavaScript.valueToCode(block, 'FONT_SIZE', Blockly.JavaScript.ORDER_ATOMIC);
    const colour_fill = block.getFieldValue('FILL');
    return [`game.add.text(${value_x_pos}, ${value_y_pos}, ${value_initial_text}, { fontsize: '${value_font_size}', fill: '${colour_fill}'})`, Blockly.JavaScript.ORDER_NONE];
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

Blockly.JavaScript['emitter_make_particles'] = function(block) {
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
//endregion

//region STATES
Blockly.JavaScript['statemanager_add_state'] = function (block) {
    const value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    const text_key = block.getFieldValue('KEY');

    return `game.state.add('${text_key}', ${value_name});\n`;
};

Blockly.JavaScript['statemanager_start_state'] = function (block) {
    var text_tag = block.getFieldValue('TAG');

    return `game.state.start('${text_tag}');\n`
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
//endregion
