//All content copyright DigiPen Institute of Technology 2016
'use strict';

const path = require('path');
const Config = require('electron-store');
const config = new Config();
const recentFilesKey = 'RECENT_FILES';
const RECENT_FILES_LIMIT = '10';

function getRecentProjects(){

  /**
   * We always want some store of our recent projects
   */
  if(!config.has(recentFilesKey)){
    config.set(recentFilesKey,[]);
  }

  /**
   * This should never be null
   */
  return config.get(recentFilesKey);
}

exports.getRecentProjects = getRecentProjects;

exports.clearRecentProjects = function(){
  config.set(recentFilesKey, []);
};

/**
 * Add files to a list no more then RECENT_FILES_LIMIT
 * Files accessed more recently will appear towards the beginning of
 * the list older files will appear towards the end of the list
 * @param path
 */
exports.addToRecentProjects = function(loadedProject) {
  var recentFiles = getRecentProjects();

  /**
   * We want our recent files list to be ordered by time removed
   * if a path already exists remove it, it will be added back to
   * the beginning.
   */
  var index = -1;
  for(var i = 0; i < recentFiles.length; ++i){
    if(recentFiles[i].loadPath == loadedProject.loadPath){
      index = i;
      break;
    }
  }

  if(index != -1){
    recentFiles.splice(index, 1);
  }

  /**
   * If we are at our limit remove the last element the oldest
   */
  if(recentFiles.length == RECENT_FILES_LIMIT){
    recentFiles.pop();
  }

  recentFiles.unshift(loadedProject);

  config.set(recentFilesKey, recentFiles);
};

exports.Project = class Project{
  constructor(name, version){
    this.name = name;
    this.version = version;
    this.type = 'wink';
  }
};

exports.LoadedProject = class LoadedProject{
  constructor(project, loadPath){
    this.loadedProject = project;
    this.loadPath = loadPath;
  }

  getBlocksPath(){
    return path.join(this.loadPath, `${this.loadedProject.name}.xml`);
  }

  getProjectPath(){
    return path.join(this.loadPath, `${this.loadedProject.name}.digiblocks`);
  }

  getName(){
    return this.loadedProject.name;
  }

  getType(){
    return this.loadedProject.type;
  }

  getMetaData(){
    return this.loadedProject.meta;
  }
};
