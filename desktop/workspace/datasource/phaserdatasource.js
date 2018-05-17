const BlocklyDataSource = require('./blocklydatasource');
const fs = require('fs-extra');
const log = require('electron-log');

class PhaserDataSource extends BlocklyDataSource {

  /**
   * First copy over all assets that are in this project, then simply call the existing save as to copy over blocks
   * @param code The generated code to save out to destinationProject
   * @param destinationProject The destination project to save the current project to
   */
  saveAs (code, destinationProject) {
    try {
      const assets = fs.readdirSync(this.project.getFileInProjectDir('assets'));
      assets.forEach(file => {
        fs.copySync(this.project.getFileInProjectDir('assets/' + file), destinationProject.getFileInProjectDir('assets/' + file));
      });
    } catch (err) {
      if (err.code !== 'ENOENT') {
        throw err;
      }
    }

    super.saveAs(code, destinationProject);
  }

  // addAsset
}

module.exports = PhaserDataSource;