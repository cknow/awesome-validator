import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Roman } from '../../src/rules/roman';

describe('Roman', () => {

    let roman: Roman;

    beforeEach(() => {
        roman = new Roman();
    });

    it('is rule', () => {
        assert.instanceOf(roman, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(roman.validate(''));
        assert.isTrue(roman.validate('III'));
        assert.isTrue(roman.validate('IV'));
        assert.isTrue(roman.validate('VI'));
        assert.isTrue(roman.validate('XIX'));
        assert.isTrue(roman.validate('XLII'));
        assert.isTrue(roman.validate('LXII'));
        assert.isTrue(roman.validate('CXLIX'));
        assert.isTrue(roman.validate('CLIII'));
        assert.isTrue(roman.validate('MCCXXXIV'));
        assert.isTrue(roman.validate('MMXXIV'));
        assert.isTrue(roman.validate('MCMLXXV'));
        assert.isTrue(roman.validate('MMMMCMXCIX'));
    });

    it('values is not valid', () => {
        assert.isFalse(roman.validate(' '));
        assert.isFalse(roman.validate('IIII'));
        assert.isFalse(roman.validate('IVVVX'));
        assert.isFalse(roman.validate('CCDC'));
        assert.isFalse(roman.validate('MXM'));
        assert.isFalse(roman.validate('XIIIIIIII'));
        assert.isFalse(roman.validate('MIMIMI'));
        assert.isFalse(roman.validate(null));
        assert.isFalse(roman.validate(undefined));
        assert.isFalse(roman.validate(true));
        assert.isFalse(roman.validate(false));
    });

});
