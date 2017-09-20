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
const PHASER_TEXT_COLOUR = '#009688';
const PHASER_GAMEOBJECT_COLOUR = '#00bfa5';
const PHASER_KEYBOARD_INPUT = '#1565c0';
const PHASER_GAMEPAD_INPUT = '#42a5f5';
const PHASER_MOUSE_INPUT = '#1976d2';
const PHASER_PHYSICS_STARTUP = '#d500f9';
const PHASER_PHYSICS_DYNAMICS = '#6a1b9a';
const PHASER_PHYSICS_COLLISION_COLOUR = '#8e24aa';
const PHASER_CAMERA_COLOUR = '#607d8b';
//endregion


function createDropDownField(write, readOnly) {
    const output = {
        writable: [],   
        all: []
    }

    write.forEach(item => {
        output.writable.push([item, item]);
        output.all.push([item, item]);
    });

    readOnly.forEach(item => {
        output.all.push([item, item]);
    });
    return output;
}

//region STARTUP
Blockly.Blocks['phaser_simple_init'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("run phaser");
        this.appendDummyInput()
            .appendField("width:")
            .appendField(new Blockly.FieldNumber(800), "WIDTH")
            .appendField("height")
            .appendField(new Blockly.FieldNumber(600), "HEIGHT");
        this.appendStatementInput("PRELOAD")
            .setCheck(null)
            .appendField("on preload do");
        this.appendStatementInput("CREATE")
            .setCheck(null)
            .appendField("on create do");
        this.appendStatementInput("UPDATE")
            .setCheck(null)
            .appendField("on update do");
        this.setColour(PHASER_STARTUP_COLOUR);
        this.setTooltip('Create a Phaser Game with given width and height');
    }
};

Blockly.Blocks['start_phaser_for_states'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("start phaser for states with");
        this.appendDummyInput()
            .appendField("width")
            .appendField(new Blockly.FieldNumber(800, 0), "WIDTH");
        this.appendDummyInput()
            .appendField("height")
            .appendField(new Blockly.FieldNumber(600, 0), "HEIGHT");
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setColour(PHASER_STARTUP_COLOUR);
        this.setTooltip('Create a Phaser game using explicit states');
    }
};
//endregion

//region UTILITY
Blockly.Blocks['center_and_stretch'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("center and stretch phaser");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_UTILITY_COLOUR);
        this.setTooltip('Tells Phaser to center and stretch the game view to fit its window');
    }
};

Blockly.Blocks['enable_step'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('enable stepping');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Game.html#enableStep');
        this.setColour(PHASER_UTILITY_COLOUR);
    }
};

Blockly.Blocks['disable_step'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Disable Stepping');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Game.html#disableStep');
        this.setColour(PHASER_UTILITY_COLOUR);
    }
};

Blockly.Blocks['step'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Step');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Game.html#step');
        this.setColour(PHASER_UTILITY_COLOUR);
    }
};
//endregion

//region DRAWPRIMITIVES
Blockly.Blocks['create_graphics_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("create graphics object with offsets");
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("x:");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y:");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['draw_shapes_with_colour'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("fill shapes with ");
        this.appendValueInput("colour")
            .setCheck(null)
            .appendField("colour");
        this.appendDummyInput()
            .appendField("using");
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("graphics"), "graphics_object_name");
        this.appendStatementInput("shape draw functions")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['draw_rectangle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("draw rectangle at position");
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("x:");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y:");
        this.appendDummyInput()
            .appendField("with");
        this.appendValueInput("w")
            .setCheck("Number")
            .appendField("width:");
        this.appendValueInput("h")
            .setCheck("Number")
            .appendField("height:");
        this.appendDummyInput()
            .appendField("using")
            .appendField(new Blockly.FieldVariable("graphics"), "graphics_object_name");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(330);
        this.setTooltip('');
        this.setHelpUrl('');
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
            .appendField('Stop Animation on')
            .appendField(new Blockly.FieldVariable('defaultObject'), "OBJECT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
    }
};

/**
 * @Deprecated use play_animation_vi instead
 * @type {{init: Blockly.Blocks.play_animation.init}}
 */
Blockly.Blocks['play_animation'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('play animation');
        this.appendValueInput('ANIMATION');
        this.appendDummyInput()
            .appendField('on')
            .appendField(new Blockly.FieldVariable('defaultObject'), "OBJECT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.AnimationManager.html#play');
    }
};

/**
 * @Deprecated use set_frame_vi instead
 * @type {{init: Blockly.Blocks.set_frame.init}}
 */
Blockly.Blocks['set_frame'] = {
    init: function () {
        this.appendValueInput('FRAME_NUMBER')
            .appendField('Set Current Frame # For')
            .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_ANIMATION_COLOUR);
    }
};

/**
 * @Deprecated used add_animation_vi instead
 * @type {{init: Blockly.Blocks.add_animation.init}}
 */
Blockly.Blocks['add_animation'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("add animation to")
            .appendField(new Blockly.FieldVariable("defaultObject"), "object");
        this.appendDummyInput()
            .appendField("tagged")
            .appendField(new Blockly.FieldTextInput("name"), "NAME");
        this.appendValueInput("FRAMES")
            .setCheck(null)
            .appendField("with frames");
        this.appendDummyInput()
            .appendField("displayed at")
            .appendField(new Blockly.FieldNumber(60), "FPS")
            .appendField("FPS");
        this.appendDummyInput()
            .appendField("loop")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "LOOP");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Add an animation to an object based on a list of frames');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.AnimationManager.html#add');
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
            .appendField("add child object");
        this.appendDummyInput()
            .appendField("to")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Add a child to a sprite. This will make them move together.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#addChild');
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
            .appendField("reset the frame dimensions of");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Resets the texture frame dimensions that the sprite uses for rendering.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#resetFrame');
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
            .appendField("resize the frame of");
        this.appendValueInput("PARENT")
            .setCheck(null)
            .appendField("to accomodate");
        this.appendValueInput("WIDTH")
            .setCheck("Number")
            .appendField("Width");
        this.appendValueInput("HEIGHT")
            .setCheck("Number")
            .appendField("Height");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Resizes the Frame dimensions that the Game Object uses for rendering. You shouldn\'t normally need to ever call this, but in the case of special texture types such as Video or BitmapData it can be useful to adjust the dimensions directly in this way.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#resizeFrame');
    }
};
//endregion

//endregion

//region SPRITES_AND_IMAGES

//region SPRITES
Blockly.Blocks['create_image'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('create image');
        this.setColour(PHASER_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
        this.appendValueInput('TAG')
            .appendField('tag')
            .setCheck('String');
        this.appendValueInput('SRC')
            .appendField('source')
            .setCheck('String');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setInputsInline(true);
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Loader.html#image');
    }
};

Blockly.Blocks['create_sprite_sheet'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('create sprite sheet');
        this.appendValueInput('TAG')
            .appendField('tag')
            .setCheck('String');
        this.appendValueInput('SRC')
            .appendField('source')
            .setCheck('String');
        this.appendDummyInput()
            .appendField('frame width')
            .appendField(new Blockly.FieldNumber(0), "FRAME_WIDTH")
            .appendField('pixels');
        this.appendDummyInput()
            .appendField('frame height')
            .appendField(new Blockly.FieldNumber(0), "FRAME_HEIGHT")
            .appendField('pixels');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Loader.html#spritesheet');
    }
};

Blockly.Blocks['add_image'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('add image to game at');
        this.appendValueInput('X_POS')
            .appendField('x')
            .setCheck('Number');
        this.appendValueInput('Y_POS')
            .appendField('y')
            .setCheck('Number');
        this.appendValueInput('TAG')
            .appendField('tagged')
            .setCheck('String');
        this.setOutput(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.GameObjectFactory.html#sprite');
    }
};

Blockly.Blocks['addspritewithatlas'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("load atlas image");
        this.appendValueInput("tag")
            .setCheck("String")
            .appendField("tag");
        this.appendValueInput("text_source")
            .setCheck("String")
            .appendField("spritesheet source");
        this.appendValueInput("text_xmlsource")
            .setCheck("String")
            .appendField("texture atlas xml");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Loader.html#atlasXML');
    }
};

