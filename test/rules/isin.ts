import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Isin } from '../../src/rules/isin';

describe('Isin', () => {

    let isin: Isin;

    beforeEach(() => {
        isin = new Isin();
    });

    it('is rule', () => {
        assert.instanceOf(isin, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(isin.validate('AU0000XVGZA3'));
        assert.isTrue(isin.validate('DE000BAY0017'));
        assert.isTrue(isin.validate('BE0003796134'));
        assert.isTrue(isin.validate('SG1G55870362'));
        assert.isTrue(isin.validate('GB0001411924'));
        assert.isTrue(isin.validate('DE000WCH8881'));
        assert.isTrue(isin.validate('PLLWBGD00016'));
    });

    it('values is not valid', () => {
        assert.isFalse(isin.validate('DE000BAY0018'));
        assert.isFalse(isin.validate('PLLWBGD00019'));
        assert.isFalse(isin.validate('foo'));
        assert.isFalse(isin.validate('5398228707871528'));
        assert.isFalse(isin.validate(null));
        assert.isFalse(isin.validate(undefined));
        assert.isFalse(isin.validate(true));
        assert.isFalse(isin.validate(false));
        assert.isFalse(isin.validate([]));
        assert.isFalse(isin.validate({}));
        assert.isFalse(isin.validate(new Array('foo')));
        assert.isFalse(isin.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(isin.validate(new Foo()));
    });

});
