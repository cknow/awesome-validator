import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Prnt } from '../../src/rules/prnt';

describe('Prnt', () => {

    let prnt: Prnt;

    beforeEach(() => {
        prnt = new Prnt();
    });

    it('is rule', () => {
        assert.instanceOf(prnt, AbstractRule);
    });

    it('values is valid with additional characters', () => {
        assert.isTrue(new Prnt('\t\n').validate('\t\n '));
        assert.isTrue(new Prnt('\v\r').validate('\v\r '));
    });

    it('values is valid', () => {
        assert.isTrue(prnt.validate(' '));
        assert.isTrue(prnt.validate('LKA#@%.54'));
        assert.isTrue(prnt.validate('foobar'));
        assert.isTrue(prnt.validate('16-50'));
        assert.isTrue(prnt.validate('123'));
        assert.isTrue(prnt.validate('foo bar'));
        assert.isTrue(prnt.validate('#$%&*_'));
    });

    it('values is not valid', () => {
        assert.isFalse(prnt.validate(''));
        assert.isFalse(prnt.validate(null));
        assert.isFalse(prnt.validate(undefined));
        assert.isFalse(prnt.validate(`foo${String.fromCharCode(7)}bar`));
        assert.isFalse(prnt.validate(`foo${String.fromCharCode(10)}bar`));
        assert.isFalse(prnt.validate(Boolean()));
        assert.isFalse(prnt.validate(Number()));
        assert.isFalse(prnt.validate(String()));
        assert.isFalse(prnt.validate(null));
        assert.isFalse(prnt.validate(undefined));
        assert.isFalse(prnt.validate([]));
        assert.isFalse(prnt.validate({}));
        assert.isFalse(prnt.validate(new Array('foo')));
        assert.isFalse(prnt.validate(new Object({foo: 'bar'})));
        class Foo {}
        assert.isFalse(prnt.validate(new Foo()));
    });

});
