import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { RegexType } from '../../src/rules/regex-type';

describe('Regex Type', () => {

    let regexType: RegexType;

    beforeEach(() => {
        regexType = new RegexType();
    });

    it('is rule', () => {
        assert.instanceOf(regexType, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(regexType.validate(/^[a-z]/));
        assert.isTrue(regexType.validate(RegExp(/^[a-z]/)));
        assert.isTrue(regexType.validate(new RegExp(/^[a-z]/)));
    });

    it('values is not valid', () => {
        assert.isFalse(regexType.validate(Boolean()));
        assert.isFalse(regexType.validate(Number()));
        assert.isFalse(regexType.validate(String()));
        assert.isFalse(regexType.validate(null));
        assert.isFalse(regexType.validate(undefined));
        assert.isFalse(regexType.validate(false));
        assert.isFalse(regexType.validate(0));
        assert.isFalse(regexType.validate(0.0));
        assert.isFalse(regexType.validate(-0.0));
        assert.isFalse(regexType.validate(''));
        assert.isFalse(regexType.validate('0'));
        assert.isFalse(regexType.validate(' '));
        assert.isFalse(regexType.validate('   '));
        assert.isFalse(regexType.validate({}));
        assert.isFalse(regexType.validate([]));
        assert.isFalse(regexType.validate(new Array()));
        assert.isFalse(regexType.validate(new Object()));
        assert.isFalse(regexType.validate(Object.create(null)));
        assert.isFalse(regexType.validate(Boolean(true)));
        assert.isFalse(regexType.validate(Number(1)));
        assert.isFalse(regexType.validate(String('fooBar')));
        assert.isFalse(regexType.validate('foo'));
        assert.isFalse(regexType.validate({foo: 'bar'}));
        assert.isFalse(regexType.validate(['foo']));
        assert.isFalse(regexType.validate(true));
        assert.isFalse(regexType.validate(1));
        assert.isFalse(regexType.validate(-1));
        assert.isFalse(regexType.validate(1.0));
        assert.isFalse(regexType.validate(-1.0));
        assert.isFalse(regexType.validate(1));
        assert.isFalse(regexType.validate(1.0));
        assert.isFalse(regexType.validate(1.1));
        assert.isFalse(regexType.validate(new Array('foo')));
        assert.isFalse(regexType.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(regexType.validate(new Foo()));
    });

});
