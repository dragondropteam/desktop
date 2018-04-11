/**
 * Created by matthewcech on 4/11/18.
 * @fileoverview Block(s) that allow students to add comments to their projects
 * @author cech.m@digipen.edu (Matthew Cech)
 * @copyright DigiPen Institute of Technology 2018
 */
'use strict';
goog.provide('Blockly.C.comments');
goog.require('Blockly.C');


Blockly.C['comment_oneline'] = function(block){
    const commentString = block.getFieldValue('TEXT');
    return `// ${commentString}\n`;
};
