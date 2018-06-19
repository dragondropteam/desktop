/**
 * Override prompt to allow this program to work in Electron framework
 * @param title
 * @param val
 * @returns {*}
 */
window.prompt = function(title, val){
  const {ipcRenderer} = require('electron');
  return ipcRenderer.sendSync('prompt', {title, val})
};