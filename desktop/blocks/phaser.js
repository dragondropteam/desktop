/**
 * Created by lukepowell on 12/15/16.
 *
 * All content copyright DigiPen Institute of Technology 2016
 */

/**
 * This file modified by DigiPen Institute of Technology USA
 * All modifications DigiPen Institute of Technology USA 2017
 * These modifications are not under the Apache license
 */

/**
 * Start modifications by DigiPen Institute of Technology 2017
 * All changes copyright DigiPen Institute of Technology USA 2017
 * These below changes are not under the Apache license
 */

/**
 * End modifications by DigiPen Institute of Technology 2017
 * All changes copyright DigiPen Institute of Technology 2017
 * The above changes are not under the Apache license
 */

// Configuration and utilities

//region COLOURS
const PHASER_COLOUR = 120;
const PHASER_STARTUP_COLOUR = '#558B2F'; //'#689f38';
const PHASER_STATES_COLOUR = '#689f38';  //'#7cb342';
const PHASER_WORLD_COLOUR = '#7cb342';   //'#8bc34a';
const PHASER_TIME_COLOUR = '#8bc34a';    //'#a5d6a7';

const PHASER_SPRITE_AND_IMAGES_COLOUR = '#004d40'; // (no change)
const PHASER_GROUPS_COLOUR = '#116056';            //'#00695c';
const PHASER_ANIMATION_COLOUR = '#22736D';         //'#00796b';
const PHASER_TEXT_COLOUR = '#348783';              //'#009688';
const PHASER_PARTICLES_COLOUR = '#459A9A';         //'#56ADB0';
const PHASER_GAMEOBJECT_COLOUR = '#56ADB0';        //'#00bfa5';

const PHASER_PHYSICS_STARTUP_COLOUR = '#6A1B9A';   //'#d500f9';
const PHASER_PHYSICS_BODY_COLOUR = '#862FB2';      // (new addition)
const PHASER_PHYSICS_DYNAMICS_COLOUR = '#A142CA';  //'#6a1b9a';
const PHASER_PHYSICS_COLLISION_COLOUR = '#BD56E2'; //'#8e24aa';
const PHASER_PHYSICS_UTIL_COLOUR = '#da95e2'; //'#8e24aa';

const PHASER_GEOMETRY_COLOUR = '#424242';  // UNUSED
const PHASER_RECTANGLE_COLOUR = '#5C5C5C'; //'#616161';
const PHASER_POINT_COLOUR = '#757575';     // (no change)
const PHASER_CIRCLE_COLOUR ='#838383';

const PHASER_KEYBOARD_INPUT = '#1565C0'; // (no change)
const PHASER_MOUSE_INPUT = '#2479D1';    //'#42A5F5' // ?2175CE 277DD5 2C85DB
const PHASER_GAMEPAD_INPUT = '#328DE2';  // UNUSED // ?328DE2
const PHASER_POINTER_INPUT_COLOUR = '#42a5f5';
const PHASER_DEVICE_BUTTON_COLOUR = '#64b5f6';
const PHASER_INPUT_HANDLER_COLOUR = '#66bcff';

const PHASER_UTILITY_COLOUR = '#E03400';      //'#ff6d00'; UNUSED
const PHASER_UTIL_GENERAL_COLOUR = '#E03400'; //'#ff3d00';
const PHASER_UTIL_DEBUG_COLOUR = '#E6460D';   //'#ff6e40';
//const EVAL_JAVASCRIPT_COLOUR = '#EC591A';
const PHASER_UTIL_LIST_COLOUR = '#F36B28';    //'#bf360c';
const PHASER_MATH_COLOUR = '#F97E35';         //'#ffab91';
const PHASER_RANDOM_COLOUR = '#FF9042';       //'#ff7043';

const PHASER_GRAPHICS_COLOUR = '#C66959';

const PHASER_CAMERA_COLOUR = '#607d8b';

const PHASER_SOUND_COLOUR = '#bf9023'; //'#827717'

const PHYSICS_COLOUR = '#5A5C51'; // DEPRECATED ONLY, DO NOT USE

const PHASER_KEYS = [
  ['A', 'A'],
  ['B', 'B'],
  ['C', 'C'],
  ['D', 'D'],
  ['E', 'E'],
  ['F', 'F'],
  ['G', 'G'],
  ['H', 'H'],
  ['I', 'I'],
  ['J', 'J'],
  ['K', 'K'],
  ['L', 'L'],
  ['M', 'M'],
  ['N', 'N'],
  ['O', 'O'],
  ['P', 'P'],
  ['Q', 'Q'],
  ['R', 'R'],
  ['S', 'S'],
  ['T', 'T'],
  ['U', 'U'],
  ['V', 'V'],
  ['W', 'W'],
  ['X', 'X'],
  ['Y', 'Y'],
  ['Z', 'Z'],
  ['UP', 'UP'],
  ['DOWN', 'DOWN'],
  ['LEFT', 'LEFT'],
  ['RIGHT', 'RIGHT'],
  ['ONE', 'ONE'],
  ['TWO', 'TWO'],
  ['THREE', 'THREE'],
  ['FOUR', 'FOUR'],
  ['FIVE', 'FIVE'],
  ['SIX', 'SIX'],
  ['SEVEN', 'SEVEN'],
  ['EIGHT', 'EIGHT'],
  ['NINE', 'NINE'],
  ['ZERO', 'ZERO'],
  ['NUMPAD_1', 'NUMPAD_1'],
  ['NUMPAD_2', 'NUMPAD_2'],
  ['NUMPAD_3', 'NUMPAD_3'],
  ['NUMPAD_4', 'NUMPAD_4'],
  ['NUMPAD_5', 'NUMPAD_5'],
  ['NUMPAD_6', 'NUMPAD_6'],
  ['NUMPAD_7', 'NUMPAD_7'],
  ['NUMPAD_8', 'NUMPAD_8'],
  ['NUMPAD_9', 'NUMPAD_9'],
  ['NUMPAD_ADD', 'NUMPAD_ADD'],
  ['NUMPAD_DECIMAL', 'NUMPAD_DECIMAL'],
  ['NUMPAD_DIVIDE', 'NUMPAD_DIVIDE'],
  ['NUMPAD_ENTER', 'NUMPAD_ENTER'],
  ['NUMPAD_MULTIPLY', 'NUMPAD_MULTIPLY'],
  ['NUMPAD_SUBTRACT', 'NUMPAD_SUBTRACT'],
  ['[', 'OPEN_BRACKET'],
  [']', 'CLOSE_BRACKET'],
  ['F1', 'F1'],
  ['F2', 'F2'],
  ['F3', 'F3'],
  ['F4', 'F4'],
  ['F5', 'F5'],
  ['F6', 'F6'],
  ['F7', 'F7'],
  ['F8', 'F8'],
  ['F9', 'F9'],
  ['F10', 'F10'],
  ['F11', 'F11'],
  ['F12', 'F12'],
  ['ALT', 'ALT'],
  [':', 'COLON'],
  [',', 'COMMA'],
  ['CONTROL', 'CTRL'],
  ['DELETE', 'DELETE'],
  ['END', 'END'],
  ['ENTER', 'ENTER'],
  ['ESC', 'ESC'],
  ['INSERT', 'INSERT'],
  ['-', 'MINUS'],
  ['NUM_LOCK', 'NUM_LOCK'],
  ['PAGE_DOWN', 'PAGE_DOWN'],
  ['PAGE_UP', 'PAGE_UP'],
  ['.', 'PERIOD'],
  ['+', 'PLUS'],
  ['EQUALS', 'EQUALS'],
  ['?', 'QUESTION_MARK'],
  ['"', 'QUOTES'],
  ['TAB', 'TAB'],
  ['~', 'TILDE'],
  ['_', 'UNDERSCORE'],
  ['BACKSPACE', 'BACKSPACE'],
  ['\\', 'BACKWARD_SLASH'],
  ['SPACEBAR', 'SPACEBAR'],
  ['CLEAR', 'CLEAR'],
  ['CAPS LOCK', 'CAPS_LOCK']]

//endregion colours

//region DOM

const dragondrop = {dom: {}};

/***
 * Extension of goog.dom from closure library to allow the createDom function to accept custom attributes in the
 * opt_attributes key-value object
 */

/**
 * Returns a dom node with a set of attributes.  This function accepts varargs
 * for subsequent nodes to be added.  Subsequent nodes will be added to the
 * first node as childNodes.
 *
 * So:
 * <code>createDom(goog.dom.TagName.DIV, null, createDom(goog.dom.TagName.P),
 * createDom(goog.dom.TagName.P));</code> would return a div with two child
 * paragraphs
 *
 * For passing properties, please see {@link goog.dom.setProperties} for more
 * information.
 *
 * @param {string|!goog.dom.TagName<T>} tagName Tag to create.
 * @param {?Object|?Array<string>|string=} opt_attributes If object, then a map
 *     of name-value pairs for attributes. If a string, then this is the
 *     className of the new element. If an array, the elements will be joined
 *     together as the className of the new element.
 * @param {...(Object|string|Array|NodeList)} var_args Further DOM nodes or
 *     strings for text nodes. If one of the var_args is an array or NodeList,
 *     its elements will be added as childNodes instead.
 * @return {R} Reference to a DOM node. The return type is {!Element} if tagName
 *     is a string or a more specific type if it is a member of
 *     goog.dom.TagName (e.g. {!HTMLAnchorElement} for goog.dom.TagName.A).
 * @template T
 * @template R := cond(isUnknown(T), 'Element', T) =:
 */
dragondrop.dom.createDom = function (tagName, opt_attributes, var_args) {
  return dragondrop.dom.createDom_(document, arguments);
};

/**
 * Helper for {@code createDom}.
 * @param {!Document} doc The document to create the DOM in.
 * @param {!Arguments} args Argument object passed from the callers. See
 *     {@code goog.dom.createDom} for details.
 * @return {!Element} Reference to a DOM node.
 * @private
 */
dragondrop.dom.createDom_ = function (doc, args) {
  let tagName = String(args[0]);
  let attributes = args[1];
  // Internet Explorer is dumb:
  // name: https://msdn.microsoft.com/en-us/library/ms534184(v=vs.85).aspx
  // type: https://msdn.microsoft.com/en-us/library/ms534700(v=vs.85).aspx
  // Also does not allow setting of 'type' attribute on 'input' or 'button'.
  if (!goog.dom.BrowserFeature.CAN_ADD_NAME_OR_TYPE_ATTRIBUTES && attributes &&
    (attributes.name || attributes.type)) {
    var tagNameArr = ['<', tagName];
    if (attributes.name) {
      tagNameArr.push(' name="', goog.string.htmlEscape(attributes.name), '"');
    }
    if (attributes.type) {
      tagNameArr.push(' type="', goog.string.htmlEscape(attributes.type), '"');

      // Clone attributes map to remove 'type' without mutating the input.
      var clone = {};
      goog.object.extend(clone, attributes);

      // JSCompiler can't see how goog.object.extend added this property,
      // because it was essentially added by reflection.
      // So it needs to be quoted.
      delete clone['type'];

      attributes = clone;
    }
    tagNameArr.push('>');
    tagName = tagNameArr.join('');
  }

  const element = doc.createElement(tagName);

  if (attributes) {
    if (goog.isString(attributes)) {
      element.className = attributes;
    } else if (goog.isArray(attributes)) {
      element.className = attributes.join(' ');
    } else {
      dragondrop.dom.setAttributes(element, attributes);
    }
  }

  if (args.length > 2) {
    goog.dom.append_(doc, element, args, 2);
  }

  return element;
};

dragondrop.dom.setAttributes = function (element, properties) {
  goog.object.forEach(properties, function (val, key) {
    element.setAttribute(key, val);
  });
};

function createDropDownField (write, readOnly) {
  const output = {
    writable: [],
    all: []
  };

  write.forEach(item => {
    output.writable.push([item, item]);
    output.all.push([item, item]);
  });

  readOnly.forEach(item => {
    output.all.push([item, item]);
  });
  return output;
}

//endregion DOM

//region PROPERTY CONTEXT MENUS
/**
 * Creates a shadow block for math_number
 * @param {number} [value=0] The value of the math number
 * @return {R}
 */
function createNumShadowDom (value = 0) {
  const xmlField = dragondrop.dom.createDom('field', {name: 'NUM'}, String(value));
  return dragondrop.dom.createDom('shadow', {type: 'math_number'}, xmlField);
}

/**
 * Creates a shadow block for point_create defaulting to [0,0]
 * @param {number} [x=0] The x coordinate
 * @param {number} [y=0]  The y coordinate
 * @return {R}
 */
function createPointShadowDom ({x = 0, y = 0} = {}) {
  const xmlCoordX = dragondrop.dom.createDom('value', {name: 'X'}, createNumShadowDom(x));
  const xmlCoordY = dragondrop.dom.createDom('value', {name: 'Y'}, createNumShadowDom(y));
  return dragondrop.dom.createDom('shadow', {type: 'point_create'}, xmlCoordX, xmlCoordY);
}

/**
 * Creates a shadow block for text
 * @param {String} [string=''] Starting text for the shadow block
 */
function createStringShadowDom (string = '') {
  const text = dragondrop.dom.createDom('field', {name: 'TEXT'}, string);
  return dragondrop.dom.createDom('shadow', {type: 'text'}, text);
}

/**
 * Create a shadow block for a boolean value
 * @param {boolean} [val=true] Starting value for the shadow block
 * @return {R}
 */
function createBooleanShadowDom (val = true) {
  const boolean = dragondrop.dom.createDom('field', {name: 'BOOL'}, val === true ? 'TRUE' : 'FALSE');
  return dragondrop.dom.createDom('shadow', {type: 'logic_boolean'}, boolean);
}

/**
 * Creates a shadow block for variables values
 * @param {String} [name='defaultObject'] Starting value for the variable drop down on the shadow block
 * @return {R}
 */
function createVariableShadowDom (name = 'defaultObject') {
  const varField = dragondrop.dom.createDom('field', {name: 'VAR'}, name);
  return dragondrop.dom.createDom('shadow', {type: 'variables_get'}, varField);
}

/**
 * Creates a context menu function for property setter blocks. As these blocks only have the property and the object
 * there is no need to distinguish between types of property
 * @param {String} type The name of the getter associated with this property
 * @param propertyTag
 * @param objectTag
 * @return {Function}
 */
function createSetterContextMenu (type, {propertyTag = 'PROPERTY', objectTag = 'OBJECT'} = {}) {
  return function (options) {
    const option = {enabled: true, text: `Create "get ${this.getFieldValue(propertyTag)}"`};
    const field = dragondrop.dom.createDom('field', {name: propertyTag}, this.getFieldValue(propertyTag));

    // The object the setter is working on
    const block = dragondrop.dom.createDom('block', {type: type}, field);
    if (objectTag) {
      const variable = dragondrop.dom.createDom('value', {name: objectTag}, createVariableShadowDom(this.getInputTargetBlock(objectTag).getFieldValue('VAR')));

      block.append(variable);
    }
    console.log(block);
    option.callback = Blockly.ContextMenu.callbackFactory(this, block);
    options.push(option);
  };
}

/**
 * Creates a context menu function for numeric getter blocks
 * @param type The type of the setter block the getter is associated with
 * @param options Options to control the name of the object, property and value fields
 * @param {String} [options.objectTag = 'OBJECT'] The name of the object field
 * @param {String} [options.propertyTag = 'PROPERTY'] The name of the property field
 * @param {String} [options.valueTag = 'VALUE'] The name of the value field
 * @return {Function} custom context menu for a numeric getter
 */
function createNumericGetterContextMenu (type, options) {
  return createGetterContextMenu(type, createNumShadowDom, options);
}

/**
 * Creates a context menu function for string getter blocks
 * @param type The type of the setter block the getter is associated with
 * @param options Options to control the name of the object, property and value fields
 * @param {String} [options.objectTag = 'OBJECT'] The name of the object field
 * @param {String} [options.propertyTag = 'PROPERTY'] The name of the property field
 * @param {String} [options.valueTag = 'VALUE'] The name of the value field
 * @return {Function} custom context menu for a string getter
 */
function createStringGetterContextMenu (type, options) {
  return createGetterContextMenu(type, createStringShadowDom, options);
}

/**
 * Creates a context menu function for boolean getter blocks
 * @param type The type of the setter block the getter is associated with
 * @param options Options to control the name of the object, property and value fields
 * @param {String} [options.objectTag = 'OBJECT'] The name of the object field
 * @param {String} [options.propertyTag = 'PROPERTY'] The name of the property field
 * @param {String} [options.valueTag = 'VALUE'] The name of the value field
 * @return {Function} custom context menu for a boolean getter
 */
function createBooleanGetterContextMenu (type, options) {
  return createGetterContextMenu(type, createBooleanShadowDom, options);
}

/**
 * Creates a context menu function for point getter blocks
 * @param type The type of the setter block the getter is associated with
 * @param options Options to control the name of the object, property and value fields
 * @param {String} [options.objectTag = 'OBJECT'] The name of the object field
 * @param {String} [options.propertyTag = 'PROPERTY'] The name of the property field
 * @param {String} [options.valueTag = 'VALUE'] The name of the value field
 * @return {Function} custom context menu for a point getter
 */
function createPointGetterContextMenu (type, options) {
  return createGetterContextMenu(type, createPointShadowDom, options);
}

/**
 *
 * @param {String} type The type of the setter block the getter is associated with
 * @param {Function} shadowGenerator Function to generate a shadow block to be used on the value field
 * @param {String}} [objectTag="OBJECT"] The tag of the object field
 * @param {String} [propertyTag="PROPERTY"] The tag of the property field
 * @param {String} [valueTag="VALUE"] The tag of the value field
 * @return {Function} Custom context menu to generate a setter from a getter block
 */
function createGetterContextMenu (type, shadowGenerator, {objectTag = 'OBJECT', propertyTag = 'PROPERTY', valueTag = 'VALUE'} = {}) {
  return function (options) {
    const option = {enabled: true, text: `Create "set ${this.getFieldValue(propertyTag)}"`};
    // The property the getter is returning
    const property = dragondrop.dom.createDom('field', {name: propertyTag}, this.getFieldValue(propertyTag));
    // Default shadow block to populate the setter
    const value = dragondrop.dom.createDom('value', {name: valueTag}, shadowGenerator());
    //The block will contain a shadow block containing the defaults appropriate to the type of the property
    const block = dragondrop.dom.createDom('block', {type: type}, property, value);

    if (objectTag) {
      // The object the getter is working on
      const variable = dragondrop.dom.createDom('value', {name: objectTag}, createVariableShadowDom(this.getInputTargetBlock(objectTag).getFieldValue('VAR')));
      block.append(variable);
    }

    console.log(block);
    option.callback = Blockly.ContextMenu.callbackFactory(this, block);
    options.push(option);
  };
}

//endregion Property context menus

//region DEPRECATED

//These blocks exist for backwards compatibility they should not be used in the toolbox going forward

//region ANIMATION_DEPRECATED
/**
 * @Deprecated use stop_animation_vi instead
 * @type {{init: Blockly.Blocks.stop_animation.init}}
 */
Blockly.Blocks['stop_animation'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.STOP_ANIMATION)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.STOP_ANIMATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STOP_ANIMATION_HELP_URL);
  }
};

/**
 * @Deprecated use play_animation_vi instead
 * @type {{init: Blockly.Blocks.play_animation.init}}
 */
Blockly.Blocks['play_animation'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PLAY_ANIMATION);
    this.appendValueInput('ANIMATION');
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setHelpUrl(Blockly.Msg.PLAY_ANIMATION_HELP_URL);
    this.setTooltip(Blockly.Msg.PLAY_ANIMATION_TOOLTIP);
  }
};

/**
 * @Deprecated use set_frame_vi instead
 * @type {{init: Blockly.Blocks.set_frame.init}}
 */
Blockly.Blocks['set_frame'] = {
  init: function () {
    this.appendValueInput('FRAME_NUMBER')
      .appendField(Blockly.Msg.SET_FRAME)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_FRAME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_FRAME_HELP_URL);
  }
};

/**
 * @Deprecated used add_animation_vi instead
 * @type {{init: Blockly.Blocks.add_animation.init}}
 */
Blockly.Blocks['add_animation'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_ANIMATION)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'object');
    this.appendDummyInput()
      .appendField(Blockly.Msg.TAGGED)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.NAME), 'NAME');
    this.appendValueInput('FRAMES')
      .setCheck(null)
      .appendField(Blockly.Msg.WITH_FRAMES);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DISPLAYED_AT)
      .appendField(new Blockly.FieldNumber(60), 'FPS')
      .appendField(Blockly.Msg.FPS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'LOOP');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ADD_ANIMATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_ANIMATION_HELP_URL);
    this.setColour(PHASER_ANIMATION_COLOUR);
  }
};
//endregion

//region SPRITE_DEPRECATED
/**
 * @deprecated use add_child_vi instead
 * @type {{init: Blockly.Blocks.add_child.init}}
 */
Blockly.Blocks['add_child'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.ADD_CHILD);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_CHILD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_CHILD_HELP_URL);
  }
};

/**
 * @deprecated this should never need to be called, no reason to expose to students preserved for backwards compatibility
 * do not add to the toolbox
 * @type {{init: Blockly.Blocks.reset_frame.init}}
 */
Blockly.Blocks['reset_frame'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.RESET_FRAME);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.RESET_FRAME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RESET_FRAME_HELP_URL);
  }
};

/**
 * @deprecated this should never need to be called, no reason to expose to students preserved for backwards compatibility
 * do not add to the toolbox
 * @type {{init: Blockly.Blocks.reset_frame.init}}
 */
Blockly.Blocks['resize_frame'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.RESIZE_FRAME);
    this.appendValueInput('PARENT')
      .setCheck(null)
      .appendField(Blockly.Msg.RESIZE_FRAME_ACCOMODATE);
    this.appendValueInput('WIDTH')
      .setCheck('Number')
      .appendField(Blockly.Msg.WIDTH);
    this.appendValueInput('HEIGHT')
      .setCheck('Number')
      .appendField(Blockly.Msg.HEIGHT);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.RESIZE_FRAME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RESIZE_FRAME_HELP_URL);
  }
};
//endregion

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.get_object_width.init}}
 */
Blockly.Blocks['get_object_width'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_OBJECT_WIDTH)
      .appendField(new Blockly.FieldVariable('item'), 'NAME');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.GET_OBJECT_WIDTH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_OBJECT_WIDTH_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_object_width.init}}
 */
Blockly.Blocks['set_object_width'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_OBJECT_WIDTH)
      .appendField(new Blockly.FieldVariable('item'), 'NAME');
    this.appendValueInput('NAME')
      .setCheck('Number');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.SET_OBJECT_WIDTH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_OBJECT_WIDTH_HELP_URL);
  }
};

