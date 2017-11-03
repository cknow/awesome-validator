import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { ObjectTypeStrict } from '../../src/rules/object-type-strict';

describe('ObjectTypeStrict', () => {

    let objectTypeStrict: ObjectTypeStrict;

    beforeEach(() => {
        objectTypeStrict = new ObjectTypeStrict();
    });

    it('is rule', () => {
        assert.instanceOf(objectTypeStrict, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(objectTypeStrict.validate({}));
        assert.isTrue(objectTypeStrict.validate({foo: 'bar'}));
        assert.isTrue(objectTypeStrict.validate(new Object()));
        assert.isTrue(objectTypeStrict.validate(new Object({foo: 'bar'})));
    });

    it('values is not valid', () => {
        assert.isFalse(objectTypeStrict.validate(Boolean()));
        assert.isFalse(objectTypeStrict.validate(Number()));
        assert.isFalse(objectTypeStrict.validate(String()));
        assert.isFalse(objectTypeStrict.validate(null));
        assert.isFalse(objectTypeStrict.validate(undefined));
        assert.isFalse(objectTypeStrict.validate(false));
        assert.isFalse(objectTypeStrict.validate(0));
        assert.isFalse(objectTypeStrict.validate(0.0));
        assert.isFalse(objectTypeStrict.validate(-0.0));
        assert.isFalse(objectTypeStrict.validate(''));
        assert.isFalse(objectTypeStrict.validate('0'));
        assert.isFalse(objectTypeStrict.validate(' '));
        assert.isFalse(objectTypeStrict.validate('   '));
        assert.isFalse(objectTypeStrict.validate([]));
        assert.isFalse(objectTypeStrict.validate(new Array()));
        assert.isFalse(objectTypeStrict.validate(Object.create(null)));
        assert.isFalse(objectTypeStrict.validate(Boolean(true)));
        assert.isFalse(objectTypeStrict.validate(Number(1)));
        assert.isFalse(objectTypeStrict.validate(String('fooBar')));
        assert.isFalse(objectTypeStrict.validate('foo'));
        assert.isFalse(objectTypeStrict.validate(['foo']));
        assert.isFalse(objectTypeStrict.validate(true));
        assert.isFalse(objectTypeStrict.validate(1));
        assert.isFalse(objectTypeStrict.validate(-1));
        assert.isFalse(objectTypeStrict.validate(1.0));
        assert.isFalse(objectTypeStrict.validate(-1.0));
        assert.isFalse(objectTypeStrict.validate(1));
        assert.isFalse(objectTypeStrict.validate(1.0));
        assert.isFalse(objectTypeStrict.validate(1.1));
        assert.isFalse(objectTypeStrict.validate(new Array('foo')));

        class Foo {}
        assert.isFalse(objectTypeStrict.validate(new Foo()));
    });

});
