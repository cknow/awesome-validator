import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { MobilePhone } from '../../src/rules/mobile-phone';

describe('MobilePhone', () => {

    let mobilePhone: MobilePhone;

    beforeEach(() => {
        mobilePhone = new MobilePhone();
    });

    it('is rule', () => {
        assert.instanceOf(mobilePhone, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new MobilePhone('pt-br').validate('55-17-3332-2155'));
        assert.isTrue(new MobilePhone('pt-br').validate('01523456987'));
        assert.isTrue(new MobilePhone('en-gb').validate('447789345856'));
        assert.isTrue(new MobilePhone('en-gb').validate('07888814488'));
        assert.isTrue(new MobilePhone('en-US').validate('19876543210'));
        assert.isTrue(new MobilePhone('en-US').validate('8005552222'));
        assert.isTrue(new MobilePhone('pl-pl').validate('+48512689767'));
        assert.isTrue(new MobilePhone('pl-pl').validate('657562855'));
        assert.isTrue(new MobilePhone('pt-br', 'en-us').validate('022995678947'));
        assert.isTrue(new MobilePhone('pt-br', 'en-gb').validate('07888814488'));

        assert.isTrue(mobilePhone.validate('551223456789'));
        assert.isTrue(mobilePhone.validate('447789345856'));
        assert.isTrue(mobilePhone.validate('+15673628910'));
        assert.isTrue(mobilePhone.validate('551223456789'));
    });

    it('values is not valid', () => {
        assert.isFalse(new MobilePhone('pt-br').validate('657562855'));
        assert.isFalse(new MobilePhone('en-gb').validate('0898123'));
        assert.isFalse(new MobilePhone('en-us').validate('07888814488'));
        assert.isFalse(new MobilePhone('pl-pl').validate('55-17-3332-2155'));
        assert.isFalse(new MobilePhone('pt-br', 'en-us').validate('0898123'));

        assert.isFalse(mobilePhone.validate(''));
        assert.isFalse(mobilePhone.validate('foo'));
        assert.isFalse(mobilePhone.validate('&stR@ng3|) (|-|@r$'));
        assert.isFalse(mobilePhone.validate(1.0));
        assert.isFalse(mobilePhone.validate('wrongtld'));
        assert.isFalse(mobilePhone.validate(null));
        assert.isFalse(mobilePhone.validate(undefined));
        assert.isFalse(mobilePhone.validate(true));
        assert.isFalse(mobilePhone.validate(false));
        assert.isFalse(mobilePhone.validate([]));
        assert.isFalse(mobilePhone.validate({}));
        assert.isFalse(mobilePhone.validate(new Array('foo')));
        assert.isFalse(mobilePhone.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(mobilePhone.validate(new Foo()));
    });

});
