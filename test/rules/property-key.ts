import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { PropertyKey } from '../../src/rules/property-key';

describe('PropertyKey', () => {

    let propertyKey: PropertyKey;

    beforeEach(() => {
        propertyKey = new PropertyKey();
    });

    it('is rule', () => {
        assert.instanceOf(propertyKey, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(propertyKey.validate(Number()));
        assert.isTrue(propertyKey.validate(String()));
        assert.isTrue(propertyKey.validate(0));
        assert.isTrue(propertyKey.validate(-0));
        assert.isTrue(propertyKey.validate(1));
        assert.isTrue(propertyKey.validate(-1));
        assert.isTrue(propertyKey.validate(0.0));
        assert.isTrue(propertyKey.validate(-0.0));
        assert.isTrue(propertyKey.validate(1.0));
        assert.isTrue(propertyKey.validate(-1.0));
        assert.isTrue(propertyKey.validate(0.1));
        assert.isTrue(propertyKey.validate(-0.1));
        assert.isTrue(propertyKey.validate(1.1));
        assert.isTrue(propertyKey.validate(-1.1));
        assert.isTrue(propertyKey.validate('true'));
        assert.isTrue(propertyKey.validate('false'));
        assert.isTrue(propertyKey.validate(''));
        assert.isTrue(propertyKey.validate('   '));
        assert.isTrue(propertyKey.validate('0'));
        assert.isTrue(propertyKey.validate('1'));
        assert.isTrue(propertyKey.validate('foo'));
        assert.isTrue(propertyKey.validate(Symbol()));
        assert.isTrue(propertyKey.validate(Symbol('')));
        assert.isTrue(propertyKey.validate(Symbol('foo')));
        assert.isTrue(propertyKey.validate(Symbol(0)));
        assert.isTrue(propertyKey.validate(Symbol('bar')));
    });

    it('values is not valid', () => {
        assert.isFalse(propertyKey.validate(Boolean()));
        assert.isFalse(propertyKey.validate(true));
        assert.isFalse(propertyKey.validate(false));
        assert.isFalse(propertyKey.validate(null));
        assert.isFalse(propertyKey.validate(undefined));
        assert.isFalse(propertyKey.validate([]));
        assert.isFalse(propertyKey.validate({}));
        assert.isFalse(propertyKey.validate(new Array('foo')));
        assert.isFalse(propertyKey.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(propertyKey.validate(new Foo()));
    });

});
