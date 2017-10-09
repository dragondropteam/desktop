/**
 * @file
 * @copyright All content copyright DigiPen Institute of Technology
 * @author Luke Powell
 */

const pathKey = 'ARDUINO_PATH';
const Config = require('electron-store');
const config = new Config();
const defaultWindows = 'C:\\Program Files (x86)\\Arduino\\arduino_debug.exe';
const defaultMac = '/Applications/Arduino.app/Contents/MacOS/Arduino';
const {spawn} = require('child_process');
const path = require('path');
const {dialog} = require('electron');

/**
 * To actually call the application on Mac this string needs to be appended
 * after Arduino.app.
 * @type {string}
 */
const macPrefix = '/Contents/MacOS/Arduino';
const {BrowserWindow} = require('electron');
const {ProgressWindow} = require('progress_dialog');

exports.macPrefix = macPrefix;

/**
 * Listing of display name to name that we pass to the command line
 * --board package:arch:board[:parameters]
 * @type {Array}
 */
const Boards = [];

Boards['Arduino Yun'] = 'arduino:avr:yun';
Boards['Arduino/Genuino Uno'] = 'arduino:avr:uno';
Boards['Arduino Duemilanove or Diecimila'] = 'arduino:avr:diecimila';
Boards['Arduino Nano'] = 'arduino:avr:nano';
Boards['Arduino/Genuino Mega or Mega 2560'] = 'arduino:avr:mega';
Boards['Arduino Mega ADK'] = 'arduino:avr:megaADK';
Boards['Arduino Leonardo'] = 'arduino:avr:leonardo';
Boards['Arduino Micro'] = 'arduino:avr:micro';
Boards['Arduino Esplora'] = 'arduino:avr:esplora';
Boards['Arduino Mini'] = 'arduino:avr:mini';
Boards['Arduino Ethernet'] = 'arduino:avr:ethernet';
Boards['Arduino Fio'] = 'arduino:avr:fio';
Boards['Arduino BT'] = 'arduino:avr:bt';
Boards['LilyPad Arduino USB'] = 'arduino:avr:LilyPadUSB';
Boards['LilyPad Arduino'] = 'arduino:avr:lilypad';
Boards['Arduino Pro or Pro Mini'] = 'arduino:avr:pro';
Boards['Arduino NG or older'] = 'arduino:avr:atmegang';
Boards['Arduino Robot Control'] = 'arduino:avr:robotControl';
Boards['Arduino Robot Motor'] = 'arduino:avr:robotMotor';
Boards['Arduino Gemma'] = 'arduino:avr:gemma';


exports.Boards = Boards;

/**
 * arduino_debug.exe is necessary on Windows if the user attempts to use arduino.exe simply silently replace it and
 * update the preferences. This may occur if the user incorrectly sets the path manually, or if they had an older
 * version of DragonDrop installed and any setting was updated.
 *
 * @returns {string} The path to arduino_debug.exe
 */
function getArduinoPathWindowsFixed(){
    let path = config.get(pathKey) || defaultWindows;
    if(path === 'C:\\Program Files (x86)\\Arduino\\arduino.exe'){
        path = defaultWindows;
        config.set(pathKey, defaultWindows);
    }

    return path;
}

/**
 * Returns the platform correct path to Arduino, will use user entered path or the default if the user has not manually
 * configured the path
 * @return {string} The path to the Arduino executable for the platform we are currently executing on
 */
function getArduinoPath() {
    if (process.platform == 'win32') {
        return getArduinoPathWindowsFixed();
    } else if (process.platform == 'darwin') {
        return config.get(pathKey) || defaultMac;
    } else {
        return config.get(pathKey) || '';
    }
}

exports.getArduinoPath = getArduinoPath;

/**
 * @param newPath The path to the Arduino executable
 */
exports.setArduinoPath = function (newPath) {
    config.set(pathKey, newPath);
};

/**
 * Loads a project into the Arduino IDE
 * @param path The path to .ino file for a given project
 * @return {ChildProcess} The child process
 */
exports.loadInArduino = function (path) {
    return spawn(getArduinoPath(), [path]);
};

/**
 * Uploads a project to a connected board
 * @param path The path to .ino file for a given project
 * @param board The identifier for a board should be one of {@link Boards}
 * @param port The identifier for the port the board is connected to
 * @return {ChildProcess} The spawned process of the Arduino IDE used to upload the project
 */
exports.uploadToArduino = function (path, board, port) {
    let args = ['--upload'];
    console.log(`Uploading to Arudino platform with board ${board} and port ${port}`)

    if (board != null) {
        args.push(`--board`);
        args.push(`${Boards[board]}`);
    }
    if (port != null) {
        args.push(`--port`);
        args.push(`${port}`);
    }

    /**
     * Put this last
     */
    args.push(path);

    return spawn(getArduinoPath(), args);
};

/**
 * Verifies a program, checks for compile errors
 * @param path The path to .ino file for a given project
 * @return {ChildProcess} The spawned process of the Arduino IDE used to upload the project
 */
