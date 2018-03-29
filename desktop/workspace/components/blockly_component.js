const {BaseComponent, TYPE_COMPONENT, TIMEOUT} = require('./component');
const assert = require('assert');
const Rx = require('rxjs/Rx');
const log = require('electron-log');
const BLOCKLY_DIV_ID = 'blocklyDiv';
const BLOCKLY_AREA_ID = 'blocklyArea';

class BlocklyComponent extends BaseComponent {

    static get ID() {
      return 'blocklyComponent';
    }

    static get TITLE() {
        return 'Blockly';
    }

    static registerComponent(workspace, ipc) {
        workspace.layout.registerComponent(BlocklyComponent.ID, BlocklyComponent);
        ipc.on('show_blockly', workspace.addComponentIfMissing.bind(workspace, BlocklyComponent.ID, BlocklyComponent.TITLE))
    }

    /**
     * Generate an object representing the configuration of a BlocklyComponent for GoldenLayout
     * @param blocklyConfig {@link https://developers.google.com/blockly/guides/get-started/web#configuration}
     * @param workspaceToCode A function to map a workspace to {@see GeneratedCode}
     * @return {*} An Item Configuration for GoldenLayout {@link http://golden-layout.com/docs/ItemConfig.html}
     */
    static generateContent(blocklyConfig, workspaceToCode, disableOrphans = false) {
        assert(blocklyConfig != null);

        return {
            type: TYPE_COMPONENT,
            title: BlocklyComponent.TITLE,
            componentName: BlocklyComponent.ID,
            componentState: {
                label: BlocklyComponent.ID,
                blocklyConfig: blocklyConfig,
                workspaceToCode: workspaceToCode,
                disableOrphans: disableOrphans
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
        this.disableOrphans = componentState.disableOrphans;
        this.codeObservable_ = new Rx.Subject();

        this.blocklyContainer = container;
        this.blocklyContainer.getElement().html('<div id="blocklyArea"><div id="blocklyDiv" style="position: absolute"></div></div>');

        this.blocklyContainer.on('open', () => {
            this.setupDOM();
        });

        this.blocklyContainer.on('resize', () => {
            if (!this.workspace) {
                return;
            }
            this.resize();
        });

        this.blocklyContainer.on('destroy', () => {
            this.blocklyContainer = null;
            this.blocklyArea = null;
        });
    }

    resize() {
        // Compute the absolute coordinates and dimensions of blocklyArea.
        let element = this.blocklyArea;

        if (!element) {
            setTimeout(this.resize.bind(this), TIMEOUT);
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
        this.blocklyDiv.style.left = `${x}px`;
        this.blocklyDiv.style.top = `${y}px`;
        this.blocklyDiv.style.width = `${blocklyArea.offsetWidth}px`;
        this.blocklyDiv.style.height = `${blocklyArea.offsetHeight}px`;
        Blockly.svgResize(this.workspace);
    }

    setupDOM() {
        this.blocklyArea = document.getElementById(BLOCKLY_AREA_ID);
        if (!this.blocklyArea) {
            setTimeout(this.setupDOM.bind(this), TIMEOUT);
            return false;
        }

        this.blocklyArea = document.getElementById(BLOCKLY_AREA_ID);
        this.blocklyDiv = document.getElementById(BLOCKLY_DIV_ID);

        this.workspace = Blockly.inject(BLOCKLY_DIV_ID, this.blocklyConfig);

        /**
         * If we are in a language where orphans are not allowed disable them, this event listener must come before
         * the change listener
         */
        if(this.disableOrphans){
            this.workspace.addChangeListener(Blockly.Events.disableOrphans);
        }

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
            console.log(event.type);
            if (event.type !== Blockly.Events.UI) {
                const block = this.workspace.getBlockById(event.blockId);
                if (block && block.onchange) {
                    block.onchange(event);
                }


                this.codeObservable_.next(this.workspace);
            }
        } catch (err) {
            this.codeObservable_.error(err);
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

module.exports = BlocklyComponent;
