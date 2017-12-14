import * as moment from 'moment';

import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Age } from '../../src/rules/age';

describe('Age', () => {

    it('is rule', () => {
        assert.instanceOf(new Age(), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Age().validate('1969-07-20'));
        assert.isTrue(new Age(0).validate(moment()));
        assert.isTrue(new Age(0, 0).validate(moment()));
        assert.isTrue(new Age(18).validate('1969-07-20'));
        assert.isTrue(new Age(undefined, 50).validate(moment().subtract(20, 'years')));
        assert.isTrue(new Age(undefined, undefined, 'DD/MM/YYYY').validate('20/07/1969'));
        assert.isTrue(new Age(10, 50).validate(moment().subtract(20, 'years')));
        assert.isTrue(new Age(10, 50, 'DD/MM/YYYY').validate(moment().subtract(20, 'years').format('DD/MM/YYYY')));
    });

    it('values is not valid', () => {
        assert.isFalse(new Age().validate(moment()));
        assert.isFalse(new Age(undefined, 0).validate(moment()));
        assert.isFalse(new Age(10).validate(moment().subtract(5, 'years')));
        assert.isFalse(new Age(undefined, 10).validate(moment().subtract(20, 'years')));
        assert.isFalse(new Age(undefined, undefined, 'DD/MM/YYYY').validate('1969-07-20'));
        assert.isFalse(new Age(10, 50).validate(moment().subtract(5, 'years')));
        assert.isFalse(new Age(30, 50, 'DD/MM/YYYY').validate(moment().subtract(20, 'years').format('DD/MM/YYYY')));
    });

});
