import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Punct } from '../../src/rules/punct';

describe('Punct', () => {

    let punct: Punct;

    beforeEach(() => {
        punct = new Punct();
    });

    it('is rule', () => {
        assert.instanceOf(punct, AbstractRule);
    });

    it('values is valid with additional characters', () => {
        assert.isTrue(new Punct('abc123 ').validate('!@#$%^&*(){} abc 123'));
        assert.isTrue(new Punct('abc123 \t\n').validate('[]?+=/\\-_|\',<>. \t \n abc 123'));
    });

    it('values is valid', () => {
        assert.isTrue(punct.validate('.'));
        assert.isTrue(punct.validate(',;:'));
        assert.isTrue(punct.validate('-@#$*'));
        assert.isTrue(punct.validate('!%^&'));
        assert.isTrue(punct.validate('()[]{}'));
    });

    it('values is not valid', () => {
        assert.isFalse(punct.validate(''));
        assert.isFalse(punct.validate('16-50'));
        assert.isFalse(punct.validate('a'));
        assert.isFalse(punct.validate(' '));
        assert.isFalse(punct.validate('Foo'));
        assert.isFalse(punct.validate('12.1'));
        assert.isFalse(punct.validate('-12'));
        assert.isFalse(punct.validate(-12));
        assert.isFalse(punct.validate('( )_{}'));
        assert.isFalse(punct.validate(Boolean()));
        assert.isFalse(punct.validate(Number()));
        assert.isFalse(punct.validate(String()));
        assert.isFalse(punct.validate(null));
        assert.isFalse(punct.validate(undefined));
        assert.isFalse(punct.validate(true));
        assert.isFalse(punct.validate(false));
        assert.isFalse(punct.validate('true'));
        assert.isFalse(punct.validate('false'));
        assert.isFalse(punct.validate('-1.1'));
        assert.isFalse(punct.validate('1.1'));
        assert.isFalse(punct.validate('1'));
        assert.isFalse(punct.validate('-1'));
        assert.isFalse(punct.validate('0'));
        assert.isFalse(punct.validate(0));
        assert.isFalse(punct.validate(-0));
        assert.isFalse(punct.validate(1));
        assert.isFalse(punct.validate(-1));
        assert.isFalse(punct.validate(0.0));
        assert.isFalse(punct.validate(-0.0));
        assert.isFalse(punct.validate(1.0));
        assert.isFalse(punct.validate(-1.0));
        assert.isFalse(punct.validate(0.1));
        assert.isFalse(punct.validate(-0.1));
        assert.isFalse(punct.validate(1.1));
        assert.isFalse(punct.validate(-1.1));
        assert.isFalse(punct.validate([]));
        assert.isFalse(punct.validate({}));
        assert.isFalse(punct.validate(new Array('foo')));
        assert.isFalse(punct.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(punct.validate(new Foo()));
    });

});
