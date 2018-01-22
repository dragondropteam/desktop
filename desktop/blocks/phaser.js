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
//region COLOURS
const PHASER_COLOUR = 120;
const PHASER_STARTUP_COLOUR = '#689f38';
const PHASER_WORLD_COLOUR = '#8bc34a';
const PHASER_STATES_COLOUR = '#7cb342';
const PHASER_UTILITY_COLOUR = '#ff6d00';
const PHASER_SPRITE_AND_IMAGES_COLOUR = '#004d40';
const PHASER_GROUPS_COLOUR = '#00695c';
const PHASER_ANIMATION_COLOUR = '#00796b';
const PHASER_PARTICLES_COLOUR = '#83C2D1';
const PHASER_GEOMETRY_COLOUR = '#26a69a';
const PHASER_RECTANGLE_COLOUR = '#757575';
const PHASER_POINT_COLOUR = '#616161';
const PHASER_TEXT_COLOUR = '#009688';
const PHASER_GAMEOBJECT_COLOUR = '#00bfa5';
const PHASER_KEYBOARD_INPUT = '#1565c0';
const PHASER_GAMEPAD_INPUT = '#42a5f5';
const PHASER_MOUSE_INPUT = '#1976d2';
const PHASER_PHYSICS_STARTUP = '#d500f9';
const PHASER_PHYSICS_DYNAMICS = '#6a1b9a';
const PHASER_PHYSICS_COLLISION_COLOUR = '#8e24aa';
const PHYSICS_COLOUR = "#5A5C51";
const PHASER_CAMERA_COLOUR = '#607d8b';
const PHASER_SOUND_COLOUR = '#827717';
const PHASER_UTIL_GENERAL_COLOUR = '#ff3d00';
const PHASER_UTIL_DEBUG_COLOUR = '#ff6e40';
const PHASER_UTIL_LIST_COLOUR = '#bf360c';
const PHASER_RANDOM_COLOUR = '#ff7043';
const PHASER_MATH_COLOUR = '#ffab91';
const PHASER_TIME_COLOUR = '#a5d6a7';

//endregion

const dragondrop = { dom: {} };

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

function createDropDownField(write, readOnly) {
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
//region PROPERTY CONTEXT MENUS
/**
 * Creates a shadow block for math_number
 * @param {number} [value=0] The value of the math number
 * @return {R}
 */
function createNumShadowDom(value = 0) {
    const xmlField = dragondrop.dom.createDom('field', {name: 'NUM'}, String(value));
    return dragondrop.dom.createDom('shadow', {type: 'math_number'}, xmlField);
}

/**
 * Creates a shadow block for point_create defaulting to [0,0]
 * @param {number} [x=0] The x coordinate
 * @param {number} [y=0]  The y coordinate
 * @return {R}
 */
function createPointShadowDom({x = 0, y = 0} = {}) {
    const xmlCoordX = dragondrop.dom.createDom('value', {name: 'X'}, createNumShadowDom(x));
    const xmlCoordY = dragondrop.dom.createDom('value', {name: 'Y'}, createNumShadowDom(y));
    return dragondrop.dom.createDom('shadow', {type: 'point_create'}, xmlCoordX, xmlCoordY);
}

/**
 * Creates a shadow block for text
 * @param {String} [string=''] Starting text for the shadow block
 */
function createStringShadowDom(string = '') {
    const text = dragondrop.dom.createDom('field', {name: 'TEXT'}, string);
    return dragondrop.dom.createDom('shadow', {type: 'text'}, text);
}

/**
 * Create a shadow block for a boolean value
 * @param {boolean} [val=true] Starting value for the shadow block
 * @return {R}
 */
function createBooleanShadowDom(val = true) {
    const boolean = dragondrop.dom.createDom('field', {name: 'BOOL'}, val === true ? 'TRUE' : 'FALSE');
    return dragondrop.dom.createDom('shadow', {type: 'logic_boolean'}, boolean);
}

/**
 * Creates a shadow block for variables values
 * @param {String} [name='defaultObject'] Starting value for the variable drop down on the shadow block
 * @return {R}
 */
function createVariableShadowDom(name = 'defaultObject') {
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
function createSetterContextMenu(type, {propertyTag = 'PROPERTY', objectTag = 'OBJECT'} = {}) {
    return function (options) {
        const option = {enabled: true, text: `Create "get ${this.getFieldValue(propertyTag)}"`};
        const field = dragondrop.dom.createDom('field', {name: propertyTag}, this.getFieldValue(propertyTag));

        // The object the setter is working on
        const block = dragondrop.dom.createDom('block', {type: type}, field);
        if(objectTag){
            const variable = dragondrop.dom.createDom('value', {name: objectTag}, createVariableShadowDom(this.getInputTargetBlock(objectTag).getFieldValue('VAR')));

            block.append(variable);
        }
        console.log(block);
        option.callback = Blockly.ContextMenu.callbackFactory(this, block);
        options.push(option);
    }
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
function createNumericGetterContextMenu(type, options) {
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
function createStringGetterContextMenu(type, options) {
    return createGetterContextMenu(type, createStringShadowDom, options)
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
function createBooleanGetterContextMenu(type, options) {
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
function createPointGetterContextMenu(type, options) {
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
function createGetterContextMenu(type, shadowGenerator, {objectTag = 'OBJECT', propertyTag = 'PROPERTY', valueTag = 'VALUE'} = {}) {
    return function (options) {
        const option = {enabled: true, text: `Create "set ${this.getFieldValue(propertyTag)}"`};
        // The property the getter is returning
        const property = dragondrop.dom.createDom('field', {name: propertyTag}, this.getFieldValue(propertyTag));
        // Default shadow block to populate the setter
        const value = dragondrop.dom.createDom('value', {name: valueTag}, shadowGenerator());
        //The block will contain a shadow block containing the defaults appropriate to the type of the property
        const block = dragondrop.dom.createDom('block', {type: type}, property, value);

        if(objectTag){
            // The object the getter is working on
            const variable = dragondrop.dom.createDom('value', {name: objectTag}, createVariableShadowDom(this.getInputTargetBlock(objectTag).getFieldValue('VAR')));
            block.append(variable);
        }

        console.log(block);
        option.callback = Blockly.ContextMenu.callbackFactory(this, block);
        options.push(option);
    }
}

//region STARTUP
Blockly.Blocks['phaser_simple_init'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_2)
            .appendField(new Blockly.FieldNumber(800), "WIDTH")
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_3)
            .appendField(new Blockly.FieldNumber(600), "HEIGHT");
        this.appendStatementInput("PRELOAD")
            .setCheck(null)
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_4);
        this.appendStatementInput("CREATE")
            .setCheck(null)
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_5);
        this.appendStatementInput("UPDATE")
            .setCheck(null)
            .appendField(Blockly.Msg.PHASER_SIMPLE_INIT_FIELD_6);
        this.setColour(PHASER_STARTUP_COLOUR);
        this.setTooltip(Blockly.Msg.PHASER_SIMPLE_INIT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.PHASER_SIMPLE_INIT_HELP_URL);
    }
};

Blockly.Blocks['start_phaser_for_states'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.START_PHASER_FOR_STATES_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.START_PHASER_FOR_STATES_FIELD_2)
            .appendField(new Blockly.FieldNumber(800, 0), "WIDTH");
        this.appendDummyInput()
            .appendField(Blockly.Msg.START_PHASER_FOR_STATES_FIELD_3)
            .appendField(new Blockly.FieldNumber(600, 0), "HEIGHT");
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setColour(PHASER_STARTUP_COLOUR);
        this.setTooltip(Blockly.Msg.START_PHASER_FOR_STATES_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.START_PHASER_FOR_STATES_HELP_URL);
    }
};
//endregion

//region UTILITY
Blockly.Blocks['center_and_stretch'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CENTER_AND_STRETCH_FIELD_1);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_UTIL_GENERAL_COLOUR);
        this.setTooltip(Blockly.Msg.CENTER_AND_STRETCH_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CENTER_AND_STRETCH_HELP_URL);
    }
};

Blockly.Blocks['enable_step'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ENABLE_STEP_FIELD_1);
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
            .appendField(Blockly.Msg.DISABLE_STEP_FIELD_1);
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
            .appendField(Blockly.Msg.STEP_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.STEP_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.STEP_HELP_URL);
        this.setColour(PHASER_UTIL_DEBUG_COLOUR);
    }
};
//endregion

//region DRAWPRIMITIVES
Blockly.Blocks['create_graphics_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CREATE_GRAPHICS_OBJECT_FIELD_1);
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField(Blockly.Msg.CREATE_GRAPHICS_OBJECT_FIELD_2);
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField(Blockly.Msg.CREATE_GRAPHICS_OBJECT_FIELD_3);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.CREATE_GRAPHICS_OBJECT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CREATE_GRAPHICS_OBJECT_HELP_URL);
    }
};

Blockly.Blocks['draw_shapes_with_colour'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_FIELD_1);
        this.appendValueInput("colour")
            .setCheck(null)
            .appendField(Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_FIELD_3);
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable(Blockly.Msg.DEFAULT_GRAPHICS_OBJECT_NAME), "graphics_object_name");
        this.appendStatementInput("shape draw functions")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DRAW_SHAPES_WITH_COLOUR_HELP_URL);
    }
};

Blockly.Blocks['draw_rectangle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DRAW_RECTANGLE_FIELD_1);
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField(Blockly.Msg.DRAW_RECTANGLE_FIELD_2);
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField(Blockly.Msg.DRAW_RECTANGLE_FIELD_3);
        this.appendDummyInput()
            .appendField(Blockly.Msg.DRAW_RECTANGLE_FIELD_4);
        this.appendValueInput("w")
            .setCheck("Number")
            .appendField(Blockly.Msg.DRAW_RECTANGLE_FIELD_5);
        this.appendValueInput("h")
            .setCheck("Number")
            .appendField(Blockly.Msg.DRAW_RECTANGLE_FIELD_6);
        this.appendDummyInput()
            .appendField(Blockly.Msg.DRAW_RECTANGLE_FIELD_7)
            .appendField(new Blockly.FieldVariable(Blockly.Msg.DEFAULT_GRAPHICS_OBJECT_NAME), "graphics_object_name");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip(Blockly.Msg.DRAW_RECTANGLE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DRAW_RECTANGLE_HELP_URL);
    }
};

//endregion

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
            .appendField(Blockly.Msg.STOP_ANIMATION_FIELD_1)
            .appendField(new Blockly.FieldVariable('defaultObject'), "OBJECT");
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
            .appendField(Blockly.Msg.PLAY_ANIMATION_FIELD_1);
        this.appendValueInput('ANIMATION');
        this.appendDummyInput()
            .appendField(Blockly.Msg.PLAY_ANIMATION_FIELD_2)
            .appendField(new Blockly.FieldVariable('defaultObject'), "OBJECT");
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
            .appendField(Blockly.Msg.SET_FRAME_FIELD_1)
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
            .appendField(Blockly.Msg.ADD_ANIMATION_FIELD_1)
            .appendField(new Blockly.FieldVariable("defaultObject"), "object");
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADD_ANIMATION_FIELD_2)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.ADD_ANIMATION_NAME_TEXT_DEFAULT), "NAME");
        this.appendValueInput("FRAMES")
            .setCheck(null)
            .appendField(Blockly.Msg.ADD_ANIMATION_FIELD_3);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADD_ANIMATION_FIELD_4)
            .appendField(new Blockly.FieldNumber(60), "FPS")
            .appendField(Blockly.Msg.ADD_ANIMATION_FIELD_5);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADD_ANIMATION_FIELD_6)
            .appendField(new Blockly.FieldCheckbox("TRUE"), "LOOP");
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
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField(Blockly.Msg.ADD_CHILD_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADD_CHILD_FIELD_2)
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.RESET_FRAME_FIELD_1);
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.RESIZE_FRAME_FIELD_1);
        this.appendValueInput("PARENT")
            .setCheck(null)
            .appendField(Blockly.Msg.RESIZE_FRAME_FIELD_2);
        this.appendValueInput("WIDTH")
            .setCheck("Number")
            .appendField(Blockly.Msg.RESIZE_FRAME_FIELD_3);
        this.appendValueInput("HEIGHT")
            .setCheck("Number")
            .appendField(Blockly.Msg.RESIZE_FRAME_FIELD_4);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip(Blockly.Msg.RESIZE_FRAME_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.RESIZE_FRAME_HELP_URL);
    }
};
//endregion

//endregion

//region SPRITES_AND_IMAGES

//region SPRITES
Blockly.Blocks['create_image'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CREATE_IMAGE_FIELD_1);
        this.setColour(PHASER_COLOUR);
        this.appendValueInput('TAG')
            .appendField(Blockly.Msg.CREATE_IMAGE_FIELD_2)
            .setCheck('String');
        this.appendValueInput('SRC')
            .appendField(Blockly.Msg.CREATE_IMAGE_FIELD_3)
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
            .appendField(Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_1);
        this.appendValueInput('TAG')
            .appendField(Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_2)
            .setCheck('String');
        this.appendValueInput('SRC')
            .appendField(Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_3)
            .setCheck('String');
        this.appendDummyInput()
            .appendField(Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_4)
            .appendField(new Blockly.FieldNumber(0), "FRAME_WIDTH")
            .appendField(Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_5);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_6)
            .appendField(new Blockly.FieldNumber(0), "FRAME_HEIGHT")
            .appendField(Blockly.Msg.CREATE_SPRITE_SHEET_FIELD_7);
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
            .appendField(Blockly.Msg.ADD_IMAGE_FIELD_1);
        this.appendValueInput('X_POS')
            .appendField(Blockly.Msg.ADD_IMAGE_FIELD_2)
            .setCheck('Number');
        this.appendValueInput('Y_POS')
            .appendField(Blockly.Msg.ADD_IMAGE_FIELD_3)
            .setCheck('Number');
        this.appendValueInput('TAG')
            .appendField(Blockly.Msg.ADD_IMAGE_FIELD_4)
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
            .appendField(Blockly.Msg.ADDSPRITEWITHATLAS_FIELD_1);
        this.appendValueInput("tag")
            .setCheck("String")
            .appendField(Blockly.Msg.ADDSPRITEWITHATLAS_FIELD_2);
        this.appendValueInput("text_source")
            .setCheck("String")
            .appendField(Blockly.Msg.ADDSPRITEWITHATLAS_FIELD_3);
        this.appendValueInput("text_xmlsource")
            .setCheck("String")
            .appendField(Blockly.Msg.ADDSPRITEWITHATLAS_FIELD_4);
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
            .appendField(Blockly.Msg.IMAGESUBTEXTUREATLAS_FIELD_1);
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField(Blockly.Msg.IMAGESUBTEXTUREATLAS_FIELD_2);
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField(Blockly.Msg.IMAGESUBTEXTUREATLAS_FIELD_3);
        this.appendValueInput("spritesource")
            .setCheck("String")
            .appendField(Blockly.Msg.IMAGESUBTEXTUREATLAS_FIELD_4);
        this.appendValueInput("xmlsubtexture")
            .setCheck("String")
            .appendField(Blockly.Msg.IMAGESUBTEXTUREATLAS_FIELD_5);
        this.setOutput(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip(Blockly.Msg.IMAGESUBTEXTUREATLAS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.IMAGESUBTEXTUREATLAS_HELP_URL);
    }
};


