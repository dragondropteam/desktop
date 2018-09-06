/**
 * @file Sets up the overall workspace for the project type
 * @author Luke Powell
 * @copyright DigiPen Institute of Technology 2016
 */
const {Workspace} = require('../../../workspace');
const BlocklyComponent = require('../../../workspace/components/blockly_component');
const CodeComponent = require('../../../workspace/components/code_component');
const BlocklyDataSource = require('../../../workspace/datasource/blocklydatasource');

const fs = require('fs-extra');
const path = require('path');

const toolboxSource = fs.readFileSync(path.join(__dirname, 'toolbox.xml'), 'utf8');

const layoutConfig = {
    settings: {
        showPopoutIcon: false
    },
    content: [{
        type: 'row',
        content: [
            BlocklyComponent.generateContent(
                BlocklyComponent.getDefaultBlocklyConfig(toolboxSource),
                BlocklyComponent.generateWorkspaceMappingFunction(Blockly.JavaScript.workspaceToCode.bind(Blockly.JavaScript)))
            , CodeComponent.generateContent({
                editorLanguage: 'ace/mode/javascript',
                readOnly: true
            })]
    }]
};

const workspace = new Workspace(layoutConfig, new BlocklyDataSource('js'));
workspace.init();