//endregion

//region PHASER_GAME

//region STARTUP
Blockly.Blocks['phaser_simple_init'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_SIMPLE_INIT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WIDTH)
      .appendField(new Blockly.FieldNumber(800), 'WIDTH')
      .appendField(Blockly.Msg.HEIGHT)
      .appendField(new Blockly.FieldNumber(600), 'HEIGHT');
    this.appendStatementInput('PRELOAD')
      .setCheck(null)
      .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_PRELOAD);
    this.appendStatementInput('CREATE')
      .setCheck(null)
      .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_CREATE);
    this.appendStatementInput('UPDATE')
      .setCheck(null)
      .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_UPDATE);
    this.setColour(PHASER_STARTUP_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_SIMPLE_INIT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_SIMPLE_INIT_HELP_URL);
  }
};

Blockly.Blocks['start_phaser_for_states'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.START_PHASER_FOR_STATES);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WIDTH)
      .appendField(new Blockly.FieldNumber(800, 0), 'WIDTH');
    this.appendDummyInput()
      .appendField(Blockly.Msg.HEIGHT)
      .appendField(new Blockly.FieldNumber(600, 0), 'HEIGHT');
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setColour(PHASER_STARTUP_COLOUR);
    this.setTooltip(Blockly.Msg.START_PHASER_FOR_STATES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.START_PHASER_FOR_STATES_HELP_URL);
  }
};
//endregion

//region STATES
Blockly.Blocks['statemanager_add_state'] = {
  init: function () {
    this.appendValueInput('NAME')
      .setCheck(null)
      .appendField(Blockly.Msg.STATEMANAGER_ADD_STATE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TAGGED)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.TAG), 'KEY')
      .appendField(Blockly.Msg.STATEMANAGER_ADD_STATE_TO_MANAGER);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_STATES_COLOUR);
    this.setTooltip(Blockly.Msg.STATEMANAGER_ADD_STATE_TOOLTIP);
    //TODO: This will need supporting documentation on or side illustrating how to create this class with blocks
    // this.setHelpUrl('')
  }
};

Blockly.Blocks['statemanager_start_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.STATEMANAGER_START_STATE)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.TAG), 'TAG');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_STATES_COLOUR);
    this.setTooltip(Blockly.Msg.STATEMANAGER_START_STATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STATEMANAGER_START_STATE_HELP_URL);
  }
};

Blockly.Blocks['statemanager_get_current_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.STATEMANAGER_GET_CURRENT_STATE);
    this.setOutput(true, null);
    this.setColour(PHASER_STATES_COLOUR);
    this.setTooltip(Blockly.Msg.STATEMANAGER_GET_CURRENT_STATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STATEMANAGER_GET_CURRENT_STATE_HELP_URL);
  }
};

Blockly.Blocks['statemanager_restart_state'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.STATEMANAGER_RESTART_STATE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_STATES_COLOUR);
    this.setTooltip(Blockly.Msg.STATEMANAGER_RESTART_STATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STATEMANAGER_RESTART_STATE_HELP_URL);
  }
};

Blockly.Blocks['statemanager_check_state'] = {
  init: function () {
    this.appendValueInput('KEY')
      .setCheck('String')
      .appendField(Blockly.Msg.STATEMANAGER_CHECK_STATE);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_STATES_COLOUR);
    this.setTooltip(Blockly.Msg.STATEMANAGER_CHECK_STATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STATEMANAGER_CHECK_STATE_HELP_URL);
  }
};
//endregion

//region WORLD
Blockly.Blocks['get_world_property'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.HEIGHT, 'height'], [Blockly.Msg.WIDTH, 'width'], [Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_CENTERX, 'centerX'], [Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_CENTERY, 'centerY'], [Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_RANDOMX, 'randomX'], [Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_RANDOMY, 'randomY']]), 'NAME')
      .appendField(Blockly.Msg.GET_WORLD_PROPERTY);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.GET_WORLD_PROPERTY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_WORLD_PROPERTY_HELP_URL);
    this.setColour(PHASER_WORLD_COLOUR);
  }
};

Blockly.Blocks['set_world_bounds'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_WORLD_BOUNDS);
    this.appendValueInput('X_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('WIDTH')
      .setCheck('Number')
      .appendField(Blockly.Msg.SET_WORLD_BOUNDS_WIDTH);
    this.appendValueInput('HEIGHT')
      .setCheck('Number')
      .appendField(Blockly.Msg.SET_WORLD_BOUNDS_HEIGHT);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_WORLD_BOUNDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_WORLD_BOUNDS_HELP_URL);
    this.setColour(PHASER_WORLD_COLOUR);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['create_point'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_POINT);
    this.appendValueInput('X_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.CREATE_POINT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_POINT_HELP_URL);
    this.setColour(PHASER_WORLD_COLOUR);
  }
};

Blockly.Blocks['get_world_reference'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_WORLD_REFERENCE);
    this.setOutput(true, null);
    this.setColour(PHASER_WORLD_COLOUR);
    this.setTooltip(Blockly.Msg.GET_WORLD_REFERENCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_WORLD_REFERENCE_HELP_URL);
  }
};

Blockly.Blocks['set_game_pause'] = {
  init: function () {
    this.appendValueInput('PAUSED')
      .setCheck('Boolean')
      .appendField(Blockly.Msg.SET_GAME_PAUSE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_WORLD_COLOUR);
    this.setTooltip(Blockly.Msg.SET_GAME_PAUSE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_GAME_PAUSE_HELP_URL);
  }
};

Blockly.Blocks['get_game_pause'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_GAME_PAUSE);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_WORLD_COLOUR);
    this.setTooltip(Blockly.Msg.GET_GAME_PAUSE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_GAME_PAUSE_HELP_URL);
  }
};
//endregion

//region TIME / TIMER
//region TIME.PROPERTIES
const TIME_FIELDS_NUMERIC_WRITABLE = ['desiredFps', 'slowMotion',];
const TIME_FIELDS_NUMERIC_RO = ['pauseDuration', 'physicsElapsed', 'physicsElapsedMS'];
const TIME_FIELDS_NUMERIC = createDropDownField(TIME_FIELDS_NUMERIC_WRITABLE, TIME_FIELDS_NUMERIC_RO);

Blockly.Blocks['get_time_numeric_member'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_TIME_NUMERIC_MEMBER_TITLE)
      .appendField(new Blockly.FieldDropdown(TIME_FIELDS_NUMERIC.all), 'PROPERTY');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.GET_TIME_NUMERIC_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_TIME_NUMERIC_MEMBER_HELP_URL);
  },
  onchange: function () {
    if (TIME_FIELDS_NUMERIC_RO.includes(this.getFieldValue('PROPERTY'))) {
      this.customContextMenu = null;
    } else {
      this.customContextMenu = createNumericGetterContextMenu('set_time_numeric_member', {objectTag: null});
    }
  },
  customContextMenu: createNumericGetterContextMenu('set_time_numeric_member', {objectTag: null})
};

Blockly.Blocks['set_time_numeric_member'] = {
  init: function () {
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField(Blockly.Msg.SET_TIME_NUMERIC_MEMBER_TITLE)
      .appendField(new Blockly.FieldDropdown(TIME_FIELDS_NUMERIC.writable), 'PROPERTY')
      .appendField(Blockly.Msg.SET_TIME_NUMERIC_MEMBER_TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.SET_TIME_NUMERIC_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_TIME_NUMERIC_MEMBER_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('get_time_numeric_member', {objectTag: null})
};
//endregion

Blockly.Blocks['delta_time_seconds'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DELTA_TIME_SECONDS_TITLE);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.DELTA_TIME_SECONDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DELTA_TIME_SECONDS_HELP_URL);
  }
};

Blockly.Blocks['delta_time_milliseconds'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DELTA_TIME_MILLISECONDS_TITLE);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.DELTA_TIME_MILLISECONDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DELTA_TIME_MILLISECONDS_HELP_URL);
  }
};

//region TIMER

Blockly.Blocks['create_timer'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(`${Blockly.Msg.CREATE_TIMER_TITLE} ${Blockly.Msg.AUTO_DESTROY}`)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'AUTO_DESTROY');
    this.setOutput(true, 'Timer');
    this.setInputsInline(true);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.CREATE_TIMER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_TIMER_URL);
  }
};

Blockly.Blocks['time_constants'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.QUARTER, 'Phaser.Timer.QUARTER'],
        [Blockly.Msg.HALF, 'Phaser.Timer.HALF'],
        [Blockly.Msg.SECOND, 'Phaser.Timer.SECOND'],
        [Blockly.Msg.MINUTE, 'Phaser.Timer.MINUTE']]), 'VALUE');
    this.setOutput(true, 'Number');
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.TIMER_CONSTANTS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_TIMER_URL);

  }
};

Blockly.Blocks['start_timer'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.START_TIMER)
      .setCheck('Timer');
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.IN)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setColour(PHASER_TIME_COLOUR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.START_TIMER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.START_TIMER_URL);
  }
};

Blockly.Blocks['timer_add_event'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.TIMER_ADD_EVENT)
      .setCheck('Timer');
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.IN)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CALL)
      .appendField(new Blockly.FieldProcedure('timerCallback'), 'CALLBACK');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setInputsInline(true);
    this.setColour(PHASER_TIME_COLOUR);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.TIMER_ADD_EVENT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.TIMER_ADD_EVENT_URL);
  }
};

Blockly.Blocks['timer_destroy'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.DESTROY_TIMER)
      .setCheck('Timer');
    this.setColour(PHASER_TIME_COLOUR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.DESTROY_TIMER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DESTROY_TIMER_URL);
  }
};

Blockly.Blocks['timer_pause'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.PAUSE_TIMER)
      .setCheck('Timer');
    this.setColour(PHASER_TIME_COLOUR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.PAUSE_TIMER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PAUSE_TIMER_URL);
  }
};

Blockly.Blocks['timer_resume'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.RESUME_TIMER)
      .setCheck('Timer');
    this.setColour(PHASER_TIME_COLOUR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.RESUME_TIMER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RESUME_TIMER_URL);
  }
};

Blockly.Blocks['timer_stop'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.STOP_TIMER)
      .setCheck('Timer');
    this.appendDummyInput()
      .appendField(Blockly.Msg.STOP_TIMER_CLEAR_EVENTS)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'CLEAR_EVENTS');
    this.setColour(PHASER_TIME_COLOUR);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip(Blockly.Msg.STOP_TIMER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STOP_TIMER_URL);
  }
};

Blockly.Blocks['timer_loop_event'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.TIMER_LOOP_EVENT)
      .setCheck('Timer');
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.EVERY)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CALL)
      .appendField(new Blockly.FieldProcedure('timerCallback'), 'CALLBACK');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setInputsInline(true);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.TIMER_LOOP_EVENT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.TIMER_LOOP_EVENT_URL);
  }
};

Blockly.Blocks['timer_repeat_event'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.TIMER_REPEAT_EVENT)
      .setCheck('Timer');
    this.appendValueInput('REPEAT_COUNT')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIMER_REPEAT_EVENT_COUNT);
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.EVERY)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CALL)
      .appendField(new Blockly.FieldProcedure('timerCallback'), 'CALLBACK');
    this.setNextStatement(true);
    this.setPreviousStatement(true);
    this.setInputsInline(true);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.TIMER_REPEAT_EVENT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.TIMER_REPEAT_EVENT_URL);
  }
};

Blockly.Blocks['timer_set_on_complete_callback'] = {
  init: function () {
    this.appendValueInput('TIMER')
      .appendField(Blockly.Msg.TIMER_SET_ON_COMPLETE_CALLBACK)
      .setCheck('Timer');
    this.appendDummyInput()
      .appendField(Blockly.Msg.TIMER_SET_ON_COMPLETE_CALLBACK_COMPLETED)
      .appendField(new Blockly.FieldProcedure('onTimerComplete'), 'CALLBACK');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(PHASER_TIME_COLOUR);
    this.setTooltip(Blockly.Msg.TIMER_SET_ON_COMPLETE_CALLBACK_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.TIMER_SET_ON_COMPLETE_CALLBACK_URL);
  }
};
//endregion

//endregion

//endregion phaser game

//region PHASER_OBJECTS

//region SPRITES AND IMAGES
Blockly.Blocks['create_image'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_IMAGE);
    this.setColour(PHASER_COLOUR);
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.TAG)
      .setCheck('String');
    this.appendValueInput('SRC')
      .appendField(Blockly.Msg.SOURCE)
      .setCheck('String');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.CREATE_IMAGE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_IMAGE_HELP_URL);
  }
};

Blockly.Blocks['create_sprite_sheet'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_SPRITE_SHEET);
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.TAG)
      .setCheck('String');
    this.appendValueInput('SRC')
      .appendField(Blockly.Msg.SOURCE)
      .setCheck('String');
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_SPRITE_SHEET_FRAME_WIDTH)
      .appendField(new Blockly.FieldNumber(0), 'FRAME_WIDTH')
      .appendField(Blockly.Msg.PIXELS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_SPRITE_SHEET_FRAME_HEIGHT)
      .appendField(new Blockly.FieldNumber(0), 'FRAME_HEIGHT')
      .appendField(Blockly.Msg.PIXELS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.CREATE_SPRITE_SHEET_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_SPRITE_SHEET_HELP_URL);
  }
};

Blockly.Blocks['add_image'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_IMAGE);
    this.appendValueInput('X_POS')
      .appendField(Blockly.Msg.X)
      .setCheck('Number');
    this.appendValueInput('Y_POS')
      .appendField(Blockly.Msg.Y)
      .setCheck('Number');
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.TAGGED)
      .setCheck('String');
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_IMAGE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_IMAGE_HELP_URL);
  }
};

Blockly.Blocks['addspritewithatlas'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADDSPRITEWITHATLAS);
    this.appendValueInput('tag')
      .setCheck('String')
      .appendField(Blockly.Msg.TAG);
    this.appendValueInput('text_source')
      .setCheck('String')
      .appendField(Blockly.Msg.ADDSPRITEWITHATLAS_SOURCE);
    this.appendValueInput('text_xmlsource')
      .setCheck('String')
      .appendField(Blockly.Msg.XML);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ADDSPRITEWITHATLAS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADDSPRITEWITHATLAS_HELP_URL);
  }
};

Blockly.Blocks['imagesubtextureatlas'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.IMAGESUBTEXTUREATLAS);
    this.appendValueInput('x')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('y')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('spritesource')
      .setCheck('String')
      .appendField(Blockly.Msg.TAGGED);
    this.appendValueInput('xmlsubtexture')
      .setCheck('String')
      .appendField(Blockly.Msg.IMAGESUBTEXTUREATLAS_ID);
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.IMAGESUBTEXTUREATLAS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.IMAGESUBTEXTUREATLAS_HELP_URL);
  }
};

Blockly.Blocks['add_child_vi'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.ADD_CHILD_VI);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_CHILD_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_CHILD_VI_HELP_URL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['add_child_at'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.ADD_CHILD_AT);
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT')
      .appendField(Blockly.Msg.AT_INDEX);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_CHILD_AT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_CHILD_AT_HELP_URL);
  }
};

Blockly.Blocks['add_child_at_vi'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.ADD_CHILD_AT_VI);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT_INDEX);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_CHILD_AT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_CHILD_AT_VI_HELP_URL);
  }
};

Blockly.Blocks['align_in'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.ALIGN);
    this.appendValueInput('CONTAINER')
      .setCheck(null)
      .appendField(Blockly.Msg.INSIDE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_THE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TOP_LEFT, 'TOP_LEFT'], [Blockly.Msg.TOP_CENTER, 'TOP_CENTER'], [Blockly.Msg.TOP_RIGHT, 'TOP_RIGHT'], [Blockly.Msg.LEFT_CENTER, 'LEFT_CENTER'], [Blockly.Msg.CENTER, 'CENTER'], [Blockly.Msg.RIGHT_CENTER, 'RIGHT_CENTER'], [Blockly.Msg.BOTTOM_LEFT, 'BOTTOM_LEFT'], [Blockly.Msg.BOTTOM_CENTER, 'BOTTOM_CENTER'], [Blockly.Msg.BOTTOM_RIGHT, 'BOTTOM_RIGHT']]), 'POSITION');
    this.appendValueInput('OFFSETX')
      .setCheck('Number')
      .appendField(Blockly.Msg.ALIGN_IN_OFFSET_X);
    this.appendValueInput('OFFSETY')
      .setCheck('Number')
      .appendField(Blockly.Msg.ALIGN_IN_OFFSET_Y);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ALIGN_IN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ALIGN_IN_HELP_URL);
  }
};

Blockly.Blocks['align_to'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.ALIGN);
    this.appendValueInput('CONTAINER')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_THE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.TOP_LEFT, 'TOP_LEFT'], [Blockly.Msg.TOP_CENTER, 'TOP_CENTER'], [Blockly.Msg.TOP_RIGHT, 'TOP_RIGHT'], [Blockly.Msg.TOP_LEFT, 'LEFT_TOP'], [Blockly.Msg.CENTER_LEFT, 'LEFT_CENTER'], [Blockly.Msg.BOTTOM_LEFT, 'LEFT_BOTTOM'], [Blockly.Msg.TOP_RIGHT, 'RIGHT_TOP'], [Blockly.Msg.CENTER_RIGHT, 'RIGHT_CENTER'], [Blockly.Msg.BOTTOM_RIGHT, 'RIGHT_BOTTOM'], [Blockly.Msg.BOTTOM_LEFT, 'BOTTOM_LEFT'], [Blockly.Msg.BOTTOM_CENTER, 'BOTTOM_CENTER'], [Blockly.Msg.BOTTOM_RIGHT, 'BOTTOM_RIGHT']]), 'POSITION');
    this.appendValueInput('OFFSETX')
      .setCheck('Number')
      .appendField(Blockly.Msg.ALIGN_TO_OFFSET_X);
    this.appendValueInput('OFFSETY')
      .setCheck('Number')
      .appendField(Blockly.Msg.OFFSET_Y);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ALIGN_TO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ALIGN_TO_HELP_URL);
  }
};

Blockly.Blocks['bring_to_top'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.BRING_TO_TOP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BRING_TO_TOP_FRONT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.BRING_TO_TOP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.BRING_TO_TOP_HELP_URL);
  }
};

Blockly.Blocks['check_world_bounds'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MAKE);
    this.appendValueInput('BOOL')
      .setCheck('Boolean')
      .appendField(Blockly.Msg.CHECK_WORLD_BOUNDS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.CHECK_WORLD_BOUNDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CHECK_WORLD_BOUNDS_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.contains.init}}
 */
Blockly.Blocks['contains'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.IS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.A_CHILD_OF)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT')
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.CONTAINS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CONTAINS_HELP_URL);
  }
};

Blockly.Blocks['contains_vi'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.IS);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.A_CHILD_OF)
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.CONTAINS_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CONTAINS_VI_HELP_URL);
  }
};

Blockly.Blocks['crop'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.CROP);
    this.appendValueInput('RECTANGLE')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.CROP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CROP_HELP_URL);
  }
};

Blockly.Blocks['clear_cropping'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.CLEAR_CROPPING);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.CLEAR_CROPPING_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CLEAR_CROPPING_HELP_URL);
  }
};

Blockly.Blocks['destroy_sprite'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.DESTROY);
    this.appendValueInput('BOOL')
      .setCheck('Boolean')
      .appendField(Blockly.Msg.DESTROY_SPRITE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.DESTROY_SPRITE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DESTROY_SPRITE_HELP_URL);
  }
};

Blockly.Blocks['get_child_at_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.GET_CHILD_AT_VI);
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT_INDEX);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.GET_CHILD_AT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_CHILD_AT_VI_HELP_URL);
  }
};

Blockly.Blocks['get_child_index'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_CHILD_INDEX);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.GET_CHILD_INDEX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_CHILD_INDEX_HELP_URL);
  }
};

Blockly.Blocks['get_child_index_vi'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_CHILD_INDEX_VI);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ON);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.GET_CHILD_INDEX_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_CHILD_INDEX_VI_HELP_URL);
  }
};

Blockly.Blocks['load_texture'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.LOAD_TEXTURE);
    this.appendValueInput('TEXTURE')
      .setCheck('String')
      .appendField(Blockly.Msg.LOAD_TEXTURE_TAG);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.LOAD_TEXTURE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LOAD_TEXTURE_HELP_URL);
    this.setInputsInline(true);
  }
};

Blockly.Blocks['move_down'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MOVE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_DOWN);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.MOVE_DOWN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MOVE_DOWN_HELP_URL);
  }
};

Blockly.Blocks['move_up'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MOVE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.UP);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.MOVE_UP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MOVE_UP_HELP_URL);
  }
};

Blockly.Blocks['sprite_overlap'] = {
  init: function () {
    this.appendValueInput('SPRITEA')
      .setCheck(null)
      .appendField(Blockly.Msg.DOES);
    this.appendValueInput('SPRITEB')
      .setCheck(null)
      .appendField(Blockly.Msg.SPRITE_OVERLAP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SPRITE_OVERLAP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SPRITE_OVERLAP_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.out_of_bounds_kill.init}}
 */
Blockly.Blocks['out_of_bounds_kill'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MAKE);
    this.appendValueInput('BOOL')
      .setCheck('Boolean')
      .appendField(Blockly.Msg.OUT_OF_BOUNDS_KILL);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.OUT_OF_BOUNDS_KILL_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OUT_OF_BOUNDS_KILL_HELP_URL);
  }
};

Blockly.Blocks['out_of_bounds_faint'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MAKE);
    this.appendValueInput('BOOL')
      .setCheck('Boolean')
      .appendField(Blockly.Msg.OUT_OF_BOUNDS_FAINT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.OUT_OF_BOUNDS_FAINT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OUT_OF_BOUNDS_FAINT_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.remove_child.init}}
 */
Blockly.Blocks['remove_child'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.REMOVE_CHILD);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FROM)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_CHILD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_CHILD_HELP_URL);
  }
};

Blockly.Blocks['remove_child_vi'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.REMOVE_CHILD_VI);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FROM);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_CHILD_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_CHILD_VI_HELP_URL);
  }
};

Blockly.Blocks['remove_child_at_vi'] = {
  init: function () {
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.REMOVE_CHILD_AT_VI);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FROM);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_CHILD_AT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_CHILD_AT_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.remove_child_at.init}}
 */
Blockly.Blocks['remove_child_at'] = {
  init: function () {
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.REMOVE_CHILD_AT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FROM)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_CHILD_AT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_CHILD_AT_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.remove_children.init}}
 */