Blockly.Blocks['add_child_vi'] = {
    init: function () {
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField(Blockly.Msg.ADD_CHILD_VI_FIELD_1);
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.ADD_CHILD_VI_FIELD_2);
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
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField(Blockly.Msg.ADD_CHILD_AT_FIELD_1);
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField(Blockly.Msg.ADD_CHILD_AT_FIELD_2)
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT")
            .appendField(Blockly.Msg.ADD_CHILD_AT_FIELD_3);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip(Blockly.Msg.ADD_CHILD_AT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ADD_CHILD_AT_HELP_URL);
    }
};

Blockly.Blocks['add_child_at_vi'] = {
    init: function () {
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField(Blockly.Msg.ADD_CHILD_AT_VI_FIELD_1);
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.ADD_CHILD_AT_VI_FIELD_2);
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField(Blockly.Msg.ADD_CHILD_AT_VI_FIELD_3);
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.ALIGN_IN_FIELD_1);
        this.appendValueInput("CONTAINER")
            .setCheck(null)
            .appendField(Blockly.Msg.ALIGN_IN_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ALIGN_IN_FIELD_3)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_1, "TOP_LEFT"], [Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_2, "TOP_CENTER"], [Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_3, "TOP_RIGHT"], [Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_4, "LEFT_CENTER"], [Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_5, "CENTER"], [Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_6, "RIGHT_CENTER"], [Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_7, "BOTTOM_LEFT"], [Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_8, "BOTTOM_CENTER"], [Blockly.Msg.ALIGN_IN_POSITION_DROPDOWN_9, "BOTTOM_RIGHT"]]), "POSITION");
        this.appendValueInput("OFFSETX")
            .setCheck("Number")
            .appendField(Blockly.Msg.ALIGN_IN_FIELD_4);
        this.appendValueInput("OFFSETY")
            .setCheck("Number")
            .appendField(Blockly.Msg.ALIGN_IN_FIELD_5);
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.ALIGN_TO_FIELD_1);
        this.appendValueInput("CONTAINER")
            .setCheck(null)
            .appendField(Blockly.Msg.ALIGN_TO_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ALIGN_TO_FIELD_3)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_1, "TOP_LEFT"], [Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_2, "TOP_CENTER"], [Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_3, "TOP_RIGHT"], [Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_4, "LEFT_TOP"], [Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_5, "LEFT_CENTER"], [Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_6, "LEFT_BOTTOM"], [Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_7, "RIGHT_TOP"], [Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_8, "RIGHT_CENTER"], [Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_9, "RIGHT_BOTTOM"], [Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_10, "BOTTOM_LEFT"], [Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_11, "BOTTOM_CENTER"], [Blockly.Msg.ALIGN_TO_POSITION_DROPDOWN_12, "BOTTOM_RIGHT"]]), "POSITION");
        this.appendValueInput("OFFSETX")
            .setCheck("Number")
            .appendField(Blockly.Msg.ALIGN_TO_FIELD_4);
        this.appendValueInput("OFFSETY")
            .setCheck("Number")
            .appendField(Blockly.Msg.ALIGN_TO_FIELD_5);
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.BRING_TO_TOP_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.BRING_TO_TOP_FIELD_2);
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.CHECK_WORLD_BOUNDS_FIELD_1);
        this.appendValueInput("BOOL")
            .setCheck("Boolean")
            .appendField(Blockly.Msg.CHECK_WORLD_BOUNDS_FIELD_2);
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
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField(Blockly.Msg.CONTAINS_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CONTAINS_FIELD_2)
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT")
            .appendField(Blockly.Msg.CONTAINS_FIELD_3);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip(Blockly.Msg.CONTAINS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CONTAINS_HELP_URL);
    }
};

Blockly.Blocks['contains_vi'] = {
    init: function () {
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField(Blockly.Msg.CONTAINS_VI_FIELD_1);
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.CONTAINS_VI_FIELD_2)
            .appendField(Blockly.Msg.CONTAINS_VI_FIELD_3);
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip(Blockly.Msg.CONTAINS_VI_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CONTAINS_VI_HELP_URL);
    }
};

Blockly.Blocks['crop'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.CROP_FIELD_1);
        this.appendValueInput("RECTANGLE")
            .setCheck(null)
            .appendField(Blockly.Msg.CROP_FIELD_2);
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.CLEAR_CROPPING_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip(Blockly.Msg.CLEAR_CROPPING_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CLEAR_CROPPING_HELP_URL);
    }
};

Blockly.Blocks['destroy_sprite'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.DESTROY_SPRITE_FIELD_1);
        this.appendValueInput("BOOL")
            .setCheck("Boolean")
            .appendField(Blockly.Msg.DESTROY_SPRITE_FIELD_2);
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
            .appendField(Blockly.Msg.GET_CHILD_AT_VI_FIELD_1);
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField(Blockly.Msg.GET_CHILD_AT_VI_FIELD_2);
        this.setOutput(true, null);
        this.setInputsInline(true);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip(Blockly.Msg.GET_CHILD_AT_VI_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_CHILD_AT_VI_HELP_URL);
    }
};

Blockly.Blocks['get_child_index'] = {
    init: function () {
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField(Blockly.Msg.GET_CHILD_INDEX_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_CHILD_INDEX_FIELD_2)
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip(Blockly.Msg.GET_CHILD_INDEX_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_CHILD_INDEX_HELP_URL);
    }
};

Blockly.Blocks['get_child_index_vi'] = {
    init: function () {
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField(Blockly.Msg.GET_CHILD_INDEX_VI_FIELD_1);
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.GET_CHILD_INDEX_VI_FIELD_2);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip(Blockly.Msg.GET_CHILD_INDEX_VI_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_CHILD_INDEX_VI_HELP_URL);
    }
};

Blockly.Blocks['load_texture'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.LOAD_TEXTURE_FIELD_1);
        this.appendValueInput("TEXTURE")
            .setCheck("String")
            .appendField(Blockly.Msg.LOAD_TEXTURE_FIELD_2);
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.MOVE_DOWN_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MOVE_DOWN_FIELD_2);
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.MOVE_UP_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MOVE_UP_FIELD_2);
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
        this.appendValueInput("SPRITEA")
            .setCheck(null)
            .appendField(Blockly.Msg.SPRITE_OVERLAP_FIELD_1);
        this.appendValueInput("SPRITEB")
            .setCheck(null)
            .appendField(Blockly.Msg.SPRITE_OVERLAP_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SPRITE_OVERLAP_FIELD_3);
        this.setOutput(true, "Boolean");
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.OUT_OF_BOUNDS_KILL_FIELD_1);
        this.appendValueInput("BOOL")
            .setCheck("Boolean")
            .appendField(Blockly.Msg.OUT_OF_BOUNDS_KILL_FIELD_2);
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.OUT_OF_BOUNDS_FAINT_FIELD_1);
        this.appendValueInput("BOOL")
            .setCheck("Boolean")
            .appendField(Blockly.Msg.OUT_OF_BOUNDS_FAINT_FIELD_2);
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
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField(Blockly.Msg.REMOVE_CHILD_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.REMOVE_CHILD_FIELD_2)
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
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
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField(Blockly.Msg.REMOVE_CHILD_VI_FIELD_1);
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.REMOVE_CHILD_VI_FIELD_2);
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
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField(Blockly.Msg.REMOVE_CHILD_AT_VI_FIELD_1);
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.REMOVE_CHILD_AT_VI_FIELD_2);
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
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField(Blockly.Msg.REMOVE_CHILD_AT_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.REMOVE_CHILD_AT_FIELD_2)
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
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
            .appendField(Blockly.Msg.REMOVE_CHILDREN_FIELD_1)
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
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
            .appendField(Blockly.Msg.REMOVE_CHILDREN_VI_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip(Blockly.Msg.REMOVE_CHILDREN_VI_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.REMOVE_CHILDREN_VI_HELP_URL);
    }
};
//endregion

//region ANIMATION
Blockly.Blocks['add_animation_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.ADD_ANIMATION_VI_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADD_ANIMATION_VI_FIELD_2)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.ADD_ANIMATION_VI_NAME_TEXT_DEFAULT), "NAME");
        this.appendValueInput("FRAMES")
            .setCheck(null)
            .appendField(Blockly.Msg.ADD_ANIMATION_VI_FIELD_3);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADD_ANIMATION_VI_FIELD_4)
            .appendField(new Blockly.FieldNumber(60), "FPS")
            .appendField(Blockly.Msg.ADD_ANIMATION_VI_FIELD_5);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADD_ANIMATION_VI_FIELD_6)
            .appendField(new Blockly.FieldCheckbox("TRUE"), "LOOP");
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
            .appendField(Blockly.Msg.PLAY_ANIMATION_VI_FIELD_1);
        this.appendValueInput('ANIMATION');
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.PLAY_ANIMATION_VI_FIELD_2);
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
            .appendField(Blockly.Msg.ANIMATION_NEXT_FIELD_1)
            .appendField(new Blockly.FieldNumber(1, 1), "FRAMECOUNT")
            .appendField(Blockly.Msg.ANIMATION_NEXT_FIELD_2)
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
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
            .appendField(Blockly.Msg.ANIMATION_PREVIOUS_FIELD_1)
            .appendField(new Blockly.FieldNumber(1, 1), "FRAMECOUNT")
            .appendField(Blockly.Msg.ANIMATION_PREVIOUS_FIELD_2)
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
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
            .appendField(Blockly.Msg.ANIMATION_NEXT_VI_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ANIMATION_NEXT_VI_FIELD_2);
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.ANIMATION_NEXT_VI_FIELD_3);
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
            .appendField(Blockly.Msg.ANIMATION_PREVIOUS_VI_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ANIMATION_PREVIOUS_VI_FIELD_2);
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.ANIMATION_PREVIOUS_VI_FIELD_3);
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
            .appendField(Blockly.Msg.REFRESH_FRAME_FIELD_1)
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
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
            .appendField(Blockly.Msg.ANIMATION_UPDATE_FIELD_1)
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
        this.setOutput(true, "Boolean");
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
            .appendField(Blockly.Msg.VALIDATE_FRAMES_FIELD_1)
            .appendField(new Blockly.FieldVariable("defaultObject"), "Object");
        this.appendValueInput("FRAMES")
            .setCheck("Array")
            .appendField(Blockly.Msg.VALIDATE_FRAMES_FIELD_2);
        this.setOutput(true, "Boolean");
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip(Blockly.Msg.VALIDATE_FRAMES_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.VALIDATE_FRAMES_HELP_URL);
    }
};

Blockly.Blocks['validate_frames_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.VALIDATE_FRAMES_VI_FIELD_1);
        this.appendValueInput("FRAMES")
            .setCheck("Array")
            .appendField(Blockly.Msg.VALIDATE_FRAMES_VI_FIELD_2);
        this.setOutput(true, "Boolean");
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
            .appendField(Blockly.Msg.ANIMATION_DESTROY_FIELD_1)
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
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
            .appendField(Blockly.Msg.ANIMATION_DESTROY_VI_FIELD_1);
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
            .appendField(Blockly.Msg.STOP_ANIMATION_VI_FIELD_1);
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
            .appendField(Blockly.Msg.SET_FRAME_VI_FIELD_1);
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.SET_FRAME_VI_FIELD_2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setTooltip(Blockly.Msg.SET_FRAME_VI_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_FRAME_VI_HELP_URL);
    }
};
//endregion


Blockly.Blocks['send_to_back'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.SEND_TO_BACK_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SEND_TO_BACK_FIELD_2);
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
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField(Blockly.Msg.SET_CHILD_INDEX_FIELD_1);
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_CHILD_INDEX_FIELD_2)
            .appendField(new Blockly.FieldVariable("defaultObject"), "PARENT")
            .appendField(Blockly.Msg.SET_CHILD_INDEX_FIELD_3);
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
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField(Blockly.Msg.SET_CHILD_INDEX_VI_FIELD_1);
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.SET_CHILD_INDEX_VI_FIELD_2);
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_CHILD_INDEX_VI_FIELD_3);
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.SET_SPRITE_FRAME_FIELD_1);
        this.appendValueInput("FRAME")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.Msg.SET_SPRITE_FRAME_FIELD_2);
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.SET_SCALE_MIN_MAX_FIELD_1);
        this.appendValueInput("MINX")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_SCALE_MIN_MAX_FIELD_2);
        this.appendValueInput("MINY")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_SCALE_MIN_MAX_FIELD_3);
        this.appendValueInput("MAXX")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_SCALE_MIN_MAX_FIELD_4);
        this.appendValueInput("MAXY")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_SCALE_MIN_MAX_FIELD_5);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip(Blockly.Msg.SET_SCALE_MIN_MAX_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_SCALE_MIN_MAX_HELP_URL);
    }
};

Blockly.Blocks['clear_scale_min_max'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.CLEAR_SCALE_MIN_MAX_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip(Blockly.Msg.CLEAR_SCALE_MIN_MAX_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CLEAR_SCALE_MIN_MAX_HELP_URL);
    }
};

