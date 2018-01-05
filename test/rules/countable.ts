import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Countable } from '../../src/rules/countable';

describe('Countable', () => {

    let countable: Countable;

    beforeEach(() => {
        countable = new Countable();
    });

    it('is rule', () => {
        assert.instanceOf(countable, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(countable.validate([]));
        assert.isTrue(countable.validate(new Array()));
        assert.isTrue(countable.validate(Array()));
        assert.isTrue(countable.validate([1, 2, 3]));
        assert.isTrue(countable.validate(new Array(1, 2, 3)));
        assert.isTrue(countable.validate(Array(1, 2, 3)));
        assert.isTrue(countable.validate(['foo', 'bar', 'foobaz']));
        assert.isTrue(countable.validate(new Array('foo', 'bar', 'foobaz')));
        assert.isTrue(countable.validate(Array('foo', 'bar', 'foobaz')));
        assert.isTrue(countable.validate(new Set([1, 2, 3])));
        assert.isTrue(countable.validate(new Set(['foo', 'bar', 'foobar'])));
        assert.isTrue(countable.validate(new Map().set(1, 'bar')));
        assert.isTrue(countable.validate(new Map().set('foo', 'bar')));
        assert.isTrue(countable.validate({count: (): number => 1}));
    });

    it('values is not valid', () => {
        assert.isFalse(countable.validate(String()));
        assert.isFalse(countable.validate(''));
        assert.isFalse(countable.validate('0'));
        assert.isFalse(countable.validate(' '));
        assert.isFalse(countable.validate('   '));
        assert.isFalse(countable.validate('foo'));
        assert.isFalse(countable.validate(String('fooBar')));
        assert.isFalse(countable.validate(Boolean()));
        assert.isFalse(countable.validate(Number()));
        assert.isFalse(countable.validate(null));
        assert.isFalse(countable.validate(undefined));
        assert.isFalse(countable.validate(true));
        assert.isFalse(countable.validate(false));
        assert.isFalse(countable.validate(0));
        assert.isFalse(countable.validate(0.0));
        assert.isFalse(countable.validate(-0.0));
        assert.isFalse(countable.validate({}));
        assert.isFalse(countable.validate(new Object()));
        assert.isFalse(countable.validate(Object.create(null)));
        assert.isFalse(countable.validate(Boolean(true)));
        assert.isFalse(countable.validate(Number(1)));
        assert.isFalse(countable.validate({foo: 'bar'}));
        assert.isFalse(countable.validate(1));
        assert.isFalse(countable.validate(-1));
        assert.isFalse(countable.validate(1.0));
        assert.isFalse(countable.validate(-1.0));
        assert.isFalse(countable.validate(1));
        assert.isFalse(countable.validate(1.0));
        assert.isFalse(countable.validate(1.1));
        assert.isFalse(countable.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(countable.validate(new Foo()));
    });

});
