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
let webview = null;
let editor = null;
let layout = null;
let currentWorkspace = null;
const TYPE_COMPONENT = 'component';

exports.BaseComponent = class {
    constructor(componentState) {
        this.componentState = componentState;
        this.name = componentState.label;
    }

    getName() {
        return this.name;
    }

    /**
     * Called when this component is attached to the workspace.
     * @param workspace
     */
    onAttach(workspace) {
        // this.workspace = workspace;
    }

    onDetach(workspace) {
        workspace.removeComponent(this);
    }
};

//region COMPONENTS
class BlocklyComponent extends exports.BaseComponent {

    /**
     * Generate an object representing the configuration of a BlocklyComponent for GoldenLayout
     * @param blocklyConfig {@link https://developers.google.com/blockly/guides/get-started/web#configuration}
     * @param workspaceToCode A function to map a workspace to {@see GeneratedCode}
     * @return {*} An Item Configuration for GoldenLayout {@link http://golden-layout.com/docs/ItemConfig.html}
     */
    static generateContent(blocklyConfig, workspaceToCode) {
        assert(blocklyConfig != null);

        return {
            type: TYPE_COMPONENT,
            title: exports.BLOCKLY_COMPONENT,
            componentName: exports.BLOCKLY_COMPONENT,
            componentState: {
                label: exports.BLOCKLY_COMPONENT,
                blocklyConfig: blocklyConfig,
                workspaceToCode: workspaceToCode
            }
        }
    }

    static generateWorkspaceMappingFunction(workspaceToCode) {
        return function (workspace) {
            const code = workspaceToCode(workspace);
            const dom = Blockly.Xml.workspaceToDom(workspace);
            const xml = Blockly.Xml.domToText(dom);
            return {code: code, xml: xml};
        }
    }

    //TODO: This will need to take into account the users sound preference at some point
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

