import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Pis } from '../../src/rules/pis';

describe('Pis', () => {

    let pis: Pis;

    beforeEach(() => {
        pis = new Pis();
    });

    it('is rule', () => {
        assert.instanceOf(pis, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(pis.validate('120.4454.683-5'));
        assert.isTrue(pis.validate('120.8995.084-8'));
        assert.isTrue(pis.validate('120.5146.8577'));
        assert.isTrue(pis.validate('120.01842459'));
        assert.isTrue(pis.validate('1.2.0.7.9.8.1.6.7.8.2'));
        assert.isTrue(pis.validate('12044546835'));
        assert.isTrue(pis.validate('12089950848'));
        assert.isTrue(pis.validate('12051468577'));
        assert.isTrue(pis.validate('12001842459'));
        assert.isTrue(pis.validate('12079816782'));
        assert.isTrue(pis.validate(12079816782));
    });

    it('values is not valid', () => {
        assert.isFalse(pis.validate('000.0000.000-0'));
        assert.isFalse(pis.validate('111.2222.444-5'));
        assert.isFalse(pis.validate('999999999.99'));
        assert.isFalse(pis.validate('8.8.8.8.8.8.8.8.8.8.8'));
        assert.isFalse(pis.validate('693-3129-110-1'));
        assert.isFalse(pis.validate('698.1131-111.2'));
        assert.isFalse(pis.validate('11111111111'));
        assert.isFalse(pis.validate('22222222222'));
        assert.isFalse(pis.validate('12345678901'));
        assert.isFalse(pis.validate('99299929384'));
        assert.isFalse(pis.validate('84434895894'));
        assert.isFalse(pis.validate('44242340002'));
        assert.isFalse(pis.validate('1'));
        assert.isFalse(pis.validate('22'));
        assert.isFalse(pis.validate('123'));
        assert.isFalse(pis.validate('992999999999929384'));

        assert.isFalse(pis.validate(null));
        assert.isFalse(pis.validate(undefined));
        assert.isFalse(pis.validate([]));
        assert.isFalse(pis.validate({}));
        assert.isFalse(pis.validate(new Array('foo')));
        assert.isFalse(pis.validate(new Object({foo: 'bar'})));
        assert.isFalse(pis.validate(true));
        assert.isFalse(pis.validate(false));
        assert.isFalse(pis.validate(1));
        assert.isFalse(pis.validate(''));
        assert.isFalse(pis.validate('foo'));
    });

});
