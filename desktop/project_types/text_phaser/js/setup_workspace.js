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
const workspaceCore = require('../../../workspace');
const {Workspace} = require('../../../workspace');
const {WorkspaceConfig} = require('../../../workspace');
const path = require('path');
const fs = require('fs-extra');
let loadedProject = null;

let toolboxSource = fs.readFileSync(path.join(__dirname, 'toolbox.xml'), 'utf8');

let workspaceConfig = {
    comments: true,
    disable: true,
    collapse: true,
    grid: {
        spacing: 25,
        length: 3,
        colour: '#ccc',
        snap: true
    },
    maxBlocks: Infinity,
    media: '../../../media/',
    readOnly: false,
    rtl: false,
    scrollbars: true,
    toolbox: toolboxSource,
    zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 4,
        minScale: .25,
        scaleSpeed: 1.1
    }
};
let layoutConfig = {
    settings: {
        showPopoutIcon: false
    },
    content: [{
        type: 'row',
        content: [
            {
                type: 'component',
                componentName: workspaceCore.CODE_COMPONENT,
                title: 'Code',
                componentState: {label: workspaceCore.CODE_COMPONENT}
            },
            {
                type: 'component',
                componentName: workspaceCore.PHASER_COMPONENT,
                title: 'Game',
                componentState: {label: workspaceCore.PHASER_COMPONENT}
            }
        ]
    }]
};
let project = null;
let reload = null;

const workspace = new Workspace(new WorkspaceConfig({
    layoutConfig: layoutConfig,
    blocklyConfig: workspaceConfig,
    editorReadOnly: false,
    load: loadProjectFile,
    save: save,
    reload: () => {
        //Limit the number of reloads in case the user ends up spamming this
        if (!reload) {
            reload = setTimeout(() => {
                workspace.getComponent(workspaceCore.PHASER_COMPONENT).reload();
                reload = null;
            }, 500);
        }
    },
    onComponentOpen: (component) => {
        console.log(component);
        let blocklyWorkspace = null;
        switch (component.getName()) {
            case workspaceCore.BLOCKLY_COMPONENT:
                blocklyWorkspace = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace();
                blocklyWorkspace.addChangeListener(myUpdateFunction);
                if (loadedProject) {
                    loadProjectFile(loadedProject);
                }
                break;
            case workspaceCore.CODE_COMPONENT:
                if (loadedProject) {
                    blocklyWorkspace = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace();
                    setCode(blocklyWorkspace);
                }
                break;
            case workspaceCore.PHASER_COMPONENT:
                if (loadedProject) {
                    setPhaserSource(loadedProject);
                }
                break;
            default:
                console.log(`Unknown component ${component.getName()}`);
                break;
        }
    }
}));
workspace.init();

function setCode(code) {
    workspace.getComponent(workspaceCore.CODE_COMPONENT).setCode(code);
    return code;
}

function save() {
    const dialog = require('electron').remote.dialog;
    const {BrowserWindow} = require('electron').remote;
    try {
        fs.writeFileSync(path.join(loadedProject.loadPath, loadedProject.getName(), `${loadedProject.getName()}.html`), workspace.getComponent(workspaceCore.CODE_COMPONENT).getCode());
        return true;
    } catch (e) {
        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
          type: 'error',
          title: 'Dragon Drop Error',
          message: `Error in code!\n${e.message}`
        });
        console.log(e.message);
        return false;
    }
}

function setPhaserSource(loadedProject) {
    let phaserComponent = workspace.getComponent(workspaceCore.PHASER_COMPONENT);
    if (phaserComponent) {
        phaserComponent.setSource(`file://${path.join(loadedProject.loadPath, loadedProject.getName(), `${loadedProject.getName()}.html`)}`);
    }
}

function loadProjectFile(project) {
    loadedProject = project;

        document.title = `DragonDrop - ${loadedProject.loadPath}`;

        fs.readFile(path.join(loadedProject.loadPath, loadedProject.getName(), `${loadedProject.getName()}.html`), (err, data) => {
            if (err) {
                fs.copySync(filesystem.getFilePath('project_types/text_phaser/core_files/phaser_base.html'), path.join(loadedProject.loadPath, loadedProject.getName(), `${loadedProject.getName()}.html`));
            }
            setCode(data.toString());
        });

        setPhaserSource(loadedProject);
}

function myUpdateFunction(event) {
    if (event.type === Blockly.Events.CHANGE) {
        const block = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace().getBlockById(event.blockId);
        if (block && block.onchange) {
            block.onchange(event);
        }
    }
    save();
}
