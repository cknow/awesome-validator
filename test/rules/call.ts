import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { ArrayVal } from '../../src/rules/array-val';
import { Call } from '../../src/rules/call';
import { NumberVal } from '../../src/rules/number-val';

describe('Call', () => {

    it('is rule', () => {
        assert.instanceOf(new Call(null), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Call((): string[] => [], new ArrayVal()).validate('foo'));
        assert.isTrue(new Call((input: any): any => input, new NumberVal()).validate(10));
        assert.isTrue(new Call(null, undefined, false).validate('foo'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Call((): string => 'foo', new ArrayVal()).validate('foo'));
        assert.isFalse(new Call((input: any): any => input, new NumberVal()).validate('foo'));
        assert.isFalse(new Call(null).validate('foo'));
    });

});
