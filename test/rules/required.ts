import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Required } from '../../src/rules/required';

describe('Required', () => {

    let required: Required;

    beforeEach(() => {
        required = new Required();
    });

    it('is rule', () => {
        assert.instanceOf(required, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(required.validate(Boolean(true)));
        assert.isTrue(required.validate(Number(1)));
        assert.isTrue(required.validate(String('fooBar')));
        assert.isTrue(required.validate('foo'));
        assert.isTrue(required.validate({foo: 'bar'}));
        assert.isTrue(required.validate(['foo']));
        assert.isTrue(required.validate(true));
        assert.isTrue(required.validate(1));
        assert.isTrue(required.validate(-1));
        assert.isTrue(required.validate(1.0));
        assert.isTrue(required.validate(-1.0));
        assert.isTrue(required.validate(1));
        assert.isTrue(required.validate(1.0));
        assert.isTrue(required.validate(1.1));
        assert.isTrue(required.validate(new Array('foo')));
        assert.isTrue(required.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isTrue(required.validate(new Foo()));
    });

    it('values is not valid', () => {
        assert.isFalse(required.validate(Boolean()));
        assert.isFalse(required.validate(Number()));
        assert.isFalse(required.validate(String()));
        assert.isFalse(required.validate(null));
        assert.isFalse(required.validate(undefined));
        assert.isFalse(required.validate(false));
        assert.isFalse(required.validate(0));
        assert.isFalse(required.validate(0.0));
        assert.isFalse(required.validate(-0.0));
        assert.isFalse(required.validate(''));
        assert.isFalse(required.validate('0'));
        assert.isFalse(required.validate(' '));
        assert.isFalse(required.validate('   '));
        assert.isFalse(required.validate({}));
        assert.isFalse(required.validate([]));
        assert.isFalse(required.validate(new Array()));
        assert.isFalse(required.validate(new Object()));
        assert.isFalse(required.validate(Object.create(null)));
    });

});
