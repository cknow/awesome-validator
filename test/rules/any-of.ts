import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { AlwaysInvalid } from '../../src/rules/always-invalid';
import { AlwaysValid } from '../../src/rules/always-valid';
import { AnyOf } from '../../src/rules/any-of';

describe('AnyOf', () => {

    it('is rule', () => {
        assert.instanceOf(new AnyOf(), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new AnyOf(new AlwaysInvalid(), new AlwaysValid()).validate(null));
    });

    it('values is not valid', () => {
        assert.isFalse(new AnyOf(new AlwaysInvalid(), new AlwaysInvalid()).validate(null));
    });

});
