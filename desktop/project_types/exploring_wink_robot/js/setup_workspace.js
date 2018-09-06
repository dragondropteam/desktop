/**
 * @file Sets up the overall workspace for the project type
 * @author Luke Powell
 * @copyright DigiPen Institute of Technology 2016
 */
// const {ArduinoWorkspace} = require('../../../arduino_workspace');
// const fs = require('fs-extra');
// const path = require('path');
// let startingBlocks = '<xml xmlns="http://www.w3.org/1999/xhtml">\n' +
//     '<block type="hardwarestartup" id=",(1UN`:wW_-XR^e4%e4z" deletable="false" x="13" y="138"></block>\n' +
//     '<block type="loop" id="3XQ,:+8Ta^:x2dcPMRF="  deletable="false" x="13" y="213"></block>\n' +
//     '</xml>';
// let toolboxSource = fs.readFileSync(path.join(__dirname, 'toolbox.xml'), 'utf8');
// const workspace = new ArduinoWorkspace(toolboxSource, startingBlocks);
// workspace.init();
const {Workspace} = require('../../../workspace');
const BlocklyComponent = require('../../../workspace/components/blockly_component');
const CodeComponent = require('../../../workspace/components/code_component');
const BlocklyDataSource = require('../../../workspace/datasource/blocklydatasource');

const fs = require('fs-extra');
const path = require('path');

const toolboxSource = fs.readFileSync(path.join(__dirname, 'toolbox.xml'), 'utf8');
const startingBlocks = '<xml xmlns="http://www.w3.org/1999/xhtml">\n' +
    '<block type="hardwarestartup_icon" id=",(1UN`:wW_-XR^e4%e4z" deletable="false" x="13" y="138"></block>\n' +
    '<block type="loop_icon" id="3XQ,:+8Ta^:x2dcPMRF="  deletable="false" x="13" y="313"></block>\n' +
    '</xml>';
const layoutConfig = {
    settings: {
        showPopoutIcon: false
    },
    content: [{
        type: 'row',
        content: [
            BlocklyComponent.generateContent(
                BlocklyComponent.getDefaultBlocklyConfig(toolboxSource),
                BlocklyComponent.generateWorkspaceMappingFunction(Blockly.C.workspaceToCode.bind(Blockly.C)),
                true)
            , CodeComponent.generateContent({
                editorLanguage: 'ace/mode/c_cpp',
                readOnly: true
            })]
    }]
};

const workspace = new Workspace(layoutConfig, new BlocklyDataSource('ino', startingBlocks));
workspace.init();
