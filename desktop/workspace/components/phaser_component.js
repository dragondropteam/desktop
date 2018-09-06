/**
 * @file Sets up the Phaser GoldenLayout components
 * @author Luke Powell
 * @copyright DigiPen Institute of Technology 2016
 */

const {BaseComponent, TYPE_COMPONENT, TIMEOUT} = require('./component');
const Rx = require('rxjs/Rx');
const Config = require('electron-store');
const electronConfig = new Config();
const log = require('electron-log');
const CodeComponent = require('./code_component');
const PHASER_ID = 'phaser';
const {ipcRenderer} = require('electron');

class PhaserComponent extends BaseComponent {

  constructor (container, componentState) {
    super(componentState);

    this.consoleLogObservable = new Rx.Subject();

    container.getElement().html('<webview id="phaser" style="display:flex; width:99%; height:99%; margin:auto; border-style: solid; background: black;"></webview>');
    container.on('open', () => this.setupDOM());

    container.on('destroy', () => {
      this.webview = null;
    });
  }

  static get ID () {
    return 'phaserComponent';
  }

  static get TITLE () {
    return 'Phaser';
  }

  static registerComponent (workspace, ipc) {
    workspace.layout.registerComponent(PhaserComponent.ID, PhaserComponent);
    ipc.on('show_phaser', workspace.addComponentIfMissing.bind(workspace, PhaserComponent.ID, PhaserComponent.TITLE));
  }

  static generateContent () {
    return {
      type: 'component',
      componentName: PhaserComponent.ID,
      title: PhaserComponent.TITLE,
      componentState: {label: PhaserComponent.ID}
    };
  }

  setupDOM () {
    if (!document.getElementById(PHASER_ID)) {
      setTimeout(this.setupDOM.bind(this), TIMEOUT);
      return;
    }

    this.webview = document.getElementById('phaser');

    this.webview.addEventListener('console-message', e => {
      this.consoleLogObservable.next(e);
    });
  }

  getSource () {
    return this.webview.src;
  }

  setSource (source) {
    //WebView may not be ready yet just wait a small ammount of time
    if (!this.webview) {
      setTimeout(this.setSource.bind(this), TIMEOUT, source);
      return;
    }

    log.debug(`setSource to ${source}`);
    this.webview.src = source;
    this.source = source;
  }

  reload () {
    if (!this.webview.src || !this.webview.getWebContents()) {
      this.setSource(this.source);
    } else {
      this.webview.reload();
    }
  }

  projectLoad (projectFactory) {
    const project = projectFactory();
    this.setSource(`file://${project.project.getSourceFile('html')}`);
  }

  onAttach (workspace) {
    super.onAttach(workspace);

    ipcRenderer.on('show_embedded', this.toggleDevTools.bind(this));
    ipcRenderer.on('pause_execution', this.pauseExecution.bind(this));
    ipcRenderer.on('step_execution', this.stepExecution.bind(this));
    ipcRenderer.on('resume_execution', this.resumeExecution.bind(this));

    workspace.registerProjectSubscriber(this.projectLoad.bind(this));
    workspace.registerReloadSubscriber(this.reload.bind(this));
    workspace.registerConsoleLogObservable(this.consoleLogObservable);
  }

  onDetach (workspace) {
    super.onDetach(workspace);
  }

  toggleDevTools () {
    if (!this.webview) {
      return;
    }

    this.webview.openDevTools();
  }

  pauseExecution () {
    if (!this.webview) {
      return;
    }

    this.webview.executeJavaScript('game.enableStep();');
  }

  stepExecution () {
    if (!this.webview) {
      return;
    }

    this.webview.executeJavaScript('game.step();');
  }

  resumeExecution () {
    if (!this.webview) {
      return;
    }

    this.webview.executeJavaScript('game.disableStep();');
  }
}

module.exports = PhaserComponent;
