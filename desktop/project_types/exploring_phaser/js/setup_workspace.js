/**
 * Created by lukepowell on 10/10/16.
 *
 * All content copyright DigiPen Institute of Technology 2016
 */
const {PhaserWorkspace} = require('../../../phaser_workspace');
const fs = require('fs-extra');
const path = require('path');
let toolboxSource = fs.readFileSync(path.join(__dirname, 'toolbox.xml'), 'utf8');
const workspace = new PhaserWorkspace(toolboxSource);
workspace.init();
