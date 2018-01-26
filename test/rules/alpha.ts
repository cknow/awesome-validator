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

    it('values is valid', () => {
        assert.isTrue(new Alpha('pt-BR').validate('ÀÂÇÉÊÍÕÓ'));
        assert.isTrue(new Alpha('fr-FR').validate('ÂÆÇÉÈÊË'));

        assert.isTrue(alpha.validate('alganet'));
        assert.isTrue(alpha.validate('a'));
        assert.isTrue(alpha.validate('foobar'));
        assert.isTrue(alpha.validate('Foo'));
        assert.isTrue(alpha.validate('abc'));
        assert.isTrue(alpha.validate('def'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Alpha('pt-BR').validate('ÂÆÇÉÈÊË'));
        assert.isFalse(new Alpha('fr-FR').validate('ÀÂÇÉÊÍÕÓ'));

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
