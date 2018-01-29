import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Isbn10 } from '../../src/rules/isbn10';

describe('Isbn10', () => {

    let isbn10: Isbn10;

    beforeEach(() => {
        isbn10 = new Isbn10();
    });

    it('is rule', () => {
        assert.instanceOf(isbn10, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(isbn10.validate('3836221195'));
        assert.isTrue(isbn10.validate('3-8362-2119-5'));
        assert.isTrue(isbn10.validate('3 8362 2119 5'));
        assert.isTrue(isbn10.validate('1617290858'));
        assert.isTrue(isbn10.validate('1-61729-085-8'));
        assert.isTrue(isbn10.validate('1 61729 085-8'));
        assert.isTrue(isbn10.validate('0007269706'));
        assert.isTrue(isbn10.validate('0-00-726970-6'));
        assert.isTrue(isbn10.validate('0 00 726970 6'));
        assert.isTrue(isbn10.validate('3423214120'));
        assert.isTrue(isbn10.validate('3-423-21412-0'));
        assert.isTrue(isbn10.validate('3 423 21412 0'));
        assert.isTrue(isbn10.validate('340101319X'));
        assert.isTrue(isbn10.validate('3-401-01319-X'));
        assert.isTrue(isbn10.validate('3 401 01319 X'));
    });

    it('values is not valid', () => {
        assert.isFalse(isbn10.validate('3423214121'));
        assert.isFalse(isbn10.validate('3-423-21412-1'));
        assert.isFalse(isbn10.validate('3 423 21412 1'));
        assert.isFalse(isbn10.validate('978-3836221191'));
        assert.isFalse(isbn10.validate('9783836221191'));
        assert.isFalse(isbn10.validate('123456789a'));
        assert.isFalse(isbn10.validate('foo'));
        assert.isFalse(isbn10.validate(''));
        assert.isFalse(isbn10.validate(null));
        assert.isFalse(isbn10.validate(undefined));
        assert.isFalse(isbn10.validate(true));
        assert.isFalse(isbn10.validate(false));
        assert.isFalse(isbn10.validate([]));
        assert.isFalse(isbn10.validate({}));
        assert.isFalse(isbn10.validate(new Array('foo')));
        assert.isFalse(isbn10.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(isbn10.validate(new Foo()));
    });

});
