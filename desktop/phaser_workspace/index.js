const {Workspace} = require('../workspace');
const workspaceCore = require('../workspace');
const TIMEOUT = 500;
const log = require('electron-log');
const {dialog} = require('electron').remote;
const {BrowserWindow, app} = require('electron').remote;
const fs = require('fs-extra');

let layoutConfig = {
    settings: {
        showPopoutIcon: false
    },
    content: [{
        type: 'row',
        content: [{
            type: 'component',
            componentName: workspaceCore.BLOCKLY_COMPONENT,
            title: 'Blocks',
            componentState: {label: workspaceCore.BLOCKLY_COMPONENT}
        }, {
            type: 'column',
            content: [{
                type: 'component',
                componentName: workspaceCore.PHASER_COMPONENT,
                title: 'Game',
                componentState: {label: workspaceCore.PHASER_COMPONENT}
            }, {
                type: 'component',
                componentName: workspaceCore.CODE_COMPONENT,
                title: 'Code',
                componentState: {label: workspaceCore.CODE_COMPONENT}
            }]
        }]
    }]
};


exports.PhaserWorkspace = class PhaserWorkspace extends Workspace {
    constructor(toolboxSource) {
        super({
            blocklyConfig: Workspace.getDefaultBlocklyConfig(toolboxSource),
            layoutConfig: layoutConfig,
            extension: 'html',
            editorLanguage: 'ace/mode/html'
        });
        this.reloadTimer = null;
    }


    /**
     * @override
     * @param project
     */
    saveAs(project) {
        try {
            const assets = fs.readdirSync(this.loadedProject.getFileInProjectDir('assets'));
            assets.forEach(file => {
                fs.copySync(this.loadedProject.getFileInProjectDir('assets/' + file), project.getFileInProjectDir('assets/' + file));
            });
            super.saveAs(project);
        } catch (err) {
            if (err !== Error.ENOENT) {
                throw err;
            }
        }
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

    /**
     * @override
     */
    reload() {
        const phaserComponent = this.getComponent(workspaceCore.PHASER_COMPONENT);
        if (phaserComponent) {
            if (!this.reloadTimer) {
                this.reloadTimer = setTimeout(() => {
                    this.reloadTimer = null;
                    phaserComponent.reload();
                }, TIMEOUT);
            }
        }
    }
};
