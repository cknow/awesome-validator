import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Phone } from '../../src/rules/phone';

describe('Phone', () => {

    let phone: Phone;

    beforeEach(() => {
        phone = new Phone();
    });

    it('is rule', () => {
        assert.instanceOf(phone, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(phone.validate('+5-555-555-5555'));
        assert.isTrue(phone.validate('+5 555 555 5555'));
        assert.isTrue(phone.validate('+5.555.555.5555'));
        assert.isTrue(phone.validate('5-555-555-5555'));
        assert.isTrue(phone.validate('5.555.555.5555'));
        assert.isTrue(phone.validate('5 555 555 5555'));
        assert.isTrue(phone.validate('555.555.5555'));
        assert.isTrue(phone.validate('555 555 5555'));
        assert.isTrue(phone.validate('555-555-5555'));
        assert.isTrue(phone.validate('555-5555555'));
        assert.isTrue(phone.validate('5(555)555.5555'));
        assert.isTrue(phone.validate('+5(555)555.5555'));
        assert.isTrue(phone.validate('+5(555)555 5555'));
        assert.isTrue(phone.validate('+5(555)555-5555'));
        assert.isTrue(phone.validate('+5(555)5555555'));
        assert.isTrue(phone.validate('(555)5555555'));
        assert.isTrue(phone.validate('(555)555.5555'));
        assert.isTrue(phone.validate('(555)555-5555'));
        assert.isTrue(phone.validate('(555) 555 5555'));
        assert.isTrue(phone.validate('55555555555'));
        assert.isTrue(phone.validate('5555555555'));
        assert.isTrue(phone.validate('+33(1)2222222'));
        assert.isTrue(phone.validate('+33(1)222 2222'));
        assert.isTrue(phone.validate('+33(1)222.2222'));
        assert.isTrue(phone.validate('+33(1)22 22 22 22'));
        assert.isTrue(phone.validate('33(1)2222222'));
        assert.isTrue(phone.validate('33(1)22222222'));
        assert.isTrue(phone.validate('33(1)22 22 22 22'));
        assert.isTrue(phone.validate('(020) 7476 4026'));
        assert.isTrue(phone.validate('33(020) 7777 7777'));
        assert.isTrue(phone.validate('33(020)7777 7777'));
        assert.isTrue(phone.validate('+33(020) 7777 7777'));
        assert.isTrue(phone.validate('+33(020)7777 7777'));
        assert.isTrue(phone.validate('03-6106666'));
        assert.isTrue(phone.validate('036106666'));
        assert.isTrue(phone.validate('+33(11) 97777 7777'));
        assert.isTrue(phone.validate('+3311977777777'));
        assert.isTrue(phone.validate('11977777777'));
        assert.isTrue(phone.validate('11 97777 7777'));
        assert.isTrue(phone.validate('(11) 97777 7777'));
        assert.isTrue(phone.validate('(11) 97777-7777'));
        assert.isTrue(phone.validate('555-5555'));
        assert.isTrue(phone.validate('5555555'));
        assert.isTrue(phone.validate('555.5555'));
        assert.isTrue(phone.validate('555 5555'));
        assert.isTrue(phone.validate('+1 (555) 555 5555'));
    });

    it('values is not valid', () => {
        assert.isFalse(phone.validate(''));
        assert.isFalse(phone.validate('123'));
        assert.isFalse(phone.validate('(11- 97777-7777'));
        assert.isFalse(phone.validate('-11) 97777-7777'));
        assert.isFalse(phone.validate('s555-5555'));
        assert.isFalse(phone.validate('555-555'));
        assert.isFalse(phone.validate('555555'));
        assert.isFalse(phone.validate('555+5555'));
        assert.isFalse(phone.validate('(555)555555'));
        assert.isFalse(phone.validate('(555)55555'));
        assert.isFalse(phone.validate('+(555)555 555'));
        assert.isFalse(phone.validate('+5(555)555 555'));
        assert.isFalse(phone.validate('+5(555)555 555 555'));
        assert.isFalse(phone.validate('555)555 555'));
        assert.isFalse(phone.validate('+5(555)5555 555'));
        assert.isFalse(phone.validate('(555)55 555'));
        assert.isFalse(phone.validate('(555)5555 555'));
        assert.isFalse(phone.validate('+5(555)555555'));
        assert.isFalse(phone.validate('5(555)55 55555'));
        assert.isFalse(phone.validate('(5)555555'));
        assert.isFalse(phone.validate('+55(5)55 5 55 55'));
        assert.isFalse(phone.validate('+55(5)55 55 55 5'));
        assert.isFalse(phone.validate('+55(5)55 55 55'));
        assert.isFalse(phone.validate('+55(5)5555 555'));
        assert.isFalse(phone.validate('+55()555 5555'));
        assert.isFalse(phone.validate('03610666-5'));
        assert.isFalse(phone.validate('text'));
        assert.isFalse(phone.validate('555\n5555'));
        assert.isFalse(phone.validate(null));
        assert.isFalse(phone.validate(undefined));
        assert.isFalse(phone.validate(true));
        assert.isFalse(phone.validate(false));
    });

});
