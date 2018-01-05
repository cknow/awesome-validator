import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Iterable } from '../../src/rules/iterable';

describe('Iterable', () => {

    let iterable: Iterable;

    beforeEach(() => {
        iterable = new Iterable();
    });

    it('is rule', () => {
        assert.instanceOf(iterable, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(iterable.validate([]));
        assert.isTrue(iterable.validate(new Array()));
        assert.isTrue(iterable.validate(Array()));
        assert.isTrue(iterable.validate([1, 2, 3]));
        assert.isTrue(iterable.validate(new Array(1, 2, 3)));
        assert.isTrue(iterable.validate(Array(1, 2, 3)));
        assert.isTrue(iterable.validate(['foo', 'bar', 'foobaz']));
        assert.isTrue(iterable.validate(new Array('foo', 'bar', 'foobaz')));
        assert.isTrue(iterable.validate(Array('foo', 'bar', 'foobaz')));
        assert.isTrue(iterable.validate(new Set([1, 2, 3])));
        assert.isTrue(iterable.validate(new Set(['foo', 'bar', 'foobar'])));
        assert.isTrue(iterable.validate(new Map().set(1, 'bar')));
        assert.isTrue(iterable.validate(new Map().set('foo', 'bar')));
        assert.isTrue(iterable.validate({}));
        assert.isTrue(iterable.validate({foo: 'bar'}));
        assert.isTrue(iterable.validate(new Object()));
        assert.isTrue(iterable.validate(new Object({foo: 'bar'})));
        assert.isTrue(iterable.validate(String()));
        assert.isTrue(iterable.validate(''));
        assert.isTrue(iterable.validate('0'));
        assert.isTrue(iterable.validate(' '));
        assert.isTrue(iterable.validate('   '));
        assert.isTrue(iterable.validate('foo'));
        assert.isTrue(iterable.validate(String('fooBar')));
    });

    it('values is not valid', () => {
        assert.isFalse(iterable.validate(Object.create(null)));
        assert.isFalse(iterable.validate(Boolean()));
        assert.isFalse(iterable.validate(Number()));
        assert.isFalse(iterable.validate(null));
        assert.isFalse(iterable.validate(undefined));
        assert.isFalse(iterable.validate(true));
        assert.isFalse(iterable.validate(false));
        assert.isFalse(iterable.validate(0));
        assert.isFalse(iterable.validate(0.0));
        assert.isFalse(iterable.validate(-0.0));
        assert.isFalse(iterable.validate(Boolean(true)));
        assert.isFalse(iterable.validate(Number(1)));
        assert.isFalse(iterable.validate(1));
        assert.isFalse(iterable.validate(-1));
        assert.isFalse(iterable.validate(1.0));
        assert.isFalse(iterable.validate(-1.0));
        assert.isFalse(iterable.validate(1));
        assert.isFalse(iterable.validate(1.0));
        assert.isFalse(iterable.validate(1.1));

        class Foo {}
        assert.isFalse(iterable.validate(new Foo()));
    });

});