Blockly.Blocks['set_texture'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.SET_TEXTURE_FIELD_1);
        this.appendValueInput("TEXTURE")
            .setCheck(null)
            .appendField(Blockly.Msg.SET_TEXTURE_FIELD_2);
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
        this.appendValueInput("PARENT")
            .setCheck(null)
            .appendField(Blockly.Msg.SWAP_CHILDREN_FIELD_1);
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField(Blockly.Msg.SWAP_CHILDREN_FIELD_2);
        this.appendValueInput("CHILD2")
            .setCheck(null)
            .appendField(Blockly.Msg.SWAP_CHILDREN_FIELD_3);
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
        this.appendValueInput("SPRITE")
            .setCheck(null)
            .appendField(Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_2)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_1, "currentAnim"], [Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_2, "currentFrame"], [Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_3, "frame"], [Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_4, "frameData"], [Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_5, "frameName"], [Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_6, "frameTotal"], [Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_7, "game"], [Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_8, "isLoaded"], [Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_9, "name"], [Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_10, "paused"], [Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_11, "sprite"], [Blockly.Msg.GET_ANIMATION_PROPERTY_FIELD_DROPDOWN_12, "updateIfVisible"]]), "FIELD");
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
        this.appendValueInput("NEWPROPERTY")
            .setCheck(null)
            .appendField(Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_DROPDOWN_1, "frame"], [Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_DROPDOWN_2, "frameName"], [Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_DROPDOWN_3, "paused"], [Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_DROPDOWN_4, "updateIfVisible"]]), "FIELD")
            .appendField(Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_2)
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT")
            .appendField(Blockly.Msg.SET_ANIMATION_PROPERTY_FIELD_3);
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
        this.appendDummyInput("NEWPROPERTY")
            .appendField(Blockly.Msg.SET_ANIMATION_PROPERTY_VI_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SET_ANIMATION_PROPERTY_VI_FIELD_DROPDOWN_1, "paused"], [Blockly.Msg.SET_ANIMATION_PROPERTY_VI_FIELD_DROPDOWN_2, "updateIfVisible"]]), "FIELD");
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.SET_ANIMATION_PROPERTY_VI_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_ANIMATION_PROPERTY_VI_FIELD_3)
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
        this.appendValueInput("Sprite")
            .setCheck(null)
            .appendField(Blockly.Msg.ANIMATION_GET_ANIMATION_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ANIMATION_GET_ANIMATION_FIELD_2)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.ANIMATION_GET_ANIMATION_NAME_TEXT_DEFAULT), "NAME");
        this.setOutput(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip(Blockly.Msg.ANIMATION_GET_ANIMATION_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ANIMATION_GET_ANIMATION_HELP_URL);
    }
};

// Revised field manipulation blocks for animations
// Note that these do not need to be translated because they will always have to appear as shown below.
const ANIMATION_BOOLEAN_WRITABLE = ['enableUpdate', 'isFinished', 'isPaused', 'isPlaying', 'isReversed', 'faintOnComplete', 'loop', 'paused', 'reversed'];
const ANIMATION_BOOLEAN_READABLE = [];
const ANIMATION_BOOLEAN_FIELDS = createDropDownField(ANIMATION_BOOLEAN_WRITABLE, ANIMATION_BOOLEAN_READABLE);

const ANIMATION_NUMERIC_WRITABLE = ['delay','frame','loopCount','speed'];
const ANIMATION_NUMERIC_READABLE = ['frameTotal'];
const ANIMATION_NUMERIC_FIELDS = createDropDownField(ANIMATION_NUMERIC_WRITABLE, ANIMATION_NUMERIC_READABLE);

const ANIMATION_STRING_WRITABLE = ['name'];
const ANIMATION_STRING_READABLE = [];
const ANIMATION_STRING_FIELDS = createDropDownField(ANIMATION_STRING_WRITABLE, ANIMATION_STRING_READABLE);


Blockly.Blocks['set_animation_boolean_field_vi'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_BOOLEAN_FIELD)
            .appendField(new Blockly.FieldDropdown(ANIMATION_BOOLEAN_FIELDS.writable), "FIELD");
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.OF);
        this.appendValueInput('VALUE')
            .appendField(Blockly.Msg.TO)
            .setCheck("Boolean");
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
            .appendField(new Blockly.FieldDropdown(ANIMATION_NUMERIC_FIELDS.writable), "FIELD");
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.OF);
        this.appendValueInput('VALUE')
            .appendField(Blockly.Msg.TO)
            .setCheck("Number");
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
            .appendField(new Blockly.FieldDropdown(ANIMATION_STRING_FIELDS.writable), "FIELD");
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.OF);
        this.appendValueInput('VALUE')
            .appendField(Blockly.Msg.TO)
            .setCheck("String");
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
            .appendField(new Blockly.FieldDropdown(ANIMATION_BOOLEAN_FIELDS.all), "FIELD");
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
            .appendField(new Blockly.FieldDropdown(ANIMATION_NUMERIC_FIELDS.all), "FIELD");
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
            .appendField(new Blockly.FieldDropdown(ANIMATION_STRING_FIELDS.all), "FIELD");
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


//region GROUP
Blockly.Blocks['create_group'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CREATE_GROUP_FIELD_1);
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
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_1);
        this.appendValueInput('X_POS')
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_2);
        this.appendValueInput('Y_POS')
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_3);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_4)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.CREATE_OBJECT_IN_GROUP_TAG_TEXT_DEFAULT), "TAG")
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_5)
            .appendField(new Blockly.FieldVariable("defaultGroup"), "GROUP")
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_FIELD_6);
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
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_1);
        this.appendValueInput('X_POS')
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_2);
        this.appendValueInput('Y_POS')
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_3);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_4)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_TAG_TEXT_DEFAULT), "TAG")
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_5)
            .appendField(new Blockly.FieldVariable("defaultGroup"), "GROUP")
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_6);
        this.appendValueInput('FRAME')
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_FIELD_7);
        this.setOutput(true, null);
        this.setTooltip(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_HELP_URL);
        this.setColour(PHASER_GROUPS_COLOUR);
    }
};

Blockly.Blocks['create_object_in_group_vi'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_FIELD_1);
        this.appendValueInput('X_POS')
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_FIELD_2);
        this.appendValueInput('Y_POS')
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_FIELD_3);
        this.appendValueInput('TAG')
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_FIELD_4);
        this.appendValueInput('GROUP')
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_FIELD_5);
        this.setOutput(true, null);
        this.setTooltip(Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CREATE_OBJECT_IN_GROUP_VI_HELP_URL);
        this.setColour(PHASER_GROUPS_COLOUR);
    }
};

Blockly.Blocks['create_object_in_group_with_frame_vi'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_1);
        this.appendValueInput('X_POS')
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_2);
        this.appendValueInput('Y_POS')
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_3);
        this.appendValueInput('TAG')
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_4);
        this.appendValueInput('GROUP')
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_5);
        this.appendValueInput('FRAME')
            .appendField(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_FIELD_6);
        this.setOutput(true, null);
        this.setTooltip(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CREATE_OBJECT_IN_GROUP_WITH_FRAME_VI_HELP_URL);
        this.setColour(PHASER_GROUPS_COLOUR);
    }
};

Blockly.Blocks['add_to_group'] = {
    init: function () {
        this.appendValueInput("NEW_ITEM")
            .setCheck(null)
            .appendField(Blockly.Msg.ADD_TO_GROUP_FIELD_1);
        this.appendValueInput("GROUP")
            .setCheck(null)
            .appendField(Blockly.Msg.ADD_TO_GROUP_FIELD_2);
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
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField(Blockly.Msg.REMOVE_FROM_GROUP_FIELD_1);
        this.appendValueInput("GROUP")
            .setCheck(null)
            .appendField(Blockly.Msg.REMOVE_FROM_GROUP_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.REMOVE_FROM_GROUP_FIELD_3)
            .appendField(new Blockly.FieldCheckbox("FALSE"), "DESTROY");
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
        this.appendValueInput("GROUP")
            .setCheck(null)
            .appendField(Blockly.Msg.GROUP_CONTAINS_FIELD_1);
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField(Blockly.Msg.GROUP_CONTAINS_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GROUP_CONTAINS_FIELD_3);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PHASER_GROUPS_COLOUR);
        this.setTooltip(Blockly.Msg.GROUP_CONTAINS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GROUP_CONTAINS_HELP_URL);
    }
};

Blockly.Blocks['group_count_alive_dead'] = {
    init: function () {
        this.appendValueInput("GROUP")
            .setCheck(null)
            .appendField(Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_STATE_DROPDOWN_1, "Living"], [Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_STATE_DROPDOWN_2, "Fainted"]]), "STATE")
            .appendField(Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_FIELD_2);
        this.setOutput(true, null);
        this.setColour(PHASER_GROUPS_COLOUR);
        this.setTooltip(Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GROUP_COUNT_ALIVE_DEAD_HELP_URL);
    }
};

Blockly.Blocks['destroy_group'] = {
    init: function () {
        this.appendValueInput("GROUP")
            .setCheck(null)
            .appendField(Blockly.Msg.DESTROY_GROUP_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.DESTROY_GROUP_FIELD_2)
            .appendField(new Blockly.FieldCheckbox("FALSE"), "HANDLE_CHILDREN");
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
        this.appendValueInput("GROUP")
            .setCheck(null)
            .appendField(Blockly.Msg.GROUP_GET_ALL_FIELD_1);
        this.setOutput(true, null);
        this.setColour(PHASER_GROUPS_COLOUR);
        this.setTooltip(Blockly.Msg.GROUP_GET_ALL_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GROUP_GET_ALL_HELP_URL);
    }
};

Blockly.Blocks['group_get_at'] = {
    init: function () {
        this.appendValueInput("GROUP")
            .setCheck(null)
            .appendField(Blockly.Msg.GROUP_GET_AT_FIELD_1);
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField(Blockly.Msg.GROUP_GET_AT_FIELD_2);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PHASER_GROUPS_COLOUR);
        this.setTooltip(Blockly.Msg.GROUP_GET_AT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GROUP_GET_AT_HELP_URL);
    }
};

Blockly.Blocks['group_get_closest_to'] = {
    init: function () {
        this.appendValueInput("GROUP")
            .setCheck(null)
            .appendField(Blockly.Msg.GROUP_GET_CLOSEST_TO_FIELD_1);
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.GROUP_GET_CLOSEST_TO_FIELD_2);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PHASER_GROUPS_COLOUR);
        this.setTooltip(Blockly.Msg.GROUP_GET_CLOSEST_TO_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GROUP_GET_CLOSEST_TO_HELP_URL);
    }
};

Blockly.Blocks['group_get_first_alive_dead'] = {
    init: function () {
        this.appendValueInput("GROUP")
            .setCheck(null)
            .appendField(Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_MODE_DROPDOWN_1, "Alive"], [Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_MODE_DROPDOWN_2, "Dead"]]), "MODE")
            .appendField(Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_FIELD_2);
        this.setOutput(true, null);
        this.setColour(PHASER_GROUPS_COLOUR);
        this.setTooltip(Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GROUP_GET_FIRST_ALIVE_DEAD_HELP_URL);
    }
};

Blockly.Blocks['group_get_first_alive_fainted'] = {
    init: function () {
        this.appendValueInput("GROUP")
            .setCheck(null)
            .appendField(Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_MODE_DROPDOWN_1, "Alive"], [Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_MODE_DROPDOWN_2, "Fainted"]]), "MODE")
            .appendField(Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_FIELD_2);
        this.setOutput(true, null);
        this.setColour(PHASER_GROUPS_COLOUR);
        this.setTooltip(Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GROUP_GET_FIRST_ALIVE_FAINTED_HELP_URL);
    }
};

Blockly.Blocks['group_get_random'] = {
    init: function () {
        this.appendValueInput("GROUP")
            .setCheck(null)
            .appendField(Blockly.Msg.GROUP_GET_RANDOM_FIELD_1);
        this.setOutput(true, null);
        this.setColour(PHASER_GROUPS_COLOUR);
        this.setTooltip(Blockly.Msg.GROUP_GET_RANDOM_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GROUP_GET_RANDOM_HELP_URL);
    }
};

Blockly.Blocks['group_get_random_exists'] = {
    init: function () {
        this.appendValueInput("GROUP")
            .setCheck(null)
            .appendField(Blockly.Msg.GROUP_GET_RANDOM_EXISTS_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GROUP_GET_RANDOM_EXISTS_FIELD_2);
        this.setOutput(true, null);
        this.setColour(PHASER_GROUPS_COLOUR);
        this.setTooltip(Blockly.Msg.GROUP_GET_RANDOM_EXISTS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GROUP_GET_RANDOM_EXISTS_HELP_URL);
    }
};

Blockly.Blocks['group_remove_all'] = {
    init: function () {
        this.appendValueInput("GROUP")
            .setCheck(null)
            .appendField(Blockly.Msg.GROUP_REMOVE_ALL_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.GROUP_REMOVE_ALL_FIELD_2)
            .appendField(new Blockly.FieldCheckbox("FALSE"), "DESTROY_CHILDREN");
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.ADD_TO_WORLD_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADD_TO_WORLD_FIELD_2);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_GROUPS_COLOUR);
        this.setTooltip(Blockly.Msg.ADD_TO_WORLD_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ADD_TO_WORLD_HELP_URL);
    }
};
//endregion

//region PHYSICS


//region PHYSICS_STARTUP
Blockly.Blocks['start_physics'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.START_PHYSICS_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.START_PHYSICS_SYSTEM_DROPDOWN_1, "ARCADE"], [Blockly.Msg.START_PHYSICS_SYSTEM_DROPDOWN_2, "P2JS"]]), "SYSTEM")
            .appendField(Blockly.Msg.START_PHYSICS_FIELD_2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.START_PHYSICS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.START_PHYSICS_HELP_URL);
        this.setColour(PHASER_PHYSICS_STARTUP);
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
            .appendField(Blockly.Msg.START_ARCADE_PHYSICS_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.START_ARCADE_PHYSICS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.START_ARCADE_PHYSICS_HELP_URL);
        this.setColour(PHASER_PHYSICS_STARTUP);
    }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.enable_body_group.init}}
 */
Blockly.Blocks['enable_body_group'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ENABLE_BODY_GROUP_FIELD_1)
            .appendField(new Blockly.FieldVariable('defaultObject'), "object")
            .appendField(Blockly.Msg.ENABLE_BODY_GROUP_FIELD_2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_PHYSICS_STARTUP);
        this.setTooltip(Blockly.Msg.ENABLE_BODY_GROUP_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ENABLE_BODY_GROUP_HELP_URL);
    }
};

Blockly.Blocks['enable_body_group_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.ENABLE_BODY_GROUP_VI_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_PHYSICS_STARTUP);
        this.setTooltip(Blockly.Msg.ENABLE_BODY_GROUP_VI_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ENABLE_BODY_GROUP_VI_HELP_URL);
    }
};

Blockly.Blocks['enable_arcade_physics_for_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_FIELD_1)
            .appendField(new Blockly.FieldVariable('defaultObject'), "object");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_PHYSICS_STARTUP);
        this.setTooltip(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_HELP_URL);
    }
};

Blockly.Blocks['enable_arcade_physics_for_object_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_VI_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_PHYSICS_STARTUP);
        this.setTooltip(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_VI_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ENABLE_ARCADE_PHYSICS_FOR_OBJECT_VI_HELP_URL)
    }
};
//endregion

