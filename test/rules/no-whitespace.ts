import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { NoWhitespace } from '../../src/rules/no-whitespace';

describe('NoWhitespace', () => {

    let noWhitespace: NoWhitespace;

    beforeEach(() => {
        noWhitespace = new NoWhitespace();
    });

    it('is rule', () => {
        assert.instanceOf(noWhitespace, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(noWhitespace.validate(''));
        assert.isTrue(noWhitespace.validate(null));
        assert.isTrue(noWhitespace.validate(undefined));
        assert.isTrue(noWhitespace.validate(0));
        assert.isTrue(noWhitespace.validate('wpoiur'));
        assert.isTrue(noWhitespace.validate('Foo'));

    });

    it('values is not valid', () => {
        assert.isFalse(noWhitespace.validate(' '));
        assert.isFalse(noWhitespace.validate('w poiur'));
        assert.isFalse(noWhitespace.validate('      '));
        assert.isFalse(noWhitespace.validate('Foo\nBar'));
        assert.isFalse(noWhitespace.validate('Foo\tBar'));
        assert.isFalse(noWhitespace.validate([]));
        assert.isFalse(noWhitespace.validate({}));
        assert.isFalse(noWhitespace.validate(new Array('foo')));
        assert.isFalse(noWhitespace.validate(new Object({foo: 'bar'})));
    });

});
