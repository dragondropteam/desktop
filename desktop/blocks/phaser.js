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

const PHASER_COLOUR = 120;

//region STARTUP
Blockly.Blocks['phaser_simple_init'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Run Phaser");
        this.appendDummyInput()
            .appendField("Width:")
            .appendField(new Blockly.FieldNumber(800), "WIDTH")
            .appendField("Height")
            .appendField(new Blockly.FieldNumber(600), "HEIGHT");
        this.appendStatementInput("PRELOAD")
            .setCheck(null)
            .appendField("On Preload Do");
        this.appendStatementInput("CREATE")
            .setCheck(null)
            .appendField("On Create Do");
        this.appendStatementInput("UPDATE")
            .setCheck(null)
            .appendField("On Update Do");
        this.setColour(PHASER_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
    }
};

Blockly.Blocks['start_phaser_for_states'] = {
    init: function() {
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
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['center_and_stretch'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("center and stretch phaser");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
//endregion

//region STEPPING
const STEPPING_COLOUR = 128;

Blockly.Blocks['enable_step'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Enable Stepping');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(STEPPING_COLOUR);
    }
};

Blockly.Blocks['disable_step'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Disable Stepping');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(STEPPING_COLOUR);
    }
};

Blockly.Blocks['step'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Step');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(STEPPING_COLOUR);
    }
};

//endregion


//region DRAWPRIMITIVES

