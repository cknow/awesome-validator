import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { NumberVal } from '../../src/rules/number-val';

describe('Number Val', () => {

    let numberVal: NumberVal;

    beforeEach(() => {
        numberVal = new NumberVal();
    });

    it('is rule', () => {
        assert.instanceOf(numberVal, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(numberVal.validate(1.1));
        assert.isTrue(numberVal.validate(-1.1));
        assert.isTrue(numberVal.validate('0.2'));
        assert.isTrue(numberVal.validate('.2'));
        assert.isTrue(numberVal.validate('-.2'));
        assert.isTrue(numberVal.validate('165.7'));
        assert.isTrue(numberVal.validate(165.7));
        assert.isTrue(numberVal.validate(165));
        assert.isTrue(numberVal.validate(1));
        assert.isTrue(numberVal.validate(0));
        assert.isTrue(numberVal.validate(0.0));
        assert.isTrue(numberVal.validate('1'));
        assert.isTrue(numberVal.validate('19347e12'));
        assert.isTrue(numberVal.validate(165.0));
        assert.isTrue(numberVal.validate(1e12));
    });

    it('values is not valid', () => {
        assert.isFalse(numberVal.validate(Boolean()));
        assert.isFalse(numberVal.validate(String()));
        assert.isFalse(numberVal.validate(null));
        assert.isFalse(numberVal.validate(undefined));
        assert.isFalse(numberVal.validate(true));
        assert.isFalse(numberVal.validate(false));
        assert.isFalse(numberVal.validate('true'));
        assert.isFalse(numberVal.validate('false'));
        assert.isFalse(numberVal.validate(''));
        assert.isFalse(numberVal.validate(' '));
        assert.isFalse(numberVal.validate([]));
        assert.isFalse(numberVal.validate({}));
        assert.isFalse(numberVal.validate(new Array('foo')));
        assert.isFalse(numberVal.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(numberVal.validate(new Foo()));
    });

});
