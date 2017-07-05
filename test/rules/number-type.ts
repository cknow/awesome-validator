import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { NumberType } from '../../src/rules/number-type';

describe('Int Type', () => {

    let numberType: NumberType;

    beforeEach(() => {
        numberType = new NumberType();
    });

    it('is rule', () => {
        assert.instanceOf(numberType, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(numberType.validate(Number()));
        assert.isTrue(numberType.validate(Number(-0)));
        assert.isTrue(numberType.validate(Number(0)));
        assert.isTrue(numberType.validate(Number(-1)));
        assert.isTrue(numberType.validate(Number(1)));
        assert.isTrue(numberType.validate(Number(-0.0)));
        assert.isTrue(numberType.validate(Number(0.0)));
        assert.isTrue(numberType.validate(Number(-1.0)));
        assert.isTrue(numberType.validate(Number(1.0)));
        assert.isTrue(numberType.validate(Number(-0.1)));
        assert.isTrue(numberType.validate(Number(0.1)));
        assert.isTrue(numberType.validate(Number(-1.1)));
        assert.isTrue(numberType.validate(Number(1.1)));
        assert.isTrue(numberType.validate(-0));
        assert.isTrue(numberType.validate(0));
        assert.isTrue(numberType.validate(-1));
        assert.isTrue(numberType.validate(1));
        assert.isTrue(numberType.validate(-0.0));
        assert.isTrue(numberType.validate(0.0));
        assert.isTrue(numberType.validate(-1.0));
        assert.isTrue(numberType.validate(1.0));
        assert.isTrue(numberType.validate(-0.1));
        assert.isTrue(numberType.validate(0.1));
        assert.isTrue(numberType.validate(-1.1));
        assert.isTrue(numberType.validate(1.1));
    });

    it('values is not valid', () => {
        assert.isFalse(numberType.validate(Boolean()));
        assert.isFalse(numberType.validate(String()));
        assert.isFalse(numberType.validate(null));
        assert.isFalse(numberType.validate(undefined));
        assert.isFalse(numberType.validate(true));
        assert.isFalse(numberType.validate(false));
        assert.isFalse(numberType.validate('true'));
        assert.isFalse(numberType.validate('false'));
        assert.isFalse(numberType.validate('-1.1'));
        assert.isFalse(numberType.validate('1.1'));
        assert.isFalse(numberType.validate('1'));
        assert.isFalse(numberType.validate('-1'));
        assert.isFalse(numberType.validate('0'));
        assert.isFalse(numberType.validate(' '));
        assert.isFalse(numberType.validate('   '));
        assert.isFalse(numberType.validate([]));
        assert.isFalse(numberType.validate({}));
        assert.isFalse(numberType.validate(new Array('foo')));
        assert.isFalse(numberType.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(numberType.validate(new Foo()));
    });

});
