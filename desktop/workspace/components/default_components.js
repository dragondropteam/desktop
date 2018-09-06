/**
 * @file Sets up default GoldenLayout components
 * @author Luke Powell
 * @copyright DigiPen Institute of Technology 2016
 */

const BlocklyComponent = require('./blockly_component');
const PhaserComponent = require('./phaser_component');
const CodeComponent = require('./code_component');
const {ipcRenderer} = require('electron');

module.exports = function(workspace) {
        BlocklyComponent.registerComponent(workspace, ipcRenderer);
        CodeComponent.registerComponent(workspace, ipcRenderer);
        PhaserComponent.registerComponent(workspace, ipcRenderer);
};