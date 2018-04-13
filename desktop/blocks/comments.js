/**
 * Created by matthewcech on 3/20/18.
 * @fileoverview Block(s) that allow students to add comments to their projects
 * @author cech.m@digipen.edu (Matthew Cech)
 * @copyright DigiPen Institute of Technology 2018
 */
'use strict';
goog.provide('Blockly.Blocks.comments');
goog.require('Blockly.Blocks');


const COMMENTS_COLOR = '#EC591A';


Blockly.Blocks['comment_oneline'] = {
    init: function() {
        this.appendDummyInput()
            .appendField('comment')
            .appendField(new Blockly.FieldTextInput(''), 'TEXT');
        this.setColour(COMMENTS_COLOR);
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
        this.setTooltip('');
        this.setHelpUrl('');
    }
};

/*
Blockly.Blocks['comment_multiline'] = {
    init: function () {

    }
};*/

