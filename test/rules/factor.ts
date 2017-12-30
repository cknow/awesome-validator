import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Factor } from '../../src/rules/factor';

describe('Factor', () => {

    it('is rule', () => {
        assert.instanceOf(new Factor(0), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Factor(1).validate('1'));
        assert.isTrue(new Factor(6).validate('1'));
        assert.isTrue(new Factor(1).validate(1));
        assert.isTrue(new Factor(2).validate(1));
        assert.isTrue(new Factor(2).validate(2));
        assert.isTrue(new Factor(3).validate(1));
        assert.isTrue(new Factor(3).validate(3));
        assert.isTrue(new Factor(4).validate(1));
        assert.isTrue(new Factor(4).validate(2));
        assert.isTrue(new Factor(4).validate(4));
        assert.isTrue(new Factor(5).validate(1));
        assert.isTrue(new Factor(5).validate(5));
        assert.isTrue(new Factor(6).validate(1));
        assert.isTrue(new Factor(6).validate(2));
        assert.isTrue(new Factor(6).validate(3));
        assert.isTrue(new Factor(6).validate(6));
        assert.isTrue(new Factor(0).validate(0));
        assert.isTrue(new Factor(0).validate(1));
    });

    it('values is not valid', () => {
        assert.isFalse(new Factor(1).validate(1.1));
        assert.isFalse(new Factor(1).validate(-1.1));
        assert.isFalse(new Factor(1).validate('0.2'));
        assert.isFalse(new Factor(1).validate('.2'));
        assert.isFalse(new Factor(1).validate('-.2'));
        assert.isFalse(new Factor(1).validate('165.7'));
        assert.isFalse(new Factor(1).validate(''));
        assert.isFalse(new Factor(1).validate(null));
        assert.isFalse(new Factor(1).validate('a'));
        assert.isFalse(new Factor(1).validate(' '));
        assert.isFalse(new Factor(1).validate('Foo'));
        assert.isFalse(new Factor(3).validate(2));
        assert.isFalse(new Factor(4).validate(3));
        assert.isFalse(new Factor(5).validate(2));
        assert.isFalse(new Factor(5).validate(3));
        assert.isFalse(new Factor(5).validate(4));
        assert.isFalse(new Factor(1).validate(0));
        assert.isFalse(new Factor(2).validate(0));
        assert.isFalse(new Factor(0.5).validate(null));
        assert.isFalse(new Factor(1.5).validate(null));
        assert.isFalse(new Factor(-0.5).validate(null));
        assert.isFalse(new Factor(-1.5).validate(null));
        assert.isFalse(new Factor(-1.5).validate(undefined));
        assert.isFalse(new Factor(-1.5).validate(false));
        assert.isFalse(new Factor(Number.MAX_SAFE_INTEGER + 1).validate(null));
    });

});
