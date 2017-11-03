import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { FunctionInstance } from '../../src/rules/function-instance';

describe('FunctionInstance', () => {

    let functionInstance: FunctionInstance;

    beforeEach(() => {
        functionInstance = new FunctionInstance();
    });

    it('is rule', () => {
        assert.instanceOf(functionInstance, AbstractRule);
    });

    it('values is valid', () => {
        const foo: Function = (): string => 'foo';
        const obj: any = {foo};

        assert.isTrue(functionInstance.validate(() => 'foo'));
        assert.isTrue(functionInstance.validate(foo));
        assert.isTrue(functionInstance.validate(obj.foo));
    });

    it('values is not valid', () => {
        assert.isFalse(functionInstance.validate(Number(-0.1)));
        assert.isFalse(functionInstance.validate(Number(0.1)));
        assert.isFalse(functionInstance.validate(Number(-1.1)));
        assert.isFalse(functionInstance.validate(Number(1.1)));
        assert.isFalse(functionInstance.validate(-0.1));
        assert.isFalse(functionInstance.validate(0.1));
        assert.isFalse(functionInstance.validate(-1.1));
        assert.isFalse(functionInstance.validate(1.1));
        assert.isFalse(functionInstance.validate(Number()));
        assert.isFalse(functionInstance.validate(Number(-0)));
        assert.isFalse(functionInstance.validate(Number(0)));
        assert.isFalse(functionInstance.validate(Number(-1)));
        assert.isFalse(functionInstance.validate(Number(1)));
        assert.isFalse(functionInstance.validate(Number(-0.0)));
        assert.isFalse(functionInstance.validate(Number(0.0)));
        assert.isFalse(functionInstance.validate(Number(-1.0)));
        assert.isFalse(functionInstance.validate(Number(1.0)));
        assert.isFalse(functionInstance.validate(Boolean()));
        assert.isFalse(functionInstance.validate(String()));
        assert.isFalse(functionInstance.validate(null));
        assert.isFalse(functionInstance.validate(undefined));
        assert.isFalse(functionInstance.validate(true));
        assert.isFalse(functionInstance.validate(false));
        assert.isFalse(functionInstance.validate('true'));
        assert.isFalse(functionInstance.validate('false'));
        assert.isFalse(functionInstance.validate('-1.1'));
        assert.isFalse(functionInstance.validate('1.1'));
        assert.isFalse(functionInstance.validate('1'));
        assert.isFalse(functionInstance.validate('-1'));
        assert.isFalse(functionInstance.validate('0'));
        assert.isFalse(functionInstance.validate(' '));
        assert.isFalse(functionInstance.validate('   '));
        assert.isFalse(functionInstance.validate(0));
        assert.isFalse(functionInstance.validate(-0));
        assert.isFalse(functionInstance.validate(1));
        assert.isFalse(functionInstance.validate(-1));
        assert.isFalse(functionInstance.validate(0.0));
        assert.isFalse(functionInstance.validate(-0.0));
        assert.isFalse(functionInstance.validate(1.0));
        assert.isFalse(functionInstance.validate(-1.0));
        assert.isFalse(functionInstance.validate([]));
        assert.isFalse(functionInstance.validate({}));
        assert.isFalse(functionInstance.validate(new Array('foo')));
        assert.isFalse(functionInstance.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(functionInstance.validate(new Foo()));
    });

});
