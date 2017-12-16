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
const fs = require('fs-extra');
const path = require('path');

const filesystem = require(`filesystem`);
const PROJECT_TYPE = 'exploring_phaser';
const corePhaser = require('../../phaser_core/phaser_core');
const {BaseProjectManager} = require('../project_types');

class VisualPhaserProjectManager extends BaseProjectManager {
    constructor() {
        super(BUILD_NUMBER, PROJECT_TYPE, `${__dirname}/static`)
    }

    /**
     * @override
     * @param loadedProject
     */
    migrate(loadedProject) {
        this.migrateMetaAndProjectType(loadedProject);
        this.saveProject(loadedProject);
    }

    copyBaseFiles(name, filePath) {
        fs.createFileSync(path.join(filePath, name, `${name}.html`));
        fs.copySync(filesystem.getFilePath('project_types/text_phaser/core_files/js'), path.join(filePath, name, 'js'));
    }

    createMeta() {
        return {
            'version': BUILD_NUMBER,
        };
    }

    mutateMenu(menu, project, success, failure, refresh) {
        corePhaser.setupPhaserMenu(menu, project);
        menu['View'][2].submenu.unshift({
            label: 'Blockly',
            click(item, focusedWindow) {
                focusedWindow.webContents.send('show_blockly');
            }
        });
        success();
    }
}

module.exports = new VisualPhaserProjectManager();
