import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { AlwaysInvalid } from '../../src/rules/always-invalid';
import { AlwaysValid } from '../../src/rules/always-valid';
import { NoneOf } from '../../src/rules/none-of';

describe('NoneOf', () => {

    it('is rule', () => {
        assert.instanceOf(new NoneOf(), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new NoneOf(new AlwaysInvalid(), new AlwaysInvalid()).validate(null));
    });

    it('values is not valid', () => {
        assert.isFalse(new NoneOf(new AlwaysInvalid(), new AlwaysValid()).validate(null));
    });

});
