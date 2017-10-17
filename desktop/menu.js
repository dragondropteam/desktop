/**
 * @fileoverview Not used
 * @deprecated
 */

/**
 *
 * @type {Electron.AllElectron}
 */
const electron = require('electron');
const Menu = electron.Menu;
const {BrowserWindow} = require('electron');
const arduino_core = require('arduino_core/arduino_core');

exports.createProjectMenu = function(){
  const template = [
    {
      label: "File",
      submenu: [
        {
          label: "New Project",
          accelerator: 'CmdOrCtrl+N',
          click(){
            createProject();
          }
        },
        {
          label: "Save Project",
          accelerator: 'CmdOrCtrl+S',
          click(){
            mainWindow.webContents.send('save_project');
          }
        },
        {
          label: "Save Project As",
          accelerator: 'CmdOrCtrl+S+Shift',
          click(){
            if(loadedproject == null){
              return;
            }

            const dialog = require('electron').dialog;
            const app = require('electron').app;
            const path = dialog.showSaveDialog({options: { title: "Create Project", defaultPath : app.getPath("home")}});
            const pathmod = require('path');
            var project = projects.createProjectDir(pathmod.basename(path), path);

            var fs = require('fs-extra');

            fs.copy(loadedproject.project.loadPath + '/' + loadedproject.project.project.name + '.xml', project.project.loadPath + '/' + project.project.project.name + '.xml', function(err){
              if(err){
                electron.dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
                  type: 'error',
                  title: 'Dragon Drop Error',
                  message: `Could not save project\n${err}`
                });
                return;
              }

              loadProject('load_project', project);
            });
          }
        },
        {
          label: "Load Project",
          accelerator: 'CmdOrCtrl+O',
          click(){
            loadProjectDialog();
          }
        },
        {
          type: 'separator'
        },
        {
          label: "Load in Arduino",
          accelerator: 'CmdOrCtrl+L',
          click(){
            const spawn = require('child_process').spawn;
            const path = arg.project.loadPath + '/' + arg.project.project.name + '/' + arg.project.project.name + '.ino';
            if (process.platform != 'darwin'){
              spawn('C:\\Program Files (x86)\\Arduino\\arduino.exe',[path]);
            }
            else{
              spawn('/Applications/Arduino.app/Contents/MacOS/Arduino',[path]);
            }
          }
        },
        {
          label: "Upload to Arduino",
          accelerator: 'CmdOrCtrl+U',
          click(){
            const spawn = require('child_process').spawn;
            const path = arg.project.loadPath + '/' + arg.project.project.name + '/' + arg.project.project.name + '.ino';
            var arduino = null;
            if(process.platform != 'darwin'){
              arduino = spawn('C:\\Program Files (x86)\\Arduino\\arduino_debug.exe',['--upload',path]);
            }
            else{
              arduino = spawn('/Applications/Arduino.app/Contents/MacOS/Arduino', ['--upload', path]);
            }
            var runningOutput = '';

            arduino.stdout.on('data', (data) => {
              runningOutput += data;
              console.log(`stdout: ${data}`);
            });

            arduino.stderr.on('data', (data) => {
              runningOutput += data;
              console.log(`stderr: ${data}`);
            });

            arduino.on('close', (code) => {
              if(code == 0){
                //success
                arduino_core.showUploadSuccess('Arduino');

                electron.dialog.showMessageBox({type: "info", message: "Program Uploaded To Arduino", buttons: ["OK"]});
              }else{
                arduino_core.showUploadFailure('Arduino');

                electron.dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
                  type: 'error',
                  title: 'Dragon Drop Error',
                  message: `Error Uploading To Arduino\n${runningOutput}`
                });
              }
              console.log(`child process exited with code ${code}`);

            });
          }
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {
          label: 'Toggle Developer Tools',
          accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
          click(item, focusedWindow) {
            if (focusedWindow)
              focusedWindow.webContents.toggleDevTools({mode: 'detach'});
          }
        },
        {
          label: 'View Code',
          accelerator: 'CmdOrCtrl+I',
          click(item, focusedWindow){
            focusedWindow.webContents.send('show_code');
          }
        }
      ]
    },
  ];

  if (process.platform === 'darwin') {
    const name = electron.app.getName()
    template.unshift({
      label: name,
      submenu: [
        {
          role: 'about'
        },
        {
          type: 'separator'
        },
        {
          role: 'services',
          submenu: []
        },
        {
          type: 'separator'
        },
        {
          role: 'hide'
        },
        {
          role: 'hideothers'
        },
        {
          role: 'unhide'
        },
        {
          type: 'separator'
        },
        {
          role: 'quit'
        }
      ]
    });
  }

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
};
