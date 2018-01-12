import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { IntType } from '../../src/rules/int-type';
import { Key } from '../../src/rules/key';
import { StringType } from '../../src/rules/string-type';

describe('Key', () => {

    it('is rule', () => {
        assert.instanceOf(new Key(null), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Key(0).validate(['foo']));
        assert.isTrue(new Key(0, new StringType()).validate(['foo']));
        assert.isTrue(new Key('foo').validate({foo: 'bar'}));
        assert.isTrue(new Key('foo', new StringType()).validate({foo: 'bar'}));
        assert.isTrue(new Key('foo').validate(new Map<string, string>([['foo', 'bar']])));
        assert.isTrue(new Key('foo', new StringType()).validate(new Map<string, string>([['foo', 'bar']])));
        assert.isTrue(new Key(null, undefined, false).validate('foo'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Key('foo').validate(new Set('foo')));
        assert.isFalse(new Key('foo').validate({bar: 'foo'}));
        assert.isFalse(new Key('foo').validate([]));
        assert.isFalse(new Key('foo', new IntType()).validate(new Map<string, string>([['foo', 'bar']])));
        assert.isFalse(new Key(null).validate([]));
        assert.isFalse(new Key(null).validate(null));
        assert.isFalse(new Key(undefined).validate(undefined));
        assert.isFalse(new Key(0).validate(0));
    });

});
