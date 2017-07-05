import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { StringType } from '../../src/rules/string-type';

describe('String Type', () => {

    let stringType: StringType;

    beforeEach(() => {
        stringType = new StringType();
    });

    it('is rule', () => {
        assert.instanceOf(stringType, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(stringType.validate(String()));
        assert.isTrue(stringType.validate(String('')));
        assert.isTrue(stringType.validate(String('   ')));
        assert.isTrue(stringType.validate(String('foo')));
        assert.isTrue(stringType.validate(''));
        assert.isTrue(stringType.validate('   '));
        assert.isTrue(stringType.validate('foo'));
    });

    it('values is not valid', () => {
        assert.isFalse(stringType.validate(Boolean()));
        assert.isFalse(stringType.validate(Number()));
        assert.isFalse(stringType.validate(null));
        assert.isFalse(stringType.validate(undefined));
        assert.isFalse(stringType.validate(true));
        assert.isFalse(stringType.validate(false));
        assert.isFalse(stringType.validate(0));
        assert.isFalse(stringType.validate(-0));
        assert.isFalse(stringType.validate(1));
        assert.isFalse(stringType.validate(-1));
        assert.isFalse(stringType.validate(0.0));
        assert.isFalse(stringType.validate(-0.0));
        assert.isFalse(stringType.validate(1.0));
        assert.isFalse(stringType.validate(-1.0));
        assert.isFalse(stringType.validate(0.1));
        assert.isFalse(stringType.validate(-0.1));
        assert.isFalse(stringType.validate(1.1));
        assert.isFalse(stringType.validate(-1.1));
        assert.isFalse(stringType.validate([]));
        assert.isFalse(stringType.validate({}));
        assert.isFalse(stringType.validate(new Array('foo')));
        assert.isFalse(stringType.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(stringType.validate(new Foo()));
    });

});
