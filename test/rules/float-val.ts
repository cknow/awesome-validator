import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { FloatVal } from '../../src/rules/float-val';

describe('FloatVal', () => {

    let floatVal: FloatVal;

    beforeEach(() => {
        floatVal = new FloatVal();
    });

    it('is rule', () => {
        assert.instanceOf(floatVal, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(floatVal.validate(1.1));
        assert.isTrue(floatVal.validate(-1.1));
        assert.isTrue(floatVal.validate('0.2'));
        assert.isTrue(floatVal.validate('.2'));
        assert.isTrue(floatVal.validate('-.2'));
        assert.isTrue(floatVal.validate('165.7'));
        assert.isTrue(floatVal.validate(165.7));
    });

    it('values is not valid', () => {
        assert.isFalse(floatVal.validate('19347e12'));
        assert.isFalse(floatVal.validate(1));
        assert.isFalse(floatVal.validate(1e12));
        assert.isFalse(floatVal.validate(1.0));
        assert.isFalse(floatVal.validate(0.0));
        assert.isFalse(floatVal.validate('1'));
        assert.isFalse(floatVal.validate('1.0'));
        assert.isFalse(floatVal.validate('0.0'));
        assert.isFalse(floatVal.validate(''));
        assert.isFalse(floatVal.validate(null));
        assert.isFalse(floatVal.validate(undefined));
        assert.isFalse(floatVal.validate(false));
        assert.isFalse(floatVal.validate('a'));
        assert.isFalse(floatVal.validate(' '));
        assert.isFalse(floatVal.validate('Foo'));
    });

});
