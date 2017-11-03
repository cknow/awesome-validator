import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { RegexInstance } from '../../src/rules/regex-instance';

describe('RegexInstance', () => {

    let regexInstance: RegexInstance;

    beforeEach(() => {
        regexInstance = new RegexInstance();
    });

    it('is rule', () => {
        assert.instanceOf(regexInstance, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(regexInstance.validate(/^[a-z]/));
        assert.isTrue(regexInstance.validate(RegExp(/^[a-z]/)));
        assert.isTrue(regexInstance.validate(new RegExp(/^[a-z]/)));
    });

    it('values is not valid', () => {
        assert.isFalse(regexInstance.validate(Boolean()));
        assert.isFalse(regexInstance.validate(Number()));
        assert.isFalse(regexInstance.validate(String()));
        assert.isFalse(regexInstance.validate(null));
        assert.isFalse(regexInstance.validate(undefined));
        assert.isFalse(regexInstance.validate(false));
        assert.isFalse(regexInstance.validate(0));
        assert.isFalse(regexInstance.validate(0.0));
        assert.isFalse(regexInstance.validate(-0.0));
        assert.isFalse(regexInstance.validate(''));
        assert.isFalse(regexInstance.validate('0'));
        assert.isFalse(regexInstance.validate(' '));
        assert.isFalse(regexInstance.validate('   '));
        assert.isFalse(regexInstance.validate({}));
        assert.isFalse(regexInstance.validate([]));
        assert.isFalse(regexInstance.validate(new Array()));
        assert.isFalse(regexInstance.validate(new Object()));
        assert.isFalse(regexInstance.validate(Object.create(null)));
        assert.isFalse(regexInstance.validate(Boolean(true)));
        assert.isFalse(regexInstance.validate(Number(1)));
        assert.isFalse(regexInstance.validate(String('fooBar')));
        assert.isFalse(regexInstance.validate('foo'));
        assert.isFalse(regexInstance.validate({foo: 'bar'}));
        assert.isFalse(regexInstance.validate(['foo']));
        assert.isFalse(regexInstance.validate(true));
        assert.isFalse(regexInstance.validate(1));
        assert.isFalse(regexInstance.validate(-1));
        assert.isFalse(regexInstance.validate(1.0));
        assert.isFalse(regexInstance.validate(-1.0));
        assert.isFalse(regexInstance.validate(1));
        assert.isFalse(regexInstance.validate(1.0));
        assert.isFalse(regexInstance.validate(1.1));
        assert.isFalse(regexInstance.validate(new Array('foo')));
        assert.isFalse(regexInstance.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(regexInstance.validate(new Foo()));
    });

});
