/**
 * Created by lukepowell on 10/11/16.
 *
 * All content copyright DigiPen Institute of Technology 2016
 */
let index = 'index.html';
global.selectedPort = null;//Use the last selected board from the Arduino IDE

exports.setIndex = function (file) {
    index = file;
};


const electron = require('electron');
const packageJSON = require('./package.json');
global.version = packageJSON.version;

const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
const menu = require('./menu');
const Menu = electron.Menu;

const path = require('path');

const {dialog} = require('electron');
const {app} = require('electron');
//const {BrowserWindow} = require('electron');

const {ipcMain} = require('electron');
const projects = require('project');
const fs = require('fs-extra');
const projectTypes = require('project_types');
const arduinoCore = require('arduino_core');
let preferencesWindow;

//region AUTO_UPDATE
// Blocked until this can be signed!
// const {autoUpdater} = require('electron');
//
// autoUpdater.setFeedURL('http://wwwprod5.digipen.edu/home');
// autoUpdater.on('error', (e) =>{
//    console.log(e.message);
// });
//
// autoUpdater.on('checking-for-update', () =>{
//
// });
//
// autoUpdater.on('update-available', () =>{
//
// });
//
// autoUpdater.on('update-not-available', () =>{
//
// });
//
// autoUpdater.on('update-downloaded', () =>{
//
// });
// autoUpdater.checkForUpdates();
//endregion

