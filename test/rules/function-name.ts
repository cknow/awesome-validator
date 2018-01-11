import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { FunctionName } from '../../src/rules/function-name';

describe('FunctionName', () => {

    let functionName: FunctionName;

    beforeEach(() => {
        functionName = new FunctionName();
    });

    it('is rule', () => {
        assert.instanceOf(functionName, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(functionName.validate('foo'));
        assert.isTrue(functionName.validate('Foo'));
        assert.isTrue(functionName.validate('fooBar'));
        assert.isTrue(functionName.validate('foo_bar'));
        assert.isTrue(functionName.validate('foo0'));
        assert.isTrue(functionName.validate('Foo1'));
        assert.isTrue(functionName.validate('foo2Bar3'));
        assert.isTrue(functionName.validate('foo4_bar5'));
    });

    it('values is not valid', () => {
        assert.isFalse(functionName.validate('foo bar'));
        assert.isFalse(functionName.validate('foo-bar'));
        assert.isFalse(functionName.validate('0foo'));
        assert.isFalse(functionName.validate(' foo'));
        assert.isFalse(functionName.validate(Number(-0.1)));
        assert.isFalse(functionName.validate(Number(0.1)));
        assert.isFalse(functionName.validate(Number(-1.1)));
        assert.isFalse(functionName.validate(Number(1.1)));
        assert.isFalse(functionName.validate(-0.1));
        assert.isFalse(functionName.validate(0.1));
        assert.isFalse(functionName.validate(-1.1));
        assert.isFalse(functionName.validate(1.1));
        assert.isFalse(functionName.validate(Number()));
        assert.isFalse(functionName.validate(Number(-0)));
        assert.isFalse(functionName.validate(Number(0)));
        assert.isFalse(functionName.validate(Number(-1)));
        assert.isFalse(functionName.validate(Number(1)));
        assert.isFalse(functionName.validate(Number(-0.0)));
        assert.isFalse(functionName.validate(Number(0.0)));
        assert.isFalse(functionName.validate(Number(-1.0)));
        assert.isFalse(functionName.validate(Number(1.0)));
        assert.isFalse(functionName.validate(String()));
        assert.isFalse(functionName.validate(null));
        assert.isFalse(functionName.validate(undefined));
        assert.isFalse(functionName.validate('-1.1'));
        assert.isFalse(functionName.validate('1.1'));
        assert.isFalse(functionName.validate('1'));
        assert.isFalse(functionName.validate('-1'));
        assert.isFalse(functionName.validate('0'));
        assert.isFalse(functionName.validate(' '));
        assert.isFalse(functionName.validate('   '));
        assert.isFalse(functionName.validate(0));
        assert.isFalse(functionName.validate(-0));
        assert.isFalse(functionName.validate(1));
        assert.isFalse(functionName.validate(-1));
        assert.isFalse(functionName.validate(0.0));
        assert.isFalse(functionName.validate(-0.0));
        assert.isFalse(functionName.validate(1.0));
        assert.isFalse(functionName.validate(-1.0));
        assert.isFalse(functionName.validate([]));
        assert.isFalse(functionName.validate({}));
        assert.isFalse(functionName.validate(new Array('foo')));
        assert.isFalse(functionName.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(functionName.validate(new Foo()));
    });

});
