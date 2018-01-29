import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Isbn13 } from '../../src/rules/isbn13';

describe('Isbn13', () => {

    let isbn13: Isbn13;

    beforeEach(() => {
        isbn13 = new Isbn13();
    });

    it('is rule', () => {
        assert.instanceOf(isbn13, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(isbn13.validate('9783836221191'));
        assert.isTrue(isbn13.validate('978-3-8362-2119-1'));
        assert.isTrue(isbn13.validate('978 3 8362 2119 1'));
        assert.isTrue(isbn13.validate('9783401013190'));
        assert.isTrue(isbn13.validate('978-3401013190'));
        assert.isTrue(isbn13.validate('978 3401013190'));
        assert.isTrue(isbn13.validate('9784873113685'));
        assert.isTrue(isbn13.validate('978-4-87311-368-5'));
        assert.isTrue(isbn13.validate('978 4 87311 368 5'));
    });

    it('values is not valid', () => {
        assert.isFalse(isbn13.validate('9783836221190'));
        assert.isFalse(isbn13.validate('978-3-8362-2119-0'));
        assert.isFalse(isbn13.validate('978 3 8362 2119 0'));
        assert.isFalse(isbn13.validate('3836221195'));
        assert.isFalse(isbn13.validate('3-8362-2119-5'));
        assert.isFalse(isbn13.validate('3 8362 2119 5'));
        assert.isFalse(isbn13.validate('01234567890ab'));
        assert.isFalse(isbn13.validate('foo'));
        assert.isFalse(isbn13.validate(''));
        assert.isFalse(isbn13.validate(null));
        assert.isFalse(isbn13.validate(undefined));
        assert.isFalse(isbn13.validate(true));
        assert.isFalse(isbn13.validate(false));
        assert.isFalse(isbn13.validate([]));
        assert.isFalse(isbn13.validate({}));
        assert.isFalse(isbn13.validate(new Array('foo')));
        assert.isFalse(isbn13.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(isbn13.validate(new Foo()));
    });

});
