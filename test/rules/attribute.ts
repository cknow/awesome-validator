import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Attribute } from '../../src/rules/attribute';
import { IntType } from '../../src/rules/int-type';
import { StringType } from '../../src/rules/string-type';

describe('Attribute', () => {

    it('is rule', () => {
        assert.instanceOf(new Attribute(null), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Attribute('foo').validate({foo: 'bar'}));
        assert.isTrue(new Attribute('foo', new StringType()).validate({foo: 'bar'}));
        assert.isTrue(new Attribute(null, undefined, false).validate('foo'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Attribute('foo').validate({}));
        assert.isFalse(new Attribute('foo', new IntType()).validate({foo: 'bar'}));
        assert.isFalse(new Attribute(null).validate({}));
    });

});
