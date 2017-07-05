import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Regex } from '../../src/rules/regex';

describe('Regex', () => {

    it('is rule', () => {
        assert.instanceOf(new Regex(/^[0-9]/), AbstractRule);
    });

    it('is invalid pattern', () => {
        assert.throws(() => new Regex().validate('a'), TypeError, 'Invalid RegExp.');
    });

    it('values is valid', () => {
        assert.isTrue(new Regex(/^[0-9]/).validate(0));
        assert.isTrue(new Regex(/^[a-z]/).validate('a'));
        assert.isTrue(new Regex(/^[a-z]/).validate(true));
    });

    it('values is not valid', () => {
        assert.isFalse(new Regex(/^[0-9]/).validate('a'));
        assert.isFalse(new Regex(/^[a-z]/).validate(0));
        assert.isFalse(new Regex(/^/).validate([]));
        assert.isFalse(new Regex(/^/).validate(new Array()));
        assert.isFalse(new Regex(/^/).validate({}));
        assert.isFalse(new Regex(/^/).validate(Object()));
        assert.isFalse(new Regex(/^/).validate(new Object()));
    });

});
