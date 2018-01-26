import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { PostalCode } from '../../src/rules/postal-code';

describe('PostalCode', () => {

    let postalCode: PostalCode;

    beforeEach(() => {
        postalCode = new PostalCode();
    });

    it('is rule', () => {
        assert.instanceOf(postalCode, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new PostalCode('BR').validate('02179-000'));
        assert.isTrue(new PostalCode('BR').validate('02179000'));
        assert.isTrue(new PostalCode('GB').validate('GIR 0AA'));
        assert.isTrue(new PostalCode('GB').validate('PR1 9LY'));
        assert.isTrue(new PostalCode('US').validate('02179'));
        assert.isTrue(new PostalCode('PL').validate('99-300'));
        assert.isTrue(new PostalCode('BR', 'US').validate('11434-121'));
        assert.isTrue(new PostalCode('BR', 'GB').validate('RP5 7LY'));

        assert.isTrue(postalCode.validate('02179-000'));
        assert.isTrue(postalCode.validate('GIR 0AA'));
        assert.isTrue(postalCode.validate('02179'));
        assert.isTrue(postalCode.validate('99-300'));
    });

    it('values is not valid', () => {
        assert.isFalse(new PostalCode('BR').validate('99-300'));
        assert.isFalse(new PostalCode('GB').validate('02179'));
        assert.isFalse(new PostalCode('US').validate('PR1 9LY'));
        assert.isFalse(new PostalCode('PL').validate('02179-000'));
        assert.isFalse(new PostalCode('BR', 'US').validate('RP5 7LY'));

        assert.isFalse(postalCode.validate(''));
        assert.isFalse(postalCode.validate('foo'));
        assert.isFalse(postalCode.validate('&stR@ng3|) (|-|@r$'));
        assert.isFalse(postalCode.validate(1.0));
        assert.isFalse(postalCode.validate('wrongtld'));
        assert.isFalse(postalCode.validate(null));
        assert.isFalse(postalCode.validate(undefined));
        assert.isFalse(postalCode.validate(true));
        assert.isFalse(postalCode.validate(false));
        assert.isFalse(postalCode.validate([]));
        assert.isFalse(postalCode.validate({}));
        assert.isFalse(postalCode.validate(new Array('foo')));
        assert.isFalse(postalCode.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(postalCode.validate(new Foo()));
    });

});
