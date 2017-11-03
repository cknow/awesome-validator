import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { NumberInstance } from '../../src/rules/number-instance';

describe('NumberInstance', () => {

    let numberInstance: NumberInstance;

    beforeEach(() => {
        numberInstance = new NumberInstance();
    });

    it('is rule', () => {
        assert.instanceOf(numberInstance, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(numberInstance.validate(Number()));
        assert.isTrue(numberInstance.validate(Number(-0)));
        assert.isTrue(numberInstance.validate(Number(0)));
        assert.isTrue(numberInstance.validate(Number(-1)));
        assert.isTrue(numberInstance.validate(Number(1)));
        assert.isTrue(numberInstance.validate(Number(-0.0)));
        assert.isTrue(numberInstance.validate(Number(0.0)));
        assert.isTrue(numberInstance.validate(Number(-1.0)));
        assert.isTrue(numberInstance.validate(Number(1.0)));
        assert.isTrue(numberInstance.validate(Number(-0.1)));
        assert.isTrue(numberInstance.validate(Number(0.1)));
        assert.isTrue(numberInstance.validate(Number(-1.1)));
        assert.isTrue(numberInstance.validate(Number(1.1)));
        assert.isTrue(numberInstance.validate(-0));
        assert.isTrue(numberInstance.validate(0));
        assert.isTrue(numberInstance.validate(-1));
        assert.isTrue(numberInstance.validate(1));
        assert.isTrue(numberInstance.validate(-0.0));
        assert.isTrue(numberInstance.validate(0.0));
        assert.isTrue(numberInstance.validate(-1.0));
        assert.isTrue(numberInstance.validate(1.0));
        assert.isTrue(numberInstance.validate(-0.1));
        assert.isTrue(numberInstance.validate(0.1));
        assert.isTrue(numberInstance.validate(-1.1));
        assert.isTrue(numberInstance.validate(1.1));
    });

    it('values is not valid', () => {
        assert.isFalse(numberInstance.validate(Boolean()));
        assert.isFalse(numberInstance.validate(String()));
        assert.isFalse(numberInstance.validate(null));
        assert.isFalse(numberInstance.validate(undefined));
        assert.isFalse(numberInstance.validate(true));
        assert.isFalse(numberInstance.validate(false));
        assert.isFalse(numberInstance.validate('true'));
        assert.isFalse(numberInstance.validate('false'));
        assert.isFalse(numberInstance.validate('-1.1'));
        assert.isFalse(numberInstance.validate('1.1'));
        assert.isFalse(numberInstance.validate('1'));
        assert.isFalse(numberInstance.validate('-1'));
        assert.isFalse(numberInstance.validate('0'));
        assert.isFalse(numberInstance.validate(' '));
        assert.isFalse(numberInstance.validate('   '));
        assert.isFalse(numberInstance.validate([]));
        assert.isFalse(numberInstance.validate({}));
        assert.isFalse(numberInstance.validate(new Array('foo')));
        assert.isFalse(numberInstance.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(numberInstance.validate(new Foo()));
    });

});
