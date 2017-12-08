/**
 * All content copyright DigiPen Institute of Technology
 * Created by lukepowell on 11/14/16.
 */

const Config = require('electron-store');
const config = new Config();
const fs = require('fs-extra');
const {LoadedProject, Project} = require('../project/projects');
const path = require('path');
const {app} = require('electron');

class ProjectType {
    constructor(tag, display, requirePath, enabled) {
        this.tag = tag;
        this.display = display;
        this.requirePath = requirePath;
        this.enabled = enabled;
    }
}

const defaultValue = [
    new ProjectType('wink', 'PlumGeek Robotics Wink', './project_types/wink_robot', true),
    new ProjectType('exploring_wink', 'Exploring Wink', './project_types/exploring_wink_robot', true),
    new ProjectType('arduino', 'Arduino', './project_types/arduino', true),
    new ProjectType('ringo', 'PlumGeek Robotics Ringo', './project_types/ringo_robot', false),
    new ProjectType('block_javascript', 'JavaScript Blocks', './project_types/basic_javascript', true),
    new ProjectType('visual_phaser', 'Visual Phaser Game Engine', './project_types/visual_phaser', true),
    new ProjectType('exploring_phaser', 'Exploring Phaser Game Engine', './project_types/exploring_phaser', true),
    new ProjectType('text_phaser', 'Phaser Game Engine', './project_types/text_phaser', true)];

const projectTypesKey = 'PROJECT_TYPES';

exports.ProjectType = ProjectType;

/**
 * Returns the current list of projects for the current user or the default if no
 * modifications have been made to the settings
 * @returns {*[]} An array of ProjectType
 */
function getProjectTypes() {
    let projectTypes = config.get(projectTypesKey);
    return projectTypes || defaultValue;
}

exports.getProjectTypes = getProjectTypes;

exports.getRequirePath = function (tag) {
    var requirePath = null;
    getProjectTypes().forEach((project) => {
        if (project.tag == tag) {
            requirePath = project.requirePath;
        }
    });
    return requirePath;
};


exports.BaseProjectManager = class BaseProjectManager {
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
        console.log(`Creating project ${name} at ${filePath} with version ${version}`);
        console.log(path.join(app.getPath('temp'), 'dragondrop'));
        try {
            fs.ensureDirSync(filePath);
            const zipfolder = require('zip-folder');
            const cachePath = fs.mkdtempSync(path.join(app.getPath('temp'), 'dragondrop'));
            this.createProjectDir(name, cachePath);
            this.copyBaseFiles(name, cachePath);
            let project = new Project(name, version, this.type, this.createMeta());
            fs.writeJsonSync(path.join(cachePath, `${name}.digiblocks`), project);
            zipfolder(cachePath, path.join(filePath, `${name}.drop`), err => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(`Created project at ${path.join(filePath, `${name}.drop`)}`)
            });
            return new LoadedProject(project, cachePath, path.join(filePath, `${name}.drop`), this);
        } catch (e) {
            console.error(e);
            return null;
        }
        // try {
        //     this.createProjectDir(name, filePath);
        //     this.copyBaseFiles(name, filePath);
        //     let project = new Project(name, version, this.type, this.createMeta());
        //     fs.writeJsonSync(path.join(filePath, `${name}.digiblocks`), project);
        //     return new LoadedProject(project, filePath);
        // } catch (e) {
        //     console.error(e);
        //     return null;
        // }
    }

    /**
     * Ensure the directories we need exist creating them if not
     * @private
     * @param name The name of the project
     * @param filePath path to the directory to create the project in
     */
    createProjectDir(name, filePath) {
        if (!path.isAbsolute(filePath)) {
            throw new Error('filePath must be an absolute path');
        }

        fs.ensureDirSync(filePath);
        fs.ensureDirSync(path.join(filePath, name));
    }

    /**
     * Copy and starting files to created directory if any defaults to doing nothing.
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
     * @param filePath The file path to a .digiblocks file to load
     *
     */
    loadProject(filePath) {
        let project = fs.readJsonSync(filePath);
        let loadedProject = new LoadedProject(project, path.dirname(filePath));

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
     */
    saveProject(project) {
        fs.outputJsonSync(project.getProjectPath(), project.loadedProject);
    }

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
        let index = debug ? 'index_dev.html' : 'index.html';
        console.log(`displaying ${`file://${__dirname}/static/${index}`} in ${debug ? 'debug' : 'production'}`);

        window.loadURL(`file://${this.staticRoot}/${index}`);
        window.webContents.on('did-finish-load', () => {
            window.send('set_project', project);
        })
    }
};