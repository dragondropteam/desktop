//All content copyright DigiPen Institute of Technology 2016
'use strict';

const path = require('path');
const Config = require('electron-store');
const config = new Config();
const recentFilesKey = 'RECENT_FILES';
const fs = require('fs-extra');
const RECENT_FILES_LIMIT = '10';

function getRecentProjects() {
    /**
     * We always want some store of our recent projects
     */
    if (!config.has(recentFilesKey)) {
        config.set(recentFilesKey, []);
    }

    let projects = config.get(recentFilesKey);
    console.log(projects);
    for(let i = 0; i < projects.length; ){
        if(!fs.existsSync(path.join(projects[i].loadPath, `${projects[i].loadedProject.name}.digiblocks`))){
            projects.splice(i, 1);//[i].loadedProject.name += ' - Deleted';
        }else{
            ++i;
        }
    }

    /**
     * This should never be null
     */
    return projects;
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
    constructor(name, version, type, meta) {
        this.name = name;
        this.version = version;
        this.type = type || 'wink';
        this.meta = meta;
    }
};

/**
 * Represents a project that has been loaded has helper methods to access directories, and information about the project
 * and where it exists on disk.
 * @type {LoadedProject}
 */
exports.LoadedProject = class LoadedProject {
    /**
     * Constructs a LoadedProject from the project loaded from disk or created and the path to the .digiblocks file
     * where it should be saved/loaded form on disk.
     *
     * @param {Project} project Project loaded from disk
     * @param {String} loadPath Path to the .digiblocks file defining the project on disk
     */
    constructor(project, loadPath) {
        this.loadedProject = project;
        this.loadPath = loadPath;
    }

    /**
     * Helper to get the path to the blocks file (.xml) that contains all of the blocks the user has placed
     * @return {string} The path to the blocks file (.xml)
     */
    getBlocksPath() {
        return path.join(this.loadPath, `${this.loadedProject.name}.xml`);
    }

    /**
     * Helper to get the path to the project file (.digiblocks) this file contains JSON to describe the project and its
     * metadata
     * @return {string} The path to the project file (.digiblocks)
     */
    getProjectPath() {
        return path.join(this.loadPath, `${this.loadedProject.name}.digiblocks`);
    }

    /**
     * Helper to get the name of the project
     * @return {string} The name of the project
     */
    getName() {
        return this.loadedProject.name;
    }

    /**
     * Get the string representing the type of the project ex. 'wink'
     * @return {string} The type of the loaded project
     */
    getType() {
        return this.loadedProject.type;
    }

    /**
     * Get any metadata on the current project
     * @return {*} An object containing metadata for the currently loaded project
     */
    getMetaData() {
        return this.loadedProject.meta;
    }

    /**
     * Get the inner project directory that contains the generated source code, and user added assets
     * @return {string} The path to the project directory
     */
    getProjectDir() {
        return path.join(this.loadPath, this.getName());
    }

    /**
     * Get a file from the inner project directory. The inner directory contains the actual files for the project.
     *
     * @param {string} file Path to the file in the project dir
     * @return {string} The path to the given file
     */
    getFileInProjectDir(file) {
        return path.join(this.getProjectDir(), file);
    }
};
