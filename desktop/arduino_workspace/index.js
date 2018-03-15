const {Workspace, BlocklyComponent} = require('../workspace');
const workspaceCore = require('../workspace');

exports.ArduinoWorkspace = class ArduinoWorkspace extends Workspace {
    constructor(toolboxSource, startingBlocks) {
        const layoutConfig = {
            settings: {
                showPopoutIcon: false
            },
            content: [{
                type: 'row',
                content: [BlocklyComponent.generateContent(Workspace.getDefaultBlocklyConfig(toolboxSource)), {
                    type: 'component',
                    componentName: workspaceCore.CODE_COMPONENT,
                    title: 'Code',
                    componentState: {label: workspaceCore.CODE_COMPONENT}
                }]
            }]
        };

        super({
            layoutConfig: layoutConfig,
            extension: 'ino',
            editorLanguage: 'ace/mode/c_cpp',
            defaultBlocks: startingBlocks
        });
    }

    /**
     * @override
     */
    getCode() {
        if (!this.getBlockly()) {
            return;
        }

        return Blockly.C.workspaceToCode(this.getBlockly());
    }


    onComponentOpen(component) {
        this.getBlockly().addChangeListener(Blockly.Events.disableOrphans);
        return super.onComponentOpen(component);
    }
};
