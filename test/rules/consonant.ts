import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Consonant } from '../../src/rules/consonant';

describe('Consonant', () => {

    let consonant: Consonant;

    beforeEach(() => {
        consonant = new Consonant();
    });

    it('is rule', () => {
        assert.instanceOf(consonant, AbstractRule);
    });

    it('values is valid with additional characters', () => {
        assert.isTrue(new Consonant('!@#$%^&*(){}').validate('!@#$%^&*(){} bc dfg'));
        assert.isTrue(new Consonant('[]?+=/\\-_|"\',<>.').validate("[]?+=/\\-_|\"',<>. \t \n bc dfg"));
        assert.isTrue(new Consonant(undefined).validate('bc dfg'));
    });

    it('values is valid', () => {
        assert.isTrue(consonant.validate('b'));
        assert.isTrue(consonant.validate('c'));
        assert.isTrue(consonant.validate('d'));
        assert.isTrue(consonant.validate('w'));
        assert.isTrue(consonant.validate('y'));
        assert.isTrue(consonant.validate('bcdfghklmnp'));
        assert.isTrue(consonant.validate('bcdfghklm np'));
        assert.isTrue(consonant.validate('qrst'));
        assert.isTrue(consonant.validate('\nz\t'));
    });

    it('values is not valid', () => {
        assert.isFalse(consonant.validate(''));
        assert.isFalse(consonant.validate('16'));
        assert.isFalse(consonant.validate('a'));
        assert.isFalse(consonant.validate('e'));
        assert.isFalse(consonant.validate('i'));
        assert.isFalse(consonant.validate('o'));
        assert.isFalse(consonant.validate('u'));
        assert.isFalse(consonant.validate('aeiou'));
        assert.isFalse(consonant.validate('aei ou'));
        assert.isFalse(consonant.validate('Foo'));
        assert.isFalse(consonant.validate(-50));
        assert.isFalse(consonant.validate('basic'));
        assert.isFalse(consonant.validate(Boolean()));
        assert.isFalse(consonant.validate(Number()));
        assert.isFalse(consonant.validate(String()));
        assert.isFalse(consonant.validate(null));
        assert.isFalse(consonant.validate(undefined));
        assert.isFalse(consonant.validate(true));
        assert.isFalse(consonant.validate(false));
        assert.isFalse(consonant.validate('true'));
        assert.isFalse(consonant.validate('false'));
        assert.isFalse(consonant.validate('-1.1'));
        assert.isFalse(consonant.validate('1.1'));
        assert.isFalse(consonant.validate('1'));
        assert.isFalse(consonant.validate('-1'));
        assert.isFalse(consonant.validate('0'));
        assert.isFalse(consonant.validate(0));
        assert.isFalse(consonant.validate(-0));
        assert.isFalse(consonant.validate(1));
        assert.isFalse(consonant.validate(-1));
        assert.isFalse(consonant.validate(0.0));
        assert.isFalse(consonant.validate(-0.0));
        assert.isFalse(consonant.validate(1.0));
        assert.isFalse(consonant.validate(-1.0));
        assert.isFalse(consonant.validate(0.1));
        assert.isFalse(consonant.validate(-0.1));
        assert.isFalse(consonant.validate(1.1));
        assert.isFalse(consonant.validate(-1.1));
        assert.isFalse(consonant.validate([]));
        assert.isFalse(consonant.validate({}));
        assert.isFalse(consonant.validate(new Array('foo')));
        assert.isFalse(consonant.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(consonant.validate(new Foo()));
    });

});
