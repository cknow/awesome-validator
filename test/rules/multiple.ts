import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Multiple } from '../../src/rules/multiple';

describe('Multiple', () => {

    it('is rule', () => {
        assert.instanceOf(new Multiple(0), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Multiple(0).validate(0));
        assert.isTrue(new Multiple(1).validate(0));
        assert.isTrue(new Multiple(1).validate(1));
        assert.isTrue(new Multiple(1).validate(2));
        assert.isTrue(new Multiple(1).validate(3));
        assert.isTrue(new Multiple(5).validate(0));
        assert.isTrue(new Multiple(5).validate(5));
        assert.isTrue(new Multiple(5).validate(10));
        assert.isTrue(new Multiple(5).validate(20));
        assert.isTrue(new Multiple(5).validate(500));
        assert.isTrue(new Multiple(5).validate(-5));
        assert.isTrue(new Multiple(5).validate(-10));
        assert.isTrue(new Multiple(5).validate(-500));
        assert.isTrue(new Multiple(1.5).validate(3));
        assert.isTrue(new Multiple(1.5).validate(6));
        assert.isTrue(new Multiple(1.5).validate('6'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Multiple(0).validate(1));
        assert.isFalse(new Multiple(0).validate(''));
        assert.isFalse(new Multiple(1).validate('a'));
        assert.isFalse(new Multiple(1).validate('foo'));
        assert.isFalse(new Multiple(5).validate(11));
        assert.isFalse(new Multiple(5).validate(3));
        assert.isFalse(new Multiple(5).validate(-1));
        assert.isFalse(new Multiple(3).validate(4));
        assert.isFalse(new Multiple(10).validate(-8));
        assert.isFalse(new Multiple(10).validate(57));
        assert.isFalse(new Multiple(10).validate(21));
        assert.isFalse(new Multiple(0).validate(1));
        assert.isFalse(new Multiple(0).validate(2));
        assert.isFalse(new Multiple(1.5).validate(4));
        assert.isFalse(new Multiple(1.5).validate(2));
        assert.isFalse(new Multiple(1.5).validate('2'));
    });

});
