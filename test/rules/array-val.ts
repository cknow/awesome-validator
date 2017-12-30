import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { ArrayVal } from '../../src/rules/array-val';

describe('ArrayVal', () => {

    let arrayVal: ArrayVal;

    beforeEach(() => {
        arrayVal = new ArrayVal();
    });

    it('is rule', () => {
        assert.instanceOf(arrayVal, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(arrayVal.validate([]));
        assert.isTrue(arrayVal.validate(new Array()));
        assert.isTrue(arrayVal.validate(Array()));
        assert.isTrue(arrayVal.validate([1, 2, 3]));
        assert.isTrue(arrayVal.validate(new Array(1, 2, 3)));
        assert.isTrue(arrayVal.validate(Array(1, 2, 3)));
        assert.isTrue(arrayVal.validate(['foo', 'bar', 'foobaz']));
        assert.isTrue(arrayVal.validate(new Array('foo', 'bar', 'foobaz')));
        assert.isTrue(arrayVal.validate(Array('foo', 'bar', 'foobaz')));
    });

    it('values is not valid', () => {
        assert.isFalse(arrayVal.validate(Boolean()));
        assert.isFalse(arrayVal.validate(Number()));
        assert.isFalse(arrayVal.validate(String()));
        assert.isFalse(arrayVal.validate(null));
        assert.isFalse(arrayVal.validate(undefined));
        assert.isFalse(arrayVal.validate(true));
        assert.isFalse(arrayVal.validate(false));
        assert.isFalse(arrayVal.validate(0));
        assert.isFalse(arrayVal.validate(0.0));
        assert.isFalse(arrayVal.validate(-0.0));
        assert.isFalse(arrayVal.validate(''));
        assert.isFalse(arrayVal.validate('0'));
        assert.isFalse(arrayVal.validate(' '));
        assert.isFalse(arrayVal.validate('   '));
        assert.isFalse(arrayVal.validate({}));
        assert.isFalse(arrayVal.validate(new Object()));
        assert.isFalse(arrayVal.validate(Object.create(null)));
        assert.isFalse(arrayVal.validate(Boolean(true)));
        assert.isFalse(arrayVal.validate(Number(1)));
        assert.isFalse(arrayVal.validate(String('fooBar')));
        assert.isFalse(arrayVal.validate('foo'));
        assert.isFalse(arrayVal.validate({foo: 'bar'}));
        assert.isFalse(arrayVal.validate(1));
        assert.isFalse(arrayVal.validate(-1));
        assert.isFalse(arrayVal.validate(1.0));
        assert.isFalse(arrayVal.validate(-1.0));
        assert.isFalse(arrayVal.validate(1));
        assert.isFalse(arrayVal.validate(1.0));
        assert.isFalse(arrayVal.validate(1.1));
        assert.isFalse(arrayVal.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(arrayVal.validate(new Foo()));
    });

});
