//All content copyright DigiPen Institute of Technology 2016
'use strict';

const path = require('path');
const Config = require('electron-store');
const config = new Config();
const recentFilesKey = 'RECENT_FILES';
const fs = require('fs-extra');
const RECENT_FILES_LIMIT = 10;
const log = require('electron-log');
const DIGIBLOCKS_PROJECT = 'digiblocks';
const DROP_PROJECT = 'drop';
const zipFolder = require('zip-folder');
const semver = require('semver');

function getRecentProjects() {
    /**
     * We always want some store of our recent projects
     */
    if (!config.has(recentFilesKey)) {
        config.set(recentFilesKey, []);
        return [];
    }

    let projects = config.get(recentFilesKey);
    for (let i = 0; i < projects.length;) {
        if (!projects[i].loadPath || !fs.existsSync(projects[i].projectPath)) {
            projects.splice(i, 1);//[i].loadedProject.name += ' - Deleted';
        } else {
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
 * @param {string} loadPath The path to the loaded project (cache directory)
 * @param {string} projectPath The path to the loaded project (.drop file)
 * @return {number} -1 if not found else the index of the project
 */
function indexOfProject(recentFiles, loadPath, projectPath) {
    let index = -1;
    log.debug(`Looking for ${loadPath} or ${projectPath}`);
    for (let i = 0; i < recentFiles.length; ++i) {
        // For backwards compatibility we need to check both for a .digiblocks and a .drop
        if (recentFiles[i].loadPath === loadPath || recentFiles[i].projectPath === projectPath) {
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

    const recentFiles = getRecentProjects();

    /**
     * We want our recent files list to be ordered by time removed
     * if a path already exists remove it, it will be added back to
     * the beginning.
     */
    const index = indexOfProject(recentFiles, loadedProject.loadPath, loadedProject.projectPath);

    log.debug(`Index: ${index}`);
    if (index !== -1) {
        recentFiles.splice(index, 1);
    }

    /**
     * If we are at our limit remove the last element the oldest
     */
    if (recentFiles.length === RECENT_FILES_LIMIT) {
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
exports.removeFromRecentProjects = function (projectPath) {
    let recentFiles = getRecentProjects();

    let index = indexOfProject(recentFiles, projectPath);

    if (index === -1) {
        return;
    }

    recentFiles.splice(index, 1);

    config.set(recentFilesKey, recentFiles);
};

/**
 * Convert a legacy project to a .drop project
 * @param {LoadedProject} project The legacy project to convert to a .drop
 * @param savePath {String} Path the user selected to contain the migrated project
 */
exports.migrateLegacyProject = function (project, savePath) {

    if (!project.isLegacy()) {
        return;
    }

    log.debug(`Migrating to ${savePath}`, project);

    return new Promise((resolve, reject) => {
        zipFolder(project.loadPath, savePath, err => {
            if (err) {
                reject(err)
            }

            resolve(savePath);
        });
    });
};

/**
 * Take a semver 1.0.0 prerelease string and convert to a 2.0.0 prerelease string
 * @param semver The 1.0.0 prerelease string
 */
exports.convertSemverOneToSemverTwo = function (semver) {
    //Already a 2.0.0 string just return
    if(semver.includes('-beta.') || semver.includes('-alpha.') || semver.includes('-rc.'))
        return semver;

    return semver.replace('-beta', '-beta.').replace('-alpha', '-alpha.').replace('-rc', '-rc.');
};

/**
 * Check to see if an application version is newer then the project version the user is trying to load
 * @param applicationVersion The version of DragonDrop
 * @param projectVersion The version of the project
 * @returns {boolean} true if the project is from this version of DragonDrop or older, false if it is from a newer version and
 *               cannot be loaded
 */
exports.isFromOlderVersion = function (applicationVersion, projectVersion) {
    return semver.gt(exports.convertSemverOneToSemverTwo(applicationVersion), exports.convertSemverOneToSemverTwo(projectVersion));
};

/**
 * Check to see if an application version is older then the project version the user is trying to load
 * @param applicationVersion The version of DragonDrop
 * @param projectVersion The version of the project
 * @returns {boolean} true if the project is from this version of DragonDrop or older, false if it is from a newer version and
 *               cannot be loaded
 */
exports.isFromNewerVersion = function (applicationVersion, projectVersion) {
    return semver.lt(exports.convertSemverOneToSemverTwo(applicationVersion), exports.convertSemverOneToSemverTwo(projectVersion));
};


/**
 * Simple class structure stores information on the version of DragonDrop, the type of project and any metadata for
 * that project type. Is generally not used directly. {@see LoadedProject} is passed instead, it adds utility functions
 * and information about the location of the project.
 * @type {exports.Project}
 */
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
 */
class LoadedProject {
    /**
     * Constructs a LoadedProject from the project loaded from disk or created and the path to the .digiblocks file
     * where it should be saved/loaded form on disk.
     *
     * @param {Project} project Project loaded from disk
     * @param {String} loadPath Path to the cache directory where the .drop file has been extracted
     * @param {String} projectPath Path to the .drop archive file
     * @param {BaseProjectManager} projectManager Project manager that is currently being used
     * @param {String} [fileType=digiblocks] digiblocks or drop
     */
    constructor(project, loadPath, projectPath, projectManager, fileType = 'digiblocks') {
        this.loadedProject = project;
        this.loadPath = loadPath;
        this.projectPath = projectPath;
        this.projectManager = projectManager;
        this.fileType = fileType;
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

    getProjectManager() {
        return this.projectManager;
    }

    /**
     * Pass through files to the project manager to save them to disk
     * @param files List of file data to save
     * @param files.path Path to the location in the cache dir this will be saved to
     * @param files.data Data for the file (this inherently limits files to < 2GB)
     */
    save(files) {
        this.getProjectManager().saveProject(this, files);
    }

    /**
     * .digiblocks was deprecated in 2.0.0 all projects are now archived .drop
     * @return {boolean} true if a legacy flat project
     */
    isLegacy() {
        return this.fileType === DIGIBLOCKS_PROJECT;
    }

    /**
     * Get the path to the source output file for this loaded project
     * @param extension
     */
    getSourceFile(extension) {
        return this.getFileInProjectDir(`${this.getName()}.${extension}`);
    }
}

exports.LoadedProject = LoadedProject;
