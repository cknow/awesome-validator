import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Uppercase } from '../../src/rules/uppercase';

describe('Uppercase', () => {

    let uppercase: Uppercase;

    beforeEach(() => {
        uppercase = new Uppercase();
    });

    it('is rule', () => {
        assert.instanceOf(uppercase, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(uppercase.validate(''));
        assert.isTrue(uppercase.validate('FOO'));
    });

    it('values is not valid', () => {
        assert.isFalse(uppercase.validate('Foo'));
        assert.isFalse(uppercase.validate('fooBar'));
    });

});
