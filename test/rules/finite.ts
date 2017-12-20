import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Finite } from '../../src/rules/finite';

describe('Finite', () => {

    let finite: Finite;

    beforeEach(() => {
        finite = new Finite();
    });

    it('is rule', () => {
        assert.instanceOf(finite, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(finite.validate('123456'));
        assert.isTrue(finite.validate(-9));
        assert.isTrue(finite.validate(0));
        assert.isTrue(finite.validate(16));
        assert.isTrue(finite.validate(2));
        assert.isTrue(finite.validate(Number.MAX_SAFE_INTEGER));
    });

    it('values is not valid', () => {
        assert.isFalse(finite.validate(''));
        assert.isFalse(finite.validate(' '));
        assert.isFalse(finite.validate('123foo456'));
        assert.isFalse(finite.validate([]));
        assert.isFalse(finite.validate(Infinity));
        assert.isFalse(finite.validate(null));
        assert.isFalse(finite.validate(undefined));
    });

});
