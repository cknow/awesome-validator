import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Multibyte } from '../../src/rules/multibyte';

describe('Multibyte', () => {

    let multibyte: Multibyte;

    beforeEach(() => {
        multibyte = new Multibyte();
    });

    it('is rule', () => {
        assert.instanceOf(multibyte, AbstractRule);
    });

    it('values is valid with additional characters', () => {
        assert.isTrue(new Multibyte('!@#$%^&*(){}').validate('!@#$%^&*(){} test＠example.com'));
        assert.isTrue(new Multibyte('[]?+=/\\-_|"\',<>.').validate('[]?+=/\\-_|"\',<>. \t \n test＠example.com'));
        assert.isTrue(new Multibyte(undefined).validate('ｶﾀｶﾅ'));
    });

    it('values is valid', () => {
        assert.isTrue(multibyte.validate('ひらがな・カタカナ、．漢字'));
        assert.isTrue(multibyte.validate('あいうえお foobar'));
        assert.isTrue(multibyte.validate('test＠example.com'));
        assert.isTrue(multibyte.validate('1234abcDEｘｙｚ'));
        assert.isTrue(multibyte.validate('ｶﾀｶﾅ'));
        assert.isTrue(multibyte.validate('中文'));
    });

    it('values is not valid', () => {
        assert.isFalse(multibyte.validate('abc'));
        assert.isFalse(multibyte.validate('abc123'));
        assert.isFalse(multibyte.validate('<>@" *.'));
        assert.isFalse(multibyte.validate(''));
        assert.isFalse(multibyte.validate(Boolean()));
        assert.isFalse(multibyte.validate(Number()));
        assert.isFalse(multibyte.validate(String()));
        assert.isFalse(multibyte.validate(null));
        assert.isFalse(multibyte.validate(undefined));
        assert.isFalse(multibyte.validate(true));
        assert.isFalse(multibyte.validate(false));
        assert.isFalse(multibyte.validate('true'));
        assert.isFalse(multibyte.validate('false'));
        assert.isFalse(multibyte.validate('-1.1'));
        assert.isFalse(multibyte.validate('1.1'));
        assert.isFalse(multibyte.validate('1'));
        assert.isFalse(multibyte.validate('-1'));
        assert.isFalse(multibyte.validate('0'));
        assert.isFalse(multibyte.validate(0));
        assert.isFalse(multibyte.validate(-0));
        assert.isFalse(multibyte.validate(1));
        assert.isFalse(multibyte.validate(-1));
        assert.isFalse(multibyte.validate(0.0));
        assert.isFalse(multibyte.validate(-0.0));
        assert.isFalse(multibyte.validate(1.0));
        assert.isFalse(multibyte.validate(-1.0));
        assert.isFalse(multibyte.validate(0.1));
        assert.isFalse(multibyte.validate(-0.1));
        assert.isFalse(multibyte.validate(1.1));
        assert.isFalse(multibyte.validate(-1.1));
        assert.isFalse(multibyte.validate([]));
        assert.isFalse(multibyte.validate({}));
        assert.isFalse(multibyte.validate(new Array('foo')));
        assert.isFalse(multibyte.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(multibyte.validate(new Foo()));
    });

});
