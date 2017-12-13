import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Range } from '../../src/rules/range';

describe('Range', () => {

    it('is rule', () => {
        assert.instanceOf(new Range(), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Range(1).validate('foo'));
        assert.isTrue(new Range(null, 5).validate('foo'));
        assert.isTrue(new Range(1, 5).validate('foo'));
        assert.isTrue(new Range(1, 5, false).validate('foo'));
        assert.isTrue(new Range().validate(0));
        assert.isTrue(new Range(100).validate(100));
        assert.isTrue(new Range(100, 200).validate(100));
        assert.isTrue(new Range(null, 200).validate(150));
        assert.isTrue(new Range(100, 200, false).validate(150));
        assert.isTrue(new Range(1).validate({foo: 'bar'}));
        assert.isTrue(new Range(1, 5).validate({foo: 'bar'}));
        assert.isTrue(new Range(1, 5, false).validate({foo: 'bar', bar: 'foo'}));
        assert.isTrue(new Range(0, 5).validate({}));
        assert.isTrue(new Range(1).validate([1]));
        assert.isTrue(new Range(1, 5).validate([1]));
        assert.isTrue(new Range(1, 5, false).validate([1, 2]));
        assert.isTrue(new Range(0, 5).validate([]));
        assert.isTrue(new Range(1).validate(new Set([1, 2, 3])));
        assert.isTrue(new Range(null, 5).validate(new Set([1, 2, 3])));
        assert.isTrue(new Range(1, 5).validate(new Set([1, 2, 3])));
        assert.isTrue(new Range(1, 5, false).validate(new Set([1, 2, 3])));
        assert.isTrue(new Range(1).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
        assert.isTrue(new Range(null, 5).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
        assert.isTrue(new Range(1, 5).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
        assert.isTrue(new Range(1, 5, false).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
    });

    it('values is not valid', () => {
        assert.isFalse(new Range(5).validate('foo'));
        assert.isFalse(new Range(null, 5).validate('foobar'));
        assert.isFalse(new Range(5, 10).validate('foo'));
        assert.isFalse(new Range(3, 5, false).validate('foo'));
        assert.isFalse(new Range(100).validate(50));
        assert.isFalse(new Range(100, 200).validate(50));
        assert.isFalse(new Range(100, 200, false).validate(100));
        assert.isFalse(new Range(null, 200).validate(250));
        assert.isFalse(new Range(2).validate({foo: 'bar'}));
        assert.isFalse(new Range(2, 5).validate({foo: 'bar'}));
        assert.isFalse(new Range(2, 5, false).validate({foo: 'bar', bar: 'foo'}));
        assert.isFalse(new Range(0, 5, false).validate({}));
        assert.isFalse(new Range(2).validate([1]));
        assert.isFalse(new Range(2, 5).validate([1]));
        assert.isFalse(new Range(2, 5, false).validate([1, 2]));
        assert.isFalse(new Range(0, 5, false).validate([]));
        assert.isFalse(new Range(5).validate(new Set([1, 2, 3])));
        assert.isFalse(new Range(null, 2).validate(new Set([1, 2, 3])));
        assert.isFalse(new Range(5, 10).validate(new Set([1, 2, 3])));
        assert.isFalse(new Range(3, 5, false).validate(new Set([1, 2, 3])));
        assert.isFalse(new Range(5).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
        assert.isFalse(new Range(null, 2).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
        assert.isFalse(new Range(5, 10).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
        assert.isFalse(new Range(3, 5, false).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
    });

});