function fillEditMenu(menuHash) {
    menuHash['Edit'] = [];
    menuHash['Edit'].push({label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:"});
    menuHash['Edit'].push({label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:"});
    menuHash['Edit'].push({type: "separator"});
    menuHash['Edit'].push({label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:"});
    menuHash['Edit'].push({label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:"});
    menuHash['Edit'].push({label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:"});
    menuHash['Edit'].push({label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:"});
}

function flattenMenu(menuHash) {
    let template = [];
    for (let menu in menuHash) {
        template.push({
            label: menu,
            submenu: menuHash[menu]
        });
    }
    return template;
}

function fillRecentProjects(menuHash) {
    let loadedProjects = [];
    const recentProjects = projects.getRecentProjects();
    recentProjects.forEach((project) => {
        project = new projects.LoadedProject(project.loadedProject, project.loadPath);
        loadedProjects.push({
            label: `${project.getName()} - ${project.loadedProject.type}`,
            click(){
                loadProjectFromPath(project.getProjectPath());
            }
        });
    });

    menuHash['File'].push({
        label: 'Load Recent Project',
        submenu: loadedProjects
    });
}

function addMacOSX(menuHash) {
    if (process.platform === 'darwin') {
        const name = electron.app.getName();
        menuHash[name] = [];
        menuHash[name].push({role: 'about'},
            {type: 'separator'},
            {role: 'services', submenu: []},
            {type: 'separator'},
            {role: 'hide'},
            {role: 'hideothers'},
            {role: 'unhide'},
            {type: 'separator'},
            {role: 'quit'});
    }
}

function addToggleDevTools(menuHash) {
    menuHash['View'] = [{
        label: 'DragonDrop Debug Console',
        accelerator: 'CmdOrCtrl+Shift+I',
        click(item, focusedWindow) {
            if (focusedWindow)
                focusedWindow.webContents.toggleDevTools();
        }
    }];
}

let wikiWindow = null;

function addHelpMenu(menuHash) {
    menuHash['Help'] = [{
        label: 'View Wiki',
        click(){
            const {shell} = require('electron');
            shell.openExternal('https://digipen.atlassian.net/wiki/spaces/DRAG/overview');
        }
    }];

    menuHash['Help'].push({
        label: 'Report Bug',
        click(){
            const {shell} = require('electron');
            shell.openExternal('https://digipen.atlassian.net/servicedesk/customer/portal/1');
        }
    })
}

function createDefaultMenu() {

    let menuHash = Object.create(null);

    //Add MacOS X specific field if necessary
    addMacOSX(menuHash);

    //Add File
    menuHash['File'] = [];
    menuHash['File'].push({
        label: "New Project",
        accelerator: 'CmdOrCtrl+N',
        click(){
            createProject();
        }
    });
    menuHash['File'].push({
            label: "Load Project",
            accelerator: 'CmdOrCtrl+O',
            click(){
                loadProjectDialog();
            }
        }
    );
    fillRecentProjects(menuHash);
    menuHash['File'].push({
        label: 'Preferences',
        accelerator: 'CmdOrCtrl+,',
        click(){
            createPreferenceWindow();
        }
    });


    //Add Edit
    fillEditMenu(menuHash);
    addToggleDevTools(menuHash);
    addHelpMenu(menuHash);
    let menu = Menu.buildFromTemplate(flattenMenu(menuHash));
    Menu.setApplicationMenu(menu);
}

function createPreferenceWindow() {
    if (preferencesWindow) {
        return;
    }

    preferencesWindow = new BrowserWindow({width: 600, height: 500, resizable: false});

    preferencesWindow.loadURL('file://' + __dirname + '/static/settings.html');

    preferencesWindow.once('ready-to-show', () => {
        preferencesWindow.show();
    });

    preferencesWindow.on('close', () => {
        preferencesWindow = null;
    });
}

function createProjectMenu(arg) {
    let menuHash = Object.create(null);
    //Add MacOS X specific field if necessary
    addMacOSX(menuHash);

    //Add File
    menuHash['File'] = [];
    menuHash['File'].push({
        label: "New Project",
        accelerator: 'CmdOrCtrl+N',
        click(){
            createProject();
        }
    });

    menuHash['File'].push({
        label: "Save Project",
        accelerator: 'CmdOrCtrl+S',
        click(item, displayedWindow){
            displayedWindow.webContents.send('save_project');
        }
    });

    menuHash['File'].push({
        label: "Save Project As",
        accelerator: 'CmdOrCtrl+S+Shift',
        click(){
            if (loadedproject == null) {
                return;
            }

            const path = dialog.showSaveDialog({
                options: {
                    title: "Create Project",
                    defaultPath: app.getPath("home")
                }
            });

            if (!path) {
                return;
            }
            const pathmod = require('path');
            let project = ProjectInterface.createProjectDir(pathmod.basename(path), path);

            if (project === null) {
                return;
            }


            if (fs.existsSync(loadedproject.getBlocksPath())) {
                fs.copy(loadedproject.getBlocksPath(), project.getBlocksPath(), function (err) {
                    if (err) {
                        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
                          type: 'error',
                          title: 'Dragon Drop Error',
                          message: `Could not save ${project.getName()}\n${err.message}`
                        });
                        return;
                    }

                    displayProject(project);
                });
            }

            if(fs.existsSync(pathmod.join(loadedproject.loadPath, loadedproject.getName(), "js"))){
                fs.copy(pathmod.join(loadedproject.loadPath, loadedproject.getName(), "js"), pathmod.join(project.loadPath, project.getName(), "js"), function (err) {
                    if (err) {
                        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
                          type: 'error',
                          title: 'Dragon Drop Error',
                          message: `Could not save ${project.getName()}\n${err.message}`
                        });
                    }
                });
            }

            if(fs.existsSync(pathmod.join(loadedproject.loadPath, loadedproject.getName(), "assets"))){
                fs.copy(pathmod.join(loadedproject.loadPath, loadedproject.getName(), "assets"), pathmod.join(project.loadPath, project.getName(), "assets"), function (err) {
                    if (err) {
                        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
                          type: 'error',
                          title: 'Dragon Drop Error',
                          message: `Could not save ${project.getName()}\n${err.message}`
                        });
                    }
                });
            }
        }
    });

    menuHash['File'].push({
            label: "Load Project",
            accelerator: 'CmdOrCtrl+O',
            click(){
                loadProjectDialog();
            }
        }
    );
    fillRecentProjects(menuHash);

    menuHash['File'].push({
        label: 'Preferences',
        accelerator: 'CmdOrCtrl+,',
        click(){
            createPreferenceWindow();
        }
    });

    menuHash['File'].push({
        label: 'Archive Project',
        click(){
            const defaultPath = path.join(app.getPath('documents'), "DragonDropProjects", `${arg.loadedProject.name}.zip`);
            const zipfolder = require('zip-folder');
            const zipFile = dialog.showSaveDialog(mainWindow, {
                title: 'Archive Project', defaultPath: defaultPath, filters: [
                    {name: 'ZIP Files', extensions: ['zip']}
                ]
            });

            if (zipFile) {
                zipfolder(arg.loadPath, zipFile, (err) => {
                    if (err) {
                        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
                          type: 'error',
                          title: 'Dragon Drop Error',
                          message: `Could not archive project\n${err.message()}`
                        });
                    } else {
                        dialog.showMessageBox({
                            title: 'Project Archived',
                            message: `Successfully archived project to\n${zipFile}`,
                            buttons: []
                        });
                    }
                });
            }
        }
    });

    //Add Edit
    fillEditMenu(menuHash);
    addToggleDevTools(menuHash);
    // console.log(menuHash);


    ProjectInterface.mutateMenu(menuHash, arg, () => {
        addHelpMenu(menuHash);
        Menu.setApplicationMenu(Menu.buildFromTemplate(flattenMenu(menuHash)));
    }, () => {
        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
          type: 'error',
          title: 'Dragon Drop Error',
          message: 'Menu could not be created!'
        });

    }, createProjectMenu);
}

ipcMain.on('refresh_menu', (event, project) => {
    createProjectMenu(project);
});

let createProjectWindow;
ipcMain.on('create_project', createProject);

let ProjectInterface = require('./project_types/wink_robot');

/**
 * Called to create a new loadedProject, loadedProject should be an object with a path, and a
 * name field
 */
ipcMain.on('create_new_project', (event, project, type) => {
    ProjectInterface = require(projectTypes.getRequirePath(type));
    //TODO: Most likely want to make this into a try catch block to give back more
    //information about the cause of the issue.
    let newProject = ProjectInterface.createProjectDir(project.name, project.path);

    if (newProject) {
        displayProject(newProject);
    } else {
        const {dialog} = require('electron');
        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
          type: 'error',
          title: 'Dragon Drop Error',
          message: 'Could not create loadedProject\nCheck the path and try again!'
        });
    }

    if (createProjectWindow) {
        createProjectWindow.close();
        createProjectWindow = null;
    }
});

