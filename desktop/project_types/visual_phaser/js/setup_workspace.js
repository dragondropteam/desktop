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
let project = null;
let reload = null;
const workspace = new Workspace(new WorkspaceConfig({
    layoutConfig: layoutConfig,
    blocklyConfig: workspaceConfig,
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

function setCode(blocklyWorkspace) {
    let code = Blockly.JavaScript.workspaceToCode(blocklyWorkspace);
    workspace.getComponent(workspaceCore.CODE_COMPONENT).setCode(code);
    return code;
}

function save() {
    let blocklyWorkspace = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace();
    if (blocklyWorkspace === null) {
        return;
    }

    const dialog = require('electron').remote.dialog;
    const {BrowserWindow} = require('electron').remote;
    try {
        const code = setCode(blocklyWorkspace);
        let xml = Blockly.Xml.workspaceToDom(blocklyWorkspace);

        xml = Blockly.Xml.domToPrettyText(xml);

        try {
            fs.writeFileSync(path.join(loadedProject.loadPath, loadedProject.getName(), `${loadedProject.getName()}.html`), code);
        } catch (err) {
            dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
              type: 'error',
              title: 'Error in code!',
              message: err.message
            });
            console.log(err);
            return false;
        }

        try {
            fs.writeFileSync(loadedProject.getBlocksPath(), xml);
        } catch (err) {
            dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
              type: 'error',
              title: 'Error in code!',
              message: err.message
            });
            console.log(err);
            return false;
        }

        return true;
    } catch (e) {
        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
          type: 'error',
          title: 'Error in code!',
          message: e.message
        });
        console.log(e);
        return false;
    }
}

function setPhaserSource(loadedProject) {
    let phaserComponent = workspace.getComponent(workspaceCore.PHASER_COMPONENT);
    if (phaserComponent) {
        phaserComponent.setSource(`file://${path.join(loadedProject.loadPath, loadedProject.getName(), `${loadedProject.getName()}.html`)}`);
    }
}

function setBlocklyBlocks(data) {
    try {
        let blocklyComponent = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT);
        if (blocklyComponent) {
            let xml = Blockly.Xml.textToDom(data);
            Blockly.Xml.domToWorkspace(xml, blocklyComponent.getWorkspace());
        }
    }catch (e) {
        workspaceCore.logErrorAndQuit(e, 'loading');
    }
}

function loadProjectFile(project) {
    loadedProject = project;

    fs.readFile(loadedProject.getBlocksPath(), (err, data) => {
        if (err) {
            console.log('err', err.message);
            return;
        }
        setBlocklyBlocks(data);
        const blocklyWorkspace = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace();
        setCode(blocklyWorkspace);
    });

    setPhaserSource(loadedProject);
}

function myUpdateFunction(event) {
    try {
        if (event.type === Blockly.Events.CHANGE) {
            const block = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace().getBlockById(event.blockId);
            if (block && block.onchange) {
                block.onchange(event);
            }
        }
        save();
    } catch (e) {
        workspaceCore.logErrorAndQuit(e, 'saving');
    }
}
