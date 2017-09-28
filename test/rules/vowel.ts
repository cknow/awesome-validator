import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Vowel } from '../../src/rules/vowel';

describe('Vowel', () => {

    let vowel: Vowel;

    beforeEach(() => {
        vowel = new Vowel();
    });

    it('is rule', () => {
        assert.instanceOf(vowel, AbstractRule);
    });

    it('values is valid with additional characters', () => {
        assert.isTrue(new Vowel('!@#$%^&*(){}').validate('!@#$%^&*(){} aeo iu'));
        assert.isTrue(new Vowel('[]?+=/\\-_|"\',<>.').validate("[]?+=/\\-_|\"',<>. \t \n aeo iu"));
        assert.isTrue(new Vowel('[]?+=/\\-_|"\',<>.').validate("[]?+=/\\-_|\"',<>."));
        assert.isTrue(new Vowel(undefined).validate('aeiou'));
    });

    it('values is valid', () => {
        assert.isTrue(vowel.validate('a'));
        assert.isTrue(vowel.validate('e'));
        assert.isTrue(vowel.validate('i'));
        assert.isTrue(vowel.validate('o'));
        assert.isTrue(vowel.validate('u'));
        assert.isTrue(vowel.validate('aeiou'));
        assert.isTrue(vowel.validate('aei ou'));
        assert.isTrue(vowel.validate('\na\t'));
        assert.isTrue(vowel.validate('uoiea'));
    });

    it('values is not valid', () => {
        assert.isFalse(vowel.validate(''));
        assert.isFalse(vowel.validate(null));
        assert.isFalse(vowel.validate(undefined));
        assert.isFalse(vowel.validate('16'));
        assert.isFalse(vowel.validate('F'));
        assert.isFalse(vowel.validate('g'));
        assert.isFalse(vowel.validate('Foo'));
        assert.isFalse(vowel.validate(-50));
        assert.isFalse(vowel.validate('basic'));
        assert.isFalse(vowel.validate(Boolean()));
        assert.isFalse(vowel.validate(Number()));
        assert.isFalse(vowel.validate(String()));
        assert.isFalse(vowel.validate(null));
        assert.isFalse(vowel.validate(undefined));
        assert.isFalse(vowel.validate(true));
        assert.isFalse(vowel.validate(false));
        assert.isFalse(vowel.validate('true'));
        assert.isFalse(vowel.validate('false'));
        assert.isFalse(vowel.validate('-1.1'));
        assert.isFalse(vowel.validate('1.1'));
        assert.isFalse(vowel.validate('1'));
        assert.isFalse(vowel.validate('-1'));
        assert.isFalse(vowel.validate('0'));
        assert.isFalse(vowel.validate(0));
        assert.isFalse(vowel.validate(-0));
        assert.isFalse(vowel.validate(1));
        assert.isFalse(vowel.validate(-1));
        assert.isFalse(vowel.validate(0.0));
        assert.isFalse(vowel.validate(-0.0));
        assert.isFalse(vowel.validate(1.0));
        assert.isFalse(vowel.validate(-1.0));
        assert.isFalse(vowel.validate(0.1));
        assert.isFalse(vowel.validate(-0.1));
        assert.isFalse(vowel.validate(1.1));
        assert.isFalse(vowel.validate(-1.1));
        assert.isFalse(vowel.validate([]));
        assert.isFalse(vowel.validate({}));
        assert.isFalse(vowel.validate(new Array('foo')));
        assert.isFalse(vowel.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(vowel.validate(new Foo()));
    });

});
