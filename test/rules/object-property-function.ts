import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { ObjectPropertyFunction } from '../../src/rules/object-property-function';

describe('ObjectPropertyFunction', () => {

    it('is rule', () => {
        assert.instanceOf(new ObjectPropertyFunction('foo'), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new ObjectPropertyFunction('foo').validate({foo: (): string => 'foobar'}));
        assert.isTrue(new ObjectPropertyFunction('foo').validate({foo: (): number => 0}));
        assert.isTrue(new ObjectPropertyFunction('foo').validate({foo: (): boolean => true}));
    });

    it('values is not valid', () => {
        assert.isFalse(new ObjectPropertyFunction('foo').validate(null));
        assert.isFalse(new ObjectPropertyFunction('foo').validate(undefined));
        assert.isFalse(new ObjectPropertyFunction('foo').validate({}));
        assert.isFalse(new ObjectPropertyFunction('foo').validate({bar: 'foo'}));
        assert.isFalse(new ObjectPropertyFunction('foo').validate({foo: 'bar'}));
    });

});
