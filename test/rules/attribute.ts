import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Attribute } from '../../src/rules/attribute';
import { IntType } from '../../src/rules/int-type';
import { StringType } from '../../src/rules/string-type';

describe('Attribute', () => {

    let attribute: Attribute;

    beforeEach(() => {
        attribute = new Attribute(null);
    });

    it('is rule', () => {
        assert.instanceOf(attribute, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Attribute('foo').validate({foo: 'bar'}));
        assert.isTrue(new Attribute('foo', new StringType()).validate({foo: 'bar'}));
        assert.isTrue(new Attribute(null, undefined, false).validate('foo'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Attribute('foo').validate('foo'));
        assert.isFalse(new Attribute('foo').validate({}));
        assert.isFalse(new Attribute('foo', new IntType()).validate({foo: 'bar'}));

        assert.isFalse(attribute.validate(null));
        assert.isFalse(attribute.validate(undefined));
        assert.isFalse(attribute.validate({}));
        assert.isFalse(attribute.validate([]));
        assert.isFalse(attribute.validate('foo'));
        assert.isFalse(attribute.validate(0));
        assert.isFalse(attribute.validate(true));
        assert.isFalse(attribute.validate(false));
        assert.isFalse(attribute.validate(String('foo')));
        assert.isFalse(attribute.validate(Number(0)));
        assert.isFalse(attribute.validate(Boolean(true)));
        assert.isFalse(attribute.validate(Boolean(false)));
    });

});
