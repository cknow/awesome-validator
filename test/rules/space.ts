import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Space } from '../../src/rules/space';

describe('Space', () => {

    let space: Space;

    beforeEach(() => {
        space = new Space();
    });

    it('is rule', () => {
        assert.instanceOf(space, AbstractRule);
    });

    it('values is valid with additional characters', () => {
        assert.isTrue(new Space('!@#$%^&*(){}').validate('!@#$%^&*(){} '));
        assert.isTrue(new Space('[]?+=/\\-_|"\',<>.').validate('[]?+=/\\-_|\',<>. \t \n '));
    });

    it('values is valid', () => {
        assert.isTrue(space.validate('\n'));
        assert.isTrue(space.validate(' '));
        assert.isTrue(space.validate('    '));
        assert.isTrue(space.validate('\t'));
        assert.isTrue(space.validate('	'));
    });

    it('values is not valid', () => {
        assert.isFalse(space.validate(''));
        assert.isFalse(space.validate('16-50'));
        assert.isFalse(space.validate('a'));
        assert.isFalse(space.validate('Foo'));
        assert.isFalse(space.validate('12.1'));
        assert.isFalse(space.validate('-12'));
        assert.isFalse(space.validate(-12));
        assert.isFalse(space.validate('( )_{}'));
        assert.isFalse(space.validate(Boolean()));
        assert.isFalse(space.validate(Number()));
        assert.isFalse(space.validate(String()));
        assert.isFalse(space.validate(null));
        assert.isFalse(space.validate(undefined));
        assert.isFalse(space.validate(true));
        assert.isFalse(space.validate(false));
        assert.isFalse(space.validate('true'));
        assert.isFalse(space.validate('false'));
        assert.isFalse(space.validate('-1.1'));
        assert.isFalse(space.validate('1.1'));
        assert.isFalse(space.validate('1'));
        assert.isFalse(space.validate('-1'));
        assert.isFalse(space.validate('0'));
        assert.isFalse(space.validate(0));
        assert.isFalse(space.validate(-0));
        assert.isFalse(space.validate(1));
        assert.isFalse(space.validate(-1));
        assert.isFalse(space.validate(0.0));
        assert.isFalse(space.validate(-0.0));
        assert.isFalse(space.validate(1.0));
        assert.isFalse(space.validate(-1.0));
        assert.isFalse(space.validate(0.1));
        assert.isFalse(space.validate(-0.1));
        assert.isFalse(space.validate(1.1));
        assert.isFalse(space.validate(-1.1));
        assert.isFalse(space.validate([]));
        assert.isFalse(space.validate({}));
        assert.isFalse(space.validate(new Array('foo')));
        assert.isFalse(space.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(space.validate(new Foo()));
    });

});