Blockly.Blocks['imagesubtextureatlas'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("add sprite to game from atlas at");
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("x");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y");
        this.appendValueInput("spritesource")
            .setCheck("String")
            .appendField("tagged ");
        this.appendValueInput("xmlsubtexture")
            .setCheck("String")
            .appendField("subtexture id");
        this.setOutput(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Loader.html#atlasXML');
    }
};


Blockly.Blocks['add_child_vi'] = {
    init: function () {
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField("add child object");
        this.appendValueInput('OBJECT')
            .appendField("to");
        this.setInputsInline(true);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Add a child to a sprite. This will make them move together.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#addChild');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks['add_child_at'] = {
    init: function () {
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField("add child");
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField("to")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT")
            .appendField("at index");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Add a child to a sprite at a specific index so you can find it later. This will make them move together.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#addChildAt');
    }
};

Blockly.Blocks['add_child_at_vi'] = {
    init: function () {
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField("add child");
        this.appendValueInput('OBJECT')
            .appendField("to");
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField("at index");
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Add a child to a sprite at a specific index so you can find it later. This will make them move together.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#addChildAt');
    }
};

Blockly.Blocks['align_in'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("align");
        this.appendValueInput("CONTAINER")
            .setCheck(null)
            .appendField("inside");
        this.appendDummyInput()
            .appendField("at the")
            .appendField(new Blockly.FieldDropdown([["top left", "TOP_LEFT"], ["top center", "TOP_CENTER"], ["top right", "TOP_RIGHT"], ["left center", "LEFT_CENTER"], ["center", "CENTER"], ["right center", "RIGHT_CENTER"], ["bottom left", "BOTTOM_LEFT"], ["bottom center", "BOTTOM_CENTER"], ["bottom right", "BOTTOM_RIGHT"]]), "POSITION");
        this.appendValueInput("OFFSETX")
            .setCheck("Number")
            .appendField("offset x pixels");
        this.appendValueInput("OFFSETY")
            .setCheck("Number")
            .appendField("offset y pixels");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Aligns this Game Object within another Game Object, or Rectangle, to one of 9 possible positions.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#alignIn');
    }
};

Blockly.Blocks['align_to'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("align");
        this.appendValueInput("CONTAINER")
            .setCheck(null)
            .appendField("to");
        this.appendDummyInput()
            .appendField("at the")
            .appendField(new Blockly.FieldDropdown([["top left", "TOP_LEFT"], ["top center", "TOP_CENTER"], ["top right", "TOP_RIGHT"], ["left top", "LEFT_TOP"], ["left center", "LEFT_CENTER"], ["left bottom", "LEFT_BOTTOM"], ["right top", "RIGHT_TOP"], ["right center", "RIGHT_CENTER"], ["right bottom", "RIGHT_BOTTOM"], ["bottom left", "BOTTOM_LEFT"], ["bottom center", "BOTTOM_CENTER"], ["bottom right", "BOTTOM_RIGHT"]]), "POSITION");
        this.appendValueInput("OFFSETX")
            .setCheck("Number")
            .appendField("offset x pixels");
        this.appendValueInput("OFFSETY")
            .setCheck("Number")
            .appendField("offset y pixels");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Aligns this Game Object to the side of another Game Object, or Rectangle, in one of 12 possible positions.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#alignTo');
    }
};

Blockly.Blocks['bring_to_top'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("bring");
        this.appendDummyInput()
            .appendField("to the front");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Brings this sprite/image to the front of the display order. In case of overlapping sprites, this one will draw on top of everything else.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#bringToTop');
    }
};

Blockly.Blocks['check_world_bounds'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("make");
        this.appendValueInput("BOOL")
            .setCheck("Boolean")
            .appendField("check to see if it's inside the world?");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip(`This object will start checking if it's inside the world every frame. This takes time, so it's disabled by default.`);
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#checkWorldBounds');
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
            .appendField("is");
        this.appendDummyInput()
            .appendField("a child of")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT")
            .appendField("?");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Checks to see if one sprite is the child of another.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#contains');
    }
};

Blockly.Blocks['contains_vi'] = {
    init: function () {
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField("is");
        this.appendValueInput('OBJECT')
            .appendField("a child of")
            .appendField("?");
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Checks to see if one sprite is the child of another.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#contains');
    }
};

Blockly.Blocks['crop'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("crop");
        this.appendValueInput("RECTANGLE")
            .setCheck(null)
            .appendField("to");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('crop a sprite to an area defined by a rectangle or other object');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#crop');
    }
};

Blockly.Blocks['clear_cropping'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("stop cropping");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Removes any cropping from a sprite.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#crop');
    }
};

Blockly.Blocks['destroy_sprite'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("destroy");
        this.appendValueInput("BOOL")
            .setCheck("Boolean")
            .appendField("children too?");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Deletes a sprite from the game, with an option to delete its children too.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#destroy');
    }
};

Blockly.Blocks['get_child_at_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField('get child of');
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField("at index");
        this.setOutput(true, null);
        this.setInputsInline(true);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Finds a specific child on this sprite/image by its index.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#getChildAt');
    }
};

Blockly.Blocks['get_child_index'] = {
    init: function () {
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField("Get index of Child");
        this.appendDummyInput()
            .appendField("on ")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Finds an index that describes where on the parent this object is. ');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#getChildIndex');
    }
};

Blockly.Blocks['get_child_index_vi'] = {
    init: function () {
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField("get index of child");
        this.appendValueInput('OBJECT')
            .appendField("on ");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Finds an index that describes where on the parent this object is. ');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#getChildIndex');
    }
};

Blockly.Blocks['load_texture'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("change texture of");
        this.appendValueInput("TEXTURE")
            .setCheck("String")
            .appendField("to tag");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('This changes the texture of this sprite/image entirely. If it is part of a sprite sheet. Warning: slow.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#loadTexture');
        this.setInputsInline(true);
    }
};

Blockly.Blocks['move_down'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("move");
        this.appendDummyInput()
            .appendField("down");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Moves this sprite/image down one place in the display order. If sprites overlap, it will be more likely to display underneath others.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#moveDown');
    }
};

Blockly.Blocks['move_up'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("move");
        this.appendDummyInput()
            .appendField("up");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Moves this sprite up one place in the display order. If sprites overlap, it will be more likely to display on top of others.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#moveUp');
    }
};

Blockly.Blocks['sprite_overlap'] = {
    init: function () {
        this.appendValueInput("SPRITEA")
            .setCheck(null)
            .appendField("does");
        this.appendValueInput("SPRITEB")
            .setCheck(null)
            .appendField("overlap with");
        this.appendDummyInput()
            .appendField("?");
        this.setOutput(true, "Boolean");
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Checks to see if the rectangular bounds of the two given sprites overlap. Not a good substitute for the physics engine, but fine for something like UI.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#overlap');
    }
};

Blockly.Blocks['out_of_bounds_kill'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("make");
        this.appendValueInput("BOOL")
            .setCheck("Boolean")
            .appendField("get deleted if it leaves the world?");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Will automatically destroy this object if it goes outside the world bounds. Warning: this will not work on objects that are not checking to see if they are inside the world.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#outOfBoundsKill');
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
            .appendField("remove child");
        this.appendDummyInput()
            .appendField("from")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Makes this sprite/image stop being a child and moving with its parent.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#removeChild');
    }
};

Blockly.Blocks['remove_child_vi'] = {
    init: function () {
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField("remove child");
        this.appendValueInput('OBJECT')
            .appendField("from");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Makes this sprite/image stop being a child and moving with its parent.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#removeChild');
    }
};

Blockly.Blocks['remove_child_at_vi'] = {
    init: function () {
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField("remove the child at index");
        this.appendValueInput('OBJECT')
            .appendField("from");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Finds the child at the given index and removes it from its parent. It will no longer move with the parent.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#removeChildAt');
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
            .appendField("remove the child at index");
        this.appendDummyInput()
            .appendField("from")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Finds the child at the given index and removes it from its parent. It will no longer move with the parent.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#removeChildAt');
    }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.remove_children.init}}
 */
