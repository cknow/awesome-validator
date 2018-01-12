import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Callback } from '../../src/rules/callback';

describe('Callback', () => {

    const obj: any = {
        /**
         * Foo.
         */
        foo(input: any): boolean {
            return input === 'foo';
        }
    };

    it('is rule', () => {
        assert.instanceOf(new Callback((): boolean => true), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Callback((input: any, arg: any): boolean => input === arg, null).validate(null));
        assert.isTrue(new Callback((): boolean => true).validate(null));
        assert.isTrue(new Callback((input: any): boolean => input === 'foo').validate('foo'));
        assert.isTrue(new Callback('Array.isArray').validate([]));
        assert.isTrue(new Callback([obj, 'foo']).validate('foo'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Callback((input: any, arg: any): boolean => input === arg, null).validate(undefined));
        assert.isFalse(new Callback((): boolean => false).validate(null));
        assert.isFalse(new Callback((input: any): boolean => input === 'foo').validate('bar'));
        assert.isFalse(new Callback('Array.isArray').validate({}));
        assert.isFalse(new Callback([obj, 'foo']).validate('bar'));
        assert.isFalse(new Callback('').validate(null));
        assert.isFalse(new Callback('foo').validate(null));
        assert.isFalse(new Callback(0).validate(null));
        assert.isFalse(new Callback(null).validate(null));
        assert.isFalse(new Callback(undefined).validate(null));
        assert.isFalse(new Callback([]).validate(null));
        assert.isFalse(new Callback({}).validate(null));
    });

});
