import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Fibonacci } from '../../src/rules/fibonacci';

describe('Fibonacci', () => {

    let fibonacci: Fibonacci;

    beforeEach(() => {
        fibonacci = new Fibonacci();
    });

    it('is rule', () => {
        assert.instanceOf(fibonacci, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(fibonacci.validate(1));
        assert.isTrue(fibonacci.validate(2));
        assert.isTrue(fibonacci.validate(3));
        assert.isTrue(fibonacci.validate(5));
        assert.isTrue(fibonacci.validate(8.0));
        assert.isTrue(fibonacci.validate('3'));
        assert.isTrue(fibonacci.validate(21));
        assert.isTrue(fibonacci.validate(21.0));
        assert.isTrue(fibonacci.validate('21.0'));
        assert.isTrue(fibonacci.validate(34));
        assert.isTrue(fibonacci.validate('34'));
        assert.isTrue(fibonacci.validate(1346269));
        assert.isTrue(fibonacci.validate(10610209857723));
    });

    it('values is not valid', () => {
        assert.isFalse(fibonacci.validate(true));
        assert.isFalse(fibonacci.validate(false));
        assert.isFalse(fibonacci.validate(0));
        assert.isFalse(fibonacci.validate(1346268));
        assert.isFalse(fibonacci.validate(''));
        assert.isFalse(fibonacci.validate(7));
        assert.isFalse(fibonacci.validate(-1));
        assert.isFalse(fibonacci.validate(5.2));
        assert.isFalse(fibonacci.validate('-1'));
        assert.isFalse(fibonacci.validate('a'));
        assert.isFalse(fibonacci.validate(' '));
        assert.isFalse(fibonacci.validate('foo'));
        assert.isFalse(fibonacci.validate(null));
        assert.isFalse(fibonacci.validate(undefined));
        assert.isFalse(fibonacci.validate([]));
        assert.isFalse(fibonacci.validate({}));
        assert.isFalse(fibonacci.validate(new Array('foo')));
        assert.isFalse(fibonacci.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(fibonacci.validate(new Foo()));
    });

});
