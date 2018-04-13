const DataSource = require('./datasource');
const fs = require('fs-extra');
const log = require('electron-log');

class TextDataSource extends DataSource {

    save(code) {
        if(!this.project){
            return;
        }
        try {
            this.project.save([{
                path: this.project.getSourceFile(this.extension),
                data: code.code
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

    saveAs(code, destinationProject) {
        try {
            destinationProject.save([{
                path: destinationProject.getSourceFile(this.extension),
                data: code.code
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

    loadProjectFile(project) {
        this.setProject(project);
        const data = fs.readFileSync(project.getSourceFile(this.extension), 'utf8');
        return {code: data};
    }
}

module.exports = TextDataSource;