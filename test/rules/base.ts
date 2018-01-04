import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Base } from '../../src/rules/base';

describe('Base', () => {

    let base: Base;

    beforeEach(() => {
        base = new Base();
    });

    it('is rule', () => {
        assert.instanceOf(base, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Base(2).validate('011010001'));
        assert.isTrue(new Base(3).validate('0120122001'));
        assert.isTrue(new Base(8).validate('01234567520'));
        assert.isTrue(new Base(16).validate('012a34f5675c20d'));
        assert.isTrue(new Base(20).validate('012ah34f5675hic20dj'));
        assert.isTrue(new Base(50).validate('012ah34f56A75FGhic20dj'));
        assert.isTrue(new Base(62).validate('Z01xSsg5675hic20dj'));
        assert.isTrue(new Base(2, 'xy').validate('xyyxyxxy'));
        assert.isTrue(new Base(3, 'pfg').validate('gfpffp'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Base(2).validate(''));
        assert.isFalse(new Base(3).validate(''));
        assert.isFalse(new Base(8).validate(''));
        assert.isFalse(new Base(16).validate(''));
        assert.isFalse(new Base(20).validate(''));
        assert.isFalse(new Base(50).validate(''));
        assert.isFalse(new Base(62).validate(''));
        assert.isFalse(new Base(2).validate('01210103001'));
        assert.isFalse(new Base(3).validate('0120125f2001'));
        assert.isFalse(new Base(8).validate('01234dfZ567520'));
        assert.isFalse(new Base(16).validate('012aXS34f5675c20d'));
        assert.isFalse(new Base(20).validate('012ahZX34f5675hic20dj'));
        assert.isFalse(new Base(50).validate('012ahGZ34f56A75FGhic20dj'));
        assert.isFalse(new Base(61).validate('Z01xSsg5675hic20dj'));

        assert.isFalse(base.validate(String()));
        assert.isFalse(base.validate(null));
        assert.isFalse(base.validate(undefined));
        assert.isFalse(base.validate('-1.1'));
        assert.isFalse(base.validate('1.1'));
        assert.isFalse(base.validate('-1'));
        assert.isFalse(base.validate(''));
        assert.isFalse(base.validate(' '));
        assert.isFalse(base.validate('   '));
        assert.isFalse(base.validate(-1.1));
        assert.isFalse(base.validate(1.1));
        assert.isFalse(base.validate(-1));
        assert.isFalse(base.validate([]));
        assert.isFalse(base.validate({}));
        assert.isFalse(base.validate(new Array('foo')));
        assert.isFalse(base.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(base.validate(new Foo()));
    });

});
