const DataSource = require('./datasource');
const fs = require('fs-extra');
const log = require('electron-log');

class BlocklyDataSource extends DataSource {

    constructor(extension, defaultBlocks) {
        super(extension);
        this.defaultBlocks = defaultBlocks;
    }

    save(code) {
        if(this.project.readOnly){
            return;
        }

        if (!this.project) {
            return;
        }

        this.project.save([{
            path: this.project.getSourceFile(this.extension),
            data: code.code
        }, {
            path: this.project.getBlocksPath(),
            data: code.xml
        }]);
    }

    saveAs(code, destinationProject) {
        if(this.project.readOnly){
            return;
        }

        try {
            destinationProject.save([{
                path: destinationProject.getSourceFile(this.extension),
                data: code.code
            }, {
                path: destinationProject.getBlocksPath(),
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

    loadProjectFile(project) {
        this.setProject(project);
        let data = null;
        try {
            data = fs.readFileSync(project.getBlocksPath());
        } catch (err) {
            if (err.code === 'ENOENT') {
                console.log('No blocks');
                if (this.defaultBlocks)
                    data = this.defaultBlocks;
            } else {
                throw err;
            }
        }

        return {xml: data};
    }
}

module.exports = BlocklyDataSource;