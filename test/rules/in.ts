import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { In } from '../../src/rules/in';

describe('In', () => {
    class Foo {
        /**
         * bar
         */
        public bar: string = 'foobar';
    }

    it('is rule', () => {
        assert.instanceOf(new In(), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new In('foobar').validate('foo'));
        assert.isTrue(new In('foobar').validate('FOO'));
        assert.isTrue(new In('fooBAR').validate('bar'));
        assert.isTrue(new In(String('foobar')).validate('foo'));
        assert.isTrue(new In([1, 2, 3]).validate(1));
        assert.isTrue(new In(new Array('foo', 'bar', 'foobar')).validate('foo'));
        assert.isTrue(new In(new Set([1, 2, 3])).validate(1));
        assert.isTrue(new In(new Set(['foo', 'bar', 'foobar'])).validate('foo'));
        assert.isTrue(new In(new Map().set(1, 'bar')).validate(1));
        assert.isTrue(new In(new Map().set('foo', 'bar')).validate('foo'));
        assert.isTrue(new In({foo: 'bar'}).validate('foo'));
        assert.isTrue(new In(Object({foo: 'bar'})).validate('foo'));
        assert.isTrue(new In('Foo', false).validate('foo'));
        assert.isTrue(new In('FOO', false, true).validate('FOO'));
        assert.isTrue(new In(null).validate(null));

        const foo: Foo = new Foo();
        assert.isTrue(new In(foo).validate(foo));
        assert.isTrue(new In(foo).validate('bar'));
    });

    it('values is not valid', () => {
        assert.isFalse(new In('foo').validate('bar'));
        assert.isFalse(new In(String('foo')).validate('bar'));
        assert.isFalse(new In([1, 2, 3]).validate(0));
        assert.isFalse(new In(new Array('foo', 'bar')).validate('foobar'));
        assert.isFalse(new In(new Set([1, 2, 3])).validate(0));
        assert.isFalse(new In(new Set(['foo', 'bar'])).validate('foobar'));
        assert.isFalse(new In(new Map().set(1, 'bar')).validate(0));
        assert.isFalse(new In(new Map().set('foo', 'bar')).validate('foobar'));
        assert.isFalse(new In({foo: 'bar'}).validate('bar'));
        assert.isFalse(new In(Object({foo: 'bar'})).validate('bar'));
        assert.isFalse(new In().validate(null));
        assert.isFalse(new In('foobar', false).validate('foo'));
        assert.isFalse(new In('FOO', false, true).validate('foo'));
        assert.isFalse(new In().validate(null));
        assert.isFalse(new In(new Foo()).validate(new Foo()));
        assert.isFalse(new In(new Foo()).validate('foobar'));
    });

});
