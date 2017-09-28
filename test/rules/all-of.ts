import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { AllOf } from '../../src/rules/all-of';
import { AlwaysValid } from '../../src/rules/always-valid';
import { ObjectType } from '../../src/rules/object-type';

describe('All Of', () => {

    it('is rule', () => {
        assert.instanceOf(new AllOf(), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new AllOf(new AlwaysValid(), new ObjectType()).validate({}));
    });

    it('values is not valid', () => {
        assert.isFalse(new AllOf(new AlwaysValid(), new ObjectType()).validate(true));
    });

});
