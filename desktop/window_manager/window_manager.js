const electron = require('electron');
const {BrowserWindow, Menu} = require('electron');
const log = require('electron-log');

class WindowManager {

    constructor() {
        this.windows = {};
        this.counter = 0;
    }

    findWindowById(id) {
        return this.windows[id];
    }

    generateId() {
        const id = `window_${this.counter}`;
        ++this.counter;
        return id;
    }

    create(browserWindowConfig, {id = null, url = `file://${__dirname}/404.html`, model = {}, autoShow = true} = {}) {
        if (!id) {
            id = this.generateId()
        }

        if (this.hasWindow(id)) {
            this.windows[id].focus();
            return;
        }

        this.windows[id] = new BrowserWindow(browserWindowConfig);

        this.windows[id].loadURL(url);

        this.windows[id].once('ready-to-show', () => {
            if (autoShow) {
                this.windows[id].show();
            }

            this.windows[id].webContents.send('model', model)
        });

        this.windows[id].once('closed', () => {
            this.removeWindow(id);
        });
    }

    hasWindow(id) {
        return !!this.windows[id];
    }

    closeWindow(id) {
        if (!this.hasWindow(id))
            return;

        this.findWindowById(id).close();
    }

    removeWindow(id) {
        delete this.windows[id];
    }

    showWindow(id) {
        log.debug('showWindow ' + id);
        if (!this.hasWindow(id)) {
            return;
        }

        this.findWindowById(id).show();
    }
}

const windowManager = new WindowManager();

module.exports = windowManager;
