import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { IntType } from '../../src/rules/int-type';
import { Key } from '../../src/rules/key';
import { StringType } from '../../src/rules/string-type';

describe('Key', () => {

    let key: Key;

    beforeEach(() => {
        key = new Key(null);
    });

    it('is rule', () => {
        assert.instanceOf(key, AbstractRule);
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
        assert.isFalse(new Key('foo').validate('foo'));
        assert.isFalse(new Key('foo').validate(new Set('foo')));
        assert.isFalse(new Key('foo').validate({bar: 'foo'}));
        assert.isFalse(new Key('foo').validate([]));
        assert.isFalse(new Key('foo', new IntType()).validate(new Map<string, string>([['foo', 'bar']])));

        assert.isFalse(key.validate(null));
        assert.isFalse(key.validate(undefined));
        assert.isFalse(key.validate({}));
        assert.isFalse(key.validate([]));
        assert.isFalse(key.validate('foo'));
        assert.isFalse(key.validate(0));
        assert.isFalse(key.validate(true));
        assert.isFalse(key.validate(false));
        assert.isFalse(key.validate(String('foo')));
        assert.isFalse(key.validate(Number(0)));
        assert.isFalse(key.validate(Boolean(true)));
        assert.isFalse(key.validate(Boolean(false)));
    });

});
