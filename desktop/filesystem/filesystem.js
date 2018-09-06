/**
 * Gets the path of the given file
 * @author Luke Powell
 * @param file The file to get the path of
 * @returns {string} The path of the file. Path is determined by the development variable from main.js
 * @copyright DigiPen Institute of Technology 2018
 */
exports.getFilePath = function(file){
  const electron = require('electron');
  var development;
  if(!electron.remote){
    development = global.development;
  }else{
    development = electron.remote.getGlobal('development');
  }
  console.log(development);
  if(development){
    return `./${file}`;
  }
  else{
    return `${process.resourcesPath}/app.asar/${file}`;
  }
};

