/**
 * Created by lukepowell on 2/10/17.
 */
const assert = require('assert');
const arduino = require('../arduino_core');

describe('Arduino', () =>{
    describe('addCoreArduinoMenuOptions', () => {
       it('should contain Project', () => {
           const menu = Object.create(null);
           arduino.addCoreArduinoMenuOptions(menu, null, null, null);
           assert.equal(menu.hasOwnProperty('Project'), true);
       });
    });
});