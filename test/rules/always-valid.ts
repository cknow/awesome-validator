import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { AlwaysValid } from '../../src/rules/always-valid';

describe('AlwaysValid', () => {

    let alwaysValid: AlwaysValid;

    beforeEach(() => {
        alwaysValid = new AlwaysValid();
    });

    it('is rule', () => {
        assert.instanceOf(alwaysValid, AbstractRule);
    });

    it('always valid', () => {
        assert.isTrue(alwaysValid.validate(Boolean()));
        assert.isTrue(alwaysValid.validate(Number()));
        assert.isTrue(alwaysValid.validate(String()));
        assert.isTrue(alwaysValid.validate(null));
        assert.isTrue(alwaysValid.validate(undefined));
        assert.isTrue(alwaysValid.validate(false));
        assert.isTrue(alwaysValid.validate(0));
        assert.isTrue(alwaysValid.validate(0.0));
        assert.isTrue(alwaysValid.validate(-0.0));
        assert.isTrue(alwaysValid.validate(''));
        assert.isTrue(alwaysValid.validate('0'));
        assert.isTrue(alwaysValid.validate(' '));
        assert.isTrue(alwaysValid.validate('   '));
        assert.isTrue(alwaysValid.validate({}));
        assert.isTrue(alwaysValid.validate([]));
        assert.isTrue(alwaysValid.validate(new Array()));
        assert.isTrue(alwaysValid.validate(new Object()));
        assert.isTrue(alwaysValid.validate(Object.create(null)));
        assert.isTrue(alwaysValid.validate(Boolean(true)));
        assert.isTrue(alwaysValid.validate(Number(1)));
        assert.isTrue(alwaysValid.validate(String('fooBar')));
        assert.isTrue(alwaysValid.validate('foo'));
        assert.isTrue(alwaysValid.validate({foo: 'bar'}));
        assert.isTrue(alwaysValid.validate(['foo']));
        assert.isTrue(alwaysValid.validate(true));
        assert.isTrue(alwaysValid.validate(1));
        assert.isTrue(alwaysValid.validate(-1));
        assert.isTrue(alwaysValid.validate(1.0));
        assert.isTrue(alwaysValid.validate(-1.0));
        assert.isTrue(alwaysValid.validate(1));
        assert.isTrue(alwaysValid.validate(1.0));
        assert.isTrue(alwaysValid.validate(1.1));
        assert.isTrue(alwaysValid.validate(new Array('foo')));
        assert.isTrue(alwaysValid.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isTrue(alwaysValid.validate(new Foo()));
    });

});