Blockly.Blocks['remove_children'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOVE_CHILDREN)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_CHILDREN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_CHILDREN_HELP_URL);
  }
};

Blockly.Blocks['remove_children_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.REMOVE_CHILDREN_VI);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_CHILDREN_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_CHILDREN_VI_HELP_URL);
  }
};
//endregion

//region GROUP
Blockly.Blocks['create_group'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_GROUP);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.CREATE_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_GROUP_HELP_URL);
    this.setColour(PHASER_GROUPS_COLOUR);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.create_object_in_group.init}}
 */
Blockly.Blocks['create_object_in_group'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP);
    this.appendValueInput('X_POS')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .appendField(Blockly.Msg.Y);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FROM_TAG)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.DEFAULT), 'TAG')
      .appendField(Blockly.Msg.IN_THE)
      .appendField(new Blockly.FieldVariable('defaultGroup'), 'GROUP')
      .appendField(Blockly.Msg.GROUP);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.CREATE_OBJECT_IN_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_OBJECT_IN_GROUP_HELP_URL);
    this.setColour(PHASER_GROUPS_COLOUR);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.create_object_in_group_with_frame.init}}
 */
Blockly.Blocks['create_object_in_group_with_frame'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME);
    this.appendValueInput('X_POS')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .appendField(Blockly.Msg.Y);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FROM_TAG)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.DEFAULT), 'TAG')
      .appendField(Blockly.Msg.IN_THE)
      .appendField(new Blockly.FieldVariable('defaultGroup'), 'GROUP')
      .appendField(Blockly.Msg.GROUP);
    this.appendValueInput('FRAME')
      .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_NUMBER);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_HELP_URL);
    this.setColour(PHASER_GROUPS_COLOUR);
  }
};

Blockly.Blocks['create_object_in_group_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP);
    this.appendValueInput('X_POS')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.FROM_TAG);
    this.appendValueInput('GROUP')
      .appendField(Blockly.Msg.IN_GROUP);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_HELP_URL);
    this.setColour(PHASER_GROUPS_COLOUR);
  }
};

Blockly.Blocks['create_object_in_group_with_frame_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME);
    this.appendValueInput('X_POS')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.FROM_TAG);
    this.appendValueInput('GROUP')
      .appendField(Blockly.Msg.IN_GROUP);
    this.appendValueInput('FRAME')
      .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_HELP_URL);
    this.setColour(PHASER_GROUPS_COLOUR);
  }
};

Blockly.Blocks['add_to_group'] = {
  init: function () {
    this.appendValueInput('NEW_ITEM')
      .setCheck(null)
      .appendField(Blockly.Msg.ADD);
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.ADD_TO_GROUP);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_TO_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_TO_GROUP_HELP_URL);
  }
};

Blockly.Blocks['remove_from_group'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.REMOVE);
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.REMOVE_FROM_GROUP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.REMOVE_FROM_GROUP_DESTROY)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'DESTROY');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_FROM_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_FROM_GROUP_HELP_URL);
  }
};

Blockly.Blocks['group_contains'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP);
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.CONTAINS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_CONTAINS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_CONTAINS_HELP_URL);
  }
};

Blockly.Blocks['group_count_alive_dead'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_COUNT_ALIVE_DEAD)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ALIVE, 'Living'], [Blockly.Msg.FAINTED, 'Fainted']]), 'STATE')
      .appendField(Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_OBJECTS);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_HELP_URL);
  }
};

Blockly.Blocks['destroy_group'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.DESTROY_GROUP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DESTROY_GROUP_MEMBERS)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'HANDLE_CHILDREN');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.DESTROY_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DESTROY_GROUP_HELP_URL);
  }
};

Blockly.Blocks['group_get_all'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_GET_ALL);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_GET_ALL_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_GET_ALL_HELP_URL);
  }
};

Blockly.Blocks['group_get_at'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_GET_AT);
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT_INDEX);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_GET_AT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_GET_AT_HELP_URL);
  }
};

Blockly.Blocks['group_get_closest_to'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_GET_CLOSEST_TO_MEMBER);
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_GET_CLOSEST_TO);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_GET_CLOSEST_TO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_GET_CLOSEST_TO_HELP_URL);
  }
};

Blockly.Blocks['group_get_first_alive_dead'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_FIRST)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ALIVE, 'Alive'], [Blockly.Msg.DEAD, 'Dead']]), 'MODE')
      .appendField(Blockly.Msg.MEMBER_OF_GROUP);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_HELP_URL);
  }
};

Blockly.Blocks['group_get_first_alive_fainted'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ALIVE, 'Alive'], [Blockly.Msg.FAINTED, 'Fainted']]), 'MODE')
      .appendField(Blockly.Msg.MEMBER_OF_GROUP);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_HELP_URL);
  }
};

Blockly.Blocks['group_get_random'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_GET_RANDOM);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_GET_RANDOM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_GET_RANDOM_HELP_URL);
  }
};

Blockly.Blocks['group_get_random_exists'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_GET_RANDOM_EXISTS_GROUP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROUP_GET_RANDOM_EXISTS);
    this.setOutput(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_GET_RANDOM_EXISTS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_GET_RANDOM_EXISTS_HELP_URL);
  }
};

Blockly.Blocks['group_remove_all'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GROUP_REMOVE_ALL);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GROUP_REMOVE_ALL_DESTROY)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'DESTROY_CHILDREN');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.GROUP_REMOVE_ALL_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GROUP_REMOVE_ALL_HELP_URL);
  }
};

Blockly.Blocks['add_to_world'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.ADD);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_TO_WORLD);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_WORLD_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_TO_WORLD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_TO_WORLD_HELP_URL);
  }
};
//endregion

//region ANIMATION
Blockly.Blocks['add_animation_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ADD_ANIMATION_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TAGGED)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.NAME), 'NAME');
    this.appendValueInput('FRAMES')
      .setCheck(null)
      .appendField(Blockly.Msg.WITH_FRAMES);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DISPLAYED_AT)
      .appendField(new Blockly.FieldNumber(60), 'FPS')
      .appendField(Blockly.Msg.FPS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'LOOP');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ADD_ANIMATION_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_ANIMATION_VI_HELP_URL);
    this.setColour(PHASER_ANIMATION_COLOUR);
  }
};

Blockly.Blocks['play_animation_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PLAY_ANIMATION_VI);
    this.appendValueInput('ANIMATION');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ON);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.PLAY_ANIMATION_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PLAY_ANIMATION_VI_HELP_URL);
    this.setInputsInline(true);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.animation_next.init}}
 */
Blockly.Blocks['animation_next'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ANIMATION_NEXT)
      .appendField(new Blockly.FieldNumber(1, 1), 'FRAMECOUNT')
      .appendField(Blockly.Msg.ON)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_NEXT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_NEXT_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.animation_previous.init}}
 */
Blockly.Blocks['animation_previous'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ANIMATION_PREVIOUS)
      .appendField(new Blockly.FieldNumber(1, 1), 'FRAMECOUNT')
      .appendField(Blockly.Msg.ON)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_PREVIOUS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_PREVIOUS_HELP_URL);
  }
};

Blockly.Blocks['animation_next_vi'] = {
  init: function () {
    this.appendValueInput('FRAMECOUNT')
      .appendField(Blockly.Msg.ANIMATION_NEXT_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FRAMES);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_NEXT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_NEXT_VI_HELP_URL);
  }
};

Blockly.Blocks['animation_previous_vi'] = {
  init: function () {
    this.appendValueInput('FRAMECOUNT')
      .appendField(Blockly.Msg.ANIMATION_PREVIOUS_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FRAMES);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_PREVIOUS_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_PREVIOUS_VI_HELP_URL);
  }
};

Blockly.Blocks['refresh_frame'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.REFRESH_FRAME)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.REFRESH_FRAME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REFRESH_FRAME_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.animation_update.init}}
 */
Blockly.Blocks['animation_update'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ANIMATION_UPDATE)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_UPDATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_UPDATE_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.validate_frames.init}}
 */
Blockly.Blocks['validate_frames'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.VALIDATE_FRAMES)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'Object');
    this.appendValueInput('FRAMES')
      .setCheck('Array')
      .appendField(Blockly.Msg.VALIDATE_FRAMES_ARRAY);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.VALIDATE_FRAMES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.VALIDATE_FRAMES_HELP_URL);
  }
};

Blockly.Blocks['validate_frames_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.VALIDATE_FRAMES_VI);
    this.appendValueInput('FRAMES')
      .setCheck('Array')
      .appendField(Blockly.Msg.VALIDATE_FRAMES_VI_ARRAY);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.VALIDATE_FRAMES_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.VALIDATE_FRAMES_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.animation_destroy.init}}
 */
Blockly.Blocks['animation_destroy'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ANIMATION_DESTROY)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_DESTROY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_DESTROY_HELP_URL);
  }
};

Blockly.Blocks['animation_destroy_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ANIMATION_DESTROY_VI);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_DESTROY_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_DESTROY_VI_HELP_URL);
  }
};

Blockly.Blocks['stop_animation_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.STOP_ANIMATION_VI);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.STOP_ANIMATION_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STOP_ANIMATION_VI_HELP_URL);
  }
};

Blockly.Blocks['set_frame_vi'] = {
  init: function () {
    this.appendValueInput('FRAME_NUMBER')
      .appendField(Blockly.Msg.SET_FRAME_VI);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_FRAME_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_FRAME_VI_HELP_URL);
  }
};

// Revised field manipulation blocks for animations
// Note that these do not need to be translated because they will always have to appear as shown below.
const ANIMATION_BOOLEAN_WRITABLE = ['enableUpdate', 'isFinished', 'isPaused', 'isPlaying', 'isReversed', 'faintOnComplete', 'loop', 'paused', 'reversed'];
const ANIMATION_BOOLEAN_FIELDS = createDropDownField(ANIMATION_BOOLEAN_WRITABLE, []);

const ANIMATION_NUMERIC_WRITABLE = ['delay', 'frame', 'loopCount', 'speed'];
const ANIMATION_NUMERIC_READABLE = ['frameTotal'];
const ANIMATION_NUMERIC_FIELDS = createDropDownField(ANIMATION_NUMERIC_WRITABLE, ANIMATION_NUMERIC_READABLE);

const ANIMATION_STRING_WRITABLE = ['name'];
const ANIMATION_STRING_FIELDS = createDropDownField(ANIMATION_STRING_WRITABLE, []);

Blockly.Blocks['set_animation_boolean_field_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_BOOLEAN_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Boolean');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ANIMATION_BOOLEAN_FIELD_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_ANIMATION_BOOLEAN_FIELD_VI_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('get_animation_boolean_field_vi', {propertyTag: 'FIELD'})
};

Blockly.Blocks['set_animation_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_NUMERIC_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ANIMATION_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_ANIMATION_NUMERIC_FIELD_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('get_animation_numeric_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['set_animation_string_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_STRING_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_STRING_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('String');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ANIMATION_STRING_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_ANIMATION_STRING_FIELD_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('get_animation_string_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_animation_boolean_field_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_BOOLEAN_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ANIMATION_BOOLEAN_FIELD_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_ANIMATION_BOOLEAN_FIELD_VI_HELP_URL);
  },
  customContextMenu: createBooleanGetterContextMenu('set_animation_boolean_field_vi', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_animation_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_NUMERIC_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ANIMATION_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_ANIMATION_NUMERIC_FIELD_HELP_URL);
  },
  customContextMenu: createNumericGetterContextMenu('set_animation_numeric_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_animation_string_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_STRING_FIELD)
      .appendField(new Blockly.FieldDropdown(ANIMATION_STRING_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ANIMATION_STRING_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_ANIMATION_STRING_FIELD_HELP_URL);
  },
  customContextMenu: createStringGetterContextMenu('set_animation_string_field', {propertyTag: 'FIELD'})
};

//endregion

//region TEXT

Blockly.Blocks['add_text'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_TEXT);
    this.appendValueInput('X_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('INITIAL_TEXT')
      .setCheck('String')
      .appendField(Blockly.Msg.ADD_TEXT_INITIAL);
    this.appendValueInput('FONT_SIZE')
      .setCheck('Number')
      .appendField(Blockly.Msg.ADD_TEXT_FONT_SIZE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_TEXT_FONT_COLOUR)
      .appendField(new Blockly.FieldColour('#ff0000'), 'FILL');
    this.setOutput(true, null);
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.ADD_TEXT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_TEXT_HELP_URL);
    this.setColour(PHASER_TEXT_COLOUR);
  }
};

/**
 * @deprecated Use set_text_vi instead
 * @type {{init: Blockly.Blocks.set_text.init}}
 */
Blockly.Blocks['set_text'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_TEXT)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_TEXT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_TEXT_HELP_URL);
    this.setColour(PHASER_TEXT_COLOUR);
  }
};

Blockly.Blocks['set_text_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SET_TEXT_VI);
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_TEXT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_TEXT_VI_HELP_URL);
    this.setColour(PHASER_TEXT_COLOUR);
  }
};

Blockly.Blocks['create_bitmapFont'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_BITMAPFONT);
    this.appendValueInput('TAG')
      .appendField(Blockly.Msg.TAG)
      .setCheck('String');
    this.appendValueInput('SRC')
      .appendField(Blockly.Msg.SOURCE)
      .setCheck('String');
    this.appendValueInput('XML')
      .appendField(Blockly.Msg.CREATE_BITMAPFONT_XML)
      .setCheck('String');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_TEXT_COLOUR);
    this.setTooltip(Blockly.Msg.CREATE_BITMAPFONT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_BITMAPFONT_HELP_URL);
  }
};
//endregion

//region EMITTER
Blockly.Blocks['addemitter'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADDEMITTER);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('maxParticles')
      .setCheck('Number')
      .appendField(Blockly.Msg.ADDEMITTER_MAXPARTICLES);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.ADDEMITTER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADDEMITTER_HELP_URL);
  }
};

Blockly.Blocks['emitter_make_particles'] = {
  init: function () {
    this.appendValueInput('EMITTER')
      .appendField(Blockly.Msg.EMITTER_MAKE_PARTICLES_EMITTER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTER_MAKE_PARTICLES);
    this.appendValueInput('KEYS')
      .appendField(Blockly.Msg.KEYS)
      .setCheck(['Array', 'String']);
    this.appendValueInput('FRAMES')
      .appendField(Blockly.Msg.FRAMES)
      .setCheck(['Array', 'Number']);
    this.appendValueInput('QUANTITY')
      .appendField(Blockly.Msg.EMITTER_MAKE_PARTICLES_QAUNTITY)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.COLLIDE)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'COLLIDE');
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTER_MAKE_PARTICLES_COLLIDE_WORLD)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'COLLIDEWORLDBOUNDS');
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(false);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setHelpUrl(Blockly.Msg.EMITTER_MAKE_PARTICLES_HELP_URL);
    this.setTooltip(Blockly.Msg.EMITTER_MAKE_PARTICLES_TOOLTIP);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_make_particles.init}}
 */
Blockly.Blocks['emitters_make_particles'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_MAKE_PARTICLES_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_MAKE_PARTICLES)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.EMITTERS_MAKE_PARTICLES_TAG), 'TAG');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_MAKE_PARTICLES_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_MAKE_PARTICLES_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_set_rotation.init}}
 */
Blockly.Blocks['emitters_set_rotation'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_SET_ROTATION_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_SET_ROTATION);
    this.appendValueInput('NAME')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN);
    this.appendValueInput('NAME')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_ROTATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_ROTATION_HELP_URL);
  }
};

Blockly.Blocks['emitters_set_rotation_vi'] = {
  init: function () {
    this.appendValueInput('EMITTER')
      .appendField(Blockly.Msg.EMITTERS_SET_ROTATION_VI_EMITTER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_SET_ROTATION_VI);
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_ROTATION_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_ROTATION_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_start.init}}
 */
Blockly.Blocks['emitters_start'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_START);
    this.appendValueInput('EXPLODE')
      .setCheck('Boolean')
      .appendField(Blockly.Msg.EMITTERS_START_BURST);
    this.appendValueInput('LIFESPAN')
      .setCheck('Number')
      .appendField(Blockly.Msg.EMITTERS_START_LIEFSPAN);
    this.appendValueInput('FREQUENCY')
      .setCheck('Number')
      .appendField(Blockly.Msg.EMITTERS_START_FREQUENCY);
    this.appendValueInput('QUANTITY')
      .setCheck('Number')
      .appendField(Blockly.Msg.EMITTERS_START_QUANTITY);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_START_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_START_HELP_URL);
  }
};

Blockly.Blocks['emitters_start_vi'] = {
  init: function () {
    this.appendValueInput('EMITTER')
      .appendField(Blockly.Msg.EMITTERS_START_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_START_VI_EXPLODE)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'EXPLODE');
    this.appendValueInput('LIFESPAN')
      .setCheck('Number')
      .appendField(Blockly.Msg.EMITTERS_START_VI_LIFESPAN);
    this.appendValueInput('FREQUENCY')
      .setCheck('Number')
      .appendField(Blockly.Msg.EMITTERS_START_VI_FREQUENCY);
    this.appendValueInput('QUANTITY')
      .setCheck('Number')
      .appendField(Blockly.Msg.EMITTERS_START_VI_QUANTITY);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_START_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_START_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_set_alpha.init}}
 */
Blockly.Blocks['emitters_set_alpha'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_SET_ALPHA);
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX);
    this.appendValueInput('RATE')
      .setCheck('Number')
      .appendField(Blockly.Msg.RATE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_ALPHA_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_ALPHA_HELP_URL);
  }
};

Blockly.Blocks['emitters_set_alpha_vi'] = {
  init: function () {
    this.appendValueInput('EMITTER')
      .appendField(Blockly.Msg.ON_EMITTER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_SET_ALPHA_VI);
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX);
    this.appendValueInput('RATE')
      .setCheck('Number')
      .appendField(Blockly.Msg.RATE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_ALPHA_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_ALPHA_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_set_scale.init}}
 */
Blockly.Blocks['emitters_set_scale'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_SET_SCALE);
    this.appendValueInput('MINX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_X);
    this.appendValueInput('MAXX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_X);
    this.appendValueInput('MINY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_Y);
    this.appendValueInput('MAXY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_X);
    this.appendValueInput('RATE')
      .setCheck('Number')
      .appendField(Blockly.Msg.RATE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_SCALE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_SCALE_HELP_URL);
  }
};

Blockly.Blocks['emitters_set_scale_vi'] = {
  init: function () {
    this.appendValueInput('EMITTER')
      .appendField(Blockly.Msg.ON_EMITTER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_SET_SCALE_VI);
    this.appendValueInput('MINX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_X);
    this.appendValueInput('MAXX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_X);
    this.appendValueInput('MINY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_Y);
    this.appendValueInput('MAXY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_Y);
    this.appendValueInput('RATE')
      .setCheck('Number')
      .appendField(Blockly.Msg.RATE);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_SCALE_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_SCALE_VI_HELP_URL);
  }
};

Blockly.Blocks['set_emit_from'] = {
  init: function () {
    this.appendValueInput('Object')
      .setCheck(null)
      .appendField(Blockly.Msg.ON);
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_EMIT_FROM)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.X, 'X'], [Blockly.Msg.Y, 'Y']]), 'cord')
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('emit_loc')
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.SET_EMIT_FROM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_EMIT_FROM_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_set_speed.init}}
 */
Blockly.Blocks['emitters_set_speed'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_SET_SPEED);
    this.appendValueInput('MINX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_X);
    this.appendValueInput('MAXX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_X);
    this.appendValueInput('MINY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_Y);
    this.appendValueInput('MAXY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_SPEED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_SPEED_HELP_URL);
  }
};

Blockly.Blocks['emitters_set_speed_vi'] = {
  init: function () {
    this.appendValueInput('EMITTER')
      .appendField(Blockly.Msg.ON_EMITTER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_SET_SPEED_VI);
    this.appendValueInput('MINX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_X);
    this.appendValueInput('MAXX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_X);
    this.appendValueInput('MINY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_Y);
    this.appendValueInput('MAXY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_Y);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_SPEED_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_SPEED_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_set_gravity.init}}
 */
Blockly.Blocks['emitters_set_gravity'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_SET_GRAVITY);
    this.appendValueInput('GRAVITY')
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_GRAVITY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_GRAVITY_HELP_URL);
  }
};

Blockly.Blocks['emitters_set_gravity_vi'] = {
  init: function () {
    this.appendValueInput('EMITTER')
      .appendField(Blockly.Msg.ON_EMITTER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.EMITTERS_SET_GRAVITY_VI);
    this.appendValueInput('GRAVITY')
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_GRAVITY_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_GRAVITY_VI_HELP_URL);
  }
};

Blockly.Blocks['emitters_set_width'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ON_EMITTER)
      .appendField(new Blockly.FieldVariable('emitter'), 'EMITTER')
      .appendField(Blockly.Msg.EMITTERS_SET_WIDTH);
    this.appendValueInput('WIDTH')
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PARTICLES_COLOUR);
    this.setTooltip(Blockly.Msg.EMITTERS_SET_WIDTH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.EMITTERS_SET_WIDTH_HELP_URL);
  }
};
//endregion

//region GAME OBJECT
const GAME_OBJECT_COLOUR = 60;

const GAME_OBJECT_POINT_WRITABLE = ['position', 'anchor', 'cameraOffset', 'scaleMax', 'scaleMin', 'world', 'scale'];
const GAME_OBJECT_POINT_READABLE = ['previousPoint'];
const GAME_OBJECT_POINT_FIELDS = createDropDownField(GAME_OBJECT_POINT_WRITABLE, GAME_OBJECT_POINT_READABLE);

const GAME_OBJECT_BOOLEAN_WRITABLE = ['alive', 'checkWorldBounds', 'debug', 'exists', 'fixedToCamera', 'outOfBoundsFaint', 'outOfCameraBoundsFaint'];
const GAME_OBJECT_BOOLEAN_READONLY = ['destroyPhase', 'inCamera', 'inWorld', 'pendingDestroy'];
const GAME_OBJECT_BOOLEAN_FIELDS = createDropDownField(GAME_OBJECT_BOOLEAN_WRITABLE, GAME_OBJECT_BOOLEAN_READONLY);

const GAME_OBJECT_NUMERIC_WRITABLE = ['x', 'y', 'angle', 'health', 'height', 'width', 'lifespan', 'maxHealth'];
const GAME_OBJECT_NUMERIC_READONLY = ['bottom', 'top', 'left', 'right', 'centerX', 'centerY', 'deltaX', 'deltaY', 'deltaZ', 'offsetX', 'offsetY', 'previousRotation', 'z'];
const GAME_OBJECT_NUMERIC_FIELDS = createDropDownField(GAME_OBJECT_NUMERIC_WRITABLE, GAME_OBJECT_NUMERIC_READONLY);

Blockly.Blocks['set_game_object_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(GAME_OBJECT_POINT_FIELDS.writable), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_HELP_URL);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_game_object_point_field')
};