Blockly.Blocks['remove_children'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("remove all children from")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Removes all children from the parent. They will all stop moving together.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#removeChildren');
    }
};

Blockly.Blocks['remove_children_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField("remove all children from");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Removes all children from the parent. They will all stop moving together.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#removeChildren');
    }
};
//endregion

//region ANIMATION
Blockly.Blocks['add_animation_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField("add animation to");
        this.appendDummyInput()
            .appendField("tagged")
            .appendField(new Blockly.FieldTextInput("name"), "NAME");
        this.appendValueInput("FRAMES")
            .setCheck(null)
            .appendField("with frames");
        this.appendDummyInput()
            .appendField("displayed at")
            .appendField(new Blockly.FieldNumber(60), "FPS")
            .appendField("FPS");
        this.appendDummyInput()
            .appendField("loop")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "LOOP");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Add an animation to an object based on a list of frames');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.AnimationManager.html#add');
        this.setColour(PHASER_ANIMATION_COLOUR);
    }
};

Blockly.Blocks['play_animation_vi'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('play animation');
        this.appendValueInput('ANIMATION');
        this.appendValueInput('OBJECT')
            .appendField('on');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.AnimationManager.html#play');
        this.setInputsInline(true);
    }
};

Blockly.Blocks['animation_next'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("increment current animation by")
            .appendField(new Blockly.FieldNumber(1, 1), "FRAMECOUNT")
            .appendField("on ")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['animation_previous'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("decrement current animation by")
            .appendField(new Blockly.FieldNumber(1, 1), "FRAMECOUNT")
            .appendField("on ")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['animation_next_vi'] = {
    init: function () {
        this.appendValueInput('FRAMECOUNT')
            .appendField('increment current animation by');
        this.appendDummyInput()
            .appendField('frames');
        this.appendValueInput('OBJECT')
            .appendField('for');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setTooltip('Increment the current animation by a given amount of frames');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.AnimationManager.html#next');
    }
};

Blockly.Blocks['animation_previous_vi'] = {
    init: function () {
        this.appendValueInput('FRAMECOUNT')
            .appendField('decrement current animation by');
        this.appendDummyInput()
            .appendField('frames');
        this.appendValueInput('OBJECT')
            .appendField('for');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setTooltip('decrement the current animation by a given amount of frames');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.AnimationManager.html#previous');
    }
};

Blockly.Blocks['refresh_frame'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("refresh frame of ")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['animation_update'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("frame update of ")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
        this.setOutput(true, "Boolean");
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.validate_frames.init}}
 */
Blockly.Blocks['validate_frames'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("validate animation frames of ")
            .appendField(new Blockly.FieldVariable("defaultObject"), "Object");
        this.appendValueInput("FRAMES")
            .setCheck("Array")
            .appendField("array of frames");
        this.setOutput(true, "Boolean");
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['validate_frames_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField("validate animation frames of ");
        this.appendValueInput("FRAMES")
            .setCheck("Array")
            .appendField("array of frames");
        this.setOutput(true, "Boolean");
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setTooltip('Validates the frames on the given Sprite');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.AnimationManager.html#validateFrames');
    }
};

Blockly.Blocks['animation_destroy'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("destroy all animations in animation manager of ")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['animation_destroy_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField("destroy all animations in animation manager of ");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setTooltip('Destroy all animations on the object');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.AnimationManager.html#destroy');
    }
};

Blockly.Blocks['stop_animation_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField('stop animation on');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setTooltip('Stops the current animation on the specified Sprite')
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Animation.html#stop');
    }
};

Blockly.Blocks['set_frame_vi'] = {
    init: function () {
        this.appendValueInput('FRAME_NUMBER')
            .appendField('set current frame # to');
        this.appendValueInput('OBJECT')
            .appendField('for');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setTooltip('Sets the current frame number on the specified object');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Animation.html#frame');
    }
};
//endregion


Blockly.Blocks['send_to_back'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("send");
        this.appendDummyInput()
            .appendField("to the back");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Sends this sprite/image to the back of the display order. In case of overlapping sprites, it will draw behind everything else.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#sendToBack');
    }
};

Blockly.Blocks['set_child_index'] = {
    init: function () {
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField("move the child");
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField("of")
            .appendField(new Blockly.FieldVariable("defaultObject"), "PARENT")
            .appendField("to index");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Moves the child to a specific index on its parent. This will affect how you find it in the future.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#setChildIndex');
    }
};

Blockly.Blocks['set_child_index_vi'] = {
    init: function () {
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField("move the child");
        this.appendValueInput('OBJECT')
            .appendField('of');
        this.appendValueInput("INDEX")
            .setCheck("Number")
            .appendField("to index");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Moves the child to a specific index on its parent. This will affect how you find it in the future.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#setChildIndex');
    }
};

Blockly.Blocks['set_sprite_frame'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("Set texture frame of");
        this.appendValueInput("FRAME")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("to");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Sets the Texture frame the Sprite uses for rendering. This is primarily an internal method used by Sprite.loadTexture, although you may call it directly.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#setFrame');
    }
};

Blockly.Blocks['set_scale_min_max'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("set scale constraints on");
        this.appendValueInput("MINX")
            .setCheck("Number")
            .appendField("min X");
        this.appendValueInput("MINY")
            .setCheck("Number")
            .appendField("min Y");
        this.appendValueInput("MAXX")
            .setCheck("Number")
            .appendField("max X");
        this.appendValueInput("MAXY")
            .setCheck("Number")
            .appendField("max Y");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Limits how far this sprite will scale based on its parent.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#setScaleMinMax');
    }
};

Blockly.Blocks['clear_scale_min_max'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("clear scale constraints on");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('If scaling constraints were set on a sprite, this removes them.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#setScaleMinMax');
    }
};

Blockly.Blocks['set_texture'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("Set texture of");
        this.appendValueInput("TEXTURE")
            .setCheck(null)
            .appendField("to");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Sets the texture of the sprite. Be warned that this doesn\'t remove or destroy the previous texture this Sprite was using. Note that this takes a specific texture, not a tag.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#setTexture');
    }
};

Blockly.Blocks['swap_children'] = {
    init: function () {
        this.appendValueInput("PARENT")
            .setCheck(null)
            .appendField("swap children of");
        this.appendValueInput("CHILD")
            .setCheck(null)
            .appendField("child 1");
        this.appendValueInput("CHILD2")
            .setCheck(null)
            .appendField("child 2");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('Swaps the indices of the given children. They must both be on the same parent.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#swapChildren');
        this.setInputsInline(true);
    }
};

Blockly.Blocks['get_animation_property'] = {
    init: function () {
        this.appendValueInput("SPRITE")
            .setCheck(null)
            .appendField("on gameobject");
        this.appendDummyInput()
            .appendField("get animation.")
            .appendField(new Blockly.FieldDropdown([["currentAnim", "currentAnim"], ["currentFrame", "currentFrame"], ["frame", "frame"], ["frameData", "frameData"], ["frameName", "frameName"], ["frameTotal", "frameTotal"], ["game", "game"], ["isLoaded", "isLoaded"], ["name", "name"], ["paused", "paused"], ["sprite", "sprite"], ["updateIfVisible", "updateIfVisible"]]), "FIELD");
        this.setOutput(true, null);
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setTooltip('Get a property on from the animaton manager on the object');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.AnimationManager.html#destroy');
    }
};

Blockly.Blocks['set_animation_property'] = {
    init: function () {
        this.appendValueInput("NEWPROPERTY")
            .setCheck(null)
            .appendField("set animation.")
            .appendField(new Blockly.FieldDropdown([["frame", "frame"], ["frameName", "frameName"], ["paused", "paused"], ["updateIfVisible", "updateIfVisible"]]), "FIELD")
            .appendField("on ")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT")
            .appendField("to");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setTooltip('Set a property from the animation manager on the object');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.AnimationManager.html#destroy');
    }
};

