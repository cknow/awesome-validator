import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { IntVal } from '../../src/rules/int-val';

describe('IntVal', () => {

    let intVal: IntVal;

    beforeEach(() => {
        intVal = new IntVal();
    });

    it('is rule', () => {
        assert.instanceOf(intVal, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(intVal.validate(165));
        assert.isTrue(intVal.validate(1));
        assert.isTrue(intVal.validate(0));
        assert.isTrue(intVal.validate(0.0));
        assert.isTrue(intVal.validate('1'));
        assert.isTrue(intVal.validate('19347e12'));
        assert.isTrue(intVal.validate(165.0));
        assert.isTrue(intVal.validate(1e12));
    });

    it('values is not valid', () => {
        assert.isFalse(intVal.validate(1.1));
        assert.isFalse(intVal.validate(-1.1));
        assert.isFalse(intVal.validate('0.2'));
        assert.isFalse(intVal.validate('.2'));
        assert.isFalse(intVal.validate('-.2'));
        assert.isFalse(intVal.validate('165.7'));
        assert.isFalse(intVal.validate(''));
        assert.isFalse(intVal.validate(null));
        assert.isFalse(intVal.validate(undefined));
        assert.isFalse(intVal.validate(false));
        assert.isFalse(intVal.validate('a'));
        assert.isFalse(intVal.validate(' '));
        assert.isFalse(intVal.validate('Foo'));
    });

});
