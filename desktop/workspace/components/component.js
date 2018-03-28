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
        this.parent = null;
        this.parent.removeComponent(this);
    }
}

module.exports = {
    BaseComponent: BaseComponent,
    TYPE_COMPONENT: 'component',
    TIMEOUT: 500
};