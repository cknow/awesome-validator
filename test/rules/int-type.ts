import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { IntType } from '../../src/rules/int-type';

describe('Int Type', () => {

    let intType: IntType;

    beforeEach(() => {
        intType = new IntType();
    });

    it('is rule', () => {
        assert.instanceOf(intType, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(intType.validate(Number()));
        assert.isTrue(intType.validate(Number(-0)));
        assert.isTrue(intType.validate(Number(0)));
        assert.isTrue(intType.validate(Number(-1)));
        assert.isTrue(intType.validate(Number(1)));
        assert.isTrue(intType.validate(Number(-0.0)));
        assert.isTrue(intType.validate(Number(0.0)));
        assert.isTrue(intType.validate(Number(-1.0)));
        assert.isTrue(intType.validate(Number(1.0)));
        assert.isTrue(intType.validate(-0));
        assert.isTrue(intType.validate(0));
        assert.isTrue(intType.validate(-1));
        assert.isTrue(intType.validate(1));
        assert.isTrue(intType.validate(-0.0));
        assert.isTrue(intType.validate(0.0));
        assert.isTrue(intType.validate(-1.0));
        assert.isTrue(intType.validate(1.0));
    });

    it('values is not valid', () => {
        assert.isFalse(intType.validate(Number(-0.1)));
        assert.isFalse(intType.validate(Number(0.1)));
        assert.isFalse(intType.validate(Number(-1.1)));
        assert.isFalse(intType.validate(Number(1.1)));
        assert.isFalse(intType.validate(Boolean()));
        assert.isFalse(intType.validate(String()));
        assert.isFalse(intType.validate(null));
        assert.isFalse(intType.validate(undefined));
        assert.isFalse(intType.validate(true));
        assert.isFalse(intType.validate(false));
        assert.isFalse(intType.validate('true'));
        assert.isFalse(intType.validate('false'));
        assert.isFalse(intType.validate('-1.1'));
        assert.isFalse(intType.validate('1.1'));
        assert.isFalse(intType.validate('1'));
        assert.isFalse(intType.validate('-1'));
        assert.isFalse(intType.validate('0'));
        assert.isFalse(intType.validate(' '));
        assert.isFalse(intType.validate('   '));
        assert.isFalse(intType.validate(-0.1));
        assert.isFalse(intType.validate(0.1));
        assert.isFalse(intType.validate(-1.1));
        assert.isFalse(intType.validate(1.1));
        assert.isFalse(intType.validate([]));
        assert.isFalse(intType.validate({}));
        assert.isFalse(intType.validate(new Array('foo')));
        assert.isFalse(intType.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(intType.validate(new Foo()));
    });

});
