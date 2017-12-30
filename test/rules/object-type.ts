import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { ObjectType } from '../../src/rules/object-type';

describe('ObjectType', () => {

    let objectType: ObjectType;

    beforeEach(() => {
        objectType = new ObjectType();
    });

    it('is rule', () => {
        assert.instanceOf(objectType, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(objectType.validate(null));
        assert.isTrue(objectType.validate({}));
        assert.isTrue(objectType.validate({foo: 'bar'}));
        assert.isTrue(objectType.validate(new Object()));
        assert.isTrue(objectType.validate(new Object({foo: 'bar'})));
        assert.isTrue(objectType.validate(Object.create(null)));
        assert.isTrue(objectType.validate([]));
        assert.isTrue(objectType.validate(new Array()));
        assert.isTrue(objectType.validate(['foo']));
        assert.isTrue(objectType.validate(new Array('foo')));

        class Foo {}
        assert.isTrue(objectType.validate(new Foo()));
    });

    it('values is not valid', () => {
        assert.isFalse(objectType.validate(Boolean()));
        assert.isFalse(objectType.validate(Number()));
        assert.isFalse(objectType.validate(String()));
        assert.isFalse(objectType.validate(undefined));
        assert.isFalse(objectType.validate(true));
        assert.isFalse(objectType.validate(false));
        assert.isFalse(objectType.validate(0));
        assert.isFalse(objectType.validate(0.0));
        assert.isFalse(objectType.validate(-0.0));
        assert.isFalse(objectType.validate(''));
        assert.isFalse(objectType.validate('0'));
        assert.isFalse(objectType.validate(' '));
        assert.isFalse(objectType.validate('   '));
        assert.isFalse(objectType.validate(Boolean(true)));
        assert.isFalse(objectType.validate(Number(1)));
        assert.isFalse(objectType.validate(String('fooBar')));
        assert.isFalse(objectType.validate('foo'));
        assert.isFalse(objectType.validate(1));
        assert.isFalse(objectType.validate(-1));
        assert.isFalse(objectType.validate(1.0));
        assert.isFalse(objectType.validate(-1.0));
        assert.isFalse(objectType.validate(1));
        assert.isFalse(objectType.validate(1.0));
        assert.isFalse(objectType.validate(1.1));
    });

});
