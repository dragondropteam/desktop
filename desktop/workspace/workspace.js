/**
 * Created by lukepowell on 12/9/16.
 *
 * @author Luke Powell (luke.powell@digipen.edu)
 *
 * @licence
 * Content copyright DigiPen Institute of Technology 2016
 */

//region REQUIRE
const {ipcRenderer} = require('electron');
const {LoadedProject} = require('project');
const path = require('path');
const fs = require('fs-extra');
const Config = require('electron-store');
const electronConfig = new Config();
const {dialog} = require('electron').remote;
const GoldenLayout = require('golden-layout');
const {BrowserWindow, app} = require('electron').remote;
//endregion

//REGION CONSTANTS
const BLOCKLY_DIV_ID = 'blocklyDiv';
const BLOCKLY_AREA_ID = 'blocklyArea';
const PHASER_ID = 'phaser';
const EDITOR_ID = 'editor';
const TIMEOUT = 500;

exports.BLOCKLY_COMPONENT = 'blocklyComponent';
exports.PHASER_COMPONENT = 'phaserComponent';
exports.CODE_COMPONENT = 'codeComponent';
//endregion

//Store the containers we get from registering the component, these are null til initialised and null after being
//destroyed
let blocklyContainer = null, codeContainer = null, phaserContainer = null;
let blocklyArea = null, blocklyDiv = null;
let workspace = null;
let webview = null;
let editor = null;
let layout = null;
let config = null;

exports.BaseComponent = class {
    constructor(componentState) {
        this.componentState = componentState.label;
    }

    getName() {
        return this.componentState;
    }
};

//region COMPONENTS
class BlocklyComponent extends exports.BaseComponent {
    constructor(container, componentState) {
        super(componentState);
        blocklyContainer = container;
        container.getElement().html('<div id="blocklyArea"><div id="blocklyDiv" style="position: absolute"></div></div>');

        container.on('open', () => {
            this.setupDOM();
        });

        container.on('resize', () => {
            if (!workspace) {
                return;
            }
            this.resize();
        });

        container.on('destroy', () => {
            blocklyContainer = null;
            blocklyArea = null;
        });
    }

    resize() {
        // Compute the absolute coordinates and dimensions of blocklyArea.
        let element = blocklyArea;
        if (!element) {
            setTimeout(() => {
                this.resize();
            }, TIMEOUT);
            return;
        }
        let x = 0;
        let y = 0;
        do {
            x += element.offsetLeft;
            y += element.offsetTop;
            element = element.offsetParent;
        } while (element);
        // Position blocklyDiv over blocklyArea.
        blocklyDiv.style.left = `${x}px`;
        blocklyDiv.style.top = `${y}px`;
        blocklyDiv.style.width = `${blocklyArea.offsetWidth}px`;
        blocklyDiv.style.height = `${blocklyArea.offsetHeight}px`;
        Blockly.svgResize(workspace);
    }

    setupDOM() {
        blocklyArea = document.getElementById(BLOCKLY_AREA_ID);
        if (!blocklyArea) {
            setTimeout(() => {
                this.setupDOM();
            }, TIMEOUT);
            return false;
        }

        blocklyArea = document.getElementById(BLOCKLY_AREA_ID);
        blocklyDiv = document.getElementById(BLOCKLY_DIV_ID);

        workspace = Blockly.inject(BLOCKLY_DIV_ID, config.blocklyConfig);

        if (config.onComponentOpen) {
            config.onComponentOpen(this);
        }

        this.resize();

        return true;
    }

    getWorkspace() {
        return workspace;
    }
}

class CodeComponent extends exports.BaseComponent {
    constructor(container, componentState) {
        super(componentState);
        codeContainer = container;
        container.getElement().html('<div id="editor"></div>');

        container.on('open', () => {
            this.setupDOM();
        });

        container.on('resize', () => {
            if (!this.editor) {
                return;
            }

            this.editor.resize();
        });

        container.on('destroy', () => {
            codeContainer = null;
            editor = null;
        });
    }

    setupDOM() {
        if (!document.getElementById(EDITOR_ID)) {
            setTimeout(() => {
                this.setupDOM();
            }, TIMEOUT);
            return false;
        }

        document.getElementById(EDITOR_ID).style.fontSize = `${electronConfig.get('fontsize') || '12'}px`;
        this.editor = ace.edit(EDITOR_ID);
        editor = this.editor;
        this.editor.$blockScrolling = Infinity;
        this.editor.getSession().setMode(config.editorLanguage);
        this.editor.setReadOnly(config.editorReadOnly);
        let theme = electronConfig.get('theme');
        if (theme) {
            theme = theme.toLowerCase().replace(' ', '_');
            this.editor.setTheme(`ace/theme/${theme}`);
        }

        if (config.onComponentOpen) {
            config.onComponentOpen(this);
        }

        return true;
    }

    setCode(code) {
        this.editor.setValue(code, -1);
    }

    getCode() {
        return this.editor.getValue();
    }
}

class PhaserComponent extends exports.BaseComponent {

    constructor(container, componentState) {
        super(componentState);
        phaserContainer = container;

        container.getElement().html('<webview id="phaser" style="display:flex; width:99%; height:99%; margin:auto; border-style: solid; background: black;"></webview>');
        container.on('open', () => {
            this.setupDOM();
        });

        container.on('destroy', () => {
            phaserContainer = null;
            webview = null;
        });

        container.on('resize', () => {
        });
    }

    setupDOM() {
        if (!document.getElementById(PHASER_ID)) {
            setTimeout(() => {
                this.setupDOM();
            }, TIMEOUT);
            return false;
        }

        webview = document.getElementById('phaser');

        if (config.onComponentOpen) {
            config.onComponentOpen(this);
        }

        return true;
    }

