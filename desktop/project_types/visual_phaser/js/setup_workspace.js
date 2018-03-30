/**
 * Created by lukepowell on 10/10/16.
 *
 * All content copyright DigiPen Institute of Technology 2016
 */
const {Workspace} = require('../../../workspace');
const BlocklyComponent = require('../../../workspace/components/blockly_component');
const CodeComponent = require('../../../workspace/components/code_component');
const PhaserComponent = require('../../../workspace/components/phaser_component');
const PhaserDataSource = require('../../../workspace/datasource/phaserdatasource');

const fs = require('fs-extra');
const path = require('path');

const toolboxSource = fs.readFileSync(path.join(__dirname, 'toolbox.xml'), 'utf8');
const startingBlocks = '<xml xmlns="http://www.w3.org/1999/xhtml">' +
    '<block type="phaser_simple_init"></block>' +
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
                BlocklyComponent.generateWorkspaceMappingFunction(Blockly.JavaScript.workspaceToCode.bind(Blockly.JavaScript)),
                true)
            , {
                type: 'column',
                content: [
                    PhaserComponent.generateContent()
                    , CodeComponent.generateContent({
                        editorLanguage: 'ace/mode/html',
                        readOnly: true
                    })]
            }]
    }]
};

const workspace = new Workspace(layoutConfig, new PhaserDataSource('html', startingBlocks));
workspace.init();
