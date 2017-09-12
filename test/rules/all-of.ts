import { assert } from 'chai';

import { AbstractComposite } from '../../src/rules/abstract-composite';
import { AllOf } from '../../src/rules/all-of';
import { AlwaysValid } from '../../src/rules/always-valid';
import { ObjectType } from '../../src/rules/object-type';

describe('All Of', () => {

    it('is rule', () => {
        assert.instanceOf(new AllOf(), AbstractComposite);
    });

    it('values is valid', () => {
        assert.isTrue(new AllOf(new AlwaysValid(), new ObjectType()).validate({}));
    });

    it('values is not valid', () => {
        assert.isFalse(new AllOf(new AlwaysValid(), new ObjectType()).validate(true));
    });

});
