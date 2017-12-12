import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Min } from '../../src/rules/min';

describe('Min', () => {

    it('is rule', () => {
        assert.instanceOf(new Min(100), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Min().validate(0));
        assert.isTrue(new Min(null).validate(0));
        assert.isTrue(new Min(undefined).validate(0));
        assert.isTrue(new Min(100).validate(100));
        assert.isTrue(new Min(99, false).validate(100));
        assert.isTrue(new Min('a').validate('a'));
        assert.isTrue(new Min('a', false).validate('b'));
        assert.isTrue(new Min('ab').validate('ab'));
        assert.isTrue(new Min('ab', false).validate('ac'));
        assert.isTrue(new Min([2008]).validate([2008]));
        assert.isTrue(new Min([2007], false).validate([2008]));
        assert.isTrue(new Min('2010-01-01').validate('2010-01-01'));
        assert.isTrue(new Min('2009-01-01', false).validate('2010-01-01'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Min(200).validate(100));
        assert.isFalse(new Min(100, false).validate(100));
        assert.isFalse(new Min('b').validate('a'));
        assert.isFalse(new Min('b', false).validate('b'));
        assert.isFalse(new Min('ac').validate('ab'));
        assert.isFalse(new Min('ab', false).validate('ab'));
        assert.isFalse(new Min([2009]).validate([2008]));
        assert.isFalse(new Min([2008], false).validate([2008]));
        assert.isFalse(new Min('2011-01-01').validate('2010-01-01'));
        assert.isFalse(new Min('2010-01-01', false).validate('2010-01-01'));
    });

});