Blockly.Blocks['get_game_object_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_GAME_OBJECT_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(GAME_OBJECT_POINT_FIELDS.all), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.GET_GAME_OBJECT_POINT_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_GAME_OBJECT_POINT_FIELD_HELP_URL);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  },
  customContextMenu: createPointGetterContextMenu('set_game_object_point_field', {valueTag: 'POINT'})
};

Blockly.Blocks['set_game_object_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(GAME_OBJECT_NUMERIC_FIELDS.writable), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_HELP_URL);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  },
  customContextMenu: createSetterContextMenu('set_game_object_numeric_field')
};

Blockly.Blocks['get_game_object_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(GAME_OBJECT_NUMERIC_FIELDS.all), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD_HELP_URL);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  },
  customContextMenu: createGetterContextMenu('get_game_object_numeric_field')
};

Blockly.Blocks['set_game_object_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(GAME_OBJECT_BOOLEAN_FIELDS.writable), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'BOOLEAN');
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_HELP_URL);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_game_object_boolean_field')
};

Blockly.Blocks['set_game_object_boolean_field_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(GAME_OBJECT_BOOLEAN_FIELDS.writable), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')  // Value input
      .appendField(Blockly.Msg.TO)
      .setCheck('Boolean');
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_HELP_URL);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_game_object_boolean_field')
};

Blockly.Blocks['get_game_object_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_GAME_OBJECT_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(GAME_OBJECT_BOOLEAN_FIELDS.all), 'PROPERTY');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.GET_GAME_OBJECT_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_GAME_OBJECT_BOOLEAN_FIELD_HELP_URL);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  },
  customContextMenu: createBooleanGetterContextMenu('set_game_object_boolean_field')
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_object_anchor.init}}
 */
Blockly.Blocks['set_object_anchor'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SET_OBJECT_ANCHOR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('X_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_OBJECT_ANCHOR_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_OBJECT_ANCHOR_HELP_URL);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.kill_object.init}}
 */
Blockly.Blocks['kill_object'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.KILL_OBJECT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.KILL_OBJECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.KILL_OBJECT_HELP_URL);
  }
};

/**
 * Faints the object, it will still be in memory until it is destroyed can be used to create object pools and the like
 * revive will make the object alive again
 * @type {{init: Blockly.Blocks.faint_object.init}}
 */
Blockly.Blocks['faint_object'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FAINT_OBJECT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.FAINT_OBJECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.FAINT_OBJECT_HELP_URL);
  }
};

/**
 * Destroys the object removing it from memory
 * @type {{init: Blockly.Blocks.destroy_object.init}}
 */
Blockly.Blocks['destroy_object'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.DESTROY);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.DESTROY_OBJECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DESTROY_OBJECT_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_scale.init}}
 */
Blockly.Blocks['set_scale'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_SCALE)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT')
      .appendField(Blockly.Msg.BY);
    this.appendValueInput('SCALE_X')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('SCALE_Y')
      .appendField(Blockly.Msg.Y);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.SET_SCALE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_SCALE_HELP_URL);
  }
};

Blockly.Blocks['set_scale_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SET_SCALE_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BY);
    this.appendValueInput('SCALE_X')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('SCALE_Y')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.SET_SCALE_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_SCALE_VI_HELP_URL);
  }
};

Blockly.Blocks['set_pos'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.X, 'x'], [Blockly.Msg.Y, 'y']]), 'PARAM')
      .appendField(Blockly.Msg.ON);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.SET_POS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_POS_HELP_URL);
  }
};

Blockly.Blocks['object_set_to'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.FOR)
      .appendField(new Blockly.FieldVariable('object'), 'OBJECT');
    this.appendValueInput('setx')
      .setCheck('Number')
      .appendField(Blockly.Msg.OBJECT_SET_TO_SETX);
    this.appendValueInput('sety')
      .setCheck('Number')
      .appendField(Blockly.Msg.OBJECT_SET_TO_SETY);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.OBJECT_SET_TO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OBJECT_SET_TO_HELP_URL);
  }
};

Blockly.Blocks['set_velocity'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SET_VELOCITY)
      .appendField(new Blockly.FieldDropdown([['x', 'body.velocity.x'],
        ['y', 'body.velocity.y'],
        ['Angular', 'body.angularVelocity']]), 'PARAM')
      .appendField(Blockly.Msg.ON);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.SET_VELOCITY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_VELOCITY_HELP_URL);
  }
};

Blockly.Blocks['get_param'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.GET)
      .appendField(new Blockly.FieldDropdown([['x', 'x'],
        ['y', 'y'],
        ['Width', 'width'],
        ['Height', 'height'],
        ['Velocity x', 'body.velocity.x'],
        ['Velocity y', 'body.velocity.y'],
        ['Angular Velocity', 'body.angularVelocity']]), 'PARAM')
      .appendField(Blockly.Msg.GET_PARAM);
    this.setOutput(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.GET_PARAM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_PARAM_HELP_URL);
  }
};

Blockly.Blocks['object_inCamera'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.IS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.OBJECT_INCAMERA);
    this.setOutput(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.OBJECT_INCAMERA_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OBJECT_INCAMERA_HELP_URL);
  }
};
Blockly.Blocks['get_camera'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_CAMERA);
    this.setOutput(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.GET_CAMERA_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_CAMERA_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.camera_follow.init}}
 */
Blockly.Blocks['camera_follow'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_FOLLOW)
      .appendField(new Blockly.FieldVariable('object'), 'OBJECT');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOLLOW_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOLLOW_HELP_URL);
  }
};

Blockly.Blocks['get_bounds'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_BOUNDS);
    this.setOutput(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.GET_BOUNDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_BOUNDS_HELP_URL);
  }
};

Blockly.Blocks['get_rotation'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.GET_ROTATION);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ROTATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_ROTATION_HELP_URL);
  }
};

Blockly.Blocks['rotate'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.ROTATE);
    this.appendValueInput('ANGLE')
      .setCheck('Number')
      .appendField(Blockly.Msg.BY);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEGREES);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.ROTATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ROTATE_HELP_URL);
  }
};

Blockly.Blocks['set_rotation'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.SET_ROTATION);
    this.appendValueInput('ROTATION')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEGREES);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ROTATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_ROTATION_HELP_URL);
  }
};

Blockly.Blocks['get_local_bounds'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_LOCAL_BOUNDS);
    this.setOutput(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.GET_LOCAL_BOUNDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_LOCAL_BOUNDS_HELP_URL);
  }
};

Blockly.Blocks['reset'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.RESET);
    this.appendValueInput('X_POS')
      .setCheck(null)
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y_POS')
      .setCheck(null)
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.RESET_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RESET_HELP_URL);
  }
};

Blockly.Blocks['revive'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.REVIVE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.REVIVE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REVIVE_HELP_URL);
  }
};

Blockly.Blocks['move_by'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MOVE_BY);
    this.appendDummyInput()
      .appendField(Blockly.Msg.BY);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GAMEOBJECT_COLOUR);
    this.setTooltip(Blockly.Msg.MOVE_BY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MOVE_BY_HELP_URL);
  }
};
//endregion

Blockly.Blocks['send_to_back'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.SEND);
    this.appendDummyInput()
      .appendField(Blockly.Msg.SEND_TO_BACK);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SEND_TO_BACK_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SEND_TO_BACK_HELP_URL);
  }
};

Blockly.Blocks['set_child_index'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.SET_CHILD_INDEX_CHILD);
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.OF)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'PARENT')
      .appendField(Blockly.Msg.SET_CHILD_INDEX);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SET_CHILD_INDEX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_CHILD_INDEX_HELP_URL);
  }
};

Blockly.Blocks['set_child_index_vi'] = {
  init: function () {
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.SET_CHILD_INDEX_CHILD);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('INDEX')
      .setCheck('Number')
      .appendField(Blockly.Msg.SET_CHILD_INDEX);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SET_CHILD_INDEX_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_CHILD_INDEX_VI_HELP_URL);
  }
};

Blockly.Blocks['set_sprite_frame'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.SET_SPRITE_FRAME);
    this.appendValueInput('FRAME')
      .setCheck(null)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SET_SPRITE_FRAME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_SPRITE_FRAME_HELP_URL);
  }
};

Blockly.Blocks['set_scale_min_max'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.SET_SCALE_MIN_MAX);
    this.appendValueInput('MINX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_X);
    this.appendValueInput('MINY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN_Y);
    this.appendValueInput('MAXX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_X);
    this.appendValueInput('MAXY')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_Y);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SET_SCALE_MIN_MAX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_SCALE_MIN_MAX_HELP_URL);
  }
};

Blockly.Blocks['clear_scale_min_max'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.CLEAR_SCALE_MIN_MAX);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.CLEAR_SCALE_MIN_MAX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CLEAR_SCALE_MIN_MAX_HELP_URL);
  }
};

Blockly.Blocks['set_texture'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.SET_TEXTURE);
    this.appendValueInput('TEXTURE')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SET_TEXTURE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_TEXTURE_HELP_URL);
  }
};

Blockly.Blocks['swap_children'] = {
  init: function () {
    this.appendValueInput('PARENT')
      .setCheck(null)
      .appendField(Blockly.Msg.SWAP_CHILDREN);
    this.appendValueInput('CHILD')
      .setCheck(null)
      .appendField(Blockly.Msg.SWAP_CHILDREN_1);
    this.appendValueInput('CHILD2')
      .setCheck(null)
      .appendField(Blockly.Msg.SWAP_CHILDREN_2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.SWAP_CHILDREN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SWAP_CHILDREN_HELP_URL);
    this.setInputsInline(true);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.get_animation_property.init}}
 */
Blockly.Blocks['get_animation_property'] = {
  init: function () {
    this.appendValueInput('SPRITE')
      .setCheck(null)
      .appendField(Blockly.Msg.ON_GAMEOBJECT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_ANIMATION_PROPERTY)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_CURRENTANIM, 'currentAnim'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_CURRENTFRAME, 'currentFrame'], [Blockly.Msg.FRAME, 'frame'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_FRAMEDATA, 'frameData'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_FRAMENAME, 'frameName'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_FRAMETOTAL, 'frameTotal'], [Blockly.Msg.GAME, 'game'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_ISLOADED, 'isLoaded'], [Blockly.Msg.NAME, 'name'], [Blockly.Msg.PAUSED, 'paused'], [Blockly.Msg.SPRITE, 'sprite'], [Blockly.Msg.GET_ANIMATION_PROPERTY_DROPDOWN_UPDATE, 'updateIfVisible']]), 'FIELD');
    this.setOutput(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ANIMATION_PROPERTY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_ANIMATION_PROPERTY_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_animation_property.init}}
 */
Blockly.Blocks['set_animation_property'] = {
  init: function () {
    this.appendValueInput('NEWPROPERTY')
      .setCheck(null)
      .appendField(Blockly.Msg.SET_ANIMATION_PROPERTY)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.FRAME, 'frame'], [Blockly.Msg.SET_ANIMATION_PROPERTY_DROPDOWN_FRAMENAME, 'frameName'], [Blockly.Msg.PAUSED, 'paused'], [Blockly.Msg.SET_ANIMATION_PROPERTY_DROPDOWN_UPDATE, 'updateIfVisible']]), 'FIELD')
      .appendField(Blockly.Msg.ON)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT')
      .appendField(Blockly.Msg.TO);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ANIMATION_PROPERTY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_ANIMATION_PROPERTY_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_animation_property_vi.init}}
 */
Blockly.Blocks['set_animation_property_vi'] = {
  init: function () {
    this.appendDummyInput('NEWPROPERTY')
      .appendField(Blockly.Msg.SET_ANIMATION_PROPERTY)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.PAUSED, 'paused'], [Blockly.Msg.SET_ANIMATION_PROPERTY_DROPDOWN_UPDATE, 'updateIfVisible']]), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ON);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'VALUE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_ANIMATION_COLOUR);
    this.setTooltip(Blockly.Msg.SET_ANIMATION_PROPERTY_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_ANIMATION_PROPERTY_VI_HELP_URL);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.animation_get_animation.init}}
 */
Blockly.Blocks['animation_get_animation'] = {
  init: function () {
    this.appendValueInput('Sprite')
      .setCheck(null)
      .appendField(Blockly.Msg.ANIMATION_GET_ANIMATION);
    this.appendDummyInput()
      .appendField(Blockly.Msg.ANIMATION_GET_ANIMATION_NAME)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.DEFAULT), 'NAME');
    this.setOutput(true, null);
    this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    this.setTooltip(Blockly.Msg.ANIMATION_GET_ANIMATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ANIMATION_GET_ANIMATION_HELP_URL);
  }
};

//endregion PHASER_OBJECTS

//region PHASER_PHYSICS
const PHYSICS_BOOLEAN_WRITABLE = ['isPaused'];
const PHYSICS_BOOLEAN_READABLE = [];
const PHYSICS_BOOLEAN_FIELDS = createDropDownField(PHYSICS_BOOLEAN_WRITABLE, PHYSICS_BOOLEAN_READABLE);

const PHYSICS_POINT_WRITABLE = ['gravity'];
const PHYSICS_POINT_READABLE = [];
const PHYSICS_POINT_FIELDS = createDropDownField(PHYSICS_POINT_WRITABLE, PHYSICS_POINT_READABLE);

//region PHYSICS_STARTUP
Blockly.Blocks['start_physics'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.START_PHYSICS)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.START_PHYSICS_SYSTEM_DROPDOWN_ARCADE, 'ARCADE'], [Blockly.Msg.START_PHYSICS_SYSTEM_DROPDOWN_P2JS, 'P2JS']]), 'SYSTEM')
      .appendField(Blockly.Msg.START_PHYSICS_SYSTEM);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.START_PHYSICS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.START_PHYSICS_HELP_URL);
    this.setColour(PHASER_PHYSICS_STARTUP_COLOUR);
  }
};

/**
 * Other physics functions assume we will be going through the arcade system.  Will need to extend the above block to
 * set something specifying which system was started. For now it will be removed from the toolbox and left for backwards
 * compatibility
 */
Blockly.Blocks['start_arcade_physics'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.START_ARCADE_PHYSICS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.START_ARCADE_PHYSICS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.START_ARCADE_PHYSICS_HELP_URL);
    this.setColour(PHASER_PHYSICS_STARTUP_COLOUR);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.enable_body_group.init}}
 */
Blockly.Blocks['enable_body_group'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ENABLE_BODY_GROUP)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'object')
      .appendField(Blockly.Msg.GROUP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_STARTUP_COLOUR);
    this.setTooltip(Blockly.Msg.ENABLE_BODY_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ENABLE_BODY_GROUP_HELP_URL);
  }
};

Blockly.Blocks['enable_body_group_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ENABLE_BODY_GROUP_VI);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_STARTUP_COLOUR);
    this.setTooltip(Blockly.Msg.ENABLE_BODY_GROUP_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ENABLE_BODY_GROUP_VI_HELP_URL);
  }
};

Blockly.Blocks['enable_arcade_physics_for_object'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'object');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_STARTUP_COLOUR);
    this.setTooltip(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_HELP_URL);
  }
};

Blockly.Blocks['enable_arcade_physics_for_object_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_VI);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_STARTUP_COLOUR);
    this.setTooltip(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_VI_HELP_URL);
  }
};

//endregion

//region UTIL
Blockly.Blocks['acceleration_from_rotation'] = {
  init: function () {
    this.appendValueInput('RADIANS')
      .setCheck('Number')
      .appendField(Blockly.Msg.ACCELERATION_FROM_ROTATION);
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.RADIANS)
      .appendField(Blockly.Msg.AT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PIXELS_PER_SECOND_SQUARED);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_PHYSICS_UTIL_COLOUR);
    this.setTooltip(Blockly.Msg.ACCELERATION_FROM_ROTATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ACCELERATION_FROM_ROTATION_HELP_URL);
  }
};

Blockly.Blocks['physics_farthest'] = {
  init: function () {
    this.appendValueInput('SOURCE')
      .setCheck(null)
      .appendField(Blockly.Msg.PHYSICS_FARTHEST);
    this.appendValueInput('TARGET')
      .setCheck(null)
      .appendField(Blockly.Msg.FROM);
    this.setInputsInline(true);

    this.setOutput(true, 'Number');
    this.setColour(PHASER_PHYSICS_UTIL_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_FARTHEST_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_FARTHEST_HELP_URL);
  }
};

Blockly.Blocks['physics_closest'] = {
  init: function () {
    this.appendValueInput('SOURCE')
      .setCheck(null)
      .appendField(Blockly.Msg.PHYSICS_CLOSEST);
    this.appendValueInput('TARGET')
      .setCheck(null)
      .appendField(Blockly.Msg.FROM);
    this.setInputsInline(true);

    this.setOutput(true, 'Number');
    this.setColour(PHASER_PHYSICS_UTIL_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_CLOSEST_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_CLOSEST_HELP_URL);
  }
};

Blockly.Blocks['physics_distance_between'] = {
  init: function () {
    this.appendValueInput('SOURCE')
      .setCheck(null)
      .appendField(Blockly.Msg.PHYSICS_DISTANCE_BETWEEN);
    this.appendValueInput('TARGET')
      .setCheck(null)
      .appendField(Blockly.Msg.AND);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_PHYSICS_UTIL_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_DISTANCE_BETWEEN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_DISTANCE_BETWEEN_HELP_URL);
  }
};

Blockly.Blocks['physics_distance_to_pointer'] = {
  init: function () {
    this.appendValueInput('SOURCE')
      .setCheck(null)
      .appendField(Blockly.Msg.PHYSICS_DISTANCE_BETWEEN);
    this.appendValueInput('POINTER')
      .setCheck(null)
      .appendField(Blockly.Msg.PHYSICS_DISTANCE_TO_POINTER);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_PHYSICS_UTIL_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_DISTANCE_TO_POINTER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_DISTANCE_TO_POINTER_HELP_URL);
  }
};

Blockly.Blocks['physics_distance_to_location'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.PHYSICS_DISTANCE_BETWEEN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AND);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_PHYSICS_UTIL_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_DISTANCE_TO_LOCATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_DISTANCE_TO_LOCATION_HELP_URL);
  }
};
//endregion

//region COLLISION
Blockly.Blocks['check_collision'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CHECK_COLLISION)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.UP, 'up'], [Blockly.Msg.DOWN, 'down'], [Blockly.Msg.LEFT, 'left'], [Blockly.Msg.RIGHT, 'right']]), 'DIRECTION')
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'COLLIDE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip(Blockly.Msg.CHECK_COLLISION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CHECK_COLLISION_HELP_URL);
  }
};

Blockly.Blocks['get_objects_under_pointer'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_OBJECTS_UNDER_POINTER);
    this.appendValueInput('POINTER')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_OBJECTS_UNDER_POINTER_OVERLAP);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_OBJECTS_UNDER_POINTER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_OBJECTS_UNDER_POINTER_HELP_URL);
  }
};

Blockly.Blocks['collision_get_objects_at_location_function'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.COLLISION_GET_OBJECTS_AT_LOCATION_FUNCTION);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AND);
    this.appendValueInput('X')
      .setCheck(null)
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck(null)
      .appendField(Blockly.Msg.YCOLON);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CALLING)
      .appendField(new Blockly.FieldProcedure('onCollide'), 'NAME')
      .appendField(Blockly.Msg.IF_OVERLAPPING);
    this.setInputsInline(true);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip(Blockly.Msg.COLLISION_GET_OBJECTS_AT_LOCATION_FUNCTION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.COLLISION_GET_OBJECTS_AT_LOCATION_FUNCTION_HELP_URL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
  renameProcedure: function (oldName, legalName) {
    if (this.getFieldValue('NAME') == oldName) {
      this.setFieldValue(legalName, 'NAME');
    }
  }
};

Blockly.Blocks['get_objects_at_location'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.GET_OBJECTS_AT_LOCATION);
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_OBJECTS_AT_LOCATION_OVERLAP);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip(Blockly.Msg.GET_OBJECTS_AT_LOCATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_OBJECTS_AT_LOCATION_HELP_URL);
  }
};

Blockly.Blocks['collide_with_arrow_function'] = {
  init: function () {
    this.appendValueInput('OBJECTA')
      .setCheck(null)
      .appendField(Blockly.Msg.COLLIDE);
    this.appendValueInput('OBJECTB')
      .setCheck(null)
      .appendField(Blockly.Msg.WITH);
    this.appendStatementInput('CALLBACK')
      .setCheck(null)
      .appendField(Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION);
    this.setInputsInline(true);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip(Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_HELP_URL);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  }
};

Blockly.Blocks['collide_function_field'] = {
  init: function () {
    this.appendValueInput('OBJECTA')
      .setCheck(null)
      .appendField('collide');
    this.appendValueInput('OBJECTB')
      .setCheck(null)
      .appendField('with');
    this.appendDummyInput()
      .appendField('calling')
      .appendField(new Blockly.FieldProcedure('onCollide'), 'NAME')
      .appendField('if overlapping');
    this.setInputsInline(true);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip('Collide two objects, if they are collide do the statements in the block');
    this.setHelpUrl('https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#collide');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
  },
  renameProcedure: function (oldName, legalName) {
    if (this.getFieldValue('NAME') == oldName) {
      this.setFieldValue(legalName, 'NAME');
    }
  }
};

Blockly.Blocks['collide_boolean'] = {
  init: function () {
    this.appendValueInput('OBJECTA');
    this.appendValueInput('OBJECTB')
      .appendField(Blockly.Msg.COLLIDE_BOOLEAN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip(Blockly.Msg.COLLIDE_BOOLEAN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.COLLIDE_BOOLEAN_HELP_URL);
  },
  renameProcedure: function (oldName, legalName) {
    if (this.getFieldValue('NAME') == oldName) {
      this.setFieldValue(legalName, 'NAME');
    }
  }
};

Blockly.Blocks['physics_intersects'] = {
  init: function () {
    this.appendValueInput('LHS');
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.PHYSICS_INTERSECTS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_INTERSECTS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_INTERSECTS_HELP_URL);
  }
};

//endregion

//region DYNAMICS
Blockly.Blocks['physics_move_to_location'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MOVE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT);
    this.appendValueInput('SPEED')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PIXELS_PER_SECOND);
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_TIME_MS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_MOVE_TO_LOCATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_MOVE_TO_LOCATION_HELP_URL);
  }
};