//region COLLISION
Blockly.Blocks['collide_with_arrow_function'] = {
    init: function () {
        this.appendValueInput("OBJECTA")
            .setCheck(null)
            .appendField(Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_FIELD_1);
        this.appendValueInput("OBJECTB")
            .setCheck(null)
            .appendField(Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_FIELD_2);
        this.appendStatementInput("CALLBACK")
            .setCheck(null)
            .appendField(Blockly.Msg.COLLIDE_WITH_ARROW_FUNCTION_FIELD_3);
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
        this.appendValueInput("OBJECTA")
            .setCheck(null)
            .appendField("collide");
        this.appendValueInput("OBJECTB")
            .setCheck(null)
            .appendField("with");
        this.appendDummyInput()
            .appendField("calling")
            .appendField(new Blockly.FieldProcedure("onCollide"), "NAME")
            .appendField("if overlapping");
        this.setInputsInline(true);
        this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
        this.setTooltip("Collide two objects, if they are collide do the statements in the block");
        this.setHelpUrl("https://photonstorm.github.io/phaser-ce/Phaser.Physics.Arcade.html#collide");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    },
    renameProcedure: function (oldName, legalName) {
        if (this.getFieldValue('NAME') == oldName) {
            this.setFieldValue(legalName, 'NAME');
        }
    }
};
//endregion

//region BODY

// NOTE: worldBounce is null by default, and when null Body.bounce is used instead. Setting this enables specific values.
const BODY_POINT_WRITABLE = ['bounce', 'gravity', 'velocity', 'acceleration', 'drag', 'friction', 'maxVelocity', 'worldBounce'];
const BODY_POINT_WRITABLE_CLASS = ['bounce', 'gravity', 'velocity', 'acceleration', 'drag', 'friction', 'maxVelocity', 'worldBounce', 'deltaMax', 'offset', 'tilePadding'];
const BODY_POINT_READABLE = [];
const BODY_POINT_READABLE_CLASS = [];
const BODY_POINT_FIELDS = createDropDownField(BODY_POINT_WRITABLE, BODY_POINT_READABLE);
const BODY_POINT_FIELDS_CLASS = createDropDownField(BODY_POINT_WRITABLE_CLASS, BODY_POINT_READABLE_CLASS);

const BODY_BOOLEAN_WRITABLE = ['allowDrag', 'allowGravity', 'allowRotation', 'collideWorldBounds', 'customSeparateX', 'customSeparateY', 'dirty', 'enable', 'immovable', 'skipQuadTree', 'stopVelocityOnCollide', 'syncBounds']; // There is also 'moves', omitted to avoid confusion.
const BODY_BOOLEAN_READABLE = ['embedded', 'isCircle', 'isMoving'];
const BODY_BOOLEAN_FIELDS = createDropDownField(BODY_BOOLEAN_WRITABLE, BODY_BOOLEAN_READABLE);

const BODY_NUMERIC_WRITABLE = [ 'mass', 'rotation', 'angularAcceleration', 'angularVelocity', 'angularDrag', 'maxAngular', 'facing', 'overlapR', 'overlapX', 'overlapY' ]; // Full list, note it contains duplicates from GameObject: [ 'mass', 'rotation', 'angularAcceleration', 'angularVelocity', 'angularDrag', 'maxAngular', 'facing', 'overlapR', 'overlapX', 'overlapY', 'x', 'y' ];
const BODY_NUMERIC_READABLE = [ 'preRotation', 'radius', 'sourceHeight', 'sourceWidth', 'speed', 'type']; // Full list, note it contains duplicates from GameObject: [ 'angle', 'width', 'height', 'halfWidth', 'halfHeight', 'left', 'right', 'top', 'bottom',  'preRotation', 'radius', 'sourceHeight', 'sourceWidth', 'speed', 'type'];
const BODY_NUMERIC_FIELDS = createDropDownField(BODY_NUMERIC_WRITABLE, BODY_NUMERIC_READABLE);


/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_body_field_point.init}}
 */
Blockly.Blocks['set_body_field_point'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_1, "bounce"], [Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_2, "gravity"], [Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_3, 'velocity'], [Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_4, 'acceleration'], [Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_5, 'drag'], [Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_6, 'friction'], [Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_7, 'maxVelocity'], [Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_DROPDOWN_8, 'worldBounce']]), "FIELD")
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SET_BODY_FIELD_POINT_ELEMENT_DROPDOWN_1, "x"], [Blockly.Msg.SET_BODY_FIELD_POINT_ELEMENT_DROPDOWN_2, "y"]]), "ELEMENT")
            .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_2)
            .appendField(new Blockly.FieldVariable("item"), "OBJECT");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_FIELD_3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SET_BODY_FIELD_POINT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_BODY_FIELD_POINT_HELP_URL);
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    }
};

// Normally, it would be a good idea to have this say something about point fields.
// However, point fields here are used independently, and so it may make sense to leave them separated as such.
// (These are not points like elsewhere: More accurately, they're points being used as vectors)
Blockly.Blocks['set_body_field_point_vi'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_1)
            .appendField(new Blockly.FieldDropdown(BODY_POINT_FIELDS.writable), "FIELD")
            .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_1_5)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SET_BODY_FIELD_POINT_VI_ELEMENT_DROPDOWN_1, "x"], [Blockly.Msg.SET_BODY_FIELD_POINT_VI_ELEMENT_DROPDOWN_2, "y"]]), "ELEMENT")
            .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_2);
        this.appendValueInput('OBJECT');
        this.appendValueInput("VALUE")
            .setCheck('Number')
            .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_VI_FIELD_3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SET_BODY_FIELD_POINT_VI_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_BODY_FIELD_POINT_VI_HELP_URL);
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    }
};

Blockly.Blocks['set_body_field_point_class_vi'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_1)
            .appendField(new Blockly.FieldDropdown(BODY_POINT_FIELDS_CLASS.writable), "FIELD")
            .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_2);
        this.appendValueInput('OBJECT');
        this.appendValueInput('POINT')
            .appendField(Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_FIELD_3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_BODY_FIELD_POINT_CLASS_VI_HELP_URL);
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    },
    customContextMenu: createSetterContextMenu('get_body_field_point_class', {propertyTag: 'FIELD'})
};


Blockly.Blocks['get_body_field_point_class'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_1)
            .appendField(new Blockly.FieldDropdown(BODY_POINT_FIELDS_CLASS.all), "FIELD")
            .appendField(Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_FIELD_2);
        this.appendValueInput('OBJECT');
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_BODY_FIELD_POINT_CLASS_HELP_URL);
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    },
    customContextMenu: createPointGetterContextMenu('set_body_field_point_class_vi', {propertyTag: 'FIELD', valueTag: 'POINT'})
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_body_boolean_field.init, customContextMenu: Function}}
 */
Blockly.Blocks['set_body_boolean_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_1, 'allowRotation'], [Blockly.Msg.SET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_2, 'allowGravity'], [Blockly.Msg.SET_BODY_BOOLEAN_FIELD_ELEMENT_DROPDOWN_3, 'immovable']]), "ELEMENT")
            .appendField(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_FIELD_2);
        this.appendValueInput('OBJECT');
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'VALUE');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_HELP_URL);
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    },
    customContextMenu: createSetterContextMenu('get_body_boolean_field', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['set_body_boolean_field_vi'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_FIELD_1)
            .appendField(new Blockly.FieldDropdown(BODY_BOOLEAN_FIELDS.writable), "ELEMENT")
            .appendField(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_FIELD_2);
        this.appendValueInput('OBJECT');
        this.appendValueInput('VALUE')
            .appendField(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_FIELD_3)
            .setCheck("Boolean");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_BODY_BOOLEAN_FIELD_HELP_URL);
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    },
    customContextMenu: createSetterContextMenu('get_body_boolean_field', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['get_body_boolean_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_BODY_BOOLEAN_FIELD_FIELD_1)
            .appendField(new Blockly.FieldDropdown(BODY_BOOLEAN_FIELDS.all), "ELEMENT")
            .appendField(Blockly.Msg.GET_BODY_BOOLEAN_FIELD_FIELD_2);
        this.appendValueInput('OBJECT');
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.GET_BODY_BOOLEAN_FIELD_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_BODY_BOOLEAN_FIELD_HELP_URL);
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    },
    customContextMenu: createBooleanGetterContextMenu('set_body_boolean_field', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['set_body_numeric_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_BODY_NUMERIC_FIELD_FIELD_1)
            .appendField(new Blockly.FieldDropdown(BODY_NUMERIC_FIELDS.writable), "ELEMENT")
            .appendField(Blockly.Msg.SET_BODY_NUMERIC_FIELD_FIELD_2);
        this.appendValueInput('OBJECT');
        this.appendValueInput('VALUE')
            .appendField(Blockly.Msg.SET_BODY_NUMERIC_FIELD_FIELD_3)
            .setCheck('Number');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.SET_BODY_NUMERIC_FIELD_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_BODY_NUMERIC_FIELD_HELP_URL);
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    },
    customContextMenu: createSetterContextMenu('get_body_numeric_field', {propertyTag: 'ELEMENT'})
};

Blockly.Blocks['get_body_numeric_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_BODY_NUMERIC_FIELD_FIELD_1)
            .appendField(new Blockly.FieldDropdown(BODY_NUMERIC_FIELDS.all), "ELEMENT")
            .appendField(Blockly.Msg.GET_BODY_NUMERIC_FIELD_FIELD_2);
        this.appendValueInput('OBJECT');
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setTooltip(Blockly.Msg.GET_BODY_NUMERIC_FIELD_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_BODY_NUMERIC_FIELD_HELP_URL);
        this.setColour(PHASER_PHYSICS_DYNAMICS);
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
        this.setColour(PHASER_PHYSICS_DYNAMICS);
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
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    }
};

//endregion


Blockly.Blocks['call_function_on_group'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CALL_FUNCTION_ON_GROUP_FIELD_1)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.CALL_FUNCTION_ON_GROUP_FUNCTION_TEXT_DEFAULT), "FUNCTION");
        this.appendValueInput('GROUP')
            .appendField(Blockly.Msg.CALL_FUNCTION_ON_GROUP_FIELD_2);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip(Blockly.Msg.CALL_FUNCTION_ON_GROUP_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CALL_FUNCTION_ON_GROUP_HELP_URL);
        this.setColour(PHASER_GROUPS_COLOUR);
    }
};

Blockly.Blocks['acceleration_from_rotation'] = { //TODO: add to toolbox(?)
    init: function () {
        this.appendValueInput("ROTATION")
            .setCheck(null)
            .appendField(Blockly.Msg.ACCELERATION_FROM_ROTATION_FIELD_1);
        this.appendValueInput("SPEED")
            .setCheck(null)
            .appendField(Blockly.Msg.ACCELERATION_FROM_ROTATION_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ACCELERATION_FROM_ROTATION_FIELD_3);
        this.setOutput(true, null);
        this.setColour(PHYSICS_COLOUR);
        this.setTooltip(Blockly.Msg.ACCELERATION_FROM_ROTATION_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ACCELERATION_FROM_ROTATION_HELP_URL);
    }
};

Blockly.Blocks['set_immovable'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_IMMOVABLE_FIELD_1)
            .appendField(new Blockly.FieldVariable("defaultGroup"), "BODY")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "IMMOVABLE");
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
            .appendField(Blockly.Msg.COLLIDE_FIELD_1)
            .appendField(new Blockly.FieldVariable("defaultObject"), "LHS")
            .appendField(Blockly.Msg.COLLIDE_FIELD_2)
            .appendField(new Blockly.FieldVariable("defaultObject"), "RHS");
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
            .appendField(Blockly.Msg.COLLIDE_VI_FIELD_1);
        this.appendValueInput('RHS')
            .appendField(Blockly.Msg.COLLIDE_VI_FIELD_2);
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
            .appendField(new Blockly.FieldVariable("defaultObject"), "BODY")
            .appendField(Blockly.Msg.IS_BODY_TOUCHING_FIELD_1)

            .appendField(Blockly.Msg.IS_BODY_TOUCHING_FIELD_2);
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
            .appendField(Blockly.Msg.IS_BODY_TOUCHING_VI_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_1, "up"], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_2, "down"], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_3, "left"], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_4, "Right"], [Blockly.Msg.IS_BODY_TOUCHING_VI_DIRECTION_DROPDOWN_5, "none"]]), "DIRECTION")
            .appendField(Blockly.Msg.IS_BODY_TOUCHING_VI_FIELD_2);
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
            .appendField(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_FIELD_1)
            .appendField(new Blockly.FieldVariable("defaultObject"), "BODY")
            .appendField(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_FIELD_2)
            .appendField(new Blockly.FieldCheckbox("TRUE"), "COLLIDE");
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
            .appendField(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.COLLIDE_WITH_WORLD_BOUNDS_VI_FIELD_2);
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("TRUE"), "COLLIDE");
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
            .appendField(Blockly.Msg.CHECK_OVERLAP_VI_FIELD_1);
        this.appendValueInput('RHS')
            .appendField(Blockly.Msg.CHECK_OVERLAP_VI_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHECK_OVERLAP_VI_FIELD_3)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.CHECK_OVERLAP_VI_NAME_TEXT_DEFAULT), "NAME")
            .appendField(Blockly.Msg.CHECK_OVERLAP_VI_FIELD_4);
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
            .appendField("check overlap between");
        this.appendValueInput('RHS')
            .appendField("and");
        this.appendDummyInput()
            .appendField("calling")
            .appendField(new Blockly.FieldProcedure("onCollide"), "NAME")
            .appendField("if overlapping");
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

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.check_overlap.init}}
 */
Blockly.Blocks['check_overlap'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CHECK_OVERLAP_FIELD_1)
            .appendField(new Blockly.FieldVariable("defaultObject"), "LHS")
            .appendField(Blockly.Msg.CHECK_OVERLAP_FIELD_2)
            .appendField(new Blockly.FieldVariable("defaultObject"), "RHS")
            .appendField(Blockly.Msg.CHECK_OVERLAP_FIELD_3)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.CHECK_OVERLAP_NAME_TEXT_DEFAULT), "NAME")
            .appendField(Blockly.Msg.CHECK_OVERLAP_FIELD_4);
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
Blockly.Blocks['move_to_pointer'] = {
    init: function () {
        this.appendValueInput("GAMEOBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.MOVE_TO_POINTER_FIELD_1);
        this.appendValueInput("SPEED")
            .setCheck("Number")
            .appendField(Blockly.Msg.MOVE_TO_POINTER_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MOVE_TO_POINTER_FIELD_3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_PHYSICS_DYNAMICS);
        this.setTooltip(Blockly.Msg.MOVE_TO_POINTER_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.MOVE_TO_POINTER_HELP_URL);
    }
};

Blockly.Blocks['move_to_pointer_extended'] = {
    init: function () {
        this.appendValueInput("GAMEOBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.MOVE_TO_POINTER_EXTENDED_FIELD_1);
        this.appendValueInput("SPEED")
            .setCheck("Number")
            .appendField(Blockly.Msg.MOVE_TO_POINTER_EXTENDED_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MOVE_TO_POINTER_EXTENDED_FIELD_3);
        this.appendValueInput('MAXIMUM_TIME')
            .appendField(Blockly.Msg.MOVE_TO_POINTER_EXTENDED_FIELD_4);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_PHYSICS_DYNAMICS);
        this.setTooltip(Blockly.Msg.MOVE_TO_POINTER_EXTENDED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.MOVE_TO_POINTER_EXTENDED_HELP_URL);
    }
};

Blockly.Blocks['move_to_object'] = {
    init: function () {
        this.appendValueInput("GAMEOBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.MOVE_TO_OBJECT_FIELD_1);
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.MOVE_TO_OBJECT_FIELD_2);
        this.appendValueInput("SPEED")
            .setCheck("Number")
            .appendField(Blockly.Msg.MOVE_TO_OBJECT_FIELD_3);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MOVE_TO_OBJECT_FIELD_4);
        this.appendValueInput('MAXIMUM_TIME')
            .appendField(Blockly.Msg.MOVE_TO_OBJECT_FIELD_5);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_PHYSICS_DYNAMICS);
        this.setTooltip(Blockly.Msg.MOVE_TO_OBJECT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.MOVE_TO_OBJECT_HELP_URL);
    }
};
//endregion

