import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { EndsWith } from '../../src/rules/ends-with';

describe('EndsWith', () => {

    it('is rule', () => {
        assert.instanceOf(new EndsWith('foo'), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new EndsWith('foo').validate('Foo'));
        assert.isTrue(new EndsWith('foo', true).validate('foo'));
        assert.isTrue(new EndsWith('foo').validate('barbazFOO'));
        assert.isTrue(new EndsWith('foo').validate('barbazfoo'));
        assert.isTrue(new EndsWith('foo').validate('foobazfoo'));
        assert.isTrue(new EndsWith('foo').validate(['bar', 'foo']));
        assert.isTrue(new EndsWith('1').validate([3, 2, 1]));
        assert.isTrue(new EndsWith('1', true).validate([3 , 2, '1']));
        assert.isTrue(new EndsWith(1, true).validate([3, 2, 1]));
    });

    it('values is not valid', () => {
        assert.isFalse(new EndsWith('foo').validate(''));
        assert.isFalse(new EndsWith('bat').validate(['foo', 'bar']));
        assert.isFalse(new EndsWith('foo').validate('barfaabaz'));
        assert.isFalse(new EndsWith('foo', true).validate('FOObarbaz'));
        assert.isFalse(new EndsWith('foo').validate('faabarbaz'));
        assert.isFalse(new EndsWith('foo').validate('baabazfaa'));
        assert.isFalse(new EndsWith('foo').validate('baafoofaa'));
        assert.isFalse(new EndsWith('1', true).validate([3, 2, 1]));
        assert.isFalse(new EndsWith(1, true).validate([3, 2, '1']));
    });

});
