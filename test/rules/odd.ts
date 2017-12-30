import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Odd } from '../../src/rules/odd';

describe('Odd', () => {

    let odd: Odd;

    beforeEach(() => {
        odd = new Odd();
    });

    it('is rule', () => {
        assert.instanceOf(odd, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(odd.validate(-5));
        assert.isTrue(odd.validate(-1));
        assert.isTrue(odd.validate(1));
        assert.isTrue(odd.validate(13));
        assert.isTrue(odd.validate(165));
        assert.isTrue(odd.validate(1));
        assert.isTrue(odd.validate('1'));
        assert.isTrue(odd.validate(165.0));
    });

    it('values is not valid', () => {
        assert.isFalse(odd.validate(''));
        assert.isFalse(odd.validate(-2));
        assert.isFalse(odd.validate(-0));
        assert.isFalse(odd.validate(0));
        assert.isFalse(odd.validate(32));
        assert.isFalse(odd.validate(1.1));
        assert.isFalse(odd.validate(-1.1));
        assert.isFalse(odd.validate('0.2'));
        assert.isFalse(odd.validate('.2'));
        assert.isFalse(odd.validate('-.2'));
        assert.isFalse(odd.validate('165.7'));
        assert.isFalse(odd.validate(''));
        assert.isFalse(odd.validate(null));
        assert.isFalse(odd.validate(undefined));
        assert.isFalse(odd.validate(true));
        assert.isFalse(odd.validate(false));
        assert.isFalse(odd.validate('a'));
        assert.isFalse(odd.validate(' '));
        assert.isFalse(odd.validate('Foo'));
        assert.isFalse(odd.validate('19347e12'));
        assert.isFalse(odd.validate(1e12));
    });

});
