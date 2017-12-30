import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { AlwaysInvalid } from '../../src/rules/always-invalid';

describe('AlwaysInvalid', () => {

    let alwaysInvalid: AlwaysInvalid;

    beforeEach(() => {
        alwaysInvalid = new AlwaysInvalid();
    });

    it('is rule', () => {
        assert.instanceOf(alwaysInvalid, AbstractRule);
    });

    it('always valid', () => {
        assert.isFalse(alwaysInvalid.validate(Boolean()));
        assert.isFalse(alwaysInvalid.validate(Number()));
        assert.isFalse(alwaysInvalid.validate(String()));
        assert.isFalse(alwaysInvalid.validate(null));
        assert.isFalse(alwaysInvalid.validate(undefined));
        assert.isFalse(alwaysInvalid.validate(true));
        assert.isFalse(alwaysInvalid.validate(false));
        assert.isFalse(alwaysInvalid.validate(0));
        assert.isFalse(alwaysInvalid.validate(0.0));
        assert.isFalse(alwaysInvalid.validate(-0.0));
        assert.isFalse(alwaysInvalid.validate(''));
        assert.isFalse(alwaysInvalid.validate('0'));
        assert.isFalse(alwaysInvalid.validate(' '));
        assert.isFalse(alwaysInvalid.validate('   '));
        assert.isFalse(alwaysInvalid.validate({}));
        assert.isFalse(alwaysInvalid.validate([]));
        assert.isFalse(alwaysInvalid.validate(new Array()));
        assert.isFalse(alwaysInvalid.validate(new Object()));
        assert.isFalse(alwaysInvalid.validate(Object.create(null)));
        assert.isFalse(alwaysInvalid.validate(Boolean(true)));
        assert.isFalse(alwaysInvalid.validate(Number(1)));
        assert.isFalse(alwaysInvalid.validate(String('fooBar')));
        assert.isFalse(alwaysInvalid.validate('foo'));
        assert.isFalse(alwaysInvalid.validate({foo: 'bar'}));
        assert.isFalse(alwaysInvalid.validate(['foo']));
        assert.isFalse(alwaysInvalid.validate(1));
        assert.isFalse(alwaysInvalid.validate(-1));
        assert.isFalse(alwaysInvalid.validate(1.0));
        assert.isFalse(alwaysInvalid.validate(-1.0));
        assert.isFalse(alwaysInvalid.validate(1));
        assert.isFalse(alwaysInvalid.validate(1.0));
        assert.isFalse(alwaysInvalid.validate(1.1));
        assert.isFalse(alwaysInvalid.validate(new Array('foo')));
        assert.isFalse(alwaysInvalid.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(alwaysInvalid.validate(new Foo()));
    });

});
