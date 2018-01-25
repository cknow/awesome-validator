import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { SurrogatePair } from '../../src/rules/surrogate-pair';

describe('SurrogatePair', () => {

    let surrogatePair: SurrogatePair;

    beforeEach(() => {
        surrogatePair = new SurrogatePair();
    });

    it('is rule', () => {
        assert.instanceOf(surrogatePair, AbstractRule);
    });

    it('values is valid with additional characters', () => {
        assert.isTrue(new SurrogatePair('!@#$%^&*(){}').validate('!@#$%^&*(){} 𠮷野𠮷'));
        assert.isTrue(new SurrogatePair('[]?+=/\\-_|"\',<>.').validate('[]?+=/\\-_|"\',<>. \t \n 𩸽'));
        assert.isTrue(new SurrogatePair(undefined).validate('ABC千𥧄1-2-3'));
    });

    it('values is valid', () => {
        assert.isTrue(surrogatePair.validate('𠮷野𠮷'));
        assert.isTrue(surrogatePair.validate('𩸽'));
        assert.isTrue(surrogatePair.validate('ABC千𥧄1-2-3'));
    });

    it('values is not valid', () => {
        assert.isFalse(surrogatePair.validate('吉野竈'));
        assert.isFalse(surrogatePair.validate('鮪'));
        assert.isFalse(surrogatePair.validate('ABC1-2-3'));
        assert.isFalse(surrogatePair.validate(''));
        assert.isFalse(surrogatePair.validate(Boolean()));
        assert.isFalse(surrogatePair.validate(Number()));
        assert.isFalse(surrogatePair.validate(String()));
        assert.isFalse(surrogatePair.validate(null));
        assert.isFalse(surrogatePair.validate(undefined));
        assert.isFalse(surrogatePair.validate(true));
        assert.isFalse(surrogatePair.validate(false));
        assert.isFalse(surrogatePair.validate('true'));
        assert.isFalse(surrogatePair.validate('false'));
        assert.isFalse(surrogatePair.validate('-1.1'));
        assert.isFalse(surrogatePair.validate('1.1'));
        assert.isFalse(surrogatePair.validate('1'));
        assert.isFalse(surrogatePair.validate('-1'));
        assert.isFalse(surrogatePair.validate('0'));
        assert.isFalse(surrogatePair.validate(0));
        assert.isFalse(surrogatePair.validate(-0));
        assert.isFalse(surrogatePair.validate(1));
        assert.isFalse(surrogatePair.validate(-1));
        assert.isFalse(surrogatePair.validate(0.0));
        assert.isFalse(surrogatePair.validate(-0.0));
        assert.isFalse(surrogatePair.validate(1.0));
        assert.isFalse(surrogatePair.validate(-1.0));
        assert.isFalse(surrogatePair.validate(0.1));
        assert.isFalse(surrogatePair.validate(-0.1));
        assert.isFalse(surrogatePair.validate(1.1));
        assert.isFalse(surrogatePair.validate(-1.1));
        assert.isFalse(surrogatePair.validate([]));
        assert.isFalse(surrogatePair.validate({}));
        assert.isFalse(surrogatePair.validate(new Array('foo')));
        assert.isFalse(surrogatePair.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(surrogatePair.validate(new Foo()));
    });

});
