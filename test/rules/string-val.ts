import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { StringVal } from '../../src/rules/string-val';

describe('StringVal', () => {

    let stringVal: StringVal;

    beforeEach(() => {
        stringVal = new StringVal();
    });

    it('is rule', () => {
        assert.instanceOf(stringVal, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(stringVal.validate('6'));
        assert.isTrue(stringVal.validate('String'));
        assert.isTrue(stringVal.validate(1.0));
        assert.isTrue(stringVal.validate(42));
        assert.isTrue(stringVal.validate(false));
        assert.isTrue(stringVal.validate(true));
        assert.isTrue(stringVal.validate({toString: (): string => 'foo'}));
        assert.isTrue(stringVal.validate(Boolean()));
        assert.isTrue(stringVal.validate(Number()));
        assert.isTrue(stringVal.validate(Boolean(true)));
        assert.isTrue(stringVal.validate(Number(1)));
    });

    it('values is not valid', () => {
        assert.isFalse(stringVal.validate([]));
        assert.isFalse(stringVal.validate(() => 'foo'));
        assert.isFalse(stringVal.validate(null));
        assert.isFalse(stringVal.validate(undefined));
        assert.isFalse(stringVal.validate({toString: 'foo'}));
        assert.isFalse(stringVal.validate({}));
        assert.isFalse(stringVal.validate(new Object()));
        assert.isFalse(stringVal.validate(Object.create(null)));
        assert.isFalse(stringVal.validate({foo: 'bar'}));
        assert.isFalse(stringVal.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(stringVal.validate(new Foo()));
    });

});
