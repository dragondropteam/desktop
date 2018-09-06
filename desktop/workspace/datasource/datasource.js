/**
 * @file Sets up the data source for the layouts
 * @author Luke Powell
 * @copyright DigiPen Institute of Technology 2016
 */

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

module.exports = DataSource;