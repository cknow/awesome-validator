import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { SymbolVal } from '../../src/rules/symbol-val';

describe('SymbolVal', () => {

    let symbolVal: SymbolVal;

    beforeEach(() => {
        symbolVal = new SymbolVal();
    });

    it('is rule', () => {
        assert.instanceOf(symbolVal, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(symbolVal.validate(0));
        assert.isTrue(symbolVal.validate(0.0));
        assert.isTrue(symbolVal.validate(-0.0));
        assert.isTrue(symbolVal.validate(1));
        assert.isTrue(symbolVal.validate(-1));
        assert.isTrue(symbolVal.validate(1.0));
        assert.isTrue(symbolVal.validate(-1.0));
        assert.isTrue(symbolVal.validate(1));
        assert.isTrue(symbolVal.validate(1.0));
        assert.isTrue(symbolVal.validate(1.1));
        assert.isTrue(symbolVal.validate(Number()));
        assert.isTrue(symbolVal.validate(Number(1)));
        assert.isTrue(symbolVal.validate('foo'));
        assert.isTrue(symbolVal.validate(''));
        assert.isTrue(symbolVal.validate('0'));
        assert.isTrue(symbolVal.validate(' '));
        assert.isTrue(symbolVal.validate('   '));
        assert.isTrue(symbolVal.validate(String()));
        assert.isTrue(symbolVal.validate(String('fooBar')));
        assert.isTrue(symbolVal.validate(Symbol()));
        assert.isTrue(symbolVal.validate(Symbol('')));
        assert.isTrue(symbolVal.validate(Symbol('foo')));
        assert.isTrue(symbolVal.validate(Symbol(0)));
        assert.isTrue(symbolVal.validate(Symbol('bar')));
        assert.isTrue(symbolVal.validate(undefined));
    });

    it('values is not valid', () => {
        assert.isFalse(symbolVal.validate(Boolean()));
        assert.isFalse(symbolVal.validate(null));
        assert.isFalse(symbolVal.validate(true));
        assert.isFalse(symbolVal.validate(false));
        assert.isFalse(symbolVal.validate({}));
        assert.isFalse(symbolVal.validate(new Object()));
        assert.isFalse(symbolVal.validate(Object.create(null)));
        assert.isFalse(symbolVal.validate(Boolean(true)));
        assert.isFalse(symbolVal.validate({foo: 'bar'}));
        assert.isFalse(symbolVal.validate([]));
        assert.isFalse(symbolVal.validate({}));
        assert.isFalse(symbolVal.validate(new Array('foo')));
        assert.isFalse(symbolVal.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(symbolVal.validate(new Foo()));
    });

});