Blockly.Blocks['set_animation_property_vi'] = {
    init: function () {
        this.appendDummyInput("NEWPROPERTY")
            .appendField("set animation.")
            .appendField(new Blockly.FieldDropdown([["paused", "paused"], ["updateIfVisible", "updateIfVisible"]]), "FIELD");
        this.appendValueInput('OBJECT')
            .appendField("on ");
        this.appendDummyInput()
            .appendField("to")
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'VALUE');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_ANIMATION_COLOUR);
        this.setTooltip('Set a property from the animation manager on the object');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.AnimationManager.html#destroy');
    }
};

Blockly.Blocks['animation_get_animation'] = {
    init: function () {
        this.appendValueInput("Sprite")
            .setCheck(null)
            .appendField("on gameobject");
        this.appendDummyInput()
            .appendField("get animation by name")
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setOutput(true, null);
        this.setColour(PHASER_SPRITE_AND_IMAGES_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
//endregion

//region GROUP
Blockly.Blocks['create_group'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('create group');
        this.setOutput(true, null);
        this.setTooltip('Create a new group of display objects');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.GameObjectFactory.html#group');
        this.setColour(PHASER_GROUPS_COLOUR);
    }
};

Blockly.Blocks['create_object_in_group'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('create object at');
        this.appendValueInput('X_POS')
            .appendField('x');
        this.appendValueInput('Y_POS')
            .appendField('y');
        this.appendDummyInput()
            .appendField("from tag")
            .appendField(new Blockly.FieldTextInput("default"), "TAG")
            .appendField("in the")
            .appendField(new Blockly.FieldVariable("defaultGroup"), "GROUP")
            .appendField("group");
        this.setOutput(true, null);
        this.setTooltip('Create a new sprite in the group');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Group.html#create');
        this.setColour(PHASER_GROUPS_COLOUR);
    }
};

Blockly.Blocks['create_object_in_group_with_frame'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('create object at');
        this.appendValueInput('X_POS')
            .appendField('x');
        this.appendValueInput('Y_POS')
            .appendField('y');
        this.appendDummyInput()
            .appendField("from tag")
            .appendField(new Blockly.FieldTextInput("default"), "TAG")
            .appendField("in the")
            .appendField(new Blockly.FieldVariable("defaultGroup"), "GROUP")
            .appendField("group");
        this.appendValueInput('FRAME')
            .appendField('displaying frame #');
        this.setOutput(true, null);
        this.setTooltip('Creates a sprite in the new group using the specifed frame from a sprite sheet or texture atlas');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Group.html#create');
        this.setColour(PHASER_GROUPS_COLOUR);
    }
};

//endregion

//region PHYSICS

//region PHYSICS_STARTUP
Blockly.Blocks['start_physics'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("start")
            .appendField(new Blockly.FieldDropdown([["Arcade", "ARCADE"], ["P2JS", "P2JS"]]), "SYSTEM")
            .appendField("physics system");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Start physics with the specified system');
        this.setHelpUrl('http://www.example.com/');
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
            .appendField("start arcade physics system");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Start the specified arcade physics system');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.html#startSystem');
        this.setColour(PHASER_PHYSICS_STARTUP);
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.html#startSystem');
        this.setTooltip('Starts an arcade physics system');
    }
};

Blockly.Blocks['enable_body_group'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Enable Body for')
            .appendField(new Blockly.FieldVariable('defaultObject'), "object")
            .appendField('Group');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_PHYSICS_STARTUP);

    }
};

Blockly.Blocks['enable_body_group_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField('enable body for group');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_PHYSICS_STARTUP);
        this.setTooltip('Enable physics body on all sprites in or added to this group');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Group.html#enableBody');
    }
};

Blockly.Blocks['enable_arcade_physics_for_object'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('enable arcade physics for')
            .appendField(new Blockly.FieldVariable('defaultObject'), "object");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_PHYSICS_STARTUP);
        this.setTooltip('Enable physics for this object');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.html#enable');
    }
};

Blockly.Blocks['enable_arcade_physics_for_object_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField('enable arcade physics for sprite');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_PHYSICS_STARTUP);
        this.setTooltip('Enable physics for this sprite');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.html#enable')
    }
};
//endregion

//region COLLISION
Blockly.Blocks['collide_with_arrow_function'] = {
    init: function () {
        this.appendValueInput("OBJECTA")
            .setCheck(null)
            .appendField("collide");
        this.appendValueInput("OBJECTB")
            .setCheck(null)
            .appendField("with");
        this.appendStatementInput("CALLBACK")
            .setCheck(null)
            .appendField("if collided do");
        this.setInputsInline(true);
        this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
        this.setTooltip("Collide two objects, if they are collide do the statements in the block");
        this.setHelpUrl("https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.html#collide");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};
//endregion

//region BODY
Blockly.Blocks['set_body_field_point'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Set")
            .appendField(new Blockly.FieldDropdown([["bounce", "bounce"], ["gravity", "gravity"], ['velocity', 'velocity'], ['acceleration', 'acceleration'], ['drag', 'drag'], ['friction', 'friction'], ['maxVelocity', 'maxVelocity'], ['worldBounce', 'worldBounce']]), "FIELD")
            .appendField(new Blockly.FieldDropdown([["x", "x"], ["y", "y"]]), "ELEMENT")
            .appendField("for")
            .appendField(new Blockly.FieldVariable("item"), "OBJECT");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("to");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Set the x or y value of the specified field');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.Body.html');
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    }
};

Blockly.Blocks['set_body_field_point_vi'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("set")
            .appendField(new Blockly.FieldDropdown([["bounce", "bounce"], ["gravity", "gravity"], ['velocity', 'velocity'], ['acceleration', 'acceleration'], ['drag', 'drag'], ['friction', 'friction'], ['maxVelocity', 'maxVelocity'], ['worldBounce', 'worldBounce']]), "FIELD")
            .appendField(new Blockly.FieldDropdown([["x", "x"], ["y", "y"]]), "ELEMENT")
            .appendField("for");
        this.appendValueInput('OBJECT');
        this.appendValueInput("VALUE")
            .setCheck('Number')
            .appendField("to");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Set the x or y value of the specified field');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.Body.html');
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    }
};

Blockly.Blocks['set_body_field_point_class_vi'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("set")
            .appendField(new Blockly.FieldDropdown([["bounce", "bounce"], ["gravity", "gravity"], ['velocity', 'velocity'], ['acceleration', 'acceleration'], ['drag', 'drag'], ['friction', 'friction'], ['maxVelocity', 'maxVelocity'], ['worldBounce', 'worldBounce']]), "FIELD")
            .appendField("for");
        this.appendValueInput('OBJECT');
        this.appendValueInput('POINT')
            .appendField('to');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Set the value of the body point field');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.Body.html');
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    }
};

Blockly.Blocks['get_body_field_point_class'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('get')
            .appendField(new Blockly.FieldDropdown([["bounce", "bounce"], ["gravity", "gravity"], ['velocity', 'velocity'], ['acceleration', 'acceleration'], ['drag', 'drag'], ['friction', 'friction'], ['maxVelocity', 'maxVelocity'], ['worldBounce', 'worldBounce']]), "FIELD")
            .appendField('for');
        this.appendValueInput('OBJECT');
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('Gets the value of the specified point as a point object');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.Body.html');
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    }
};

Blockly.Blocks['set_body_boolean_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("set")
            .appendField(new Blockly.FieldDropdown([['allowRotation', 'allowRotation'], ['allowGravity', 'allowGravity'], ['immovable', 'immovable']]), "ELEMENT")
            .appendField("for");
        this.appendValueInput('OBJECT');
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'VALUE');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Set the value of the specified boolean field');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.Body.html');
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    }
};

