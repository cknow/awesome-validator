import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Issn } from '../../src/rules/issn';

describe('Issn', () => {

    let issn: Issn;

    beforeEach(() => {
        issn = new Issn();
    });

    it('is rule', () => {
        assert.instanceOf(issn, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Issn(true).validate('2434-561X'));
        assert.isTrue(new Issn(true).validate('2434561X'));
        assert.isTrue(new Issn(true).validate('0378-5955'));
        assert.isTrue(new Issn(true).validate('03785955'));
        assert.isTrue(new Issn(false, true).validate('2434-561X'));
        assert.isTrue(new Issn(false, true).validate('2434-561x'));
        assert.isTrue(new Issn(false, true).validate('0378-5955'));
        assert.isTrue(new Issn(true, true).validate('2434-561X'));
        assert.isTrue(new Issn(true, true).validate('0378-5955'));

        assert.isTrue(issn.validate('0378-5955'));
        assert.isTrue(issn.validate('0000-0000'));
        assert.isTrue(issn.validate('2434-561X'));
        assert.isTrue(issn.validate('2434-561x'));
        assert.isTrue(issn.validate('01896016'));
        assert.isTrue(issn.validate('20905076'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Issn(true).validate('2434-561x'));
        assert.isFalse(new Issn(true).validate('2434561x'));
        assert.isFalse(new Issn(false, true).validate('2434561X'));
        assert.isFalse(new Issn(false, true).validate('2434561x'));
        assert.isFalse(new Issn(false, true).validate('03785955'));
        assert.isFalse(new Issn(true, true).validate('2434-561x'));
        assert.isFalse(new Issn(true, true).validate('2434561X'));
        assert.isFalse(new Issn(true, true).validate('2434561x'));
        assert.isFalse(new Issn(true, true).validate('03785955'));

        assert.isFalse(issn.validate('0378-5954'));
        assert.isFalse(issn.validate('0000-0001'));
        assert.isFalse(issn.validate('0378-123'));
        assert.isFalse(issn.validate('037-1234'));
        assert.isFalse(issn.validate('0'));
        assert.isFalse(issn.validate('2434-561c'));
        assert.isFalse(issn.validate('1684-5370'));
        assert.isFalse(issn.validate('19960791'));
        assert.isFalse(issn.validate(''));
        assert.isFalse(issn.validate(null));
        assert.isFalse(issn.validate(undefined));
        assert.isFalse(issn.validate(true));
        assert.isFalse(issn.validate(false));
        assert.isFalse(issn.validate([]));
        assert.isFalse(issn.validate({}));
        assert.isFalse(issn.validate(new Array('foo')));
        assert.isFalse(issn.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(issn.validate(new Foo()));
    });

});
