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
const {shell} = require('electron');
const packageJSON = require('./package.json');
global.version = packageJSON.version;

const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
const Menu = electron.Menu;

const path = require('path');

const {dialog} = require('electron');
const {app} = require('electron');
app.setAppUserModelId("edu.digipen.dragondrop"); //set AUMID

const {ipcMain} = require('electron');
const projects = require('./project/projects');
const {checkVersion} = require('./project/projects');
const fs = require('fs-extra');
const projectTypes = require('project_types');
const arduinoCore = require('./arduino_core/arduino_core');
const log = require('electron-log');
let preferencesWindow;
const JSZip = require('jszip');
const {ProgressWindow} = require('./progress_dialog');
const {LoadedProject} = require('./project/projects');
const buffer = require('buffer');
const windowManager = require('./window_manager/window_manager');
let splashScreen = false;

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
        project = Object.assign(new projects.LoadedProject(), project);
        loadedProjects.push({
            label: `${project.getName()} - ${project.loadedProject.type}`,
            click() {
                loadProjectFromPath(project.projectPath);
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

function reportBug(err) {
    // shell.openExternal('https://digipen.atlassian.net/servicedesk/customer/portal/1/create/5');
    if(mainWindow) {
        mainWindow.webContents.send('report_bug', err || false);
    }
}

function addHelpMenu(menuHash) {
    menuHash['Help'] = [{
        label: 'View Wiki',
        click() {
            shell.openExternal('https://digipen.atlassian.net/wiki/spaces/DRAG/overview');
        }
    }];

    menuHash['Help'].push({
        label: 'Report Bug',
        click(){
            reportBug();
        }
    });

    menuHash['Help'].push({
        label: 'About',
        click: function () {
            let aboutWindow = new BrowserWindow({
                width: 800,
                height: 600,
                show: false,
            });
            aboutWindow.loadURL(`file://${__dirname}/static/about.html`);
            aboutWindow.on('ready-to-show', () => {
                aboutWindow.show();
            })
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
        click() {
            createProject();
        }
    });
    menuHash['File'].push({
        label: "Load Project",
        accelerator: 'CmdOrCtrl+O',
        click() {
            loadProjectDialog();
        }
    });

    fillRecentProjects(menuHash);
    menuHash['File'].push({
        label: 'Preferences',
        accelerator: 'CmdOrCtrl+,',
        click() {
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

function saveAs(defaultPath, parentWindow) {
    const saveAsPath = dialog.showSaveDialog(mainWindow, {
        title: "Save Project As",
        defaultPath: defaultPath,
        filters: [{
            name: 'DragonDrop Project',
            extensions: ['drop']
        }]
    });

    if (!saveAsPath) {
        return;
    }

    let version;
    if (!electron.remote) {
        version = global.version;
    } else {
        version = electron.remote.getGlobal('version');
    }

    let project = projectInterface.createNewProject(path.basename(saveAsPath, '.drop'), path.dirname(saveAsPath), version);
    if (project === null) {
        return;
    }

    parentWindow.send('save_project_as', project);
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
        click() {
            createProject();
        }
    });

    menuHash['File'].push({
        label: "Save Project",
        accelerator: 'CmdOrCtrl+S',
        click(item, displayedWindow) {
            if (displayedWindow)
                displayedWindow.webContents.send('save_project');
        }
    });

    menuHash['File'].push({
        label: "Save Project As",
        accelerator: 'CmdOrCtrl+S+Shift',
        click(item, focusedWindow) {
            if (!loadedproject) {
                return;
            }

            const defaultPath = path.join(app.getPath('documents'), "DragonDropProjects", `${arg.loadedProject.name}_Copy.drop`);
            saveAs(defaultPath, focusedWindow);
        }
    });

    menuHash['File'].push({
            label: "Load Project",
            accelerator: 'CmdOrCtrl+O',
            click() {
                loadProjectDialog();
            }
        }
    );
    fillRecentProjects(menuHash);

    menuHash['File'].push({
        label: 'Preferences',
        accelerator: 'CmdOrCtrl+,',
        click() {
            createPreferenceWindow();
        }
    });

    if (loadedproject && loadedproject.isLegacy()) {
        menuHash['File'].push({
            label: 'Archive Project',
            click() {
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
        menuHash['File'].push({
            label: 'Convert to .drop',
            click(item, focusedWindow) {
                const defaultPath = path.join(app.getPath('documents'), "DragonDropProjects", `${arg.loadedProject.name}.drop`);
                saveAs(defaultPath, focusedWindow);
            }
        })
    }

    //Add Edit
    fillEditMenu(menuHash);
    addToggleDevTools(menuHash);
    // console.log(menuHash);


    projectInterface.mutateMenu(menuHash, arg, () => {
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

let projectInterface = require('./project_types/wink_robot');

/**
 * Called to create a new loadedProject, loadedProject should be an object with a path, and a
 * name field
 */
ipcMain.on('create_new_project', (event, project, type) => {
    projectInterface = require(projectTypes.getRequirePath(type));
    //TODO: Most likely want to make this into a try catch block to give back more
    //information about the cause of the issue.
    // let newProject = ProjectInterface.createProjectDir(project.name, project.path);
    let version;
    if (!electron.remote) {
        version = global.version;
    } else {
        version = electron.remote.getGlobal('version');
    }
    // console.log(ProjectInterface);
    let newProject = projectInterface.createNewProject(project.name, project.path, version);

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
    const defaultPath = path.join(app.getPath('documents'), "DragonDropProjects");
    const pathToProject = dialog.showOpenDialog(mainWindow, {
        title: 'Load Project',
        defaultPath: defaultPath,
        filters: [{name: 'Dragon Drop Project', extensions: ['drop', 'digiblocks']}]
    });

    if (!pathToProject) {
        return;
    }

    loadProjectFromPath(pathToProject[0]);
}

//region PromptResponse
let promptResponse;
ipcMain.on('prompt', function (eventRet, arg) {
    promptResponse = null;
    let promptWindow = new BrowserWindow({
        parent: BrowserWindow.getFocusedWindow(),
        modal: true,
        width: 300,
        height: 200,
        show: false,
        resizable: false
    });
    arg.val = arg.val || '';
    const promptHtml = `<label for="val">${arg.title}</label>
  <form>
  <input id="val" value="${arg.val}" autofocus />
  <button type=sumbit onclick="require('electron').ipcRenderer.send('prompt-response', document.getElementById('val').value);window.close()">Ok</button>
  <button type=button onclick="window.close()">Cancel</button>
  </form>
  <style>body {font-family: sans-serif;} button {float:right; margin-left: 10px;} label,input {margin-bottom: 10px; width: 100%; display:block;}</style>`;
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
    app.addRecentDocument(loadedProject.projectPath || loadedProject.getProjectPath());

    const {width, height} = electron.screen.getPrimaryDisplay().workAreaSize;
    let window = new BrowserWindow({width: width, height: height, show: false});

    window.once('ready-to-show', () => {
        window.show();
    });

    //TODO: Allow for more then a single loadedProject to be open!
    if (mainWindow) {
        console.log('Closing the main window');
        mainWindow.destroy();
    }

    mainWindow = window;

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    projectInterface.displayProject(mainWindow, global.development, loadedProject);

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
    }else{
        if(!splashScreen) {
            //Showing the splash screen in this callback directly will crash
            setTimeout(() => showSplashScreen(), 0);
        }else{
            app.quit();
        }
    }
});


/**
 * Loads a project from the path to a given .digiblocks file if the file is able to be loaded it will then be displayed
 * else it will display an error and remove from the list of recent projects as needed
 * @param {string} projectPath Path to a .digiblocks file to load
 */
function loadDigiblocksFromPath(projectPath) {
    return new Promise((resolve, reject) => {
        fs.readJson(projectPath)
            .then(projectFile => {
                if (!checkVersion(global.version, projectFile.version)) {
                    reject({
                        message: `Version mismatch running ${global.version} need ${projectFile.version}`,
                        id: VERSION_MISMATCH
                    });
                    return;
                }

                projectInterface = require(projectTypes.getRequirePath(projectFile.type || 'wink'));
                resolve(projectInterface.loadProject(projectFile, path.dirname(projectPath), projectPath));
            })
            .catch(err => {
                reject(err);
            });
    });
}

const FILE_TOO_LARGE = 1;
const VERSION_MISMATCH = 2;

function loadDropFromPath(projectPath) {
    return new Promise((resolve, reject) => {
        const zip = new JSZip();
        const cachePath = fs.mkdtempSync(path.join(app.getPath('temp'), 'dragondrop'));
        let digiblocksFile;
        fs.stat(projectPath)
            .then(stats => {
                if (stats.size >= buffer.kMaxLength) {
                    reject({msg: 'File too large to load', id: FILE_TOO_LARGE});
                } else {
                    return fs.readFile(projectPath);
                }
            })
            .then(compressedData => {
                return zip.loadAsync(compressedData);
            })
            .then(fileData => {
                let files = [];
                fileData.forEach((relativePath, file) => {
                    if (!file.dir) {
                        files.push(file.async('nodebuffer').then(buffer => {
                            return fs.outputFile(path.join(cachePath, relativePath), buffer);
                        }));

                        if(relativePath.endsWith('.digiblocks')){
                            digiblocksFile = path.join(cachePath, relativePath);
                        }
                    }
                });
                return Promise.all(files);
            })
            .then(() => {
                return fs.readJson(digiblocksFile);
            })
            .then(projectFile => {
                if (!checkVersion(global.version, projectFile.version)) {
                    reject({
                        message: `Version mismatch running ${global.version} need ${projectFile.version}`,
                        id: VERSION_MISMATCH
                    });
                }
                projectInterface = require(projectTypes.getRequirePath(projectFile.type || 'wink'));
                resolve(projectInterface.loadProject(projectFile, cachePath, projectPath));
            })
            .catch(err => {
                reject(err);
            });
    });
}

ipcMain.on('project-load-error', (event, err) => {
    showSplashScreen(err);
});

function projectLoadErrorHandler(err) {
    log.error(err);

    switch (err.id) {
        case FILE_TOO_LARGE:
            dialog.showMessageBox(mainWindow, {
                type: "error",
                title: "Dragon Drop Error",
                message: "Project file is too large to load"
            });
            break;
        case VERSION_MISMATCH:
            dialog.showMessageBox(mainWindow, {
                type: "error",
                title: "Dragon Drop Error",
                message: "Project is from a newer version of Dragon Drop and cannot be loaded.\nUpdate Dragon Drop to continue!"
            });
            break;
        default:
            showUnknownError(err);
            break;
    }
}

function loadProjectFromPath(projectPath) {
    let progressWindow = new ProgressWindow('Loading Project');
    const extension = path.extname(projectPath);
    const loadProject = extension === '.drop' ? loadDropFromPath(projectPath) : loadDigiblocksFromPath(projectPath);
    loadProject
        .then(project => {
            progressWindow.destroy();
            log.debug('Loading ', project);
            displayProject(project);
        })
        .catch(err => {
            progressWindow.destroy();
            projectLoadErrorHandler(err)
        });
}

let projectToLoad = null;

function showUnknownError(err) {
    //
    // windowManager.create({
    //     width: 800,
    //     height: 600,
    //     show: false,
    //     resizable: false,
    //     parent: mainWindow
    // }, {
    //     url: 'file://' + __dirname + '/static/report_bug.html',
    //     model: err
    // });

    const option = dialog.showMessageBox(mainWindow, {
        type: 'error',
        title: 'Dragon Drop Error',
        message: 'Could not load project',
        detail: err.message,
        buttons: [
            'OK',
            'Report Bug'
        ]
    });

    if(option === 1){
        reportBug(err);
    }
}
function showSplashScreen(err) {
    if(mainWindow){
        mainWindow.destroy();
    }

    // Create the browser window.
    mainWindow = new BrowserWindow({width: 900, height: 500, resizable: false, show: false});
    // and load the index.html of the app.
    mainWindow.loadURL('file://' + __dirname + '/projects.html');

    mainWindow.on('ready-to-show', () => {
        mainWindow.show();
        splashScreen = true;
    });

    mainWindow.on('show', () => {
        if(err){
            showUnknownError(err);
            err = null;
        }
    });

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        splashScreen = false;
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function () {
    const yargs = require('yargs');
    const args = yargs(process.argv.slice(1)).argv;
    createDefaultMenu();


    //We need to show a window in this callback otherwise the application will quit, show always show the splash screen
    //if we get a project to load it will close this window. Hopefully before ready-to-show is called preventing flickering
    showSplashScreen();

    if (projectToLoad) {
        loadProjectFromPath(projectToLoad);
        return;
    }

    if (args._.length >= 1 && !process.defaultApp && process.platform === 'win32') {
        loadProjectFromPath(args._[0]);
    }

    arduinoCore.ensureLibraries(err => {
        log.err(err);
        dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
            type: 'error',
            title: 'Dragon Drop Error',
            message: `Could not setup libraries please install manually`
        });
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
    window.on('ready-to-show', () => {
        window.show();
    });
});

ipcMain.on('save_as_success', (event, project) => {
    project = Object.assign(new LoadedProject(), project);
    displayProject(project);
});

log.debug(app.getPath('userData'));