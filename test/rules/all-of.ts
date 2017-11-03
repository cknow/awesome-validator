import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { AllOf } from '../../src/rules/all-of';
import { AlwaysInvalid } from '../../src/rules/always-invalid';
import { AlwaysValid } from '../../src/rules/always-valid';

describe('AllOf', () => {

    it('is rule', () => {
        assert.instanceOf(new AllOf(), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new AllOf(new AlwaysValid(), new AlwaysValid()).validate(null));
    });

    it('values is not valid', () => {
        assert.isFalse(new AllOf(new AlwaysValid(), new AlwaysInvalid()).validate(null));
    });

});
