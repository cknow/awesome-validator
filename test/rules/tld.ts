import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Tld } from '../../src/rules/tld';

describe('Tld', () => {

    let tld: Tld;

    beforeEach(() => {
        tld = new Tld();
    });

    it('is rule', () => {
        assert.instanceOf(tld, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(tld.validate('br'));
        assert.isTrue(tld.validate('cafe'));
        assert.isTrue(tld.validate('com'));
        assert.isTrue(tld.validate('democrat'));
        assert.isTrue(tld.validate('eu'));
        assert.isTrue(tld.validate('gmbh'));
        assert.isTrue(tld.validate('us'));
    });

    it('values is not valid', () => {
        assert.isFalse(tld.validate('1'));
        assert.isFalse(tld.validate(1.0));
        assert.isFalse(tld.validate('wrongtld'));
        assert.isFalse(tld.validate(null));
        assert.isFalse(tld.validate(undefined));
        assert.isFalse(tld.validate(true));
        assert.isFalse(tld.validate(false));
        assert.isFalse(tld.validate([]));
        assert.isFalse(tld.validate({}));
        assert.isFalse(tld.validate(new Array('foo')));
        assert.isFalse(tld.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(tld.validate(new Foo()));
    });

});