    constructor(container, componentState) {
        super(componentState);

        this.blocklyConfig = componentState.blocklyConfig;
        this.workspaceToCode = componentState.workspaceToCode;
        this.codeObservable_ = new Rx.Subject();

        this.id = Math.random();

        blocklyContainer = container;
        container.getElement().html('<div id="blocklyArea"><div id="blocklyDiv" style="position: absolute"></div></div>');

        container.on('open', () => {
            this.setupDOM();
        });

        container.on('resize', () => {
            if (!this.workspace) {
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
        Blockly.svgResize(this.workspace);
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

        this.workspace = Blockly.inject(BLOCKLY_DIV_ID, this.blocklyConfig);
        this.workspace.addChangeListener(this.blocklyUpdate.bind(this));

        this.resize();

        return true;
    }

    getWorkspace() {
        return this.workspace;
    }

    get codeObservable() {
        return this.codeObservable_
            .map(this.workspaceToCode);
    }

    blocklyUpdate(event) {
        try {
            /**
             * All events in Blockly excluding Blockly.Events.UI are used for meaningful changes, Blockly.Events.UI
             * is for context menu, toolbox and the like opening no reason to spin off a disk operation
             */
            if (event.type !== Blockly.Events.UI) {
                const block = this.workspace.getBlockById(event.blockId);
                if (block && block.onchange) {
                    block.onchange(event);
                }


                this.codeObservable_.next(this.workspace);
            }
        } catch (err) {
            exports.logErrorAndQuit(err, {state: 'saving', project: this.loadedProject});
        }
    }


    projectLoad(code) {
        if (!this.workspace) {
            setTimeout(this.projectLoad.bind(this), 500, code);
            return;
        }

        const xml = Blockly.Xml.textToDom(code.xml);
        Blockly.Xml.domToWorkspace(xml, this.workspace);
    }

    /**
     *
     * @param workspace
     */
    onAttach(workspace) {
        super.onAttach(workspace);

        workspace.registerCodeObservable(this.codeObservable);
        workspace.registerProjectSubscriber(this.projectLoad.bind(this));
    }
}

exports.BlocklyComponent = BlocklyComponent;

class CodeComponent extends exports.BaseComponent {

    static generateContent(editorConfig = {}, subscriber = true) {
        return {
            type: TYPE_COMPONENT,
            title: exports.CODE_COMPONENT,
            componentName: exports.CODE_COMPONENT,
            componentState: {
                label: exports.CODE_COMPONENT,
                editorOptions: editorConfig,
                subscriber: subscriber
            }
        }
    }

    constructor(container, componentState) {
        super(componentState);
        codeContainer = container;
        container.getElement().html('<div id="editor"></div>');

        this.editorOptions = componentState.editorOptions || {};
        this.subscriber = componentState.subscriber || true;

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

        this.codeSubscriber = {
            next: code => {
                if (code.code) {
                    this.setCode(code.code);
                }
            }
        }

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
        if (!this.editor) {
            setTimeout(this.setCode.bind(this), 500, code);
            return;
        }

        this.editor.setValue(code, -1);
    }

    getCode() {
        return this.editor.getValue();
    }


    /**
     * @override
     * @param workspace
     * @return {*}
     */
    onAttach(workspace) {
        super.onAttach(workspace);

        if (this.subscriber) {
            workspace.registerCodeSubscriber(this.codeSubscriber);
        }
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


    onAttach(workspace) {
        super.onAttach(workspace);
        // ipcRenderer.on('pause_execution', () => {
        //     // log.debug('pause execution');
        //     if (!webview) {
        //         return;
        //     }
        //
        //     webview.executeJavaScript('game.enableStep();');
        // });
        //
        // ipcRenderer.on('step_execution', () => {
        //     // log.debug('step execution');
        //     if (!webview) {
        //         return;
        //     }
        //
        //     webview.executeJavaScript('game.step();');
        // });
        //
        // ipcRenderer.on('resume_execution', () => {
        //     // log.debug('resume execution');
        //     if (!webview) {
        //         return;
        //     }
        //
        //     webview.executeJavaScript('game.disableStep();');
        // });
    }

    onDetach(workspace) {
        super.onDetach(workspace);
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

exports.PhaserComponent = PhaserComponent;

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
//endregion

//region DATA_SOURCE
class DataSource {

    constructor(extension) {
        this.extension = extension;
    }

    /**
     * Set the project associated with this DataSource
     * @param {LoadedProject} project The project this DataSource is in charge of loading/writing to disk
     */
    setProject(project) {
        this.project = project;
    }

    /**
     * Save the {@see GeneratedCode} to the current project
     * @param code The generated code for the current project, and optionally the xml for blocks
     * @param code.code generated/entered code for the current project
     * @param code.xml xml representing the blocks if any
     */
    save(code) {
        throw new Error("save not implemented");
    }

    /**
     * Save code to LoadedProject
     * @param code The generated code for the current project, and optionally the xml for blocks
     * @param code.code generated/entered code for the current project
     * @param code.xml xml representing the blocks if any
     * @param {LoadedProject} destinationProject The destination project to save this project as
     */
    saveAs(code, destinationProject) {
        throw new Error("saveAs not implemented");
    }

    loadProjectFile(project) {
        throw new Error('loadProjectFile not implemented');
    }
}

class BlocklyDataSource extends DataSource {

    constructor(extension, defaultBlocks) {
        super(extension);
        this.defaultBlocks = defaultBlocks;
    }

    save(code) {
        if (!this.project) {
            return;
        }

        this.project.save([{
            path: this.project.getFileInProjectDir(`${project.getName()}.${this.extension}`),
            data: code.code
        }, {
            path: this.project.getBlocksPath(),
            data: code.xml
        }]);
    }

    saveAs(code, destinationProject) {
        try {
            destinationProject.save([{
                path: destinationProject.getFileInProjectDir(`${destinationProject.getName()}.${this.extension}`),
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
        let data = null;

        try {
            data = fs.readFileSync(project.getBlocksPath());
        } catch (err) {
            if (err.code === 'ENOENT') {
                if (this.defaultBlocks)
                    data = this.defaultBlocks;
            } else {
                exports.logErrorAndQuit(err, {state: 'loading', project: project});
            }
        }

        return {xml: data};
    }
}

class TextDataSource extends DataSource {
    save(code, loadedProject) {
        try {
            loadedProject.save([{
                path: loadedProject.getSourceFile(this.extension),
                data: code.code
            }, {
                path: loadedProject.getBlocksPath(),
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

    saveAs(workspace, destProject) {
    }

    loadProjectFile(workspace) {

    }
}

//endregion
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
    constructor(layoutConfig, dataSource) {
        this.layoutConfig = layoutConfig;
        this.codeSubject = new Rx.ReplaySubject(1);
        this.projectSubject = new Rx.ReplaySubject(1);
        this.components = {};

        this.dataSource = dataSource;
        this.codeSubject.subscribe(code => this.dataSource.save(code));

        this.componentStates = {};

        assert(this.layoutConfig, 'LayoutConfig must be defined');
    }

    registerComponents() {
        this.layout.registerComponent(exports.BLOCKLY_COMPONENT, BlocklyComponent);
        this.layout.registerComponent(exports.CODE_COMPONENT, CodeComponent);
        this.layout.registerComponent(exports.PHASER_COMPONENT, PhaserComponent);
    }

    getComponent(componentName) {
        return this.components[componentName];
    }

    registerCodeObservable(codeObservable) {
        codeObservable
            .debounceTime(TIMEOUT)
            .subscribe({
                next: code => {
                    this.code = code;
                    this.codeSubject.next(code);
                },
                error: err => exports.logErrorAndQuit(err, 'Code Update')
            });
    }

    registerProjectSubscriber(subscriber) {
        this.projectSubject.subscribe(subscriber);
    }

    registerCodeSubscriber(subscriber) {
        this.codeSubject.subscribe(subscriber);
    }

    setIPCListeners() {
        ipcRenderer.on('show_code', () => this.addComponentIfMissing(exports.CODE_COMPONENT, 'Code'));
        ipcRenderer.on('show_blockly', () => this.addComponentIfMissing(exports.BLOCKLY_COMPONENT, 'Blockly'));
        ipcRenderer.on('show_phaser', () => this.addComponentIfMissing(exports.PHASER_COMPONENT, 'Game'));
        ipcRenderer.on('save_project', () => {
            this.save();
            this.reload();
        });
    }

    init() {
        currentWorkspace = this;

        this.setIPCListeners();

        this.layout = new GoldenLayout(this.layoutConfig);

        this.registerComponents();

        this.layout.on('componentCreated', this.componentCreated.bind(this));

        this.layout.init();

        this.layout.on('initialised', () => ipcRenderer.send('render_ready'));
    }

    /**
     * Called when a component is created, will attach that component to this workspace allowing it to register any
     * Observables/Subscribers
     * @private
     * @param component
     */
    componentCreated(component) {
        component.instance.onAttach(this);
        component.on('itemDestroyed', () => component.instance.onDetach(this));
        this.components[component.componentName] = component.instance;
    }

    save() {
        if (!this.code) {
            return;
        }

        this.dataSource.save(this.code);
    }

    saveAs(project) {
        if (!this.code) {
            return;
        }

        this.dataSource.saveAs(this.code, project);
    }

    reload() {
    }

    loadProjectFile(project) {
        this.loadedProject = project;
        const code = this.dataSource.loadProjectFile(project);
        this.projectSubject.next(code);
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
     * @param {!string} component The name of the component
     * @param {!string} title The title to display on the components tab
     */
    addComponentIfMissing(component, title) {
        log.debug('Add Component if Missing', component, title);

        if (this.hasComponent(component)) {
            return;
        }

        const config = {
            type: TYPE_COMPONENT,
            componentName: component,
            componentState: {label: component},
            title: title,
        };

        Object.assign(config.componentState, this.componentStates[component] || {});

        this.addChildToRoot(config);
    }

    /**
     * Removes the component from the workspace, this saves the components state to allow the user to reopen the
     * component later
     * @param {!BaseComponent} component The component to remove
     */
    removeComponent(component) {
        // console.log(component.componentState);
        this.componentStates[component.getName()] = component.componentState;
        delete this.components[component.getName()];
    }
};

exports.logErrorAndQuit = function (e, state) {
    log.error(e.message);
    log.error('Error project changes not saved', e, state);
    app.exit(-1);
};