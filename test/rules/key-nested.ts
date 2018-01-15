import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { KeyNested } from '../../src/rules/key-nested';

describe('KeyNested', () => {

    let keyNested: KeyNested;

    beforeEach(() => {
        keyNested = new KeyNested(null);
    });

    it('is rule', () => {
        assert.instanceOf(keyNested, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new KeyNested('foo.bar').validate({foo: {bar: 'foobar'}}));
        assert.isTrue(new KeyNested('foo.bar.').validate({foo: {bar: 'foobar'}}));
        assert.isTrue(new KeyNested('foo.bar').validate(
            new Map<string, Map<string, string>>([['foo', new Map<string, string>([['bar', 'foobar']])]])
        ));
        assert.isTrue(new KeyNested('foo.bar.').validate(
            new Map<string, Map<string, string>>([['foo', new Map<string, string>([['bar', 'foobar']])]])
        ));
    });

    it('values is not valid', () => {
        assert.isFalse(new KeyNested('foo.*').validate({}));
        assert.isFalse(new KeyNested('bar').validate({}));

        assert.isFalse(keyNested.validate(null));
        assert.isFalse(keyNested.validate(undefined));
        assert.isFalse(keyNested.validate({}));
        assert.isFalse(keyNested.validate([]));
        assert.isFalse(keyNested.validate('foo'));
        assert.isFalse(keyNested.validate(0));
        assert.isFalse(keyNested.validate(true));
        assert.isFalse(keyNested.validate(false));
        assert.isFalse(keyNested.validate(String('foo')));
        assert.isFalse(keyNested.validate(Number(0)));
        assert.isFalse(keyNested.validate(Boolean(true)));
        assert.isFalse(keyNested.validate(Boolean(false)));
    });

});
