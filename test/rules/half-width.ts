import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { HalfWidth } from '../../src/rules/half-width';

describe('HalfWidth', () => {

    let halfWidth: HalfWidth;

    beforeEach(() => {
        halfWidth = new HalfWidth();
    });

    it('is rule', () => {
        assert.instanceOf(halfWidth, AbstractRule);
    });

    it('values is valid with additional characters', () => {
        assert.isTrue(new HalfWidth('!@#$%^&*(){}').validate('!@#$%^&*(){} abc'));
        assert.isTrue(new HalfWidth('[]?+=/\\-_|"\',<>.').validate('[]?+=/\\-_|"\',<>. \t \n abc'));
        assert.isTrue(new HalfWidth(undefined).validate('ｶﾀｶﾅﾞﾬ￩'));
    });

    it('values is valid', () => {
        assert.isTrue(halfWidth.validate('!"#$%&()<>/+=-_? ~^|.,@`{}[]'));
        assert.isTrue(halfWidth.validate('l-btn_02--active'));
        assert.isTrue(halfWidth.validate('abc123い'));
        assert.isTrue(halfWidth.validate('ｶﾀｶﾅﾞﾬ￩'));
    });

    it('values is not valid', () => {
        assert.isFalse(halfWidth.validate('あいうえお'));
        assert.isFalse(halfWidth.validate('００１１'));
    });

});
