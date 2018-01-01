import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { CurrencyCode } from '../../src/rules/currency-code';

describe('CurrencyCode', () => {

    let currencyCode: CurrencyCode;

    beforeEach(() => {
        currencyCode = new CurrencyCode();
    });

    it('is rule', () => {
        assert.instanceOf(currencyCode, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(currencyCode.validate('EUR'));
        assert.isTrue(currencyCode.validate('BRL'));
        assert.isTrue(currencyCode.validate('USD'));
        assert.isTrue(currencyCode.validate('xba'));
        assert.isTrue(currencyCode.validate('xxx'));
    });

    it('values is not valid', () => {
        assert.isFalse(currencyCode.validate(''));
        assert.isFalse(currencyCode.validate('foo'));
        assert.isFalse(currencyCode.validate('USA'));
        assert.isFalse(currencyCode.validate('br'));
        assert.isFalse(currencyCode.validate(1.0));
        assert.isFalse(currencyCode.validate('wrongtld'));
        assert.isFalse(currencyCode.validate(null));
        assert.isFalse(currencyCode.validate(undefined));
        assert.isFalse(currencyCode.validate(true));
        assert.isFalse(currencyCode.validate(false));
        assert.isFalse(currencyCode.validate([]));
        assert.isFalse(currencyCode.validate({}));
        assert.isFalse(currencyCode.validate(new Array('foo')));
        assert.isFalse(currencyCode.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(currencyCode.validate(new Foo()));
    });

});