//region INPUT
const INPUT_COLOUR = 300;

//region MOUSE
Blockly.Blocks['get_current_mouse_position'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_CURRENT_MOUSE_POSITION_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_1, 'x'], [Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_2, 'y'], [Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_3, 'worldX'], [Blockly.Msg.GET_CURRENT_MOUSE_POSITION_DIRECTION_DROPDOWN_4, 'worldY']]), 'DIRECTION');
        this.setColour(PHASER_MOUSE_INPUT);
        this.setTooltip(Blockly.Msg.GET_CURRENT_MOUSE_POSITION_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_CURRENT_MOUSE_POSITION_HELP_URL);
        this.setOutput(true, 'Number');
    }
};

Blockly.Blocks['is_mouse_button_clicked'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_BUTTON_DROPDOWN_1, "leftButton"], [Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_BUTTON_DROPDOWN_2, "rightButton"], [Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_BUTTON_DROPDOWN_3, "middleButton"]]), "BUTTON")
            .appendField(Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_FIELD_1);
        this.setOutput(true, 'Boolean');
        this.setHelpUrl(Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_HELP_URL);
        this.setTooltip(Blockly.Msg.IS_MOUSE_BUTTON_CLICKED_TOOLTIP);
        this.setColour(PHASER_MOUSE_INPUT);
    }
};
//endregion

Blockly.Blocks['create_cursor_keys'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.CREATE_CURSOR_KEYS_FIELD_1);
        this.setOutput(true, null);
        this.setTooltip(Blockly.Msg.CREATE_CURSOR_KEYS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CREATE_CURSOR_KEYS_HELP_URL);
        this.setColour(INPUT_COLOUR);
    }
};

Blockly.Blocks['is_key_down'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.IS_KEY_DOWN_FIELD_1)
            .appendField(new Blockly.FieldDropdown([
                ["A", "A"],
                ["B", "B"],
                ["C", "C"],
                ["D", "D"],
                ["E", "E"],
                ["F", "F"],
                ["G", "G"],
                ["H", "H"],
                ["I", "I"],
                ["J", "J"],
                ["K", "K"],
                ["L", "L"],
                ["M", "M"],
                ["N", "N"],
                ["O", "O"],
                ["P", "P"],
                ["Q", "Q"],
                ["R", "R"],
                ["S", "S"],
                ["T", "T"],
                ["U", "U"],
                ["V", "V"],
                ["W", "W"],
                ["X", "X"],
                ["Y", "Y"],
                ["Z", "Z"],
                ["UP", "UP"],
                ["DOWN", "DOWN"],
                ["LEFT", "LEFT"],
                ["RIGHT", "RIGHT"],
                ["ONE", "ONE"],
                ["TWO", "TWO"],
                ["THREE", "THREE"],
                ["FOUR", "FOUR"],
                ["FIVE", "FIVE"],
                ["SIX", "SIX"],
                ["SEVEN", "SEVEN"],
                ["EIGHT", "EIGHT"],
                ["NINE", "NINE"],
                ["ZERO", "ZERO"],
                ["NUMPAD_1", "NUMPAD_1"],
                ["NUMPAD_2", "NUMPAD_2"],
                ["NUMPAD_3", "NUMPAD_3"],
                ["NUMPAD_4", "NUMPAD_4"],
                ["NUMPAD_5", "NUMPAD_5"],
                ["NUMPAD_6", "NUMPAD_6"],
                ["NUMPAD_7", "NUMPAD_7"],
                ["NUMPAD_8", "NUMPAD_8"],
                ["NUMPAD_9", "NUMPAD_9"],
                ["NUMPAD_ADD", "NUMPAD_ADD"],
                ["NUMPAD_DECIMAL", "NUMPAD_DECIMAL"],
                ["NUMPAD_DIVIDE", "NUMPAD_DIVIDE"],
                ["NUMPAD_ENTER", "NUMPAD_ENTER"],
                ["NUMPAD_MULTIPLY", "NUMPAD_MULTIPLY"],
                ["NUMPAD_SUBTRACT", "NUMPAD_SUBTRACT"],
                ["[", "OPEN_BRACKET"],
                ["]", "CLOSE_BRACKET"],
                ["F1", "F1"],
                ["F2", "F2"],
                ["F3", "F3"],
                ["F4", "F4"],
                ["F5", "F5"],
                ["F6", "F6"],
                ["F7", "F7"],
                ["F8", "F8"],
                ["F9", "F9"],
                ["F10", "F10"],
                ["F11", "F11"],
                ["F12", "F12"],
                ["ALT", "ALT"],
                [":", "COLON"],
                [',', "COMMA"],
                ["CONTROL", "CTRL"],
                ["DELETE", "DELETE"],
                ["END", "END"],
                ["ENTER", "ENTER"],
                ["ESC", "ESC"],
                ["INSERT", "INSERT"],
                ["-", "MINUS"],
                ["NUM_LOCK", "NUM_LOCK"],
                ["PAGE_DOWN", "PAGE_DOWN"],
                ["PAGE_UP", "PAGE_UP"],
                [".", "PERIOD"],
                ["+", "PLUS"],
                ["EQUALS", "EQUALS"],
                ["?", "QUESTION_MARK"],
                ["\"", "QUOTES"],
                ["TAB", "TAB"],
                ["~", "TILDE"],
                ["_", "UNDERSCORE"],
                ["BACKSPACE", "BACKSPACE"],
                ["\\", "BACKWARD_SLASH"],
                ["SPACEBAR", "SPACEBAR"],
                ["CLEAR", "CLEAR"],
                ["CAPS LOCK", "CAPS_LOCK"]]), "KEY")
            .appendField(Blockly.Msg.IS_KEY_DOWN_FIELD_2);
        this.setOutput(true, 'Boolean');
        this.setTooltip(Blockly.Msg.IS_KEY_DOWN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.IS_KEY_DOWN_HELP_URL);
        this.setColour(PHASER_KEYBOARD_INPUT);
    }
};
//endregion

//region WORLD
Blockly.Blocks['get_world_property'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_WORLD_PROPERTY_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_1, "height"], [Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_2, "width"], [Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_3, "centerX"], [Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_4, "centerY"], [Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_5, "randomX"], [Blockly.Msg.GET_WORLD_PROPERTY_NAME_DROPDOWN_6, "randomY"]]), "NAME")
            .appendField(Blockly.Msg.GET_WORLD_PROPERTY_FIELD_2);
        this.setOutput(true, null);
        this.setTooltip(Blockly.Msg.GET_WORLD_PROPERTY_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_WORLD_PROPERTY_HELP_URL);
        this.setColour(PHASER_WORLD_COLOUR);
    }
};

Blockly.Blocks['set_world_bounds'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_WORLD_BOUNDS_FIELD_1);
        this.appendValueInput('X_POS')
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_WORLD_BOUNDS_FIELD_2);
        this.appendValueInput("Y_POS")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_WORLD_BOUNDS_FIELD_3);
        this.appendValueInput('WIDTH')
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_WORLD_BOUNDS_FIELD_4);
        this.appendValueInput("HEIGHT")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_WORLD_BOUNDS_FIELD_5);
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
            .appendField(Blockly.Msg.CREATE_POINT_FIELD_1);
        this.appendValueInput('X_POS')
            .setCheck("Number")
            .appendField(Blockly.Msg.CREATE_POINT_FIELD_2);
        this.appendValueInput("Y_POS")
            .setCheck("Number")
            .appendField(Blockly.Msg.CREATE_POINT_FIELD_3);
        this.setOutput(true, null);
        this.setTooltip(Blockly.Msg.CREATE_POINT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CREATE_POINT_HELP_URL);
        this.setColour(PHASER_WORLD_COLOUR);
    }
};

Blockly.Blocks['get_world_reference'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_WORLD_REFERENCE_FIELD_1);
        this.setOutput(true, null);
        this.setColour(PHASER_WORLD_COLOUR);
        this.setTooltip(Blockly.Msg.GET_WORLD_REFERENCE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_WORLD_REFERENCE_HELP_URL);
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
            .appendField(Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_FIELD_1)
            .appendField(new Blockly.FieldDropdown(GAME_OBJECT_POINT_FIELDS.writable), 'PROPERTY');
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_FIELD_2);
        this.appendValueInput('POINT')
            .appendField(Blockly.Msg.SET_GAME_OBJECT_POINT_FIELD_FIELD_3);
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
            .appendField(Blockly.Msg.GET_GAME_OBJECT_POINT_FIELD_FIELD_1)
            .appendField(new Blockly.FieldDropdown(GAME_OBJECT_POINT_FIELDS.all), 'PROPERTY');
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.GET_GAME_OBJECT_POINT_FIELD_FIELD_2);
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
            .appendField(Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_FIELD_1)
            .appendField(new Blockly.FieldDropdown(GAME_OBJECT_NUMERIC_FIELDS.writable), 'PROPERTY');
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_FIELD_2);
        this.appendValueInput('VALUE')
            .appendField(Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_FIELD_3);
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip(Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_GAME_OBJECT_NUMERIC_FIELD_HELP_URL);
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
    },
    customContextMenu: createSetterContextMenu('get_game_object_numeric_field')
};

Blockly.Blocks['get_game_object_numeric_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD_FIELD_1)
            .appendField(new Blockly.FieldDropdown(GAME_OBJECT_NUMERIC_FIELDS.all), 'PROPERTY');
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD_FIELD_2);
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip(Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_GAME_OBJECT_NUMERIC_FIELD_HELP_URL);
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
    },
    customContextMenu: createNumericGetterContextMenu('set_game_object_numeric_field')
};

Blockly.Blocks['set_game_object_boolean_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_1)
            .appendField(new Blockly.FieldDropdown(GAME_OBJECT_BOOLEAN_FIELDS.writable), 'PROPERTY');
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_3)
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
            .appendField(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_1)
            .appendField(new Blockly.FieldDropdown(GAME_OBJECT_BOOLEAN_FIELDS.writable), 'PROPERTY');
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_2);
        this.appendValueInput("VALUE")  // Value input
            .appendField(Blockly.Msg.SET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_3)
            .setCheck("Boolean");
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
            .appendField(Blockly.Msg.GET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_1)
            .appendField(new Blockly.FieldDropdown(GAME_OBJECT_BOOLEAN_FIELDS.all), 'PROPERTY');
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.GET_GAME_OBJECT_BOOLEAN_FIELD_FIELD_2);
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
            .appendField(Blockly.Msg.SET_OBJECT_ANCHOR_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_OBJECT_ANCHOR_FIELD_2);
        this.appendValueInput('X_POS')
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_OBJECT_ANCHOR_FIELD_3);
        this.appendValueInput("Y_POS")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_OBJECT_ANCHOR_FIELD_4);
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
            .appendField(Blockly.Msg.KILL_OBJECT_FIELD_1);
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
            .appendField(Blockly.Msg.FAINT_OBJECT_FIELD_1);
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
            .appendField(Blockly.Msg.DESTROY_OBJECT_FIELD_1);
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
            .appendField(Blockly.Msg.SET_SCALE_FIELD_1)
            .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT')
            .appendField(Blockly.Msg.SET_SCALE_FIELD_2);
        this.appendValueInput('SCALE_X')
            .appendField(Blockly.Msg.SET_SCALE_FIELD_3);
        this.appendValueInput('SCALE_Y')
            .appendField(Blockly.Msg.SET_SCALE_FIELD_4);
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
            .appendField(Blockly.Msg.SET_SCALE_VI_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_SCALE_VI_FIELD_2);
        this.appendValueInput('SCALE_X')
            .appendField(Blockly.Msg.SET_SCALE_VI_FIELD_3);
        this.appendValueInput('SCALE_Y')
            .appendField(Blockly.Msg.SET_SCALE_VI_FIELD_4);
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
            .appendField(Blockly.Msg.SET_POS_FIELD_1)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SET_POS_PARAM_DROPDOWN_1, "x"], [Blockly.Msg.SET_POS_PARAM_DROPDOWN_2, "y"]]), "PARAM")
            .appendField(Blockly.Msg.SET_POS_FIELD_2);
        this.appendValueInput('VALUE')
            .appendField(Blockly.Msg.SET_POS_FIELD_3);
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
            .appendField(Blockly.Msg.OBJECT_SET_TO_FIELD_1)
            .appendField(new Blockly.FieldVariable("object"), "OBJECT");
        this.appendValueInput("setx")
            .setCheck("Number")
            .appendField(Blockly.Msg.OBJECT_SET_TO_FIELD_2);
        this.appendValueInput("sety")
            .setCheck("Number")
            .appendField(Blockly.Msg.OBJECT_SET_TO_FIELD_3);
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
            .appendField(Blockly.Msg.SET_VELOCITY_FIELD_1)
            .appendField(new Blockly.FieldDropdown([["x", "body.velocity.x"],
                ["y", "body.velocity.y"],
                ["Angular", "body.angularVelocity"]]), "PARAM")
            .appendField(Blockly.Msg.SET_VELOCITY_FIELD_2);
        this.appendValueInput('VALUE')
            .appendField(Blockly.Msg.SET_VELOCITY_FIELD_3);
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
            .appendField(Blockly.Msg.GET_PARAM_FIELD_1)
            .appendField(new Blockly.FieldDropdown([["x", "x"],
                ["y", "y"],
                ["Width", "width"],
                ["Height", "height"],
                ["Velocity x", "body.velocity.x"],
                ["Velocity y", "body.velocity.y"],
                ["Angular Velocity", "body.angularVelocity"]]), "PARAM")
            .appendField(Blockly.Msg.GET_PARAM_FIELD_2);
        this.setOutput(true, null);
        this.setColour(GAME_OBJECT_COLOUR);
        this.setTooltip(Blockly.Msg.GET_PARAM_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_PARAM_HELP_URL);
    }
};

