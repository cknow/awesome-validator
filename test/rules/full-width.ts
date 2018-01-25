import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { FullWidth } from '../../src/rules/full-width';

describe('FullWidth', () => {

    let fullWidth: FullWidth;

    beforeEach(() => {
        fullWidth = new FullWidth();
    });

    it('is rule', () => {
        assert.instanceOf(fullWidth, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(fullWidth.validate('ひらがな・カタカナ、．漢字'));
        assert.isTrue(fullWidth.validate('３ー０ ａ＠ｃｏｍ'));
        assert.isTrue(fullWidth.validate('Ｆｶﾀｶﾅﾞﾬ'));
        assert.isTrue(fullWidth.validate('Good＝Parts'));
    });

    it('values is not valid', () => {
        assert.isFalse(fullWidth.validate('abc'));
        assert.isFalse(fullWidth.validate('abc123'));
        assert.isFalse(fullWidth.validate('!"#$%&()<>/+=-_? ~^|.,@`{}[]'));
        assert.isFalse(fullWidth.validate(Boolean()));
        assert.isFalse(fullWidth.validate(Number()));
        assert.isFalse(fullWidth.validate(String()));
        assert.isFalse(fullWidth.validate(null));
        assert.isFalse(fullWidth.validate(undefined));
        assert.isFalse(fullWidth.validate(true));
        assert.isFalse(fullWidth.validate(false));
        assert.isFalse(fullWidth.validate(0));
        assert.isFalse(fullWidth.validate(0.0));
        assert.isFalse(fullWidth.validate(-0.0));
        assert.isFalse(fullWidth.validate(''));
        assert.isFalse(fullWidth.validate('0'));
        assert.isFalse(fullWidth.validate(' '));
        assert.isFalse(fullWidth.validate('   '));
        assert.isFalse(fullWidth.validate({}));
        assert.isFalse(fullWidth.validate(new Object()));
        assert.isFalse(fullWidth.validate(Object.create(null)));
        assert.isFalse(fullWidth.validate(Boolean(true)));
        assert.isFalse(fullWidth.validate(Number(1)));
        assert.isFalse(fullWidth.validate(String('fooBar')));
        assert.isFalse(fullWidth.validate('foo'));
        assert.isFalse(fullWidth.validate({foo: 'bar'}));
        assert.isFalse(fullWidth.validate(1));
        assert.isFalse(fullWidth.validate(-1));
        assert.isFalse(fullWidth.validate(1.0));
        assert.isFalse(fullWidth.validate(-1.0));
        assert.isFalse(fullWidth.validate(1));
        assert.isFalse(fullWidth.validate(1.0));
        assert.isFalse(fullWidth.validate(1.1));
        assert.isFalse(fullWidth.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(fullWidth.validate(new Foo()));
    });

});
