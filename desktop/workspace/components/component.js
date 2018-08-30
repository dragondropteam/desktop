/**
 * @file Sets up GoldenLayout components
 * @author Luke Powell
 * @copyright DigiPen Institute of Technology 2016
 */

class BaseComponent {
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
        this.parent = workspace;
    }

    /**
     * Called when this component is closing and being removed from the workspace
     */
    onDetach() {
        this.parent.removeComponent(this);
        this.parent = null;
    }

    getSibling(name){
        return this.parent.getComponent(name);
    }
}

module.exports = {
    BaseComponent: BaseComponent,
    TYPE_COMPONENT: 'component',
    TIMEOUT: 100
};