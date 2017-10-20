import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { PerfectSquare } from '../../src/rules/perfect-square';

describe('PerfectSquare', () => {

    let perfectSquare: PerfectSquare;

    beforeEach(() => {
        perfectSquare = new PerfectSquare();
    });

    it('is rule', () => {
        assert.instanceOf(perfectSquare, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(perfectSquare.validate(1));
        assert.isTrue(perfectSquare.validate(9));
        assert.isTrue(perfectSquare.validate(25));
        assert.isTrue(perfectSquare.validate('25'));
        assert.isTrue(perfectSquare.validate(400));
        assert.isTrue(perfectSquare.validate('400'));
        assert.isTrue(perfectSquare.validate('0'));
        assert.isTrue(perfectSquare.validate(81));
        assert.isTrue(perfectSquare.validate(0));
        assert.isTrue(perfectSquare.validate(2500));
    });

    it('values is not valid', () => {
        assert.isFalse(perfectSquare.validate(250));
        assert.isFalse(perfectSquare.validate(''));
        assert.isFalse(perfectSquare.validate(null));
        assert.isFalse(perfectSquare.validate(7));
        assert.isFalse(perfectSquare.validate(-1));
        assert.isFalse(perfectSquare.validate(6));
        assert.isFalse(perfectSquare.validate(2));
        assert.isFalse(perfectSquare.validate('-1'));
        assert.isFalse(perfectSquare.validate('a'));
        assert.isFalse(perfectSquare.validate(' '));
        assert.isFalse(perfectSquare.validate('Foo'));
    });

});
