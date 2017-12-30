import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Luhn } from '../../src/rules/luhn';

describe('Luhn', () => {

    let luhn: Luhn;

    beforeEach(() => {
        luhn = new Luhn();
    });

    it('is rule', () => {
        assert.instanceOf(luhn, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(luhn.validate('2222400041240011'));
        assert.isTrue(luhn.validate('340316193809364'));
        assert.isTrue(luhn.validate('6011000990139424'));
        assert.isTrue(luhn.validate('2223000048400011'));
    });

    it('values is not valid', () => {
        assert.isFalse(luhn.validate('2222400041240021'));
        assert.isFalse(luhn.validate('340316193809334'));
        assert.isFalse(luhn.validate('6011000990139421'));
        assert.isFalse(luhn.validate('2223000048400010'));
        assert.isFalse(luhn.validate(null));
        assert.isFalse(luhn.validate(undefined));
        assert.isFalse(luhn.validate(true));
        assert.isFalse(luhn.validate(false));
        assert.isFalse(luhn.validate('foo'));
        assert.isFalse(luhn.validate(' '));
    });

});
