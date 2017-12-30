import * as moment from 'moment';

import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { LeapDate } from '../../src/rules/leap-date';

describe('LeapDate', () => {

    let leapDate: LeapDate;

    beforeEach(() => {
        leapDate = new LeapDate();
    });

    it('is rule', () => {
        assert.instanceOf(leapDate, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(leapDate.validate(new Date(2008, 1, 29)));
        assert.isTrue(leapDate.validate('2008-02-29'));
        assert.isTrue(leapDate.validate(moment([2008, 1, 29])));
    });

    it('values is valid with format', () => {
        assert.isTrue(new LeapDate('DD-MM-YYYY').validate('29-02-2008'));
    });

    it('values is not valid', () => {
        assert.isFalse(leapDate.validate(''));
        assert.isFalse(leapDate.validate(new Date(2009, 1, 29)));
        assert.isFalse(leapDate.validate('2009'));
        assert.isFalse(leapDate.validate('2009-02-29'));
        assert.isFalse(leapDate.validate(2009));
        assert.isFalse(leapDate.validate(null));
        assert.isFalse(leapDate.validate(undefined));
        assert.isFalse(leapDate.validate(true));
        assert.isFalse(leapDate.validate(false));
        assert.isFalse(leapDate.validate([]));
        assert.isFalse(leapDate.validate({}));
        assert.isFalse(leapDate.validate(moment([2009])));
    });

    it('values is not valid with format', () => {
        assert.isFalse(new LeapDate('DD-MM-YYYY').validate('2009-02-29'));
    });

});
