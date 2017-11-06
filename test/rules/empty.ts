import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Empty } from '../../src/rules/empty';

describe('Empty', () => {

    let empty: Empty;

    beforeEach(() => {
        empty = new Empty();
    });

    it('is rule', () => {
        assert.instanceOf(empty, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(empty.validate('false'));
        assert.isTrue(empty.validate('FALSE'));
        assert.isTrue(empty.validate(Boolean()));
        assert.isTrue(empty.validate(Number()));
        assert.isTrue(empty.validate(String()));
        assert.isTrue(empty.validate(null));
        assert.isTrue(empty.validate(undefined));
        assert.isTrue(empty.validate(false));
        assert.isTrue(empty.validate(0));
        assert.isTrue(empty.validate(0.0));
        assert.isTrue(empty.validate(-0.0));
        assert.isTrue(empty.validate(''));
        assert.isTrue(empty.validate('0'));
        assert.isTrue(empty.validate(' '));
        assert.isTrue(empty.validate('   '));
        assert.isTrue(empty.validate({}));
        assert.isTrue(empty.validate([]));
        assert.isTrue(empty.validate(new Array()));
        assert.isTrue(empty.validate(new Object()));
        assert.isTrue(empty.validate(Object.create(null)));
    });

    it('values is not valid', () => {
        assert.isFalse(empty.validate(Boolean(true)));
        assert.isFalse(empty.validate(Number(1)));
        assert.isFalse(empty.validate(String('fooBar')));
        assert.isFalse(empty.validate('foo'));
        assert.isFalse(empty.validate({foo: 'bar'}));
        assert.isFalse(empty.validate(['foo']));
        assert.isFalse(empty.validate(true));
        assert.isFalse(empty.validate(1));
        assert.isFalse(empty.validate(-1));
        assert.isFalse(empty.validate(1.0));
        assert.isFalse(empty.validate(-1.0));
        assert.isFalse(empty.validate(1));
        assert.isFalse(empty.validate(1.0));
        assert.isFalse(empty.validate(1.1));
        assert.isFalse(empty.validate(new Array('foo')));
        assert.isFalse(empty.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(empty.validate(new Foo()));
    });

});
