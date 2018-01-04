import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Alpha } from '../../src/rules/alpha';

describe('Alpha', () => {

    let alpha: Alpha;

    beforeEach(() => {
        alpha = new Alpha();
    });

    it('is rule', () => {
        assert.instanceOf(alpha, AbstractRule);
    });

    it('values is valid with additional characters', () => {
        assert.isTrue(new Alpha('!@#$%^&*(){}').validate('!@#$%^&*(){} abc'));
        assert.isTrue(new Alpha('[]?+=/\\-_|"\',<>.').validate("[]?+=/\\-_|\"',<>. \t \n abc"));
        assert.isTrue(new Alpha(undefined).validate('abc'));
    });

    it('values is valid', () => {
        assert.isTrue(alpha.validate('alganet'));
        assert.isTrue(alpha.validate('a'));
        assert.isTrue(alpha.validate('\t'));
        assert.isTrue(alpha.validate('\n'));
        assert.isTrue(alpha.validate('foobar'));
        assert.isTrue(alpha.validate('alganet alganet'));
        assert.isTrue(alpha.validate('\nabc'));
        assert.isTrue(alpha.validate('\tdef'));
        assert.isTrue(alpha.validate('\nabc \t'));
    });

    it('values is not valid', () => {
        assert.isFalse(alpha.validate(''));
        assert.isFalse(alpha.validate('16-50'));
        assert.isFalse(alpha.validate('@#$'));
        assert.isFalse(alpha.validate('_'));
        assert.isFalse(alpha.validate('dgç'));
        assert.isFalse(alpha.validate('122al'));
        assert.isFalse(alpha.validate('12.1'));
        assert.isFalse(alpha.validate('-12'));
        assert.isFalse(alpha.validate(-50));
        assert.isFalse(alpha.validate(String()));
        assert.isFalse(alpha.validate(null));
        assert.isFalse(alpha.validate(undefined));
        assert.isFalse(alpha.validate('-1.1'));
        assert.isFalse(alpha.validate('1.1'));
        assert.isFalse(alpha.validate('-1'));
        assert.isFalse(alpha.validate(-1));
        assert.isFalse(alpha.validate(-1.0));
        assert.isFalse(alpha.validate(0.1));
        assert.isFalse(alpha.validate(-0.1));
        assert.isFalse(alpha.validate(1.1));
        assert.isFalse(alpha.validate(-1.1));
        assert.isFalse(alpha.validate([]));
        assert.isFalse(alpha.validate({}));
        assert.isFalse(alpha.validate(new Array('foo')));
        assert.isFalse(alpha.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(alpha.validate(new Foo()));
    });

});
