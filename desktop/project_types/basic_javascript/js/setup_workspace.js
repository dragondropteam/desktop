/**
 * Created by lukepowell on 10/10/16.
 *
 * All content copyright DigiPen Institute of Technology 2016
 */

/**
 * Created by lukepowell on 10/10/16.
 *
 * All content copyright DigiPen Institute of Technology 2016
 */
const {Workspace, BlocklyComponent, CodeComponent} = require('../../../workspace');
const BlocklyDataSource = require('../../../workspace/datasource/blocklydatasource');

const fs = require('fs-extra');
const path = require('path');

let toolboxSource = fs.readFileSync(path.join(__dirname, 'toolbox.xml'), 'utf8');

let layoutConfig = {
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