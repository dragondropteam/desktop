const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

exports.ProgressWindow  = class {

    constructor(msg) {
        this.modalWindow = null;
        this.modalWindow = new BrowserWindow({width: 475, height: 175, frame: false,  parent: BrowserWindow.getFocusedWindow(), modal: true, show: false});
        this.modalWindow.loadURL(`file://${__dirname}/loading.html`);

        this.modalWindow.once('ready-to-show', () => {
            this.modalWindow.show();
            this.modalWindow.webContents.send('display_message', msg);
        });
    }

    destroy(){
        if(this.modalWindow){
            this.modalWindow.close();
        }
    }
};