    getSource() {
        return webview.src;
    }

    setSource(source) {
        console.log(`setSource to ${source}`);
        webview.src = source;
        this.source = source;
    }

    reload() {
        // console.log(webview);
        // console.log(!webview.src);
        // console.log(!webview.getWebContents());

        if (!webview.src || !webview.getWebContents()) {
            this.setSource(this.source);
        } else {
            webview.reload();
        }
    }

    pauseExecution(){
        this.paused = true;
    }

    stepExecution(){
        if(!this.paused){
            return;
        }
    }

    resumeExecution(){
        if(!this.paused){
            return;
        }

        this.paused = false;
    }
}

exports.registerDefaultComponents = function () {
    layout.registerComponent(exports.BLOCKLY_COMPONENT, BlocklyComponent);
    layout.registerComponent(exports.CODE_COMPONENT, CodeComponent);
    layout.registerComponent(exports.PHASER_COMPONENT, PhaserComponent);
};
//endregion

//region IPC_RENDERER LISTENERS
function loadProject(loadedProject, loadPath) {
    if (!layout || !config || !config.load) {
        return;
    }

    if (!layout.isInitialised) {
        setTimeout(() => {
            loadProject(loadedProject, loadPath);
        }, TIMEOUT);
        return;
    }


    loadedProject = new LoadedProject(loadedProject, loadPath);
    document.title = `DragonDrop - ${loadedProject.loadPath}`;
    config.load(loadedProject);
}

ipcRenderer.on('show_embedded', (event, arg) => {
    // console.log('show_embedded');

    if (!phaserContainer || !webview) {
        return;
    }

    webview.openDevTools();
});

ipcRenderer.on('set_project', (event, arg) => {
    loadProject(arg.loadedProject, arg.loadPath);
});

ipcRenderer.on('settings_updated', () => {
    let theme = electronConfig.get('theme');
    if (theme && editor) {
        theme = theme.toLowerCase().replace(' ', '_');
        editor.setTheme(`ace/theme/${theme}`);
    }

    document.getElementById('editor').style.fontSize = `${electronConfig.get('fontsize') || '12'}px`
});


ipcRenderer.on('save_project', () => {
    if (config.save()) {
        config.reload();
    }
});

ipcRenderer.on('eval', () => {
    config.reload();
});

ipcRenderer.on('show_code', (event, arg) => {
    console.log('show_code');
    console.log(codeContainer);
    console.log(layout.isInitialised);

    if (codeContainer || !layout.isInitialised) {
        return;
    }
    let root = layout.root.contentItems[0] || layout.root;

    root.addChild({
        type: 'component',
        componentName: exports.CODE_COMPONENT,
        title: 'Code',
        componentState: {label: exports.CODE_COMPONENT}
    });
});

ipcRenderer.on('show_blockly', (event, arg) => {
    if (blocklyContainer !== null || !layout.isInitialised) {
        return;
    }

    let root = layout.root.contentItems[0] || layout.root;
    root.addChild({
        type: 'component',
        componentName: exports.BLOCKLY_COMPONENT,
        componentState: {label: exports.BLOCKLY_COMPONENT},
        title: 'Blockly',
    });
});

ipcRenderer.on('show_phaser', (event, arg) => {
    console.log('show_phaser');
    if (phaserContainer !== null || !layout.isInitialised) {
        return;
    }

    let root = layout.root.contentItems[0] || layout.root;
    root.addChild({
        type: 'component',
        componentName: exports.PHASER_COMPONENT,
        componentState: {label: exports.PHASER_COMPONENT},
        title: 'Game',
    });
});

ipcRenderer.on('pause_execution', () => {
    // console.log('pause execution');
    if (!webview) {
        return;
    }

    webview.executeJavaScript('game.enableStep();');
});

ipcRenderer.on('step_execution', () => {
    // console.log('step execution');
    if (!webview) {
        return;
    }

    webview.executeJavaScript('game.step();');
});

ipcRenderer.on('resume_execution', () => {
    // console.log('resume execution');
    if (!webview) {
        return;
    }

    webview.executeJavaScript('game.disableStep();');
});
//endregion

exports.WorkspaceConfig = class {
    constructor(config) {
        if (!config) {
            throw 'A config must be specified';
        }

        if (!config.layoutConfig) {
            throw 'layoutConfig must be specified';
        }

        if (!config.blocklyConfig) {
            throw 'blocklyConfig must be specified';
        }

        this.layoutConfig = config.layoutConfig;
        this.blocklyConfig = config.blocklyConfig;

        this.load = config.load || null;
        this.save = config.save || null;
        this.reload = config.reload || null;

        this.registerComponents = config.registerComponents || exports.registerDefaultComponents;
        this.editorLanguage = config.editorLanguage || 'ace/mode/html';
        this.editorReadOnly = "editorReadOnly" in config ? config.editorReadOnly : true;

        this.onComponentOpen = config.onComponentOpen;
    }
};

exports.Workspace = class {
    constructor(workspaceConfig) {
        config = workspaceConfig;
        console.log(config.onComponentOpen);
        this.components = {};
    }

    init() {
        layout = new GoldenLayout(config.layoutConfig);
        config.registerComponents();
        layout.on('componentCreated', (component) => {
            this.components[component.componentName] = component.instance;
        });

        layout.init();
    }

    getComponent(componentName) {
        return this.components[componentName];
    }
};

exports.logErrorAndQuit = function (e) {
    console.error('Error loading project changes will not be saved');
    console.error(e);

    dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
        type: 'error',
        message: 'Problem saving code execution cannot continue'
    }, () => {
        app.quit();
    });
};