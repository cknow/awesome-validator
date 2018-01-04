import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Digit } from '../../src/rules/digit';

describe('Digit', () => {

    let digit: Digit;

    beforeEach(() => {
        digit = new Digit();
    });

    it('is rule', () => {
        assert.instanceOf(digit, AbstractRule);
    });

    it('values is valid with additional characters', () => {
        assert.isTrue(new Digit('!@#$%^&*(){}').validate('!@#$%^&*(){} 123'));
        assert.isTrue(new Digit('[]?+=/\\-_|"\',<>.').validate('[]?+=/\\-_|"\',<>. \t \n 123'));
        assert.isTrue(new Digit(undefined).validate('12 345'));
    });

    it('values is valid', () => {
        assert.isTrue(digit.validate('\n\t'));
        assert.isTrue(digit.validate(' '));
        assert.isTrue(digit.validate(165));
        assert.isTrue(digit.validate(1650));
        assert.isTrue(digit.validate('01650'));
        assert.isTrue(digit.validate('165'));
        assert.isTrue(digit.validate('1650'));
        assert.isTrue(digit.validate('16 50'));
        assert.isTrue(digit.validate('\n5\t'));
    });

    it('values is not valid', () => {
        assert.isFalse(digit.validate(''));
        assert.isFalse(digit.validate('16-50'));
        assert.isFalse(digit.validate('a'));
        assert.isFalse(digit.validate('Foo'));
        assert.isFalse(digit.validate('12.1'));
        assert.isFalse(digit.validate('-12'));
        assert.isFalse(digit.validate(-50));
        assert.isFalse(digit.validate('basic'));
        assert.isFalse(digit.validate(Boolean()));
        assert.isFalse(digit.validate(String()));
        assert.isFalse(digit.validate(null));
        assert.isFalse(digit.validate(undefined));
        assert.isFalse(digit.validate(true));
        assert.isFalse(digit.validate(false));
        assert.isFalse(digit.validate('true'));
        assert.isFalse(digit.validate('false'));
        assert.isFalse(digit.validate('-1.1'));
        assert.isFalse(digit.validate('1.1'));
        assert.isFalse(digit.validate('-1'));
        assert.isFalse(digit.validate(-1));
        assert.isFalse(digit.validate(-1.0));
        assert.isFalse(digit.validate(0.1));
        assert.isFalse(digit.validate(-0.1));
        assert.isFalse(digit.validate(1.1));
        assert.isFalse(digit.validate(-1.1));
        assert.isFalse(digit.validate([]));
        assert.isFalse(digit.validate({}));
        assert.isFalse(digit.validate(new Array('foo')));
        assert.isFalse(digit.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(digit.validate(new Foo()));
    });

});
