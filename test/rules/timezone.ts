import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Timezone } from '../../src/rules/timezone';

describe('Timezone', () => {

    let timezone: Timezone;

    beforeEach(() => {
        timezone = new Timezone();
    });

    it('is rule', () => {
        assert.instanceOf(timezone, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(timezone.validate('Europe/Paris'));
        assert.isTrue(timezone.validate('Europe/Madrid'));
        assert.isTrue(timezone.validate('US/Central'));
        assert.isTrue(timezone.validate('America/Sao_Paulo'));
    });

    it('values is not valid', () => {
        assert.isFalse(timezone.validate('1'));
        assert.isFalse(timezone.validate(1.0));
        assert.isFalse(timezone.validate('invalid/timezone'));
        assert.isFalse(timezone.validate(null));
        assert.isFalse(timezone.validate(undefined));
        assert.isFalse(timezone.validate(true));
        assert.isFalse(timezone.validate(false));
        assert.isFalse(timezone.validate([]));
        assert.isFalse(timezone.validate({}));
        assert.isFalse(timezone.validate(new Array('foo')));
        assert.isFalse(timezone.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(timezone.validate(new Foo()));
    });

});
