import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Domain } from '../../src/rules/domain';

describe('Domain', () => {

    let domain: Domain;

    beforeEach(() => {
        domain = new Domain();
    });

    it('is rule', () => {
        assert.instanceOf(domain, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(domain.validate('example.com'));
        assert.isTrue(domain.validate('foo.example.com'));
        assert.isTrue(domain.validate('bar.foo.example.com'));
        assert.isTrue(domain.validate('exa-mple.co.uk'));
        assert.isTrue(domain.validate('a.com'));

        assert.isTrue(new Domain(false).validate('a.b'));
        assert.isTrue(new Domain(false).validate('foo.bar.baz'));
        assert.isTrue(new Domain(false).validate('foo-bar.ba-z.qux'));
        assert.isTrue(new Domain(false).validate('hello.world'));

        assert.isTrue(new Domain(true, true).validate('do_main.com'));
        assert.isTrue(new Domain(true, false, true).validate('dom.com.'));
        assert.isTrue(new Domain(true, true, true).validate('a.doma_in.co.'));
    });

    it('values is not valid', () => {
        assert.isFalse(domain.validate('bar.q-ux'));
        assert.isFalse(domain.validate('exa_mple.com'));
        assert.isFalse(domain.validate('example'));
        assert.isFalse(domain.validate('ex*mple.com'));
        assert.isFalse(domain.validate('@#$@#$%fd'));
        assert.isFalse(domain.validate('_example.com'));
        assert.isFalse(domain.validate('-example.com'));
        assert.isFalse(domain.validate('foo._example.com'));
        assert.isFalse(domain.validate('foo.-example.com'));
        assert.isFalse(domain.validate('foo.example-.co.uk'));
        assert.isFalse(domain.validate('example-.com'));
        assert.isFalse(domain.validate('example_.com'));
        assert.isFalse(domain.validate('foo.example-.com'));
        assert.isFalse(domain.validate('foo.example_.com'));
        assert.isFalse(domain.validate('example.com-'));
        assert.isFalse(domain.validate('example.com_'));

        assert.isFalse(domain.validate(Boolean()));
        assert.isFalse(domain.validate(Number()));
        assert.isFalse(domain.validate(null));
        assert.isFalse(domain.validate(undefined));
        assert.isFalse(domain.validate(true));
        assert.isFalse(domain.validate(false));
        assert.isFalse(domain.validate(0));
        assert.isFalse(domain.validate(-0));
        assert.isFalse(domain.validate(1));
        assert.isFalse(domain.validate(-1));
        assert.isFalse(domain.validate(0.0));
        assert.isFalse(domain.validate(-0.0));
        assert.isFalse(domain.validate(1.0));
        assert.isFalse(domain.validate(-1.0));
        assert.isFalse(domain.validate(0.1));
        assert.isFalse(domain.validate(-0.1));
        assert.isFalse(domain.validate(1.1));
        assert.isFalse(domain.validate(-1.1));
        assert.isFalse(domain.validate([]));
        assert.isFalse(domain.validate({}));
        assert.isFalse(domain.validate(new Array('foo')));
        assert.isFalse(domain.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(domain.validate(new Foo()));
    });

});
