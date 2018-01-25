import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Ascii } from '../../src/rules/ascii';

describe('Ascii', () => {

    let ascii: Ascii;

    beforeEach(() => {
        ascii = new Ascii();
    });

    it('is rule', () => {
        assert.instanceOf(ascii, AbstractRule);
    });

    it('values is valid with additional characters', () => {
        assert.isTrue(new Ascii('!@#$%^&*(){}').validate('!@#$%^&*(){} abc'));
        assert.isTrue(new Ascii('[]?+=/\\-_|"\',<>.').validate('[]?+=/\\-_|"\',<>. \t \n abc'));
        assert.isTrue(new Ascii(undefined).validate('abc'));
    });

    it('values is valid', () => {
        assert.isTrue(ascii.validate('foobar'));
        assert.isTrue(ascii.validate('0987654321'));
        assert.isTrue(ascii.validate('test@example.com'));
        assert.isTrue(ascii.validate('1234abcDEF'));
    });

    it('values is not valid', () => {
        assert.isFalse(ascii.validate('ｆｏｏbar'));
        assert.isFalse(ascii.validate('ｘｙｚ０９８'));
        assert.isFalse(ascii.validate('１２３456'));
        assert.isFalse(ascii.validate('ｶﾀｶﾅ'));
        assert.isFalse(ascii.validate(''));
        assert.isFalse(ascii.validate(null));
        assert.isFalse(ascii.validate(undefined));
        assert.isFalse(ascii.validate([]));
        assert.isFalse(ascii.validate({}));
        assert.isFalse(ascii.validate(new Array('foo')));
        assert.isFalse(ascii.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(ascii.validate(new Foo()));
    });

});
