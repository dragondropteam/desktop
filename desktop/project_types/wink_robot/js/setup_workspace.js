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
            type: 'component',
            componentName: workspaceCore.CODE_COMPONENT,
            title: 'Code',
            componentState: {label: workspaceCore.CODE_COMPONENT}
        }]
    }]
};
let project = null;

const workspace = new Workspace(new WorkspaceConfig({
    layoutConfig: layoutConfig,
    blocklyConfig: workspaceConfig,
    editorLanguage: 'ace/mode/c_cpp',
    load: loadProjectFile,
    save: save,
    reload: () => {
        // workspace.getComponent(workspaceCore.PHASER_COMPONENT).reload();
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

function save() {
    let blocklyWorkspace = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace();
    const dialog = require('electron').remote.dialog;
    try {
        const code = setCode(blocklyWorkspace);
        let xml = Blockly.Xml.workspaceToDom(blocklyWorkspace);

        xml = Blockly.Xml.domToPrettyText(xml);
        try {
            fs.writeFileSync(path.join(loadedProject.loadPath, loadedProject.getName(), `${loadedProject.getName()}.ino`), code);
        }catch(err){
            dialog.showErrorBox('Error in code!', err.message);
            console.log(err);
            return false;
        }

        try{
            fs.writeFileSync(loadedProject.getBlocksPath() , xml);
        }catch(err){
            dialog.showErrorBox('Error in code!', err.message);
            console.log(err);
            return false;
        }

        return true;
    } catch (e) {
        dialog.showErrorBox('Error in code', e.message);
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

    let blocklyWorkspace = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace();

    loadedProject = project;

    document.title = `DragonDrop - ${loadedProject.loadPath}`;

    fs.readFile(loadedProject.getBlocksPath(), (err, data) => {
        if (err) {
            //No XML add the starting blocks
            let xml = Blockly.Xml.textToDom('<xml xmlns="http://www.w3.org/1999/xhtml">\n' +
                '<block type="hardwarestartup" id=",(1UN`:wW_-XR^e4%e4z" deletable="false" x="13" y="138"></block>\n' +
                '<block type="loop" id="3XQ,:+8Ta^:x2dcPMRF="  deletable="false" x="13" y="213"></block>\n' +
                '</xml>');
            Blockly.Xml.domToWorkspace(xml, blocklyWorkspace);
            return;
        }

        let xml = Blockly.Xml.textToDom(data);
        Blockly.Xml.domToWorkspace(xml, blocklyWorkspace);
    });
}

function myUpdateFunction(event) {
    let blocklyWorkspace = workspace.getComponent(workspaceCore.BLOCKLY_COMPONENT).getWorkspace();
    if (event.type == Blockly.Events.CHANGE) {
        let block = blocklyWorkspace.getBlockById(event.blockId);
        if (block && block.onchange) {
            block.onchange(event);
        }
    }
    save();
}