import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Max } from '../../src/rules/max';

describe('Max', () => {

    it('is rule', () => {
        assert.instanceOf(new Max(100), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Max().validate(0));
        assert.isTrue(new Max(null).validate(0));
        assert.isTrue(new Max(undefined).validate(0));
        assert.isTrue(new Max(100).validate(100));
        assert.isTrue(new Max(100, false).validate(99));
        assert.isTrue(new Max('a').validate('a'));
        assert.isTrue(new Max('b', false).validate('a'));
        assert.isTrue(new Max('ab').validate('ab'));
        assert.isTrue(new Max('ac', false).validate('ab'));
        assert.isTrue(new Max([2008]).validate([2008]));
        assert.isTrue(new Max([2008], false).validate([2007]));
        assert.isTrue(new Max('2010-01-01').validate('2010-01-01'));
        assert.isTrue(new Max('2010-01-01', false).validate('2009-01-01'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Max(100).validate(200));
        assert.isFalse(new Max(100, false).validate(100));
        assert.isFalse(new Max('a').validate('b'));
        assert.isFalse(new Max('b', false).validate('b'));
        assert.isFalse(new Max('ab').validate('ac'));
        assert.isFalse(new Max('ab', false).validate('ab'));
        assert.isFalse(new Max([2008]).validate([2009]));
        assert.isFalse(new Max([2008], false).validate([2008]));
        assert.isFalse(new Max('2010-01-01').validate('2011-01-01'));
        assert.isFalse(new Max('2010-01-01', false).validate('2010-01-01'));
    });

});
