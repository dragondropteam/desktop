/**
 * Created by matthewcech on 3/20/18.
 * @fileoverview Block(s) that allow students to add comments to their projects
 * @author cech.m@digipen.edu (Matthew Cech)
 * @copyright DigiPen Institute of Technology 2018
 */
'use strict';
goog.provide('Blockly.JavaScript.comments');
goog.require('Blockly.JavaScript');


Blockly.JavaScript['comment_oneline'] = function(block){
    const commentString = block.getFieldValue('TEXT');
    return `// ${commentString}\n`;
};
