function save(){const e=require("electron").remote.dialog;try{var o=Blockly.C.workspaceToCode(workspace),l=Blockly.Xml.workspaceToDom(workspace);return l=Blockly.Xml.domToPrettyText(l),fs.writeFile(loadedProject.project.loadPath+"/"+loadedProject.project.project.name+"/"+loadedProject.project.project.name+".ino",o,function(o){if(o)return e.showErrorBox("Error in code!",o.message),console.log(o),!1}),fs.writeFile(loadedProject.project.loadPath+"/"+loadedProject.project.project.name+".xml",l,o=>{if(o)return e.showErrorBox("Error in code!",o.message),console.log(o),!1}),!0}catch(o){return e.showErrorBox("Error in code",o.message),console.log(o),!1}}function myUpdateFunction(e){if(e.type==Blockly.Events.CHANGE){var o=workspace.getBlockById(e.blockId);o&&o.onchange&&o.onchange(e)}save()}var loadedProject;const{ipcRenderer:ipcRenderer}=require("electron");if(!path)require("path");ipcRenderer.on("set_project",(e,o)=>{loadedProject=o,document.title=loadedProject.project.name,fs.readFile(path.join(loadedProject.loadPath,`${loadedProject.project.name}.xml`),(e,o)=>{if(e){l=Blockly.Xml.textToDom('<xml xmlns="http://www.w3.org/1999/xhtml">\n<block type="hardwarestartup" id=",(1UN`:wW_-XR^e4%e4z" deletable="false" x="13" y="138"></block>\n<block type="loop" id="3XQ,:+8Ta^:x2dcPMRF="  deletable="false" x="13" y="213"></block>\n</xml>');Blockly.Xml.domToWorkspace(l,workspace)}else{var l=Blockly.Xml.textToDom(o);Blockly.Xml.domToWorkspace(l,workspace)}})}),ipcRenderer.on("show_code",(e,o)=>{var l=Blockly.C.workspaceToCode(workspace);ipcRenderer.send("show_code",l)});var filesystem=require("filesystem"),toolboxSource=fs.readFileSync(filesystem.getFilePath("toolbox.xml"),"utf8"),blocklyArea=document.getElementById("blocklyArea"),toolbox=document.getElementById("toolbox"),blocklyDiv=document.getElementById("blocklyDiv"),workspace=Blockly.inject("blocklyDiv",{comments:!0,disable:!0,collapse:!0,grid:{spacing:25,length:3,colour:"#ccc",snap:!0},maxBlocks:1/0,media:"./media/",readOnly:!1,rtl:!1,scrollbars:!0,toolbox:toolboxSource,zoom:{controls:!0,wheel:!0,startScale:1,maxScale:4,minScale:.25,scaleSpeed:1.1}}),onresize=function(e){var o=blocklyArea,l=0,r=0;do{l+=o.offsetLeft,r+=o.offsetTop,o=o.offsetParent}while(o);blocklyDiv.style.left=l+"px",blocklyDiv.style.top=r+"px",blocklyDiv.style.width=blocklyArea.offsetWidth+"px",blocklyDiv.style.height=blocklyArea.offsetHeight+"px",Blockly.svgResize(workspace)};window.addEventListener("resize",onresize,!1),onresize(),ipcRenderer.on("save_project",()=>{if(save()){const e=require("electron").remote.dialog;e.showMessageBox({type:"info",message:"Program Saved",buttons:["OK"]})}}),workspace.addChangeListener(myUpdateFunction),workspace.addChangeListener(Blockly.Events.disableOrphans);