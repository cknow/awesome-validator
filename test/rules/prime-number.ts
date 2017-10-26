import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { PrimeNumber } from '../../src/rules/prime-number';

describe('PrimeNumber', () => {

    let primeNumber: PrimeNumber;

    beforeEach(() => {
        primeNumber = new PrimeNumber();
    });

    it('is rule', () => {
        assert.instanceOf(primeNumber, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(primeNumber.validate(3));
        assert.isTrue(primeNumber.validate(5));
        assert.isTrue(primeNumber.validate(7));
        assert.isTrue(primeNumber.validate('3'));
        assert.isTrue(primeNumber.validate('5'));
        assert.isTrue(primeNumber.validate('+7'));
    });

    it('values is not valid', () => {
        assert.isFalse(primeNumber.validate(''));
        assert.isFalse(primeNumber.validate(null));
        assert.isFalse(primeNumber.validate(0));
        assert.isFalse(primeNumber.validate(10));
        assert.isFalse(primeNumber.validate(25));
        assert.isFalse(primeNumber.validate(36));
        assert.isFalse(primeNumber.validate(-1));
        assert.isFalse(primeNumber.validate('-1'));
        assert.isFalse(primeNumber.validate('25'));
        assert.isFalse(primeNumber.validate('0'));
        assert.isFalse(primeNumber.validate('a'));
        assert.isFalse(primeNumber.validate(' '));
        assert.isFalse(primeNumber.validate('Foo'));
    });

});
