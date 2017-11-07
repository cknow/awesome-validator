import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { NotOptional } from '../../src/rules/not-optional';

describe('NotOptional', () => {

    let notOptional: NotOptional;

    beforeEach(() => {
        notOptional = new NotOptional();
    });

    it('is rule', () => {
        assert.instanceOf(notOptional, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(notOptional.validate(Boolean()));
        assert.isTrue(notOptional.validate(Boolean(true)));
        assert.isTrue(notOptional.validate(Boolean(false)));
        assert.isTrue(notOptional.validate(Boolean('1')));
        assert.isTrue(notOptional.validate(Boolean('0')));
        assert.isTrue(notOptional.validate(true));
        assert.isTrue(notOptional.validate(false));
        assert.isTrue(notOptional.validate(Number()));
        assert.isTrue(notOptional.validate(undefined));
        assert.isTrue(notOptional.validate('true'));
        assert.isTrue(notOptional.validate('false'));
        assert.isTrue(notOptional.validate('-1.1'));
        assert.isTrue(notOptional.validate('1.1'));
        assert.isTrue(notOptional.validate('1'));
        assert.isTrue(notOptional.validate('-1'));
        assert.isTrue(notOptional.validate('0'));
        assert.isTrue(notOptional.validate(' '));
        assert.isTrue(notOptional.validate('   '));
        assert.isTrue(notOptional.validate(0));
        assert.isTrue(notOptional.validate(-0));
        assert.isTrue(notOptional.validate(1));
        assert.isTrue(notOptional.validate(-1));
        assert.isTrue(notOptional.validate(0.0));
        assert.isTrue(notOptional.validate(-0.0));
        assert.isTrue(notOptional.validate(1.0));
        assert.isTrue(notOptional.validate(-1.0));
        assert.isTrue(notOptional.validate(0.1));
        assert.isTrue(notOptional.validate(-0.1));
        assert.isTrue(notOptional.validate(1.1));
        assert.isTrue(notOptional.validate(-1.1));
        assert.isTrue(notOptional.validate([]));
        assert.isTrue(notOptional.validate({}));
        assert.isTrue(notOptional.validate(new Array('foo')));
        assert.isTrue(notOptional.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isTrue(notOptional.validate(new Foo()));
    });

    it('values is not valid', () => {
        assert.isFalse(notOptional.validate(''));
        assert.isFalse(notOptional.validate(null));
        assert.isFalse(notOptional.validate(String()));
    });

});
