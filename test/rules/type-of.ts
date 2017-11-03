import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { TypeOf } from '../../src/rules/type-of';

describe('TypeOf', () => {

    it('is rule', () => {
        assert.instanceOf(new TypeOf(), AbstractRule);
    });

    it('is invalid pattern', () => {
        assert.throws(() => new TypeOf().validate('foo'), TypeError, 'Invalid RegExp.');
    });

    it('values is valid', () => {
        assert.isTrue(new TypeOf(/boolean/).validate(true));
        assert.isTrue(new TypeOf(/number/).validate(1));
        assert.isTrue(new TypeOf(/object/).validate({}));
        assert.isTrue(new TypeOf(/string/).validate('foo'));
    });

    it('values is not valid', () => {
        assert.isFalse(new TypeOf(/boolean/).validate('foo'));
        assert.isFalse(new TypeOf(/number/).validate({}));
        assert.isFalse(new TypeOf(/object/).validate(1));
        assert.isFalse(new TypeOf(/string/).validate(true));
    });

});
