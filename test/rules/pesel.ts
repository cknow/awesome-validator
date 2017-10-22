import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Pesel } from '../../src/rules/pesel';

describe('Pesel', () => {

    let pesel: Pesel;

    beforeEach(() => {
        pesel = new Pesel();
    });

    it('is rule', () => {
        assert.instanceOf(pesel, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(pesel.validate(0x4EADCD168));
        assert.isTrue(pesel.validate(49040501580));
        assert.isTrue(pesel.validate('49040501580'));
        assert.isTrue(pesel.validate('39012110375'));
        assert.isTrue(pesel.validate('50083014540'));
        assert.isTrue(pesel.validate('69090515504'));
        assert.isTrue(pesel.validate('21120209256'));
        assert.isTrue(pesel.validate('01320613891'));
    });

    it('values is not valid', () => {
        assert.isFalse(pesel.validate('1'));
        assert.isFalse(pesel.validate('22'));
        assert.isFalse(pesel.validate('PESEL'));
        assert.isFalse(pesel.validate('0x4EADCD168'));
        assert.isFalse(pesel.validate('PESEL123456'));
        assert.isFalse(pesel.validate('690905155.4'));
        assert.isFalse(pesel.validate('21120209251'));
        assert.isFalse(pesel.validate('21120209250'));
        assert.isFalse(pesel.validate('01320613890'));
    });

});
