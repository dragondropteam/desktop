/**
 * Created by lukepowell on 10/10/16.
 *
 * All content copyright DigiPen Institute of Technology 2016
 */

const {ArduinoWorkspace} = require('../../../arduino_workspace');
const fs = require('fs-extra');
const path = require('path');
let startingBlocks = '<xml xmlns="http://www.w3.org/1999/xhtml">\n' +
    '<block type="hardwarestartup" id=",(1UN`:wW_-XR^e4%e4z" deletable="false" x="13" y="138"></block>\n' +
    '<block type="loop" id="3XQ,:+8Ta^:x2dcPMRF="  deletable="false" x="13" y="213"></block>\n' +
    '</xml>';
let toolboxSource = fs.readFileSync(path.join(__dirname, 'toolbox.xml'), 'utf8');
const workspace = new ArduinoWorkspace(toolboxSource, startingBlocks);
workspace.init();