function createProject() {
    if (!createProjectWindow) {
        createProjectWindow = new BrowserWindow({width: 800, height: 400, show: false, resizable: false});
        createProjectWindow.once('ready-to-show', () => {
            createProjectWindow.show();
        });

        createProjectWindow.on('closed', () => {
            createProjectWindow = null;
        });

        createProjectWindow.loadURL(`file://${__dirname}/static/new_project.html`);
    }
}

function loadProjectDialog() {
    const dialog = require('electron').dialog;
    const app = require('electron').app;
    const defaultPath = path.join(app.getPath('documents'), "DragonDropProjects");
    console.log(defaultPath);
    const pathToProject = dialog.showOpenDialog(mainWindow, {
        title: 'Load Project',
        defaultPath: defaultPath,
        filters: [{name: 'Dragon Drop Project', extensions: ['digiblocks']}]
    });

    if (!pathToProject) {
        return;
    }

    loadProjectFromPath(pathToProject[0]);
}

//region PromptReponse
let promptResponse;
ipcMain.on('prompt', function (eventRet, arg) {
    promptResponse = null;
    let promptWindow = new BrowserWindow({
        width: 300,
        height: 200,
        show: false,
        resizable: false,
        movable: false,
        alwaysOnTop: true,
        frame: false
    });
    arg.val = arg.val || '';
    const promptHtml = '<label for="val">' + arg.title + '</label>\
  <form>\
  <input id="val" value="' + arg.val + '" autofocus />\
  <button type=sumbit onclick="require(\'electron\').ipcRenderer.send(\'prompt-response\', document.getElementById(\'val\').value);window.close()">Ok</button>\
  <button type=button onclick="window.close()">Cancel</button>\
  </form>\
  <style>body {font-family: sans-serif;} button {float:right; margin-left: 10px;} label,input {margin-bottom: 10px; width: 100%; display:block;}</style>';
    promptWindow.loadURL('data:text/html,' + promptHtml);
    promptWindow.show();
    promptWindow.on('closed', function () {
        eventRet.returnValue = promptResponse;
        promptWindow = null
    })
});

ipcMain.on('prompt-response', function (event, arg) {
    if (arg === '') {
        arg = null
    }
    promptResponse = arg
});
//endregion

