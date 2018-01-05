import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { AlwaysInvalid } from '../../src/rules/always-invalid';
import { AlwaysValid } from '../../src/rules/always-valid';
import { Each } from '../../src/rules/each';

describe('Each', () => {

    let each: Each;

    beforeEach(() => {
        each = new Each();
    });

    it('is rule', () => {
        assert.instanceOf(each, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Each(new AlwaysValid()).validate([1, 2, 3, 4, 5]));
        assert.isTrue(new Each(null, new AlwaysValid()).validate(['a', 'b', 'c', 'd', 'e']));
        assert.isTrue(new Each(new AlwaysValid(), new AlwaysValid()).validate(['a', 'b', 'c', 'd', 'e']));
        assert.isTrue(new Each(new AlwaysValid()).validate({foo: 'bar'}));

        assert.isTrue(each.validate(''));
        assert.isTrue(each.validate(' '));
        assert.isTrue(each.validate('   '));
    });

    it('values is not valid', () => {
        assert.isFalse(new Each(new AlwaysInvalid()).validate(['', 2, 3, 4, 5]));
        assert.isFalse(new Each(null, new AlwaysInvalid()).validate({age: 22}));

        assert.isFalse(each.validate(123));
        assert.isFalse(each.validate(null));
        assert.isFalse(each.validate(undefined));
        assert.isFalse(each.validate(true));
        assert.isFalse(each.validate(false));
    });

});
