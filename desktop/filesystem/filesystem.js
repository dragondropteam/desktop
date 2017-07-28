
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

