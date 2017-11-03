import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { StringInstance } from '../../src/rules/string-instance';

describe('StringInstance', () => {

    let stringInstance: StringInstance;

    beforeEach(() => {
        stringInstance = new StringInstance();
    });

    it('is rule', () => {
        assert.instanceOf(stringInstance, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(stringInstance.validate(String()));
        assert.isTrue(stringInstance.validate(String('')));
        assert.isTrue(stringInstance.validate(String('   ')));
        assert.isTrue(stringInstance.validate(String('foo')));
        assert.isTrue(stringInstance.validate(''));
        assert.isTrue(stringInstance.validate('   '));
        assert.isTrue(stringInstance.validate('foo'));
    });

    it('values is not valid', () => {
        assert.isFalse(stringInstance.validate(Boolean()));
        assert.isFalse(stringInstance.validate(Number()));
        assert.isFalse(stringInstance.validate(null));
        assert.isFalse(stringInstance.validate(undefined));
        assert.isFalse(stringInstance.validate(true));
        assert.isFalse(stringInstance.validate(false));
        assert.isFalse(stringInstance.validate(0));
        assert.isFalse(stringInstance.validate(-0));
        assert.isFalse(stringInstance.validate(1));
        assert.isFalse(stringInstance.validate(-1));
        assert.isFalse(stringInstance.validate(0.0));
        assert.isFalse(stringInstance.validate(-0.0));
        assert.isFalse(stringInstance.validate(1.0));
        assert.isFalse(stringInstance.validate(-1.0));
        assert.isFalse(stringInstance.validate(0.1));
        assert.isFalse(stringInstance.validate(-0.1));
        assert.isFalse(stringInstance.validate(1.1));
        assert.isFalse(stringInstance.validate(-1.1));
        assert.isFalse(stringInstance.validate([]));
        assert.isFalse(stringInstance.validate({}));
        assert.isFalse(stringInstance.validate(new Array('foo')));
        assert.isFalse(stringInstance.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(stringInstance.validate(new Foo()));
    });

});
