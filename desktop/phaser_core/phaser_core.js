const path = require('path');
const username = require('username');
const fs = require('fs-extra');
const {exec} = require('child_process');
const {ipcMain} = require('electron');
const {dialog} = require('electron');
const {BrowserWindow} = require('electron');

const builder = require("electron-builder");
const Platform = builder.Platform;
const {shell} = require('electron');
const {ProgressWindow} = require('progress_dialog');
function getCurrentPlatform() {
    switch (process.platform) {
        case 'linux':
            return;
        case 'win32':
            return;
        case 'darwin':
            return;
    }
}

function exportExecutable(sourceDir, name, callback) {
    const progress = new ProgressWindow('Exporting Executable');
    const defaultStartupJs =
        `const electron = require('electron')
        // Module to control application life.
        const app = electron.app
        // Module to create native browser window.
        const BrowserWindow = electron.BrowserWindow

        const path = require('path')
        const url = require('url')

        // Keep a global reference of the window object, if you don't, the window will
        // be closed automatically when the JavaScript object is garbage collected.
        let mainWindow

        function createWindow () {
          // Create the browser window.
          mainWindow = new BrowserWindow({width: 800, height: 600, webPreferences: {nodeIntegration: true, webSecurity: false}})

          // and load the index.html of the app.
          mainWindow.loadURL(url.format({
            pathname: path.join(__dirname, '${name}.html'),
            protocol: 'file:',
            slashes: true
          }))

          // Open the DevTools.
          //mainWindow.webContents.openDevTools()

          // Emitted when the window is closed.
          mainWindow.on('closed', function () {
            // Dereference the window object, usually you would store windows
            // in an array if your app supports multi windows, this is the time
            // when you should delete the corresponding element.
            mainWindow = null
          })
        }

        // This method will be called when Electron has finished
        // initialization and is ready to create browser windows.
        // Some APIs can only be used after this event occurs.
        app.on('ready', createWindow)

        // Quit when all windows are closed.
        app.on('window-all-closed', function () {
          // On OS X it is common for applications and their menu bar
          // to stay active until the user quits explicitly with Cmd + Q
          if (process.platform !== 'darwin') {
            app.quit()
          }
        })

        app.on('activate', function () {
          // On OS X it's common to re-create a window in the app when the
          // dock icon is clicked and there are no other windows open.
          if (mainWindow === null) {
            createWindow()
          }
        })`;


    const platformOut = getCurrentPlatform();

    const projectPackage = {
        name: name.replace(/\s+/g, '_').toLowerCase(),
        productName: name,
        version: "1.0.0",
        main: "main.js",
        build: {
            directories: {
                output: path.join(sourceDir, 'executables')
            }
        },
        scripts: {
            start: "electron .",
            package: `build --${Platform.current()}`
        },
        author: username.sync(),
        license: "UNLICENSED",
        devDependencies: {
            electron: "^1.4.1",
            "electron-build": "*"
        },
    };


    fs.outputJsonSync(path.join(sourceDir, name, 'package.json'), projectPackage, {}, (err) => {
        callback(err);
    });

    fs.outputFileSync(path.join(sourceDir, name, 'main.js'), defaultStartupJs, {}, (err) => {
        callback(err);
    });

    //We need to have all of our dependencies setup
    let install = exec("npm install", {
        cwd: path.join(sourceDir, name)
    });

    let error = "";
    install.stdout.on('data', (data) => {
        console.log(`install stdout: ${data}`);
    });

    install.stderr.on('data', (data) => {
        console.log(`install stderr: ${data}`);
        error += data;
    });

    install.on('close', (code) => {
        if (code != 0) {
            progress.destroy();
            callback(error, code);
            console.error('Process exited unsuccessfully');
            return;
        }

        let spawned = exec("npm run-script package", {
            cwd: path.join(sourceDir, name)
        });

        spawned.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        spawned.stderr.on('data', (data) => {
            error += data;
            console.log(`stderr: ${data}`);
        });

        spawned.on('close', (code) => {
            progress.destroy();
            callback(error, code);
            console.log(`child process exited with code ${code}`);
        });
    });
    //May want to research this again later
    //packager(options, callback);
}

exports.exportExecutable = exportExecutable;

exports.setupPhaserMenu = (menu, project) => {
    menu['Project'] = [{
        label: "Evaluate",
        accelerator: 'CmdOrCtrl+R',
        click(item, displayedWindow){
            //Send message to renderer to give us the workspace
            if (displayedWindow) {
                displayedWindow.send('eval');
                displayedWindow.send('show_code');
            }
        }
    }];

    // menu['Project'].push({
    //     label: "Export Executable",
    //     click(){
    //         exportExecutable(project.loadPath, project.getName(), (err, code) => {
    //             if (code != 0) {
    //                 dialog.showErrorBox('Error Creating Executable', 'Make sure you have the newest version of Node and NPM installed\n' + err);
    //                 console.log(err.message);
    //             }
    //             else {
    //                 dialog.showMessageBox({
    //                     type: "info",
    //                     title: "Executable Created",
    //                     message: `Created executable in ${path.join(project.loadPath, 'executables')}`
    //                 });
    //                 console.log('Success');
    //             }
    //         });
    //     }
    // });

    let label = 'File Manager';

    switch(process.platform){
        case 'darwin':
            label = 'Finder';
            break;
        case 'win32':
            label = 'Explorer';
            break;
    }

    menu['Project'].push({
        label: `Open Assets Directory in ${label}`,
        click(item, displayedWindow){
            const assetsDir = path.join(project.loadPath, project.getName(), 'assets', '/IGNORE.txt');
            fs.ensureFile(assetsDir)
                .then(() => {
                    shell.showItemInFolder(assetsDir)
                })
                .catch((error) =>{
                    dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
                        type: 'error',
                        title: 'ERROR'
                        message: error.getMsg()
                    });
                });
        }
    });

    menu['View'].push({
        label: 'Phaser Debug Console',
        accelerator: 'CmdOrCtrl+I+Shift+Alt',
        click(item, displayedWindow){
            //Send message to renderer to give us the workspace
            if (displayedWindow) {
                displayedWindow.send('show_embedded');
            }
        }

    });

    menu['View'].push({
        label: 'Views',
        submenu: [
            {
                label: 'Game',
                click(item, focusedWindow){
                    focusedWindow.webContents.send('show_phaser');
                }
            },
            {
                label: 'Code',
                click(item, focusedWindow){
                    focusedWindow.webContents.send('show_code');
                }
            }
        ]
    })
};
