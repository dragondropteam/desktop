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
        return {
            type: 'component',
            componentName: PhaserComponent.ID,
            title: PhaserComponent.TITLE,
            componentState: {label: PhaserComponent.ID}
        }
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
        //WebView may not be ready yet just wait a small ammount of time
        if(!this.webview){
            setTimeout(this.setSource.bind(this), TIMEOUT, source);
            return;
        }

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

    projectLoad(project){
        this.setSource(`file://${project.project.getSourceFile('html')}`)
    }

    onAttach(workspace) {
        super.onAttach(workspace);

        ipcRenderer.on('show_embedded', this.toggleDevTools.bind(this));
        ipcRenderer.on('pause_execution', this.pauseExecution.bind(this));
        ipcRenderer.on('step_execution', this.stepExecution.bind(this));
        ipcRenderer.on('resume_execution', this.resumeExecution.bind(this));

        workspace.registerProjectSubscriber(this.projectLoad.bind(this));
        workspace.registerReloadSubscriber(this.reload.bind(this));
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
