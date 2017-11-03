import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { BooleanVal } from '../../src/rules/boolean-val';

describe('BooleanVal', () => {

    let booleanVal: BooleanVal;

    beforeEach(() => {
        booleanVal = new BooleanVal();
    });

    it('is rule', () => {
        assert.instanceOf(booleanVal, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(booleanVal.validate(1));
        assert.isTrue(booleanVal.validate('1'));
        assert.isTrue(booleanVal.validate(true));
        assert.isTrue(booleanVal.validate('true'));
        assert.isTrue(booleanVal.validate('on'));
        assert.isTrue(booleanVal.validate('yes'));
        assert.isTrue(booleanVal.validate('y'));
        assert.isTrue(booleanVal.validate('s'));
        assert.isTrue(booleanVal.validate(0));
        assert.isTrue(booleanVal.validate('0'));
        assert.isTrue(booleanVal.validate(false));
        assert.isTrue(booleanVal.validate('false'));
        assert.isTrue(booleanVal.validate('off'));
        assert.isTrue(booleanVal.validate('no'));
        assert.isTrue(booleanVal.validate('n'));
        assert.isTrue(booleanVal.validate(''));
        assert.isTrue(booleanVal.validate(String()));
        assert.isTrue(booleanVal.validate(Number()));
    });

    it('values is not valid', () => {
        assert.isFalse(booleanVal.validate(null));
        assert.isFalse(booleanVal.validate(undefined));
        assert.isFalse(booleanVal.validate([]));
        assert.isFalse(booleanVal.validate({}));
        assert.isFalse(booleanVal.validate(new Array('foo')));
        assert.isFalse(booleanVal.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(booleanVal.validate(new Foo()));
    });

});
