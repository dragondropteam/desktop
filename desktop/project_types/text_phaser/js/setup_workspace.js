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
const {Workspace} = require('../../../workspace');
const workspaceCore = require('../../../workspace');
const TIMEOUT = 500;
const fs = require('fs-extra');
const log = require('electron-log');

let layoutConfig = {
        settings: {
            showPopoutIcon: false
        },
        content: [{
            type: 'row',
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
    };

class TextPhaserWorkspace extends Workspace {
    constructor() {
        super({
            layoutConfig: layoutConfig,
            extension: 'html',
            editorLanguage: 'ace/mode/html'
        });
        this.reloadTimer = null;
    }


    /**
     * @override
     */
    updateCode() {
        const code =  fs.readFileSync(this.loadedProject.getSourceFile(this.extension), 'utf8');
        log.debug(code);
        const codeComponent = this.getComponent(workspaceCore.CODE_COMPONENT);
        if (codeComponent) {
            codeComponent.setCode(code);
        }
        return code;
    }

    /**
     * @override
     */
    save() {
        try {
            if (!this.getComponent(workspaceCore.CODE_COMPONENT)) {
                return;
            }

            const code = this.updateCode();
            this.loadedProject.save([{
                path: this.loadedProject.getSourceFile(this.extension),
                data: code
            }]);

            // this.reload();
        } catch (err) {
            dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
                type: 'error',
                title: 'Dragon Drop Error',
                message: `Error in code!\n${err.message}`
            });
            log.error(err);
        }
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
       if(!this.getComponent(workspaceCore.CODE_COMPONENT)){
           return null;
       }

       return this.getComponent(workspaceCore.CODE_COMPONENT).getCode();
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
}

const workspace = new TextPhaserWorkspace();
workspace.init();
