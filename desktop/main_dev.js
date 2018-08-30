/**
 * @file Development startup
 * @author Luke Powell
 * @copyright DigiPen Institute of Technology 2016
 */

'use strict';
global.development = true;
const core = require('./main_core');
core.setIndex('index_dev.html');
const log = require('electron-log');
// log.transports.file.level = false;