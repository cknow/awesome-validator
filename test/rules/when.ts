import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { AlwaysInvalid } from '../../src/rules/always-invalid';
import { AlwaysValid } from '../../src/rules/always-valid';
import { When } from '../../src/rules/when';

describe('When', () => {

    it('is rule', () => {
        assert.instanceOf(new When(new AlwaysValid(), new AlwaysValid()), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new When(new AlwaysValid(), new AlwaysValid()).validate(null));
        assert.isTrue(new When(new AlwaysInvalid(), new AlwaysValid(), new AlwaysValid()).validate(null));
    });

    it('values is not valid', () => {
        assert.isFalse(new When(new AlwaysInvalid(), new AlwaysValid()).validate(null));
        assert.isFalse(new When(new AlwaysValid(), new AlwaysInvalid()).validate(null));
        assert.isFalse(new When(new AlwaysInvalid(), new AlwaysValid(), new AlwaysInvalid()).validate(null));
    });

});
