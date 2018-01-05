import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { ObjectProperty } from '../../src/rules/object-property';

describe('ObjectProperty', () => {

    it('is rule', () => {
        assert.instanceOf(new ObjectProperty('foo'), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new ObjectProperty('foo').validate({foo: 'bar'}));
        assert.isTrue(new ObjectProperty('bar').validate({bar: 'foo'}));
        assert.isTrue(new ObjectProperty('foobar').validate({foobar: (): string => 'foobar'}));
    });

    it('values is not valid', () => {
        assert.isFalse(new ObjectProperty('foo').validate(null));
        assert.isFalse(new ObjectProperty('foo').validate(undefined));
        assert.isFalse(new ObjectProperty('foo').validate({}));
        assert.isFalse(new ObjectProperty('foo').validate({bar: 'foo'}));
    });

});
