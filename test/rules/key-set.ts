import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { AllOf } from '../../src/rules/all-of';
import { Key } from '../../src/rules/key';
import { KeySet } from '../../src/rules/key-set';
import { StringType } from '../../src/rules/string-type';

describe('KeySet', () => {

    it('is rule', () => {
        assert.instanceOf(new KeySet(), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new KeySet(new Key('foo')).validate({foo: 'foobar'}));
        assert.isTrue(new KeySet(new AllOf(new Key('foo'))).validate({foo: 'foobar'}));
        assert.isTrue(new KeySet(new Key('foo')).validate(new Map<string, string>([['foo', 'bar']])));
        assert.isTrue(new KeySet(new Key('bar', undefined, false)).validate({foo: 'foobar'}));
    });

    it('values is not valid', () => {
        assert.isFalse(new KeySet(new Key('foo')).validate({bar: 'foobar'}));
        assert.isFalse(new KeySet(new StringType()).validate({bar: 'foobar'}));
        assert.isFalse(new KeySet(new Key('foo')).validate(new Map<string, string>()));
        assert.isFalse(new KeySet().validate({bar: 'foobar'}));
    });

});
