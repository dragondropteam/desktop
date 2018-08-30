/**
 * @file Sets up the overall workspace for the project type
 * @author Luke Powell
 * @copyright DigiPen Institute of Technology 2016
 */
const {Workspace} = require('../../../workspace');
const BlocklyComponent = require('../../../workspace/components/blockly_component');
const CodeComponent = require('../../../workspace/components/code_component');
const PhaserComponent = require('../../../workspace/components/phaser_component');
const TextDataSource = require('../../../workspace/datasource/textdatasource');

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
            PhaserComponent.generateContent()
            , CodeComponent.generateContent({
                editorLanguage: 'ace/mode/html'
            }, false)]
    }]
};

class TextPhaserDataSource extends TextDataSource {
    /**
     * First copy over all assets that are in this project, then simply call the existing save as to copy over blocks
     * @param code The generated code to save out to destinationProject
     * @param destinationProject The destination project to save the current project to
     */
    saveAs(code, destinationProject) {
        const assets = fs.readdirSync(this.project.getFileInProjectDir('assets'));
        assets.forEach(file => {
            fs.copySync(this.project.getFileInProjectDir('assets/' + file), destinationProject.getFileInProjectDir('assets/' + file));
        });
        super.saveAs(code, destinationProject);
    }
}

const workspace = new Workspace(layoutConfig, new TextPhaserDataSource('html'));
workspace.init();
