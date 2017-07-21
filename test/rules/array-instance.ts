import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { ArrayInstance } from '../../src/rules/array-instance';

describe('Array Instance', () => {

    let arrayInstance: ArrayInstance;

    beforeEach(() => {
        arrayInstance = new ArrayInstance();
    });

    it('is rule', () => {
        assert.instanceOf(arrayInstance, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(arrayInstance.validate([]));
        assert.isTrue(arrayInstance.validate(new Array()));
        assert.isTrue(arrayInstance.validate(Array()));
        assert.isTrue(arrayInstance.validate([1, 2, 3]));
        assert.isTrue(arrayInstance.validate(new Array(1, 2, 3)));
        assert.isTrue(arrayInstance.validate(Array(1, 2, 3)));
        assert.isTrue(arrayInstance.validate(['foo', 'bar', 'foobaz']));
        assert.isTrue(arrayInstance.validate(new Array('foo', 'bar', 'foobaz')));
        assert.isTrue(arrayInstance.validate(Array('foo', 'bar', 'foobaz')));
    });

    it('values is not valid', () => {
        assert.isFalse(arrayInstance.validate(Boolean()));
        assert.isFalse(arrayInstance.validate(Number()));
        assert.isFalse(arrayInstance.validate(String()));
        assert.isFalse(arrayInstance.validate(null));
        assert.isFalse(arrayInstance.validate(undefined));
        assert.isFalse(arrayInstance.validate(false));
        assert.isFalse(arrayInstance.validate(0));
        assert.isFalse(arrayInstance.validate(0.0));
        assert.isFalse(arrayInstance.validate(-0.0));
        assert.isFalse(arrayInstance.validate(''));
        assert.isFalse(arrayInstance.validate('0'));
        assert.isFalse(arrayInstance.validate(' '));
        assert.isFalse(arrayInstance.validate('   '));
        assert.isFalse(arrayInstance.validate({}));
        assert.isFalse(arrayInstance.validate(new Object()));
        assert.isFalse(arrayInstance.validate(Object.create(null)));
        assert.isFalse(arrayInstance.validate(Boolean(true)));
        assert.isFalse(arrayInstance.validate(Number(1)));
        assert.isFalse(arrayInstance.validate(String('fooBar')));
        assert.isFalse(arrayInstance.validate('foo'));
        assert.isFalse(arrayInstance.validate({foo: 'bar'}));
        assert.isFalse(arrayInstance.validate(true));
        assert.isFalse(arrayInstance.validate(1));
        assert.isFalse(arrayInstance.validate(-1));
        assert.isFalse(arrayInstance.validate(1.0));
        assert.isFalse(arrayInstance.validate(-1.0));
        assert.isFalse(arrayInstance.validate(1));
        assert.isFalse(arrayInstance.validate(1.0));
        assert.isFalse(arrayInstance.validate(1.1));
        assert.isFalse(arrayInstance.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(arrayInstance.validate(new Foo()));
    });

});
