import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { BooleanInstance } from '../../src/rules/boolean-instance';

describe('Boolean Instance', () => {

    let booleanInstance: BooleanInstance;

    beforeEach(() => {
        booleanInstance = new BooleanInstance();
    });

    it('is rule', () => {
        assert.instanceOf(booleanInstance, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(booleanInstance.validate(Boolean()));
        assert.isTrue(booleanInstance.validate(Boolean(true)));
        assert.isTrue(booleanInstance.validate(Boolean(false)));
        assert.isTrue(booleanInstance.validate(Boolean('1')));
        assert.isTrue(booleanInstance.validate(Boolean('0')));
        assert.isTrue(booleanInstance.validate(true));
        assert.isTrue(booleanInstance.validate(false));
    });

    it('values is not valid', () => {
        assert.isFalse(booleanInstance.validate(String()));
        assert.isFalse(booleanInstance.validate(Number()));
        assert.isFalse(booleanInstance.validate(null));
        assert.isFalse(booleanInstance.validate(undefined));
        assert.isFalse(booleanInstance.validate('true'));
        assert.isFalse(booleanInstance.validate('false'));
        assert.isFalse(booleanInstance.validate('-1.1'));
        assert.isFalse(booleanInstance.validate('1.1'));
        assert.isFalse(booleanInstance.validate('1'));
        assert.isFalse(booleanInstance.validate('-1'));
        assert.isFalse(booleanInstance.validate('0'));
        assert.isFalse(booleanInstance.validate(' '));
        assert.isFalse(booleanInstance.validate('   '));
        assert.isFalse(booleanInstance.validate(0));
        assert.isFalse(booleanInstance.validate(-0));
        assert.isFalse(booleanInstance.validate(1));
        assert.isFalse(booleanInstance.validate(-1));
        assert.isFalse(booleanInstance.validate(0.0));
        assert.isFalse(booleanInstance.validate(-0.0));
        assert.isFalse(booleanInstance.validate(1.0));
        assert.isFalse(booleanInstance.validate(-1.0));
        assert.isFalse(booleanInstance.validate(0.1));
        assert.isFalse(booleanInstance.validate(-0.1));
        assert.isFalse(booleanInstance.validate(1.1));
        assert.isFalse(booleanInstance.validate(-1.1));
        assert.isFalse(booleanInstance.validate([]));
        assert.isFalse(booleanInstance.validate({}));
        assert.isFalse(booleanInstance.validate(new Array('foo')));
        assert.isFalse(booleanInstance.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(booleanInstance.validate(new Foo()));
    });

});
