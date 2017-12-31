import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { CreditCard } from '../../src/rules/credit-card';

describe('CreditCard', () => {

    let creditCard: CreditCard;

    beforeEach(() => {
        creditCard = new CreditCard();
    });

    it('is rule', () => {
        assert.instanceOf(creditCard, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new CreditCard('MasterCard').validate('5376 7473 9720 8720'));
        assert.isTrue(new CreditCard('MasterCard').validate('2222 4000 4124 0011'));
        assert.isTrue(new CreditCard('Visa').validate('4024.0071.5336.1885'));
        assert.isTrue(new CreditCard('Visa').validate('4024 007 193 879'));
        assert.isTrue(new CreditCard('American Express').validate('340-3161-9380-9364'));
        assert.isTrue(new CreditCard('Diners Club').validate('30351042633884'));
        assert.isTrue(new CreditCard('Discover').validate('6011000990139424'));
        assert.isTrue(new CreditCard('JCB').validate('3566002020360505'));

        assert.isTrue(creditCard.validate('5376 7473 9720 8720')); // MasterCard 5 BIN Range
        assert.isTrue(creditCard.validate('2223000048400011')); // MasterCard 2 BIN Range
        assert.isTrue(creditCard.validate('4024.0071.5336.1885')); // Visa 16
        assert.isTrue(creditCard.validate('4024 007 193 879')); // Visa 13
        assert.isTrue(creditCard.validate('340-3161-9380-9364')); // American Express
        assert.isTrue(creditCard.validate('30351042633884')); // Diners Club
        assert.isTrue(creditCard.validate('6011000990139424')); // Discover
        assert.isTrue(creditCard.validate('3566002020360505')); // JBC
    });

    it('values is not valid', () => {
        assert.isFalse(new CreditCard('MasterCard').validate('6011111111111117')); // Discover
        assert.isFalse(new CreditCard('Visa').validate('3530111333300000')); // JCB
        assert.isFalse(new CreditCard('American Express').validate('5555555555554444')); // MasterCard
        assert.isFalse(new CreditCard('Diners Club').validate('4012888888881881')); // Visa
        assert.isFalse(new CreditCard('Discover').validate('371449635398431')); // American Express
        assert.isFalse(new CreditCard('JCB').validate('38520000023237')); // Diners Club

        assert.isFalse(creditCard.validate(''));
        assert.isFalse(creditCard.validate('foo'));
        assert.isFalse(creditCard.validate('1234 1234 1234 1234'));
        assert.isFalse(creditCard.validate('1234.1234.1234.1234'));
        assert.isFalse(creditCard.validate('it isnt my credit card number'));
        assert.isFalse(creditCard.validate('&stR@ng3|) (|-|@r$'));
        assert.isFalse(creditCard.validate(1.0));
        assert.isFalse(creditCard.validate('wrongtld'));
        assert.isFalse(creditCard.validate(null));
        assert.isFalse(creditCard.validate(undefined));
        assert.isFalse(creditCard.validate(true));
        assert.isFalse(creditCard.validate(false));
        assert.isFalse(creditCard.validate([]));
        assert.isFalse(creditCard.validate({}));
        assert.isFalse(creditCard.validate(new Array('foo')));
        assert.isFalse(creditCard.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(creditCard.validate(new Foo()));
    });

});
