import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Equals } from '../../src/rules/equals';

describe('Equals', () => {

    class Foo {}

    it('is rule', () => {
        assert.instanceOf(new Equals('foo'), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Equals('foo').validate('foo'));
        assert.isTrue(new Equals(1).validate('1'));
        assert.isTrue(new Equals(1).validate(1));
        assert.isTrue(new Equals([]).validate([]));
        assert.isTrue(new Equals([1, 2, 3]).validate([1, 2, 3]));
        assert.isTrue(new Equals([1, 2, [1, 2]]).validate([1, 2, [1, 2]]));
        assert.isTrue(new Equals([1, 2, 3]).validate(['1', 2, 3]));
        assert.isTrue(new Equals(null).validate(null));
        assert.isTrue(new Equals({foo: 1}).validate({foo: 1}));
        assert.isTrue(new Equals({foo: 1}).validate({foo: '1'}));

        const s: Foo = new Foo();
        assert.isTrue(new Equals(s).validate(s));
    });

    it('values is not valid', () => {
        assert.isFalse(new Equals('foo').validate('foobar'));
        assert.isFalse(new Equals(null).validate('foo'));
        assert.isFalse(new Equals('foo').validate(null));
        assert.isFalse(new Equals([1, 2, 3]).validate(['foo']));
        assert.isFalse(new Equals([1, 2, [1, 2]]).validate([1, 2, [2, 1]]));
        assert.isFalse(new Equals({foo: 'bar'}).validate({foo: 'foo'}));
        assert.isFalse(new Equals({bar: 'foo'}).validate({foo: 'foo'}));
        assert.isFalse(new Equals(new Foo()).validate(new Foo()));
    });

});
