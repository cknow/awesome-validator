import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { FunctionType } from '../../src/rules/function-type';

describe('Function Type', () => {

    let functionType: FunctionType;

    beforeEach(() => {
        functionType = new FunctionType();
    });

    it('is rule', () => {
        assert.instanceOf(functionType, AbstractRule);
    });

    it('values is valid', () => {
        const foo: Function = (): string => 'foo';
        const obj: any = {foo};

        assert.isTrue(functionType.validate(() => 'foo'));
        assert.isTrue(functionType.validate(foo));
        assert.isTrue(functionType.validate(obj.foo));
    });

    it('values is not valid', () => {
        assert.isFalse(functionType.validate(Number(-0.1)));
        assert.isFalse(functionType.validate(Number(0.1)));
        assert.isFalse(functionType.validate(Number(-1.1)));
        assert.isFalse(functionType.validate(Number(1.1)));
        assert.isFalse(functionType.validate(-0.1));
        assert.isFalse(functionType.validate(0.1));
        assert.isFalse(functionType.validate(-1.1));
        assert.isFalse(functionType.validate(1.1));
        assert.isFalse(functionType.validate(Number()));
        assert.isFalse(functionType.validate(Number(-0)));
        assert.isFalse(functionType.validate(Number(0)));
        assert.isFalse(functionType.validate(Number(-1)));
        assert.isFalse(functionType.validate(Number(1)));
        assert.isFalse(functionType.validate(Number(-0.0)));
        assert.isFalse(functionType.validate(Number(0.0)));
        assert.isFalse(functionType.validate(Number(-1.0)));
        assert.isFalse(functionType.validate(Number(1.0)));
        assert.isFalse(functionType.validate(Boolean()));
        assert.isFalse(functionType.validate(String()));
        assert.isFalse(functionType.validate(null));
        assert.isFalse(functionType.validate(undefined));
        assert.isFalse(functionType.validate(true));
        assert.isFalse(functionType.validate(false));
        assert.isFalse(functionType.validate('true'));
        assert.isFalse(functionType.validate('false'));
        assert.isFalse(functionType.validate('-1.1'));
        assert.isFalse(functionType.validate('1.1'));
        assert.isFalse(functionType.validate('1'));
        assert.isFalse(functionType.validate('-1'));
        assert.isFalse(functionType.validate('0'));
        assert.isFalse(functionType.validate(' '));
        assert.isFalse(functionType.validate('   '));
        assert.isFalse(functionType.validate(0));
        assert.isFalse(functionType.validate(-0));
        assert.isFalse(functionType.validate(1));
        assert.isFalse(functionType.validate(-1));
        assert.isFalse(functionType.validate(0.0));
        assert.isFalse(functionType.validate(-0.0));
        assert.isFalse(functionType.validate(1.0));
        assert.isFalse(functionType.validate(-1.0));
        assert.isFalse(functionType.validate([]));
        assert.isFalse(functionType.validate({}));
        assert.isFalse(functionType.validate(new Array('foo')));
        assert.isFalse(functionType.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(functionType.validate(new Foo()));
    });

});
