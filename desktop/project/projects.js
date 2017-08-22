//All content copyright DigiPen Institute of Technology 2016
'use strict';

const path = require('path');
const Config = require('electron-store');
const config = new Config();
const recentFilesKey = 'RECENT_FILES';
const RECENT_FILES_LIMIT = '10';

function getRecentProjects() {

    /**
     * We always want some store of our recent projects
     */
    if (!config.has(recentFilesKey)) {
        config.set(recentFilesKey, []);
    }

    /**
     * This should never be null
     */
    return config.get(recentFilesKey);
}

exports.getRecentProjects = getRecentProjects;

exports.clearRecentProjects = function () {
    config.set(recentFilesKey, []);
};

/**
 * Finds a loaded project from the most recent files.
 *
 * @param {Array.<LoadedProject>} recentFiles The array of LoadedProjects from our store
 * @param {string} projectPath The path to the loaded project
 * @return {number} -1 if not found else the index of the project
 */
function indexOfProject(recentFiles, projectPath){
    let index = -1;
    for (let i = 0; i < recentFiles.length; ++i) {
        if (recentFiles[i].loadPath == projectPath) {
            index = i;
            break;
        }
    }

    return index;
}

/**
 * Add files to a list no more then RECENT_FILES_LIMIT
 * Files accessed more recently will appear towards the beginning of
 * the list older files will appear towards the end of the list
 * @param {LoadedProject} loadedProject
 */
exports.addToRecentProjects = function (loadedProject) {
    let recentFiles = getRecentProjects();

    /**
     * We want our recent files list to be ordered by time removed
     * if a path already exists remove it, it will be added back to
     * the beginning.
     */
    let index = indexOfProject(recentFiles, loadedProject.loadPath);

    if (index != -1) {
        recentFiles.splice(index, 1);
    }

    /**
     * If we are at our limit remove the last element the oldest
     */
    if (recentFiles.length == RECENT_FILES_LIMIT) {
        recentFiles.pop();
    }

    recentFiles.unshift(loadedProject);

    config.set(recentFilesKey, recentFiles);
};

/**
 * Removes a project from the list of recent projects. Uses the path to the project to allow deletion of a project
 * when loading fails
 * @param {string} projectPath Path to the project to be removed
 */
exports.removeFromRecentProjects = function(projectPath){
    let recentFiles = getRecentProjects();

    let index = indexOfProject(recentFiles, projectPath);

    if(index === -1){
        return;
    }

    recentFiles.splice(index, 1);

    config.set(recentFilesKey, recentFiles);
};

exports.Project = class Project {
    constructor(name, version) {
        this.name = name;
        this.version = version;
        this.type = 'wink';
    }
};

exports.LoadedProject = class LoadedProject {
    constructor(project, loadPath) {
        this.loadedProject = project;
        this.loadPath = loadPath;
    }

    getBlocksPath() {
        return path.join(this.loadPath, `${this.loadedProject.name}.xml`);
    }

    getProjectPath() {
        return path.join(this.loadPath, `${this.loadedProject.name}.digiblocks`);
    }

    getName() {
        return this.loadedProject.name;
    }

    getType() {
        return this.loadedProject.type;
    }

    getMetaData() {
        return this.loadedProject.meta;
    }

    getProjectDir() {
        return path.join(this.loadPath, this.getName());
    }

    getFileInProjectDir(file) {
        return path.join(this.getProjectDir(), file);
    }
};
