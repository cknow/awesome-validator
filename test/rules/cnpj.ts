import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Cnpj } from '../../src/rules/cnpj';

describe('Cnpj', () => {

    let cnpj: Cnpj;

    beforeEach(() => {
        cnpj = new Cnpj();
    });

    it('is rule', () => {
        assert.instanceOf(cnpj, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(cnpj.validate('32.063.364/0001-07'));
        assert.isTrue(cnpj.validate('24.663.454/0001-00'));
        assert.isTrue(cnpj.validate('57.535.083/0001-30'));
        assert.isTrue(cnpj.validate('24.760.428/0001-09'));
        assert.isTrue(cnpj.validate('27.355.204/0001-00'));
        assert.isTrue(cnpj.validate('36.310.327/0001-07'));
        assert.isTrue(cnpj.validate('38175021000110'));
        assert.isTrue(cnpj.validate('37550610000179'));
        assert.isTrue(cnpj.validate('12774546000189'));
        assert.isTrue(cnpj.validate('77456211000168'));
        assert.isTrue(cnpj.validate('02023077000102'));
    });

    it('values is not valid', () => {
        assert.isFalse(cnpj.validate('12.345.678/9012-34'));
        assert.isFalse(cnpj.validate('11.111.111/1111-11'));
        assert.isFalse(cnpj.validate('00000000000000'));
        assert.isFalse(cnpj.validate('11111111111111'));
        assert.isFalse(cnpj.validate('22222222222222'));
        assert.isFalse(cnpj.validate('33333333333333'));
        assert.isFalse(cnpj.validate('44444444444444'));
        assert.isFalse(cnpj.validate('55555555555555'));
        assert.isFalse(cnpj.validate('66666666666666'));
        assert.isFalse(cnpj.validate('77777777777777'));
        assert.isFalse(cnpj.validate('88888888888888'));
        assert.isFalse(cnpj.validate('99999999999999'));
        assert.isFalse(cnpj.validate('12345678900123'));
        assert.isFalse(cnpj.validate('99299929384987'));
        assert.isFalse(cnpj.validate('84434895894444'));
        assert.isFalse(cnpj.validate('44242340000000'));
        assert.isFalse(cnpj.validate('1'));
        assert.isFalse(cnpj.validate('22'));
        assert.isFalse(cnpj.validate('123'));
        assert.isFalse(cnpj.validate('992999999999929384'));
        assert.isFalse(cnpj.validate('99-010-0.'));
        assert.isFalse(cnpj.validate(null));
        assert.isFalse(cnpj.validate(undefined));
        assert.isFalse(cnpj.validate([]));
        assert.isFalse(cnpj.validate({}));
        assert.isFalse(cnpj.validate(new Array('foo')));
        assert.isFalse(cnpj.validate(new Object({foo: 'bar'})));
        assert.isFalse(cnpj.validate(true));
        assert.isFalse(cnpj.validate(false));
        assert.isFalse(cnpj.validate(1));
        assert.isFalse(cnpj.validate(''));
        assert.isFalse(cnpj.validate('foo'));
    });

});
