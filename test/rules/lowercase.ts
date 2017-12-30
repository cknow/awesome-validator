import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Lowercase } from '../../src/rules/lowercase';

describe('Lowercase', () => {

    let lowercase: Lowercase;

    beforeEach(() => {
        lowercase = new Lowercase();
    });

    it('is rule', () => {
        assert.instanceOf(lowercase, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(lowercase.validate(''));
        assert.isTrue(lowercase.validate('foo'));
    });

    it('values is not valid', () => {
        assert.isFalse(lowercase.validate(null));
        assert.isFalse(lowercase.validate(undefined));
        assert.isFalse(lowercase.validate(true));
        assert.isFalse(lowercase.validate(false));
        assert.isFalse(lowercase.validate('Foo'));
        assert.isFalse(lowercase.validate('fooBar'));
    });

});