Blockly.Blocks['object_inCamera'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.OBJECT_INCAMERA_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.OBJECT_INCAMERA_FIELD_2);
        this.setOutput(true, null);
        this.setColour(GAME_OBJECT_COLOUR);
        this.setTooltip(Blockly.Msg.OBJECT_INCAMERA_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.OBJECT_INCAMERA_HELP_URL);
    }
};
Blockly.Blocks['get_camera'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_CAMERA_FIELD_1);
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
            .appendField(Blockly.Msg.CAMERA_FOLLOW_FIELD_1)
            .appendField(new Blockly.FieldVariable("object"), "OBJECT");
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.GET_BOUNDS_FIELD_1);
        this.setOutput(true, null);
        this.setColour(GAME_OBJECT_COLOUR);
        this.setTooltip(Blockly.Msg.GET_BOUNDS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_BOUNDS_HELP_URL);
    }
};

Blockly.Blocks['get_rotation'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .appendField(Blockly.Msg.GET_ROTATION_FIELD_1);
        this.setOutput(true, "Number");
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
        this.setTooltip(Blockly.Msg.GET_ROTATION_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_ROTATION_HELP_URL);
    }
};

Blockly.Blocks['rotate'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.ROTATE_FIELD_1);
        this.appendValueInput("ANGLE")
            .setCheck("Number")
            .appendField(Blockly.Msg.ROTATE_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ROTATE_FIELD_3);
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.SET_ROTATION_FIELD_1);
        this.appendValueInput("ROTATION")
            .setCheck(null)
            .appendField(Blockly.Msg.SET_ROTATION_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_ROTATION_FIELD_3);
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.GET_LOCAL_BOUNDS_FIELD_1);
        this.setOutput(true, null);
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
        this.setTooltip(Blockly.Msg.GET_LOCAL_BOUNDS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_LOCAL_BOUNDS_HELP_URL);
    }
};

Blockly.Blocks['reset'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.RESET_FIELD_1);
        this.appendValueInput("X_POS")
            .setCheck(null)
            .appendField(Blockly.Msg.RESET_FIELD_2);
        this.appendValueInput("Y_POS")
            .setCheck(null)
            .appendField(Blockly.Msg.RESET_FIELD_3);
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
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField(Blockly.Msg.REVIVE_FIELD_1);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
        this.setTooltip(Blockly.Msg.REVIVE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.REVIVE_HELP_URL);
    }
};
//endregion

//region TEXT

Blockly.Blocks['add_text'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADD_TEXT_FIELD_1);
        this.appendValueInput("X_POS")
            .setCheck("Number")
            .appendField(Blockly.Msg.ADD_TEXT_FIELD_2);
        this.appendValueInput("Y_POS")
            .setCheck("Number")
            .appendField(Blockly.Msg.ADD_TEXT_FIELD_3);
        this.appendValueInput("INITIAL_TEXT")
            .setCheck("String")
            .appendField(Blockly.Msg.ADD_TEXT_FIELD_4);
        this.appendValueInput("FONT_SIZE")
            .setCheck("Number")
            .appendField(Blockly.Msg.ADD_TEXT_FIELD_5);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADD_TEXT_FIELD_6)
            .appendField(new Blockly.FieldColour("#ff0000"), "FILL");
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
            .appendField(Blockly.Msg.SET_TEXT_FIELD_1)
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField(Blockly.Msg.SET_TEXT_FIELD_2);
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
            .appendField(Blockly.Msg.SET_TEXT_VI_FIELD_1);
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField(Blockly.Msg.SET_TEXT_VI_FIELD_2);
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
            .appendField(Blockly.Msg.CREATE_BITMAPFONT_FIELD_1);
        this.appendValueInput('TAG')
            .appendField(Blockly.Msg.CREATE_BITMAPFONT_FIELD_2)
            .setCheck('String');
        this.appendValueInput('SRC')
            .appendField(Blockly.Msg.CREATE_BITMAPFONT_FIELD_3)
            .setCheck('String');
        this.appendValueInput('XML')
            .appendField(Blockly.Msg.CREATE_BITMAPFONT_FIELD_4)
            .setCheck('String');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_TEXT_COLOUR);
        this.setTooltip(Blockly.Msg.CREATE_BITMAPFONT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CREATE_BITMAPFONT_HELP_URL);
    }
};
//endregion

Blockly.Blocks['drawcircle'] = { //TODO: add to toolbox(?)
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DRAWCIRCLE_FIELD_1);
        this.appendValueInput("X")
            .setCheck("Number")
            .appendField(Blockly.Msg.DRAWCIRCLE_FIELD_2);
        this.appendValueInput("Y")
            .setCheck("Number")
            .appendField(Blockly.Msg.DRAWCIRCLE_FIELD_3);
        this.appendValueInput("DIAMETER")
            .setCheck("Number")
            .appendField(Blockly.Msg.DRAWCIRCLE_FIELD_4);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip(Blockly.Msg.DRAWCIRCLE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DRAWCIRCLE_HELP_URL);
    }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.get_object_width.init}}
 */
Blockly.Blocks['get_object_width'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_OBJECT_WIDTH_FIELD_1)
            .appendField(new Blockly.FieldVariable("item"), "NAME");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PARTICLE_COLOUR);
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
            .appendField(Blockly.Msg.SET_OBJECT_WIDTH_FIELD_1)
            .appendField(new Blockly.FieldVariable("item"), "NAME");
        this.appendValueInput("NAME")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip(Blockly.Msg.SET_OBJECT_WIDTH_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SET_OBJECT_WIDTH_HELP_URL);
    }
};

//region EMITTER
const PARTICLE_COLOUR = '#80cbc4';

Blockly.Blocks['addemitter'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADDEMITTER_FIELD_1);
        this.appendValueInput("X")
            .setCheck("Number")
            .appendField(Blockly.Msg.ADDEMITTER_FIELD_2);
        this.appendValueInput("Y")
            .setCheck("Number")
            .appendField(Blockly.Msg.ADDEMITTER_FIELD_3);
        this.appendValueInput("maxParticles")
            .setCheck("Number")
            .appendField(Blockly.Msg.ADDEMITTER_FIELD_4);
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip(Blockly.Msg.ADDEMITTER_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ADDEMITTER_HELP_URL);
    }
};


Blockly.Blocks['emitter_make_particles'] = {
    init: function () {
        this.appendValueInput('EMITTER')
            .appendField(Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_2);
        this.appendValueInput('KEYS')
            .appendField(Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_3)
            .setCheck(['Array', 'String']);
        this.appendValueInput('FRAMES')
            .appendField(Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_4)
            .setCheck(['Array', 'Number']);
        this.appendValueInput('QUANTITY')
            .appendField(Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_5)
            .setCheck('Number');
        this.appendDummyInput()
            .appendField(Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_6)
            .appendField(new Blockly.FieldCheckbox('FALSE'), 'COLLIDE');
        this.appendDummyInput()
            .appendField(Blockly.Msg.EMITTER_MAKE_PARTICLES_FIELD_7)
            .appendField(new Blockly.FieldCheckbox('FALSE'), 'COLLIDEWORLDBOUNDS');
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setInputsInline(false);
        this.setColour(PARTICLE_COLOUR);
        this.setHelpUrl(Blockly.Msg.EMITTER_MAKE_PARTICLES_HELP_URL);
        this.setTooltip(Blockly.Msg.EMITTER_MAKE_PARTICLES_TOOLTIP)
    }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_make_particles.init}}
 */
Blockly.Blocks['emitters_make_particles'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.EMITTERS_MAKE_PARTICLES_FIELD_1)
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField(Blockly.Msg.EMITTERS_MAKE_PARTICLES_FIELD_2)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.EMITTERS_MAKE_PARTICLES_TAG_TEXT_DEFAULT), "TAG");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
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
            .appendField(Blockly.Msg.EMITTERS_SET_ROTATION_FIELD_1)
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField(Blockly.Msg.EMITTERS_SET_ROTATION_FIELD_2);
        this.appendValueInput("NAME")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_ROTATION_FIELD_3);
        this.appendValueInput("NAME")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_ROTATION_FIELD_4);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip(Blockly.Msg.EMITTERS_SET_ROTATION_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.EMITTERS_SET_ROTATION_HELP_URL);
    }
};

Blockly.Blocks['emitters_set_rotation_vi'] = {
    init: function () {
        this.appendValueInput('EMITTER')
            .appendField(Blockly.Msg.EMITTERS_SET_ROTATION_VI_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.EMITTERS_SET_ROTATION_VI_FIELD_2);
        this.appendValueInput("MIN")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_ROTATION_VI_FIELD_3);
        this.appendValueInput("MAX")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_ROTATION_VI_FIELD_4);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
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
            .appendField(Blockly.Msg.EMITTERS_START_FIELD_1)
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField(Blockly.Msg.EMITTERS_START_FIELD_2);
        this.appendValueInput("EXPLODE")
            .setCheck("Boolean")
            .appendField(Blockly.Msg.EMITTERS_START_FIELD_3);
        this.appendValueInput("LIFESPAN")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_START_FIELD_4);
        this.appendValueInput("FREQUENCY")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_START_FIELD_5);
        this.appendValueInput("QUANTITY")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_START_FIELD_6);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip(Blockly.Msg.EMITTERS_START_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.EMITTERS_START_HELP_URL);
    }
};

Blockly.Blocks['emitters_start_vi'] = {
    init: function () {
        this.appendValueInput('EMITTER')
            .appendField(Blockly.Msg.EMITTERS_START_VI_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.EMITTERS_START_VI_FIELD_2)
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'EXPLODE');
        this.appendValueInput("LIFESPAN")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_START_VI_FIELD_3);
        this.appendValueInput("FREQUENCY")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_START_VI_FIELD_4);
        this.appendValueInput("QUANTITY")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_START_VI_FIELD_5);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
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
            .appendField(Blockly.Msg.EMITTERS_SET_ALPHA_FIELD_1)
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField(Blockly.Msg.EMITTERS_SET_ALPHA_FIELD_2);
        this.appendValueInput("MIN")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_ALPHA_FIELD_3);
        this.appendValueInput("MAX")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_ALPHA_FIELD_4);
        this.appendValueInput("RATE")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_ALPHA_FIELD_5);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip(Blockly.Msg.EMITTERS_SET_ALPHA_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.EMITTERS_SET_ALPHA_HELP_URL);
    }
};

Blockly.Blocks['emitters_set_alpha_vi'] = {
    init: function () {
        this.appendValueInput('EMITTER')
            .appendField(Blockly.Msg.EMITTERS_SET_ALPHA_VI_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.EMITTERS_SET_ALPHA_VI_FIELD_2);
        this.appendValueInput("MIN")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_ALPHA_VI_FIELD_3);
        this.appendValueInput("MAX")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_ALPHA_VI_FIELD_4);
        this.appendValueInput("RATE")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_ALPHA_VI_FIELD_5);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
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
            .appendField(Blockly.Msg.EMITTERS_SET_SCALE_FIELD_1)
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField(Blockly.Msg.EMITTERS_SET_SCALE_FIELD_2);
        this.appendValueInput("MINX")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SCALE_FIELD_3);
        this.appendValueInput("MAXX")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SCALE_FIELD_4);
        this.appendValueInput("MINY")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SCALE_FIELD_5);
        this.appendValueInput("MAXY")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SCALE_FIELD_6);
        this.appendValueInput("RATE")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SCALE_FIELD_7);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip(Blockly.Msg.EMITTERS_SET_SCALE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.EMITTERS_SET_SCALE_HELP_URL);
    }
};

Blockly.Blocks['emitters_set_scale_vi'] = {
    init: function () {
        this.appendValueInput('EMITTER')
            .appendField(Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_2);
        this.appendValueInput("MINX")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_3);
        this.appendValueInput("MAXX")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_4);
        this.appendValueInput("MINY")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_5);
        this.appendValueInput("MAXY")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_6);
        this.appendValueInput("RATE")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SCALE_VI_FIELD_7);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip(Blockly.Msg.EMITTERS_SET_SCALE_VI_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.EMITTERS_SET_SCALE_VI_HELP_URL);
    }
};

Blockly.Blocks['set_emit_from'] = {
    init: function () {
        this.appendValueInput("Object")
            .setCheck(null)
            .appendField(Blockly.Msg.SET_EMIT_FROM_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_EMIT_FROM_FIELD_2)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.SET_EMIT_FROM_CORD_DROPDOWN_1, "X"], [Blockly.Msg.SET_EMIT_FROM_CORD_DROPDOWN_2, "Y"]]), "cord")
            .appendField(Blockly.Msg.SET_EMIT_FROM_FIELD_3);
        this.appendValueInput("emit_loc")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
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
            .appendField(Blockly.Msg.EMITTERS_SET_SPEED_FIELD_1)
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField(Blockly.Msg.EMITTERS_SET_SPEED_FIELD_2);
        this.appendValueInput("MINX")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SPEED_FIELD_3);
        this.appendValueInput("MAXX")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SPEED_FIELD_4);
        this.appendValueInput("MINY")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SPEED_FIELD_5);
        this.appendValueInput("MAXY")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SPEED_FIELD_6);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip(Blockly.Msg.EMITTERS_SET_SPEED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.EMITTERS_SET_SPEED_HELP_URL);
    }
};

Blockly.Blocks['emitters_set_speed_vi'] = {
    init: function () {
        this.appendValueInput('EMITTER')
            .appendField(Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_2);
        this.appendValueInput("MINX")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_3);
        this.appendValueInput("MAXX")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_4);
        this.appendValueInput("MINY")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_5);
        this.appendValueInput("MAXY")
            .setCheck("Number")
            .appendField(Blockly.Msg.EMITTERS_SET_SPEED_VI_FIELD_6);
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
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
            .appendField(Blockly.Msg.EMITTERS_SET_GRAVITY_FIELD_1)
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField(Blockly.Msg.EMITTERS_SET_GRAVITY_FIELD_2);
        this.appendValueInput("GRAVITY")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip(Blockly.Msg.EMITTERS_SET_GRAVITY_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.EMITTERS_SET_GRAVITY_HELP_URL);
    }
};

