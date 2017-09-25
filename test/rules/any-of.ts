import { assert } from 'chai';

import { AbstractComposite } from '../../src/rules/abstract-composite';
import { AlwaysInvalid } from '../../src/rules/always-invalid';
import { AlwaysValid } from '../../src/rules/always-valid';
import { AnyOf } from '../../src/rules/any-of';

describe('Any Of', () => {

    it('is rule', () => {
        assert.instanceOf(new AnyOf(), AbstractComposite);
    });

    it('values is valid', () => {
        assert.isTrue(new AnyOf(new AlwaysInvalid(), new AlwaysValid()).validate('any'));
    });

    it('values is not valid', () => {
        assert.isFalse(new AnyOf(new AlwaysInvalid(), new AlwaysInvalid()).validate('any'));
    });

});
