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
const buildNumber = 2;
const fs = require('fs-extra');
const path = require('path');
const {Project} = require('project');
const {LoadedProject} = require('project');

const filesystem = require(`filesystem`);
const arduino = require('arduino_core');
const electron = require('electron');
const {ipcMain} = require('electron');
const {dialog} = require('electron');
const {BrowserWindow} = require('electron');
const {Notification} = require('electron');

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
        fs.copySync(filesystem.getFilePath('project_types/ringo_robot/core_files/Ringo_Base_Sketch_Rev06_01'), path.join(filePath, name));

        let project = new Project();
        project.name = name;
        project.version = version;
        project.type = 'ringo';
        project.meta = {
            'version': buildNumber,
            'board': 'Arduino Pro or Pro Mini'
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
            'version': buildNumber,
            'board': 'Arduino Pro or Pro Mini'
        };
        loadedProject.loadedProject.type = 'wink';
    }

    if(loadedProject.getMetaData().version === 1){
        loadedProject.getMetaData().board = 'Arduino Pro or Pro Mini';
        loadedProject.getMetaData().version = 2;
    }

    exports.saveProject(loadedProject);
};

function invalidArduinoPath() {
    dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
      type: 'error',
      title: 'Dragon Drop Error',
      message: 'Error launching Arduino\nMake sure you have Arduino installed and the path correctly set in preferences.'
    });
}

function completedProject(code, output) {
    if (code == 0) {
        //success
        let successNotify = new Notification({
            title: 'Upload Complete',
            body: 'Program successfully uploaded to Ringo Bot.'
        })
        successNotify.show();

        electron.dialog.showMessageBox({
            type: "info",
            message: `Program Uploaded To Your Ringo Bot`,
            buttons: ["OK"]
        });
    } else {
        let failureNotify = new Notification({
            title: 'Upload Failed',
            body: 'There was an error uploading to Ringo Bot.'
        })
        failureNotify.show();

        electron.dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
          type: 'error',
          title: 'Dragon Drop Error',
          message: 'Error Uploading To Ringo Bot\nSee Arduino for details.'
        });
    }
}

function completedVerify(code, output) {
    if (code == 0) {
        //success
        let successNotify = new Notification({
            title: 'Verification Complete',
            body: 'Program has successfully been verified.'
        })
        successNotify.show();

        electron.dialog.showMessageBox({type: "info", message: `Program Verified`, buttons: ["OK"]});
    } else {
        let failureNotify = new Notification({
            title: 'Verification Failed',
            body: 'There was an error uploading to Ringo Bot.'
        })
        failureNotify.show();

        electron.dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
          type: 'error',
          title: 'Dragon Drop Error',
          message: 'Error Uploading To Ringo Bot\nSee Arduino IDE for details.'
        });
    }
}

/**
 * Each type of loadedProject can have its own additions to the menu system
 * @param menu The base template to start from
 * @param success The callback to make the menu be set as the active menu
 * @param failure The callback to make if some error prevents the menu from being created
 */
exports.mutateMenu = function (menu, project, success, failure, refresh) {
    arduino.addCoreArduinoMenuOptions(menu, project, completedProject, completedVerify, 'Upload Program to Ringo Bot', 'Uploading Program to Ringo Bot');
    arduino.addPort(menu, project, success, failure, refresh, exports.saveProject);
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
