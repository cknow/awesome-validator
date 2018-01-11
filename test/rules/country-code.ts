import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { CountryCode } from '../../src/rules/country-code';

describe('CountryCode', () => {

    let countryCode: CountryCode;

    beforeEach(() => {
        countryCode = new CountryCode();
    });

    it('is rule', () => {
        assert.instanceOf(countryCode, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new CountryCode('alpha-2').validate('BR'));
        assert.isTrue(new CountryCode('alpha2').validate('BR'));
        assert.isTrue(new CountryCode('alpha-3').validate('BRA'));
        assert.isTrue(new CountryCode('alpha3').validate('BRA'));
        assert.isTrue(new CountryCode('numeric').validate('076'));
        assert.isTrue(new CountryCode('alpha-2').validate('DE'));
        assert.isTrue(new CountryCode('alpha-3').validate('DEU'));
        assert.isTrue(new CountryCode('numeric').validate('276'));
        assert.isTrue(new CountryCode('alpha-2').validate('US'));
        assert.isTrue(new CountryCode('alpha-3').validate('USA'));
        assert.isTrue(new CountryCode('numeric').validate('840'));
        assert.isTrue(new CountryCode('alpha-2', 'alpha-3').validate('BR'));
        assert.isTrue(new CountryCode('alpha-2', 'alpha-3').validate('BRA'));
        assert.isTrue(new CountryCode('alpha-2', 'alpha3').validate('BR'));
        assert.isTrue(new CountryCode('alpha2', 'alpha-3').validate('BRA'));

        assert.isTrue(countryCode.validate('BR'));
        assert.isTrue(countryCode.validate('BRA'));
        assert.isTrue(countryCode.validate('076'));
        assert.isTrue(countryCode.validate('DE'));
        assert.isTrue(countryCode.validate('DEU'));
        assert.isTrue(countryCode.validate('276'));
        assert.isTrue(countryCode.validate('US'));
        assert.isTrue(countryCode.validate('USA'));
        assert.isTrue(countryCode.validate('840'));
    });

    it('values is not valid', () => {
        assert.isFalse(new CountryCode('alpha-2').validate('USA'));
        assert.isFalse(new CountryCode('alpha-3').validate('US'));
        assert.isFalse(new CountryCode('numeric').validate('000'));
        assert.isFalse(new CountryCode('alpha-2', 'numeric').validate('USA'));
        assert.isFalse(new CountryCode('alpha2', 'numeric').validate('USA'));

        assert.isFalse(countryCode.validate('text'));
        assert.isFalse(countryCode.validate(''));
        assert.isFalse(countryCode.validate('foo'));
        assert.isFalse(countryCode.validate(1.0));
        assert.isFalse(countryCode.validate('wrongtld'));
        assert.isFalse(countryCode.validate(null));
        assert.isFalse(countryCode.validate(undefined));
        assert.isFalse(countryCode.validate(true));
        assert.isFalse(countryCode.validate(false));
        assert.isFalse(countryCode.validate([]));
        assert.isFalse(countryCode.validate({}));
        assert.isFalse(countryCode.validate(new Array('foo')));
        assert.isFalse(countryCode.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(countryCode.validate(new Foo()));
    });

});