Blockly.Blocks['physics_move_to_pointer'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MOVE);
    this.appendValueInput('POINTER')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PIXELS_PER_SECOND);
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX_TIME_MS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_MOVE_TO_POINTER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_MOVE_TO_POINTER_HELP_URL);
  }
};

Blockly.Blocks['physics_accelerate_to_location'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.ACCELERATE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('X_LOCATION')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y_LOCATION')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHYSICS_ACCELERATE_TO_OBJECT);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_ACCELERATE_TO_LOCATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_ACCELERATE_TO_LOCATION_HELP_URL);
  }
};

Blockly.Blocks['physics_accelerate_to_pointer'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.ACCELERATE);
    this.appendValueInput('POINTER')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHYSICS_ACCELERATE_TO_OBJECT);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_ACCELERATE_TO_POINTER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_ACCELERATE_TO_POINTER_HELP_URL);
  }
};

Blockly.Blocks['physics_accelerate_to_object'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.ACCELERATE);
    this.appendValueInput('TARGET')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHYSICS_ACCELERATE_TO_OBJECT);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.PHYSICS_ACCELERATE_TO_OBJECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHYSICS_ACCELERATE_TO_OBJECT_HELP_URL);
  }
};

Blockly.Blocks['set_physics_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(PHYSICS_BOOLEAN_FIELDS.writable), 'FIELD');
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Boolean');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.SET_PHYSICS_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_PHYSICS_BOOLEAN_FIELD_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('set_physics_boolean_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_physics_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(PHYSICS_BOOLEAN_FIELDS.all), 'FIELD');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.GET_PHYSICS_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_PHYSICS_BOOLEAN_FIELD_HELP_URL);
  },
  customContextMenu: createBooleanGetterContextMenu('set_animation_boolean_field_vi', {propertyTag: 'FIELD'})
};

Blockly.Blocks['set_physics_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(PHYSICS_POINT_FIELDS.writable), 'FIELD');
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.SET_PHYSICS_POINT_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_PHYSICS_POINT_FIELD_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('set_physics_boolean_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_physics_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(PHYSICS_POINT_FIELDS.all), 'FIELD');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.GET_PHYSICS_POINT_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_PHYSICS_POINT_FIELD_HELP_URL);
  },
  customContextMenu: createBooleanGetterContextMenu('set_animation_boolean_field_vi', {propertyTag: 'FIELD'})
};
//endregion

//region BODY

// NOTE: worldBounce is null by default, and when null Body.bounce is used instead. Setting this enables specific values.
const BODY_POINT_WRITABLE = ['bounce', 'gravity', 'velocity', 'acceleration', 'drag', 'friction', 'maxVelocity', 'worldBounce'];
const BODY_POINT_FIELDS = createDropDownField(BODY_POINT_WRITABLE, []);

const BODY_POINT_WRITABLE_CLASS = ['bounce', 'gravity', 'velocity', 'acceleration', 'drag', 'friction', 'maxVelocity', 'worldBounce', 'deltaMax', 'offset', 'tilePadding'];
const BODY_POINT_FIELDS_CLASS = createDropDownField(BODY_POINT_WRITABLE_CLASS, []);

const BODY_BOOLEAN_WRITABLE = ['allowDrag', 'allowGravity', 'allowRotation', 'collideWorldBounds', 'customSeparateX', 'customSeparateY', 'dirty', 'enable', 'immovable', 'skipQuadTree', 'stopVelocityOnCollide', 'syncBounds']; // There is also 'moves', omitted to avoid confusion.
const BODY_BOOLEAN_READABLE = ['embedded', 'isCircle', 'isMoving'];
const BODY_BOOLEAN_FIELDS = createDropDownField(BODY_BOOLEAN_WRITABLE, BODY_BOOLEAN_READABLE);

const BODY_NUMERIC_WRITABLE = ['mass', 'rotation', 'angularAcceleration', 'angularVelocity', 'angularDrag', 'maxAngular', 'facing', 'overlapR', 'overlapX', 'overlapY']; // Full list, note it contains duplicates from GameObject: [ 'mass', 'rotation', 'angularAcceleration', 'angularVelocity', 'angularDrag', 'maxAngular', 'facing', 'overlapR', 'overlapX', 'overlapY', 'x', 'y' ];
const BODY_NUMERIC_READABLE = ['preRotation', 'radius', 'sourceHeight', 'sourceWidth', 'speed', 'type']; // Full list, note it contains duplicates from GameObject: [ 'angle', 'width', 'height', 'halfWidth', 'halfHeight', 'left', 'right', 'top', 'bottom',  'preRotation', 'radius', 'sourceHeight', 'sourceWidth', 'speed', 'type'];
const BODY_NUMERIC_FIELDS = createDropDownField(BODY_NUMERIC_WRITABLE, BODY_NUMERIC_READABLE);

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_body_field_point.init}}
 */
Blockly.Blocks['set_body_field_point'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.BOUNCE, 'bounce'], [Blockly.Msg.GRAVITY, 'gravity'], [Blockly.Msg.VELOCITY, 'velocity'], [Blockly.Msg.ACCELERATION, 'acceleration'], [Blockly.Msg.DRAG, 'drag'], [Blockly.Msg.FRICTION, 'friction'], [Blockly.Msg.MAXVELOCITY, 'maxVelocity'], [Blockly.Msg.WORLDBOUNCE, 'worldBounce']]), 'FIELD')
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.X, 'x'], [Blockly.Msg.Y, 'y']]), 'ELEMENT')
      .appendField(Blockly.Msg.FOR)
      .appendField(new Blockly.FieldVariable('item'), 'OBJECT');
    this.appendValueInput('VALUE')
      .setCheck(null)
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_BODY_FIELD_POINT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_BODY_FIELD_POINT_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  }
};

// Normally, it would be a good idea to have this say something about point fields.
// However, point fields here are used independently, and so it may make sense to leave them separated as such.
// (These are not points like elsewhere: More accurately, they're points being used as vectors)
Blockly.Blocks['set_body_field_point_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_VI)
      .appendField(new Blockly.FieldDropdown(BODY_POINT_FIELDS.writable), 'FIELD')
      .appendField(Blockly.Msg.IN_THE)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.X, 'x'], [Blockly.Msg.Y, 'y']]), 'ELEMENT')
      .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_VI_DIRECTION);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_BODY_FIELD_POINT_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_BODY_FIELD_POINT_VI_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_body_field_point_class', {propertyTag: 'FIELD'})
};

Blockly.Blocks['set_body_field_point_class_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI)
      .appendField(new Blockly.FieldDropdown(BODY_POINT_FIELDS_CLASS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_body_field_point_class', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_body_field_point_class'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BODY_FIELD_POINT_CLASS)
      .appendField(new Blockly.FieldDropdown(BODY_POINT_FIELDS_CLASS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.FOR);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createPointGetterContextMenu('set_body_field_point_vi', {propertyTag: 'FIELD', valueTag: 'POINT'})
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_body_boolean_field.init, customContextMenu: Function}}
 */
Blockly.Blocks['set_body_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BODY_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ALLOWROTATION, 'allowRotation'], [Blockly.Msg.ALLOWGRAVITY, 'allowGravity'], [Blockly.Msg.IMMOVABLE, 'immovable']]), 'ELEMENT')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('OBJECT');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'VALUE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_body_boolean_field', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['set_body_boolean_field_vi'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BODY_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(BODY_BOOLEAN_FIELDS.writable), 'ELEMENT')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('OBJECT');
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Boolean');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_body_boolean_field', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['get_body_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(BODY_BOOLEAN_FIELDS.all), 'ELEMENT')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('OBJECT');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GET_BODY_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_BODY_BOOLEAN_FIELD_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createBooleanGetterContextMenu('set_body_boolean_field', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['set_body_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BODY_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(BODY_NUMERIC_FIELDS.writable), 'ELEMENT')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('OBJECT');
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_BODY_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_BODY_NUMERIC_FIELD_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_body_numeric_field', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['get_body_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BODY_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(BODY_NUMERIC_FIELDS.all), 'ELEMENT')
      .appendField(Blockly.Msg.FOR);
    this.appendValueInput('OBJECT');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GET_BODY_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_BODY_NUMERIC_FIELD_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  },
  customContextMenu: createNumericGetterContextMenu('set_body_numeric_field', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['debug_body'] = {
  init: function () {
    this.appendValueInput('BODY')
      .appendField(Blockly.Msg.DEBUG_BODY_TEXT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DEBUG_BODY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_BODY_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  }
};

// Blockly.Blocks['set_body_collision_type_circle'] = {
//
// };
//
// Blockly.Blocks['set_body_collision_type_box'] = {
//
// };

Blockly.Blocks['stop_body'] = {
  init: function () {
    this.appendValueInput('BODY')
      .appendField(Blockly.Msg.STOP_BODY_TEXT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STOP_BODY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STOP_BODY_HELP_URL);
    this.setColour(PHASER_PHYSICS_BODY_COLOUR);
  }
};

//endregion

Blockly.Blocks['call_function_on_group'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CALL_FUNCTION_ON_GROUP)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.FUNCTIONNAME), 'FUNCTION');
    this.appendValueInput('GROUP')
      .appendField(Blockly.Msg.CALL_FUNCTION_ON_GROUP_CHILDREN);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.CALL_FUNCTION_ON_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CALL_FUNCTION_ON_GROUP_HELP_URL);
    this.setColour(PHASER_GROUPS_COLOUR);
  }
};

Blockly.Blocks['acceleration_from_rotation'] = {
  init: function () {
    this.appendValueInput('ROTATION')
      .setCheck('Number')
      .appendField(Blockly.Msg.ACCELERATION_FROM_ROTATION);
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.RADIANS)
      .appendField(Blockly.Msg.AT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PIXELS_PER_SECOND_SQUARED);
    this.setOutput(true, null);
    this.setColour(PHASER_PHYSICS_UTIL_COLOUR);
    this.setTooltip(Blockly.Msg.ACCELERATION_FROM_ROTATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ACCELERATION_FROM_ROTATION_HELP_URL);
  }
};

Blockly.Blocks['set_immovable'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_IMMOVABLE)
      .appendField(new Blockly.FieldVariable('defaultGroup'), 'BODY')
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'IMMOVABLE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_IMMOVABLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_IMMOVABLE_HELP_URL);
    this.setColour(PHYSICS_COLOUR);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.collide.init}}
 */
Blockly.Blocks['collide'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.COLLIDE)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'LHS')
      .appendField(Blockly.Msg.WITH)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'RHS');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.COLLIDE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.COLLIDE_HELP_URL);
    this.setColour(PHYSICS_COLOUR);
  }
};

Blockly.Blocks['collide_vi'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.COLLIDE);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.WITH);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.COLLIDE_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.COLLIDE_VI_HELP_URL);
    this.setInputsInline(true);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
  }
};

// Blockly.Blocks['collide_vi_functionfield'] = {
//     init: function () {
//         this.appendValueInput('LHS')
//             .appendField("collide");
//         this.appendValueInput('RHS')
//             .appendField("with");
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         this.setTooltip('Collide the first group/object with the second group/object');
//         this.setHelpUrl('https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#collide');
//         this.setInputsInline(true);
//         this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
//     }
// };

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.is_body_touching.init}}
 */
Blockly.Blocks['is_body_touching'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable('defaultObject'), 'BODY')
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_UP, 'up'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_DOWN, 'down'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_LEFT, 'left'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_RIGHT, 'Right'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_NONE, 'none']]), 'DIRECTION')
      .appendField(Blockly.Msg.IS_BODY_TOUCHING)

      .appendField(Blockly.Msg.QUESTION);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.IS_BODY_TOUCHING_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.IS_BODY_TOUCHING_HELP_URL);
    this.setColour(PHYSICS_COLOUR);
  }
};

Blockly.Blocks['is_body_touching_vi'] = {
  init: function () {
    this.appendValueInput('BODY');
    this.appendDummyInput()
      .appendField(Blockly.Msg.IS_BODY_TOUCHING_VI)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_UP, 'up'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_DOWN, 'down'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_LEFT, 'left'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_RIGHT, 'Right'], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_NONE, 'none']]), 'DIRECTION')
      .appendField(Blockly.Msg.QUESTION);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.IS_BODY_TOUCHING_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.IS_BODY_TOUCHING_VI_HELP_URL);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.collide_with_world_bounds.init}}
 */
Blockly.Blocks['collide_with_world_bounds'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.COLLIDE)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'BODY')
      .appendField(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'COLLIDE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_HELP_URL);
    this.setColour(PHYSICS_COLOUR);
  }
};

Blockly.Blocks['collide_with_world_bounds_vi'] = {
  init: function () {
    this.appendValueInput('BODY')
      .appendField(Blockly.Msg.MAKE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI);
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'COLLIDE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI_HELP_URL);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
  }
};

Blockly.Blocks['check_overlap_vi'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.CHECK_OVERLAP_VI);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CALLING)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.FUNCTIONNAME), 'NAME')
      .appendField(Blockly.Msg.CHECK_OVERLAP_VI_IF);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.CHECK_OVERLAP_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CHECK_OVERLAP_VI_HELP_URL);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
  }
};

Blockly.Blocks['check_overlap_vi_procedure_field'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField('check overlap between');
    this.appendValueInput('RHS')
      .appendField('and');
    this.appendDummyInput()
      .appendField('calling')
      .appendField(new Blockly.FieldProcedure('onCollide'), 'NAME')
      .appendField('if overlapping');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Checks for an overlap between objectA and objectB.');
    this.setHelpUrl('https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#overlap');
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
  },
  renameProcedure: function (oldName, legalName) {
    if (this.getFieldValue('NAME') == oldName) {
      this.setFieldValue(legalName, 'NAME');
    }
  }
};

Blockly.Blocks['overlap_boolean'] = {
  init: function () {
    this.appendValueInput('LHS');
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.OVERLAP_BOOLEAN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.OVERLAP_BOOLEAN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.OVERLAP_BOOLEAN_HELP_URL);
    this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
  },
  renameProcedure: function (oldName, legalName) {
    if (this.getFieldValue('NAME') == oldName) {
      this.setFieldValue(legalName, 'NAME');
    }
  }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.check_overlap.init}}
 */
Blockly.Blocks['check_overlap'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CHECK_OVERLAP)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'LHS')
      .appendField(Blockly.Msg.AND)
      .appendField(new Blockly.FieldVariable('defaultObject'), 'RHS')
      .appendField(Blockly.Msg.CALLING)
      .appendField(new Blockly.FieldTextInput(Blockly.Msg.FUNCTIONNAME), 'NAME')
      .appendField(Blockly.Msg.CHECK_OVERLAP_IF);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.CHECK_OVERLAP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CHECK_OVERLAP_HELP_URL);
    this.setColour(PHYSICS_COLOUR);
  }
};

/**
 * @deprecated use extended version
 * @type {{init: Blockly.Blocks.move_to_pointer.init}}
 */
/*Blockly.Blocks['move_to_pointer'] = {
  init: function () {
    this.appendValueInput('GAMEOBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MOVE_TO_POINTER);
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.MOVE_TO_POINTER_LOCATION);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOVE_TO_POINTER_SPEED);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.MOVE_TO_POINTER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MOVE_TO_POINTER_HELP_URL);
  }
};*/

/*Blockly.Blocks['move_to_pointer_extended'] = {
  init: function () {
    this.appendValueInput('GAMEOBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MOVE_TO_POINTER_EXTENDED);
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.MOVE_TO_POINTER_EXTENDED_LOCATION)
      .appendField(Blockly.Msg.MOVE_TO_POINTER_EXTENDED_SPEED);
    this.appendValueInput('MAXIMUM_TIME')
      .appendField(Blockly.Msg.MOVE_TO_POINTER_EXTENDED_TIME);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.MOVE_TO_POINTER_EXTENDED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MOVE_TO_POINTER_EXTENDED_HELP_URL);
  }
};*/

Blockly.Blocks['move_to_object'] = {
  init: function () {
    this.appendValueInput('GAMEOBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.MOVE_TO_OBJECT);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.MOVE_TO_OBJECT_2);
    this.appendValueInput('SPEED')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT)
      .appendField(Blockly.Msg.MOVE_TO_OBJECT_SPEED);
    this.appendValueInput('MAXIMUM_TIME')
      .appendField(Blockly.Msg.MOVE_TO_OBJECT_TIME);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_PHYSICS_DYNAMICS_COLOUR);
    this.setTooltip(Blockly.Msg.MOVE_TO_OBJECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MOVE_TO_OBJECT_HELP_URL);
  }
};


//endregion

//region PHASER_GEOMETRY

//region RECTANGLE
const RECTANGLE_NUMERIC_WRITABLE = ['x', 'y', 'width', 'height', 'bottom', 'centerX', 'centerY', 'left', 'randomX', 'randomY', 'right', 'top'];
const RECTANGLE_NUMERIC_READABLE = ['halfHeight', 'halfWidth', 'perimeter', 'volume'];
const RECTANGLE_NUMERIC_FIELDS = createDropDownField(RECTANGLE_NUMERIC_WRITABLE, RECTANGLE_NUMERIC_READABLE);

const RECTANGLE_POINT_WRITABLE = ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'];
const RECTANGLE_POINT_READABLE = [];
const RECTANGLE_POINT_FIELDS = createDropDownField(RECTANGLE_POINT_WRITABLE, RECTANGLE_POINT_READABLE);

Blockly.Blocks['rectangle_create'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RECTANGLE_CREATE);
    this.appendValueInput('X')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('WIDTH')
      .appendField(Blockly.Msg.WIDTH);
    this.appendValueInput('HEIGHT')
      .appendField(Blockly.Msg.HEIGHT);
    this.setInputsInline(true);
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_CREATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_CREATE_HELP_URL);
    this.setOutput(true);
  }
};

//contains, contains point, contains rect, intersects
// Blockly.Blocks['rectangle_get_prop'] = {
//   init: function() {
//     this.appendDummyInput()
//   }
// };

Blockly.Blocks['rectangle_intersects'] = {
  init: function () {
    this.appendValueInput('RECT_A');
    this.appendDummyInput()
      .appendField('intersects');
    this.appendValueInput('RECT_B');
    this.appendDummyInput()
      .appendField('?');
    this.setInputsInline(true);
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_CREATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_CREATE_HELP_URL);
    this.setOutput(true, 'Boolean');
  }
};

Blockly.Blocks['rectangle_get_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(RECTANGLE_NUMERIC_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_GET_NUMERIC_FIELDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_GET_NUMERIC_FIELDS_HELP_URL);
  }
};

Blockly.Blocks['rectangle_get_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(RECTANGLE_POINT_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_GET_POINT_FIELDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_GET_POINT_FIELDS_HELP_URL);
  }
};

Blockly.Blocks['rectangle_set_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(RECTANGLE_NUMERIC_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_SET_NUMERIC_FIELDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_GET_NUMERIC_FIELDS_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('rectangle_get_numeric_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['rectangle_set_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(RECTANGLE_POINT_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_SET_POINT_FIELDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_GET_POINT_FIELDS_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('rectangle_get_point_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['rectangle_contains_point'] = {
  init: function () {
    this.appendValueInput('RECTANGLE');
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.RECTANGLE_CONTAINS_POINT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_CONTAINS_POINT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_CONTAINS_POINT_HELP_URL);
  }
};

Blockly.Blocks['rectangle_contains'] = {
  init: function () {
    this.appendValueInput('RECTANGLE');
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.CONTAINS)
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_CONTAINS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_CONTAINS_HELP_URL);
  }
};

Blockly.Blocks['rectangle_contains_rect'] = {
  init: function () {
    this.appendValueInput('RECTANGLE_A');
    this.appendValueInput('RECTANGLE_B')
      .appendField(Blockly.Msg.CONTAINS)
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_CONTAINS_RECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_CONTAINS_RECT_HELP_URL);
  }
};

Blockly.Blocks['rectangle_clone'] = {
  init: function () {
    this.appendValueInput('RECTANGLE')
      .appendField(Blockly.Msg.CLONE);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_CLONE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_CLONE_HELP_URL);
  }
};

Blockly.Blocks['rectangle_random'] = {
  init: function () {
    this.appendValueInput('RECTANGLE')
      .appendField(Blockly.Msg.RECTANGLE_RANDOM);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_RECTANGLE_COLOUR);
    this.setTooltip(Blockly.Msg.RECTANGLE_RANDOM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RECTANGLE_RANDOM_HELP_URL);
  }
};
//endregion

//region POINT
Blockly.Blocks['point_create'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.POINT_CREATE);
    this.appendValueInput('X')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINT_CREATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINT_CREATE_HELP_URL);
    this.setOutput(true);
  }
};

Blockly.Blocks['point_get_element'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.POINT_GET_ELEMENT);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.X, 'x'], [Blockly.Msg.Y, 'y']]), 'ELEMENT');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('POINT');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINT_GET_ELEMENT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINT_GET_ELEMENT_HELP_URL);
    this.setOutput(true);
  },
  customContextMenu: createPointGetterContextMenu('point_set_element', {propertyTag: 'ELEMENT', objectTag: 'POINT'})
};

Blockly.Blocks['point_set_element'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.POINT_SET_ELEMENT);
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.X, 'x'], [Blockly.Msg.Y, 'y']]), 'ELEMENT');
    this.appendDummyInput()
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('POINT');
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINT_SET_ELEMENT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINT_SET_ELEMENT_HELP_URL);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
  },
  customContextMenu: createSetterContextMenu('point_get_element', {propertyTag: 'ELEMENT', objectTag: 'POINT'})
};

/**
 * Set the magnitude of the point
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#setMagnitude
 * @type {{init: Blockly.Blocks.point_set_magnitude.init}}
 */
Blockly.Blocks['point_set_magnitude'] = {
  init: function () {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINT_SET_MAGNITUDE);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINT_SET_MAGNITUDE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINT_SET_MAGNITUDE_HELP_URL);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
  }
};

/**
 * Static method to add two points Phaser.Point.add
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#.add
 * @type {{init: Blockly.Blocks.points_add.init}}
 */
Blockly.Blocks['points_add'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_ADD);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setHelpUrl(Blockly.Msg.POINTS_ADD_HELP_URL);
    this.setTooltip(Blockly.Msg.POINTS_ADD_TOOLTIP);
    this.setColour(PHASER_POINT_COLOUR);
  }
};

/**
 * Subtracts two points
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#.subtract
 * @type {{init: Blockly.Blocks.points_subtract.init}}
 */
Blockly.Blocks['points_subtract'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_SUBTRACT);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setHelpUrl(Blockly.Msg.POINTS_SUBTRACT_HELP_URL);
    this.setTooltip(Blockly.Msg.POINTS_SUBTRACT_TOOLTIP);
    this.setColour(PHASER_POINT_COLOUR);
  }
};

