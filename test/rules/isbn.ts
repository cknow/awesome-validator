import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Isbn } from '../../src/rules/isbn';

describe('Isbn', () => {

    let isbn: Isbn;

    beforeEach(() => {
        isbn = new Isbn();
    });

    it('is rule', () => {
        assert.instanceOf(isbn, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(isbn.validate('3836221195'));
        assert.isTrue(isbn.validate('3-8362-2119-5'));
        assert.isTrue(isbn.validate('3 8362 2119 5'));
        assert.isTrue(isbn.validate('1617290858'));
        assert.isTrue(isbn.validate('1-61729-085-8'));
        assert.isTrue(isbn.validate('1 61729 085-8'));
        assert.isTrue(isbn.validate('0007269706'));
        assert.isTrue(isbn.validate('0-00-726970-6'));
        assert.isTrue(isbn.validate('0 00 726970 6'));
        assert.isTrue(isbn.validate('3423214120'));
        assert.isTrue(isbn.validate('3-423-21412-0'));
        assert.isTrue(isbn.validate('3 423 21412 0'));
        assert.isTrue(isbn.validate('340101319X'));
        assert.isTrue(isbn.validate('3-401-01319-X'));
        assert.isTrue(isbn.validate('3 401 01319 X'));
        assert.isTrue(isbn.validate('9783836221191'));
        assert.isTrue(isbn.validate('978-3-8362-2119-1'));
        assert.isTrue(isbn.validate('978 3 8362 2119 1'));
        assert.isTrue(isbn.validate('9783401013190'));
        assert.isTrue(isbn.validate('978-3401013190'));
        assert.isTrue(isbn.validate('978 3401013190'));
        assert.isTrue(isbn.validate('9784873113685'));
        assert.isTrue(isbn.validate('978-4-87311-368-5'));
        assert.isTrue(isbn.validate('978 4 87311 368 5'));
    });

    it('values is not valid', () => {
        assert.isFalse(isbn.validate('3423214121'));
        assert.isFalse(isbn.validate('9783836221190'));
        assert.isFalse(isbn.validate('foo'));
        assert.isFalse(isbn.validate(''));
        assert.isFalse(isbn.validate(null));
        assert.isFalse(isbn.validate(undefined));
        assert.isFalse(isbn.validate(true));
        assert.isFalse(isbn.validate(false));
        assert.isFalse(isbn.validate([]));
        assert.isFalse(isbn.validate({}));
        assert.isFalse(isbn.validate(new Array('foo')));
        assert.isFalse(isbn.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(isbn.validate(new Foo()));
    });

});
