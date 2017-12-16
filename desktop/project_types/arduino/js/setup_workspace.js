/**
 * Created by lukepowell on 10/10/16.
 *
 * All content copyright DigiPen Institute of Technology 2016
 */
const workspaceCore = require('../../../workspace');
const {Workspace, WorkspaceConfig} = require('../../../workspace');
const path = require('path');
const fs = require('fs-extra');
const log = require('electron-log');
const dialog = require('electron').remote.dialog;
const {BrowserWindow} = require('electron').remote;

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
            type: 'component',
            componentName: workspaceCore.CODE_COMPONENT,
            title: 'Code',
            componentState: {label: workspaceCore.CODE_COMPONENT}
        }]
    }]
};

const workspace = new Workspace(new WorkspaceConfig({
    layoutConfig: layoutConfig,
    blocklyConfig: workspaceConfig,
    editorLanguage: 'ace/mode/c_cpp',
    load: loadProjectFile,
    save: save,
    saveAs: saveAs,
    reload: () => {
        workspace.getComponent(workspaceCore.PHASER_COMPONENT).reload();
    },
    onComponentOpen: (component) => {
        console.log(component);
        let blocklyWorkspace = null;
        switch (component.getName()) {
            case workspaceCore.BLOCKLY_COMPONENT:
                blocklyWorkspace = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace();
                blocklyWorkspace.addChangeListener(myUpdateFunction);
                blocklyWorkspace.addChangeListener(Blockly.Events.disableOrphans);
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
            default:
                console.log(`Unknown component ${component.getName()}`);
                break;
        }
    }
}));
workspace.init();

function setCode(blocklyWorkspace) {
    let code = Blockly.C.workspaceToCode(blocklyWorkspace);
    workspace.getComponent(workspaceCore.CODE_COMPONENT).setCode(code);
    return code;
}

function saveAs(project) {
    let blocklyWorkspace = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace();
    const code = setCode(blocklyWorkspace);
    let xml = Blockly.Xml.workspaceToDom(blocklyWorkspace);
    xml = Blockly.Xml.domToPrettyText(xml);
    project.save([{
        path: project.getFileInProjectDir(`${project.getName()}.ino`),
        data: code
    }, {
        path: project.getBlocksPath(),
        data: xml
    }]);
}

function save() {
    let blocklyWorkspace = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace();
    try {
        const code = setCode(blocklyWorkspace);
        let xml = Blockly.Xml.workspaceToDom(blocklyWorkspace);
        xml = Blockly.Xml.domToPrettyText(xml);

        loadedProject.save([{
            path: loadedProject.getFileInProjectDir(`${loadedProject.getName()}.ino`),
            data: code
        }, {
            path: loadedProject.getBlocksPath(),
            data: xml
        }]);
        return true;
    } catch (e) {
        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
            type: 'error',
            title: 'Dragon Drop Error',
            message: `Error in code!\n${e.message}`
        });
        log.error(e);
        return false;
    }
}

function loadProjectFile(project) {
    let blocklyWorkspace = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace();
    loadedProject = project;

    fs.readFile(loadedProject.getBlocksPath(), (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                log.debug('Creating starting xml');
                //No XML add the starting blocks
                let xml = Blockly.Xml.textToDom('<xml xmlns="http://www.w3.org/1999/xhtml">\n' +
                    '<block type="hardwarestartup_arduino" id=",(1UN`:wW_-XR^e4%e4z" deletable="false" x="13" y="138"></block>\n' +
                    '<block type="loop" id="3XQ,:+8Ta^:x2dcPMRF="  deletable="false" x="13" y="213"></block>\n' +
                    '</xml>');
                Blockly.Xml.domToWorkspace(xml, blocklyWorkspace);
                return;
            } else {
                log.error(err);
                return;
            }
        }

        let xml = Blockly.Xml.textToDom(data);
        Blockly.Xml.domToWorkspace(xml, blocklyWorkspace);
    });
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
