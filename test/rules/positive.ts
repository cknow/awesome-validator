import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Positive } from '../../src/rules/positive';

describe('Positive', () => {

    let positive: Positive;

    beforeEach(() => {
        positive = new Positive();
    });

    it('is rule', () => {
        assert.instanceOf(positive, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(positive.validate(16));
        assert.isTrue(positive.validate('165'));
        assert.isTrue(positive.validate(12345));
        assert.isTrue(positive.validate(1e10));
    });

    it('values is not valid', () => {
        assert.isFalse(positive.validate(0));
        assert.isFalse(positive.validate(-0));
        assert.isFalse(positive.validate(''));
        assert.isFalse(positive.validate(null));
        assert.isFalse(positive.validate(undefined));
        assert.isFalse(positive.validate(true));
        assert.isFalse(positive.validate(false));
        assert.isFalse(positive.validate('a'));
        assert.isFalse(positive.validate('   '));
        assert.isFalse(positive.validate('Foo'));
        assert.isFalse(positive.validate('-1.44'));
        assert.isFalse(positive.validate(-1e-5));
        assert.isFalse(positive.validate(-10));
    });

});