/**
 * Static method to find the angle in radians between two points
 * https://phaser.io/docs/2.6.2/Phaser.Point.html#.angle
 * @type {{init: Blockly.Blocks.points_angle_between.init}}
 */
Blockly.Blocks['points_angle_between'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_ANGLE_BETWEEN);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_ANGLE_BETWEEN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_ANGLE_BETWEEN_HELP_URL);

  }
};

/**
 * Static method to find the distance between two points
 * https://phaser.io/docs/2.6.2/Phaser.Point.html#.distance
 * @type {{init: Blockly.Blocks.points_angle_between.init}}
 */
Blockly.Blocks['points_distance'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_DISTANCE);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_DISTANCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_DISTANCE_HELP_URL);

  }
};

/**
 * Component wise division of two points
 * https://phaser.io/docs/2.6.2/Phaser.Point.html#.distance
 * @type {{init: Blockly.Blocks.points_divide}}
 */
Blockly.Blocks['points_divide'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_DIVIDE);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_DIVIDE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_DIVIDE_HELP_URL);

  }
};

/**
 * Static comparision this will use value vs reference
 * https://phaser.io/docs/2.6.2/Phaser.Point.html#.equals
 * @type {{init: Blockly.Blocks.points_equals}}
 */
Blockly.Blocks['points_equals'] = {
  init: function () {
    this.appendValueInput('LHS');
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.POINTS_EQUALS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, 'Boolean');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_EQUALS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_EQUALS_HELP_URL);

  }
};

/**
 * Interpolates between two points
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#.interpolate
 * @type {{init: Blockly.Blocks.points_interpolate.init}}
 */
Blockly.Blocks['points_interpolate'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_INTERPOLATE);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.POINTS_INTERPOLATE_B);
    this.appendValueInput('F')
      .appendField(Blockly.Msg.POINTS_INTERPOLATE_PERCENT);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_INTERPOLATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_INTERPOLATE_HELP_URL);

  }
};

/**
 * Component wise multiplication of two points
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#.multiply
 * @type {{init: Blockly.Blocks.points_multiply.init}}
 */
Blockly.Blocks['points_multiply'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_MULTIPLY);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_MULTIPLY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_MULTIPLY_HELP_URL);

  }
};

/**
 * Negate the point
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#.negative
 * @type {{init: Blockly.Blocks.points_negate.init}}
 */
Blockly.Blocks['points_negate'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_NEGATE);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_NEGATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_NEGATE_HELP_URL);

  }
};

/**
 * Normalize the point (make unit length)
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#.normalize
 * @type {{init: Blockly.Blocks.points_normalize.init}}
 */
Blockly.Blocks['points_normalize'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_NORMALIZE);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_NORMALIZE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_NORMALIZE_HELP_URL);
  }
};

/**
 * Finds a vector perpendicular to the given point
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#.perp
 * @type {{init: Blockly.Blocks.points_perpendicular.init}}
 */
Blockly.Blocks['points_perpendicular'] = {
  init: function () {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_PERPENDICULAR);
    this.setColour(PHASER_POINT_COLOUR);
    this.setOutput(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.POINTS_PERPENDICULAR_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_PERPENDICULAR_HELP_URL);
  }
};

Blockly.Blocks['points_centroid'] = {
  init: function() {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.POINTS_CENTROID);
    this.setOutput(true, null);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_CENTROID_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_CENTROID_HELP_URL);
  }
};

Blockly.Blocks['points_clamp'] = {
  init: function() {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_CLAMP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_CLAMP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_CLAMP_HELP_URL);
  }
};

Blockly.Blocks['points_clamp_x'] = {
  init: function() {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_CLAMP_X);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_CLAMP_X_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_CLAMP_X_HELP_URL);
  }
};

Blockly.Blocks['points_clamp_y'] = {
  init: function() {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_CLAMP_Y);
    this.appendDummyInput()
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.MIN);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.MAX);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_CLAMP_Y_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_CLAMP_Y_HELP_URL);
  }
};

Blockly.Blocks['points_clone'] = {
  init: function() {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_CLONE);
    this.setOutput(true, null);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_CLONE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_CLONE_HELP_URL);
  }
};

Blockly.Blocks['points_copy_from'] = {
  init: function() {
    this.appendValueInput('SOURCE')
      .appendField(Blockly.Msg.POINTS_COPY_FROM);
    this.appendValueInput('TARGET')
      .appendField(Blockly.Msg.TO);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_COPY_FROM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_COPY_FROM_HELP_URL);
  }
};

Blockly.Blocks['points_cross'] = {
  init: function() {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_CROSS);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_CROSS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_CROSS_HELP_URL);
  }
};

Blockly.Blocks['points_dot'] = {
  init: function() {
    this.appendValueInput('LHS')
      .appendField(Blockly.Msg.POINTS_DOT);
    this.appendValueInput('RHS')
      .appendField(Blockly.Msg.AND);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_DOT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_DOT_HELP_URL);
  }
};

Blockly.Blocks['points_add_member'] = {
  init: function() {
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.ADD)
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.TO);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_ADD_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_ADD_MEMBER_HELP_URL);
  }
};

Blockly.Blocks['points_subtract_member'] = {
  init: function() {
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.SUBTRACT)
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.FROM);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_SUBTRACT_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_SUBTRACT_MEMBER_HELP_URL);
  }
};

Blockly.Blocks['points_divide_member'] = {
  init: function() {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_DIVIDE);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.BY)
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_DIVIDE_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_DIVIDE_MEMBER_HELP_URL);
  }
};

Blockly.Blocks['points_multiply_member'] = {
  init: function() {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_MULTIPLY);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.BY)
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_MULTIPLY_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_MULTIPLY_MEMBER_HELP_URL);
  }
};

Blockly.Blocks['points_ceil'] = {
  init: function() {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_CEIL);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_CEIL_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_CEIL_HELP_URL);
  }
};

Blockly.Blocks['points_floor'] = {
  init: function() {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_FLOOR);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_FLOOR_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_FLOOR_HELP_URL);
  }
};

Blockly.Blocks['points_get_magnitude'] = {
  init: function() {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_GET_MAGNITUDE);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_GET_MAGNITUDE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_GET_MAGNITUDE_HELP_URL);
  }
};

Blockly.Blocks['points_get_magnitude_squared'] = {
  init: function() {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_GET_MAGNITUDE_SQUARED);
    this.setOutput(true, 'Number');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_GET_MAGNITUDE_SQUARED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_GET_MAGNITUDE_SQUARED_HELP_URL);
  }
};

Blockly.Blocks['points_invert'] = {
  init: function() {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_INVERT);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_INVERT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_INVERT_HELP_URL);
  }
};

Blockly.Blocks['points_is_zero'] = {
  init: function() {
    this.appendValueInput('POINT');
    this.appendDummyInput()
      .appendField(Blockly.Msg.POINTS_IS_ZERO);
    this.setOutput(true, 'Boolean');
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_IS_ZERO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_IS_ZERO_HELP_URL);
  }
};

Blockly.Blocks['points_limit'] = {
  init: function() {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_LIMIT);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_LIMIT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_LIMIT_HELP_URL);
  }
};

Blockly.Blocks['points_set_to_polar'] = {
  init: function() {
    this.appendValueInput('POINT')
      .appendField(Blockly.Msg.POINTS_SET_TO_POLAR_POINT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.POINTS_SET_TO_POLAR);
    this.appendValueInput('DEGREES')
      .setCheck('Number')
      .appendField(Blockly.Msg.DEGREES);
    this.appendValueInput('RADIUS')
      .setCheck('Number')
      .appendField(Blockly.Msg.RADIUS);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setInputsInline(true);
    this.setColour(PHASER_POINT_COLOUR);
    this.setTooltip(Blockly.Msg.POINTS_SET_TO_POLAR_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.POINTS_SET_TO_POLAR_HELP_URL);
  }
};
//endregion
//region CIRCLE
const CIRCLE_NUMERIC_WRITABLE = ['bottom', 'diameter', 'left', 'radius', 'right', 'top', 'x', 'y'];
const CIRCLE_NUMERIC_READABLE = ['area'];
const CIRCLE_NUMERIC_FIELDS = createDropDownField(CIRCLE_NUMERIC_WRITABLE, CIRCLE_NUMERIC_READABLE);

Blockly.Blocks['circle_create'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CIRCLE_CREATE);
    this.appendValueInput('X')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('DIAMETER')
      .appendField(Blockly.Msg.DIAMETER);
    this.setInputsInline(true);
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_CREATE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_CREATE_HELP_URL);
    this.setOutput(true);
  }
};

Blockly.Blocks['circle_get_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(CIRCLE_NUMERIC_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_GET_NUMERIC_FIELDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_GET_NUMERIC_FIELDS_HELP_URL);
  }
};

Blockly.Blocks['circle_set_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(CIRCLE_NUMERIC_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_SET_NUMERIC_FIELDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_GET_NUMERIC_FIELDS_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('circle_get_numeric_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['circle_intersects'] = {
  init: function () {
    this.appendValueInput('CIRCLE_A');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INTERSECTS);
    this.appendValueInput('CIRCLE_B');
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_INTERSECTS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_INTERSECTS_HELP_URL);
    this.setOutput(true, 'Boolean');
  }
};

Blockly.Blocks['circle_intersects_rectangle'] = {
  init: function () {
    this.appendValueInput('CIRCLE');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INTERSECTS);
    this.appendValueInput('RECTANGLE');
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_INTERSECTS_RECTANGLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_INTERSECTS_RECTANGLE_HELP_URL);
    this.setOutput(true, 'Boolean');
  }
};

Blockly.Blocks['circle_clone'] = {
  init: function () {
    this.appendValueInput('CIRCLE')
      .appendField(Blockly.Msg.CLONE);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_CLONE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_CLONE_HELP_URL);
  }
};

Blockly.Blocks['circle_contains'] = {
  init: function () {
    this.appendValueInput('CIRCLE');
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.CONTAINS)
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_CONTAINS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_CONTAINS_HELP_URL);
  }
};

Blockly.Blocks['circle_random'] = {
  init: function () {
    this.appendValueInput('CIRCLE')
      .appendField(Blockly.Msg.CIRCLE_RANDOM);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_RANDOM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_RANDOM_HELP_URL);
  }
};

Blockly.Blocks['circle_circumference'] = {
  init: function () {
    this.appendValueInput('CIRCLE')
      .appendField(Blockly.Msg.CIRCLE_CIRCUMFERENCE);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_CIRCUMFERENCE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_CIRCUMFERENCE_HELP_URL);
  }
};

Blockly.Blocks['circle_circumference_point'] = {
  init: function () {
    this.appendValueInput('CIRCLE')
      .appendField(Blockly.Msg.CIRCLE_CIRCUMFERENCE_POINT);
    this.appendValueInput('DEGREES')
      .appendField(Blockly.Msg.AT)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEGREES);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_CIRCLE_COLOUR);
    this.setTooltip(Blockly.Msg.CIRCLE_CIRCUMFERENCE_POINT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CIRCLE_CIRCUMFERENCE_POINT_HELP_URL);
  }
};
//endregion

//endregion

//region PHASER_INPUT

//region MOUSE
Blockly.Blocks['get_current_mouse_position'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_CURRENT_MOUSE_POSITION)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.X, 'x'], [Blockly.Msg.Y, 'y'], [Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_WORLDX, 'worldX'], [Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_WORLDY, 'worldY']]), 'DIRECTION');
    this.setColour(PHASER_MOUSE_INPUT);
    this.setTooltip(Blockly.Msg.GET_CURRENT_MOUSE_POSITION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_CURRENT_MOUSE_POSITION_HELP_URL);
    this.setOutput(true, 'Number');
  }
};

Blockly.Blocks['get_mouse_position_point'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.MOUSE_POSITION_POINT);
    this.setColour(PHASER_MOUSE_INPUT);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.MOUSE_POSITION_POINT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MOUSE_POSITION_POINT_HELP_URL);
  }
};

Blockly.Blocks['is_mouse_button_clicked'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LEFT, 'leftButton'], [Blockly.Msg.RIGHT, 'rightButton'], [Blockly.Msg.MIDDLE, 'middleButton']]), 'BUTTON')
      .appendField(Blockly.Msg.IS_MOUSE_BUTTON_CLICKED);
    this.setOutput(true, 'Boolean');
    this.setHelpUrl(Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_HELP_URL);
    this.setTooltip(Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_TOOLTIP);
    this.setColour(PHASER_MOUSE_INPUT);
  }
};

Blockly.Blocks['get_active_pointer'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_ACTIVE_POINTER);
    this.setOutput(true, null);
    this.setColour(PHASER_POINTER_INPUT_COLOUR);
    this.setTooltip(Blockly.Msg.GET_ACTIVE_POINTER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_ACTIVE_POINTER_HELP_URL);
  }
};
//endregion

//region KEYBOARD
const KEY_BOOLEAN_READABLE = ['altKey', 'ctrlKey', 'enabled', 'isDown', 'justDown', 'justUp', 'shiftKey'];
const KEY_BOOLEAN_WRITABLE = [];
const KEY_BOOLEAN_FIELDS = createDropDownField(KEY_BOOLEAN_WRITABLE, KEY_BOOLEAN_READABLE);

const KEY_NUMERIC_READABLE = ['duration', 'repeats', 'timeUp', 'timeDown'];
const KEY_NUMERIC_WRITABLE = [];
const KEY_NUMERIC_FIELDS = createDropDownField(KEY_NUMERIC_WRITABLE, KEY_NUMERIC_READABLE);

Blockly.Blocks['create_cursor_keys'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_CURSOR_KEYS);
    this.setOutput(true, null);
    this.setTooltip(Blockly.Msg.CREATE_CURSOR_KEYS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_CURSOR_KEYS_HELP_URL);
    this.setColour(PHASER_KEYBOARD_INPUT);
  }
};

Blockly.Blocks['is_key_down'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(PHASER_KEYS), 'KEY')
      .appendField(Blockly.Msg.KEY)
      .appendField(Blockly.Msg.IS_KEY_DOWN);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.IS_KEY_DOWN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.IS_KEY_DOWN_HELP_URL);
    this.setColour(PHASER_KEYBOARD_INPUT);
  }
};

Blockly.Blocks['add_key'] = {
  init: function() {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_KEY)
      .appendField(new Blockly.FieldDropdown(PHASER_KEYS), 'KEYCODE');
    this.setOutput(true, 'Number');
    this.setColour(PHASER_KEYBOARD_INPUT);
    this.setTooltip(Blockly.Msg.ADD_KEY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_KEY_HELP_URL);
  }
};

Blockly.Blocks['get_key_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(KEY_BOOLEAN_FIELDS.all), 'FIELD');
    this.appendValueInput('KEY')
      .setCheck('Number')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_KEYBOARD_INPUT);
    this.setTooltip(Blockly.Msg.GET_KEY_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_KEY_BOOLEAN_FIELD_HELP_URL);
  }
};

Blockly.Blocks['get_key_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(KEY_NUMERIC_FIELDS.all), 'FIELD');
    this.appendValueInput('KEY')
      .setCheck('Number')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_KEYBOARD_INPUT);
    this.setTooltip(Blockly.Msg.GET_KEY_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_KEY_NUMERIC_FIELD_HELP_URL);
  }
};

Blockly.Blocks['key_just_pressed'] = {
  init: function () {
    this.appendValueInput('KEY')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.KEY_JUST_PRESSED);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.KEY_JUST_PRESSED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.KEY_JUST_PRESSED_HELP_URL);
    this.setColour(PHASER_KEYBOARD_INPUT);
  }
};

Blockly.Blocks['key_just_released'] = {
  init: function () {
    this.appendValueInput('KEY')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.KEY_JUST_RELEASED);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.KEY_JUST_RELEASED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.KEY_JUST_RELEASED_HELP_URL);
    this.setColour(PHASER_KEYBOARD_INPUT);
  }
};

Blockly.Blocks['key_reset'] = {
  init: function () {
    this.appendValueInput('KEY')
      .appendField(Blockly.Msg.RESET)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'HARD')
      .appendField(Blockly.Msg.HARD);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setTooltip(Blockly.Msg.KEY_RESET_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.KEY_RESET_HELP_URL);
    this.setColour(PHASER_KEYBOARD_INPUT);
  }
};

Blockly.Blocks['key_up_duration'] = {
  init: function () {
    this.appendValueInput('KEY')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.KEY_UP_DURATION);
    this.appendValueInput('DURATION')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.KEY_UP_DURATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.KEY_UP_DURATION_HELP_URL);
    this.setColour(PHASER_KEYBOARD_INPUT);
  }
};

Blockly.Blocks['key_down_duration'] = {
  init: function () {
    this.appendValueInput('KEY')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.KEY_DOWN_DURATION);
    this.appendValueInput('DURATION')
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.KEY_DOWN_DURATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.KEY_DOWN_DURATION_HELP_URL);
    this.setColour(PHASER_KEYBOARD_INPUT);
  }
};
//endregion

//region INPUT_HANDLER
const INPUT_HANDLER_BOOLEAN_WRITABLE = ['allowHorizontalDrag', 'allowVerticalDrag', 'bringToTop', 'dragFromCenter', 'draggable', 'dragStopBlocksInputUp', 'enabled', 'isDragged', 'pixelPerfectClick', 'pixelPerfectOver', 'snapOnDrag', 'snapOnRelease'];
const INPUT_HANDLER_BOOLEAN_READABLE = [];
const INPUT_HANDLER_BOOLEAN_FIELDS = createDropDownField(INPUT_HANDLER_BOOLEAN_WRITABLE, INPUT_HANDLER_BOOLEAN_READABLE);

const INPUT_HANDLER_NUMERIC_WRITABLE = ['pixelPerfectAlpha', 'priorityId', 'snapOffsetX', 'snapOffsetY', 'snapX', 'snapY', 'dragDistanceThreshold', 'dragTimeThreshold'];
const INPUT_HANDLER_NUMERIC_READABLE = [];
const INPUT_HANDLER_NUMERIC_FIELDS = createDropDownField(INPUT_HANDLER_NUMERIC_WRITABLE, INPUT_HANDLER_NUMERIC_READABLE);

const INPUT_HANDLER_POINT_WRITABLE = ['downPoint', 'drafOffset', 'dragStartPoint', 'snapOffset', 'snapPoint'];
const INPUT_HANDLER_POINT_READABLE = [];
const INPUT_HANDLER_POINT_FIELDS = createDropDownField(INPUT_HANDLER_POINT_WRITABLE, INPUT_HANDLER_POINT_READABLE);

Blockly.Blocks['input_handler_enable'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_ENABLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_ENABLE_HELP_URL);
  }
};

Blockly.Blocks['set_input_handler_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(INPUT_HANDLER_BOOLEAN_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Boolean');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.SET_INPUT_HANDLER_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_INPUT_HANDLER_BOOLEAN_FIELD_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('get_input_handler_boolean_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['set_input_handler_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(INPUT_HANDLER_NUMERIC_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.SET_INPUT_HANDLER_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_INPUT_HANDLER_NUMERIC_FIELD_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('get_input_handler_numeric_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['set_input_handler_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(INPUT_HANDLER_POINT_FIELDS.writable), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.SET_INPUT_HANDLER_POINT_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_INPUT_HANDLER_POINT_FIELD_HELP_URL);
  },
  customContextMenu: createSetterContextMenu('get_input_handler_point_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_input_handler_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(INPUT_HANDLER_BOOLEAN_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.GET_INPUT_HANDLER_BOOLEAN_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_INPUT_HANDLER_BOOLEAN_FIELD_HELP_URL);
  },
  customContextMenu: createBooleanGetterContextMenu('set_input_handler_boolean_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_input_handler_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(INPUT_HANDLER_NUMERIC_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.GET_INPUT_HANDLER_NUMERIC_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_INPUT_HANDLER_NUMERIC_FIELD_HELP_URL);
  },
  customContextMenu: createBooleanGetterContextMenu('set_input_handler_numeric_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['get_input_handler_point_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_POINT_FIELD)
      .appendField(new Blockly.FieldDropdown(INPUT_HANDLER_POINT_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.GET_INPUT_HANDLER_POINT_FIELD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_INPUT_HANDLER_POINT_FIELD_HELP_URL);
  },
  customContextMenu: createBooleanGetterContextMenu('set_input_handler_point_field', {propertyTag: 'FIELD'})
};

Blockly.Blocks['input_handler_bounds_rect_set'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_BOUNDS_RECT);
    this.appendValueInput('RECT')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_BOUNDS_RECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_BOUNDS_RECT_HELP_URL);
  }
};

Blockly.Blocks['input_handler_enable_drag'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_HELP_URL);
  }
};

Blockly.Blocks['input_handler_enable_drag_complex'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_COMPLEX_CENTER)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'CENTER');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_COMPLEX_TOP)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'TOP');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_COMPLEX_PIXEL)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'PIXEL');
    this.appendValueInput('ALPHA')
      .setCheck('Number')
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_COMPLEX_ALPHA);
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_ENABLE_DRAG_HELP_URL);
  }
};

Blockly.Blocks['input_handler_check_pointer_down'] = {
  init: function () {
    this.appendValueInput('POINTER');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_CHECK_POINTER_DOWN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_CHECK_POINTER_DOWN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_CHECK_POINTER_DOWN_HELP_URL);
  }
};

Blockly.Blocks['input_handler_check_pointer_over'] = {
  init: function () {
    this.appendValueInput('POINTER');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_CHECK_POINTER_OVER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_CHECK_POINTER_OVER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_CHECK_POINTER_OVER_HELP_URL);
  }
};

Blockly.Blocks['input_handler_disable_drag'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_DISABLE_DRAG);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_DISABLE_DRAG_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_DISABLE_DRAG_HELP_URL);
  }
};

Blockly.Blocks['input_handler_enable_snap'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SNAP);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO)
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_HELP_URL);
  }
};

Blockly.Blocks['input_handler_enable_snap_complex'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SNAP);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_COMPLEX_DRAG)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'DRAG');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_COMPLEX_RELEASE)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'RELEASE');
    this.appendValueInput('OFFSET_X')
      .setCheck('Number')
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_COMPLEX_OFFSET_X);
    this.appendValueInput('OFFSET_Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_COMPLEX_OFFSET_Y);
    this.setInputsInline(false);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_COMPLEX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_ENABLE_SNAP_COMPLEX_HELP_URL);
  }
};

Blockly.Blocks['input_handler_disable_snap'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_DISABLE_SNAP);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_DISABLE_SNAP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_DISABLE_SNAP_HELP_URL);
  }
};

Blockly.Blocks['input_handler_check_pixel'] = {
  init: function () {
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.INPUT_HANDLER_CHECK_PIXEL)
      .appendField(Blockly.Msg.X);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_CHECK_PIXEL_MIDDLE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_CHECK_PIXEL_END);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_CHECK_PIXEL_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_CHECK_PIXEL_HELP_URL);
  }
};