Blockly.Blocks['get_body_boolean_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("get")
            .appendField(new Blockly.FieldDropdown([['allowRotation', 'allowRotation'], ['allowGravity', 'allowGravity'], ['immovable', 'immovable'], ['isMoving', 'isMoving']]), "ELEMENT")
            .appendField("for");
        this.appendValueInput('OBJECT');
        this.setInputsInline(true);
        this.setOutput(true, 'Boolean');
        this.setTooltip('Set the value of the specified boolean field');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.Body.html');
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    }
};


Blockly.Blocks['set_body_numeric_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("set")
            .appendField(new Blockly.FieldDropdown([['mass', 'mass'], ['rotation (degrees)', 'rotation'], ['maxVelocity', 'maxVelocity'], ['angularAcceleration', 'angularAcceleration'], ['angularVelocity', 'angularVelocity'], ['maxAngularVelocity', 'maxAngularVelocity'], ['angularDrag', 'angularDrag']]), "ELEMENT")
            .appendField("for");
        this.appendValueInput('OBJECT');
        this.appendValueInput('VALUE')
            .appendField('to')
            .setCheck('Number');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Set the value of the specified numeric field');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.Body.html');
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    }
};

Blockly.Blocks['get_body_numeric_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("get")
            .appendField(new Blockly.FieldDropdown([['speed', 'speed'], ['mass', 'mass'], ['rotation (degrees)', 'rotation'], ['maxVelocity', 'maxVelocity'], ['angularAcceleration', 'angularAcceleration'], ['angularVelocity', 'angularVelocity'], ['maxAngularVelocity', 'maxAngularVelocity'], ['angularDrag', 'angularDrag']]), "ELEMENT")
            .appendField("for");
        this.appendValueInput('OBJECT');
        this.setInputsInline(true);
        this.setOutput(true, 'Number');
        this.setTooltip('Get the value of the specified numeric field');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.Body.html');
        this.setColour(PHASER_PHYSICS_DYNAMICS);
    }
};
//endregion
Blockly.Blocks['call_function_on_group'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Call function')
            .appendField(new Blockly.FieldTextInput("functionName"), "FUNCTION");
        this.appendValueInput('GROUP')
            .appendField('on all children in group');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(PHASER_GROUPS_COLOUR);
    }
};
const PHYSICS_COLOUR = "#5A5C51";


Blockly.Blocks['acceleration_from_rotation'] = {
    init: function () {
        this.appendValueInput("rotation")
            .setCheck(null)
            .appendField("accelerate from");
        this.appendValueInput("speed")
            .setCheck(null)
            .appendField("at speed (pixels/second^2)");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PHYSICS_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};


Blockly.Blocks['set_immovable'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Set Immovable for Object")
            .appendField(new Blockly.FieldVariable("defaultGroup"), "BODY")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "IMMOVABLE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
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
            .appendField("Collide")
            .appendField(new Blockly.FieldVariable("defaultObject"), "LHS")
            .appendField("with")
            .appendField(new Blockly.FieldVariable("defaultObject"), "RHS");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Collide the first group/object with the second group/object');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(PHYSICS_COLOUR);
    }
};

Blockly.Blocks['collide_vi'] = {
    init: function () {
        this.appendValueInput('LHS')
            .appendField("collide");
        this.appendValueInput('RHS')
            .appendField("with");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Collide the first group/object with the second group/object');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.html#collide');
        this.setInputsInline(true);
        this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    }
};

Blockly.Blocks['is_body_touching'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("defaultObject"), "BODY")
            .appendField("touching")

            .appendField("?");
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(PHYSICS_COLOUR);
    }
};

Blockly.Blocks['is_body_touching_vi'] = {
    init: function () {
        this.appendValueInput('BODY');
        this.appendDummyInput()
            .appendField("is touching")
            .appendField(new Blockly.FieldDropdown([["Up", "up"], ["Down", "down"], ["Left", "left"], ["Right", "Right"], ["None", "none"]]), "DIRECTION")
            .appendField('?');
        this.setOutput(true, null);
        this.setTooltip('Check to see if the object is being touched in the given direction');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.Body.html#touching');
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
            .appendField("Collide")
            .appendField(new Blockly.FieldVariable("defaultObject"), "BODY")
            .appendField("with world bounds")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "COLLIDE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(PHYSICS_COLOUR);
    }
};


Blockly.Blocks['collide_with_world_bounds_vi'] = {
    init: function () {
        this.appendValueInput('BODY')
            .appendField('make');
        this.appendDummyInput()
            .appendField("collide with world bounds");
        this.appendDummyInput()
            .appendField(new Blockly.FieldCheckbox("TRUE"), "COLLIDE");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setInputsInline(true);
        this.setTooltip('Make this object collide with the world bounds');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Ninja.Body.html#collideWorldBounds');
        this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    }
};


Blockly.Blocks['check_overlap_vi'] = {
    init: function () {
        this.appendValueInput('LHS')
            .appendField("check overlap between");
        this.appendValueInput('RHS')
            .appendField("and");
        this.appendDummyInput()
            .appendField("calling")
            .appendField(new Blockly.FieldTextInput("functionName"), "NAME")
            .appendField("if overlapping");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Check for overlap between objectA and objectB');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.html#overlap');
        this.setColour(PHASER_PHYSICS_COLLISION_COLOUR);
    }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.check_overlap.init}}
 */
Blockly.Blocks['check_overlap'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Check Overlap Between")
            .appendField(new Blockly.FieldVariable("defaultObject"), "LHS")
            .appendField("and")
            .appendField(new Blockly.FieldVariable("defaultObject"), "RHS")
            .appendField("calling")
            .appendField(new Blockly.FieldTextInput("functionName"), "NAME")
            .appendField("if overlapping");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
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
            .appendField("move game object");
        this.appendValueInput("SPEED")
            .setCheck("Number")
            .appendField("to mouse pointer at");
        this.appendDummyInput()
            .appendField("pixels per second");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_PHYSICS_DYNAMICS);
        this.setTooltip('Move the object to the pointer at the given speed');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.html#moveToPointer');
    }
};

Blockly.Blocks['move_to_pointer_extended'] = {
    init: function () {
        this.appendValueInput("GAMEOBJECT")
            .setCheck(null)
            .appendField("move game object");
        this.appendValueInput("SPEED")
            .setCheck("Number")
            .appendField("to mouse pointer at");
        this.appendDummyInput()
            .appendField("pixels per second");
        this.appendValueInput('MAXIMUM_TIME')
            .appendField('max time (ms)');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_PHYSICS_DYNAMICS);
        this.setTooltip('Move the object to the pointer at the given speed');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.html#moveToPointer');
    }
};

Blockly.Blocks['move_to_object'] = {
    init: function () {
        this.appendValueInput("GAMEOBJECT")
            .setCheck(null)
            .appendField("move game object");
        this.appendValueInput('OBJECT')
            .appendField('to object');
        this.appendValueInput("SPEED")
            .setCheck("Number")
            .appendField("at");
        this.appendDummyInput()
            .appendField("pixels per second");
        this.appendValueInput('MAXIMUM_TIME')
            .appendField('max time (ms)');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_PHYSICS_DYNAMICS);
        this.setTooltip('Move the object to the given object at the given speed');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Physics.Arcade.html#moveToObject');
    }
};
//endregion

//region INPUT
const INPUT_COLOUR = 300;

Blockly.Blocks['create_cursor_keys'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Create Cursor Keys');
        this.setOutput(true, null);
        this.setTooltip('Create a cursor allowing access to the UP/DOWN/LEFT/RIGHT keys');
        this.setColour(INPUT_COLOUR);
    }
};

Blockly.Blocks['is_key_down'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("key")
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
            .appendField("is down?");
        this.setOutput(true, 'Boolean');
        this.setTooltip('Checks if the given key is down');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Keyboard.html#isDown');
        this.setColour(PHASER_KEYBOARD_INPUT);
    }
};
//endregion

//region WORLD
Blockly.Blocks['get_world_property'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("get")
            .appendField(new Blockly.FieldDropdown([["height", "height"], ["width", "width"], ["center x", "centerX"], ["center y", "centerY"], ["random x", "randomX"], ["random y", "randomY"]]), "NAME")
            .appendField("of the world");
        this.setOutput(true, null);
        this.setTooltip('Get a property of the world');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.World.html');
        this.setColour(PHASER_WORLD_COLOUR);
    }
};

