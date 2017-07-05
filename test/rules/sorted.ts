import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Sorted } from '../../src/rules/sorted';

describe('Sorted', () => {

    it('is rule', () => {
        assert.instanceOf(new Sorted(), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Sorted().validate(''));
        assert.isTrue(new Sorted().validate([]));
        assert.isTrue(new Sorted().validate({}));
        assert.isTrue(new Sorted().validate('abcde'));
        assert.isTrue(new Sorted().validate(['edcba']));
        assert.isTrue(new Sorted().validate([1, 2, 3]));
        assert.isTrue(new Sorted().validate({a: 'a', b: 'b', c: 'c'}));
        assert.isTrue(new Sorted((value: any): any => value.key).validate({
            a: {key: 'a'}, b: {key: 'b'}, c: {key: 'c'}
        }));

        assert.isTrue(new Sorted(null, false).validate(''));
        assert.isTrue(new Sorted(null, false).validate([]));
        assert.isTrue(new Sorted(null, false).validate({}));
        assert.isTrue(new Sorted(null, false).validate('edcba'));
        assert.isTrue(new Sorted(null, false).validate(['edcba']));
        assert.isTrue(new Sorted(null, false).validate([3, 2, 1]));
        assert.isTrue(new Sorted(null, false).validate({c: 'c', b: 'b', a: 'a'}));
        assert.isTrue(new Sorted((value: any): any => value.key, false).validate({
            c: {key: 'c'}, b: {key: 'b'}, a: {key: 'a'}
        }));
    });

    it('values is not valid', () => {
        assert.isFalse(new Sorted().validate('edcba'));
        assert.isFalse(new Sorted().validate([3, 2, 1]));
        assert.isFalse(new Sorted().validate({c: 'c', b: 'b', a: 'a'}));
        assert.isFalse(new Sorted((value: any): any => value.key).validate({
            c: {key: 'c'}, b: {key: 'b'}, a: {key: 'a'}
        }));

        assert.isFalse(new Sorted(null, false).validate('abcde'));
        assert.isFalse(new Sorted(null, false).validate([1, 2, 3]));
        assert.isFalse(new Sorted(null, false).validate({a: 'a', b: 'b', c: 'c'}));
        assert.isFalse(new Sorted((value: any): any => value.key, false).validate({
            a: {key: 'a'}, b: {key: 'b'}, c: {key: 'c'}
        }));
    });

});
