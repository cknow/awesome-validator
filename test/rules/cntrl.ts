import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Cntrl } from '../../src/rules/cntrl';

describe('Cntrl', () => {

    let cntrl: Cntrl;

    beforeEach(() => {
        cntrl = new Cntrl();
    });

    it('is rule', () => {
        assert.instanceOf(cntrl, AbstractRule);
    });

    it('values is valid with additional characters', () => {
        assert.isTrue(new Cntrl('!@#$%^&*(){} ').validate('!@#$%^&*(){} '));
        assert.isTrue(new Cntrl('[]?+=/\\-_|"\',<>. ').validate('[]?+=/\\-_|\',<>. \t \n'));
    });

    it('values is valid', () => {
        assert.isTrue(cntrl.validate('\n'));
        assert.isTrue(cntrl.validate('\r'));
        assert.isTrue(cntrl.validate('\t'));
        assert.isTrue(cntrl.validate('\n\r\t'));
    });

    it('values is not valid', () => {
        assert.isFalse(cntrl.validate(''));
        assert.isFalse(cntrl.validate('16-50'));
        assert.isFalse(cntrl.validate('a'));
        assert.isFalse(cntrl.validate(' '));
        assert.isFalse(cntrl.validate('Foo'));
        assert.isFalse(cntrl.validate('12.1'));
        assert.isFalse(cntrl.validate('-12'));
        assert.isFalse(cntrl.validate(-12));
        assert.isFalse(cntrl.validate('( )_{}'));
        assert.isFalse(cntrl.validate(Boolean()));
        assert.isFalse(cntrl.validate(Number()));
        assert.isFalse(cntrl.validate(String()));
        assert.isFalse(cntrl.validate(null));
        assert.isFalse(cntrl.validate(undefined));
        assert.isFalse(cntrl.validate(true));
        assert.isFalse(cntrl.validate(false));
        assert.isFalse(cntrl.validate('true'));
        assert.isFalse(cntrl.validate('false'));
        assert.isFalse(cntrl.validate('-1.1'));
        assert.isFalse(cntrl.validate('1.1'));
        assert.isFalse(cntrl.validate('1'));
        assert.isFalse(cntrl.validate('-1'));
        assert.isFalse(cntrl.validate('0'));
        assert.isFalse(cntrl.validate(0));
        assert.isFalse(cntrl.validate(-0));
        assert.isFalse(cntrl.validate(1));
        assert.isFalse(cntrl.validate(-1));
        assert.isFalse(cntrl.validate(0.0));
        assert.isFalse(cntrl.validate(-0.0));
        assert.isFalse(cntrl.validate(1.0));
        assert.isFalse(cntrl.validate(-1.0));
        assert.isFalse(cntrl.validate(0.1));
        assert.isFalse(cntrl.validate(-0.1));
        assert.isFalse(cntrl.validate(1.1));
        assert.isFalse(cntrl.validate(-1.1));
        assert.isFalse(cntrl.validate([]));
        assert.isFalse(cntrl.validate({}));
        assert.isFalse(cntrl.validate(new Array('foo')));
        assert.isFalse(cntrl.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(cntrl.validate(new Foo()));
    });

});
