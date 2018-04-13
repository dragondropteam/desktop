const BlocklyComponent = require('./blockly_component');
const PhaserComponent = require('./phaser_component');
const CodeComponent = require('./code_component');
const {ipcRenderer} = require('electron');

module.exports = function(workspace) {
        BlocklyComponent.registerComponent(workspace, ipcRenderer);
        CodeComponent.registerComponent(workspace, ipcRenderer);
        PhaserComponent.registerComponent(workspace, ipcRenderer);
};