Blockly.Blocks['emitters_set_gravity_vi'] = {
    init: function () {
        this.appendValueInput('EMITTER')
            .appendField(Blockly.Msg.EMITTERS_SET_GRAVITY_VI_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.EMITTERS_SET_GRAVITY_VI_FIELD_2);
        this.appendValueInput("GRAVITY")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip(Blockly.Msg.EMITTERS_SET_GRAVITY_VI_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.EMITTERS_SET_GRAVITY_VI_HELP_URL);
    }
};

Blockly.Blocks['emitters_set_width'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.EMITTERS_SET_WIDTH_FIELD_1)
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField(Blockly.Msg.EMITTERS_SET_WIDTH_FIELD_2);
        this.appendValueInput("WIDTH")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip(Blockly.Msg.EMITTERS_SET_WIDTH_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.EMITTERS_SET_WIDTH_HELP_URL);
    }
};
//endregion

//region UTILITY
Blockly.Blocks['debug_sprite'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.DEBUG_SPRITE_FIELD_1);
        this.appendValueInput("X_VAL")
            .setCheck("Number")
            .appendField(Blockly.Msg.DEBUG_SPRITE_FIELD_2);
        this.appendValueInput("Y_VAL")
            .setCheck("Number")
            .appendField(Blockly.Msg.DEBUG_SPRITE_FIELD_3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_UTILITY_COLOUR);
        this.setTooltip(Blockly.Msg.DEBUG_SPRITE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DEBUG_SPRITE_HELP_URL);
    }
};
//endregion

//region STATES
Blockly.Blocks['statemanager_add_state'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField(Blockly.Msg.STATEMANAGER_ADD_STATE_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.STATEMANAGER_ADD_STATE_FIELD_2)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.STATEMANAGER_ADD_STATE_KEY_TEXT_DEFAULT), "KEY")
            .appendField(Blockly.Msg.STATEMANAGER_ADD_STATE_FIELD_3);
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
            .appendField(Blockly.Msg.STATEMANAGER_START_STATE_FIELD_1)
            .appendField(new Blockly.FieldTextInput(Blockly.Msg.STATEMANAGER_START_STATE_TAG_TEXT_DEFAULT), "TAG");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_STATES_COLOUR);
        this.setTooltip(Blockly.Msg.STATEMANAGER_START_STATE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.STATEMANAGER_START_STATE_HELP_URL);
    }
};
//endregion

//region GEOMETRY

//region RECTANGLE
Blockly.Blocks['rectangle_create'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.RECTANGLE_CREATE_FIELD_1);
        this.appendValueInput('X')
            .appendField(Blockly.Msg.RECTANGLE_CREATE_FIELD_2);
        this.appendValueInput('Y')
            .appendField(Blockly.Msg.RECTANGLE_CREATE_FIELD_3);
        this.appendValueInput('WIDTH')
            .appendField(Blockly.Msg.RECTANGLE_CREATE_FIELD_4);
        this.appendValueInput('HEIGHT')
            .appendField(Blockly.Msg.RECTANGLE_CREATE_FIELD_5);
        this.setInputsInline(true);
        this.setColour(PHASER_RECTANGLE_COLOUR);
        this.setTooltip(Blockly.Msg.RECTANGLE_CREATE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.RECTANGLE_CREATE_HELP_URL);
        this.setOutput(true);
    }
};
//endregion

//region POINT
Blockly.Blocks['point_create'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.POINT_CREATE_FIELD_1);
        this.appendValueInput('X')
            .appendField(Blockly.Msg.POINT_CREATE_FIELD_2);
        this.appendValueInput('Y')
            .appendField(Blockly.Msg.POINT_CREATE_FIELD_3);
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
            .appendField(Blockly.Msg.POINT_GET_ELEMENT_FIELD_1);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.POINT_GET_ELEMENT_ELEMENT_DROPDOWN_1, 'x'], [Blockly.Msg.POINT_GET_ELEMENT_ELEMENT_DROPDOWN_2, 'y']]), 'ELEMENT');
        this.appendDummyInput()
            .appendField(Blockly.Msg.POINT_GET_ELEMENT_FIELD_2);
        this.appendValueInput('POINT');
        this.setInputsInline(true);
        this.setColour(PHASER_POINT_COLOUR);
        this.setTooltip(Blockly.Msg.POINT_GET_ELEMENT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.POINT_GET_ELEMENT_HELP_URL);
        this.setOutput(true);
    }
};


Blockly.Blocks['point_set_element'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.POINT_SET_ELEMENT_FIELD_1);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.POINT_SET_ELEMENT_ELEMENT_DROPDOWN_1, 'x'], [Blockly.Msg.POINT_SET_ELEMENT_ELEMENT_DROPDOWN_2, 'y']]), 'ELEMENT');
        this.appendDummyInput()
            .appendField(Blockly.Msg.POINT_SET_ELEMENT_FIELD_2);
        this.appendValueInput('POINT');
        this.appendValueInput('VALUE')
            .appendField(Blockly.Msg.POINT_SET_ELEMENT_FIELD_3)
            .setCheck('Number');
        this.setInputsInline(true);
        this.setColour(PHASER_POINT_COLOUR);
        this.setTooltip(Blockly.Msg.POINT_SET_ELEMENT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.POINT_SET_ELEMENT_HELP_URL);
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
    }
};

/**
 * Set the magnitude of the point
 * @link https://phaser.io/docs/2.6.2/Phaser.Point.html#setMagnitude
 * @type {{init: Blockly.Blocks.point_set_magnitude.init}}
 */
Blockly.Blocks['point_set_magnitude'] = {
    init: function () {
        this.appendValueInput('POINT')
            .appendField(Blockly.Msg.POINT_SET_MAGNITUDE_FIELD_1);
        this.appendValueInput('VALUE')
            .appendField(Blockly.Msg.POINT_SET_MAGNITUDE_FIELD_2)
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
            .appendField(Blockly.Msg.POINTS_ADD_FIELD_1);
        this.appendValueInput('RHS')
            .appendField(Blockly.Msg.POINTS_ADD_FIELD_2);
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
            .appendField(Blockly.Msg.POINTS_SUBTRACT_FIELD_1);
        this.appendValueInput('RHS')
            .appendField(Blockly.Msg.POINTS_SUBTRACT_FIELD_2);
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
            .appendField(Blockly.Msg.POINTS_ANGLE_BETWEEN_FIELD_1);
        this.appendValueInput('RHS')
            .appendField(Blockly.Msg.POINTS_ANGLE_BETWEEN_FIELD_2);
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
            .appendField(Blockly.Msg.POINTS_DISTANCE_FIELD_1);
        this.appendValueInput('RHS')
            .appendField(Blockly.Msg.POINTS_DISTANCE_FIELD_2);
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
            .appendField(Blockly.Msg.POINTS_DIVIDE_FIELD_1);
        this.appendValueInput('RHS')
            .appendField(Blockly.Msg.POINTS_DIVIDE_FIELD_2);
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
            .appendField(Blockly.Msg.POINTS_EQUALS_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.POINTS_EQUALS_FIELD_2);
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
            .appendField(Blockly.Msg.POINTS_INTERPOLATE_FIELD_1);
        this.appendValueInput('RHS')
            .appendField(Blockly.Msg.POINTS_INTERPOLATE_FIELD_2);
        this.appendValueInput('F')
            .appendField(Blockly.Msg.POINTS_INTERPOLATE_FIELD_3);
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
            .appendField(Blockly.Msg.POINTS_MULTIPLY_FIELD_1);
        this.appendValueInput('RHS')
            .appendField(Blockly.Msg.POINTS_MULTIPLY_FIELD_2);
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
            .appendField(Blockly.Msg.POINTS_NEGATE_FIELD_1);
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
            .appendField(Blockly.Msg.POINTS_NORMALIZE_FIELD_1);
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
            .appendField(Blockly.Msg.POINTS_PERPENDICULAR_FIELD_1);
        this.setColour(PHASER_POINT_COLOUR);
        this.setOutput(true, null);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.POINTS_PERPENDICULAR_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.POINTS_PERPENDICULAR_HELP_URL);
    }
};


//endregion

//endregion

//region CAMERA
//region CAMERA.METHODS
Blockly.Blocks['camera_follow_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.CAMERA_FOLLOW_VI_FIELD_1);
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
        this.appendValueInput("COLOUR")
            .setCheck('Colour')
            .appendField(Blockly.Msg.CAMERA_FADE_FIELD_1);
        this.appendValueInput("TIME")
            .setCheck('Number')
            .appendField(Blockly.Msg.CAMERA_FADE_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CAMERA_FADE_FIELD_3);
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
        this.appendValueInput("COLOUR")
            .setCheck('Colour')
            .appendField(Blockly.Msg.CAMERA_FLASH_FIELD_1);
        this.appendValueInput("TIME")
            .setCheck('Number')
            .appendField(Blockly.Msg.CAMERA_FLASH_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CAMERA_FLASH_FIELD_3);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_CAMERA_COLOUR);
        this.setTooltip(Blockly.Msg.CAMERA_FLASH_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.CAMERA_FLASH_HELP_URL);
    }
};

Blockly.Blocks['camera_focus_on'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .appendField(Blockly.Msg.CAMERA_FOCUS_ON_FIELD_1);
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
            .appendField(Blockly.Msg.CAMERA_FOCUS_ON_XY_FIELD_1);
        this.appendValueInput("POSX")
            .setCheck('Number')
            .appendField(Blockly.Msg.CAMERA_FOCUS_ON_XY_FIELD_2);
        this.appendValueInput("POSY")
            .setCheck('Number')
            .appendField(Blockly.Msg.CAMERA_FOCUS_ON_XY_FIELD_3);
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
            .appendField(Blockly.Msg.CAMERA_RESET_FIELD_1);
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
            .appendField(Blockly.Msg.CAMERA_RESET_FX_FIELD_1);
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
            .appendField(Blockly.Msg.CAMERA_SET_BOUNDS_TO_WORLD_FIELD_1);
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
            .appendField(Blockly.Msg.CAMERA_SET_POSITION_FIELD_1);
        this.appendValueInput("POSX")
            .setCheck('Number')
            .appendField(Blockly.Msg.CAMERA_SET_POSITION_FIELD_2);
        this.appendValueInput("POSY")
            .setCheck('Number')
            .appendField(Blockly.Msg.CAMERA_SET_POSITION_FIELD_3);
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
            .appendField(Blockly.Msg.CAMERA_SET_SIZE_FIELD_1);
        this.appendValueInput("WIDTH")
            .setCheck('Number')
            .appendField(Blockly.Msg.CAMERA_SET_SIZE_FIELD_2);
        this.appendValueInput("HEIGHT")
            .setCheck('Number')
            .appendField(Blockly.Msg.CAMERA_SET_SIZE_FIELD_3);
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
        this.appendValueInput("INTENSITY")
            .setCheck('Number')
            .appendField(Blockly.Msg.CAMERA_SHAKE_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CAMERA_SHAKE_FIELD_2);
        this.appendValueInput("DURATION")
            .setCheck('Number')
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_1, "SHAKE_BOTH"], [Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_2, "SHAKE_VERTICAL"], [Blockly.Msg.CAMERA_SHAKE_DIRECTION_DROPDOWN_3, "SHAKE_HORIZONTAL"]]), "DIRECTION")
            .appendField(Blockly.Msg.CAMERA_SHAKE_FIELD_3);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CAMERA_SHAKE_FIELD_4);
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
            .appendField(Blockly.Msg.CAMERA_UNFOLLOW_FIELD_1);
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
            .appendField(Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_FIELD_2)
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_STYLE_DROPDOWN_1, 'FOLLOW_LOCKON'], [Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_STYLE_DROPDOWN_2, 'FOLLOW_PLATFORMER'], [Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_STYLE_DROPDOWN_3, 'FOLLOW_TOPDOWN'], [Blockly.Msg.CAMERA_FOLLOW_VI_STYLED_STYLE_DROPDOWN_4, 'FOLLOW_TOPDOWN_TIGHT']]), 'STYLE');
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

//region SOUND
//region SOUND.PROPERTIES
const SOUND_FIELDS_BOOLEAN_WRITABLE = ['autoplay', 'loop', 'mute', 'override', 'paused',];
const SOUND_FIELDS_BOOLEAN_RO = ['isDecoded', 'isDecoding', 'isPlaying', 'pendingPlayback', 'usingAudioTag', 'usingWebAudio'];
const SOUND_FIELDS_BOOLEAN = createDropDownField(SOUND_FIELDS_BOOLEAN_WRITABLE, SOUND_FIELDS_BOOLEAN_RO);

Blockly.Blocks['set_sound_boolean_member'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_FIELD_1)
            .appendField(new Blockly.FieldDropdown(SOUND_FIELDS_BOOLEAN.writable), "ELEMENT")
            .appendField(Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_FIELD_2);
        this.appendValueInput('OBJECT');
        this.appendValueInput('VALUE')
            .appendField(Blockly.Msg.SET_SOUND_BOOLEAN_MEMBER_FIELD_3)
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
            .appendField(Blockly.Msg.GET_SOUND_BOOLEAN_MEMBER_FIELD_1)
            .appendField(new Blockly.FieldDropdown(SOUND_FIELDS_BOOLEAN.all), "ELEMENT")
            .appendField(Blockly.Msg.GET_SOUND_BOOLEAN_MEMBER_FIELD_2);
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
            .appendField(Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_FIELD_1)
            .appendField(new Blockly.FieldDropdown(SOUND_FIELDS_NUMERIC.writable), "ELEMENT")
            .appendField(Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_FIELD_2);
        this.appendValueInput('OBJECT');
        this.appendValueInput('VALUE')
            .appendField(Blockly.Msg.SET_SOUND_NUMERIC_MEMBER_FIELD_3)
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
            .appendField(Blockly.Msg.GET_SOUND_NUMERIC_MEMBER_FIELD_1)
            .appendField(new Blockly.FieldDropdown(SOUND_FIELDS_NUMERIC.all), "ELEMENT")
            .appendField(Blockly.Msg.GET_SOUND_NUMERIC_MEMBER_FIELD_2);
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
            .appendField(Blockly.Msg.GET_SOUND_STRING_MEMBER_FIELD_1)
            .appendField(new Blockly.FieldDropdown(SOUND_FIELDS_STRING.all), "ELEMENT")
            .appendField(Blockly.Msg.GET_SOUND_STRING_MEMBER_FIELD_2);
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
            .appendField(Blockly.Msg.LOAD_SOUND_FIELD_1);
        this.appendValueInput("TAG")
            .setCheck("String")
            .appendField(Blockly.Msg.LOAD_SOUND_FIELD_2);
        this.appendValueInput("SOURCE")
            .setCheck("String")
            .appendField(Blockly.Msg.LOAD_SOUND_FIELD_3);
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
            .appendField(Blockly.Msg.ADD_SOUND_FIELD_1);
        this.appendValueInput("TAG")
            .setCheck('from tag')
            .setCheck("String");
        this.appendValueInput("VOLUME")
            .setCheck('Number')
            .appendField(Blockly.Msg.ADD_SOUND_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.ADD_SOUND_FIELD_3)
            .appendField(new Blockly.FieldCheckbox("FALSE"), "LOOPING");
        this.setInputsInline(true);
        this.setOutput(true);
        this.setColour(PHASER_SOUND_COLOUR);
        this.setTooltip(Blockly.Msg.ADD_SOUND_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.ADD_SOUND_HELP_URL);
    }
};

