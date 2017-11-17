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
const PROJECT_TYPE = 'block_javascript';
const {BaseProjectManager} = require('../project_types');

class BasicJavaScriptManager extends BaseProjectManager {
    constructor() {
        super(BUILD_NUMBER, PROJECT_TYPE, `${__dirname}/static`);
    }

    copyBaseFiles(name, filePath) {
        //No base files
    }

    createMeta() {
        return {'version': BUILD_NUMBER};
    }

    migrate(loadedProject) {
        this.migrateMetaAndProjectType(loadedProject);
        this.saveProject(loadedProject);
    }

    mutateMenu(menu, project, success, failure, refresh) {
        menu['Project'] = [{
            label: "Evaluate",
            accelerator: 'CmdOrCtrl+R',
            click(item, focusedWindow) {
                focusedWindow.send('eval');
            }
        }];

        success();
    }
}

module.exports = new BasicJavaScriptManager();
