import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Version } from '../../src/rules/version';

describe('Version', () => {

    let version: Version;

    beforeEach(() => {
        version = new Version();
    });

    it('is rule', () => {
        assert.instanceOf(version, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(version.validate('1.0.0'));
        assert.isTrue(version.validate('1.0.0-alpha'));
        assert.isTrue(version.validate('1.0.0-alpha.1'));
        assert.isTrue(version.validate('1.0.0-0.3.7'));
        assert.isTrue(version.validate('1.0.0-x.7.z.92'));
        assert.isTrue(version.validate('1.3.7+build.2.b8f12d7'));
        assert.isTrue(version.validate('1.3.7-rc.1'));
    });

    it('values is not valid', () => {
        assert.isFalse(version.validate(''));
        assert.isFalse(version.validate('1.3.7--'));
        assert.isFalse(version.validate('1.3.7++'));
        assert.isFalse(version.validate('foo'));
        assert.isFalse(version.validate('1.2.3.4'));
        assert.isFalse(version.validate('1.2.3.4-beta'));
        assert.isFalse(version.validate('beta'));
        assert.isFalse(version.validate(null));
        assert.isFalse(version.validate(undefined));
        assert.isFalse(version.validate(true));
        assert.isFalse(version.validate(false));
    });

});
