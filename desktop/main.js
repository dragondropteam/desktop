/**
 * @file Production startup file. Connects to package.json to start using electron
 * @author Luke Powell
 * @copyright DigiPen Institute of Technology 2016
 */

'use strict';
global.development = false;
const core = require('./main_core');
core.setIndex('index.html');
const log = require('electron-log');
//TODO: Set an environment variable that can be passed in to allow more verbose debugging as an option in prod
log.transports.console.level = 'warn';