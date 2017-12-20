import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Infinite } from '../../src/rules/infinite';

describe('Infinite', () => {

    let infinite: Infinite;

    beforeEach(() => {
        infinite = new Infinite();
    });

    it('is rule', () => {
        assert.instanceOf(infinite, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(infinite.validate(Infinity));
        assert.isTrue(infinite.validate(Infinity * -1));
    });

    it('values is not valid', () => {
        assert.isFalse(infinite.validate(' '));
        assert.isFalse(infinite.validate([]));
        assert.isFalse(infinite.validate(Number.MAX_SAFE_INTEGER));
        assert.isFalse(infinite.validate(null));
        assert.isFalse(infinite.validate(undefined));
        assert.isFalse(infinite.validate('123456'));
        assert.isFalse(infinite.validate(-9));
        assert.isFalse(infinite.validate(0));
        assert.isFalse(infinite.validate(16));
        assert.isFalse(infinite.validate(2));
    });

});
