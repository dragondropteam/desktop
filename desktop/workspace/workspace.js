/**
 * Created by lukepowell on 12/9/16.
 *
 * @author Luke Powell (luke.powell@digipen.edu)
 *
 * @licence
 * Content copyright DigiPen Institute of Technology 2016
 */

//region REQUIRE
const assert = require('assert');
const {ipcRenderer} = require('electron');
const {LoadedProject} = require('project');
const path = require('path');
const fs = require('fs-extra');
const Config = require('electron-store');
const electronConfig = new Config();
const {dialog} = require('electron').remote;
const GoldenLayout = require('golden-layout');
const {BrowserWindow, app} = require('electron').remote;
const BaseProjectManager = require('../base_project_manager/base_project_manager');
const log = require('electron-log');
const Rx = require('rxjs/Rx');
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
let currentWorkspace = null;
const TYPE_COMPONENT = 'component';

exports.BaseComponent = class {
    constructor(componentState) {
        this.name = componentState.label;
    }

    getName() {
        return this.name;
    }
};

//region COMPONENTS
class BlocklyComponent extends exports.BaseComponent {

    static generateContent(blocklyConfig) {
        assert(blocklyConfig != null);

        return {
            type: TYPE_COMPONENT,
            title: exports.BLOCKLY_COMPONENT,
            componentName: exports.BLOCKLY_COMPONENT,
            componentState: {
                label: exports.BLOCKLY_COMPONENT,
                blocklyConfig: blocklyConfig
            }
        }
    }

    constructor(container, componentState) {
        super(componentState);

        this.blocklyConfig = componentState.blocklyConfig;

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

        workspace = Blockly.inject(BLOCKLY_DIV_ID, this.blocklyConfig);

        this.resize();

        return true;
    }

    getWorkspace() {
        return workspace;
    }
}

exports.BlocklyComponent = BlocklyComponent;

class CodeComponent extends exports.BaseComponent {

    static generateContent(editorConfig = {}) {
        return {
            type: TYPE_COMPONENT,
            title: exports.CODE_COMPONENT,
            componentName: exports.CODE_COMPONENT,
            componentState: {
                label: exports.CODE_COMPONENT,
                editorOptions: editorConfig
            }
        }
    }

