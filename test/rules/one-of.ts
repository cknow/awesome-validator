import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { AlwaysInvalid } from '../../src/rules/always-invalid';
import { AlwaysValid } from '../../src/rules/always-valid';
import { OneOf } from '../../src/rules/one-of';

describe('OneOf', () => {

    it('is rule', () => {
        assert.instanceOf(new OneOf(), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new OneOf(new AlwaysValid()).validate(null));
        assert.isTrue(new OneOf(new AlwaysValid(), new AlwaysInvalid()).validate(null));
        assert.isTrue(new OneOf(new AlwaysValid(), new AlwaysInvalid(), new AlwaysInvalid()).validate(null));
    });

    it('values is not valid', () => {
        assert.isFalse(new OneOf(new AlwaysInvalid()).validate(null));
        assert.isFalse(new OneOf(new AlwaysInvalid(), new AlwaysInvalid()).validate(null));
        assert.isFalse(new OneOf(new AlwaysInvalid(), new AlwaysValid(), new AlwaysValid()).validate(null));
    });

});
