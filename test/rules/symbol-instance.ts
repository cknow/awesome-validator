import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { SymbolInstance } from '../../src/rules/symbol-instance';

describe('SymbolInstance', () => {

    let symbolInstance: SymbolInstance;

    beforeEach(() => {
        symbolInstance = new SymbolInstance();
    });

    it('is rule', () => {
        assert.instanceOf(symbolInstance, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(symbolInstance.validate(Symbol()));
        assert.isTrue(symbolInstance.validate(Symbol('')));
        assert.isTrue(symbolInstance.validate(Symbol(' ')));
        assert.isTrue(symbolInstance.validate(Symbol('   ')));
        assert.isTrue(symbolInstance.validate(Symbol('foo')));
        assert.isTrue(symbolInstance.validate(Symbol(0)));
        assert.isTrue(symbolInstance.validate(Symbol('bar')));
    });

    it('values is not valid', () => {
        assert.isFalse(symbolInstance.validate(Boolean()));
        assert.isFalse(symbolInstance.validate(Number()));
        assert.isFalse(symbolInstance.validate(String()));
        assert.isFalse(symbolInstance.validate(null));
        assert.isFalse(symbolInstance.validate(undefined));
        assert.isFalse(symbolInstance.validate(false));
        assert.isFalse(symbolInstance.validate(0));
        assert.isFalse(symbolInstance.validate(0.0));
        assert.isFalse(symbolInstance.validate(-0.0));
        assert.isFalse(symbolInstance.validate(''));
        assert.isFalse(symbolInstance.validate('0'));
        assert.isFalse(symbolInstance.validate(' '));
        assert.isFalse(symbolInstance.validate('   '));
        assert.isFalse(symbolInstance.validate({}));
        assert.isFalse(symbolInstance.validate(new Object()));
        assert.isFalse(symbolInstance.validate(Object.create(null)));
        assert.isFalse(symbolInstance.validate(Boolean(true)));
        assert.isFalse(symbolInstance.validate(Number(1)));
        assert.isFalse(symbolInstance.validate(String('fooBar')));
        assert.isFalse(symbolInstance.validate('foo'));
        assert.isFalse(symbolInstance.validate({foo: 'bar'}));
        assert.isFalse(symbolInstance.validate(true));
        assert.isFalse(symbolInstance.validate(1));
        assert.isFalse(symbolInstance.validate(-1));
        assert.isFalse(symbolInstance.validate(1.0));
        assert.isFalse(symbolInstance.validate(-1.0));
        assert.isFalse(symbolInstance.validate(1));
        assert.isFalse(symbolInstance.validate(1.0));
        assert.isFalse(symbolInstance.validate(1.1));
        assert.isFalse(symbolInstance.validate([]));
        assert.isFalse(symbolInstance.validate({}));
        assert.isFalse(symbolInstance.validate(new Array('foo')));
        assert.isFalse(symbolInstance.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(symbolInstance.validate(new Foo()));
    });

});
