import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { TrueVal } from '../../src/rules/true-val';

describe('True Val', () => {

    let trueVal: TrueVal;

    beforeEach(() => {
        trueVal = new TrueVal();
    });

    it('is rule', () => {
        assert.instanceOf(trueVal, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(trueVal.validate(1));
        assert.isTrue(trueVal.validate('1'));
        assert.isTrue(trueVal.validate(true));
        assert.isTrue(trueVal.validate('true'));
        assert.isTrue(trueVal.validate('on'));
        assert.isTrue(trueVal.validate('yes'));
        assert.isTrue(trueVal.validate('y'));
        assert.isTrue(trueVal.validate('s'));
    });

    it('values is not valid', () => {
        assert.isFalse(trueVal.validate(0));
        assert.isFalse(trueVal.validate('0'));
        assert.isFalse(trueVal.validate(false));
        assert.isFalse(trueVal.validate('flase'));
        assert.isFalse(trueVal.validate('off'));
        assert.isFalse(trueVal.validate('no'));
        assert.isFalse(trueVal.validate('n'));
        assert.isFalse(trueVal.validate(String()));
        assert.isFalse(trueVal.validate(Number()));
        assert.isFalse(trueVal.validate(null));
        assert.isFalse(trueVal.validate(undefined));
        assert.isFalse(trueVal.validate([]));
        assert.isFalse(trueVal.validate({}));
        assert.isFalse(trueVal.validate(new Array('foo')));
        assert.isFalse(trueVal.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(trueVal.validate(new Foo()));
    });

});
