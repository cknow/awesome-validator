import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Between } from '../../src/rules/between';

describe('Between', () => {

    it('is rule', () => {
        assert.instanceOf(new Between(), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Between(1).validate('foo'));
        assert.isTrue(new Between(null, 5).validate('foo'));
        assert.isTrue(new Between(1, 5).validate('foo'));
        assert.isTrue(new Between(1, 5, false).validate('foo'));
        assert.isTrue(new Between().validate(0));
        assert.isTrue(new Between(100).validate(100));
        assert.isTrue(new Between(100, 200).validate(100));
        assert.isTrue(new Between(null, 200).validate(150));
        assert.isTrue(new Between(100, 200, false).validate(150));
        assert.isTrue(new Between(1).validate({foo: 'bar'}));
        assert.isTrue(new Between(1, 5).validate({foo: 'bar'}));
        assert.isTrue(new Between(1, 5, false).validate({foo: 'bar', bar: 'foo'}));
        assert.isTrue(new Between(0, 5).validate({}));
        assert.isTrue(new Between(1).validate([1]));
        assert.isTrue(new Between(1, 5).validate([1]));
        assert.isTrue(new Between(1, 5, false).validate([1, 2]));
        assert.isTrue(new Between(0, 5).validate([]));
        assert.isTrue(new Between(1).validate(new Set([1, 2, 3])));
        assert.isTrue(new Between(null, 5).validate(new Set([1, 2, 3])));
        assert.isTrue(new Between(1, 5).validate(new Set([1, 2, 3])));
        assert.isTrue(new Between(1, 5, false).validate(new Set([1, 2, 3])));
        assert.isTrue(new Between(1).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
        assert.isTrue(new Between(null, 5).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
        assert.isTrue(new Between(1, 5).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
        assert.isTrue(new Between(1, 5, false).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
        assert.isTrue(new Between('5mb', '20mb').validate('10mb'));
        assert.isTrue(new Between('5mb').validate('10mb'));
        assert.isTrue(new Between(null, '20mb').validate('10mb'));
        assert.isTrue(new Between('a', 'c').validate('b'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Between(5).validate('foo'));
        assert.isFalse(new Between(null, 5).validate('foobar'));
        assert.isFalse(new Between(5, 10).validate('foo'));
        assert.isFalse(new Between(3, 5, false).validate('foo'));
        assert.isFalse(new Between(100).validate(50));
        assert.isFalse(new Between(100, 200).validate(50));
        assert.isFalse(new Between(100, 200, false).validate(100));
        assert.isFalse(new Between(null, 200).validate(250));
        assert.isFalse(new Between(2).validate({foo: 'bar'}));
        assert.isFalse(new Between(2, 5).validate({foo: 'bar'}));
        assert.isFalse(new Between(2, 5, false).validate({foo: 'bar', bar: 'foo'}));
        assert.isFalse(new Between(0, 5, false).validate({}));
        assert.isFalse(new Between(2).validate([1]));
        assert.isFalse(new Between(2, 5).validate([1]));
        assert.isFalse(new Between(2, 5, false).validate([1, 2]));
        assert.isFalse(new Between(0, 5, false).validate([]));
        assert.isFalse(new Between(5).validate(new Set([1, 2, 3])));
        assert.isFalse(new Between(null, 2).validate(new Set([1, 2, 3])));
        assert.isFalse(new Between(5, 10).validate(new Set([1, 2, 3])));
        assert.isFalse(new Between(3, 5, false).validate(new Set([1, 2, 3])));
        assert.isFalse(new Between(5).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
        assert.isFalse(new Between(null, 2).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
        assert.isFalse(new Between(5, 10).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
        assert.isFalse(new Between(3, 5, false).validate(new Map<number, number>([[1, 1], [2, 2], [3, 3]])));
        assert.isFalse(new Between('5mb', '20mb').validate('30mb'));
        assert.isFalse(new Between('5mb').validate('3mb'));
        assert.isFalse(new Between(null, '20mb').validate('30mb'));
        assert.isFalse(new Between('a', 'c').validate('d'));
    });

});
