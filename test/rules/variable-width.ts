import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { VariableWidth } from '../../src/rules/variable-width';

describe('VariableWidth', () => {

    let variableWidth: VariableWidth;

    beforeEach(() => {
        variableWidth = new VariableWidth();
    });

    it('is rule', () => {
        assert.instanceOf(variableWidth, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(variableWidth.validate('ひらがなカタカナ漢字ABCDE'));
        assert.isTrue(variableWidth.validate('３ー０123'));
        assert.isTrue(variableWidth.validate('Ｆｶﾀｶﾅﾞﾬ'));
        assert.isTrue(variableWidth.validate('Good＝Parts'));
    });

    it('values is not valid', () => {
        assert.isFalse(variableWidth.validate('abc'));
        assert.isFalse(variableWidth.validate('abc123'));
        assert.isFalse(variableWidth.validate('!"#$%&()<>/+=-_? ~^|.,@`{}[]'));
        assert.isFalse(variableWidth.validate('ひらがな・カタカナ、．漢字'));
        assert.isFalse(variableWidth.validate('１２３４５６'));
        assert.isFalse(variableWidth.validate('ｶﾀｶﾅﾞﾬ'));
        assert.isFalse(variableWidth.validate(Boolean()));
        assert.isFalse(variableWidth.validate(Number()));
        assert.isFalse(variableWidth.validate(String()));
        assert.isFalse(variableWidth.validate(null));
        assert.isFalse(variableWidth.validate(undefined));
        assert.isFalse(variableWidth.validate(true));
        assert.isFalse(variableWidth.validate(false));
        assert.isFalse(variableWidth.validate(0));
        assert.isFalse(variableWidth.validate(0.0));
        assert.isFalse(variableWidth.validate(-0.0));
        assert.isFalse(variableWidth.validate(''));
        assert.isFalse(variableWidth.validate('0'));
        assert.isFalse(variableWidth.validate(' '));
        assert.isFalse(variableWidth.validate('   '));
        assert.isFalse(variableWidth.validate({}));
        assert.isFalse(variableWidth.validate(new Object()));
        assert.isFalse(variableWidth.validate(Object.create(null)));
        assert.isFalse(variableWidth.validate(Boolean(true)));
        assert.isFalse(variableWidth.validate(Number(1)));
        assert.isFalse(variableWidth.validate(String('fooBar')));
        assert.isFalse(variableWidth.validate('foo'));
        assert.isFalse(variableWidth.validate({foo: 'bar'}));
        assert.isFalse(variableWidth.validate(1));
        assert.isFalse(variableWidth.validate(-1));
        assert.isFalse(variableWidth.validate(1.0));
        assert.isFalse(variableWidth.validate(-1.0));
        assert.isFalse(variableWidth.validate(1));
        assert.isFalse(variableWidth.validate(1.0));
        assert.isFalse(variableWidth.validate(1.1));
        assert.isFalse(variableWidth.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(variableWidth.validate(new Foo()));
    });

});
