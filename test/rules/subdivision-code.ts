import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { SubdivisionCode } from '../../src/rules/subdivision-code';

describe('SubdivisionCode', () => {

    it('is rule', () => {
        assert.instanceOf(new SubdivisionCode('countryCode'), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new SubdivisionCode('br').validate('SP'));
        assert.isTrue(new SubdivisionCode('br', false).validate('sp'));
        assert.isTrue(new SubdivisionCode('BR').validate('SP'));
        assert.isTrue(new SubdivisionCode('BR', false).validate('sp'));
        assert.isTrue(new SubdivisionCode('us').validate('NY'));
        assert.isTrue(new SubdivisionCode('us', false).validate('ny'));
        assert.isTrue(new SubdivisionCode('US').validate('NY'));
        assert.isTrue(new SubdivisionCode('US', false).validate('ny'));
    });

    it('values is not valid', () => {
        assert.isFalse(new SubdivisionCode('br').validate('sp'));
        assert.isFalse(new SubdivisionCode('br', false).validate('subdivisionCode'));
        assert.isFalse(new SubdivisionCode('BR').validate('sp'));
        assert.isFalse(new SubdivisionCode('BR', false).validate('subdivisionCode'));
        assert.isFalse(new SubdivisionCode('us').validate('ny'));
        assert.isFalse(new SubdivisionCode('us', false).validate('subdivisionCode'));
        assert.isFalse(new SubdivisionCode('US').validate('ny'));
        assert.isFalse(new SubdivisionCode('US', false).validate('subdivisionCode'));
    });

    it('values is not valid with invalid country code', () => {
        assert.isFalse(new SubdivisionCode('countryCode').validate(null));
        assert.isFalse(new SubdivisionCode('countryCode').validate('foo'));
    });

});
