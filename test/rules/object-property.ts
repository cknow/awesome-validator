import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { ObjectProperty } from '../../src/rules/object-property';

describe('ObjectProperty', () => {

    class Foo {

        /**
         * Foo
         */
        public foo: string = 'bar';
    }

    let objectProperty: ObjectProperty;

    beforeEach(() => {
        objectProperty = new ObjectProperty('foo');
    });

    it('is rule', () => {
        assert.instanceOf(objectProperty, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new ObjectProperty('bar').validate({bar: 'foo'}));
        assert.isTrue(new ObjectProperty('foobar').validate({foobar: (): string => 'foobar'}));

        assert.isTrue(objectProperty.validate({foo: 'bar'}));
        assert.isTrue(objectProperty.validate(new Foo()));
    });

    it('values is not valid', () => {
        assert.isFalse(new ObjectProperty(null).validate({}));
        assert.isFalse(new ObjectProperty(undefined).validate({}));
        assert.isFalse(new ObjectProperty('bar').validate({}));
        assert.isFalse(new ObjectProperty('bar').validate({foobar: 'foo'}));
        assert.isFalse(new ObjectProperty('bar').validate(new Foo()));

        assert.isFalse(objectProperty.validate(Boolean()));
        assert.isFalse(objectProperty.validate(Number()));
        assert.isFalse(objectProperty.validate(String()));
        assert.isFalse(objectProperty.validate(null));
        assert.isFalse(objectProperty.validate(undefined));
        assert.isFalse(objectProperty.validate(true));
        assert.isFalse(objectProperty.validate(false));
        assert.isFalse(objectProperty.validate(0));
        assert.isFalse(objectProperty.validate(0.0));
        assert.isFalse(objectProperty.validate(-0.0));
        assert.isFalse(objectProperty.validate(''));
        assert.isFalse(objectProperty.validate('0'));
        assert.isFalse(objectProperty.validate(' '));
        assert.isFalse(objectProperty.validate('   '));
        assert.isFalse(objectProperty.validate([]));
        assert.isFalse(objectProperty.validate(new Array()));
        assert.isFalse(objectProperty.validate(Object.create(null)));
        assert.isFalse(objectProperty.validate(Boolean(true)));
        assert.isFalse(objectProperty.validate(Number(1)));
        assert.isFalse(objectProperty.validate(String('fooBar')));
        assert.isFalse(objectProperty.validate('foo'));
        assert.isFalse(objectProperty.validate(['foo']));
        assert.isFalse(objectProperty.validate(1));
        assert.isFalse(objectProperty.validate(-1));
        assert.isFalse(objectProperty.validate(1.0));
        assert.isFalse(objectProperty.validate(-1.0));
        assert.isFalse(objectProperty.validate(1));
        assert.isFalse(objectProperty.validate(1.0));
        assert.isFalse(objectProperty.validate(1.1));
        assert.isFalse(objectProperty.validate(new Array('foo')));
    });

});