Blockly.Blocks['play_sound'] = {
    init: function () {
        this.appendValueInput("TAG")
            .setCheck(null)
            .appendField(Blockly.Msg.PLAY_SOUND_FIELD_1);
        this.appendValueInput("VOLUME")
            .setCheck(null)
            .appendField(Blockly.Msg.PLAY_SOUND_FIELD_2);
        this.appendDummyInput()
            .appendField(Blockly.Msg.PLAY_SOUND_FIELD_3)
            .appendField(new Blockly.FieldCheckbox("FALSE"), "LOOPING");
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
        this.appendValueInput("TAG")
            .setCheck(null)
            .appendField(Blockly.Msg.REMOVE_SOUND_FIELD_1);
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
            .appendField(new Blockly.FieldDropdown([[Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_OPTION_DROPDOWN_1, "stop"], [Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_OPTION_DROPDOWN_2, "pause"], [Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_OPTION_DROPDOWN_3, "resume"]]), "OPTION")
            .appendField(Blockly.Msg.STOP_PAUSE_RESUME_SOUNDS_FIELD_1);
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
            .appendField(Blockly.Msg.SOUND_FADE_IN_FIELD_1);
        this.appendValueInput('DURATION')
            .appendField(Blockly.Msg.SOUND_FADE_IN_FIELD_2)
            .setCheck('Number');
        this.appendDummyInput()
            .appendField(Blockly.Msg.SOUND_FADE_IN_FIELD_3)
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
            .appendField(Blockly.Msg.SOUND_FADE_OUT_FIELD_1);
        this.appendValueInput('DURATION')
            .appendField(Blockly.Msg.SOUND_FADE_OUT_FIELD_2)
            .setCheck('Number');
        this.appendDummyInput()
            .appendField(Blockly.Msg.SOUND_FADE_OUT_FIELD_3);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SOUND_COLOUR);
        this.setTooltip(Blockly.Msg.SOUND_FADE_OUT_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SOUND_FADE_OUT_HELP_URL)
    }
};

Blockly.Blocks['sound_fade_to'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.SOUND_FADE_TO_FIELD_1);
        this.appendValueInput('DURATION')
            .appendField(Blockly.Msg.SOUND_FADE_TO_FIELD_2)
            .setCheck('Number');
        this.appendDummyInput()
            .appendField(Blockly.Msg.SOUND_FADE_TO_FIELD_3);
        this.appendValueInput('VOLUME')
            .appendField(Blockly.Msg.SOUND_FADE_TO_FIELD_4)
            .setCheck('Number');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SOUND_COLOUR);
        this.setTooltip(Blockly.Msg.SOUND_FADE_TO_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SOUND_FADE_TO_HELP_URL)
    }
};

Blockly.Blocks['sound_loop_full'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.SOUND_LOOP_FULL_FIELD_1);
        this.appendValueInput('VOLUME')
            .appendField(Blockly.Msg.SOUND_LOOP_FULL_FIELD_2)
            .setCheck('Number');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SOUND_COLOUR);
        this.setTooltip(Blockly.Msg.SOUND_LOOP_FULL_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SOUND_LOOP_FULL_HELP_URL)
    }
};

Blockly.Blocks['sound_pause'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.SOUND_PAUSE_FIELD_1);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SOUND_COLOUR);
        this.setTooltip(Blockly.Msg.SOUND_PAUSE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SOUND_PAUSE_HELP_URL)
    }
};

Blockly.Blocks['sound_resume'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.SOUND_RESUME_FIELD_1);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SOUND_COLOUR);
        this.setTooltip(Blockly.Msg.SOUND_RESUME_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SOUND_RESUME_HELP_URL)
    }
};

Blockly.Blocks['sound_stop'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.SOUND_STOP_FIELD_1);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SOUND_COLOUR);
        this.setTooltip(Blockly.Msg.SOUND_STOP_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SOUND_STOP_HELP_URL)
    }
};

Blockly.Blocks['sound_play'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.SOUND_PLAY_FIELD_1);
        this.appendValueInput('POSITION')
            .appendField(Blockly.Msg.SOUND_PLAY_FIELD_2)
            .setCheck('Number');
        this.appendValueInput('VOLUME')
            .appendField(Blockly.Msg.SOUND_PLAY_FIELD_3)
            .setCheck('Number');
        this.appendDummyInput()
            .appendField(Blockly.Msg.SOUND_PLAY_FIELD_4)
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'LOOP');
        this.appendDummyInput()
            .appendField(Blockly.Msg.SOUND_PLAY_FIELD_5)
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'RESTART');
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SOUND_COLOUR);
        this.setTooltip(Blockly.Msg.SOUND_PLAY_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SOUND_PLAY_HELP_URL)
    }
};

Blockly.Blocks['sound_restart'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField(Blockly.Msg.SOUND_RESTART_FIELD_1);
        this.appendValueInput('POSITION')
            .appendField(Blockly.Msg.SOUND_RESTART_FIELD_2)
            .setCheck('Number');
        this.appendValueInput('VOLUME')
            .appendField(Blockly.Msg.SOUND_RESTART_FIELD_3)
            .setCheck('Number');
        this.appendDummyInput()
            .appendField(Blockly.Msg.SOUND_RESTART_FIELD_4)
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'LOOP');
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SOUND_COLOUR);
        this.setTooltip(Blockly.Msg.SOUND_RESTART_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.SOUND_RESTART_HELP_URL)
    }
};
//endregion
//endregion

//region LIST.METHODS
Blockly.Blocks['list_find_closest'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.LIST_FIND_CLOSEST_FIELD_1);
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField(Blockly.Msg.LIST_FIND_CLOSEST_FIELD_2);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(PHASER_UTIL_LIST_COLOUR);
        this.setTooltip(Blockly.Msg.LIST_FIND_CLOSEST_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LIST_FIND_CLOSEST_HELP_URL);
    }
};

Blockly.Blocks['list_get_random'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField(Blockly.Msg.LIST_GET_RANDOM_FIELD_1);
        this.setOutput(true, null);
        this.setColour(PHASER_UTIL_LIST_COLOUR);
        this.setTooltip(Blockly.Msg.LIST_GET_RANDOM_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LIST_GET_RANDOM_HELP_URL);
    }
};

Blockly.Blocks['number_list'] = {
    init: function () {
        this.appendValueInput("START")
            .setCheck("Number")
            .appendField(Blockly.Msg.NUMBER_LIST_FIELD_1);
        this.appendValueInput("END")
            .setCheck("Number")
            .appendField(Blockly.Msg.NUMBER_LIST_FIELD_2);
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(PHASER_UTIL_LIST_COLOUR);
        this.setTooltip(Blockly.Msg.NUMBER_LIST_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.NUMBER_LIST_HELP_URL);
    }
};

Blockly.Blocks['number_list_step'] = {
    init: function () {
        this.appendValueInput("START")
            .setCheck("Number")
            .appendField(Blockly.Msg.NUMBER_LIST_STEP_FIELD_1);
        this.appendValueInput("END")
            .setCheck("Number")
            .appendField(Blockly.Msg.NUMBER_LIST_STEP_FIELD_2);
        this.appendValueInput("STEP")
            .setCheck("Number")
            .appendField(Blockly.Msg.NUMBER_LIST_STEP_FIELD_3);
        this.setInputsInline(true);
        this.setOutput(true, "Array");
        this.setColour(PHASER_UTIL_LIST_COLOUR);
        this.setTooltip(Blockly.Msg.NUMBER_LIST_STEP_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.NUMBER_LIST_STEP_HELP_URL);
    }
};

Blockly.Blocks['list_remove_random_item'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField(Blockly.Msg.LIST_REMOVE_RANDOM_ITEM_FIELD_1);
        this.setOutput(true, null);
        this.setColour(PHASER_UTIL_LIST_COLOUR);
        this.setTooltip(Blockly.Msg.LIST_REMOVE_RANDOM_ITEM_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.LIST_REMOVE_RANDOM_ITEM_HELP_URL);
    }
};

Blockly.Blocks['list_shuffle'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField(Blockly.Msg.LIST_SHUFFLE_FIELD_1);
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
            .appendField(Blockly.Msg.RANDOM_ANGLE_FIELD_1);
        this.setOutput(true, "Number");
        this.setColour(PHASER_RANDOM_COLOUR);
        this.setTooltip(Blockly.Msg.RANDOM_ANGLE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.RANDOM_ANGLE_HELP_URL);
    }
};

Blockly.Blocks['random_pick'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField(Blockly.Msg.RANDOM_PICK_FIELD_1);
        this.setOutput(true, null);
        this.setColour(PHASER_RANDOM_COLOUR);
        this.setTooltip(Blockly.Msg.RANDOM_PICK_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.RANDOM_PICK_HELP_URL);
    }
};

Blockly.Blocks['random_pick_weighted'] = {
    init: function () {
        this.appendValueInput("ARRAY")
            .setCheck("Array")
            .appendField(Blockly.Msg.RANDOM_PICK_WEIGHTED_FIELD_1);
        this.setOutput(true, null);
        this.setColour(PHASER_RANDOM_COLOUR);
        this.setTooltip(Blockly.Msg.RANDOM_PICK_WEIGHTED_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.RANDOM_PICK_WEIGHTED_HELP_URL);
    }
};

Blockly.Blocks['random_real'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.RANDOM_REAL_FIELD_1);
        this.setOutput(true, "Number");
        this.setColour(PHASER_RANDOM_COLOUR);
        this.setTooltip(Blockly.Msg.RANDOM_REAL_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.RANDOM_REAL_HELP_URL);
    }
};

Blockly.Blocks['random_real_in_range'] = {
    init: function () {
        this.appendValueInput("MIN")
            .setCheck("Number")
            .appendField(Blockly.Msg.RANDOM_REAL_IN_RANGE_FIELD_1);
        this.appendValueInput("MAX")
            .setCheck("Number")
            .appendField(Blockly.Msg.RANDOM_REAL_IN_RANGE_FIELD_2);
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(PHASER_RANDOM_COLOUR);
        this.setTooltip(Blockly.Msg.RANDOM_REAL_IN_RANGE_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.RANDOM_REAL_IN_RANGE_HELP_URL);
    }
};

Blockly.Blocks['random_sign'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.RANDOM_SIGN_FIELD_1);
        this.setOutput(true, "Number");
        this.setColour(PHASER_RANDOM_COLOUR);
        this.setTooltip(Blockly.Msg.RANDOM_SIGN_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.RANDOM_SIGN_HELP_URL);
    }
};
//endregion

//region MATH
Blockly.Blocks['math_deg_to_rad'] = {
    init: function () {
        this.appendValueInput("DEGREES")
            .setCheck("Number")
            .appendField(Blockly.Msg.MATH_DEG_TO_RAD_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MATH_DEG_TO_RAD_FIELD_2);
        this.setOutput(true, null);
        this.setColour(PHASER_MATH_COLOUR);
        this.setTooltip(Blockly.Msg.MATH_DEG_TO_RAD_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.MATH_DEG_TO_RAD_HELP_URL);
    }
};

Blockly.Blocks['math_rad_to_deg'] = {
    init: function () {
        this.appendValueInput("RADIANS")
            .setCheck("Number")
            .appendField(Blockly.Msg.MATH_RAD_TO_DEG_FIELD_1);
        this.appendDummyInput()
            .appendField(Blockly.Msg.MATH_RAD_TO_DEG_FIELD_2);
        this.setOutput(true, null);
        this.setColour(PHASER_MATH_COLOUR);
        this.setTooltip(Blockly.Msg.MATH_RAD_TO_DEG_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.MATH_RAD_TO_DEG_HELP_URL);
    }
};
//endegion

//region TIME
//region TIME.PROPERTIES
const TIME_FIELDS_NUMERIC_WRITABLE = ['desiredFps', 'slowMotion',];
const TIME_FIELDS_NUMERIC_RO = ['pauseDuration', 'physicsElapsed', 'physicsElapsedMS'];
const TIME_FIELDS_NUMERIC = createDropDownField(TIME_FIELDS_NUMERIC_WRITABLE, TIME_FIELDS_NUMERIC_RO);

Blockly.Blocks['get_time_numeric_member'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.GET_TIME_NUMERIC_MEMBER_TITLE)
            .appendField(new Blockly.FieldDropdown(TIME_FIELDS_NUMERIC.all), "PROPERTY");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setColour(PHASER_TIME_COLOUR);
        this.setTooltip(Blockly.Msg.GET_TIME_NUMERIC_MEMBER_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.GET_TIME_NUMERIC_MEMBER_HELP_URL);
    },
    onchange: function() {
        if(TIME_FIELDS_NUMERIC_RO.includes(this.getFieldValue('PROPERTY'))){
            this.customContextMenu = null;
        }else{
            this.customContextMenu = createNumericGetterContextMenu('set_time_numeric_number', {objectTag: null});
        }
    },
    customContextMenu: createNumericGetterContextMenu('set_time_numeric_member', {objectTag: null})
};

Blockly.Blocks['set_time_numeric_member'] = {
    init: function () {
        this.appendValueInput("VALUE")
            .setCheck("Number")
            .appendField(Blockly.Msg.SET_TIME_NUMERIC_MEMBER_TITLE)
            .appendField(new Blockly.FieldDropdown(TIME_FIELDS_NUMERIC.writable), "PROPERTY")
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
        this.setOutput(true, "Number");
        this.setColour(PHASER_TIME_COLOUR);
        this.setTooltip(Blockly.Msg.DELTA_TIME_SECONDS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DELTA_TIME_SECONDS_HELP_URL);
    }
};

Blockly.Blocks['delta_time_milliseconds'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(Blockly.Msg.DELTA_TIME_MILLISECONDS_TITLE);
        this.setOutput(true, "Number");
        this.setColour(PHASER_TIME_COLOUR);
        this.setTooltip(Blockly.Msg.DELTA_TIME_MILLISECONDS_TOOLTIP);
        this.setHelpUrl(Blockly.Msg.DELTA_TIME_MILLISECONDS_HELP_URL);
    }
};
//endregion


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
