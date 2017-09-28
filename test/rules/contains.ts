import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Contains } from '../../src/rules/contains';

describe('Contains', () => {

    it('is rule', () => {
        assert.instanceOf(new Contains(), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Contains('foo').validate('foobar'));
        assert.isTrue(new Contains('foo').validate(String('foobar')));
        assert.isTrue(new Contains(1).validate([1, 2, 3]));
        assert.isTrue(new Contains('foo').validate(new Array('foo', 'bar', 'foobar')));
        assert.isTrue(new Contains(1).validate(new Set([1, 2, 3])));
        assert.isTrue(new Contains('foo').validate(new Set(['foo', 'bar', 'foobar'])));
        assert.isTrue(new Contains(1).validate(new Map().set(1, 'bar')));
        assert.isTrue(new Contains('foo').validate(new Map().set('foo', 'bar')));
        assert.isTrue(new Contains('foo').validate({foo: 'bar'}));
        assert.isTrue(new Contains('foo').validate(Object({foo: 'bar'})));
    });

    it('values is not valid', () => {
        assert.isFalse(new Contains('bar').validate('foo'));
        assert.isFalse(new Contains(String('bar')).validate('foo'));
        assert.isFalse(new Contains(0).validate([1, 2, 3]));
        assert.isFalse(new Contains('foobar').validate(new Array('foo', 'bar')));
        assert.isFalse(new Contains(0).validate(new Set([1, 2, 3])));
        assert.isFalse(new Contains('foobar').validate(new Set(['foo', 'bar'])));
        assert.isFalse(new Contains(0).validate(new Map().set(1, 'bar')));
        assert.isFalse(new Contains('foobar').validate(new Map().set('foo', 'bar')));
        assert.isFalse(new Contains('bar').validate({foo: 'bar'}));
        assert.isFalse(new Contains('bar').validate(Object({foo: 'bar'})));
        assert.isFalse(new Contains().validate(null));
    });

});
