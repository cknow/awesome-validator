import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Isrc } from '../../src/rules/isrc';

describe('Isrc', () => {

    let isrc: Isrc;

    beforeEach(() => {
        isrc = new Isrc();
    });

    it('is rule', () => {
        assert.instanceOf(isrc, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(isrc.validate('USAT29900609'));
        assert.isTrue(isrc.validate('GBAYE6800011'));
        assert.isTrue(isrc.validate('USRC15705223'));
        assert.isTrue(isrc.validate('USCA29500702'));
    });

    it('values is not valid', () => {
        assert.isFalse(isrc.validate(''));
        assert.isFalse(isrc.validate('USAT2990060'));
        assert.isFalse(isrc.validate('SRC15705223'));
        assert.isFalse(isrc.validate('US-CA29500702'));
        assert.isFalse(isrc.validate('USARC15705223'));
        assert.isFalse(isrc.validate(null));
        assert.isFalse(isrc.validate(undefined));
        assert.isFalse(isrc.validate(true));
        assert.isFalse(isrc.validate(false));
        assert.isFalse(isrc.validate([]));
        assert.isFalse(isrc.validate({}));
        assert.isFalse(isrc.validate(new Array('foo')));
        assert.isFalse(isrc.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(isrc.validate(new Foo()));
    });

});
