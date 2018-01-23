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
const BUILD_NUMBER = 2;
const PROJECT_TYPE = 'text_phaser';

const fs = require('fs-extra');
const path = require('path');

const filesystem = require(`filesystem`);
const corePhaser = require('../../phaser_core/phaser_core');
const BaseProjectManager = require('../../base_project_manager/base_project_manager');

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
        this.migrateMetaAndProjectType(loadedProject);

        let buildNumber = loadedProject.getMetaData().version;

        if(buildNumber === 1){
            fs.copySync(filesystem.getFilePath('project_types/text_phaser/core_files/js'), loadedProject.getFileInProjectDir(`js`));
            log.debug('Phaser 2.8.8 -> 2.8.9');
            ++buildNumber;
        }

        loadedProject.getMetaData.version = BUILD_NUMBER;
        this.saveProject(loadedProject);
    }

    mutateMenu(menu, project, success, failure, refresh){
        corePhaser.setupPhaserMenu(menu, project);
        success();
    }
}

module.exports = new TextPhaserProjectManager();
