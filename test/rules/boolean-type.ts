import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { BooleanType } from '../../src/rules/boolean-type';

describe('Boolean Type', () => {

    let booleanType: BooleanType;

    beforeEach(() => {
        booleanType = new BooleanType();
    });

    it('is rule', () => {
        assert.instanceOf(booleanType, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(booleanType.validate(Boolean()));
        assert.isTrue(booleanType.validate(Boolean(true)));
        assert.isTrue(booleanType.validate(Boolean(false)));
        assert.isTrue(booleanType.validate(Boolean('1')));
        assert.isTrue(booleanType.validate(Boolean('0')));
        assert.isTrue(booleanType.validate(true));
        assert.isTrue(booleanType.validate(false));
    });

    it('values is not valid', () => {
        assert.isFalse(booleanType.validate(String()));
        assert.isFalse(booleanType.validate(Number()));
        assert.isFalse(booleanType.validate(null));
        assert.isFalse(booleanType.validate(undefined));
        assert.isFalse(booleanType.validate('true'));
        assert.isFalse(booleanType.validate('false'));
        assert.isFalse(booleanType.validate('-1.1'));
        assert.isFalse(booleanType.validate('1.1'));
        assert.isFalse(booleanType.validate('1'));
        assert.isFalse(booleanType.validate('-1'));
        assert.isFalse(booleanType.validate('0'));
        assert.isFalse(booleanType.validate(' '));
        assert.isFalse(booleanType.validate('   '));
        assert.isFalse(booleanType.validate(0));
        assert.isFalse(booleanType.validate(-0));
        assert.isFalse(booleanType.validate(1));
        assert.isFalse(booleanType.validate(-1));
        assert.isFalse(booleanType.validate(0.0));
        assert.isFalse(booleanType.validate(-0.0));
        assert.isFalse(booleanType.validate(1.0));
        assert.isFalse(booleanType.validate(-1.0));
        assert.isFalse(booleanType.validate(0.1));
        assert.isFalse(booleanType.validate(-0.1));
        assert.isFalse(booleanType.validate(1.1));
        assert.isFalse(booleanType.validate(-1.1));
        assert.isFalse(booleanType.validate([]));
        assert.isFalse(booleanType.validate({}));
        assert.isFalse(booleanType.validate(new Array('foo')));
        assert.isFalse(booleanType.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(booleanType.validate(new Foo()));
    });

});
