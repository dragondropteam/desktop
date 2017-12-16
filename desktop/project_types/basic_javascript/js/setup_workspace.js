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
const dialog = require('electron').remote.dialog;
const {BrowserWindow} = require('electron').remote;
const log = require('electron-log');
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
    editorLanguage: 'ace/mode/javascript',
    load: loadProjectFile,
    save: save,
    saveAs: saveAs,
    reload: () => {
        let blocklyWorkspace = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace();
        if (blocklyWorkspace === null) {
            return;
        }
        try{
            eval(Blockly.JavaScript.workspaceToCode(blocklyWorkspace));
        }catch(e) {
            window.alert(e);
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

function saveAs(project) {
    const blocklyWorkspace = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace();
    const code = setCode(blocklyWorkspace);
    let xml = Blockly.Xml.workspaceToDom(blocklyWorkspace);
    xml = Blockly.Xml.domToPrettyText(xml);

    project.save([{
        path: project.getFileInProjectDir(`${project.getName()}.js`),
        data: code
    }, {
        path: project.getBlocksPath(),
        data: xml
    }])
}
function save() {
    const blocklyWorkspace = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace();

    if (blocklyWorkspace === null) {
        return;
    }

    try {
        const code = setCode(blocklyWorkspace);
        let xml = Blockly.Xml.workspaceToDom(blocklyWorkspace);
        xml = Blockly.Xml.domToPrettyText(xml);

        loadedProject.save([{
            path: loadedProject.getFileInProjectDir(`${loadedProject.getName()}.js`),
            data: code
        }, {
            path: loadedProject.getBlocksPath(),
            data: xml
        }]);

        setCode(blocklyWorkspace);
        return true;
    } catch (e) {
        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
          type: 'error',
          title: 'Dragon Drop Error',
          message: `Error in code!\n${e.message}`
        });
        console.log(e);
        return false;
    }
}

function setBlocklyBlocks(data) {
    let blocklyComponent = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT);
    if (blocklyComponent) {
        let xml = Blockly.Xml.textToDom(data);
        Blockly.Xml.domToWorkspace(xml, blocklyComponent.getWorkspace());
    }
}

function loadProjectFile(project) {
    loadedProject = project;

    fs.readFile(loadedProject.getBlocksPath(), (err, data) => {
        if (err) {
            return;
        }

        setBlocklyBlocks(data);
        const blocklyWorkspace = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace();
        setCode(blocklyWorkspace);
    });
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
