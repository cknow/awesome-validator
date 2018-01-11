import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { LanguageCode } from '../../src/rules/language-code';

describe('LanguageCode', () => {

    let languageCode: LanguageCode;

    beforeEach(() => {
        languageCode = new LanguageCode();
    });

    it('is rule', () => {
        assert.instanceOf(languageCode, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new LanguageCode('alpha3').validate('por'));
        assert.isTrue(new LanguageCode('alpha2').validate('pt'));

        assert.isTrue(languageCode.validate('por'));
        assert.isTrue(languageCode.validate('eng'));
    });

    it('values is not valid', () => {
        assert.isFalse(new LanguageCode('alpha3').validate('pt'));
        assert.isFalse(new LanguageCode('alpha2').validate('por'));

        assert.isFalse(languageCode.validate('1'));
        assert.isFalse(languageCode.validate(' '));
        assert.isFalse(languageCode.validate('   '));
        assert.isFalse(languageCode.validate(1.0));
        assert.isFalse(languageCode.validate('wrong code'));
        assert.isFalse(languageCode.validate(null));
        assert.isFalse(languageCode.validate(undefined));
        assert.isFalse(languageCode.validate(true));
        assert.isFalse(languageCode.validate(false));
        assert.isFalse(languageCode.validate([]));
        assert.isFalse(languageCode.validate({}));
        assert.isFalse(languageCode.validate(new Array('foo')));
        assert.isFalse(languageCode.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(languageCode.validate(new Foo()));
    });

});
