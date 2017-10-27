import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { AlwaysInvalid } from '../../src/rules/always-invalid';
import { AlwaysValid } from '../../src/rules/always-valid';
import { Not } from '../../src/rules/not';

describe('Not', () => {

    it('is rule', () => {
        assert.instanceOf(new Not(new AlwaysInvalid()), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Not(new AlwaysInvalid()).validate(null));
    });

    it('values is not valid', () => {
        assert.isFalse(new Not(new AlwaysValid()).validate(null));
    });

});
