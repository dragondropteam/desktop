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
const PROJECT_TYPE = 'text_phaser';

const fs = require('fs-extra');
const path = require('path');

const filesystem = require(`filesystem`);
const corePhaser = require('../../phaser_core/phaser_core');
const {BaseProjectManager} = require('../project_types');

class TextPhaserProjectManager extends BaseProjectManager {
    constructor(){
        super(BUILD_NUMBER, PROJECT_TYPE, `${__dirname}/static`);
    }

    copyBaseFiles(name, filePath){
        fs.copySync(filesystem.getFilePath('project_types/text_phaser/core_files/phaser_base.html'), path.join(filePath, name, `${name}.html`));
        fs.copySync(filesystem.getFilePath('project_types/text_phaser/core_files/js'), path.join(filePath, name,'js'));
    }

    createMeta(){
        return {
            'version': BUILD_NUMBER,
        };
    }

    migrate(loadedProject){
        if (!loadedProject.loadedProject.meta || !loadedProject.loadedProject.type) {
            loadedProject.loadedProject.meta = {
                'version': BUILD_NUMBER
            };
            loadedProject.loadedProject.type =  PROJECT_TYPE;
        }
        exports.saveProject(loadedProject);
    }

    mutateMenu(menu, project, success, failure, refresh){
        corePhaser.setupPhaserMenu(menu, project);
        success();
    }
}

module.exports = new TextPhaserProjectManager();
