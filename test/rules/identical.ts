import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Identical } from '../../src/rules/identical';

describe('Identical', () => {

    it('is rule', () => {
        assert.instanceOf(new Identical('foo'), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Identical('foo').validate('foo'));
        assert.isTrue(new Identical(1).validate(1));
        assert.isTrue(new Identical([]).validate([]));
        assert.isTrue(new Identical([1, 2, 3]).validate([1, 2, 3]));
        assert.isTrue(new Identical(null).validate(null));
    });

    it('values is not valid', () => {
        assert.isFalse(new Identical('foo').validate('foobar'));
        assert.isFalse(new Identical(1).validate('1'));
        assert.isFalse(new Identical([1, 2, 3]).validate(['1', 2, 3]));
        assert.isFalse(new Identical(null).validate('foo'));
        assert.isFalse(new Identical('foo').validate(null));
    });

});
