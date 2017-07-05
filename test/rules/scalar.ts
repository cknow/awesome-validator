import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Scalar } from '../../src/rules/scalar';

describe('Scalar', () => {

    let scalar: Scalar;

    beforeEach(() => {
        scalar = new Scalar();
    });

    it('is rule', () => {
        assert.instanceOf(scalar, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(scalar.validate(Boolean()));
        assert.isTrue(scalar.validate(Number()));
        assert.isTrue(scalar.validate(String()));
        assert.isTrue(scalar.validate(true));
        assert.isTrue(scalar.validate(false));
        assert.isTrue(scalar.validate(0));
        assert.isTrue(scalar.validate(-0));
        assert.isTrue(scalar.validate(1));
        assert.isTrue(scalar.validate(-1));
        assert.isTrue(scalar.validate(0.0));
        assert.isTrue(scalar.validate(-0.0));
        assert.isTrue(scalar.validate(1.0));
        assert.isTrue(scalar.validate(-1.0));
        assert.isTrue(scalar.validate(0.1));
        assert.isTrue(scalar.validate(-0.1));
        assert.isTrue(scalar.validate(1.1));
        assert.isTrue(scalar.validate(-1.1));
        assert.isTrue(scalar.validate('true'));
        assert.isTrue(scalar.validate('false'));
        assert.isTrue(scalar.validate(''));
        assert.isTrue(scalar.validate('   '));
        assert.isTrue(scalar.validate('0'));
        assert.isTrue(scalar.validate('1'));
        assert.isTrue(scalar.validate('foo'));
    });

    it('values is not valid', () => {
        assert.isFalse(scalar.validate(null));
        assert.isFalse(scalar.validate(undefined));
        assert.isFalse(scalar.validate([]));
        assert.isFalse(scalar.validate({}));
        assert.isFalse(scalar.validate(new Array('foo')));
        assert.isFalse(scalar.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(scalar.validate(new Foo()));
    });

});
