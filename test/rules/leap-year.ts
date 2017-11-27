import * as moment from 'moment';

import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { LeapYear } from '../../src/rules/leap-year';

describe('LeapYear', () => {

    let leapYear: LeapYear;

    beforeEach(() => {
        leapYear = new LeapYear();
    });

    it('is rule', () => {
        assert.instanceOf(leapYear, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(leapYear.validate('2008'));
        assert.isTrue(leapYear.validate(new Date(2008, 1, 29)));
        assert.isTrue(leapYear.validate('2008-02-29'));
        assert.isTrue(leapYear.validate(2008));
        assert.isTrue(leapYear.validate(moment([2008])));
    });

    it('valu is valid with format', () => {
        assert.isTrue(new LeapYear('DD-MM-YYYY').validate('29-02-2008'));
    });

    it('values is not valid', () => {
        assert.isFalse(leapYear.validate(''));
        assert.isFalse(leapYear.validate(new Date(2009, 1, 29)));
        assert.isFalse(leapYear.validate('2009'));
        assert.isFalse(leapYear.validate('2009-02-29'));
        assert.isFalse(leapYear.validate(2009));
        assert.isFalse(leapYear.validate([]));
        assert.isFalse(leapYear.validate({}));
        assert.isFalse(leapYear.validate(moment([2009])));
    });

    it('valu is not valid with format', () => {
        assert.isFalse(new LeapYear('DD-MM-YYYY').validate('2009-02-29'));
    });

});
