import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Xdigit } from '../../src/rules/xdigit';

describe('Xdigit', () => {

    let xdigit: Xdigit;

    beforeEach(() => {
        xdigit = new Xdigit();
    });

    it('is rule', () => {
        assert.instanceOf(xdigit, AbstractRule);
    });

    it('values is valid with additional characters', () => {
        assert.isTrue(new Xdigit('!@#$%^&*(){} ').validate('!@#$%^&*(){} abc 123'));
        assert.isTrue(new Xdigit('[]?+=/\\-_|\',<>. \t\n').validate('[]?+=/\\-_|\',<>. \t \n abc 123'));
    });

    it('values is valid', () => {
        assert.isTrue(xdigit.validate('FFF'));
        assert.isTrue(xdigit.validate('15'));
        assert.isTrue(xdigit.validate('DE12FA'));
        assert.isTrue(xdigit.validate('1234567890abcdef'));
        assert.isTrue(xdigit.validate(0x123));
        assert.isTrue(xdigit.validate(Number()));
        assert.isTrue(xdigit.validate(0));
        assert.isTrue(xdigit.validate(-0));
        assert.isTrue(xdigit.validate(0.0));
        assert.isTrue(xdigit.validate(-0.0));
    });

    it('values is not valid', () => {
        assert.isFalse(xdigit.validate(''));
        assert.isFalse(xdigit.validate(' '));
        assert.isFalse(xdigit.validate('16-50'));
        assert.isFalse(xdigit.validate('j'));
        assert.isFalse(xdigit.validate('Foo'));
        assert.isFalse(xdigit.validate('12.1'));
        assert.isFalse(xdigit.validate('-12'));
        assert.isFalse(xdigit.validate(-12));
        assert.isFalse(xdigit.validate('( )_{}'));
        assert.isFalse(xdigit.validate(Boolean()));
        assert.isFalse(xdigit.validate(String()));
        assert.isFalse(xdigit.validate(null));
        assert.isFalse(xdigit.validate(undefined));
        assert.isFalse(xdigit.validate(true));
        assert.isFalse(xdigit.validate(false));
        assert.isFalse(xdigit.validate('true'));
        assert.isFalse(xdigit.validate('false'));
        assert.isFalse(xdigit.validate('-1.1'));
        assert.isFalse(xdigit.validate('1.1'));
        assert.isFalse(xdigit.validate('-1'));
        assert.isFalse(xdigit.validate(-1));
        assert.isFalse(xdigit.validate(-1.0));
        assert.isFalse(xdigit.validate(0.1));
        assert.isFalse(xdigit.validate(-0.1));
        assert.isFalse(xdigit.validate(1.1));
        assert.isFalse(xdigit.validate(-1.1));
        assert.isFalse(xdigit.validate([]));
        assert.isFalse(xdigit.validate({}));
        assert.isFalse(xdigit.validate(new Array('foo')));
        assert.isFalse(xdigit.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(xdigit.validate(new Foo()));
    });

});
