import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Bsn } from '../../src/rules/bsn';

describe('Bsn', () => {

    let bsn: Bsn;

    beforeEach(() => {
        bsn = new Bsn();
    });

    it('is rule', () => {
        assert.instanceOf(bsn, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(bsn.validate('612890053'));
        assert.isTrue(bsn.validate('087880532'));
        assert.isTrue(bsn.validate('386625918'));
        assert.isTrue(bsn.validate('601608021'));
        assert.isTrue(bsn.validate('254650703'));
        assert.isTrue(bsn.validate('478063441'));
        assert.isTrue(bsn.validate('478063441'));
        assert.isTrue(bsn.validate('187368429'));
        assert.isTrue(bsn.validate('541777348'));
        assert.isTrue(bsn.validate('254283883'));
    });

    it('values is not valid', () => {
        assert.isFalse(bsn.validate('1234567890'));
        assert.isFalse(bsn.validate('0987654321'));
        assert.isFalse(bsn.validate('13579024'));
        assert.isFalse(bsn.validate('612890054'));
        assert.isFalse(bsn.validate('854650703'));
        assert.isFalse(bsn.validate('283958721'));
        assert.isFalse(bsn.validate('231859081'));
        assert.isFalse(bsn.validate('189023323'));
        assert.isFalse(bsn.validate('238150912'));
        assert.isFalse(bsn.validate('382409678'));
        assert.isFalse(bsn.validate('38240.678'));
        assert.isFalse(bsn.validate('38240a678'));
        assert.isFalse(bsn.validate('abcdefghi'));
        assert.isFalse(bsn.validate(null));
        assert.isFalse(bsn.validate(undefined));
        assert.isFalse(bsn.validate([]));
        assert.isFalse(bsn.validate({}));
        assert.isFalse(bsn.validate(new Array('foo')));
        assert.isFalse(bsn.validate(new Object({foo: 'bar'})));
        assert.isFalse(bsn.validate(true));
        assert.isFalse(bsn.validate(false));
        assert.isFalse(bsn.validate(1));
        assert.isFalse(bsn.validate(''));
        assert.isFalse(bsn.validate('foo'));
    });

});
