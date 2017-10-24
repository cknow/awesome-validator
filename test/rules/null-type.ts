import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { NullType } from '../../src/rules/null-type';

describe('Null Type', () => {

    let nullType: NullType;

    beforeEach(() => {
        nullType = new NullType();
    });

    it('is rule', () => {
        assert.instanceOf(nullType, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(nullType.validate(null));
    });

    it('values is not valid', () => {
        assert.isFalse(nullType.validate(Boolean()));
        assert.isFalse(nullType.validate(Number()));
        assert.isFalse(nullType.validate(String()));
        assert.isFalse(nullType.validate(undefined));
        assert.isFalse(nullType.validate(false));
        assert.isFalse(nullType.validate(0));
        assert.isFalse(nullType.validate(0.0));
        assert.isFalse(nullType.validate(-0.0));
        assert.isFalse(nullType.validate(''));
        assert.isFalse(nullType.validate('0'));
        assert.isFalse(nullType.validate(' '));
        assert.isFalse(nullType.validate('   '));
        assert.isFalse(nullType.validate({}));
        assert.isFalse(nullType.validate([]));
        assert.isFalse(nullType.validate(new Array()));
        assert.isFalse(nullType.validate(new Object()));
        assert.isFalse(nullType.validate(Object.create(null)));
        assert.isFalse(nullType.validate(Boolean(true)));
        assert.isFalse(nullType.validate(Number(1)));
        assert.isFalse(nullType.validate(String('fooBar')));
        assert.isFalse(nullType.validate('foo'));
        assert.isFalse(nullType.validate({foo: 'bar'}));
        assert.isFalse(nullType.validate(['foo']));
        assert.isFalse(nullType.validate(true));
        assert.isFalse(nullType.validate(1));
        assert.isFalse(nullType.validate(-1));
        assert.isFalse(nullType.validate(1.0));
        assert.isFalse(nullType.validate(-1.0));
        assert.isFalse(nullType.validate(1));
        assert.isFalse(nullType.validate(1.0));
        assert.isFalse(nullType.validate(1.1));
        assert.isFalse(nullType.validate(new Array('foo')));
        assert.isFalse(nullType.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(nullType.validate(new Foo()));
    });

});
