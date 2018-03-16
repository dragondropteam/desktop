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
const {Workspace, BlocklyComponent, CodeComponent, BlocklyDataSource} = require('../../../workspace');
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
            BlocklyComponent.generateContent(BlocklyComponent.getDefaultBlocklyConfig(toolboxSource), (workspace) => {
                const code = Blockly.JavaScript.workspaceToCode(workspace);
                let xml = Blockly.Xml.workspaceToDom(workspace);
                xml = Blockly.Xml.domToPrettyText(xml);
                return {code: code, xml: xml};
            })
        , CodeComponent.generateContent({
                editorLanguage: 'ace/mode/javascript',
                readOnly: true
            })]
    }]
};

class TextPhaserWorkspace extends Workspace {
    constructor() {
        super({
            layoutConfig: layoutConfig,
            extension: 'js',
            editorLanguage: 'ace/mode/javascript',
            dataSource: new BlocklyDataSource()
        });
        this.reloadTimer = null;
    }

    /**
     * @override
     */
    getCode() {
        if (!this.getBlockly()) {
            return;
        }

        return Blockly.JavaScript.workspaceToCode(this.getBlockly());
    }
}

const workspace = new TextPhaserWorkspace();
workspace.init();