Blockly.Blocks['create_graphics_object'] = {
  init: function() {
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
  init: function() {
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
  init: function() {
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

//region SPRITE/IMAGE
const SPRITES_COLOUR = 235;

Blockly.Blocks['create_image'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Create Image');
        this.setColour(PHASER_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
        this.appendValueInput('TAG')
            .appendField('Tag')
            .setCheck('String');
        this.appendValueInput('SRC')
            .appendField('Source')
            .setCheck('String');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(SPRITES_COLOUR);
    }
};

Blockly.Blocks['create_sprite_sheet'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Create Sprite Sheet');
        this.setColour(PHASER_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
        this.appendValueInput('TAG')
            .appendField('Tag')
            .setCheck('String');
        this.appendValueInput('SRC')
            .appendField('Source')
            .setCheck('String');
        this.appendDummyInput()
            .appendField('Frame Width')
            .appendField(new Blockly.FieldNumber(0), "FRAME_WIDTH")
            .appendField('Pixels');
        this.appendDummyInput()
            .appendField('Frame Height')
            .appendField(new Blockly.FieldNumber(0), "FRAME_HEIGHT")
            .appendField('Pixels');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(SPRITES_COLOUR);
    }
};

Blockly.Blocks['add_image'] = {
  init: function() {
      this.appendDummyInput()
          .appendField('Add Image to Game at');
      this.appendValueInput('X_POS')
          .appendField('X')
          .setCheck('Number');
      this.appendValueInput('Y_POS')
          .appendField('Y')
          .setCheck('Number');
      this.appendValueInput('TAG')
          .appendField('Tagged')
          .setCheck('String');
      this.setOutput(true, null);
      this.setColour(SPRITES_COLOUR);
  }
};
Blockly.Blocks['addspritewithatlas'] = {
  init: function() {
      this.appendDummyInput()
          .appendField("Load Atlas Image");
      this.appendValueInput("tag")
          .setCheck("String")
          .appendField("tag");
      this.appendValueInput("text_source")
          .setCheck("String")
          .appendField("spritesheet ");
      this.appendValueInput("text_xmlsource")
          .setCheck("String")
          .appendField("Texture Atlas XML");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setColour(SPRITES_COLOUR);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };
  Blockly.Blocks['imagesubtextureatlas'] = {
    init: function() {
      this.appendDummyInput()
          .appendField("Add Atlas Image with Subtexture");
      this.appendValueInput("x")
          .setCheck("Number")
          .appendField("X");
      this.appendValueInput("y")
          .setCheck("Number")
          .appendField("Y");
      this.appendValueInput("spritesource")
          .setCheck("String")
          .appendField("spritesheet ");
      this.appendValueInput("xmlsubtexture")
          .setCheck("String")
          .appendField("Atlas Subtexture");
      this.setOutput(true, null);
      this.setColour(SPRITES_COLOUR);
      this.setTooltip('');
      this.setHelpUrl('');
    }
  };

Blockly.Blocks['add_animation'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Add Animation To")
            .appendField(new Blockly.FieldVariable("defaultObject"), "object");
        this.appendDummyInput()
            .appendField("Tagged")
            .appendField(new Blockly.FieldTextInput("name"), "NAME");
        this.appendValueInput("FRAMES")
            .setCheck(null)
            .appendField("With frames");
        this.appendDummyInput()
            .appendField("Displayed at")
            .appendField(new Blockly.FieldNumber(60), "FPS")
            .appendField("FPS");
        this.appendDummyInput()
            .appendField("Loop")
            .appendField(new Blockly.FieldCheckbox("TRUE"), "LOOP");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(SPRITES_COLOUR);
    }
};

Blockly.Blocks['play_animation'] = {
    init: function(){
        this.appendDummyInput()
            .appendField('Play Animation');
        this.appendValueInput('ANIMATION');
        this.appendDummyInput()
            .appendField('on')
            .appendField(new Blockly.FieldVariable('defaultObject'), "OBJECT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(SPRITES_COLOUR);
    }
};

Blockly.Blocks['animation_next'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("increment current animation by")
        .appendField(new Blockly.FieldNumber(1, 1), "FRAMECOUNT")
        .appendField("on ")
        .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['animation_previous'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("decrement current animation by")
        .appendField(new Blockly.FieldNumber(1, 1), "FRAMECOUNT")
        .appendField("on ")
        .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['refresh_frame'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("refresh frame of ")
        .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['animation_update'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("frame update of ")
        .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
    this.setOutput(true, "Boolean");
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['validate_frames'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("validate animation frames of ")
        .appendField(new Blockly.FieldVariable("defaultObject"), "Object");
    this.appendValueInput("FRAMES")
        .setCheck("Array")
        .appendField("array of frames");
    this.setOutput(true, "Boolean");
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['animation_destroy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("destroy all animations in animation manager of ")
        .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['stop_animation'] = {
    init: function(){
        this.appendDummyInput()
            .appendField('Stop Animation on')
            .appendField(new Blockly.FieldVariable('defaultObject'), "OBJECT");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(SPRITES_COLOUR);
    }
};

Blockly.Blocks['set_frame'] = {
    init: function(){
        this.appendValueInput('FRAME_NUMBER')
        .appendField('Set Current Frame # For')
            .appendField(new Blockly.FieldVariable('defaultObject'), 'OBJECT');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(SPRITES_COLOUR);
    }
};

Blockly.Blocks['add_child'] = {
  init: function() {
    this.appendValueInput("CHILD")
        .setCheck(null)
        .appendField("Add child object");
    this.appendDummyInput()
        .appendField("to")
        .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Add a child to a sprite. This will make them move together.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#addChild');
  }
};

Blockly.Blocks['add_child_at'] = {
  init: function() {
    this.appendValueInput("CHILD")
        .setCheck(null)
        .appendField("Add child");
    this.appendValueInput("INDEX")
        .setCheck("Number")
        .appendField("to")
        .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT")
        .appendField("at index");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Add a child to a sprite at a specific index so you can find it later. This will make them move together.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#addChildAt');
  }
};

Blockly.Blocks['align_in'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Align");
    this.appendValueInput("CONTAINER")
        .setCheck(null)
        .appendField("Inside");
    this.appendDummyInput()
        .appendField("At the")
        .appendField(new Blockly.FieldDropdown([["top left","TOP_LEFT"], ["top center","TOP_CENTER"], ["top right","TOP_RIGHT"], ["left center","LEFT_CENTER"], ["center","CENTER"], ["right center","RIGHT_CENTER"], ["bottom left","BOTTOM_LEFT"], ["bottom center","BOTTOM_CENTER"], ["bottom right","BOTTOM_RIGHT"]]), "POSITION");
    this.appendValueInput("OFFSETX")
        .setCheck("Number")
        .appendField("Spacing X");
    this.appendValueInput("OFFSETY")
        .setCheck("Number")
        .appendField("Spacing Y");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Aligns this Game Object within another Game Object, or Rectangle, to one of 9 possible positions.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#alignIn');
  }
};

Blockly.Blocks['align_to'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Align");
    this.appendValueInput("CONTAINER")
        .setCheck(null)
        .appendField("To");
    this.appendDummyInput()
        .appendField("At the")
        .appendField(new Blockly.FieldDropdown([["top left","TOP_LEFT"], ["top center","TOP_CENTER"], ["top right","TOP_RIGHT"], ["left top","LEFT_TOP"], ["left center","LEFT_CENTER"], ["left bottom","LEFT_BOTTOM"], ["right top","RIGHT_TOP"], ["right center","RIGHT_CENTER"], ["right bottom","RIGHT_BOTTOM"], ["bottom left","BOTTOM_LEFT"], ["bottom center","BOTTOM_CENTER"], ["bottom right","BOTTOM_RIGHT"]]), "POSITION");
    this.appendValueInput("OFFSETX")
        .setCheck("Number")
        .appendField("Spacing X");
    this.appendValueInput("OFFSETY")
        .setCheck("Number")
        .appendField("Spacing Y");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Aligns this Game Object to the side of another Game Object, or Rectangle, in one of 12 possible positions.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#alignTo');
  }
};

Blockly.Blocks['bring_to_top'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Bring");
    this.appendDummyInput()
        .appendField("to the front");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Brings this sprite/image to the front of the display order. In case of overlapping sprites, this one will draw on top of everything else.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#bringToTop');
  }
};

Blockly.Blocks['check_world_bounds'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Make");
    this.appendValueInput("BOOL")
        .setCheck("Boolean")
        .appendField("check to see if it's inside the world?");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip(`This object will start checking if it's inside the world every frame. This takes time, so it's disabled by default.`);
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#checkWorldBounds');
  }
};

Blockly.Blocks['contains'] = {
  init: function() {
    this.appendValueInput("CHILD")
        .setCheck(null)
        .appendField("Is");
    this.appendDummyInput()
        .appendField("a child of")
        .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT")
        .appendField("?");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Checks to see if one sprite is the child of another.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#contains');
  }
};

Blockly.Blocks['crop'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Crop");
    this.appendValueInput("RECTANGLE")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Crop a sprite to an area defined by a rectangle.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#crop');
  }
};

Blockly.Blocks['clear_cropping'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Stop cropping");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Removes any cropping from a sprite.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#crop');
  }
};

Blockly.Blocks['destroy_sprite'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Destroy");
    this.appendValueInput("BOOL")
        .setCheck("Boolean")
        .appendField("Children too?");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Deletes a sprite from the game, with an option to delete its children too.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#destroy');
  }
};

Blockly.Blocks['get_child_at'] = {
  init: function() {
    this.appendValueInput("INDEX")
        .setCheck("Number")
        .appendField("Get child of")
        .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT")
        .appendField("at index");
    this.setOutput(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Finds a specific child on this sprite/image by its index.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#getChildAt');
  }
};

Blockly.Blocks['get_child_index'] = {
  init: function() {
    this.appendValueInput("CHILD")
        .setCheck(null)
        .appendField("Get index of Child");
    this.appendDummyInput()
        .appendField("on ")
        .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Finds an index that describes where on the parent this object is. ');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#getChildIndex');
  }
};

Blockly.Blocks['load_texture'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Change texture of");
    this.appendValueInput("TEXTURE")
        .setCheck("String")
        .appendField("to");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('This changes the texture of this sprite/image entirely. If it is part of a sprite sheet. Warning: slow.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#loadTexture');
  }
};

Blockly.Blocks['move_down'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Move");
    this.appendDummyInput()
        .appendField("down");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Moves this sprite/image down one place in the display order. If sprites overlap, it will be more likely to display underneath others.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#moveDown');
  }
};

Blockly.Blocks['move_up'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Move");
    this.appendDummyInput()
        .appendField("up");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Moves this sprite up one place in the display order. If sprites overlap, it will be more likely to display on top of others.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#moveUp');
  }
};

Blockly.Blocks['sprite_overlap'] = {
  init: function() {
    this.appendValueInput("SPRITEA")
        .setCheck(null)
        .appendField("Does");
    this.appendValueInput("SPRITEB")
        .setCheck(null)
        .appendField("overlap with");
    this.appendDummyInput()
        .appendField("?");
    this.setOutput(true, "Boolean");
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Checks to see if the rectangular bounds of the two given sprites overlap. Not a good substitute for the physics engine, but fine for something like UI.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#overlap');
  }
};

Blockly.Blocks['out_of_bounds_kill'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Make");
    this.appendValueInput("BOOL")
        .setCheck("Boolean")
        .appendField("get deleted if it leaves the world?");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Will automatically destroy this object if it goes outside the world bounds. Warning: this will not work on objects that are not checking to see if they are inside the world.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#outOfBoundsKill');
  }
};