Blockly.Blocks['set_world_bounds'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('set world bounds');
        this.appendValueInput('X_POS')
            .setCheck("Number")
            .appendField("x:");
        this.appendValueInput("Y_POS")
            .setCheck("Number")
            .appendField("y:");
        this.appendValueInput('WIDTH')
            .setCheck("Number")
            .appendField("width:");
        this.appendValueInput("HEIGHT")
            .setCheck("Number")
            .appendField("height:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('Updates the size of the world and sets the leftmost corner');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.World.html#setBounds');
        this.setColour(PHASER_WORLD_COLOUR);
        this.setInputsInline(true);
    }
};

Blockly.Blocks['create_point'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Create Point');
        this.appendValueInput('X_POS')
            .setCheck("Number")
            .appendField("X:");
        this.appendValueInput("Y_POS")
            .setCheck("Number")
            .appendField("Y:");
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(PHASER_WORLD_COLOUR);
    }
};

//endregion

//region GAME OBJECT
const GAME_OBJECT_COLOUR = 60;

const GAME_OBJECT_POINT_WRITABLE = ['position', 'anchor', 'cameraOffset', 'scaleMax', 'scaleMin', 'world', 'scale'];
const GAME_OBJECT_POINT_READABLE = ['previousPoint'];
const GAME_OBJECT_POINT_FIELDS = createDropDownField(GAME_OBJECT_POINT_WRITABLE, GAME_OBJECT_POINT_READABLE);

const GAME_OBJECT_BOOLEAN_WRITABLE = ['alive', 'checkWorldBounds', 'debug', 'exists', 'fixedToCamera', 'outOfBoundsKill', 'outOfCameraBoundsKill'];
const GAME_OBJECT_BOOLEAN_READONLY = ['destroyPhase', 'inCamera', 'inWorld', 'pendingDestroy'];
const GAME_OBJECT_BOOLEAN_FIELDS = createDropDownField(GAME_OBJECT_BOOLEAN_WRITABLE, GAME_OBJECT_BOOLEAN_READONLY);

const GAME_OBJECT_NUMERIC_WRITABLE = ['x', 'y', 'angle', 'health', 'height', 'width', 'lifespan', 'maxHealth'];
const GAME_OBJECT_NUMERIC_READONLY = ['bottom', 'top', 'left', 'right', 'centerX', 'centerY', 'deltaX', 'deltaY', 'deltaZ', 'offsetX', 'offsetY', 'previousRotation', 'z'];
const GAME_OBJECT_NUMERIC_FIELDS = createDropDownField(GAME_OBJECT_NUMERIC_WRITABLE, GAME_OBJECT_NUMERIC_READONLY);

Blockly.Blocks['set_game_object_point_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('set point field')
            .appendField(new Blockly.FieldDropdown(GAME_OBJECT_POINT_FIELDS.writable), 'PROPERTY');
        this.appendValueInput('OBJECT')
            .appendField('of');
        this.appendValueInput('POINT')
            .appendField('to');
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('Set a point property on the object');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html');
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
    }
};

Blockly.Blocks['get_game_object_point_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('get point field')
            .appendField(new Blockly.FieldDropdown(GAME_OBJECT_POINT_FIELDS.all), 'PROPERTY');
        this.appendValueInput('OBJECT')
            .appendField('of');
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('Get a point property on the object');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html');
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
    }
};

Blockly.Blocks['set_game_object_numeric_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('set numeric field')
            .appendField(new Blockly.FieldDropdown(GAME_OBJECT_NUMERIC_FIELDS.writable), 'PROPERTY');
        this.appendValueInput('OBJECT')
            .appendField('of');
        this.appendValueInput('VALUE')
            .appendField('to');
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('Set a numeric property on the object');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html');
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
    }
};

Blockly.Blocks['get_game_object_numeric_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('get numeric field')
            .appendField(new Blockly.FieldDropdown(GAME_OBJECT_NUMERIC_FIELDS.all), 'PROPERTY');
        this.appendValueInput('OBJECT')
            .appendField('of');
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('Get a numeric property on the object');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html');
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
    }
};

Blockly.Blocks['set_game_object_boolean_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('set boolean field')
            .appendField(new Blockly.FieldDropdown(GAME_OBJECT_BOOLEAN_FIELDS.writable), 'PROPERTY');
        this.appendValueInput('OBJECT')
            .appendField('of');
        this.appendDummyInput()
            .appendField('to')
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'BOOLEAN');
        this.setInputsInline(true);
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('Set a boolean property on the object');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html');
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
    }
};

Blockly.Blocks['get_game_object_boolean_field'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('get boolean field')
            .appendField(new Blockly.FieldDropdown(GAME_OBJECT_BOOLEAN_FIELDS.all), 'PROPERTY');
        this.appendValueInput('OBJECT')
            .appendField('of');
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('Get a boolean property on the object');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html');
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
    }
};


Blockly.Blocks['set_object_anchor'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField('set anchor for');
        this.appendDummyInput()
            .appendField('to');
        this.appendValueInput('X_POS')
            .setCheck("Number")
            .appendField("x");
        this.appendValueInput("Y_POS")
            .setCheck("Number")
            .appendField("y");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
    }
};

Blockly.Blocks['kill_object'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField('kill');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
    }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.set_scale.init}}
 */
Blockly.Blocks['set_scale'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Scale')
            .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT')
            .appendField('by');
        this.appendValueInput('SCALE_X')
            .appendField('X');
        this.appendValueInput('SCALE_Y')
            .appendField('Y');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(GAME_OBJECT_COLOUR);
    }
};

Blockly.Blocks['set_scale_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField('scale');
        this.appendDummyInput()
            .appendField('by');
        this.appendValueInput('SCALE_X')
            .appendField('x');
        this.appendValueInput('SCALE_Y')
            .appendField('y');
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
    }
};

Blockly.Blocks['set_pos'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField('Set')
            .appendField(new Blockly.FieldDropdown([["x", "x"], ["y", "y"]]), "PARAM")
            .appendField('on');
        this.appendValueInput('VALUE')
            .appendField('to');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(GAME_OBJECT_COLOUR);
    }
};
Blockly.Blocks['object_set_to'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("for")
            .appendField(new Blockly.FieldVariable("object"), "OBJECT");
        this.appendValueInput("setx")
            .setCheck("Number")
            .appendField("set X To");
        this.appendValueInput("sety")
            .setCheck("Number")
            .appendField("set Y To");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(GAME_OBJECT_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['set_velocity'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField('Set Velocity')
            .appendField(new Blockly.FieldDropdown([["x", "body.velocity.x"],
                ["y", "body.velocity.y"],
                ["Angular", "body.angularVelocity"]]), "PARAM")
            .appendField('on');
        this.appendValueInput('VALUE')
            .appendField('to');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(GAME_OBJECT_COLOUR);
    }
};

Blockly.Blocks['get_param'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField('Get')
            .appendField(new Blockly.FieldDropdown([["x", "x"],
                ["y", "y"],
                ["Width", "width"],
                ["Height", "height"],
                ["Velocity x", "body.velocity.x"],
                ["Velocity y", "body.velocity.y"],
                ["Angular Velocity", "body.angularVelocity"]]), "PARAM")
            .appendField('from object');
        this.setOutput(true, null);
        this.setColour(GAME_OBJECT_COLOUR);
    }
};

Blockly.Blocks['object_inCamera'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField('Is');
        this.appendDummyInput()
            .appendField('in camera');
        this.setOutput(true, null);
        this.setColour(GAME_OBJECT_COLOUR);
    }
};
Blockly.Blocks['get_camera'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("get camera");
        this.setOutput(true, null);
        this.setColour(GAME_OBJECT_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.camera_follow.init}}
 */
