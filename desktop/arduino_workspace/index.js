const {Workspace} = require('../workspace');
const workspaceCore = require('../workspace');

let layoutConfig = {
    settings: {
        showPopoutIcon: false
    },
    content: [{
        type: 'row',
        content: [{
            type: 'component',
            componentName: workspaceCore.BLOCKLY_COMPONENT,
            title: 'Blocks',
            componentState: {label: workspaceCore.BLOCKLY_COMPONENT}
        }, {
            type: 'component',
            componentName: workspaceCore.CODE_COMPONENT,
            title: 'Code',
            componentState: {label: workspaceCore.CODE_COMPONENT}
        }]
    }]
};

exports.ArduinoWorkspace = class PhaserWorkspace extends Workspace {
    constructor(toolboxSource, startingBlocks) {
        super({
            blocklyConfig: Workspace.getDefaultBlocklyConfig(toolboxSource),
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
