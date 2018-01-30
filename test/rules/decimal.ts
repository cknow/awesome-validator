import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Decimal } from '../../src/rules/decimal';

describe('Decimal', () => {

    let decimal: Decimal;

    beforeEach(() => {
        decimal = new Decimal();
    });

    it('is rule', () => {
        assert.instanceOf(decimal, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Decimal('en-AU').validate('0.01'));
        assert.isTrue(new Decimal('en-AU').validate('.1'));
        assert.isTrue(new Decimal('en-AU').validate('1.0'));
        assert.isTrue(new Decimal('en-AU').validate('-.25'));
        assert.isTrue(new Decimal('en-AU').validate('-0'));
        assert.isTrue(new Decimal('en-AU').validate('0.0000000000001'));

        assert.isTrue(new Decimal('pt-BR').validate('0,01'));
        assert.isTrue(new Decimal('pt-BR').validate(',1'));
        assert.isTrue(new Decimal('pt-BR').validate('1,0'));
        assert.isTrue(new Decimal('pt-BR').validate('-,25'));
        assert.isTrue(new Decimal('pt-BR').validate('-0'));
        assert.isTrue(new Decimal('pt-BR').validate('0,0000000000001'));

        assert.isTrue(new Decimal('ar-JO').validate('0٫01'));
        assert.isTrue(new Decimal('ar-JO').validate('٫1'));
        assert.isTrue(new Decimal('ar-JO').validate('1٫0'));
        assert.isTrue(new Decimal('ar-JO').validate('-٫25'));
        assert.isTrue(new Decimal('ar-JO').validate('-0'));
        assert.isTrue(new Decimal('ar-JO').validate('0٫0000000000001'));

        assert.isTrue(new Decimal('invalid-locale').validate('1.0'));
        assert.isTrue(new Decimal('invalid-locale').validate('-,25'));
        assert.isTrue(new Decimal('invalid-locale').validate('0٫0000000000001'));

        assert.isTrue(new Decimal(undefined, true).validate('0.01'));
        assert.isTrue(new Decimal(undefined, true).validate('0.01'));
        assert.isTrue(new Decimal(undefined, true).validate('.1'));
        assert.isTrue(new Decimal(undefined, true).validate('1.0'));
        assert.isTrue(new Decimal(undefined, true).validate('-.25'));
        assert.isTrue(new Decimal(undefined, true).validate('0.0000000000001'));

        assert.isTrue(new Decimal(undefined, false, '2,3').validate('0.01'));
        assert.isTrue(new Decimal(undefined, false, '2,3').validate('1.043'));
        assert.isTrue(new Decimal(undefined, false, '2,3').validate('.15'));
        assert.isTrue(new Decimal(undefined, false, '2,3').validate('10,567'));
        assert.isTrue(new Decimal(undefined, false, '2,3').validate(',50'));
        assert.isTrue(new Decimal(undefined, false, '2,3').validate('+,755'));

        assert.isTrue(decimal.validate('0,01'));
        assert.isTrue(decimal.validate(',1'));
        assert.isTrue(decimal.validate('-,25'));
        assert.isTrue(decimal.validate('0٫01'));
        assert.isTrue(decimal.validate('٫1'));
        assert.isTrue(decimal.validate('-٫25'));
        assert.isTrue(decimal.validate('123'));
        assert.isTrue(decimal.validate('00123'));
        assert.isTrue(decimal.validate('-00123'));
        assert.isTrue(decimal.validate('0'));
        assert.isTrue(decimal.validate('-0'));
        assert.isTrue(decimal.validate('+123'));
        assert.isTrue(decimal.validate('0.01'));
        assert.isTrue(decimal.validate('.1'));
        assert.isTrue(decimal.validate('1.0'));
        assert.isTrue(decimal.validate('-.25'));
        assert.isTrue(decimal.validate('-0'));
        assert.isTrue(decimal.validate('0.0000000000001'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Decimal('en-AU').validate('0,01'));
        assert.isFalse(new Decimal('en-AU').validate(',1'));
        assert.isFalse(new Decimal('en-AU').validate('1,0'));
        assert.isFalse(new Decimal('en-AU').validate('-,25'));
        assert.isFalse(new Decimal('en-AU').validate('0,0000000000001'));
        assert.isFalse(new Decimal('en-AU').validate('0٫01'));
        assert.isFalse(new Decimal('en-AU').validate('٫1'));
        assert.isFalse(new Decimal('en-AU').validate('1٫0'));
        assert.isFalse(new Decimal('en-AU').validate('-٫25'));
        assert.isFalse(new Decimal('en-AU').validate('0٫0000000000001'));

        assert.isFalse(new Decimal('pt-BR').validate('0.01'));
        assert.isFalse(new Decimal('pt-BR').validate('.1'));
        assert.isFalse(new Decimal('pt-BR').validate('1.0'));
        assert.isFalse(new Decimal('pt-BR').validate('-.25'));
        assert.isFalse(new Decimal('pt-BR').validate('0.0000000000001'));
        assert.isFalse(new Decimal('pt-BR').validate('0.01'));
        assert.isFalse(new Decimal('pt-BR').validate('.1'));
        assert.isFalse(new Decimal('pt-BR').validate('1.0'));
        assert.isFalse(new Decimal('pt-BR').validate('-.25'));
        assert.isFalse(new Decimal('pt-BR').validate('0.0000000000001'));

        assert.isFalse(new Decimal('ar-JO').validate('0,01'));
        assert.isFalse(new Decimal('ar-JO').validate(',1'));
        assert.isFalse(new Decimal('ar-JO').validate('1.0'));
        assert.isFalse(new Decimal('ar-JO').validate('-.25'));
        assert.isFalse(new Decimal('ar-JO').validate('0.0000000000001'));

        assert.isFalse(new Decimal('invalid-locale').validate('1..0'));
        assert.isFalse(new Decimal('invalid-locale').validate('-,,25'));
        assert.isFalse(new Decimal('invalid-locale').validate('0٫٫0000000000001'));

        assert.isFalse(new Decimal(undefined, true).validate('-0'));
        assert.isFalse(new Decimal(undefined, true).validate('123'));
        assert.isFalse(new Decimal(undefined, true).validate('00123'));
        assert.isFalse(new Decimal(undefined, true).validate('-00123'));
        assert.isFalse(new Decimal(undefined, true).validate('0'));
        assert.isFalse(new Decimal(undefined, true).validate('-0'));
        assert.isFalse(new Decimal(undefined, true).validate('+123'));

        assert.isFalse(new Decimal(undefined, false, '2,3').validate('0.0000000000001'));
        assert.isFalse(new Decimal(undefined, false, '2,3').validate('0.0'));
        assert.isFalse(new Decimal(undefined, false, '2,3').validate('.1'));
        assert.isFalse(new Decimal(undefined, false, '2,3').validate('1,0'));
        assert.isFalse(new Decimal(undefined, false, '2,3').validate('-,2564'));
        assert.isFalse(new Decimal(undefined, false, '2,3').validate('0,0'));

        assert.isFalse(decimal.validate('....'));
        assert.isFalse(decimal.validate(' '));
        assert.isFalse(decimal.validate(''));
        assert.isFalse(decimal.validate('-'));
        assert.isFalse(decimal.validate('+'));
        assert.isFalse(decimal.validate('.'));
        assert.isFalse(decimal.validate('0.1a'));
        assert.isFalse(decimal.validate('a'));
        assert.isFalse(decimal.validate('\n'));
        assert.isFalse(decimal.validate('Foo'));
        assert.isFalse(decimal.validate(Boolean()));
        assert.isFalse(decimal.validate(String()));
        assert.isFalse(decimal.validate(null));
        assert.isFalse(decimal.validate(undefined));
        assert.isFalse(decimal.validate(true));
        assert.isFalse(decimal.validate(false));
        assert.isFalse(decimal.validate('true'));
        assert.isFalse(decimal.validate('false'));
        assert.isFalse(decimal.validate([]));
        assert.isFalse(decimal.validate({}));
        assert.isFalse(decimal.validate(new Array('foo')));
        assert.isFalse(decimal.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(decimal.validate(new Foo()));
    });

});
