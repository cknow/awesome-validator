import { assert } from 'chai';
import { format, subYears } from 'date-fns';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Age } from '../../src/rules/age';

describe('Age', () => {

    it('is rule', () => {
        assert.instanceOf(new Age(), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Age().validate('1969-07-20'));
        assert.isTrue(new Age(0).validate(new Date()));
        assert.isTrue(new Age(0, 0).validate(new Date()));
        assert.isTrue(new Age(18).validate('1969-07-20'));
        assert.isTrue(new Age(undefined, 50).validate(subYears(new Date(), 20)));
        assert.isTrue(new Age(undefined, undefined, 'DD/MM/YYYY').validate('20/07/1969'));
        assert.isTrue(new Age(10, 50).validate(subYears(new Date(), 20)));
        assert.isTrue(new Age(10, 50, 'DD/MM/YYYY').validate(format(subYears(new Date(), 20), 'DD/MM/YYYY')));
    });

    it('values is not valid', () => {
        assert.isFalse(new Age().validate(new Date()));
        assert.isFalse(new Age(undefined, 0).validate(new Date()));
        assert.isFalse(new Age(10).validate(subYears(new Date(), 5)));
        assert.isFalse(new Age(undefined, 10).validate(subYears(new Date(), 20)));
        assert.isFalse(new Age(undefined, undefined, 'DD/MM/YYYY').validate('1969-07-20'));
        assert.isFalse(new Age(10, 50).validate(subYears(new Date(), 5)));
        assert.isFalse(new Age(30, 50, 'DD/MM/YYYY').validate(format(subYears(new Date(), 20), 'DD/MM/YYYY')));
    });

});
