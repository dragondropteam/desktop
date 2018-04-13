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
const {convertSemverOneToSemverTwo, isFromOlderVersion, isFromNewerVersion} = require('../project/projects');

assert.falsy = function (value, message) {
    assert.equal(value, false, message);
};

assert.truthy = function (value, message) {
    assert.ok(value, message);
};

describe('semver conversion', () => {
    it('Should convert beta with a number', () => {
        assert.equal(convertSemverOneToSemverTwo('1.0.0-beta1'), '1.0.0-beta.1');
    });

    it('Should convert alpha with a number', () => {
        assert.equal(convertSemverOneToSemverTwo('1.0.0-alpha1'), '1.0.0-alpha.1');
    });

    it('Should convert rc with a number', () => {
        assert.equal(convertSemverOneToSemverTwo('1.0.0-rc1'), '1.0.0-rc.1');
    });

    it('Should convert beta without a number', () => {
        assert.equal(convertSemverOneToSemverTwo('1.0.0-beta'), '1.0.0-beta');
    });

    it('Should convert alpha without a number', () => {
        assert.equal(convertSemverOneToSemverTwo('1.0.0-alpha'), '1.0.0-alpha');
    });

    it('Should convert rc without a number', () => {
        assert.equal(convertSemverOneToSemverTwo('1.0.0-rc'), '1.0.0-rc');
    });

    it('Should not convert stable', () => {
        assert.equal(convertSemverOneToSemverTwo('1.0.0'), '1.0.0');
    });

    it('Should not convert 2.0.0 strings', () => {
        assert.equal(convertSemverOneToSemverTwo('1.0.0-beta.1'), '1.0.0-beta.1');
    });
});

describe('isFromOlderVersion', () => {
    it('Should handle 2.0.0 beta versions', () => {
        assert.truthy(isFromOlderVersion('1.0.0-beta.2', '1.0.0-beta.1'));
        assert.equal(isFromOlderVersion('1.0.0-beta.1', '1.0.0-beta.2'), false);
    });

    it('Should handle 2.0.0 alpha versions', () => {
        assert.truthy(isFromOlderVersion('1.0.0-alpha.2', '1.0.0-alpha.1'));
        assert.equal(isFromOlderVersion('1.0.0-alpha.1', '1.0.0-alpha.2'), false);

    });

    it('Should handle 2.0.0 rc versions', () => {
        assert.truthy(isFromOlderVersion('1.0.0-rc.2', '1.0.0-rc.1'));
        assert.equal(isFromOlderVersion('1.0.0-rc1', '1.0.0-rc2'), false);

    });

    it('Should handle mixed beta versions', () => {
        assert.truthy(isFromOlderVersion('1.0.0-beta.2', '1.0.0-beta1'));
        assert.equal(isFromOlderVersion('1.0.0-beta.1', '1.0.0-beta2'), false);

    });

    it('Should handle mixed alpha versions', () => {
        assert.truthy(isFromOlderVersion('1.0.0-alpha.2', '1.0.0-alpha1'));
        assert.equal(isFromOlderVersion('1.0.0-alpha.1', '1.0.0-alpha2'), false);

    });

    it('Should handle mixed rc versions', () => {
        assert.truthy(isFromOlderVersion('1.0.0-rc.2', '1.0.0-rc1'));
        assert.equal(isFromOlderVersion('1.0.0-rc.1', '1.0.0-rc2'), false);

    });

    it('Should handle stable versions', () => {
        assert.truthy(isFromOlderVersion('2.0.0', '1.0.0'));
        assert.equal(isFromOlderVersion('1.0.0', '2.0.0'), false);
    });

    it('Should handle a prerelease from newer major version', () => {
        assert.truthy(isFromOlderVersion('2.0.0-beta10', '1.1.0'));
    });

    it('Should be false for equal versions', () => {
        assert.equal(isFromOlderVersion('2.0.0', '2.0.0'), false);
    })
});

describe('isFromNewerVersion', () => {
    it('Should handle 2.0.0 beta versions', () => {
        assert.falsy(isFromNewerVersion('1.0.0-beta.2', '1.0.0-beta.1'));
        assert.truthy(isFromNewerVersion('1.0.0-beta.1', '1.0.0-beta.2'));
    });

    it('Should handle 2.0.0 alpha versions', () => {
        assert.falsy(isFromNewerVersion('1.0.0-alpha.2', '1.0.0-alpha.1'));
        assert.truthy(isFromNewerVersion('1.0.0-alpha.1', '1.0.0-alpha.2'));

    });

    it('Should handle 2.0.0 rc versions', () => {
        assert.falsy(isFromNewerVersion('1.0.0-rc.2', '1.0.0-rc.1'));
        assert.truthy(isFromNewerVersion('1.0.0-rc1', '1.0.0-rc2'));

    });

    it('Should handle mixed beta versions', () => {
        assert.falsy(isFromNewerVersion('1.0.0-beta.2', '1.0.0-beta1'));
        assert.truthy(isFromNewerVersion('1.0.0-beta.1', '1.0.0-beta2'));

    });

    it('Should handle mixed alpha versions', () => {
        assert.falsy(isFromNewerVersion('1.0.0-alpha.2', '1.0.0-alpha1'));
        assert.truthy(isFromNewerVersion('1.0.0-alpha.1', '1.0.0-alpha2'));

    });

    it('Should handle mixed rc versions', () => {
        assert.falsy(isFromNewerVersion('1.0.0-rc.2', '1.0.0-rc1'));
        assert.truthy(isFromNewerVersion('1.0.0-rc.1', '1.0.0-rc2'));

    });

    it('Should handle stable versions', () => {
        assert.falsy(isFromNewerVersion('2.0.0', '1.0.0'));
        assert.truthy(isFromNewerVersion('1.0.0', '2.0.0'));
    });

    it('Should handle a prerelease from newer major version', () => {
        assert.falsy(isFromNewerVersion('2.0.0-beta10', '1.1.0'));
    });

    it('Should be false for equal versions', () => {
        assert.falsy(isFromNewerVersion('2.0.0', '2.0.0'));
    })
});


describe('WindowManager', () => {
    it('Should generate unique ids', () => {
        const idOne = windowManager.generateId();
        const idTwo = windowManager.generateId();

        assert.notStrictEqual(idOne, idTwo);
    })
});
