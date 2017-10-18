import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { No } from '../../src/rules/no';

describe('No', () => {

    let no: No;

    beforeEach(() => {
        no = new No();
    });

    it('is rule', () => {
        assert.instanceOf(no, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(no.validate('N'));
        assert.isTrue(no.validate('Nay'));
        assert.isTrue(no.validate('Nix'));
        assert.isTrue(no.validate('No'));
        assert.isTrue(no.validate('Nope'));
        assert.isTrue(no.validate('Not'));
        assert.isTrue(no.validate('n'));
        assert.isTrue(no.validate('nay'));
        assert.isTrue(no.validate('nix'));
        assert.isTrue(no.validate('no'));
        assert.isTrue(no.validate('nope'));
        assert.isTrue(no.validate('not'));
    });

    it('values is not valid', () => {
        assert.isFalse(no.validate('Donnot'));
        assert.isFalse(no.validate('Never'));
        assert.isFalse(no.validate('Niet'));
        assert.isFalse(no.validate('Noooooooo'));
        assert.isFalse(no.validate('Não'));
    });

});