Blockly.Blocks['input_handler_is_pixel_perfect'] = {
  init: function () {
    this.appendValueInput('OBJECT');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_IS_PIXEL_PERFECT);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_IS_PIXEL_PERFECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_IS_PIXEL_PERFECT_HELP_URL);
  }
};

Blockly.Blocks['input_handler_just_pressed'] = {
  init: function () {
    this.appendValueInput('OBJECT');
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.INPUT_HANDLER_JUST_PRESSED);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS)
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_JUST_PRESSED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_JUST_PRESSED_HELP_URL);
  }
};

Blockly.Blocks['input_handler_just_released'] = {
  init: function () {
    this.appendValueInput('OBJECT');
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.INPUT_HANDLER_JUST_RELEASED);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS)
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_JUST_RELEASED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_JUST_RELEASED_HELP_URL);
  }
};

Blockly.Blocks['input_handler_over_duration'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_OVER_DURATION);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_OVER_DURATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_OVER_DURATION_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_over'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_POINTER_OVER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_POINTER_OVER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_POINTER_OVER_HELP_URL);
  }
};

Blockly.Blocks['input_handler_just_over'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_JUST_OVER);
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.WITHIN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS)
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_JUST_OVER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_JUST_OVER_HELP_URL);
  }
};

Blockly.Blocks['input_handler_down_duration'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_DOWN_DURATION);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_DOWN_DURATION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_DOWN_DURATION_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_up'] = {
  init: function () {
    this.appendValueInput('OBJECT');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_POINTER_UP);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_POINTER_UP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_POINTER_UP_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_down'] = {
  init: function () {
    this.appendValueInput('OBJECT');
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_POINTER_DOWN);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_POINTER_DOWN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_POINTER_DOWN_HELP_URL);
  }
};

Blockly.Blocks['input_handler_start'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_START);
    this.appendValueInput('PRIORITY')
      .setCheck('Number')
      .appendField(Blockly.Msg.INPUT_HANDLER_START_PRIORITY);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_START_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_START_HELP_URL);
  }
};

Blockly.Blocks['input_handler_stop'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_STOP);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_STOP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_STOP_HELP_URL);
  }
};

Blockly.Blocks['input_handler_just_out'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_JUST_OUT);
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.WITHIN);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS)
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_JUST_OUT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_JUST_OUT_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_out'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_POINTER_OUT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_POINTER_OUT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_POINTER_OUT_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_x'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_POINTER_X);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_POINTER_X_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_POINTER_X_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_y'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_POINTER_Y);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_POINTER_Y_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_POINTER_Y_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_position'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_POINTER_POSITION);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_POINTER_POSITION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_POINTER_POSITION_HELP_URL);
  }
};

Blockly.Blocks['input_handler_reset'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_RESET);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_RESET_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_RESET_HELP_URL);
  }
};

Blockly.Blocks['input_handler_destroy'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_DESTROY);
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_DESTROY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_DESTROY_HELP_URL);
  }
};

Blockly.Blocks['input_handler_pointer_dragged'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.INPUT_HANDLER_POINTER_DRAGGED);
    this.appendDummyInput()
      .appendField(Blockly.Msg.QUESTION);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_POINTER_DRAGGED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_POINTER_DRAGGED_HELP_URL);
  }
};

Blockly.Blocks['input_handler_set_drag_lock'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.ALLOW);
    this.appendDummyInput()
      .appendField(Blockly.Msg.INPUT_HANDLER_SET_DRAG_LOCK)
      .appendField(Blockly.Msg.HORIZONTAL)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'HORIZONTAL')
  .appendField(Blockly.Msg.VERTICAL)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'VERTICAL');
    this.setInputsInline(true);
    this.setNextStatement(true, null);
    this.setPreviousStatement(true, null);
    this.setColour(PHASER_INPUT_HANDLER_COLOUR);
    this.setTooltip(Blockly.Msg.INPUT_HANDLER_SET_DRAG_LOCK_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.INPUT_HANDLER_SET_DRAG_LOCK_HELP_URL);
  }
};
//endregion

//endregion

//region PHASER_UTILITY

//region GENERAL
Blockly.Blocks['center_and_stretch'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CENTER_AND_STRETCH);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_GENERAL_COLOUR);
    this.setTooltip(Blockly.Msg.CENTER_AND_STRETCH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CENTER_AND_STRETCH_HELP_URL);
  }
};

//endregion General

//region DEBUG

Blockly.Blocks['enable_step'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ENABLE_STEP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.ENABLE_STEP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ENABLE_STEP_HELP_URL);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
  }
};

Blockly.Blocks['disable_step'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DISABLE_STEP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DISABLE_STEP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DISABLE_STEP_HELP_URL);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
  }
};

Blockly.Blocks['step'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.STEP);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.STEP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STEP_HELP_URL);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
  }
};

Blockly.Blocks['debug_sprite'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.DEBUG_SPRITE);
    this.appendValueInput('X_VAL')
      .setCheck('Number')
      .appendField(Blockly.Msg.DEBUG_SPRITE_AT_X);
    this.appendValueInput('Y_VAL')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_SPRITE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_SPRITE_HELP_URL);
  }
};

Blockly.Blocks['debug_body_info'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_BODY_INFO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_BODY_INFO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_BODY_INFO_HELP_URL);
  }
};

Blockly.Blocks['debug_camera'] = {
  init: function () {
    this.appendValueInput('CAMERA')
      .appendField(Blockly.Msg.DEBUG_CAMERA);
    this.appendValueInput('COLOUR')
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.DEBUG_CAMERA_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_CAMERA_HELP_URL);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
  }
};

Blockly.Blocks['debug_camera_info'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEBUG_CAMERA_INFO);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_CAMERA_INFO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_CAMERA_INFO_HELP_URL);
  }
};

Blockly.Blocks['debug_input_info'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEBUG_INPUT_INFO);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_INPUT_INFO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_INPUT_INFO_HELP_URL);
  }
};

Blockly.Blocks['debug_key'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEBUG_KEY)
      .appendField(new Blockly.FieldDropdown(PHASER_KEYS), 'KEY')
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_KEY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_KEY_HELP_URL);
  }
};

Blockly.Blocks['debug_physics_group'] = {
  init: function () {
    this.appendValueInput('GROUP')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_PHSYICS_GROUP);
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEBUG_PHYSICS_GROUP_CHECK)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'CHECK_EXISTS');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GROUPS_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_PHYSICS_GROUP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_PHYSICS_GROUP_HELP_URL);
  }
};

Blockly.Blocks['debug_rectangle'] = {
  init: function () {
    this.appendValueInput('RECT')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_RECTANGLE);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_RECTANGLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_RECTANGLE_HELP_URL);
  }
};

Blockly.Blocks['debug_sound'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DEBUG_SOUND);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_SOUND_HELP_URL);
  }
};

Blockly.Blocks['debug_sound_info'] = {
  init: function () {
    this.appendValueInput('SOUND')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_SOUND_INFO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_SOUND_INFO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_SOUND_INFO_HELP_URL);
  }
};

Blockly.Blocks['debug_sprite_coords'] = {
  init: function () {
    this.appendValueInput('SPRITE')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_SPRITE_COORDS);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_SPRITE_COORDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_SPRITE_COORDS_HELP_URL);
  }
};

Blockly.Blocks['debug_sprite_info'] = {
  init: function () {
    this.appendValueInput('SPRITE')
      .setCheck(null)
      .appendField(Blockly.Msg.DEBUG_SPRITE_INFO);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_SPRITE_INFO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_SPRITE_INFO_HELP_URL);
  }
};

Blockly.Blocks['debug_text'] = {
  init: function () {
    this.appendValueInput('TEXT')
      .setCheck('String')
      .appendField(Blockly.Msg.DEBUG_TEXT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.AT_POSITION);
    this.appendValueInput('X')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('Y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('COLOUR')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    this.setTooltip(Blockly.Msg.DEBUG_TEXT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEBUG_TEXT_HELP_URL);
  }
};
//endregion

//region LIST.METHODS
Blockly.Blocks['list_find_closest'] = {
  init: function () {
    this.appendValueInput('VALUE')
      .setCheck('Number')
      .appendField(Blockly.Msg.LIST_FIND_CLOSEST_NUMBER);
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.LIST_FIND_CLOSEST);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.LIST_FIND_CLOSEST_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LIST_FIND_CLOSEST_HELP_URL);
  }
};

Blockly.Blocks['list_get_random'] = {
  init: function () {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.LIST_GET_RANDOM);
    this.setOutput(true, null);
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.LIST_GET_RANDOM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LIST_GET_RANDOM_HELP_URL);
  }
};

Blockly.Blocks['number_list'] = {
  init: function () {
    this.appendValueInput('START')
      .setCheck('Number')
      .appendField(Blockly.Msg.NUMBER_LIST);
    this.appendValueInput('END')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO);
    this.setInputsInline(true);
    this.setOutput(true, 'Array');
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.NUMBER_LIST_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.NUMBER_LIST_HELP_URL);
  }
};

Blockly.Blocks['number_list_step'] = {
  init: function () {
    this.appendValueInput('START')
      .setCheck('Number')
      .appendField(Blockly.Msg.NUMBER_LIST_STEP);
    this.appendValueInput('END')
      .setCheck('Number')
      .appendField(Blockly.Msg.TO);
    this.appendValueInput('STEP')
      .setCheck('Number')
      .appendField(Blockly.Msg.NUMBER_LIST_STEP_AMOUNT);
    this.setInputsInline(true);
    this.setOutput(true, 'Array');
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.NUMBER_LIST_STEP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.NUMBER_LIST_STEP_HELP_URL);
  }
};

Blockly.Blocks['list_remove_random_item'] = {
  init: function () {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.LIST_REMOVE_RANDOM_ITEM);
    this.setOutput(true, null);
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.LIST_REMOVE_RANDOM_ITEM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LIST_REMOVE_RANDOM_ITEM_HELP_URL);
  }
};

Blockly.Blocks['list_shuffle'] = {
  init: function () {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.LIST_SHUFFLE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_UTIL_LIST_COLOUR);
    this.setTooltip(Blockly.Msg.LIST_SHUFFLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LIST_SHUFFLE_HELP_URL);
  }
};
//endregion

//region RANDOMISATION
/*
 Blockly.Blocks['create_random_generator'] = {
 init: function() {
 this.appendDummyInput()
 .appendField("create random number generator");
 this.setInputsInline(true);
 this.setOutput(true, null);
 this.setColour(PHASER_RANDOM_COLOUR);
 this.setTooltip("Creates an object you can use to make random numbers.");
 this.setHelpUrl("https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#RandomDataGenerator");
 }
 };

 Blockly.Blocks['create_random_generator_seeded'] = {
 init: function() {
 this.appendValueInput("SEED")
 .appendField("create random number generator with seed")
 this.setOutput(true, null);
 this.setColour(PHASER_RANDOM_COLOUR);
 this.setTooltip("Creates a random number generator. Using a seed produces predictable results.");
 this.setHelpUrl("https://photonstorm.github.io/phaser-ce/Phaser.RandomDataGenerator.html#RandomDataGenerator");
 }
 };*/

Blockly.Blocks['random_angle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RANDOM_ANGLE);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_RANDOM_COLOUR);
    this.setTooltip(Blockly.Msg.RANDOM_ANGLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RANDOM_ANGLE_HELP_URL);
  }
};

Blockly.Blocks['random_pick'] = {
  init: function () {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.RANDOM_PICK);
    this.setOutput(true, null);
    this.setColour(PHASER_RANDOM_COLOUR);
    this.setTooltip(Blockly.Msg.RANDOM_PICK_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RANDOM_PICK_HELP_URL);
  }
};

Blockly.Blocks['random_pick_weighted'] = {
  init: function () {
    this.appendValueInput('ARRAY')
      .setCheck('Array')
      .appendField(Blockly.Msg.RANDOM_PICK_WEIGHTED);
    this.setOutput(true, null);
    this.setColour(PHASER_RANDOM_COLOUR);
    this.setTooltip(Blockly.Msg.RANDOM_PICK_WEIGHTED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RANDOM_PICK_WEIGHTED_HELP_URL);
  }
};

Blockly.Blocks['random_real'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RANDOM_REAL);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_RANDOM_COLOUR);
    this.setTooltip(Blockly.Msg.RANDOM_REAL_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RANDOM_REAL_HELP_URL);
  }
};

Blockly.Blocks['random_real_in_range'] = {
  init: function () {
    this.appendValueInput('MIN')
      .setCheck('Number')
      .appendField(Blockly.Msg.RANDOM_REAL_IN_RANGE);
    this.appendValueInput('MAX')
      .setCheck('Number')
      .appendField(Blockly.Msg.AND);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_RANDOM_COLOUR);
    this.setTooltip(Blockly.Msg.RANDOM_REAL_IN_RANGE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RANDOM_REAL_IN_RANGE_HELP_URL);
  }
};

Blockly.Blocks['random_sign'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RANDOM_SIGN);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_RANDOM_COLOUR);
    this.setTooltip(Blockly.Msg.RANDOM_SIGN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.RANDOM_SIGN_HELP_URL);
  }
};

Blockly.Blocks['random_boolean'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.RANDOM_BOOLEAN);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_RANDOM_COLOUR);
    this.setTooltip(Blockly.Msg.RANDOM_BOOLEAN_TOOLTIP);
    this.setHelpUrl('');
  }
};

//endregion

//region MATH
Blockly.Blocks['math_deg_to_rad'] = {
  init: function () {
    this.appendValueInput('DEGREES')
      .setCheck('Number')
      .appendField(Blockly.Msg.MATH_DEG_TO_RAD);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MATH_DEG_TO_RAD_RESULT);
    this.setOutput(true, null);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.MATH_DEG_TO_RAD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MATH_DEG_TO_RAD_HELP_URL);
  }
};

Blockly.Blocks['math_rad_to_deg'] = {
  init: function () {
    this.appendValueInput('RADIANS')
      .setCheck('Number')
      .appendField(Blockly.Msg.MATH_RAD_TO_DEG);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MATH_RAD_TO_DEG_RESULT);
    this.setOutput(true, null);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.MATH_RAD_TO_DEG_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.MATH_RAD_TO_DEG_HELP_URL);
  }
};
//endregion

//region TWEEN
Blockly.Blocks['tween_mutatorcontainer'] = {
  /**
   * Mutator block for procedure container.
   * @this Blockly.Block
   */
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_TWEEN_MUTATORCONTAINER_TITLE);
    this.appendStatementInput('STACK');
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_TWEEN_MUTATORCONTAINER_TOOLTIP);
    this.contextMenu = false;
  }
};

Blockly.Blocks['tween_mutatorarg'] = {
  /**
   * Mutator block for procedure argument.
   * @this Blockly.Block
   */
  init: function () {
    var field = new Blockly.FieldTextInput('x', this.validator_);
    this.appendDummyInput()
      .appendField(Blockly.Msg.PROCEDURES_MUTATORARG_TITLE)
      .appendField(field, 'NAME');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP);
    this.contextMenu = false;
  },
  /**
   * Obtain a valid name for the procedure.
   * Merge runs of whitespace.  Strip leading and trailing whitespace.
   * Beyond this, all names are legal.
   * @param {string} newVar User-supplied name.
   * @return {?string} Valid name, or null if a name was not specified.
   * @private
   * @this Blockly.Block
   */
  validator_: function (newVar) {
    newVar = newVar.replace(/[\s\xa0]+/g, ' ').replace(/^ | $/g, '');
    return newVar || null;
  },
};

Blockly.Blocks['phaser_game_add_tween_to'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_GAME_ADD_TWEEN_TO_TITLE);
    this.appendValueInput('TARGET')
      .appendField(Blockly.Msg.PHASER_TWEEN_TARGET);
    this.appendValueInput('DURATION')
      .appendField(Blockly.Msg.PHASER_TWEEN_DURATION)
      .setCheck('Number');
    this.appendValueInput('EASE')
      .appendField(Blockly.Msg.PHASER_TWEEN_EASE)
      .setCheck('Ease');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_TWEEN_AUTO_START)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'AUTOSTART');
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.PHASER_TWEEN_DELAY)
      .setCheck('Number');
    this.appendValueInput('REPEAT')
      .appendField(Blockly.Msg.PHASER_TWEEN_REPEAT)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_TWEEN_YOYO)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'YOYO');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_TWEEN_PROPERTIES_HEADER);
    this.setOutput(true, 'Tween');
    this.setInputsInline(false);
    this.setMutator(new Blockly.Mutator(['tween_mutatorarg']));
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_GAME_ADD_TWEEN_TO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_GAME_ADD_TWEEN_TO_URL);
    this.properties_ = [];
  },

  decompose: function (workspace) {
    const containerBlock = workspace.newBlock('tween_mutatorcontainer');
    containerBlock.initSvg();

    let connection = containerBlock.getInput('STACK').connection;
    for (let i = 0; i < this.properties_.length; ++i) {
      let paramBlock = workspace.newBlock('tween_mutatorarg');
      paramBlock.initSvg();

      paramBlock.setFieldValue(this.properties_[i], 'NAME');
      paramBlock.oldLocation = i;
      connection.connect(paramBlock.previousConnection);
      connection = paramBlock.nextConnection;
    }

    return containerBlock;
  },

  compose: function (containerBlock) {
    this.properties_ = [];
    let propertyBlock = containerBlock.getInputTargetBlock('STACK');
    while (propertyBlock) {
      this.properties_.push(propertyBlock.getFieldValue('NAME'));
      propertyBlock = propertyBlock.nextConnection && propertyBlock.nextConnection.targetBlock();
    }

    this.updateProperties_();
  },

  updateProperties_: function () {
    let i;
    for (i = 0; i < this.properties_.length; ++i) {
      let field = this.getField('PROPNAME' + i);
      if (field) {
        Blockly.Events.disable();
        try {
          field.setValue(this.properties_[i]);
        } finally {
          Blockly.Events.enable();
        }
      } else {
        // Add new input.
        field = new Blockly.FieldLabel(this.properties_[i]);
        let input = this.appendValueInput('PROP' + i)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(field, 'PROPNAME' + i);
        input.init();
      }
    }

    while (this.getInput('PROP' + i)) {
      this.removeInput('PROP' + i);
      ++i;
    }
  },

  mutationToDom: function () {
    const container = document.createElement('mutation');
    for (let i = 0; i < this.properties_.length; ++i) {
      const property = document.createElement('prop');
      property.setAttribute('name', this.properties_[i]);
      container.appendChild(property);
    }
    return container;
  },

  domToMutation: function (xmlElement) {
    this.properties_ = [];
    for (let i = 0, childNode; childNode = xmlElement.childNodes[i]; ++i) {
      if (childNode.nodeName.toLowerCase() === 'prop') {
        this.properties_.push(childNode.getAttribute('name'));
      }
    }
    this.updateProperties_();
  }
};

Blockly.Blocks['phaser_game_add_tween_from'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_GAME_ADD_TWEEN_FROM_TITLE);
    this.appendValueInput('TARGET')
      .appendField(Blockly.Msg.PHASER_TWEEN_TARGET);
    this.appendValueInput('DURATION')
      .appendField(Blockly.Msg.PHASER_TWEEN_DURATION)
      .setCheck('Number');
    this.appendValueInput('EASE')
      .appendField(Blockly.Msg.PHASER_TWEEN_EASE)
      .setCheck('Ease');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_TWEEN_AUTO_START)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'AUTOSTART');
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.PHASER_TWEEN_DELAY)
      .setCheck('Number');
    this.appendValueInput('REPEAT')
      .appendField(Blockly.Msg.PHASER_TWEEN_REPEAT)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_TWEEN_YOYO)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'YOYO');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_TWEEN_PROPERTIES_HEADER);
    this.setOutput(true, 'Tween');
    this.setInputsInline(false);
    this.setMutator(new Blockly.Mutator(['tween_mutatorarg']));
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_GAME_ADD_TWEEN_FROM_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_GAME_ADD_TWEEN_FROM_URL);
    this.properties_ = [];
  },

  decompose: function (workspace) {
    const containerBlock = workspace.newBlock('tween_mutatorcontainer');
    containerBlock.initSvg();

    let connection = containerBlock.getInput('STACK').connection;
    for (let i = 0; i < this.properties_.length; ++i) {
      let paramBlock = workspace.newBlock('tween_mutatorarg');
      paramBlock.initSvg();

      paramBlock.setFieldValue(this.properties_[i], 'NAME');
      paramBlock.oldLocation = i;
      connection.connect(paramBlock.previousConnection);
      connection = paramBlock.nextConnection;
    }

    return containerBlock;
  },

  compose: function (containerBlock) {
    this.properties_ = [];
    let propertyBlock = containerBlock.getInputTargetBlock('STACK');
    while (propertyBlock) {
      this.properties_.push(propertyBlock.getFieldValue('NAME'));
      propertyBlock = propertyBlock.nextConnection && propertyBlock.nextConnection.targetBlock();
    }

    this.updateProperties_();
  },

  updateProperties_: function () {
    let i;
    for (i = 0; i < this.properties_.length; ++i) {
      let field = this.getField('PROPNAME' + i);
      if (field) {
        Blockly.Events.disable();
        try {
          field.setValue(this.properties_[i]);
        } finally {
          Blockly.Events.enable();
        }
      } else {
        // Add new input.
        field = new Blockly.FieldLabel(this.properties_[i]);
        let input = this.appendValueInput('PROP' + i)
          .setAlign(Blockly.ALIGN_RIGHT)
          .appendField(field, 'PROPNAME' + i);
        input.init();
      }
    }

    while (this.getInput('PROP' + i)) {
      this.removeInput('PROP' + i);
      ++i;
    }
  },

  mutationToDom: function () {
    const container = document.createElement('mutation');
    for (let i = 0; i < this.properties_.length; ++i) {
      const property = document.createElement('prop');
      property.setAttribute('name', this.properties_[i]);
      container.appendChild(property);
    }
    return container;
  },

  domToMutation: function (xmlElement) {
    this.properties_ = [];
    for (let i = 0, childNode; childNode = xmlElement.childNodes[i]; ++i) {
      if (childNode.nodeName.toLowerCase() === 'prop') {
        this.properties_.push(childNode.getAttribute('name'));
      }
    }
    this.updateProperties_();
  }
};

Blockly.Blocks['phaser_stop_tween'] = {
  init: function () {
    this.appendValueInput('TWEEN')
      .appendField(Blockly.Msg.PHASER_STOP_TWEEN)
      .setCheck('Tween');
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_STOP_TWEEN_COMPLETE)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'COMPLETE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_STOP_TWEEN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_STOP_TWEEN_URL);
  }
};

