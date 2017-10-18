import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Unique } from '../../src/rules/unique';

describe('Unique', () => {

    let unique: Unique;

    beforeEach(() => {
        unique = new Unique();
    });

    it('is rule', () => {
        assert.instanceOf(unique, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(unique.validate([]));
        assert.isTrue(unique.validate([1, 2, 3]));
        assert.isTrue(unique.validate([true, false]));
        assert.isTrue(unique.validate(['alpha', 'beta', 'gamma', 'delta']));
        assert.isTrue(unique.validate([0, 2.71, 3.14]));
        assert.isTrue(unique.validate([[], ['str'], [1]]));
        assert.isTrue(unique.validate([{key: 'value'}, {other_key: 'value'}]));
    });

    it('values is not valid', () => {
        assert.isFalse(unique.validate('test'));
        assert.isFalse(unique.validate([1, 2, 2, 3]));
        assert.isFalse(unique.validate([1, 2, 3, 1]));
        assert.isFalse(unique.validate([true, false, false]));
        assert.isFalse(unique.validate(['alpha', 'beta', 'gamma', 'delta', 'beta']));
        assert.isFalse(unique.validate([0, 3.14, 2.71, 3.14]));
        assert.isFalse(unique.validate([[], [1], [1]]));
        assert.isFalse(unique.validate([{key: 'value'}, {key: 'value'}]));
    });

});
