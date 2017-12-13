import * as moment from 'moment';

import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { DateTime } from '../../src/rules/date-time';

describe('DateTime', () => {

    let dateTime: DateTime;

    beforeEach(() => {
        dateTime = new DateTime();
    });

    it('is rule', () => {
        assert.instanceOf(dateTime, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(dateTime.validate(1318781876.721));
        assert.isTrue(dateTime.validate(true));
        assert.isTrue(dateTime.validate(false));
        assert.isTrue(dateTime.validate('2008'));
        assert.isTrue(dateTime.validate(new Date(2008, 1, 29)));
        assert.isTrue(dateTime.validate('2008-02-29'));
        assert.isTrue(dateTime.validate(2008));
        assert.isTrue(dateTime.validate(moment([2008])));
        assert.isTrue(dateTime.validate([]));
        assert.isTrue(dateTime.validate({}));
    });

    it('values is valid with format', () => {
        assert.isTrue(new DateTime('DD-MM-YYYY').validate('29-02-2008'));
        assert.isTrue(new DateTime('DD/MM/YYYY HH:mm:ss').validate('20/10/2008 10:30:29'));
    });

    it('values is not valid', () => {
        assert.isFalse(dateTime.validate(''));
        assert.isFalse(dateTime.validate('2009-12-00'));
    });

    it('values is not valid with format', () => {
        assert.isFalse(new DateTime('DD/MM/YYYY').validate('2008-02-29'));
    });

});
