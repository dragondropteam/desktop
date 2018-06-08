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
const BUILD_NUMBER = 1;
const PROJECT_TYPE = 'arduino';
const fs = require('fs-extra');
const path = require('path');
const arduino = require('../../arduino_core/arduino_core');
const electron = require('electron');
const {Boards} = require('../../arduino_core/arduino_core');
const {BrowserWindow} = require('electron');
const BaseProjectManager = require('../../base_project_manager/base_project_manager');

class ArduinoProjectManager extends BaseProjectManager {
    constructor(){
        super(BUILD_NUMBER, PROJECT_TYPE, `${__dirname}/static`);
    }

    copyBaseFiles(name, filePath) {
        fs.createFileSync(path.join(filePath, name, `${name}.ino`));
    }

    createMeta() {
        return {'version': BUILD_NUMBER};
    }

    migrate(loadedProject) {
        this.migrateMetaAndProjectType(loadedProject);
        this.saveProject(loadedProject);
    }

    mutateMenu(menu, project, success, failure, refresh) {
        arduino.addCoreArduinoMenuOptions(menu, project, completedProject, completedVerify, 'Upload Program to Arduino Board', 'Uploading Program to Arduino Board');
        arduino.addPort(menu, project, success, failure, refresh, this.saveProject);

        let start = true;
        let boards = [];
        for (let board in Boards) {
            if (!Boards.hasOwnProperty(board)) {
                continue;
            }
            let checked = project.loadedProject.meta.board ? project.loadedProject.meta.board == board : start;
            start = false;
            boards.push({
                label: board,
              type: 'radio',
              checked: checked,
              click: () => {
                    global.selectedBoard = Boards[board];
                    project.loadedProject.meta.board = board;
                    this.saveProject(project);
                }
            });
        }

        menu['Project'].push({
            label: 'Board',
            submenu: boards
        });
    }
}

function completedProject(code, output) {
    if (code === 0) {
        //success
        arduino.showUploadSuccess('Arduino');

        electron.dialog.showMessageBox({
            type: "info",
            message: `Program Uploaded To Your Board`,
            buttons: ["OK"]
        });


    } else {
        arduino.showUploadFailure('Arduino');

        electron.dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
          type: 'error',
          title: 'Dragon Drop Error',
          message: 'Error Uploading To Arduino\nSee console for more details'
        });
    }
}

function completedVerify(code, output) {
    if (code === 0) {
        //success
        arduino.showVerifySuccess();

        electron.dialog.showMessageBox({type: "info", message: `Program Verified`, buttons: ["OK"]});
    } else {
        arduino.showVerifyFailure();

        electron.dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
          type: 'error',
          title: 'Dragon Drop Error',
          message: 'Error Uploading To Arduino\nSee Arduino IDE for details'
        });
    }
}

module.exports = new ArduinoProjectManager();