import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { AlwaysInvalid } from '../../src/rules/always-invalid';
import { AlwaysValid } from '../../src/rules/always-valid';
import { Optional } from '../../src/rules/optional';

describe('Optional', () => {

    it('is rule', () => {
        assert.instanceOf(new Optional(new AlwaysValid()), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Optional(new AlwaysInvalid()).validate(null));
        assert.isTrue(new Optional(new AlwaysInvalid()).validate(''));
        assert.isTrue(new Optional(new AlwaysValid()).validate('foo'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Optional(new AlwaysInvalid()).validate('foo'));
    });

});