//region CodeWindow
let codeWindow;
ipcMain.on('show_code', function (event, arg) {
    codeWindow = new BrowserWindow({width: 800, height: 600});
    codeWindow.loadURL('file://' + __dirname + '/code.html');
    codeWindow.webContents.on('did-finish-load', () => {
        codeWindow.send('show_code', arg);
    });

    codeWindow.webContents.on('closed', () => {
        codeWindow = null;
    });
});
//endregion

let loadedproject;

function displayProject(loadedProject) {
    loadedproject = loadedProject;
    projects.addToRecentProjects(loadedProject);
    app.addRecentDocument(loadedProject.getProjectPath());

    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
    let window = new BrowserWindow({width: width, height: height, show: false});

    window.once('ready-to-show', () => {
        window.show();
    });

    //TODO: Allow for more then a single loadedProject to be open!
    if (mainWindow) {
        mainWindow.close();
    }

    mainWindow = window;

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    ProjectInterface.displayProject(window, global.development, loadedProject);

    // //The menu cannot be dynamic we have to recreate the entire thing whenever focus is changed.
    // mainWindow.on('focus', ()  =>{
    //   createProjectMenu(loadedProject);
    // });

    createProjectMenu(loadedProject);
}

ipcMain.on('load_project', (event, arg) => {
    loadProjectFromPath(arg);
});

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

/**
 * Loads a project from the path to a given .digiblocks file if the file is able to be loaded it will then be displayed
 * else it will display an error and remove from the list of recent projects as needed
 * @param {string} projectPath Path to a .digiblocks file to load
 */
function loadProjectFromPath(projectPath) {
    try{
        let json = fs.readJsonSync(projectPath);
        ProjectInterface = require(projectTypes.getRequirePath(json.type || 'wink'));

        let project = ProjectInterface.loadProject(projectPath);
        if (project !== null) {
            displayProject(project);
         } else {
            dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
              type: 'error',
              title: 'Dragon Drop Error',
              message: `Could not open project at ${projectPath}`
            });
        }
    }catch(ex){
        console.error(ex);
        const message = !fs.existsSync(projectPath) ? 'The selected project does not exist.\nIt will be removed from recent projects if present' : 'Could not open the selected project';
        //There was an error trying to load the project, this most likely will occur when the user deleted a file from
        //disk. So prompt the user with an error that the project cannot be loaded then remove it from the list of
        //recent projects.
        dialog.showMessageBox(mainWindow, {
            type: "error",
            message: message
        });

        projects.removeFromRecentProjects(path.dirname(projectPath));

        //Update the mainWindow if it cares
        mainWindow.send('recent_projects_updated');
    }
}

let projectToLoad = null;

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {
    const yargs = require('yargs');
    const args = yargs(process.argv.slice(1)).argv;
    createDefaultMenu();

    if (projectToLoad) {
        loadProjectFromPath(projectToLoad);
        return;
    }
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 600, height: 500, resizable: false});

    if (args._.length >= 1 && !process.defaultApp && process.platform === 'win32') {
        loadProjectFromPath(args._[0]);
    } else {
        // and load the index.html of the app.
        mainWindow.loadURL('file://' + __dirname + '/projects.html');
    }

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });
});

app.on('open-file', (event, path) => {
    console.log(`open ${path}`);
    event.preventDefault();
    if (app.isReady()) {
        loadProjectFromPath(path);
    }
    else {
        projectToLoad = path;
    }
});

ipcMain.on('update_arduino_path', (event, newPath) => {
    if (process.platform === 'darwin') {
        newPath = path.join(newPath, arduinoCore.macPrefix);
    }

    arduinoCore.setArduinoPath(newPath);

    if (preferencesWindow) {
        preferencesWindow.close();
    }
});

ipcMain.on('cancel_settings', () => {
    if (preferencesWindow) {
        preferencesWindow.close();
    }
});

ipcMain.on('load_project_dialog', () => {
    loadProjectDialog();
});

ipcMain.on('update_settings', () => {
    if (mainWindow) {
        mainWindow.send('settings_updated');
    }
});

ipcMain.on('show_help', (event, url) => {
    // console.log(url);
    const window = new BrowserWindow({width: 800, height: 600, show: false});
    window.loadURL(url);
    window.on('ready-to-show', () =>{
        window.show();
    });
});
