import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { SubdivisionCode } from '../../src/rules/subdivision-code';

describe('SubdivisionCode', () => {

    it('is rule', () => {
        assert.instanceOf(new SubdivisionCode(), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new SubdivisionCode('br').validate('SP'));
        assert.isTrue(new SubdivisionCode('br').validate('sp'));
        assert.isTrue(new SubdivisionCode('BR').validate('SP'));
        assert.isTrue(new SubdivisionCode('BR').validate('sp'));
        assert.isTrue(new SubdivisionCode('us').validate('NY'));
        assert.isTrue(new SubdivisionCode('us').validate('ny'));
        assert.isTrue(new SubdivisionCode('US').validate('NY'));
        assert.isTrue(new SubdivisionCode('US').validate('ny'));
    });

    it('values is not valid', () => {
        assert.isFalse(new SubdivisionCode('br').validate('foo'));
        assert.isFalse(new SubdivisionCode('BR').validate('foo'));
        assert.isFalse(new SubdivisionCode('us').validate('foo'));
        assert.isFalse(new SubdivisionCode('US').validate('foo'));
    });

    it('values is not valid with invalid country code', () => {
        assert.isFalse(new SubdivisionCode().validate('foo'));
    });

});
