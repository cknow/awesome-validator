import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { NotEmpty } from '../../src/rules/not-empty';

describe('NotEmpty', () => {

    let notEmpty: NotEmpty;

    beforeEach(() => {
        notEmpty = new NotEmpty();
    });

    it('is rule', () => {
        assert.instanceOf(notEmpty, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(notEmpty.validate(Boolean(true)));
        assert.isTrue(notEmpty.validate(Number(1)));
        assert.isTrue(notEmpty.validate(String('fooBar')));
        assert.isTrue(notEmpty.validate('foo'));
        assert.isTrue(notEmpty.validate({foo: 'bar'}));
        assert.isTrue(notEmpty.validate(['foo']));
        assert.isTrue(notEmpty.validate(true));
        assert.isTrue(notEmpty.validate(1));
        assert.isTrue(notEmpty.validate(-1));
        assert.isTrue(notEmpty.validate(1.0));
        assert.isTrue(notEmpty.validate(-1.0));
        assert.isTrue(notEmpty.validate(1));
        assert.isTrue(notEmpty.validate(1.0));
        assert.isTrue(notEmpty.validate(1.1));
        assert.isTrue(notEmpty.validate(new Array('foo')));
        assert.isTrue(notEmpty.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isTrue(notEmpty.validate(new Foo()));
    });

    it('values is not valid', () => {
        assert.isFalse(notEmpty.validate(Boolean()));
        assert.isFalse(notEmpty.validate(Number()));
        assert.isFalse(notEmpty.validate(String()));
        assert.isFalse(notEmpty.validate(null));
        assert.isFalse(notEmpty.validate(undefined));
        assert.isFalse(notEmpty.validate(false));
        assert.isFalse(notEmpty.validate(0));
        assert.isFalse(notEmpty.validate(0.0));
        assert.isFalse(notEmpty.validate(-0.0));
        assert.isFalse(notEmpty.validate(''));
        assert.isFalse(notEmpty.validate('0'));
        assert.isFalse(notEmpty.validate(' '));
        assert.isFalse(notEmpty.validate('   '));
        assert.isFalse(notEmpty.validate({}));
        assert.isFalse(notEmpty.validate([]));
        assert.isFalse(notEmpty.validate(new Array()));
        assert.isFalse(notEmpty.validate(new Object()));
        assert.isFalse(notEmpty.validate(Object.create(null)));
    });

});
