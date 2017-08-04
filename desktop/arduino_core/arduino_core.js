/**
 * All content copyright DigiPen Institute of Technology
 *
 * Created by lukepowell on 11/15/16.
 */
const pathKey = 'ARDUINO_PATH';
const Config = require('electron-store');
const config = new Config();
const defaultWindows = 'C:\\Program Files (x86)\\Arduino\\arduino_debug.exe';
const defaultMac = '/Applications/Arduino.app/Contents/MacOS/Arduino';
const {spawn} = require('child_process');
const path = require('path');
const {dialog} = require('electron');
const ipcRenderer = require('electron').ipcRenderer;

/**
 * To actually call the application on Mac this string needs to be appended
 * after Arduino.app.
 * @type {string}
 */
const macPrefix = '/Contents/MacOS/Arduino';
const {BrowserWindow} = require('electron');
const {ProgressWindow} = require('../progress');

exports.macPrefix = macPrefix;

/**
 * Listing of display name to name that we pass to the command line
 * --board package:arch:board[:parameters]
 */

/**
 *
 * @type {Array}
 */
var Boards = [];

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

function getArduinoPath() {
    if (process.platform == 'win32') {
        return config.get(pathKey) || defaultWindows;
    } else if (process.platform == 'darwin') {
        return config.get(pathKey) || defaultMac;
    } else {
        return config.get(pathKey) || '';
    }
}

exports.getArduinoPath = getArduinoPath;

/**
 * @param newPath
 */
exports.setArduinoPath = function (newPath) {
    config.set(pathKey, newPath);
};

exports.loadInArduino = function (path) {
    return spawn(getArduinoPath(), [path]);
};

exports.uploadToArduino = function (path, board, port) {
    var args = ['--upload'];
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

exports.verifyProgram = function (path) {
    return spawn(getArduinoPath(), [path, '--verify']);
};

exports.getInoPath = function (loadedProject) {
    return path.join(loadedProject.loadPath, loadedProject.getName(), `${loadedProject.getName()}.ino`);
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
    dialog.showErrorBox('Error launching Arduino', errorMessage);
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
 * Adds the Project menu
 * @param menu The current menuHash
 * @param project The project that is currently loaded
 * @param uploadComplete A function to call when uploading a project completes
 * @param verifyComplete A function to call when verifying a project completes
 */
exports.addCoreArduinoMenuOptions = function (menu, project, uploadComplete, verifyComplete, uploadLabel) {
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

                let progress = new ProgressWindow(uploadLabel);
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
                var runningOutput = '';
                let error = false;

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