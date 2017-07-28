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
const buildNumber = 1;
const fs = require('fs-extra');
const path = require('path');
const {Project} = require('project');
const {LoadedProject} = require('project');

const filesystem = require(`filesystem`);
const electron = require('electron');
const PROJECT_TYPE = 'text_phaser';
let displayedWindow = null;
const corePhaser = require('../../phaser_core/phaser_core');

/**
 * Creates a project directory and copies/creates the base files needed for a Text Phaser project
 * project_name
 * - project_name.digiblocks: This is a JSON file describing the project and other meta-data
 * - project_name: Directory that actually contains any student code
 * --js: JavaScript dependencies to actually run Phaser
 * --project_name.html: The html file students are editing
 * --assets: This folder will need to be created by students and will be where they can store all of their code
 *           This folder is optional, but is suggested to teach students about organizing assets
 * phaser_base.html is copied to project_name.html This gives students a startring point with some basic code
 * The core_files/js is copied over to a js folder this contains min.phaser.js which is the sole dependency
 * @param name The name of the project
 * @param filePath The filepath to store the file in
 * @returns A LoadedProject or null if an error was encountered
 */
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

        fs.copySync(filesystem.getFilePath('project_types/text_phaser/core_files/phaser_base.html'), path.join(filePath, name, `${name}.html`));
        fs.copySync(filesystem.getFilePath('project_types/text_phaser/core_files/js'), path.join(filePath, name,'js'));

        let project = new Project();
        project.name = name;
        project.version = version;
        project.type = PROJECT_TYPE;
        project.meta = {
            'version': buildNumber,
        };
        fs.writeJsonSync(`${filePath}/${name}.digiblocks`, project);
        return new LoadedProject(project, filePath);
    } catch (e) {
        console.error(e.lineNumber);
        console.error(e.message);
        return null;
    }
};

/**
 * Load and migrate a project if needed
 * @param filePath Path to the file to load
 */
exports.loadProject = function (filePath) {
    const project = fs.readJsonSync(filePath);
    const loadedProject = new LoadedProject(project, path.dirname(filePath));

    if ((project.meta && project.meta.version < buildNumber) || (!project.meta) || (!project.type)) {
        exports.migrate(loadedProject);
    }

    return loadedProject;
};

/**
 * Save a project, in this case we need to save out our .digiblocks (json) file only, code elsewhere takes care of
 * updating the HTML as it is edited
 * @param project The {@see LoadedProject} to output
 */
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
            'version': buildNumber
        };
        loadedProject.loadedProject.type =  PROJECT_TYPE;
    }
    exports.saveProject(loadedProject);
};

/**
 * Each type of loadedProject can have its own additions to the menu system
 * @param menu The base template to start from
 * @param project The {@see LoadedProject}
 * @param success The callback to make the menu be set as the active menu
 * @param failure The callback to make if some error prevents the menu from being created
 * @param refresh The callback to make if the menu needs to be destroyed and recreated
 */
exports.mutateMenu = function (menu, project, success, failure, refresh) {
    corePhaser.setupPhaserMenu(menu, project);
    success();
};

/**
 * Display the loadedProject in the given window
 * @param window The window that was created in main_core.js
 * @param debug If we are are running in production versus running development
 * @param project The loadedProject to display in the opened window
 */
exports.displayProject = function (window, debug, project) {
    const index = debug ? 'index_dev.html' : 'index.html';
    displayedWindow = window;
    //Load the loadedProject view
    window.loadURL(`file://${__dirname}/static/${index}`);
    window.webContents.on('did-finish-load', () => {
        window.send('set_project', project);
    });
};


