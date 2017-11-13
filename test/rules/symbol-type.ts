import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { SymbolType } from '../../src/rules/symbol-type';

describe('SymbolType', () => {

    let symbolType: SymbolType;

    beforeEach(() => {
        symbolType = new SymbolType();
    });

    it('is rule', () => {
        assert.instanceOf(symbolType, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(symbolType.validate(Symbol()));
        assert.isTrue(symbolType.validate(Symbol('')));
        assert.isTrue(symbolType.validate(Symbol(' ')));
        assert.isTrue(symbolType.validate(Symbol('   ')));
        assert.isTrue(symbolType.validate(Symbol('foo')));
        assert.isTrue(symbolType.validate(Symbol(0)));
        assert.isTrue(symbolType.validate(Symbol('bar')));
    });

    it('values is not valid', () => {
        assert.isFalse(symbolType.validate(Boolean()));
        assert.isFalse(symbolType.validate(Number()));
        assert.isFalse(symbolType.validate(String()));
        assert.isFalse(symbolType.validate(null));
        assert.isFalse(symbolType.validate(undefined));
        assert.isFalse(symbolType.validate(false));
        assert.isFalse(symbolType.validate(0));
        assert.isFalse(symbolType.validate(0.0));
        assert.isFalse(symbolType.validate(-0.0));
        assert.isFalse(symbolType.validate(''));
        assert.isFalse(symbolType.validate('0'));
        assert.isFalse(symbolType.validate(' '));
        assert.isFalse(symbolType.validate('   '));
        assert.isFalse(symbolType.validate({}));
        assert.isFalse(symbolType.validate(new Object()));
        assert.isFalse(symbolType.validate(Object.create(null)));
        assert.isFalse(symbolType.validate(Boolean(true)));
        assert.isFalse(symbolType.validate(Number(1)));
        assert.isFalse(symbolType.validate(String('fooBar')));
        assert.isFalse(symbolType.validate('foo'));
        assert.isFalse(symbolType.validate({foo: 'bar'}));
        assert.isFalse(symbolType.validate(true));
        assert.isFalse(symbolType.validate(1));
        assert.isFalse(symbolType.validate(-1));
        assert.isFalse(symbolType.validate(1.0));
        assert.isFalse(symbolType.validate(-1.0));
        assert.isFalse(symbolType.validate(1));
        assert.isFalse(symbolType.validate(1.0));
        assert.isFalse(symbolType.validate(1.1));
        assert.isFalse(symbolType.validate([]));
        assert.isFalse(symbolType.validate({}));
        assert.isFalse(symbolType.validate(new Array('foo')));
        assert.isFalse(symbolType.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(symbolType.validate(new Foo()));
    });

});
