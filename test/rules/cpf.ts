import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Cpf } from '../../src/rules/cpf';

describe('Cpf', () => {

    let cpf: Cpf;

    beforeEach(() => {
        cpf = new Cpf();
    });

    it('is rule', () => {
        assert.instanceOf(cpf, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(cpf.validate('342.444.198-88'));
        assert.isTrue(cpf.validate('342.444.198.88'));
        assert.isTrue(cpf.validate('350.45261819'));
        assert.isTrue(cpf.validate('693-319-118-40'));
        assert.isTrue(cpf.validate('3.6.8.8.9.2.5.5.4.8.8'));
        assert.isTrue(cpf.validate('11598647644'));
        assert.isTrue(cpf.validate('86734718697'));
        assert.isTrue(cpf.validate('86223423284'));
        assert.isTrue(cpf.validate('24845408333'));
        assert.isTrue(cpf.validate('95574461102'));
    });

    it('values is not valid', () => {
        assert.isFalse(cpf.validate('000.000.000-00'));
        assert.isFalse(cpf.validate('111.222.444-05'));
        assert.isFalse(cpf.validate('999999999.99'));
        assert.isFalse(cpf.validate('8.8.8.8.8.8.8.8.8.8.8'));
        assert.isFalse(cpf.validate('693-319-110-40'));
        assert.isFalse(cpf.validate('698.111-111.00'));
        assert.isFalse(cpf.validate('11111111111'));
        assert.isFalse(cpf.validate('22222222222'));
        assert.isFalse(cpf.validate('12345678900'));
        assert.isFalse(cpf.validate('99299929384'));
        assert.isFalse(cpf.validate('84434895894'));
        assert.isFalse(cpf.validate('44242340000'));
        assert.isFalse(cpf.validate('1'));
        assert.isFalse(cpf.validate('22'));
        assert.isFalse(cpf.validate('123'));
        assert.isFalse(cpf.validate('992999999999929384'));
        assert.isFalse(cpf.validate(null));
        assert.isFalse(cpf.validate(undefined));
        assert.isFalse(cpf.validate([]));
        assert.isFalse(cpf.validate({}));
        assert.isFalse(cpf.validate(new Array('foo')));
        assert.isFalse(cpf.validate(new Object({foo: 'bar'})));
        assert.isFalse(cpf.validate(true));
        assert.isFalse(cpf.validate(false));
        assert.isFalse(cpf.validate(1));
        assert.isFalse(cpf.validate(''));
        assert.isFalse(cpf.validate('foo'));
    });

});
