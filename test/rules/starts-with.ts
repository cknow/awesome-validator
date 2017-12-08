import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { StartsWith } from '../../src/rules/starts-with';

describe('StartsWith', () => {

    it('is rule', () => {
        assert.instanceOf(new StartsWith('foo'), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new StartsWith('foo').validate('Foo'));
        assert.isTrue(new StartsWith('foo', true).validate('foo'));
        assert.isTrue(new StartsWith('foo').validate('FOObarbaz'));
        assert.isTrue(new StartsWith('foo').validate('foobarbaz'));
        assert.isTrue(new StartsWith('foo').validate('foobazfoo'));
        assert.isTrue(new StartsWith('foo').validate(['foo', 'bar']));
        assert.isTrue(new StartsWith('1').validate([1, 2, 3]));
        assert.isTrue(new StartsWith('1', true).validate(['1', 2, 3]));
        assert.isTrue(new StartsWith(1, true).validate([1, 2, 3]));
    });

    it('values is not valid', () => {
        assert.isFalse(new StartsWith('foo').validate(''));
        assert.isFalse(new StartsWith('bat').validate(['foo', 'bar']));
        assert.isFalse(new StartsWith('foo').validate('barfaabaz'));
        assert.isFalse(new StartsWith('foo', true).validate('FOObarbaz'));
        assert.isFalse(new StartsWith('foo').validate('faabarbaz'));
        assert.isFalse(new StartsWith('foo').validate('baabazfaa'));
        assert.isFalse(new StartsWith('foo').validate('baafoofaa'));
        assert.isFalse(new StartsWith('1', true).validate([1, '1', 3]));
        assert.isFalse(new StartsWith(1, true).validate(['1', 2, 3]));
    });

});
