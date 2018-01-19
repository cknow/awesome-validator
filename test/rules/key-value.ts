import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { KeyValue } from '../../src/rules/key-value';

describe('KeyValue', () => {

    it('is rule', () => {
        assert.instanceOf(new KeyValue('foo', 'alwaysValid', 'foo'), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new KeyValue('foo', 'equals', 'bar').validate({foo: 'foobar', bar: 'foobar'}));
        assert.isTrue(new KeyValue('foo', 'equals', 'bar').validate({foo: 10, bar: 10}));
    });

    it('values is not valid', () => {
        assert.isFalse(new KeyValue('invalidCompared', 'equals', 'bar').validate({foz: 'foobar', bar: 'foobar'}));
        assert.isFalse(new KeyValue('foo', 'invalidRule', 'bar').validate({foo: 'foobar', bar: 'foobar'}));
        assert.isFalse(new KeyValue('foo', 'equals', 'invalidBase').validate({foo: 'foobar', baz: 'foobar'}));
        assert.isFalse(new KeyValue('foo', 'equals', 'bar').validate({foo: 'foobar', bar: 'foobaz'}));
    });

});
