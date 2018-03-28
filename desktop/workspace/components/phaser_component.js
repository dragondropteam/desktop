const {BaseComponent, TYPE_COMPONENT, TIMEOUT} = require('./component');
const Rx = require('rxjs/Rx');
const Config = require('electron-store');
const electronConfig = new Config();
const log = require('electron-log');
const PHASER_ID = 'phaser';
const {ipcRenderer} = require('electron');

class PhaserComponent extends BaseComponent {

    static get ID() {
        return 'phaserComponent';
    }
    static get TITLE() {
      return 'Phaser';
    }

    static registerComponent(workspace, ipc) {
        workspace.layout.registerComponent(PhaserComponent.ID, PhaserComponent);
        ipc.on('show_phaser', workspace.addComponentIfMissing.bind(workspace, PhaserComponent.ID, PhaserComponent.TITLE))
    }

    static generateContent() {

    }

    constructor(container, componentState) {
        super(componentState);

        container.getElement().html('<webview id="phaser" style="display:flex; width:99%; height:99%; margin:auto; border-style: solid; background: black;"></webview>');
        container.on('open', () => this.setupDOM());

        container.on('destroy', () => {
            this.webview = null;
        });
    }

    setupDOM() {
        if (!document.getElementById(PHASER_ID)) {
            setTimeout(this.setupDOM.bind(this), TIMEOUT);
            return;
        }

        this.webview = document.getElementById('phaser');
    }

    getSource() {
        return this.webview.src;
    }

    setSource(source) {
        log.debug(`setSource to ${source}`);
        this.webview.src = source;
        this.source = source;
    }

    reload() {
        if (!this.webview.src || !this.webview.getWebContents()) {
            this.setSource(this.source);
        } else {
            this.webview.reload();
        }
    }


    onAttach(workspace) {
        super.onAttach(workspace);

        ipcRenderer.on('show_embed', this.toggleDevTools.bind(this));
        ipcRenderer.on('pause_execution', this.pauseExecution.bind(this));
        ipcRenderer.on('step_execution', this.stepExecution.bind(this));
        ipcRenderer.on('resume_execution', this.resumeExecution.bind(this));
    }

    onDetach(workspace) {
        super.onDetach(workspace);
    }

    toggleDevTools() {
        if(!this.webview) {
            return;
        }

        this.webview.openDevTools();
    }
    pauseExecution() {
        if (!this.webview) {
            return;
        }

        this.webview.executeJavaScript('game.enableStep();');
    }

    stepExecution() {
        if (!this.webview) {
            return;
        }

        this.webview.executeJavaScript('game.step();');
    }

    resumeExecution() {
        if (!this.webview) {
            return;
        }

        this.webview.executeJavaScript('game.disableStep();');
    }
}

module.exports = PhaserComponent;
