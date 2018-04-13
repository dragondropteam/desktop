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
const {TYPE_COMPONENT, TIMEOUT} = require('./components/component');

const {ipcRenderer} = require('electron');
const {LoadedProject} = require('../project/projects');
const path = require('path');
const fs = require('fs-extra');
const GoldenLayout = require('golden-layout');
const {app} = require('electron').remote;
const BaseProjectManager = require('../base_project_manager/base_project_manager');
const log = require('electron-log');
const Rx = require('rxjs/Rx');
const defaultComponents = require('./components/default_components');
//endregion

let currentWorkspace = null;

exports.Workspace = class {
    constructor(layoutConfig, dataSource, componentRegister = defaultComponents) {
        this.layoutConfig = layoutConfig;
        this.codeSubject = new Rx.ReplaySubject(1);
        this.projectSubject = new Rx.ReplaySubject(1);
        this.reloadObservable = new Rx.Subject();

        this.components = {};
        this.componentRegister = componentRegister;

        this.dataSource = dataSource;
        this.codeSubject.subscribe(code => this.dataSource.save(code));

        this.componentStates = {};

        currentWorkspace = this;

        assert(this.layoutConfig, 'LayoutConfig must be defined');
    }

    registerComponents() {
        this.componentRegister(this);
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

    registerReloadSubscriber(subscriber) {
        this.reloadObservable.subscribe(subscriber);
    }

    loadProject(loadedProject) {
        loadedProject.projectManager = Object.assign(new BaseProjectManager(), loadedProject.projectManager);

        //Layout may not be initialized yet, so wait and see if it comes up
        if (!this.layout.isInitialised) {
            setTimeout(this.loadProject.bind(this), TIMEOUT, loadedProject);
            return;
        }

        document.title = `${loadedProject.getName()} - ${loadedProject.projectPath}`;

        this.loadProjectFile(loadedProject);
    }

    setIPCListeners() {
        ipcRenderer.on('save_project', this.saveAndReload.bind(this));
        ipcRenderer.on('save_project_as', (event, project) => {
            project = Object.assign(new LoadedProject(), project);
            project.projectManager = Object.assign(new BaseProjectManager(), project.getProjectManager());

            try {
                this.saveAs(project);
                ipcRenderer.send('save_as_success', project);
            } catch (err) {
                log.error('save as failed', err);
                ipcRenderer.send('save_as_failure', err);
            }
        });

        ipcRenderer.on('eval', this.reload.bind(this));
        ipcRenderer.on('set_project', (event, arg) => this.loadProject(Object.assign(new LoadedProject(), arg)));
    }

    saveAndReload() {
        this.save();
        this.reload();
    }

    init() {
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
        this.reloadObservable.next();
    }

    loadProjectFile(project) {
        this.loadedProject = project;
        const code = this.dataSource.loadProjectFile(project);
        this.projectSubject.next({project: project, code: code});
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