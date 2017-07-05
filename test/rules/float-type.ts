import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { FloatType } from '../../src/rules/float-type';

describe('Float Type', () => {

    let floatType: FloatType;

    beforeEach(() => {
        floatType = new FloatType();
    });

    it('is rule', () => {
        assert.instanceOf(floatType, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(floatType.validate(Number(-0.1)));
        assert.isTrue(floatType.validate(Number(0.1)));
        assert.isTrue(floatType.validate(Number(-1.1)));
        assert.isTrue(floatType.validate(Number(1.1)));
        assert.isTrue(floatType.validate(-0.1));
        assert.isTrue(floatType.validate(0.1));
        assert.isTrue(floatType.validate(-1.1));
        assert.isTrue(floatType.validate(1.1));
    });

    it('values is not valid', () => {
        assert.isFalse(floatType.validate(Number()));
        assert.isFalse(floatType.validate(Number(-0)));
        assert.isFalse(floatType.validate(Number(0)));
        assert.isFalse(floatType.validate(Number(-1)));
        assert.isFalse(floatType.validate(Number(1)));
        assert.isFalse(floatType.validate(Number(-0.0)));
        assert.isFalse(floatType.validate(Number(0.0)));
        assert.isFalse(floatType.validate(Number(-1.0)));
        assert.isFalse(floatType.validate(Number(1.0)));
        assert.isFalse(floatType.validate(Boolean()));
        assert.isFalse(floatType.validate(String()));
        assert.isFalse(floatType.validate(null));
        assert.isFalse(floatType.validate(undefined));
        assert.isFalse(floatType.validate(true));
        assert.isFalse(floatType.validate(false));
        assert.isFalse(floatType.validate('true'));
        assert.isFalse(floatType.validate('false'));
        assert.isFalse(floatType.validate('-1.1'));
        assert.isFalse(floatType.validate('1.1'));
        assert.isFalse(floatType.validate('1'));
        assert.isFalse(floatType.validate('-1'));
        assert.isFalse(floatType.validate('0'));
        assert.isFalse(floatType.validate(' '));
        assert.isFalse(floatType.validate('   '));
        assert.isFalse(floatType.validate(0));
        assert.isFalse(floatType.validate(-0));
        assert.isFalse(floatType.validate(1));
        assert.isFalse(floatType.validate(-1));
        assert.isFalse(floatType.validate(0.0));
        assert.isFalse(floatType.validate(-0.0));
        assert.isFalse(floatType.validate(1.0));
        assert.isFalse(floatType.validate(-1.0));
        assert.isFalse(floatType.validate([]));
        assert.isFalse(floatType.validate({}));
        assert.isFalse(floatType.validate(new Array('foo')));
        assert.isFalse(floatType.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(floatType.validate(new Foo()));
    });

});
