import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { InstanceOf } from '../../src/rules/instance-of';

describe('InstanceOf', () => {

    it('is rule', () => {
        assert.instanceOf(new InstanceOf(null), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new InstanceOf(Array).validate([]));
        assert.isTrue(new InstanceOf(Object).validate({}));
        assert.isTrue(new InstanceOf(RegExp).validate(/foo/));
    });

    it('values is not valid', () => {
        assert.isFalse(new InstanceOf(Array).validate(/foo/));
        assert.isFalse(new InstanceOf(Object).validate(null));
        assert.isFalse(new InstanceOf(Object).validate(undefined));
        assert.isFalse(new InstanceOf(Object).validate(false));
        assert.isFalse(new InstanceOf(RegExp).validate({}));
    });

});
