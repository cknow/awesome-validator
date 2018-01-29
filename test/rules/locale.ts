import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Locale } from '../../src/rules/locale';

describe('Locale', () => {

    let locale: Locale;

    beforeEach(() => {
        locale = new Locale();
    });

    it('is rule', () => {
        assert.instanceOf(locale, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(locale.validate('en_US'));
        assert.isTrue(locale.validate('pt_BR'));
        assert.isTrue(locale.validate('fr_FR'));
    });

    it('values is not valid', () => {
        assert.isFalse(locale.validate('1'));
        assert.isFalse(locale.validate(1.0));
        assert.isFalse(locale.validate('invalid_locale'));
        assert.isFalse(locale.validate(null));
        assert.isFalse(locale.validate(undefined));
        assert.isFalse(locale.validate(true));
        assert.isFalse(locale.validate(false));
        assert.isFalse(locale.validate([]));
        assert.isFalse(locale.validate({}));
        assert.isFalse(locale.validate(new Array('foo')));
        assert.isFalse(locale.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(locale.validate(new Foo()));
    });

});
