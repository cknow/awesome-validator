import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Alnum } from '../../src/rules/alnum';

describe('Alnum', () => {

    let alnum: Alnum;

    beforeEach(() => {
        alnum = new Alnum();
    });

    it('is rule', () => {
        assert.instanceOf(alnum, AbstractRule);
    });

    it('values is valid with additional characters', () => {
        assert.isTrue(new Alnum('!@#$%^&*(){}').validate('!@#$%^&*(){} abc 123'));
        assert.isTrue(new Alnum('[]?+=/\\-_|"\',<>.').validate('[]?+=/\\-_|"\',<>. \t \n abc 123'));
        assert.isTrue(new Alnum(undefined).validate('abc 123'));
    });

    it('values is valid', () => {
        assert.isTrue(alnum.validate('alganet'));
        assert.isTrue(alnum.validate('a'));
        assert.isTrue(alnum.validate('1'));
        assert.isTrue(alnum.validate('\t'));
        assert.isTrue(alnum.validate('\n'));
        assert.isTrue(alnum.validate('foobar'));
        assert.isTrue(alnum.validate('Foo'));
        assert.isTrue(alnum.validate('alganet alganet'));
        assert.isTrue(alnum.validate('\nabc'));
        assert.isTrue(alnum.validate('\tdef'));
        assert.isTrue(alnum.validate('\nabc \t'));
        assert.isTrue(alnum.validate(0));
    });

    it('values is not valid', () => {
        assert.isFalse(alnum.validate(''));
        assert.isFalse(alnum.validate('16-50'));
        assert.isFalse(alnum.validate('@#$'));
        assert.isFalse(alnum.validate('_'));
        assert.isFalse(alnum.validate('dgç'));
        assert.isFalse(alnum.validate('12.1'));
        assert.isFalse(alnum.validate('-12'));
        assert.isFalse(alnum.validate(-50));
        assert.isFalse(alnum.validate(String()));
        assert.isFalse(alnum.validate(null));
        assert.isFalse(alnum.validate(undefined));
        assert.isFalse(alnum.validate('-1.1'));
        assert.isFalse(alnum.validate('1.1'));
        assert.isFalse(alnum.validate('-1'));
        assert.isFalse(alnum.validate(-1));
        assert.isFalse(alnum.validate(-1.0));
        assert.isFalse(alnum.validate(0.1));
        assert.isFalse(alnum.validate(-0.1));
        assert.isFalse(alnum.validate(1.1));
        assert.isFalse(alnum.validate(-1.1));
        assert.isFalse(alnum.validate([]));
        assert.isFalse(alnum.validate({}));
        assert.isFalse(alnum.validate(new Array('foo')));
        assert.isFalse(alnum.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(alnum.validate(new Foo()));
    });

});
