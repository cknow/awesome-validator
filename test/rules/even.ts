import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Even } from './../../src/rules/even';

describe('Even', () => {

    let even: Even;

    beforeEach(() => {
        even = new Even();
    });

    it('is rule', () => {
        assert.instanceOf(even, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(even.validate(null));
        assert.isTrue(even.validate(''));
        assert.isTrue(even.validate('2'));
        assert.isTrue(even.validate(-2));
        assert.isTrue(even.validate(-0));
        assert.isTrue(even.validate(0));
        assert.isTrue(even.validate(2));
    });

    it('values is not valid', () => {
        assert.isFalse(even.validate(undefined));
        assert.isFalse(even.validate(-3));
        assert.isFalse(even.validate(-1));
        assert.isFalse(even.validate(1));
        assert.isFalse(even.validate(3));
    });

});
