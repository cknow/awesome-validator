import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { ArrayType } from '../../src/rules/array-type';

describe('ArrayType', () => {

    let arrayType: ArrayType;

    beforeEach(() => {
        arrayType = new ArrayType();
    });

    it('is rule', () => {
        assert.instanceOf(arrayType, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(arrayType.validate([]));
        assert.isTrue(arrayType.validate(new Array()));
        assert.isTrue(arrayType.validate(Array()));
        assert.isTrue(arrayType.validate([1, 2, 3]));
        assert.isTrue(arrayType.validate(new Array(1, 2, 3)));
        assert.isTrue(arrayType.validate(Array(1, 2, 3)));
        assert.isTrue(arrayType.validate(['foo', 'bar', 'foobaz']));
        assert.isTrue(arrayType.validate(new Array('foo', 'bar', 'foobaz')));
        assert.isTrue(arrayType.validate(Array('foo', 'bar', 'foobaz')));
    });

    it('values is not valid', () => {
        assert.isFalse(arrayType.validate(Boolean()));
        assert.isFalse(arrayType.validate(Number()));
        assert.isFalse(arrayType.validate(String()));
        assert.isFalse(arrayType.validate(null));
        assert.isFalse(arrayType.validate(undefined));
        assert.isFalse(arrayType.validate(true));
        assert.isFalse(arrayType.validate(false));
        assert.isFalse(arrayType.validate(0));
        assert.isFalse(arrayType.validate(0.0));
        assert.isFalse(arrayType.validate(-0.0));
        assert.isFalse(arrayType.validate(''));
        assert.isFalse(arrayType.validate('0'));
        assert.isFalse(arrayType.validate(' '));
        assert.isFalse(arrayType.validate('   '));
        assert.isFalse(arrayType.validate({}));
        assert.isFalse(arrayType.validate(new Object()));
        assert.isFalse(arrayType.validate(Object.create(null)));
        assert.isFalse(arrayType.validate(Boolean(true)));
        assert.isFalse(arrayType.validate(Number(1)));
        assert.isFalse(arrayType.validate(String('fooBar')));
        assert.isFalse(arrayType.validate('foo'));
        assert.isFalse(arrayType.validate({foo: 'bar'}));
        assert.isFalse(arrayType.validate(1));
        assert.isFalse(arrayType.validate(-1));
        assert.isFalse(arrayType.validate(1.0));
        assert.isFalse(arrayType.validate(-1.0));
        assert.isFalse(arrayType.validate(1));
        assert.isFalse(arrayType.validate(1.0));
        assert.isFalse(arrayType.validate(1.1));
        assert.isFalse(arrayType.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(arrayType.validate(new Foo()));
    });

});