Blockly.Blocks['camera_follow'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("make camera follow")
            .appendField(new Blockly.FieldVariable("object"), "OBJECT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
        this.setTooltip('Make the camera follow the specified game object');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['get_bounds'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("Get bounds of");
        this.setOutput(true, null);
        this.setColour(GAME_OBJECT_COLOUR);
        this.setTooltip('Gets the rectangular bounds of most objects in the game.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#getBounds');
    }
};

Blockly.Blocks['get_rotation'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .appendField("get rotation");
        this.setOutput(true, "Number");
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
        this.setTooltip('Finds the rotation (in degrees) of a Game Object.');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Sprite.html#angle');
    }
};

Blockly.Blocks['rotate'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("rotate");
        this.appendValueInput("ANGLE")
            .setCheck("Number")
            .appendField("by");
        this.appendDummyInput()
            .appendField("degrees");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
        this.setTooltip('Rotates a game object by the given angle in degrees. Negative numbers will rotate it the opposite direction.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#angle');
    }
};

Blockly.Blocks['set_rotation'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("set the rotation of");
        this.appendValueInput("ROTATION")
            .setCheck(null)
            .appendField("to");
        this.appendDummyInput()
            .appendField("degrees");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
        this.setTooltip('Directly sets the rotation (in degrees) of this game object to the given value.');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Sprite.html#angle');
    }
};

Blockly.Blocks['get_local_bounds'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("get local bounds of");
        this.setOutput(true, null);
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
        this.setTooltip('Gets the rectangular bounds of an object. Bounds are relative to the object itself instead of the world.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#getLocalBounds');
    }
};

Blockly.Blocks['reset'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("reset object");
        this.appendValueInput("X_POS")
            .setCheck(null)
            .appendField("x");
        this.appendValueInput("Y_POS")
            .setCheck(null)
            .appendField("y");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
        this.setTooltip('Gets most objects ready to play again in various ways and treats it like new. Specifically, moves it to a new position then makes sure it is visible, rendering, alive, and actually exists in the game world.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#reset');
    }
};

Blockly.Blocks['revive'] = {
    init: function () {
        this.appendValueInput("OBJECT")
            .setCheck(null)
            .appendField("revive");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_GAMEOBJECT_COLOUR);
        this.setTooltip('Brings a "dead" Game Object back to life. Makes sure it counts as alive, existing, and visible. Will send an event named onRevived.');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#revive');
    }
};
//endregion

//region TEXT

Blockly.Blocks['add_text'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("add text at");
        this.appendValueInput("X_POS")
            .setCheck("Number")
            .appendField("x");
        this.appendValueInput("Y_POS")
            .setCheck("Number")
            .appendField("y");
        this.appendValueInput("INITIAL_TEXT")
            .setCheck("String")
            .appendField("initial text");
        this.appendValueInput("FONT_SIZE")
            .setCheck("Number")
            .appendField("font size");
        this.appendDummyInput()
            .appendField("font colour")
            .appendField(new Blockly.FieldColour("#ff0000"), "FILL");
        this.setOutput(true, null);
        this.setInputsInline(false);
        this.setTooltip('Add text to the screen at the specified location');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.GameObjectFactory.html#text');
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
            .appendField("set text for")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("to");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(PHASER_TEXT_COLOUR);
    }
};

Blockly.Blocks['set_text_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField("set text for");
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("to");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(PHASER_TEXT_COLOUR);
    }
};