Blockly.Blocks['remove_child'] = {
  init: function() {
    this.appendValueInput("CHILD")
        .setCheck(null)
        .appendField("Remove child");
    this.appendDummyInput()
        .appendField("from")
        .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Makes this sprite/image stop being a child and moving with its parent.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#removeChild');
  }
};

Blockly.Blocks['remove_child_at'] = {
  init: function() {
    this.appendValueInput("INDEX")
        .setCheck("Number")
        .appendField("Remove the child at index");
    this.appendDummyInput()
        .appendField("from")
        .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Finds the child at the given index and removes it from its parent. It will no longer move with the parent.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#removeChildAt');
  }
};

Blockly.Blocks['remove_children'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Remove all children from")
        .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Removes all children from the parent. They will all stop moving together.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#removeChildren');
  }
};

Blockly.Blocks['reset_frame'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Reset the frame dimensions of");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Resets the texture frame dimensions that the sprite uses for rendering.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#resetFrame');
  }
};

Blockly.Blocks['resize_frame'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Resize the frame of");
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
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Resizes the Frame dimensions that the Game Object uses for rendering. You shouldnt normally need to ever call this, but in the case of special texture types such as Video or BitmapData it can be useful to adjust the dimensions directly in this way.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#resizeFrame');
  }
};

