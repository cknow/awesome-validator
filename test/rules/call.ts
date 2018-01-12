import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { ArrayVal } from '../../src/rules/array-val';
import { Call } from '../../src/rules/call';
import { NumberVal } from '../../src/rules/number-val';

describe('Call', () => {

    let call: Call;

    beforeEach(() => {
        call = new Call(null);
    });

    it('is rule', () => {
        assert.instanceOf(call, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Call((): string[] => [], new ArrayVal()).validate('foo'));
        assert.isTrue(new Call((input: any): any => input, new NumberVal()).validate(10));
        assert.isTrue(new Call(null, undefined, false).validate('foo'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Call((): string => 'foo', new ArrayVal()).validate('foo'));
        assert.isFalse(new Call((input: any): any => input, new NumberVal()).validate('foo'));

        assert.isFalse(call.validate(null));
        assert.isFalse(call.validate(undefined));
        assert.isFalse(call.validate({}));
        assert.isFalse(call.validate([]));
        assert.isFalse(call.validate('foo'));
        assert.isFalse(call.validate(0));
        assert.isFalse(call.validate(true));
        assert.isFalse(call.validate(false));
        assert.isFalse(call.validate(String('foo')));
        assert.isFalse(call.validate(Number(0)));
        assert.isFalse(call.validate(Boolean(true)));
        assert.isFalse(call.validate(Boolean(false)));
    });

});
