import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { ObjectInstance } from '../../src/rules/object-instance';

describe('Object Instance', () => {

    let objectInstance: ObjectInstance;

    beforeEach(() => {
        objectInstance = new ObjectInstance();
    });

    it('is rule', () => {
        assert.instanceOf(objectInstance, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(objectInstance.validate({}));
        assert.isTrue(objectInstance.validate({foo: 'bar'}));
        assert.isTrue(objectInstance.validate(new Object()));
        assert.isTrue(objectInstance.validate(new Object({foo: 'bar'})));
        assert.isTrue(objectInstance.validate([]));
        assert.isTrue(objectInstance.validate(new Array()));
        assert.isTrue(objectInstance.validate(['foo']));
        assert.isTrue(objectInstance.validate(new Array('foo')));

        class Foo {}
        assert.isTrue(objectInstance.validate(new Foo()));
    });

    it('values is not valid', () => {
        assert.isFalse(objectInstance.validate(null));
        assert.isFalse(objectInstance.validate(Object.create(null)));
        assert.isFalse(objectInstance.validate(Boolean()));
        assert.isFalse(objectInstance.validate(Number()));
        assert.isFalse(objectInstance.validate(String()));
        assert.isFalse(objectInstance.validate(undefined));
        assert.isFalse(objectInstance.validate(false));
        assert.isFalse(objectInstance.validate(0));
        assert.isFalse(objectInstance.validate(0.0));
        assert.isFalse(objectInstance.validate(-0.0));
        assert.isFalse(objectInstance.validate(''));
        assert.isFalse(objectInstance.validate('0'));
        assert.isFalse(objectInstance.validate(' '));
        assert.isFalse(objectInstance.validate('   '));
        assert.isFalse(objectInstance.validate(Boolean(true)));
        assert.isFalse(objectInstance.validate(Number(1)));
        assert.isFalse(objectInstance.validate(String('fooBar')));
        assert.isFalse(objectInstance.validate('foo'));
        assert.isFalse(objectInstance.validate(true));
        assert.isFalse(objectInstance.validate(1));
        assert.isFalse(objectInstance.validate(-1));
        assert.isFalse(objectInstance.validate(1.0));
        assert.isFalse(objectInstance.validate(-1.0));
        assert.isFalse(objectInstance.validate(1));
        assert.isFalse(objectInstance.validate(1.0));
        assert.isFalse(objectInstance.validate(1.1));
    });

});