Blockly.Blocks['send_to_back'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Send");
    this.appendDummyInput()
        .appendField("to the back");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Sends this sprite/image to the back of the display order. In case of overlapping sprites, it will draw behind everything else.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#sendToBack');
  }
};

Blockly.Blocks['set_child_index'] = {
  init: function() {
    this.appendValueInput("CHILD")
        .setCheck(null)
        .appendField("Move the child");
    this.appendValueInput("INDEX")
        .setCheck("Number")
        .appendField("of")
        .appendField(new Blockly.FieldVariable("defaultObject"), "PARENT")
        .appendField("to index");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Moves the child to a specific index on its parent. This will affect how you find it in the future.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#setChildIndex');
  }
};

Blockly.Blocks['set_sprite_frame'] = {
  init: function() {
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
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Sets the Texture frame the Sprite uses for rendering. This is primarily an internal method used by Sprite.loadTexture, although you may call it directly.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#setFrame');
  }
};

Blockly.Blocks['set_scale_min_max'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Set scale constraints on");
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
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Limits how far this sprite will scale based on its parent.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#setScaleMinMax');
  }
};

Blockly.Blocks['clear_scale_min_max'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Clear scale constraints on");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('If scaling constraints were set on a sprite, this removes them.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#setScaleMinMax');
  }
};

Blockly.Blocks['set_texture'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Set texture of");
    this.appendValueInput("TEXTURE")
        .setCheck(null)
        .appendField("to");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Sets the texture of the sprite. Be warned that this doesnt remove or destroy the previous texture this Sprite was using. Note that this takes a specific texture, not a tag.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#setTexture');
  }
};

