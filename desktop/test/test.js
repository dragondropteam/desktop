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
const windowManager = require('../window_manager/window_manager');
const {convertSemverOneToSemverTwo, checkVersion} = require('../project/projects');

describe('semver conversion', () => {
    it('Should convert beta', () =>{
        assert.equal(convertSemverOneToSemverTwo('1.0.0-beta1'), '1.0.0-beta.1');
    });

    it('Should convert alpha', () => {
        assert.equal(convertSemverOneToSemverTwo('1.0.0-alpha1'), '1.0.0-alpha.1');
    });

    it('Should convert rc', () => {
        assert.equal(convertSemverOneToSemverTwo('1.0.0-rc1'), '1.0.0-rc.1');
    });

    it('Should not convert stable', () => {
        assert.equal(convertSemverOneToSemverTwo('1.0.0'), '1.0.0');
    });

    it('Should not convert 2.0.0 strings', () => {
        assert.equal(convertSemverOneToSemverTwo('1.0.0-beta.1'), '1.0.0-beta.1');
    });
});

describe('check version', () => {
    it('Should handle 2.0.0 beta versions', () => {
        assert.ok(checkVersion('1.0.0-beta.2', '1.0.0-beta.1'));
        assert.equal(checkVersion('1.0.0-beta.1', '1.0.0-beta.2'), false);
    });

    it('Should handle 2.0.0 alpha versions', () => {
        assert.ok(checkVersion('1.0.0-alpha.2', '1.0.0-alpha.1'));
        assert.equal(checkVersion('1.0.0-alpha.1', '1.0.0-alpha.2'), false);

    });

    it('Should handle 2.0.0 rc versions', () => {
        assert.ok(checkVersion('1.0.0-rc.2', '1.0.0-rc.1'));
        assert.equal(checkVersion('1.0.0-rc1', '1.0.0-rc2'), false);

    });

    it('Should handle mixed beta versions', () => {
        assert.ok(checkVersion('1.0.0-beta.2', '1.0.0-beta1'));
        assert.equal(checkVersion('1.0.0-beta.1', '1.0.0-beta2'), false);

    });

    it('Should handle mixed alpha versions', () => {
        assert.ok(checkVersion('1.0.0-alpha.2', '1.0.0-alpha1'));
        assert.equal(checkVersion('1.0.0-alpha.1', '1.0.0-alpha2'), false);

    });

    it('Should handle mixed rc versions', () => {
        assert.ok(checkVersion('1.0.0-rc.2', '1.0.0-rc1'));
        assert.equal(checkVersion('1.0.0-rc.1', '1.0.0-rc2'), false);

    });

    it('Should handle stable versions', () => {
        assert.ok(checkVersion('2.0.0', '1.0.0'));
        assert.equal(checkVersion('1.0.0', '2.0.0'), false);
    });

    it('Should handle a prerelease from newer major version', () => {
        assert.ok(checkVersion('2.0.0-beta10', '1.1.0'));
    });

    it('Should be true for equal versions', ()  => {
        assert.ok(checkVersion('2.0.0', '2.0.0'));
    })
});


describe('WindowManager', () => {
    it('Should generate unique ids', () => {
        const idOne = windowManager.generateId();
        const idTwo = windowManager.generateId();

        assert.notStrictEqual(idOne, idTwo);
    })
});
