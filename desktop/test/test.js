/**
 * Created by lukepowell on 2/10/17.
 */
const assert = require('assert');
const arduino = require('../project_types/arduino');
const basicJavaScript = require('../project_types/basic_javascript');
const ringoRobot = require('../project_types/ringo_robot');
const textPhaser = require('../project_types/text_phaser');
const visualPhaser = require('../project_types/visual_phaser');
const winkRobot = require('../project_types/wink_robot');


describe('Project Types', () => {
    describe('Arduino', () => {
        it('Mutate menu succeeds', () => {
            const menu = Object.create(null);
            let called = false;
            let failure = false;

            arduino.mutateMenu(menu, {loadedProject: {meta: {board: 'Test Board'}}}, () => {
                called = true;
            }, () => {
                failure = true;
            });

            assert.equal(called, true, 'Success should be called');
            assert.equal(failure, false, 'failure response was not called');
        });
        it('Project Option Correctly Setup', () => {
            const menu = Object.create(null);

            arduino.mutateMenu(menu, {loadedProject: {meta: {board: 'Test Board'}}}, () => {
            }, () => {
            });

            assert.notEqual(menu['Project'], null);
            let loadInArduino = false, uploadToArduino = false, verifyProgram = false, viewCode = false, board = false;
            for (let i = 0; i < menu['Project'].length; ++i) {
                if (menu['Project'][i].label == 'View Code') {
                    viewCode = true;
                }
                if(menu['Project'][i].label == 'Load in Arduino'){
                    loadInArduino = true
                }
                if(menu['Project'][i].label == 'Upload to Arduino'){
                    uploadToArduino = true;
                }
                if(menu['Project'][i].label == 'Verify Program'){
                    verifyProgram = true;
                }
                if(menu['Project'][i].label == 'Board'){
                    board = true;
                }
            }

            assert.equal(menu['Project'].length, 6, "Should have 6 elements");
            assert.equal(loadInArduino, true);
            assert.equal(uploadToArduino, true);
            assert.equal(verifyProgram, true);
            assert.equal(viewCode, true);
            assert.equal(board, true);
        });
    });
    describe('Basic JavaScript', () => {
        it('Mutate menu succeeds', () => {
            const menu = Object.create(null);
            let called = false;
            let failure = false;

            basicJavaScript.mutateMenu(menu, null, () => {
                called = true;
            }, () => {
                failure = true;
            });

            assert.equal(called, true, 'Success should be called');
            assert.equal(failure, false, 'failure response was not called');
        });
    });
    describe('Ringo Robot', () => {
        it('Mutate menu succeeds', () => {
            const menu = Object.create(null);
            let called = false;
            let failure = false;

            ringoRobot.mutateMenu(menu, null, () => {
                called = true;
            }, () => {
                failure = true;
            });

            assert.equal(called, true, 'Success should be called');
            assert.equal(failure, false, 'failure response was not called');
        });
        it('Project Option Correct', () => {
            const menu = Object.create(null);

            ringoRobot.mutateMenu(menu, null, () => {
            }, () => {
            });

            assert.notEqual(menu['Project'], null);
            let loadInArduino = false, uploadToArduino = false, verifyProgram = false, viewCode = false;
            for (let i = 0; i < menu['Project'].length; ++i) {
                if (menu['Project'][i].label == 'View Code') {
                    viewCode = true;
                }
                if(menu['Project'][i].label == 'Load in Arduino'){
                    loadInArduino = true
                }
                if(menu['Project'][i].label == 'Upload to Arduino'){
                    uploadToArduino = true;
                }
                if(menu['Project'][i].label == 'Verify Program'){
                    verifyProgram = true;
                }
            }

            assert.equal(menu['Project'].length, 5, "Should have 5 elements");
            assert.equal(loadInArduino, true);
            assert.equal(uploadToArduino, true);
            assert.equal(verifyProgram, true);
            assert.equal(viewCode, true);
        });
    });
    describe('Text Phaser', () => {
        it('Mutate menu succeeds', () => {
            const menu = Object.create(null);
            let called = false;
            let failure = false;

            textPhaser.mutateMenu(menu, null, () => {
                called = true;
            }, () => {
                failure = true;
            });

            assert.equal(called, true, 'Success should be called');
            assert.equal(failure, false, 'failure response was not called');
        });
        it('Project Option Correct', () => {
            const menu = Object.create(null);

            textPhaser.mutateMenu(menu, null, () => {
            }, () => {
            });

            assert.notEqual(menu['Project'], null);
            let evaluate = false, exportExe = false;
            for (let i = 0; i < menu['Project'].length; ++i) {
                if (menu['Project'][i].label == 'Evaluate') {
                    evaluate = true;
                }
                if(menu['Project'][i].label == 'Export Executable'){
                    exportExe = true;
                }
            }

            assert.equal(menu['Project'].length, 2, "Should have 2 elements");
            assert.equal(evaluate, true);
            assert.equal(exportExe, true);
        });
    });
    describe('Visual Phaser', () => {
        it('Mutate menu succeeds', () => {
            const menu = Object.create(null);
            let called = false;
            let failure = false;

            visualPhaser.mutateMenu(menu, null, () => {
                called = true;
            }, () => {
                failure = true;
            });

            assert.equal(called, true, 'Success should be called');
            assert.equal(failure, false, 'failure response was not called');
        });
        it('Project Option Correct', () => {
            const menu = Object.create(null);

            visualPhaser.mutateMenu(menu, null, () => {
            }, () => {
            });

            assert.notEqual(menu['Project'], null);
            let evaluate = false, exportExe = false;
            for (let i = 0; i < menu['Project'].length; ++i) {
                if (menu['Project'][i].label == 'Evaluate') {
                    evaluate = true;
                }
                if(menu['Project'][i].label == 'Export Executable'){
                    exportExe = true;
                }
            }

            assert.equal(menu['Project'].length, 2, "Should have 2 elements");
            assert.equal(evaluate, true);
            assert.equal(exportExe, true);
        });
    });
    describe('Wink Robot', () => {
        it('Mutate menu succeeds', () => {
            const menu = Object.create(null);
            let called = false;
            let failure = false;

            winkRobot.mutateMenu(menu, null, () => {
                called = true;
            }, () => {
                failure = true;
            });

            assert.equal(called, true, 'Success should be called');
            assert.equal(failure, false, 'failure response was not called');
        });
        it('Project Option Correct', () => {
            const menu = Object.create(null);

            winkRobot.mutateMenu(menu, null, () => {
            }, () => {
            });

            it('Contains View Code', () => {
                const menu = Object.create(null);

                ringoRobot.mutateMenu(menu, null, () => {
                }, () => {
                });

                assert.notEqual(menu['Project'], null);
                let loadInArduino = false, uploadToArduino = false, verifyProgram = false, viewCode = false;
                for (let i = 0; i < menu['Project'].length; ++i) {
                    if (menu['Project'][i].label == 'View Code') {
                        viewCode = true;
                    }
                    if(menu['Project'][i].label == 'Load in Arduino'){
                        loadInArduino = true
                    }
                    if(menu['Project'][i].label == 'Upload to Arduino'){
                        uploadToArduino = true;
                    }
                    if(menu['Project'][i].label == 'Verify Program'){
                        verifyProgram = true;
                    }
                }

                assert.equal(menu['Project'].length, 5, "Should have 5 elements");
                assert.equal(loadInArduino, true);
                assert.equal(uploadToArduino, true);
                assert.equal(verifyProgram, true);
                assert.equal(viewCode, true);
            });
        });
    });
});