Blockly.Blocks['create_bitmapFont'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Create Font');
        this.appendValueInput('TAG')
            .appendField('Tag')
            .setCheck('String');
        this.appendValueInput('SRC')
            .appendField('Source')
            .setCheck('String');
        this.appendValueInput('XML')
            .appendField('XML')
            .setCheck('String');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_TEXT_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
//endregion

Blockly.Blocks['drawcircle'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Draw Circle");
        this.appendValueInput("X")
            .setCheck("Number")
            .appendField("X:");
        this.appendValueInput("Y")
            .setCheck("Number")
            .appendField("Y:");
        this.appendValueInput("DIAMETER")
            .setCheck("Number")
            .appendField("with Diameter");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(180);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['get_object_width'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("get width of ")
            .appendField(new Blockly.FieldVariable("item"), "NAME");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['set_object_width'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("set width of ")
            .appendField(new Blockly.FieldVariable("item"), "NAME");
        this.appendValueInput("NAME")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

//region EMITTER
const PARTICLE_COLOUR = '#80cbc4';

Blockly.Blocks['addemitter'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("add emitter");
        this.appendValueInput("X")
            .setCheck("Number")
            .appendField("x");
        this.appendValueInput("Y")
            .setCheck("Number")
            .appendField("y");
        this.appendValueInput("maxParticles")
            .setCheck("Number")
            .appendField("maxParticles");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('Create a particle emitter');
        this.setHelpUrl('http://phaser.io/docs/2.4.2/Phaser.Particles.Arcade.Emitter.html');
    }
};


Blockly.Blocks['emitter_make_particles'] = {
    init: function () {
        this.appendValueInput('EMITTER')
            .appendField('on emitter');
        this.appendDummyInput()
            .appendField('make particles');
        this.appendValueInput('KEYS')
            .appendField('keys')
            .setCheck(['Array', 'String']);
        this.appendValueInput('FRAMES')
            .appendField('frames')
            .setCheck(['Array', 'Number']);
        this.appendValueInput('QUANTITY')
            .appendField('quantity')
            .setCheck('Number');
        this.appendDummyInput()
            .appendField('collide')
            .appendField(new Blockly.FieldCheckbox('FALSE'), 'COLLIDE');
        this.appendDummyInput()
            .appendField('collide world')
            .appendField(new Blockly.FieldCheckbox('FALSE'), 'COLLIDEWORLDBOUNDS');
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setInputsInline(false);
        this.setColour(PARTICLE_COLOUR);
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Particles.Arcade.Emitter.html#makeParticles');
        this.setTooltip('Generate a new set of particles for this emitter')
    }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_make_particles.init}}
 */
Blockly.Blocks['emitters_make_particles'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("on emitter")
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField("make particles from")
            .appendField(new Blockly.FieldTextInput("image tag"), "TAG");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_set_rotation.init}}
 */
Blockly.Blocks['emitters_set_rotation'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("on emitter,")
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField("set rotation:");
        this.appendValueInput("NAME")
            .setCheck("Number")
            .appendField("min");
        this.appendValueInput("NAME")
            .setCheck("Number")
            .appendField("max");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['emitters_set_rotation_vi'] = {
    init: function () {
        this.appendValueInput('EMITTER')
            .appendField("on emitter");
        this.appendDummyInput()
            .appendField("set min/max angular velocity");
        this.appendValueInput("MIN")
            .setCheck("Number")
            .appendField("min");
        this.appendValueInput("MAX")
            .setCheck("Number")
            .appendField("max");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('Set the angular velocity constraints of the particles');
        this.setHelpUrl('http://phaser.io/docs/2.4.2/Phaser.Particles.Arcade.Emitter.html#setRotation');
    }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_start.init}}
 */
Blockly.Blocks['emitters_start'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("on emitter,")
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField("start:");
        this.appendValueInput("EXPLODE")
            .setCheck("Boolean")
            .appendField("Should Burst?");
        this.appendValueInput("LIFESPAN")
            .setCheck("Number")
            .appendField("Lifespan");
        this.appendValueInput("FREQUENCY")
            .setCheck("Number")
            .appendField("Frequency");
        this.appendValueInput("QUANTITY")
            .setCheck("Number")
            .appendField("Quantity");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['emitters_start_vi'] = {
    init: function () {
        this.appendValueInput('EMITTER')
            .appendField("start emitter,")
        this.appendDummyInput()
            .appendField('explode')
            .appendField(new Blockly.FieldCheckbox('TRUE'), 'EXPLODE');
        this.appendValueInput("LIFESPAN")
            .setCheck("Number")
            .appendField("lifespan (ms)");
        this.appendValueInput("FREQUENCY")
            .setCheck("Number")
            .appendField("frequency (ms)");
        this.appendValueInput("QUANTITY")
            .setCheck("Number")
            .appendField("quantity");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('Start emitting particles');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Particles.Arcade.Emitter.html#start');
    }
};

/**
 * @deprecated
 * @type {{init: Blockly.Blocks.emitters_set_alpha.init}}
 */
Blockly.Blocks['emitters_set_alpha'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("on emitter,")
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField("set Alpha:");
        this.appendValueInput("MIN")
            .setCheck("Number")
            .appendField("min");
        this.appendValueInput("MAX")
            .setCheck("Number")
            .appendField("max");
        this.appendValueInput("RATE")
            .setCheck("Number")
            .appendField("rate");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['emitters_set_alpha_vi'] = {
    init: function () {
        this.appendValueInput('EMITTER')
            .appendField("on emitter,");
        this.appendDummyInput()
            .appendField("set alpha");
        this.appendValueInput("MIN")
            .setCheck("Number")
            .appendField("min");
        this.appendValueInput("MAX")
            .setCheck("Number")
            .appendField("max");
        this.appendValueInput("RATE")
            .setCheck("Number")
            .appendField("rate");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('Set the min and max alpha values for this emitter');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Particles.Arcade.Emitter.html#setAlpha');
    }
};

Blockly.Blocks['emitters_set_scale'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("on emitter,")
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField("set Scale:");
        this.appendValueInput("MINX")
            .setCheck("Number")
            .appendField("min X");
        this.appendValueInput("MAXX")
            .setCheck("Number")
            .appendField("max X");
        this.appendValueInput("MINY")
            .setCheck("Number")
            .appendField("min Y");
        this.appendValueInput("MAXY")
            .setCheck("Number")
            .appendField("max Y");
        this.appendValueInput("RATE")
            .setCheck("Number")
            .appendField("rate");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['emitters_set_scale_vi'] = {
    init: function () {
        this.appendValueInput('EMITTER')
            .appendField("on emitter,");
        this.appendDummyInput()
            .appendField("set scale");
        this.appendValueInput("MINX")
            .setCheck("Number")
            .appendField("min x");
        this.appendValueInput("MAXX")
            .setCheck("Number")
            .appendField("max x");
        this.appendValueInput("MINY")
            .setCheck("Number")
            .appendField("min y");
        this.appendValueInput("MAXY")
            .setCheck("Number")
            .appendField("max y");
        this.appendValueInput("RATE")
            .setCheck("Number")
            .appendField("rate");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('Set the minimum/maximum scale for particles and the rate to go between');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Particles.Arcade.Emitter.html#setScale');
    }
};

Blockly.Blocks['set_emit_from'] = {
    init: function () {
        this.appendValueInput("Object")
            .setCheck(null)
            .appendField("on");
        this.appendDummyInput()
            .appendField("set emit from")
            .appendField(new Blockly.FieldDropdown([["X", "X"], ["Y", "Y"]]), "cord")
            .appendField("to");
        this.appendValueInput("emit_loc")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['emitters_set_speed'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("on emitter,")
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField("set Speed:");
        this.appendValueInput("MINX")
            .setCheck("Number")
            .appendField("min X");
        this.appendValueInput("MAXX")
            .setCheck("Number")
            .appendField("max X");
        this.appendValueInput("MINY")
            .setCheck("Number")
            .appendField("min Y");
        this.appendValueInput("MAXY")
            .setCheck("Number")
            .appendField("max Y");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['emitters_set_speed_vi'] = {
    init: function () {
        this.appendValueInput('EMITTER')
            .appendField("on emitter");
        this.appendDummyInput()
            .appendField("set speed");
        this.appendValueInput("MINX")
            .setCheck("Number")
            .appendField("min x");
        this.appendValueInput("MAXX")
            .setCheck("Number")
            .appendField("max x");
        this.appendValueInput("MINY")
            .setCheck("Number")
            .appendField("min y");
        this.appendValueInput("MAXY")
            .setCheck("Number")
            .appendField("max y");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['emitters_set_gravity'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("on emitter,")
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField("set Gravity:");
        this.appendValueInput("GRAVITY")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['emitters_set_gravity_vi'] = {
    init: function () {
        this.appendValueInput('EMITTER')
            .appendField("on emitter");
        this.appendDummyInput()
            .appendField("set gravity:");
        this.appendValueInput("GRAVITY")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('Set the gravity of generated particles');
        this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Particles.Arcade.Emitter.html#gravity');
    }
};

Blockly.Blocks['emitters_set_width'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("on emitter,")
            .appendField(new Blockly.FieldVariable("emitter"), "EMITTER")
            .appendField("set width:");
        this.appendValueInput("WIDTH")
            .setCheck("Number");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PARTICLE_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
//endregion

//region UTILITY
Blockly.Blocks['debug_sprite'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField("write debug for sprite");
        this.appendValueInput("X_VAL")
            .setCheck("Number")
            .appendField("at x");
        this.appendValueInput("Y_VAL")
            .setCheck("Number")
            .appendField("y");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_UTILITY_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
//endregion

//region STATES
Blockly.Blocks['statemanager_add_state'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("add state");
        this.appendDummyInput()
            .appendField('tagged')
            .appendField(new Blockly.FieldTextInput("tag"), "KEY")
            .appendField("to state manager");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_STATES_COLOUR);
        this.setTooltip('Adds a state to the game engine, this should be an instance of a state class.');
        //TODO: This will need supporting documentation on or side illustrating how to create this class with blocks
        // this.setHelpUrl('')
    }
};

Blockly.Blocks['statemanager_start_state'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("start state with tag")
            .appendField(new Blockly.FieldTextInput("tag"), "TAG");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_STATES_COLOUR);
        this.setTooltip('Start the specified state, this should be a state that has been added to the game engine');
        this.setHelpUrl('https://phaser.io/docs/2.4.4/Phaser.StateManager.html#start');
    }
};
//endregion

//region GEOMETRY

//region RECTANGLE
Blockly.Blocks['rectangle_create'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('make rectangle');
        this.appendValueInput('X')
            .appendField('x');
        this.appendValueInput('Y')
            .appendField('y');
        this.appendValueInput('WIDTH')
            .appendField('width');
        this.appendValueInput('HEIGHT')
            .appendField('height');
        this.setInputsInline(true);
        this.setColour(PHASER_GEOMETRY_COLOUR);
        this.setTooltip('Defines a rectangle, can be used for cropping, alignment and other tasks');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Rectangle.html');
        this.setOutput(true);
    }
};
//endregion

//region POINT
Blockly.Blocks['point_create'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('make point');
        this.appendValueInput('X')
            .appendField('x');
        this.appendValueInput('Y')
            .appendField('y');
        this.setInputsInline(true);
        this.setColour(PHASER_GEOMETRY_COLOUR);
        this.setTooltip('Defines a point which represents a location in 2D');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Point.html');
        this.setOutput(true);
    }
};


Blockly.Blocks['point_get_element'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('get point.');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([['x', 'x'], ['y', 'y']]), 'ELEMENT')
        this.appendDummyInput()
            .appendField('of');
        this.appendValueInput('POINT');
        this.setInputsInline(true);
        this.setColour(PHASER_GEOMETRY_COLOUR);
        this.setTooltip('Defines a point which represents a location in 2D');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Point.html');
        this.setOutput(true);
    }
};


Blockly.Blocks['point_set_element'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('set point.');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([['x', 'x'], ['y', 'y']]));
        this.appendDummyInput()
            .appendField('of');
        this.appendValueInput('POINT');
        this.appendValueInput('VALUE')
            .appendField('to')
            .setCheck('Number');
        this.setInputsInline(true);
        this.setColour(PHASER_GEOMETRY_COLOUR);
        this.setTooltip('Defines a point which represents a location in 2D');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Point.html');
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
    }
};
//endregion

//endregion

//region CAMERA
//region CAMERA.METHODS
Blockly.Blocks['camera_follow_vi'] = {
    init: function () {
        this.appendValueInput('OBJECT')
            .appendField("make camera follow")
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHASER_CAMERA_COLOUR);
        this.setTooltip('Make the camera follow the specified game object');
        this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Camera.html#follow');
    }
};
//endregion
//endregion