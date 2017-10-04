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
        fs.writeFile(path.join(loadedProject.loadPath, loadedProject.getName(), `${loadedProject.getName()}.js`), code, err =>{
            if (err) {
                dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
                  type: 'error',
                  title: 'Dragon Drop Error',
                  message: `Error in code!\n${err.message}`
                });
                console.log(err);
                return false;
            }
        });

        fs.writeFile(loadedProject.getBlocksPath(), xml, (err) => {
            if (err) {
                dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
                  type: 'error',
                  title: 'Dragon Drop Error',
                  message: `Error in code!\n${err.message}`
                });
                console.log(err);
                return false;
            }
        });

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

    document.title = `DragonDrop - ${loadedProject.loadPath}`;

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
// var loadedProject;
// const {ipcRenderer} = require('electron');
// const {LoadedProject} = require('project');
// const path = require('path');
// const fs = require('fs-extra');
//
// ipcRenderer.on('set_project', (event, arg) => {
//
//   loadedProject = new LoadedProject(arg.loadedProject, arg.loadPath);
//
//   document.title = `DragonDrop - ${loadedProject.loadPath}`;
//
//   fs.readFile(loadedProject.getBlocksPath(), (err, data) =>{
//     if(err){
//       return;
//     }
//
//     var xml = Blockly.Xml.textToDom(data);
//     Blockly.Xml.domToWorkspace(xml, workspace);
//   });
// });
//
// ipcRenderer.on('show_code', (event, arg) => {
//   var code = Blockly.JavaScript.workspaceToCode(workspace);
//   ipcRenderer.send('show_code', code);
// });
//
// var filesystem = require('filesystem');
//
// /**
//  * toolbox.xml is also in the .js folder to make this easier
//  */
// var toolboxSource = fs.readFileSync(path.join(__dirname,'toolbox.xml'), 'utf8');
// var blocklyArea = document.getElementById('blocklyArea');
// var toolbox = document.getElementById('toolbox');
// var blocklyDiv = document.getElementById('blocklyDiv');
// var workspace = Blockly.inject('blocklyDiv',
//   {comments: true,
//     disable: true,
//     collapse: true,
//     grid:
//     {spacing: 25,
//       length: 3,
//       colour: '#ccc',
//       snap: true},
//     maxBlocks: Infinity,
//     media: '../../../media/',
//     readOnly: false,
//     rtl: false,
//     scrollbars: true,
//     toolbox: toolboxSource,
//     zoom:
//     {controls: true,
//       wheel: true,
//       startScale: 1.0,
//       maxScale: 4,
//       minScale: .25,
//       scaleSpeed: 1.1}
//   });
// var onresize = function(e) {
//   // Compute the absolute coordinates and dimensions of blocklyArea.
//   var element = blocklyArea;
//   var x = 0;
//   var y = 0;
//   do {
//     x += element.offsetLeft;
//     y += element.offsetTop;
//     element = element.offsetParent;
//   } while (element);
//   // Position blocklyDiv over blocklyArea.
//   blocklyDiv.style.left = x + 'px';
//   blocklyDiv.style.top = y + 'px';
//   blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
//   blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
//   Blockly.svgResize(workspace);
// };
// window.addEventListener('resize', onresize, false);
// onresize();
// function save(){
//   const dialog = require('electron').remote.dialog;
//   const {BrowserWindow} = require('electron').remote;
//   try{
//     var code = Blockly.JavaScript.workspaceToCode(workspace);
//     var xml = Blockly.Xml.workspaceToDom(workspace);
//
//     xml = Blockly.Xml.domToPrettyText(xml);
//     fs.writeFile(`${loadedProject.loadPath}/${loadedProject.getName()}/${loadedProject.getName()}.js`, code, function(err){
//       if(err){
//         dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
//           title: 'Dragon Drop Error',
//           message: `Error in code!\n${err.message}`
//         });
//         console.log(err);
//         return false;
//       }
//     });
//
//     fs.writeFile(loadedProject.getBlocksPath(), xml, (err) =>{
//       if(err){
//         dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
//           title: 'Dragon Drop Error',
//           message: `Error in code!\n${err.message}`
//         });
//         console.log(err);
//         return false;
//       }
//     });
//     editor.setValue(code,-1);
//     return true;
//   }catch(e){
//     dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
//       title: 'Dragon Drop Error',
//       message: `Error in code!\n${e.message}`
//     });
//     console.log(e);
//     return false;
//   }
// }
//
// var editor = ace.edit("editor");
// editor.getSession().setMode("ace/mode/javascript");
//
// const Config = require('electron-store');
// const config = new Config();
//
// document.getElementById('editor').style.fontSize = `${config.get('fontsize') || '12'}px`
//
// editor.$blockScrolling = Infinity;
//
// let theme = config.get('theme');
// if(theme){
//     theme = theme.toLowerCase().replace(' ', '_');
//     editor.setTheme(`ace/theme/${theme}`);
// }
//
// ipcRenderer.on('settings_updated', () =>{
//     let theme = config.get('theme');
//     if(theme){
//         theme = theme.toLowerCase().replace(' ', '_');
//         editor.setTheme(`ace/theme/${theme}`);
//     }
//
//
//     document.getElementById('editor').style.fontSize = `${config.get('fontsize') || '12'}px`
// });
// editor.setReadOnly(true);
//
// function myUpdateFunction(event) {
//   if(event.type == Blockly.Events.CHANGE){
//     var block = workspace.getBlockById(event.blockId);
//     if(block && block.onchange){
//       block.onchange(event);
//     }
//   }
//   save();
// }
//
// ipcRenderer.on('save_project', () =>{
//   if(save()){
//     const dialog = require('electron').remote.dialog;
//     dialog.showMessageBox({type: "info", message: "Program Saved", buttons: ["OK"]});
//   }
// });
//
// ipcRenderer.on('eval', () =>{
//   try{
//     eval(Blockly.JavaScript.workspaceToCode(workspace));
//   }catch(e){
//     window.alert(e);
//   }
// });
//
// workspace.addChangeListener(myUpdateFunction);
