import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { FalseVal } from '../../src/rules/false-val';

describe('False Val', () => {

    let falseVal: FalseVal;

    beforeEach(() => {
        falseVal = new FalseVal();
    });

    it('is rule', () => {
        assert.instanceOf(falseVal, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(falseVal.validate(0));
        assert.isTrue(falseVal.validate('0'));
        assert.isTrue(falseVal.validate(false));
        assert.isTrue(falseVal.validate('false'));
        assert.isTrue(falseVal.validate('off'));
        assert.isTrue(falseVal.validate('no'));
        assert.isTrue(falseVal.validate('n'));
        assert.isTrue(falseVal.validate(''));
        assert.isTrue(falseVal.validate(String()));
        assert.isTrue(falseVal.validate(Number()));
    });

    it('values is not valid', () => {
        assert.isFalse(falseVal.validate(1));
        assert.isFalse(falseVal.validate('1'));
        assert.isFalse(falseVal.validate(true));
        assert.isFalse(falseVal.validate('true'));
        assert.isFalse(falseVal.validate('on'));
        assert.isFalse(falseVal.validate('yes'));
        assert.isFalse(falseVal.validate('y'));
        assert.isFalse(falseVal.validate('s'));
        assert.isFalse(falseVal.validate(null));
        assert.isFalse(falseVal.validate(undefined));
        assert.isFalse(falseVal.validate([]));
        assert.isFalse(falseVal.validate({}));
        assert.isFalse(falseVal.validate(new Array('foo')));
        assert.isFalse(falseVal.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(falseVal.validate(new Foo()));
    });

});
