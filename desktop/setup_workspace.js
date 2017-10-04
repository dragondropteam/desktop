/**
 * Created by lukepowell on 10/10/16.
 *
 * All content copyright DigiPen Institute of Technology 2016
 */
var loadedProject;
const {ipcRenderer} = require('electron');
if(!path){ const path = require('path');}

ipcRenderer.on('set_project', (event, arg) =>{
  loadedProject = arg;
  document.title = loadedProject.project.name;
  fs.readFile(path.join(loadedProject.loadPath,`${loadedProject.project.name}.xml`), (err, data) =>{
    if(err){
      //No XML add the starting blocks
      var xml = Blockly.Xml.textToDom('<xml xmlns="http://www.w3.org/1999/xhtml">\n' +
        '<block type="hardwarestartup" id=",(1UN`:wW_-XR^e4%e4z" deletable="false" x="13" y="138"></block>\n' +
        '<block type="loop" id="3XQ,:+8Ta^:x2dcPMRF="  deletable="false" x="13" y="213"></block>\n' +
        '</xml>');
      Blockly.Xml.domToWorkspace(xml, workspace);
      return;
    }

    var xml = Blockly.Xml.textToDom(data);
    Blockly.Xml.domToWorkspace(xml, workspace);
  });
});

ipcRenderer.on('show_code', (event, arg) => {
  var code = Blockly.C.workspaceToCode(workspace);
  ipcRenderer.send('show_code', code);
});

var filesystem = require('filesystem');

var toolboxSource = fs.readFileSync(filesystem.getFilePath('toolbox.xml'), 'utf8');
var blocklyArea = document.getElementById('blocklyArea');
var toolbox = document.getElementById('toolbox');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject('blocklyDiv',
  {comments: true,
    disable: true,
    collapse: true,
    grid:
    {spacing: 25,
      length: 3,
      colour: '#ccc',
      snap: true},
    maxBlocks: Infinity,
    media: './media/',
    readOnly: false,
    rtl: false,
    scrollbars: true,
    toolbox: toolboxSource,
    zoom:
    {controls: true,
      wheel: true,
      startScale: 1.0,
      maxScale: 4,
      minScale: .25,
      scaleSpeed: 1.1}
  });
var onresize = function(e) {
  // Compute the absolute coordinates and dimensions of blocklyArea.
  var element = blocklyArea;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  // Position blocklyDiv over blocklyArea.
  blocklyDiv.style.left = x + 'px';
  blocklyDiv.style.top = y + 'px';
  blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
  blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
  Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
function save(){
  const dialog = require('electron').remote.dialog;
  const {BrowserWindow} = require('electron').remote;
  try{
    var code = Blockly.C.workspaceToCode(workspace);
    var xml = Blockly.Xml.workspaceToDom(workspace);

    xml = Blockly.Xml.domToPrettyText(xml);
    fs.writeFile(loadedProject.project.loadPath + '/' + loadedProject.project.project.name + '/' + loadedProject.project.project.name + '.ino',code,function(err){
      if(err){
        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
          type: 'error',
          title: 'Dragon Drop Error',
          message: `Error in code!\n${err.message}`
        });
        console.log(err);
        return false;
      }
    });

    fs.writeFile(loadedProject.project.loadPath + '/' + loadedProject.project.project.name + '.xml', xml, (err) =>{
      if(err){
        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
          type: 'error',
          title: 'Dragon Drop Error',
          message: `Error in code!\n${err.message}`
        });
        console.log(err);
        return false;
      }
    });
    return true;
  }catch(e){
    dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
      type: 'error',
      title: 'Dragon Drop Error',
      message: `Error in code!\n${e.message}`
    });
    console.log(e);
    return false;
  }
}

function myUpdateFunction(event) {
  if(event.type == Blockly.Events.CHANGE){
    var block = workspace.getBlockById(event.blockId);
    if(block && block.onchange){
      block.onchange(event);
    }
  }
  save();
}

ipcRenderer.on('save_project', () =>{
  if(save()){
    const dialog = require('electron').remote.dialog;
    dialog.showMessageBox({type: "info", message: "Program Saved", buttons: ["OK"]});
  }
});

workspace.addChangeListener(myUpdateFunction);
workspace.addChangeListener(Blockly.Events.disableOrphans);
