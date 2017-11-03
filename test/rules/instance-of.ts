import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { InstanceOf } from '../../src/rules/instance-of';

describe('InstanceOf', () => {

    it('is rule', () => {
        assert.instanceOf(new InstanceOf(), AbstractRule);
    });

    it('is invalid pattern', () => {
        assert.throws(() => new InstanceOf().validate('foo'), TypeError, 'Invalid instance name.');
        assert.throws(() => new InstanceOf(null).validate('foo'), TypeError, 'Invalid instance name.');
    });

    it('values is valid', () => {
        assert.isTrue(new InstanceOf(Array).validate([]));
        assert.isTrue(new InstanceOf(Object).validate({}));
        assert.isTrue(new InstanceOf(RegExp).validate(/foo/));
    });

    it('values is not valid', () => {
        assert.isFalse(new InstanceOf(Array).validate(/foo/));
        assert.isFalse(new InstanceOf(Object).validate(null));
        assert.isFalse(new InstanceOf(RegExp).validate({}));
    });

});