    constructor(container, componentState) {
        super(componentState);
        codeContainer = container;
        container.getElement().html('<div id="editor"></div>');

        this.editorOptions = componentState.editorOptions || {};

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

        log.debug(currentWorkspace.editorLanguage);
        this.editor.getSession().setMode(this.editorOptions.editorLanguage);
        this.editor.setReadOnly(this.editorOptions.readOnly);
        let theme = electronConfig.get('theme');
        if (theme) {
            theme = theme.toLowerCase().replace(' ', '_');
            this.editor.setTheme(`ace/theme/${theme}`);
        }

        if (currentWorkspace.onComponentOpen) {
            currentWorkspace.onComponentOpen(this);
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

exports.CodeComponent = CodeComponent;

class PhaserComponent extends exports.BaseComponent {

    constructor(container, componentState) {
        super(componentState);
        phaserContainer = container;

        container.getElement().html('<webview id="phaser" style="display:flex; width:99%; height:99%; margin:auto; border-style: solid; background: black;"></webview>');
        container.on('open', () => this.setupDOM());

        container.on('destroy', () => {
            phaserContainer = null;
            webview = null;
            currentWorkspace.removeComponent(this.getName());
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

        currentWorkspace.onComponentOpen(this);

        return true;
    }

    getSource() {
        return webview.src;
    }

    setSource(source) {
        log.debug(`setSource to ${source}`);
        webview.src = source;
        this.source = source;
    }

    reload() {
        if (!webview.src || !webview.getWebContents()) {
            this.setSource(this.source);
        } else {
            webview.reload();
        }
    }

    pauseExecution() {
        this.paused = true;
    }

    stepExecution() {
        if (!this.paused) {

        }
    }

    resumeExecution() {
        if (!this.paused) {
            return;
        }

        this.paused = false;
    }
}

exports.PhaserCompnent = PhaserComponent;

exports.registerDefaultComponents = function () {
    layout.registerComponent(exports.BLOCKLY_COMPONENT, BlocklyComponent);
    layout.registerComponent(exports.CODE_COMPONENT, CodeComponent);
    layout.registerComponent(exports.PHASER_COMPONENT, PhaserComponent);
};
//endregion

//region IPC_RENDERER LISTENERS
function loadProject(loadedProject) {
    loadedProject.projectManager = Object.assign(new BaseProjectManager(), loadedProject.projectManager);

    //Layout may not be initialized yet, so wait and see if it comes up
    if (!currentWorkspace || !currentWorkspace.layout.isInitialised) {
        setTimeout(() => {
            loadProject(loadedProject);
        }, TIMEOUT);
        return;
    }

    document.title = `DragonDrop - ${loadedProject.projectPath}`;

    currentWorkspace.loadProjectFile(loadedProject);
}

ipcRenderer.on('show_embedded', () => {
    if (!phaserContainer || !webview) {
        return;
    }

    webview.openDevTools();
});

ipcRenderer.on('set_project', (event, arg) => loadProject(Object.assign(new LoadedProject(), arg)));

ipcRenderer.on('settings_updated', () => {
    let theme = electronConfig.get('theme');
    if (theme && editor) {
        theme = theme.toLowerCase().replace(' ', '_');
        editor.setTheme(`ace/theme/${theme}`);
    }

    document.getElementById('editor').style.fontSize = `${electronConfig.get('fontsize') || '12'}px`
});

ipcRenderer.on('save_project', () => {
    currentWorkspace.save();
    currentWorkspace.reload();
});

ipcRenderer.on('save_project_as', (event, project) => {
    project = Object.assign(new LoadedProject(), project);
    project.projectManager = Object.assign(new BaseProjectManager(), project.getProjectManager());

    try {
        currentWorkspace.saveAs(project);
        ipcRenderer.send('save_as_success', project);
    } catch (err) {
        log.error('save as failed', err);
        ipcRenderer.send('save_as_failure', err)
    }
});

ipcRenderer.on('eval', () => currentWorkspace.reload());

ipcRenderer.on('show_code', () => currentWorkspace.addComponentIfMissing(exports.CODE_COMPONENT, 'Code'));

ipcRenderer.on('show_blockly', (event, arg) => currentWorkspace.addComponentIfMissing(exports.BLOCKLY_COMPONENT, 'Blockly'));

ipcRenderer.on('show_phaser', (event, arg) => currentWorkspace.addComponentIfMissing(exports.PHASER_COMPONENT, 'Game'));

ipcRenderer.on('pause_execution', () => {
    // log.debug('pause execution');
    if (!webview) {
        return;
    }

    webview.executeJavaScript('game.enableStep();');
});

ipcRenderer.on('step_execution', () => {
    // log.debug('step execution');
    if (!webview) {
        return;
    }

    webview.executeJavaScript('game.step();');
});

ipcRenderer.on('resume_execution', () => {
    // log.debug('resume execution');
    if (!webview) {
        return;
    }

    webview.executeJavaScript('game.disableStep();');
});

//endregion

//region DATA_SOURCE
class DataSource {
    save(workspace) {
    }

    saveAs(workspace, destPath) {

    }

    loadProjectFile() {

    }
}

class BlocklyDataSource extends DataSource {

    save(workspace) {

    }


    saveAs(workspace, destPath) {

    }

    /**
     * @override
     * @return {{code: string, blocks: string}}
     */
    loadProjectFile() {
        return GeneratedCode('code', 'blocks');
    }
}

class TextDataSource extends DataSource {
    save(workspace) {

    }

    saveAs(workspace, destPath) {

    }

    loadProjectFile(workspace) {

    }
}

class GeneratedCode {
    constructor(code = "", blocks = null) {
        this.code = code;
        this.blocks = blocks;
    }
}

//endregion

exports.GeneratedCode = GeneratedCode;
exports.DataSource = DataSource;
exports.BlocklyDataSource = BlocklyDataSource;
exports.TextDataSource = TextDataSource;

/**
 * Default configuration for the display and controls of Blockly
 * @param toolboxSource The toolbox to use for this Blockly instance
 * @return {{comments: boolean, disable: boolean, collapse: boolean, grid: {spacing: number, length: number, colour: string, snap: boolean}, maxBlocks: number, media: string, readOnly: boolean, rtl: boolean, scrollbars: boolean, toolbox: *, zoom: {controls: boolean, wheel: boolean, startScale: number, maxScale: number, minScale: number, scaleSpeed: number}}}
 */
exports.getDefaultBlocklyConfig = function (toolboxSource) {
    return {
        comments: true,
        disable: true,
        collapse: true,
        grid: {
            spacing: 25,
            length: 3,
            colour: '#ccc',
            snap: true
        },
        maxBlocks: Infinity,
        media: '../../../media/',
        readOnly: false,
        rtl: false,
        scrollbars: true,
        toolbox: toolboxSource,
        zoom: {
            controls: true,
            wheel: true,
            startScale: 1.0,
            maxScale: 4,
            minScale: .25,
            scaleSpeed: 1.1
        }
    };
};

exports.Workspace = class {
    constructor({layoutConfig, extension, defaultBlocks, editorLanguage}) {
        this.layoutConfig = layoutConfig;
        this.extension = extension;
        this.defaultBlocks = defaultBlocks;
        this.editorLanguage = editorLanguage;

        this.components = {};

        this.saveTimeout = false;

        assert(this.layoutConfig, 'LayoutConfig must be defined');
        assert(this.extension, 'Language extension must be defined');
    }

    static getDefaultBlocklyConfig(toolboxSource) {
        return {
            comments: true,
            disable: true,
            collapse: true,
            grid: {
                spacing: 25,
                length: 3,
                colour: '#ccc',
                snap: true
            },
            maxBlocks: Infinity,
            media: '../../../media/',
            readOnly: false,
            rtl: false,
            scrollbars: true,
            toolbox: toolboxSource,
            zoom: {
                controls: true,
                wheel: true,
                startScale: 1.0,
                maxScale: 4,
                minScale: .25,
                scaleSpeed: 1.1
            }
        };
    }

    registerComponents() {
        this.layout.registerComponent(exports.BLOCKLY_COMPONENT, BlocklyComponent);
        this.layout.registerComponent(exports.CODE_COMPONENT, CodeComponent);
        this.layout.registerComponent(exports.PHASER_COMPONENT, PhaserComponent);
    }

    getComponent(componentName) {
        return this.components[componentName];
    }

    init() {
        currentWorkspace = this;

        this.layout = new GoldenLayout(this.layoutConfig);

        this.registerComponents();

        this.layout.on('componentCreated', component => {
            // log.debug(`${component.getName()} opened`);

            let blockly = this.getBlockly();
            switch (component.componentName) {
                case exports.BLOCKLY_COMPONENT:
                    if (blockly) {
                        blockly.addChangeListener(this.blocklyUpdate.bind(this));
                    }
                    if (this.loadedProject) {
                        this.loadProjectFile(this.loadedProject);
                    }
                    break;
                case exports.CODE_COMPONENT:
                    if (this.loadedProject) {
                        this.updateCode()
                    }
                    break;
                case exports.PHASER_COMPONENT:
                    if (this.loadedProject) {
                        this.setPhaserSource();
                    }
                    break;
                default:
                    log.debug(`Unknown component ${component.componentName}`);
                    break;
            }
            this.components[component.componentName] = component.instance;
            console.log(component);
            console.log(component.instance);
        });

        this.layout.init();

        this.layout.on('initialised', () => ipcRenderer.send('render_ready'));
    }

    save() {
        try {
            if (!this.getBlockly()) {
                return;
            }

            const code = this.updateCode();
            let xml = Blockly.Xml.workspaceToDom(this.getBlockly());
            xml = Blockly.Xml.domToPrettyText(xml);

            this.loadedProject.save([{
                path: this.loadedProject.getSourceFile(this.extension),
                data: code
            }, {
                path: this.loadedProject.getBlocksPath(),
                data: xml
            }]);

            // this.reload();
        } catch (err) {
            dialog.showMessageBox(BrowserWindow.getFocusedWindow(), {
                type: 'error',
                title: 'Dragon Drop Error',
                message: `Error in code!\n${err.message}`
            });
            log.error(err);
        }
    }

    saveAs(project) {
        try {
            if (!this.getBlockly()) {
                return;
            }

            const code = this.getCode();
            let xml = Blockly.Xml.workspaceToDom(this.getBlockly());
            xml = Blockly.Xml.domToPrettyText(xml);

            project.save([{
                path: project.getFileInProjectDir(`${project.getName()}.js`),
                data: code
            }, {
                path: project.getBlocksPath(),
                data: xml
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

    getCode() {
        throw new Error('getCode not implemented');
    }

        getBlockly() {
        const component = this.getComponent(exports.BLOCKLY_COMPONENT);
        if (component) {
            return component.getWorkspace();
        }
        return null;
    }

    updateCode() {
        if (!this.getBlockly()) {
            return;
        }

        const code = this.getCode();
        const codeComponent = this.getComponent(exports.CODE_COMPONENT);
        if (codeComponent) {
            codeComponent.setCode(code);
        }
        return code;
    }

    reload() {
    }

    setBlocklyBlocks(blocks) {
        const blocklyComponent = this.getComponent(exports.BLOCKLY_COMPONENT);
        log.debug(blocklyComponent);

        if (blocklyComponent) {
            const xml = Blockly.Xml.textToDom(blocks);
            Blockly.Xml.domToWorkspace(xml, blocklyComponent.getWorkspace());
        }
    }

    loadProjectFile(project) {
        this.loadedProject = project;

        let data = null;

        try {
            data = fs.readFileSync(this.loadedProject.getBlocksPath());
            this.setBlocklyBlocks(data);
        } catch (err) {
            if (err.code === 'ENOENT') {
                if (this.defaultBlocks)
                    this.setBlocklyBlocks(this.defaultBlocks);
            } else {
                exports.logErrorAndQuit(err, {state: 'loading', project: project});
            }
        } finally {
            this.updateCode();
            this.setPhaserSource();
        }
    }

    setPhaserSource() {
        log.debug('setPhaserSource');
        let phaserComponent = this.getComponent(exports.PHASER_COMPONENT);
        if (phaserComponent) {
            phaserComponent.setSource(`file://${this.loadedProject.getSourceFile(this.extension)}`);
        }
    }

    blocklyUpdate(event) {
        try {
            /**
             * All events in Blockly excluding Blockly.Events.UI are used for meaningful changes, Blockly.Events.UI
             * is for context menu, toolbox and the like opening no reason to spin off a disk operation
             */
            if (event.type !== Blockly.Events.UI) {
                const block = this.getBlockly().getBlockById(event.blockId);
                if (block && block.onchange) {
                    block.onchange(event);
                }


                /**
                 * This method will get an unknown number of events, on the first event start a timeout waiting
                 * for all the event stream to pass additional events to this method there is no means to determine
                 * the quantity or the start/end of this stream of events
                 */
                if (!this.saveTimeout) {
                    this.saveTimeout = setTimeout(() => {
                        this.saveTimeout = null;
                        this.save();
                    }, 1000)
                }

            }
        } catch (err) {
            exports.logErrorAndQuit(err, {state: 'saving', project: this.loadedProject});
        }
    }

    addAsset(source) {
        const assetsDirectory = this.loadedProject.getFileInProjectDir('assets');
        return fs.copy(source, path.join(assetsDirectory, path.basename(source)));
    }

    getLayoutRoot() {
        return this.layout.root.contentItems[0] || this.layout.root;
    }

    addChildToRoot(child) {
        return this.getLayoutRoot().addChild(child);
    }

    hasComponent(component) {
        return this.components.hasOwnProperty(component);
    }

    /**
     * Add the given component to the workspace if it does not already exist
     * @param component The name of the component
     * @param title The title to display on the components tab
     */
    addComponentIfMissing(component, title) {
        if (this.hasComponent(component)) {
            return;
        }

        this.addChildToRoot({
            type: 'component',
            componentName: component,
            componentState: {label: component},
            title: title,
        });
    }

    removeComponent(component) {
        delete this.components[component];
    }
};

exports.logErrorAndQuit = function (e, state) {
    log.error(e.message);
    log.error('Error project changes not saved', e, state);
    app.exit(-1);
};