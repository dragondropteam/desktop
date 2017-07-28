/**
 * All content copyright DigiPen Institute of Technology 2016
 *
 * Created by lukepowell on 11/8/16.
 */
require('../../project/projects');

/** Version of the wink library separate from the overall application
 *
 * @type {number}
 */
const buildNumber = 1;
const fs = require('fs-extra');
const path = require('path');
const {Project} = require('../../project/projects');
const {LoadedProject} = require('../../project/projects');

const filesystem = require(`../../filesystem/filesystem`);
const arduino = require('../../arduino_core/arduino_core');
const electron = require('electron');
const {Boards} = require('../../arduino_core/arduino_core');
const {dialog} = require('electron');

function invalidArduinoPath() {
    dialog.showErrorBox('Error launching Arduino', 'Make sure you have Arduino installed and the path correctly set in preferences.');
}

exports.createProjectDir = function (name, filePath) {
    if (!path.isAbsolute(filePath)) {
        return null;
    }

    try {
        let version;
        let electron = require('electron');

        if (!electron.remote) {
            version = global.version;
        } else {
            version = electron.remote.getGlobal('version');
        }

        fs.mkdirsSync(filePath);
        fs.mkdirsSync(path.join(filePath, name));

        fs.createFileSync(path.join(filePath, name, `${name}.ino`));

        let project = new Project();
        project.name = name;
        project.version = version;
        project.type = 'arduino';
        project.meta = {
            'version': buildNumber,
        };
        fs.writeJsonSync(`${filePath}/${name}.digiblocks`, project);
        return new LoadedProject(project, filePath);
    } catch (e) {
        console.error(e.lineNumber);
        console.error(e.message);
        return null;
    }
};

exports.loadProject = function (filePath) {
    let project = fs.readJsonSync(filePath);
    let loadedProject = new LoadedProject(project, path.dirname(filePath));

    if ((project.meta && project.meta.version < buildNumber) || (!project.meta) || (!project.type)) {
        exports.migrate(loadedProject);
    }

    return loadedProject;
};

exports.saveProject = function (project) {
    fs.outputJsonSync(project.getProjectPath(), project.loadedProject);
};

/**
 * If there are any changes to the loadedProject meta they can be represented here
 * @param loadedProject The loadedProject to migrate to the new version
 */
exports.migrate = function (loadedProject) {
    if (!loadedProject.loadedProject.meta || !loadedProject.loadedProject.type) {
        loadedProject.loadedProject.meta = {
            'version': buildNumber
        };
        loadedProject.loadedProject.type = 'arduino';
    }
    exports.saveProject(loadedProject);
};


function completedProject(code, output) {
    if (code === 0) {
        //success
        electron.dialog.showMessageBox({
            type: "info",
            message: `Program Uploaded To Your Board`,
            buttons: ["OK"]
        });
    } else {
        electron.dialog.showErrorBox("Error Uploading To Arduino",'See console for more details');
    }
}

function completedVerify(code, output) {
    if (code === 0) {
        //success
        electron.dialog.showMessageBox({type: "info", message: `Program Verified`, buttons: ["OK"]});
    } else {
        electron.dialog.showErrorBox("Error Uploading To Arduino", 'See Arduino IDE for details');
    }
}

/**
 * Each type of loadedProject can have its own additions to the menu system
 * @param menu The base template to start from
 * @param project
 * @param fileIndex
 * @param project
 * @param fileIndex
 * @param success The callback to make the menu be set as the active menu
 * @param failure The callback to make if some error prevents the menu from being created
 */
exports.mutateMenu = function (menu, project, success, failure, refresh) {
    arduino.addCoreArduinoMenuOptions(menu, project, completedProject, completedVerify, 'Upload Program to Arduino Board');
    arduino.addPort(menu, project, success, failure, refresh, exports.saveProject);

    let start = true;
    let boards = [];
    for (let board in Boards) {
        if (!Boards.hasOwnProperty(board)) {
            continue;
        }
        let checked = project.loadedProject.meta.board ? project.loadedProject.meta.board == board : start;
        start = false;
        boards.push({
            label: board, type: 'radio', checked: checked, click(){
                global.selectedBoard = Boards[board];
                project.loadedProject.meta.board = board;
                exports.saveProject(project);
            }
        });
    }

    menu['Project'].push({
        label: 'Board',
        submenu: boards
    });
};

/**
 * Display the loadedProject in the given window
 * @param window The window that was created in main_core.js
 * @param debug If we are are running in production versus running development
 * @param project The loadedProject to display in the opened window
 */
exports.displayProject = function (window, debug, project) {
    let index = debug ? 'index_dev.html' : 'index.html';

    //Load the loadedProject view
    window.loadURL(`file://${__dirname}/static/${index}`);
    window.webContents.on('did-finish-load', () => {
        window.send('set_project', project);
    });
};


