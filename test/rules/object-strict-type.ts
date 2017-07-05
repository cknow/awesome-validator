import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { ObjectStrictType } from '../../src/rules/object-strict-type';

describe('Object Type', () => {

    let objectStrictType: ObjectStrictType;

    beforeEach(() => {
        objectStrictType = new ObjectStrictType();
    });

    it('is rule', () => {
        assert.instanceOf(objectStrictType, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(objectStrictType.validate({}));
        assert.isTrue(objectStrictType.validate({foo: 'bar'}));
        assert.isTrue(objectStrictType.validate(new Object()));
        assert.isTrue(objectStrictType.validate(new Object({foo: 'bar'})));
    });

    it('values is not valid', () => {
        assert.isFalse(objectStrictType.validate(Boolean()));
        assert.isFalse(objectStrictType.validate(Number()));
        assert.isFalse(objectStrictType.validate(String()));
        assert.isFalse(objectStrictType.validate(null));
        assert.isFalse(objectStrictType.validate(undefined));
        assert.isFalse(objectStrictType.validate(false));
        assert.isFalse(objectStrictType.validate(0));
        assert.isFalse(objectStrictType.validate(0.0));
        assert.isFalse(objectStrictType.validate(-0.0));
        assert.isFalse(objectStrictType.validate(''));
        assert.isFalse(objectStrictType.validate('0'));
        assert.isFalse(objectStrictType.validate(' '));
        assert.isFalse(objectStrictType.validate('   '));
        assert.isFalse(objectStrictType.validate([]));
        assert.isFalse(objectStrictType.validate(new Array()));
        assert.isFalse(objectStrictType.validate(Object.create(null)));
        assert.isFalse(objectStrictType.validate(Boolean(true)));
        assert.isFalse(objectStrictType.validate(Number(1)));
        assert.isFalse(objectStrictType.validate(String('fooBar')));
        assert.isFalse(objectStrictType.validate('foo'));
        assert.isFalse(objectStrictType.validate(['foo']));
        assert.isFalse(objectStrictType.validate(true));
        assert.isFalse(objectStrictType.validate(1));
        assert.isFalse(objectStrictType.validate(-1));
        assert.isFalse(objectStrictType.validate(1.0));
        assert.isFalse(objectStrictType.validate(-1.0));
        assert.isFalse(objectStrictType.validate(1));
        assert.isFalse(objectStrictType.validate(1.0));
        assert.isFalse(objectStrictType.validate(1.1));
        assert.isFalse(objectStrictType.validate(new Array('foo')));

        class Foo {}
        assert.isFalse(objectStrictType.validate(new Foo()));
    });
});
