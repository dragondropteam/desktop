/**
 * All content copyright DigiPen Institute of Technology
 * Created by lukepowell on 11/14/16.
 */

const Config = require('electron-store');
const config = new Config();

class ProjectType{
  constructor(tag, display, requirePath, enabled){
    this.tag = tag;
    this.display = display;
    this.requirePath = requirePath;
    this.enabled = enabled;
  }
}

const defaultValue = [new ProjectType('wink', 'PlumGeek Robotics Wink', './project_types/wink_robot', true), new ProjectType('arduino', 'Arduino', './project_types/arduino', true), new ProjectType('ringo', 'PlumGeek Robotics Ringo', './project_types/ringo_robot', false), new ProjectType('block_javascript', 'JavaScript Blocks', './project_types/basic_javascript', true), new ProjectType('visual_phaser', 'Visual Phaser Game Engine', './project_types/visual_phaser', true), new ProjectType('text_phaser', 'Phaser Game Engine', './project_types/text_phaser', true)];
const projectTypesKey = 'PROJECT_TYPES';

exports.ProjectType = ProjectType;

/**
 * Returns the current list of projects for the current user or the default if no
 * modifications have been made to the settings
 * @returns {*[]} An array of ProjectType
 */
function getProjectTypes(){
  var projectTypes = config.get(projectTypesKey);
  return projectTypes || defaultValue;
}

exports.getProjectTypes = getProjectTypes;

exports.getRequirePath = function(tag){
  var requirePath = null;
  getProjectTypes().forEach((project)=>{
    if(project.tag == tag){
      requirePath = project.requirePath;
    }
  });
  return requirePath;
};
