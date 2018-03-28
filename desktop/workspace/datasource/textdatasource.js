const DataSource = require('./datasource');
const fs = require('fs-extra');
const log = require('electron-log');

class TextDataSource extends DataSource {
    save(code) {
        try {
            this.project.save([{
                path: this.project.getSourceFile(this.extension),
                data: code.code
            }, {
                path: this.project.getBlocksPath(),
                data: code.xml
            }]);
        } catch (err) {
            dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
                type: 'error',
                title: 'Dragon Drop Error',
                message: `Error in code!\n${err.message}`
            });
            log.error(err);
        }
    }

    saveAs(workspace, destinationProject) {
    }

    loadProjectFile(workspace) {

    }
}

module.exports = TextDataSource;