Blockly.Blocks['swap_children'] = {
  init: function() {
    this.appendValueInput("PARENT")
        .setCheck(null)
        .appendField("Swap children of");
    this.appendValueInput("CHILD")
        .setCheck(null)
        .appendField("Child 1");
    this.appendValueInput("CHILD2")
        .setCheck(null)
        .appendField("Child 2");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(SPRITES_COLOUR);
    this.setTooltip('Swaps the indices of the given children. They must both be on the same parent.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#swapChildren');
  }
};

Blockly.Blocks['get_animation_property'] = {
    init: function() {
        this.appendValueInput("SPRITE")
            .setCheck(null)
            .appendField("on gameobject");
        this.appendDummyInput()
            .appendField("get animation.")
            .appendField(new Blockly.FieldDropdown([["currentAnim","currentAnim"], ["currentFrame","currentFrame"], ["frame","frame"], ["frameData","frameData"], ["frameName","frameName"], ["frameTotal","frameTotal"], ["game","game"], ["isLoaded","isLoaded"], ["name","name"], ["paused","paused"], ["sprite","sprite"], ["updateIfVisible","updateIfVisible"]]), "FIELD");
        this.setOutput(true, null);
        this.setColour(SPRITES_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['set_animation_property'] = {
    init: function() {
        this.appendValueInput("NEWPROPERTY")
            .setCheck(null)
            .appendField("set animation.")
            .appendField(new Blockly.FieldDropdown([["frame","frame"], ["frameName","frameName"], ["name","name"], ["paused","paused"], ["updateIfVisible","updateIfVisible"]]), "FIELD")
            .appendField("on ")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT")
            .appendField("to");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(SPRITES_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['get_animation_property'] = {
    init: function() {
        this.appendValueInput("SPRITE")
            .setCheck(null)
            .appendField("on gameobject");
        this.appendDummyInput()
            .appendField("get animation.")
            .appendField(new Blockly.FieldDropdown([["currentAnim","currentAnim"], ["currentFrame","currentFrame"], ["frame","frame"], ["frameData","frameData"], ["frameName","frameName"], ["frameTotal","frameTotal"], ["game","game"], ["isLoaded","isLoaded"], ["name","name"], ["paused","paused"], ["sprite","sprite"], ["updateIfVisible","updateIfVisible"]]), "FIELD");
        this.setOutput(true, null);
        this.setColour(SPRITES_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['set_animation_property'] = {
    init: function() {
        this.appendValueInput("NEWPROPERTY")
            .setCheck(null)
            .appendField("set animation.")
            .appendField(new Blockly.FieldDropdown([["frame","frame"], ["frameName","frameName"], ["name","name"], ["paused","paused"], ["updateIfVisible","updateIfVisible"]]), "FIELD")
            .appendField("on ")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT")
            .appendField("to");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(SPRITES_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};


Blockly.Blocks['animation_get_animation'] = {
    init: function() {
        this.appendValueInput("Sprite")
            .setCheck(null)
            .appendField("on gameobject");
        this.appendDummyInput()
            .appendField("get animation by name")
            .appendField(new Blockly.FieldTextInput("default"), "NAME");
        this.setOutput(true, null);
        this.setColour(SPRITES_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
//endregion

//region GROUP
const GROUP_COLOUR = 60;

Blockly.Blocks['create_group'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Create Group');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setColour(GROUP_COLOUR);
        this.setHelpUrl('http://www.example.com/');
        this.setColour(GROUP_COLOUR);
    }
};

Blockly.Blocks['create_object_in_group'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Create Object at');
        this.appendValueInput('X_POS')
            .appendField('X');
        this.appendValueInput('Y_POS')
            .appendField('Y');
        this.appendDummyInput()
            .appendField("From Tag")
            .appendField(new Blockly.FieldTextInput("default"), "TAG")
            .appendField("In The")
            .appendField(new Blockly.FieldVariable("defaultGroup"), "GROUP")
            .appendField("Group");
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(GROUP_COLOUR);
    }
};

Blockly.Blocks['create_object_in_group_with_frame'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Create Object at');
        this.appendValueInput('X_POS')
            .appendField('X');
        this.appendValueInput('Y_POS')
            .appendField('Y');
        this.appendDummyInput()
            .appendField("From Tag")
            .appendField(new Blockly.FieldTextInput("default"), "TAG")
            .appendField("In The")
            .appendField(new Blockly.FieldVariable("defaultGroup"), "GROUP")
            .appendField("Group");
        this.appendValueInput('FRAME')
            .appendField('Displaying Frame');
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(GROUP_COLOUR);
    }
};

Blockly.Blocks['call_function_on_group'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Call function')
            .appendField(new Blockly.FieldTextInput("functionName"), "FUNCTION");
        this.appendValueInput('GROUP')
            .appendField('on all children in group');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(GROUP_COLOUR);
    }
};

//endregion

//region PHYSICS
const PHYSICS_COLOUR = "#5A5C51";

Blockly.Blocks['start_physics'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Start")
            .appendField(new Blockly.FieldDropdown([["Arcade", "ARCADE"], ["P2JS", "P2JS"]]), "SYSTEM")
            .appendField("Physics System");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(PHYSICS_COLOUR);
    }
};
Blockly.Blocks['acceleration_from_rotation'] = {
  init: function() {
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

Blockly.Blocks['enable_body_group'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Enable Body for')
            .appendField(new Blockly.FieldVariable('defaultObject'), "object")
            .appendField('Group');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHYSICS_COLOUR);
    }
};

Blockly.Blocks['enable_arcade_physics_for_object'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Enable Arcade Physics for')
            .appendField(new Blockly.FieldVariable('defaultObject'), "object");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(PHYSICS_COLOUR);
    }
};

Blockly.Blocks['set_body_field_point'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set")
            .appendField(new Blockly.FieldDropdown([["bounce", "bounce"], ["gravity", "gravity"],['velocity', 'velocity'], ['acceleration', 'acceleration'], ['drag', 'drag'], ['friction', 'friction'], ['maxVelocity', 'maxVelocity'], ['worldBounce', 'worldBounce']]), "FIELD")
            .appendField(new Blockly.FieldDropdown([["x", "x"], ["y", "y"]]), "ELEMENT")
            .appendField("for")
            .appendField(new Blockly.FieldVariable("item"), "OBJECT");
        this.appendValueInput("VALUE")
            .setCheck(null)
            .appendField("to");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(PHYSICS_COLOUR);
    }
};

Blockly.Blocks['set_immovable'] = {
    init: function() {
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

Blockly.Blocks['collide'] = {
    init: function() {
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

Blockly.Blocks['is_body_touching'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldVariable("defaultObject"), "BODY")
            .appendField("touching")
            .appendField(new Blockly.FieldDropdown([["Up", "up"], ["Down", "down"], ["Left", "left"], ["Right", "Right"], ["None", "none"]]), "DIRECTION")
            .appendField("?");
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(PHYSICS_COLOUR);
    }
};

Blockly.Blocks['collide_with_world_bounds'] = {
    init: function() {
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

Blockly.Blocks['check_overlap'] = {
    init: function() {
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
Blockly.Blocks['move_to_pointer'] = {
  init: function() {
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
    this.setColour(PHYSICS_COLOUR);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
//endregion

//region INPUT
const INPUT_COLOUR = 300;

Blockly.Blocks['create_cursor_keys'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Create Cursor Keys');
        this.setOutput(true, null);
        this.setTooltip('Create a cursor allowing access to the UP/DOWN/LEFT/RIGHT keys');
        this.setColour(INPUT_COLOUR);
    }
};

Blockly.Blocks['is_key_down'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Key")
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
        this.setHelpUrl('http://www.example.com/');
        this.setColour(INPUT_COLOUR);
    }
};
//endregion

//region WORLD
const WORLD_COLOUR = "#BA9077";

Blockly.Blocks['get_world_property'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Get the")
            .appendField(new Blockly.FieldDropdown([["Height", "height"], ["Width", "width"], ["Center X", "centerX"], ["Center Y", "centerY"], ["Random X", "randomX"], ["Random Y", "randomY"]]), "NAME")
            .appendField("of the World");
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(WORLD_COLOUR);
    }
};

Blockly.Blocks['set_world_bounds'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('Set world bounds');
        this.appendValueInput('X_POS')
            .setCheck("Number")
            .appendField("X:");
        this.appendValueInput("Y_POS")
            .setCheck("Number")
            .appendField("Y:");
        this.appendValueInput('WIDTH')
            .setCheck("Number")
            .appendField("W:");
        this.appendValueInput("HEIGHT")
            .setCheck("Number")
            .appendField("H:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(WORLD_COLOUR);
    }
};

Blockly.Blocks['create_point'] = {
    init: function() {
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
        this.setColour(WORLD_COLOUR);
    }
};

//endregion

//region GAME OBJECT
const GAME_OBJECT_COLOUR = 60;

Blockly.Blocks['set_object_anchor'] = {
    init: function() {
        this.appendValueInput('OBJECT')
            .appendField('Set anchor for');
        this.appendDummyInput()
            .appendField('to');
        this.appendValueInput('X_POS')
            .setCheck("Number")
            .appendField("X:");
        this.appendValueInput("Y_POS")
            .setCheck("Number")
            .appendField("Y:");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(GAME_OBJECT_COLOUR);
    }
};

Blockly.Blocks['kill_object'] = {
    init: function() {
        this.appendValueInput('OBJECT')
            .appendField('Kill');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(GAME_OBJECT_COLOUR);
    }
};

Blockly.Blocks['set_scale'] = {
    init: function() {
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

Blockly.Blocks['set_pos'] = {
    init: function() {
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
  init: function() {
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
    init: function() {
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
Blockly.Blocks['send_to_back'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("select ")
        .appendField(new Blockly.FieldVariable("object"), "OBJECT")
        .appendField("to send to back");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['get_param'] = {
    init: function() {
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
    init: function() {
        this.appendValueInput('OBJECT')
            .appendField('Is');
        this.appendDummyInput()
            .appendField('in camera');
        this.setOutput(true, null);
        this.setColour(GAME_OBJECT_COLOUR);
    }
};
Blockly.Blocks['get_camera'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get camera");
    this.setOutput(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Blocks['camera_follow'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("make camera follow")
        .appendField(new Blockly.FieldVariable("object"), "OBJECT");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['get_bounds'] = {
  init: function() {
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
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Get rotation");
    this.setOutput(true, "Number");
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip('Finds the rotation (in degrees) of a Game Object.');
    this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Sprite.html#angle');
  }
};

Blockly.Blocks['rotate'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Rotate");
    this.appendValueInput("ANGLE")
        .setCheck("Number")
        .appendField("by");
    this.appendDummyInput()
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip('Rotates a Game Object by the given angle in degrees. Negative numbers will rotate it the opposite direction.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#angle');
  }
};

Blockly.Blocks['set_rotation'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Set the rotation of");
    this.appendValueInput("ROTATION")
        .setCheck(null)
        .appendField("to");
    this.appendDummyInput()
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip('Directly sets the rotation (in degrees) of this Game Object to the given value.');
    this.setHelpUrl('http://phaser.io/docs/2.6.2/Phaser.Sprite.html#angle');
  }
};

Blockly.Blocks['get_local_bounds'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Get local bounds of");
    this.setOutput(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip('Gets the rectangular bounds of an object. Bounds are relative to the object itself instead of the world.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#getLocalBounds');
  }
};

Blockly.Blocks['reset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Reset");
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Object");
    this.appendValueInput("X_POS")
        .setCheck(null)
        .appendField("X");
    this.appendValueInput("Y_POS")
        .setCheck(null)
        .appendField("Y");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip('Gets most objects ready to play again in various ways and treats it like new. Specifically, moves it to a new position then makes sure it is visible, rendering, alive, and actually exists in the game world.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#reset');
  }
};

Blockly.Blocks['revive'] = {
  init: function() {
    this.appendValueInput("OBJECT")
        .setCheck(null)
        .appendField("Revive");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(GAME_OBJECT_COLOUR);
    this.setTooltip('Brings a "dead" Game Object back to life. Makes sure it counts as alive, existing, and visible. Will send an event named onRevived.');
    this.setHelpUrl('https://phaser.io/docs/2.6.2/Phaser.Sprite.html#revive');
  }
};
//endregion

//region TEXT

const TEXT_COLOUR = 190;

Blockly.Blocks['add_text'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Add Text positioned at");
        this.appendValueInput("X_POS")
            .setCheck("Number")
            .appendField("X:");
        this.appendValueInput("Y_POS")
            .setCheck("Number")
            .appendField("Y:");
        this.appendValueInput("INITIAL_TEXT")
            .setCheck("String")
            .appendField("Intitial Text");
        this.appendValueInput("FONT_SIZE")
            .setCheck("Number")
            .appendField("Font Size");
        this.appendDummyInput()
            .appendField("Font Colour")
            .appendField(new Blockly.FieldColour("#ff0000"), "FILL");
        this.setOutput(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(TEXT_COLOUR);
    }
};

Blockly.Blocks['set_text'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Set text for")
            .appendField(new Blockly.FieldVariable("defaultObject"), "OBJECT");
        this.appendValueInput("TEXT")
            .setCheck("String")
            .appendField("to");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('http://www.example.com/');
        this.setColour(TEXT_COLOUR);
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
        this.setColour(TEXT_COLOUR);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
//endregion
//region to complete
Blockly.Blocks['drawcircle'] = {
  init: function() {
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
//endregion
//region to complete

//endregion
//region to complete
Blockly.Blocks['get_object_width'] = {
  init: function() {
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
//end region
//region to complete
Blockly.Blocks['set_object_width'] = {
  init: function() {
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
//end region

//region EMITTER
const PARTICLE_COLOUR = '#83C2D1';

Blockly.Blocks['addemitter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Add Emitter");
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("Y");
    this.appendValueInput("maxParticles")
        .setCheck("Number")
        .appendField("maxParticles");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(PARTICLE_COLOUR);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['emitters_make_particles'] = {
  init: function() {
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

Blockly.Blocks['emitters_set_rotation'] = {
  init: function() {
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

Blockly.Blocks['emitters_start'] = {
  init: function() {
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

Blockly.Blocks['emitters_set_alpha'] = {
  init: function() {
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

Blockly.Blocks['emitters_set_scale'] = {
  init: function() {
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

Blockly.Blocks['set_emit_from'] = {
  init: function() {
    this.appendValueInput("Object")
        .setCheck(null)
        .appendField("on");
    this.appendDummyInput()
        .appendField("set emit from")
        .appendField(new Blockly.FieldDropdown([["X","X"], ["Y","Y"]]), "cord")
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
  init: function() {
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

Blockly.Blocks['emitters_set_gravity'] = {
  init: function() {
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

Blockly.Blocks['emitters_set_width'] = {
  init: function() {
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

//region DEBUG

Blockly.Blocks['debug_sprite'] = {
  init: function() {
    this.appendValueInput('OBJECT')
        .appendField("Debug for Object");
    this.appendValueInput("X_VAL")
        .setCheck("Number")
        .appendField("X");
    this.appendValueInput("Y_VAL")
        .setCheck("Number")
        .appendField("Y");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(WORLD_COLOUR);
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
            .appendField("StateManager add state");
        this.appendDummyInput()
            .appendField("tagged")
            .appendField(new Blockly.FieldTextInput("tag"), "KEY");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

Blockly.Blocks['statemanager_start_state'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Start state with tag")
            .appendField(new Blockly.FieldTextInput("tag"), "TAG");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};
//endregion