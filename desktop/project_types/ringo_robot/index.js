/**
 * @file Exports core functions for projects
 * @author Luke Powell
 * @copyright DigiPen Institute of Technology 2018
 */
require('../../project/projects');

/** Version of the wink library separate from the overall application
 *
 * @type {number}
 */
const BUILD_NUMBER = 3;
const PROJECT_TYPE = 'ringo';

const fs = require('fs-extra');
const path = require('path');

const filesystem = require('../../filesystem/filesystem');
const arduino = require('../../arduino_core/arduino_core');
const electron = require('electron');
const {BrowserWindow} = require('electron');
const BaseProjectManager = require('../../base_project_manager/base_project_manager');
const BOARD = 'Arduino Pro or Pro Mini';
const CPU = 'cpu=8MHzatmega328';
const log = require('electron-log');

class RingoRobotProjectManager extends BaseProjectManager {
  constructor () {
    super(BUILD_NUMBER, PROJECT_TYPE, `${__dirname}/static`);
  }

  copyBaseFiles (name, filePath) {
    fs.createFileSync(path.join(filePath, name, `${name}.ino`));
    fs.copySync(filesystem.getFilePath('project_types/ringo_robot/core_files/Ringo_Base_Sketch_Rev06_01'), path.join(filePath, name));
  }

  createMeta () {
    return {
      'version': BUILD_NUMBER,
      'board': BOARD,
      'optParams': CPU
    };
  }

  migrate (loadedProject) {
    this.migrateMetaAndProjectType(loadedProject);

    if (loadedProject.getMetaData().version === 1) {
      log.debug('Ringo Version 1 -> Version 2');
      loadedProject.getMetaData().board = BOARD;
      loadedProject.getMetaData().version = 2;
    }

    if (loadedProject.getMetaData().version === 2) {
      log.debug('Ringo Version 2 -> Version 3');
      loadedProject.getMetaData.optParams = CPU;
      loadedProject.getMetaData().version = 3;
    }

    this.saveProject(loadedProject);
  }

  mutateMenu (menu, project, success, failure, refresh) {
    arduino.addCoreArduinoMenuOptions(menu, project, completedProject, completedVerify, 'Upload Program to Ringo Bot', 'Uploading Program to Ringo Bot');
    arduino.addPort(menu, project, success, failure, refresh, this.saveProject);
  }
}

function completedProject (code, output) {
  if (code === 0) {
    //success
    arduino.showUploadSuccess('Ringo Bot');

    electron.dialog.showMessageBox({
      type: 'info',
      message: `Program Uploaded To Your Ringo Bot`,
      buttons: ['OK']
    });
  } else {
    arduino.showUploadFailure('Ringo Bot');

    electron.dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
      type: 'error',
      title: 'Dragon Drop Error',
      message: 'Error Uploading To Ringo Bot\nSee Arduino for details.'
    });
  }

  // console.error(output);
}

function completedVerify (code, output) {
  if (code === 0) {
    //success
    arduino.showVerifySuccess('Ringo Bot');

    electron.dialog.showMessageBox({type: 'info', message: `Program Verified`, buttons: ['OK']});
  } else {
    arduino.showVerifyFailure('Ringo Bot');

    electron.dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
      type: 'error',
      title: 'Dragon Drop Error',
      message: 'Error Uploading To Ringo Bot\nSee Arduino IDE for details.'
    });
  }

  // console.log(output);
}

module.exports = new RingoRobotProjectManager();