exports.verifyProgram = function (path) {
    return spawn(getArduinoPath(), [path, '--verify']);
};

/**
 * Helper function to return the path
 * @param {LoadedProject} loadedProject
 * @return {string} The path to the .ino file for the loaded project
 */
exports.getInoPath = function (loadedProject) {
    return loadedProject.getFileInProjectDir(`${loadedProject.getName()}.ino`);
};

/**
 * Display an error that occurred when we tried to launch the Arduino platform
 * @param err The error that was generated to be displayed after the generic error message, or null if no such error
 */
function invalidArduinoPath(err) {
    let errorMessage = 'Make sure you have Arduino installed and the path correctly set in preferences.';
    if (err) {
        errorMessage += '\n' + err.message;
    }
    dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
      type: 'error',
      title: 'Dragon Drop Error',
      message: `Error launching Arduino\n${errorMessage}`
    });
}


exports.addPort = function (menu, project, success, failure, refresh, saveProject) {
    let start = true;
    const SerialPort = require('serialport');
    let portMenus = [];
    SerialPort.list((err, ports) => {
        ports.forEach((port) => {
            let portLabel = port.manufacturer ? `${port.comName} | ${port.manufacturer}` : port.comName;
            let checked = project.loadedProject.meta.port ? project.loadedProject.meta.port == port.comName : start;
            start = false;

            portMenus.push({
                label: portLabel,
                type: 'radio', checked: checked,
                click: function () {
                    global.selectedPort = port.comName;
                    project.loadedProject.meta.port = port.comName;
                    saveProject(project);
                }
            });
        });
        console.log(ports);
        menu['Project'].push({
            label: 'Ports',
            submenu: portMenus
        });
        menu['Project'].push({
            label: 'Refresh Ports',
            click: () => {
                refresh(project);
            }
        });
        success();
    });
};

/**
 * Adds the Project menu for Arduino based projects
 * @param menu The current menuHash
 * @param project The project that is currently loaded
 * @param uploadComplete A function to call when uploading a project completes
 * @param verifyComplete A function to call when verifying a project completes
 * @param uploadLabel Text to display in the menu bar for the upload action
 * @param uploadingLabel Optional message to display when uploading defaults to uploadLabel
 */
exports.addCoreArduinoMenuOptions = function (menu, project, uploadComplete, verifyComplete, uploadLabel, uploadingLabel) {
    menu['Project'] = [];

    menu['Project'].push({
        label: 'Arduino IDE',
        submenu: [{
        label: "Open Project in Arduino IDE",
        accelerator: 'CmdOrCtrl+L',
        click(){
            try {
                const child = exports.loadInArduino(exports.getInoPath(project));
                child.on('error', (err) => {
                    invalidArduinoPath(err);
                });
            } catch (e) {
                invalidArduinoPath(e);
            }
        }}]
    });

    menu['Project'].push({
        label: uploadLabel,
        accelerator: 'CmdOrCtrl+U',
        click(){
            try {
                const child = exports.uploadToArduino(exports.getInoPath(project), project.getMetaData() != null ? project.getMetaData().board : null, project.getMetaData() != null ? project.getMetaData().port : global.selectedPort);
                let runningOutput = '';
                let error = false;

                let progress = new ProgressWindow(uploadingLabel || uploadLabel);
                child.on('error', (err) => {
                    invalidArduinoPath(err);
                    error = true;
                });

                child.stdout.on('data', (data) => {
                    runningOutput += data;
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data) => {
                    runningOutput += data;
                    console.error(`stderr: ${data}`);
                });

                child.on('close', (code) => {
                    progress.destroy();
                    if (error) {
                        return;
                    }
                    uploadComplete(code, runningOutput);
                    console.log(`child process exited with code ${code}`);
                });
            } catch (e) {
                invalidArduinoPath(e);
            }
        }
    });

    menu['Project'].push({
        label: "Verify Program",
        accelerator: 'CmdOrCtrl+T',
        click(){
            try {
                const child = exports.verifyProgram(exports.getInoPath(project));
                let runningOutput = '';
                let error = false;
                let progress = new ProgressWindow('Verifying Program');

                child.on('error', (err) => {
                    invalidArduinoPath(err);
                    error = true;
                });

                child.stdout.on('data', (data) => {
                    runningOutput += data;
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data) => {
                    runningOutput += data;
                    console.log(`stderr: ${data}`);
                });

                child.on('close', (code) => {
                    progress.destroy();
                    if (error) {
                        return;
                    }

                    verifyComplete(code, runningOutput);
                    console.log(`child process exited with code ${code}`);
                });
            } catch (e) {
                invalidArduinoPath(e);
            }
        }
    });

    menu['Project'].push({
        type: 'separator'
    });

    menu['View'].push({
        label: 'Views',
        submenu: [{
            label: 'Blockly',
            click(item, focusedWindow){
                focusedWindow.webContents.send('show_blockly');
            }
        }, {
            label: 'Code',
            click(item, focusedWindow){
                focusedWindow.webContents.send('show_code');
            }
        }]
    });
};
