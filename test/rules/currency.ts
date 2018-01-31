import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Currency, CurrencyOptions } from '../../src/rules/currency';

describe('Currency', () => {

    let currency: Currency;
    let currencyOptions: CurrencyOptions;

    beforeEach(() => {
        currency = new Currency();
    });

    it('is rule', () => {
        assert.instanceOf(currency, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(currency.validate('-$10,123.45'));
        assert.isTrue(currency.validate('$10,123.45'));
        assert.isTrue(currency.validate('$10123.45'));
        assert.isTrue(currency.validate('10,123.45'));
        assert.isTrue(currency.validate('10123.45'));
        assert.isTrue(currency.validate('10,123'));
        assert.isTrue(currency.validate('1,123,456'));
        assert.isTrue(currency.validate('1123456'));
        assert.isTrue(currency.validate('1.39'));
        assert.isTrue(currency.validate('.03'));
        assert.isTrue(currency.validate('0.10'));
        assert.isTrue(currency.validate('$0.10'));
        assert.isTrue(currency.validate('-$0.01'));
        assert.isTrue(currency.validate('-$.99'));
        assert.isTrue(currency.validate('$100,234,567.89'));
        assert.isTrue(currency.validate('$10,123'));
        assert.isTrue(currency.validate('10,123'));
        assert.isTrue(currency.validate('-10123'));
    });

    it('values is not valid', () => {
        assert.isFalse(currency.validate('1.234'));
        assert.isFalse(currency.validate('$1.1'));
        assert.isFalse(currency.validate('$ 32.50'));
        assert.isFalse(currency.validate('500$'));
        assert.isFalse(currency.validate('.0001'));
        assert.isFalse(currency.validate('$.001'));
        assert.isFalse(currency.validate('$0.001'));
        assert.isFalse(currency.validate('12,34.56'));
        assert.isFalse(currency.validate('123456,123,123456'));
        assert.isFalse(currency.validate('123,4'));
        assert.isFalse(currency.validate(',123'));
        assert.isFalse(currency.validate('$-,123'));
        assert.isFalse(currency.validate('$'));
        assert.isFalse(currency.validate('.'));
        assert.isFalse(currency.validate(','));
        assert.isFalse(currency.validate('00'));
        assert.isFalse(currency.validate('$-'));
        assert.isFalse(currency.validate('$-,.'));
        assert.isFalse(currency.validate('-'));
        assert.isFalse(currency.validate('-$'));
        assert.isFalse(currency.validate(''));
        assert.isFalse(currency.validate('- $'));
        assert.isFalse(currency.validate(''));
        assert.isFalse(currency.validate('foo'));
        assert.isFalse(currency.validate(null));
        assert.isFalse(currency.validate(undefined));
        assert.isFalse(currency.validate(true));
        assert.isFalse(currency.validate(false));
        assert.isFalse(currency.validate([]));
        assert.isFalse(currency.validate({}));
        assert.isFalse(currency.validate(new Array('foo')));
        assert.isFalse(currency.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(currency.validate(new Foo()));
    });

    it('with options', () => {
        currencyOptions = {allowDecimal: false};
        assert.isTrue(new Currency(currencyOptions).validate('-$10,123'));
        assert.isTrue(new Currency(currencyOptions).validate('$10,123'));
        assert.isTrue(new Currency(currencyOptions).validate('$10123'));
        assert.isTrue(new Currency(currencyOptions).validate('10,123'));

        assert.isFalse(new Currency(currencyOptions).validate('-$10,123.45'));
        assert.isFalse(new Currency(currencyOptions).validate('$10,123.45'));
        assert.isFalse(new Currency(currencyOptions).validate('$10123.45'));
        assert.isFalse(new Currency(currencyOptions).validate('10123.45'));

        currencyOptions = {requireDecimal: true};
        assert.isTrue(new Currency(currencyOptions).validate('-$10,123.45'));
        assert.isTrue(new Currency(currencyOptions).validate('$10,123.45'));
        assert.isTrue(new Currency(currencyOptions).validate('$10123.45'));
        assert.isTrue(new Currency(currencyOptions).validate('10,123.45'));

        assert.isFalse(new Currency(currencyOptions).validate('$10,123'));
        assert.isFalse(new Currency(currencyOptions).validate('10,123'));
        assert.isFalse(new Currency(currencyOptions).validate('-10123'));
        assert.isFalse(new Currency(currencyOptions).validate('1,123,456'));

        currencyOptions = {digitsAfterDecimal: undefined};
        assert.isTrue(new Currency(currencyOptions).validate('-$10,123'));
        assert.isTrue(new Currency(currencyOptions).validate('$10,123'));
        assert.isTrue(new Currency(currencyOptions).validate('$10123'));
        assert.isTrue(new Currency(currencyOptions).validate('10,123'));

        assert.isFalse(new Currency(currencyOptions).validate('1.23'));
        assert.isFalse(new Currency(currencyOptions).validate('$1.13322'));
        assert.isFalse(new Currency(currencyOptions).validate('$ 32.50'));
        assert.isFalse(new Currency(currencyOptions).validate('500$'));

        currencyOptions = {digitsAfterDecimal: [1, 3]};
        assert.isTrue(new Currency(currencyOptions).validate('-$10,123.4'));
        assert.isTrue(new Currency(currencyOptions).validate('$10,123.454'));
        assert.isTrue(new Currency(currencyOptions).validate('$10123.452'));
        assert.isTrue(new Currency(currencyOptions).validate('10,123.453'));

        assert.isFalse(new Currency(currencyOptions).validate('1.23'));
        assert.isFalse(new Currency(currencyOptions).validate('$1.13322'));
        assert.isFalse(new Currency(currencyOptions).validate('$ 32.50'));
        assert.isFalse(new Currency(currencyOptions).validate('500$'));

        currencyOptions = {requireSymbol: true};
        assert.isTrue(new Currency(currencyOptions).validate('-$10,123.45'));
        assert.isTrue(new Currency(currencyOptions).validate('$10,123.45'));
        assert.isTrue(new Currency(currencyOptions).validate('$10123.45'));
        assert.isTrue(new Currency(currencyOptions).validate('$10,123.45'));

        assert.isFalse(new Currency(currencyOptions).validate('1.234'));
        assert.isFalse(new Currency(currencyOptions).validate('$1.234'));
        assert.isFalse(new Currency(currencyOptions).validate('1.1'));
        assert.isFalse(new Currency(currencyOptions).validate('$1.1'));

        currencyOptions = {symbol: '¥', negativeSignBeforeDigits: true};
        assert.isTrue(new Currency(currencyOptions).validate('123,456.78'));
        assert.isTrue(new Currency(currencyOptions).validate('-123,456.78'));
        assert.isTrue(new Currency(currencyOptions).validate('¥6,954,231'));
        assert.isTrue(new Currency(currencyOptions).validate('¥-6,954,231'));

        assert.isFalse(new Currency(currencyOptions).validate('1.234'));
        assert.isFalse(new Currency(currencyOptions).validate('¥1.1'));
        assert.isFalse(new Currency(currencyOptions).validate('5,00'));
        assert.isFalse(new Currency(currencyOptions).validate('.0001'));

        currencyOptions = {symbol: '¥', allowNegatives: false};
        assert.isTrue(new Currency(currencyOptions).validate('123,456.78'));
        assert.isTrue(new Currency(currencyOptions).validate('¥6,954,231'));
        assert.isTrue(new Currency(currencyOptions).validate('¥10.03'));
        assert.isTrue(new Currency(currencyOptions).validate('10.03'));

        assert.isFalse(new Currency(currencyOptions).validate('1.234'));
        assert.isFalse(new Currency(currencyOptions).validate('-123,456.78'));
        assert.isFalse(new Currency(currencyOptions).validate('¥-6,954,231'));
        assert.isFalse(new Currency(currencyOptions).validate('¥-10.03'));

        currencyOptions = {
            symbol: 'R',
            negativeSignBeforeDigits: true,
            thousandsSeparator: ' ',
            decimalSeparator: ',',
            allowNegativeSignPlaceholder: true
        };
        assert.isTrue(new Currency(currencyOptions).validate('123 456,78'));
        assert.isTrue(new Currency(currencyOptions).validate('-10 123'));
        assert.isTrue(new Currency(currencyOptions).validate('R-10 123'));
        assert.isTrue(new Currency(currencyOptions).validate('R 6 954 231'));

        assert.isFalse(new Currency(currencyOptions).validate('1,234'));
        assert.isFalse(new Currency(currencyOptions).validate('R -10123'));
        assert.isFalse(new Currency(currencyOptions).validate('R- 10123'));
        assert.isFalse(new Currency(currencyOptions).validate('R,1'));

        currencyOptions = {
            symbol: '€',
            thousandsSeparator: '.',
            decimalSeparator: ',',
            allowSpaceAfterSymbol: true
        };
        assert.isTrue(new Currency(currencyOptions).validate('123.456,78'));
        assert.isTrue(new Currency(currencyOptions).validate('-123.456,78'));
        assert.isTrue(new Currency(currencyOptions).validate('€6.954.231'));
        assert.isTrue(new Currency(currencyOptions).validate('-€6.954.231'));

        assert.isFalse(new Currency(currencyOptions).validate('1,234'));
        assert.isFalse(new Currency(currencyOptions).validate('€ 1,1'));
        assert.isFalse(new Currency(currencyOptions).validate('50#,50'));
        assert.isFalse(new Currency(currencyOptions).validate('123,@€ '));

        currencyOptions = {
            symbol: '€',
            thousandsSeparator: '.',
            symbolAfterDigits: true,
            decimalSeparator: ',',
            allowSpaceAfterDigits: true
        };
        assert.isTrue(new Currency(currencyOptions).validate('123.456,78'));
        assert.isTrue(new Currency(currencyOptions).validate('-123.456,78'));
        assert.isTrue(new Currency(currencyOptions).validate('6.954.231 €'));
        assert.isTrue(new Currency(currencyOptions).validate('-6.954.231 €'));

        assert.isFalse(new Currency(currencyOptions).validate('1,234'));
        assert.isFalse(new Currency(currencyOptions).validate('1,1 €'));
        assert.isFalse(new Currency(currencyOptions).validate(',0001'));
        assert.isFalse(new Currency(currencyOptions).validate(',001 €'));

        currencyOptions = {
            symbol: 'kr.',
            negativeSignBeforeDigits: true,
            thousandsSeparator: '.',
            decimalSeparator: ',',
            allowSpaceAfterSymbol: true
        };
        assert.isTrue(new Currency(currencyOptions).validate('123.456,78'));
        assert.isTrue(new Currency(currencyOptions).validate('-10.123'));
        assert.isTrue(new Currency(currencyOptions).validate('kr. -10.123'));
        assert.isTrue(new Currency(currencyOptions).validate('kr.-10.123'));

        assert.isFalse(new Currency(currencyOptions).validate('1,234'));
        assert.isFalse(new Currency(currencyOptions).validate('kr.  -10123'));
        assert.isFalse(new Currency(currencyOptions).validate('kr.,1'));
        assert.isFalse(new Currency(currencyOptions).validate(',0001'));

        currencyOptions = {
            symbol: 'kr.',
            allowNegatives: false,
            negativeSignBeforeDigits: true,
            thousandsSeparator: '.',
            decimalSeparator: ',',
            allowSpaceAfterSymbol: true
        };
        assert.isTrue(new Currency(currencyOptions).validate('123.456,78'));
        assert.isTrue(new Currency(currencyOptions).validate('10.123'));
        assert.isTrue(new Currency(currencyOptions).validate('kr. 10.123'));
        assert.isTrue(new Currency(currencyOptions).validate('kr.10.123'));

        assert.isFalse(new Currency(currencyOptions).validate('1,234'));
        assert.isFalse(new Currency(currencyOptions).validate('-10.123'));
        assert.isFalse(new Currency(currencyOptions).validate('kr. -10.123'));
        assert.isFalse(new Currency(currencyOptions).validate('kr. -1.234.567,89'));

        currencyOptions = {parensForNegatives: true};
        assert.isTrue(new Currency(currencyOptions).validate('1,234'));
        assert.isTrue(new Currency(currencyOptions).validate('(1,234)'));
        assert.isTrue(new Currency(currencyOptions).validate('($6,954,231)'));
        assert.isTrue(new Currency(currencyOptions).validate('$10.03'));

        assert.isFalse(new Currency(currencyOptions).validate('1.234'));
        assert.isFalse(new Currency(currencyOptions).validate('($1.1)'));
        assert.isFalse(new Currency(currencyOptions).validate('-$1.10'));
        assert.isFalse(new Currency(currencyOptions).validate('$ 32.50'));

        currencyOptions = {allowNegatives: false};
        assert.isTrue(new Currency(currencyOptions).validate('$10,123.45'));
        assert.isTrue(new Currency(currencyOptions).validate('$10123.45'));
        assert.isTrue(new Currency(currencyOptions).validate('10,123.45'));
        assert.isTrue(new Currency(currencyOptions).validate('10123.45'));

        assert.isFalse(new Currency(currencyOptions).validate('1.234'));
        assert.isFalse(new Currency(currencyOptions).validate('-1.234'));
        assert.isFalse(new Currency(currencyOptions).validate('-10123'));
        assert.isFalse(new Currency(currencyOptions).validate('-$0.01'));

        currencyOptions = {negativeSignAfterDigits: true};
        assert.isTrue(new Currency(currencyOptions).validate('$10,123.45'));
        assert.isTrue(new Currency(currencyOptions).validate('$10123.45-'));
        assert.isTrue(new Currency(currencyOptions).validate('10,123.45'));
        assert.isTrue(new Currency(currencyOptions).validate('10123.45-'));

        assert.isFalse(new Currency(currencyOptions).validate('1.234'));
        assert.isFalse(new Currency(currencyOptions).validate('-1.234'));
        assert.isFalse(new Currency(currencyOptions).validate('-10123'));
        assert.isFalse(new Currency(currencyOptions).validate('-$0.01'));
    });

});