Blockly.Blocks['phaser_pause_tween'] = {
  init: function () {
    this.appendValueInput('TWEEN')
      .appendField(Blockly.Msg.PHASER_PAUSE_TWEEN)
      .setCheck('Tween');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_PAUSE_TWEEN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_PAUSE_TWEEN_URL);
  }
};

Blockly.Blocks['phaser_start_tween'] = {
  init: function () {
    this.appendValueInput('TWEEN')
      .appendField(Blockly.Msg.PHASER_START_TWEEN)
      .setCheck('Tween');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_START_TWEEN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_START_TWEEN_URL);
  }
};

Blockly.Blocks['phaser_resume_tween'] = {
  init: function () {
    this.appendValueInput('TWEEN')
      .appendField(Blockly.Msg.PHASER_RESUME_TWEEN)
      .setCheck('Tween');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_RESUME_TWEEN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_RESUME_TWEEN_URL);
  }
};

Blockly.Blocks['phaser_yoyo_tween'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.PHASER_YOYO_TWEEN);
    this.appendValueInput('TWEEN')
      .appendField(Blockly.Msg.PHASER_TWEEN_YOYO)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'ENABLE')
      .setCheck('Tween');
    this.appendValueInput('DELAY')
      .appendField(Blockly.Msg.PHASER_YOYO_TWEEN_DELAY)
      .setCheck('Number');
    this.appendValueInput('INDEX')
      .appendField(Blockly.Msg.PHASER_YOYO_CHILD_TWEEN_INDEX)
      .setCheck('Number');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_MATH_COLOUR);
    this.setTooltip(Blockly.Msg.PHASER_YOYO_TWEEN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_YOYO_TWEEN_URL);
  }
};
//endregion

//region EASING
//Note this block does not translate
Blockly.Blocks['phaser_easing'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([
        ['Easing.Back', 'Easing.Back'],
        ['Easing.Bounce', 'Easing.Bounce'],
        ['Easing.Circular', 'Easing.Circular'],
        ['Easing.Cubic', 'Easing.Cubic'],
        ['Easing.Elastic', 'Easing.Elastic'],
        ['Easing.Exponential', 'Easing.Exponential'],
        ['Easing.Quadratic', 'Easing.Quadratic'],
        ['Easing.Quartic', 'Easing.Quintic'],
        ['Easing.Sinusoidal', 'Easing.Sinusoidal']
      ]), 'EASING')
      .appendField(new Blockly.FieldDropdown([
        ['In', 'In'],
        ['Out', 'Out'],
        ['InOut', 'InOut']
      ]), 'DIRECTION');

    this.setOutput(true, 'Ease');
    this.setTooltip(Blockly.Msg.PHASER_EASING_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_EASING_URL);
    this.setColour(PHASER_MATH_COLOUR);
  }
};

Blockly.Blocks['phaser_easing_linear'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('Easing.Linear');
    this.setOutput(true, 'Ease');
    this.setTooltip(Blockly.Msg.PHASER_EASING_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PHASER_EASING_URL);
    this.setColour(PHASER_MATH_COLOUR);
  }
};
//endregion

//endregion

//region PHASER_GRAPHICS

//region DRAWPRIMITIVES
Blockly.Blocks['create_graphics_object'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CREATE_GRAPHICS_OBJECT);
    this.appendValueInput('x')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PHASER_GRAPHICS_COLOUR);
    this.setTooltip(Blockly.Msg.CREATE_GRAPHICS_OBJECT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CREATE_GRAPHICS_OBJECT_HELP_URL);
  }
};

Blockly.Blocks['draw_shapes_with_colour'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DRAW_SHAPES_WITH_COLOUR);
    this.appendValueInput('colour')
      .setCheck(null)
      .appendField(Blockly.Msg.COLOUR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.USING);
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable(Blockly.Msg.DEFAULT_GRAPHICS_OBJECT_NAME), 'graphics_object_name');
    this.appendStatementInput('shape draw functions')
      .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GRAPHICS_COLOUR);
    this.setTooltip(Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_HELP_URL);
  }
};

Blockly.Blocks['draw_rectangle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DRAW_RECTANGLE);
    this.appendValueInput('x')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendDummyInput()
      .appendField(Blockly.Msg.WITH);
    this.appendValueInput('w')
      .setCheck('Number')
      .appendField(Blockly.Msg.WIDTH);
    this.appendValueInput('h')
      .setCheck('Number')
      .appendField(Blockly.Msg.HEIGHT);
    this.appendDummyInput()
      .appendField(Blockly.Msg.USING)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.DEFAULT_GRAPHICS_OBJECT_NAME), 'graphics_object_name');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GRAPHICS_COLOUR);
    this.setTooltip(Blockly.Msg.DRAW_RECTANGLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DRAW_RECTANGLE_HELP_URL);
  }
};

Blockly.Blocks['draw_circle'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.DRAWCIRCLE);
    this.appendValueInput('x')
      .setCheck('Number')
      .appendField(Blockly.Msg.XCOLON);
    this.appendValueInput('y')
      .setCheck('Number')
      .appendField(Blockly.Msg.YCOLON);
    this.appendValueInput('DIAMETER')
      .setCheck('Number')
      .appendField(Blockly.Msg.DRAWCIRCLE_DIAMETER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.USING)
      .appendField(new Blockly.FieldVariable(Blockly.Msg.DEFAULT_GRAPHICS_OBJECT_NAME), 'graphics_object_name');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_GRAPHICS_COLOUR);
    this.setTooltip(Blockly.Msg.DRAWCIRCLE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DRAWCIRCLE_HELP_URL);
  }
};

//endregion

//endregion Graphics

//region PHASER_CAMERA

//region CAMERA.METHODS

Blockly.Blocks['game_camera'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GAME_CAMERA);
    this.setOutput(true);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.GAME_CAMERA_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GAME_CAMERA_URL);
  }
};

Blockly.Blocks['camera_follow_vi'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.CAMERA_FOLLOW_VI);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOLLOW_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOLLOW_VI_HELP_URL);
  }
};

Blockly.Blocks['camera_follow_vi_complex'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.CAMERA_FOLLOW_VI);
    this.appendDummyInput()
      .appendField(Blockly.Msg.FOLLOW_STYLE)
      .appendField(new Blockly.FieldDropdown([
        [Blockly.Msg.FOLLOW_LOCKON, 'Phaser.Camera.FOLLOW_LOCKON'],
        [Blockly.Msg.FOLLOW_PLATFORMER, 'Phaser.Camera.FOLLOW_PLATFORMER'],
        [Blockly.Msg.FOLLOW_TOPDOWN, 'Phaser.Camera.FOLLOW_TOPDOWN'],
        [Blockly.Msg.FOLLOW_TOPDOWN_TIGHT, 'Phaser.Camera.FOLLOW_TOPDOWN_TIGHT']]), 'STYLE');
    this.appendValueInput('LERP_X')
      .appendField(Blockly.Msg.LERP_X)
      .setCheck('Number');
    this.appendValueInput('LERP_Y')
      .appendField(Blockly.Msg.LERP_Y)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOLLOW_VI_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOLLOW_VI_HELP_URL);
  }
};

Blockly.Blocks['camera_fade'] = {
  init: function () {
    this.appendValueInput('COLOUR')
      .setCheck('Colour')
      .appendField(Blockly.Msg.CAMERA_FADE);
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.OVER);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FADE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FADE_HELP_URL);
  }
};

Blockly.Blocks['camera_flash'] = {
  init: function () {
    this.appendValueInput('COLOUR')
      .setCheck('Colour')
      .appendField(Blockly.Msg.CAMERA_FLASH);
    this.appendValueInput('TIME')
      .setCheck('Number')
      .appendField(Blockly.Msg.CAMERA_FLASH_FADE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FLASH_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FLASH_HELP_URL);
  }
};

Blockly.Blocks['camera_focus_on'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.CAMERA_FOCUS_ON);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOCUS_ON_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOCUS_ON_HELP_URL);
  }
};

Blockly.Blocks['camera_focus_on_xy'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_FOCUS_ON_XY);
    this.appendValueInput('POSX')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('POSY')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOCUS_ON_XY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOCUS_ON_XY_HELP_URL);
  }
};

Blockly.Blocks['camera_reset'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_RESET);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_RESET_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_RESET_HELP_URL);
  }
};

Blockly.Blocks['camera_reset_fx'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_RESET_FX);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_RESET_FX_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_RESET_FX_HELP_URL);
  }
};

Blockly.Blocks['camera_set_bounds_to_world'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD_HELP_URL);
  }
};

Blockly.Blocks['camera_set_position'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_SET_POSITION);
    this.appendValueInput('POSX')
      .setCheck('Number')
      .appendField(Blockly.Msg.X);
    this.appendValueInput('POSY')
      .setCheck('Number')
      .appendField(Blockly.Msg.Y);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_SET_POSITION_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_SET_POSITION_HELP_URL);
  }
};

Blockly.Blocks['camera_set_size'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_SET_SIZE);
    this.appendValueInput('WIDTH')
      .setCheck('Number')
      .appendField(Blockly.Msg.WIDTH);
    this.appendValueInput('HEIGHT')
      .setCheck('Number')
      .appendField(Blockly.Msg.HEIGHT);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_SET_SIZE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_SET_SIZE_HELP_URL);
  }
};

Blockly.Blocks['camera_shake'] = {
  init: function () {
    this.appendValueInput('INTENSITY')
      .setCheck('Number')
      .appendField(Blockly.Msg.CAMERA_SHAKE);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_SHAKE_INTENSITY);
    this.appendValueInput('DURATION')
      .setCheck('Number')
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_BOTH, 'SHAKE_BOTH'], [Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_VERTICAL, 'SHAKE_VERTICAL'], [Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_HORIZONTAL, 'SHAKE_HORIZONTAL']]), 'DIRECTION')
      .appendField(Blockly.Msg.FOR);
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_SHAKE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_SHAKE_HELP_URL);
  }
};

Blockly.Blocks['camera_unfollow'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_UNFOLLOW);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_UNFOLLOW_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_UNFOLLOW_HELP_URL);
  }
};

Blockly.Blocks['camera_follow_vi_styled'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.CAMERA_FOLLOW_VI_STYLED);
    this.appendDummyInput()
      .appendField(Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_SELECTION)
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.LOCKON, 'FOLLOW_LOCKON'], [Blockly.Msg.PLATFORMER, 'FOLLOW_PLATFORMER'], [Blockly.Msg.TOPDOWN, 'FOLLOW_TOPDOWN'], [Blockly.Msg.TOPDOWN_TIGHT, 'FOLLOW_TOPDOWN_TIGHT']]), 'STYLE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_CAMERA_COLOUR);
    this.setTooltip(Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_HELP_URL);
  }
};
//endregion

//endregion

//region PHASER_SOUND

//region SOUND.PROPERTIES
const SOUND_FIELDS_BOOLEAN_WRITABLE = ['autoplay', 'loop', 'mute', 'override', 'paused',];
const SOUND_FIELDS_BOOLEAN_RO = ['isDecoded', 'isDecoding', 'isPlaying', 'pendingPlayback', 'usingAudioTag', 'usingWebAudio'];
const SOUND_FIELDS_BOOLEAN = createDropDownField(SOUND_FIELDS_BOOLEAN_WRITABLE, SOUND_FIELDS_BOOLEAN_RO);

Blockly.Blocks['set_sound_boolean_member'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET)
      .appendField(new Blockly.FieldDropdown(SOUND_FIELDS_BOOLEAN.writable), 'ELEMENT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('OBJECT');
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Boolean');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_HELP_URL);
    this.setColour(PHASER_SOUND_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_sound_boolean_member', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['get_sound_boolean_member'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET)
      .appendField(new Blockly.FieldDropdown(SOUND_FIELDS_BOOLEAN.all), 'ELEMENT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('OBJECT');
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.GET_SOUND_BOOLEAN_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_SOUND_BOOLEAN_MEMBER_HELP_URL);
    this.setColour(PHASER_SOUND_COLOUR);
  },
  customContextMenu: createBooleanGetterContextMenu('set_sound_boolean_member', {propertyTag: 'ELEMENT'})
};

const SOUND_FIELDS_NUMERIC_WRITABLE = ['position', 'volume'];
const SOUND_FIELDS_NUMERIC_RO = ['currentTime', 'duration', 'durationMS', 'pausedPosition', 'pausedTime', 'startTime', 'stopTime', 'totalDuration'];
const SOUND_FIELDS_NUMERIC = createDropDownField(SOUND_FIELDS_NUMERIC_WRITABLE, SOUND_FIELDS_NUMERIC_RO);

Blockly.Blocks['set_sound_numeric_member'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.SET)
      .appendField(new Blockly.FieldDropdown(SOUND_FIELDS_NUMERIC.writable), 'ELEMENT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('OBJECT');
    this.appendValueInput('VALUE')
      .appendField(Blockly.Msg.TO)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_HELP_URL);
    this.setColour(PHASER_SOUND_COLOUR);
  },
  customContextMenu: createSetterContextMenu('get_sound_numeric_member', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['get_sound_numeric_member'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET)
      .appendField(new Blockly.FieldDropdown(SOUND_FIELDS_NUMERIC.all), 'ELEMENT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('OBJECT');
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.GET_SOUND_NUMERIC_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_SOUND_NUMERIC_MEMBER_HELP_URL);
    this.setColour(PHASER_SOUND_COLOUR);
  },
  customContextMenu: createNumericGetterContextMenu('set_sound_numeric_member', {propertyTag: 'ELEMENT'})
};

const SOUND_FIELDS_STRING_RO = ['currentMarker', 'key'];
const SOUND_FIELDS_STRING = createDropDownField([], SOUND_FIELDS_STRING_RO);

Blockly.Blocks['get_sound_string_member'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET)
      .appendField(new Blockly.FieldDropdown(SOUND_FIELDS_STRING.all), 'ELEMENT')
      .appendField(Blockly.Msg.OF);
    this.appendValueInput('OBJECT');
    this.setInputsInline(true);
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.GET_SOUND_STRING_MEMBER_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.GET_SOUND_STRING_MEMBER_HELP_URL);
    this.setColour(PHASER_SOUND_COLOUR);
  }
};
//endregion

//region SOUND.METHODS
Blockly.Blocks['load_sound'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOAD_SOUND);
    this.appendValueInput('TAG')
      .setCheck('String')
      .appendField(Blockly.Msg.TAG);
    this.appendValueInput('SOURCE')
      .setCheck('String')
      .appendField(Blockly.Msg.SOURCE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.LOAD_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.LOAD_SOUND_HELP_URL);
  }
};

Blockly.Blocks['add_sound'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.ADD_SOUND);
    this.appendValueInput('TAG')
      .setCheck('from tag')
      .setCheck('String');
    this.appendValueInput('VOLUME')
      .setCheck('Number')
      .appendField(Blockly.Msg.AT_VOLUME);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOPING)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOOPING');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.ADD_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.ADD_SOUND_HELP_URL);
  }
};

Blockly.Blocks['play_sound'] = {
  init: function () {
    this.appendValueInput('TAG')
      .setCheck(null)
      .appendField(Blockly.Msg.PLAY_SOUND);
    this.appendValueInput('VOLUME')
      .setCheck(null)
      .appendField(Blockly.Msg.AT_VOLUME);
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOPING)
      .appendField(new Blockly.FieldCheckbox('FALSE'), 'LOOPING');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.PLAY_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.PLAY_SOUND_HELP_URL);
  }
};

Blockly.Blocks['load_audio'] = {
  init: function () {

  }
};

Blockly.Blocks['remove_sound'] = {
  init: function () {
    this.appendValueInput('TAG')
      .setCheck(null)
      .appendField(Blockly.Msg.REMOVE_SOUND);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.REMOVE_SOUND_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.REMOVE_SOUND_HELP_URL);
  }
};

Blockly.Blocks['stop_pause_resume_sounds'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_OPTION_DROPDOWN_STOP, 'stop'], [Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_OPTION_DROPDOWN_PAUSE, 'pause'], [Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_OPTION_DROPDOWN_RESUME, 'resume']]), 'OPTION')
      .appendField(Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_HELP_URL);
  }
};

Blockly.Blocks['sound_fade_in'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_FADE_IN);
    this.appendValueInput('DURATION')
      .appendField(Blockly.Msg.OVER)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.SOUND_FADE_IN_LOOP)
      .appendField(new Blockly.FieldCheckbox(), 'LOOP');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_FADE_IN_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_FADE_IN_HELP_URL);
  }
};

Blockly.Blocks['sound_fade_out'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_FADE_OUT);
    this.appendValueInput('DURATION')
      .appendField(Blockly.Msg.OVER)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_FADE_OUT_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_FADE_OUT_HELP_URL);
  }
};

Blockly.Blocks['sound_fade_to'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_FADE_TO);
    this.appendValueInput('DURATION')
      .appendField(Blockly.Msg.OVER)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.MILLISECONDS);
    this.appendValueInput('VOLUME')
      .appendField(Blockly.Msg.SOUND_FADE_TO_VOLUME)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_FADE_TO_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_FADE_TO_HELP_URL);
  }
};

Blockly.Blocks['sound_loop_full'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_LOOP_FULL);
    this.appendValueInput('VOLUME')
      .appendField(Blockly.Msg.AT_VOLUME)
      .setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_LOOP_FULL_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_LOOP_FULL_HELP_URL);
  }
};

Blockly.Blocks['sound_pause'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_PAUSE);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_PAUSE_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_PAUSE_HELP_URL);
  }
};

Blockly.Blocks['sound_resume'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_RESUME);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_RESUME_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_RESUME_HELP_URL);
  }
};

Blockly.Blocks['sound_stop'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_STOP);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_STOP_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_STOP_HELP_URL);
  }
};

Blockly.Blocks['sound_play'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_PLAY);
    this.appendValueInput('POSITION')
      .appendField(Blockly.Msg.SOUND_PLAY_POSITION)
      .setCheck('Number');
    this.appendValueInput('VOLUME')
      .appendField(Blockly.Msg.AT_VOLUME)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'LOOP');
    this.appendDummyInput()
      .appendField(Blockly.Msg.RESTART)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'RESTART');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_PLAY_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_PLAY_HELP_URL);
  }
};

Blockly.Blocks['sound_restart'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.SOUND_RESTART);
    this.appendValueInput('POSITION')
      .appendField(Blockly.Msg.SOUND_RESTART_POSITION)
      .setCheck('Number');
    this.appendValueInput('VOLUME')
      .appendField(Blockly.Msg.AT_VOLUME)
      .setCheck('Number');
    this.appendDummyInput()
      .appendField(Blockly.Msg.LOOP)
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'LOOP');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(PHASER_SOUND_COLOUR);
    this.setTooltip(Blockly.Msg.SOUND_RESTART_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.SOUND_RESTART_HELP_URL);
  }
};
//endregion

//endregion

//region POINTER
const POINTER_DEVICE_BUTTONS = ['leftButton', 'rightButton', 'middleButton', 'backButton'];
const POINTER_DEVICE_BUTTONS_DROPDOWN = createDropDownField([], POINTER_DEVICE_BUTTONS);

Blockly.Blocks['pointer_get_device_buttons_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_DEVICE_BUTTON_FIELD)
      .appendField(new Blockly.FieldDropdown(POINTER_DEVICE_BUTTONS_DROPDOWN.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'DeviceButton');
    this.setColour(PHASER_POINTER_INPUT_COLOUR);
    this.setTooltip(Blockly.Msg.GET_POINTER_FIELD_VI_TOOLTIP.replace('%1', 'device button'));
    this.setHelpUrl(Blockly.Msg.GET_POINTER_FIELD_VI_HELP_URL);
  }
};
//endregion

//region DEVICE_BUTTON
//http://dragondrop.digipen.edu/docs/Phaser.DeviceButton.html
const DEVICE_BUTTON_BOOLEAN_FIELDS_RO = ['isDown', 'isUp', 'ctrlKey', 'altKey', 'shiftKey'];
const DEVICE_BUTTON_NUMERIC_FIELDS_RO = ['buttonCode', 'duration', 'repeats', 'timeDown', 'timeUp', 'value'];

const DEVICE_BUTTON_BOOLEAN_FIELDS = createDropDownField([], DEVICE_BUTTON_BOOLEAN_FIELDS_RO);
const DEVICE_BUTTON_NUMERIC_FIELDS = createDropDownField([], DEVICE_BUTTON_NUMERIC_FIELDS_RO);

Blockly.Blocks['device_button_get_boolean_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_BOOLEAN_FIELD)
      .appendField(new Blockly.FieldDropdown(DEVICE_BUTTON_BOOLEAN_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setColour(PHASER_DEVICE_BUTTON_COLOUR);
    this.setTooltip(Blockly.Msg.GET_DEVICE_BUTTON_FIELD_VI_TOOLTIP.replace('%1', 'boolean'));
    this.setHelpUrl(Blockly.Msg.GET_DEVICE_BUTTON_FIELD_VI_HELP_URL);
  }
};

Blockly.Blocks['device_button_get_numeric_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.GET_NUMERIC_FIELD)
      .appendField(new Blockly.FieldDropdown(DEVICE_BUTTON_NUMERIC_FIELDS.all), 'FIELD');
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.OF);
    this.setInputsInline(true);
    this.setOutput(true, 'Number');
    this.setColour(PHASER_DEVICE_BUTTON_COLOUR);
    this.setTooltip(Blockly.Msg.GET_DEVICE_BUTTON_FIELD_VI_TOOLTIP.replace('%1', 'numeric'));
    this.setHelpUrl(Blockly.Msg.GET_DEVICE_BUTTON_FIELD_VI_HELP_URL);
  }
};


Blockly.Blocks['device_button_just_pressed'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.JUST_PRESSED);
    this.setOutput('true', 'Boolean');
    this.setColour(PHASER_DEVICE_BUTTON_COLOUR);
    this.setTooltip(Blockly.Msg.DEVICE_BUTTON_JUST_PRESSED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEVICE_BUTTON_JUST_PRESSED_HELP_URL);
  }
};

Blockly.Blocks['device_button_just_released'] = {
  init: function () {
    this.appendValueInput('OBJECT')
      .appendField(Blockly.Msg.JUST_RELEASED);
    this.setOutput('true', 'Boolean');
    this.setColour(PHASER_DEVICE_BUTTON_COLOUR);
    this.setTooltip(Blockly.Msg.DEVICE_BUTTON_JUST_RELEASED_TOOLTIP);
    this.setHelpUrl(Blockly.Msg.DEVICE_BUTTON_JUST_RELEASED_HELP_URL);
  }
};
//endregion