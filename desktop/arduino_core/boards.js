/**
 * Listing of display name to name that we pass to the command line
 * --board package:arch:board[:parameters]
 */

/**
 *
 * @type {Array}
 */
var Board = [];

Board['Arduino Yun'] = 'arduino:avr:yun';
Board['Arduino/Genuino Uno'] = 'arduino:avr:uno';
Board['Arduino Duemilanove or Diecimila'] = 'arduino:avr:diecimila';
Board['Arduino Nano'] = 'arduino:avr:nano';
Board['Arduino/Genuino Mega or Mega 2560'] = 'arduino:avr:mega';
Board['Arduino Mega ADK'] = 'arduino:avr:megaADK';
Board['Arduino Leonardo'] = 'arduino:avr:leonardo';
Board['Arduino Micro'] = 'arduino:avr:micro';
Board['Arduino Esplora'] = 'arduino:avr:esplora';
Board['Arduino Mini'] = 'arduino:avr:mini';
Board['Arduino Ethernet'] = 'arduino:avr:ethernet';
Board['Arduino Fio'] = 'arduino:avr:fio';
Board['Arduino BT'] = 'arduino:avr:bt';
Board['LilyPad Arduino USB'] = 'arduino:avr:LilyPadUSB';
Board['LilyPad Arduino'] = 'arduino:avr:lilypad';
Board['Arduino Pro or Pro Mini'] = 'arduino:avr:pro';
Board['Arduino NG or older'] = 'arduino:avr:atmegang';
Board['Arduino Robot Control'] = 'arduino:avr:robotControl';
Board['Arduino Robot Motor'] = 'arduino:avr:robotMotor';
Board['Arduino Gemma'] = 'arduino:avr:gemma';


exports.Board = Board;