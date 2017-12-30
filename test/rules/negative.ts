import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Negative } from '../../src/rules/negative';

describe('Negative', () => {

    let negative: Negative;

    beforeEach(() => {
        negative = new Negative();
    });

    it('is rule', () => {
        assert.instanceOf(negative, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(negative.validate('-1.44'));
        assert.isTrue(negative.validate(-1e-5));
        assert.isTrue(negative.validate(-10));
    });

    it('values is not valid', () => {
        assert.isFalse(negative.validate(0));
        assert.isFalse(negative.validate(-0));
        assert.isFalse(negative.validate(''));
        assert.isFalse(negative.validate(null));
        assert.isFalse(negative.validate(undefined));
        assert.isFalse(negative.validate(true));
        assert.isFalse(negative.validate(false));
        assert.isFalse(negative.validate('a'));
        assert.isFalse(negative.validate('   '));
        assert.isFalse(negative.validate('Foo'));
        assert.isFalse(negative.validate(16));
        assert.isFalse(negative.validate('165'));
        assert.isFalse(negative.validate(123456));
        assert.isFalse(negative.validate(1e10));
    });

});
