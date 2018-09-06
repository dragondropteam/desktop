/**
 * @file Basic functions for managing projects
 * @copyright All content copyright DigiPen Institute of Technology
 * @author Luke Powell
 */


const fs = require('fs-extra');
const {LoadedProject, Project} = require('../project/projects');
const path = require('path');
const {app, ipcMain} = require('electron');
const log = require('electron-log');
const zipFolder = require('zip-dir');

module.exports = BaseProjectManager = class BaseProjectManager {

    /**
     * Set the buildNumber, type, and root for static files
     * @param buildNumber The build number for the project type
     * @param type project type id
     * @param staticRoot root to find static files
     */
    constructor(buildNumber, type, staticRoot) {
        this.buildNumber = buildNumber;
        this.type = type;
        this.staticRoot = staticRoot;
    }

    /**
     * Create a new project
     * @param name The name of the project
     * @param filePath The path to create the new project directory
     * @param version The version of DragonDrop
     * @return {LoadedProject} A LoadedProject representing the newly created project.
     */
    createNewProject(name, filePath, version) {
        log.debug(`Creating project ${name} at ${filePath} with version ${version}`);
        try {
            fs.ensureDirSync(filePath);

            const cachePath = fs.mkdtempSync(path.join(app.getPath('temp'), 'dragondrop'));
            this.createProjectDir(name, cachePath);
            this.copyBaseFiles(name, cachePath);
            let project = new Project(name, version, this.type, this.createMeta());
            fs.writeJsonSync(path.join(cachePath, `${name}.digiblocks`), project);
            zipFolder(cachePath, {saveTo: path.join(filePath, `${name}.drop`)}, err => {
                if (err) {
                    log.error(err);
                    return;
                }
                log.debug(`Created project at ${path.join(filePath, name)}`)
            });
            return new LoadedProject(project, cachePath, path.join(filePath, `${name}.drop`), this, 'drop');
        } catch (e) {
            log.error(e);
            return null;
        }
    }

    /**
     * Ensurse the directories we need exist, & creates them if not
     * @private
     * @param name The name of the project
     * @param filePath Path to the directory to create the project in
     */
    createProjectDir(name, filePath) {
        if (!path.isAbsolute(filePath)) {
            throw new Error('filePath must be an absolute path');
        }

        fs.ensureDirSync(filePath);
        fs.ensureDirSync(path.join(filePath, name));
    }

    /**
     * Copy any starting files to created directory if any defaults to doing nothing.
     * @param name
     * @param filePath
     */
    copyBaseFiles(name, filePath) {
        /*NO-OP*/
    }


    /**
     * Create any metadata needed for this project
     * @abstract
     */
    createMeta() {
        throw new Error('Invalid operation calling abstract BaseProject.createMeta');
    }

    /**
     * Loads the .digiblocks (JSON) file and generates a LoadedProject to add helper methods and the load location for
     * the project
     * @param project The JSON file representing this project (.digiblocks)
     * @param cachePath The path to the folder containing the .digiblocks file in cache folder
     * @param projectPath The path to the project archive .drop file or .digiblocks file for legacy projects
     * @param readOnly Is the project read only (i.e. a legacy project we want to view but not change)
     */
    loadProject(project, cachePath, projectPath, readOnly = false) {
        const loadedProject = new LoadedProject(project, cachePath, projectPath, this, path.extname(projectPath).substr(1));
        loadedProject.setReadOnly(readOnly)

        project.version = global.version;

        if ((project.meta && project.meta.version < this.buildNumber) || (!project.meta) || (!project.type)) {
            this.migrate(loadedProject)
        }

        return loadedProject;
    }

    /**
     * Make any changes to the projects metadata to account for version changes
     * @abstract
     * @param loadedProject The project to migrate to a new version
     * to version
     */
    migrate(loadedProject) {
        throw new Error('Invalid Operation calling abstract BaseProject.migrate');
    }

    /**
     * Add project type specific menu items
     * @abstract
     * @param menu The menu hash to add new items to
     * @param project Currently loaded project
     * @param success Callback when done creating the menu
     * @param failure Callback if the menu can fail to be created
     * @param refresh Callback to reload the menu if changes need to be applied at runtime
     */
    mutateMenu(menu, project, success, failure, refresh) {
        throw new Error('Invalid Operation calling abstract BaseProject.mutateMenu');
    }

    /**
     * Saves the project out to disk
     * @param project The project to save to disk
     * @param files
     * @param files.path
     * @param files.data
     */
    saveProject(project, files) {

        if (project.readOnly) {
            return;
        }

        fs.outputJsonSync(project.getProjectPath(), project.loadedProject);

        //If we are only updating the project file there will be no files
        if (files) {
            for (let i = 0; i < files.length; ++i) {
                fs.ensureFileSync(files[i].path);
                fs.writeFileSync(files[i].path, files[i].data);
            }
        }

        //Update the .drop file if present this can be async as we are not directly using the file
        if (path.extname(project.projectPath) === '.drop') {
            zipFolder(project.loadPath, {saveTo: project.projectPath}, err => {
                if (err) {
                    log.error(err);
                }
            });
        }
    }

    /**
     * Add meta data and set project type if missing
     * @param loadedProject The project to add meta data to.
     */
    migrateMetaAndProjectType(loadedProject) {
        if (!loadedProject.loadedProject.meta || !loadedProject.loadedProject.type) {
            loadedProject.loadedProject.meta = this.createMeta();
            loadedProject.loadedProject.type = this.type;
        }
    }

    /**
     * Display the loadedProject in the given window
     * @param window The window that was created in main_core.js
     * @param {Boolean} debug true in debug environment false in production
     * @param {LoadedProject} project The LoadedProject to display in the opened window
     */
    displayProject(window, debug, project) {
        //index_dev.html will use uncompressed versions of the blockly library index.html will use the compressed versions
        //that are used in production
        const index = debug ? 'index_dev.html' : 'index.html';

        window.loadURL(`file://${this.staticRoot}/${index}`);

        ipcMain.once('render_ready', () => {
            window.send('set_project', project);
        });
    }
};