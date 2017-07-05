import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Json } from '../../src/rules/json';

describe('Json', () => {

    let json: Json;

    beforeEach(() => {
        json = new Json();
    });

    it('is rule', () => {
        assert.instanceOf(json, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(json.validate(JSON.stringify([])));
        assert.isTrue(json.validate(JSON.stringify({})));
        assert.isTrue(json.validate(JSON.stringify(['foo'])));
        assert.isTrue(json.validate(JSON.stringify({foo: 'bar'})));
    });

    it('values is not valid', () => {
        assert.isFalse(json.validate(Boolean()));
        assert.isFalse(json.validate(Number()));
        assert.isFalse(json.validate(String()));
        assert.isFalse(json.validate(null));
        assert.isFalse(json.validate(undefined));
        assert.isFalse(json.validate(true));
        assert.isFalse(json.validate(false));
        assert.isFalse(json.validate('true'));
        assert.isFalse(json.validate('false'));
        assert.isFalse(json.validate('-1.1'));
        assert.isFalse(json.validate('1.1'));
        assert.isFalse(json.validate('1'));
        assert.isFalse(json.validate('-1'));
        assert.isFalse(json.validate('0'));
        assert.isFalse(json.validate(' '));
        assert.isFalse(json.validate('   '));
        assert.isFalse(json.validate(0));
        assert.isFalse(json.validate(-0));
        assert.isFalse(json.validate(1));
        assert.isFalse(json.validate(-1));
        assert.isFalse(json.validate(0.0));
        assert.isFalse(json.validate(-0.0));
        assert.isFalse(json.validate(1.0));
        assert.isFalse(json.validate(-1.0));
        assert.isFalse(json.validate(0.1));
        assert.isFalse(json.validate(-0.1));
        assert.isFalse(json.validate(1.1));
        assert.isFalse(json.validate(-1.1));
        assert.isFalse(json.validate([]));
        assert.isFalse(json.validate({}));
        assert.isFalse(json.validate(new Array('foo')));
        assert.isFalse(json.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(json.validate(new Foo()));
    });

});
