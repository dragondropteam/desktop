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
const BUILD_NUMBER = 3;
const PROJECT_TYPE = 'wink';
const fs = require('fs-extra');
const path = require('path');
const filesystem = require(`filesystem`);
const arduino = require('../../arduino_core/arduino_core');
const electron = require('electron');
const {BrowserWindow} = require('electron');
const {BaseProjectManager} = require('../project_types');

class WinkRobotProjectManager extends BaseProjectManager {
    constructor() {
        super(BUILD_NUMBER, PROJECT_TYPE, `${__dirname}\static`);
    }
    
    copyBaseFiles(name, filePath) {
        fs.createFileSync(path.join(filePath, name, `${name}.ino`));
        fs.copySync(filesystem.getFilePath('project_types/wink_robot/core_files/Wink_BaseSketch_Rev01_03'), path.join(filePath, name));
    }

    createMeta() {
        return {
            'version': BUILD_NUMBER,
            'board': 'Arduino Fio'
        };
    }

    migrate(loadedProject) {
        console.log(`Migrating project from ${loadedProject.loadedProject.meta.version} to ${BUILD_NUMBER}`);

        this.migrateMetaAndProjectType(loadedProject);

        if (loadedProject.loadedProject.meta.version === 1) {
            console.log('1 => 2\n Update meta to include board');
            loadedProject.loadedProject.meta.board = 'Arduino Fio';
            loadedProject.loadedProject.meta.version++;
        }

        //For now remove any .h file and .ino file and replace with .hpp and the .ino that reference the .hpp files
        if (loadedProject.loadedProject.meta.version === 2) {
            console.log('2 => 3\n  - Update .h to .hpp');

            try {
                fs.removeSync(loadedProject.getFileInProjectDir('FunStuff.ino'));
                console.log('FunStuff.ino deleted');
                fs.removeSync(loadedProject.getFileInProjectDir('FunStuff.h'));
                console.log('FunStuff.h deleted');
                fs.removeSync(loadedProject.getFileInProjectDir('WinkHardware.ino'));
                console.log('WinkHardware.ino deleted');
                fs.removeSync(loadedProject.getFileInProjectDir('WinkHardware.h'));
                console.log('WinkHardware.h deleted');
                fs.copySync(filesystem.getFilePath('project_types/wink_robot/core_files/Wink_BaseSketch_Rev01_03'), loadedProject.getProjectDir());
                console.log('.h updated to .hpp');
                loadedProject.loadedProject.meta.version++;
            } catch (err) {
                return console.error(err);
            }
        }

        this.saveProject(loadedProject);
    }

    mutateMenu(menu, project, success, failure, refresh) {
        arduino.addCoreArduinoMenuOptions(menu, project, completedProject, completedVerify, 'Upload Program to Wink Bot', 'Uploading Program to Wink Bot');
        arduino.addPort(menu, project, success, failure, refresh, exports.saveProject);
    }
}

exports.module = new WinkRobotProjectManager();

function completedProject(code, output) {
    if (code === 0) {
        //success
        arduino.showUploadSuccess('Wink Bot');

        electron.dialog.showMessageBox({
            type: "info",
            message: `Program Uploaded To Your Wink Bot`,
            buttons: ["OK"]
        });
    } else {
        arduino.showUploadFailure('Wink Bot');

        electron.dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
            type: 'error',
            title: 'Dragon Drop Error',
            message: 'Error Uploading To Wink Bot\nSee Arduino IDE for details.'
        });
    }
}

function completedVerify(code, output) {
    if (code === 0) {
        //success
        arduino.showVerifySuccess('Wink Bot');

        electron.dialog.showMessageBox({type: "info", message: `Program Verified`, buttons: ["OK"]});
    } else {
        arduino.showVerifyFailure('Wink Bot');

        electron.dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
            type: 'error',
            title: 'Dragon Drop Error',
            message: 'Error Uploading To Wink Bot\nSee Arduino IDE for details.'
        });
    }
}
