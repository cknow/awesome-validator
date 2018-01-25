import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { MongoId } from '../../src/rules/mongo-id';

describe('MongoId', () => {

    let mongoId: MongoId;

    beforeEach(() => {
        mongoId = new MongoId();
    });

    it('is rule', () => {
        assert.instanceOf(mongoId, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(mongoId.validate('507f1f77bcf86cd799439011'));
        assert.isTrue(mongoId.validate('857c1f77bdf86cd799439011'));
    });

    it('values is not valid', () => {
        assert.isFalse(mongoId.validate('507f1f77bcf86cd7994390'));
        assert.isFalse(mongoId.validate('507f1f77bcf86cd79943901z'));
        assert.isFalse(mongoId.validate('507f1f77bcf86cd799439011 '));
        assert.isFalse(mongoId.validate(''));
        assert.isFalse(mongoId.validate(Boolean()));
        assert.isFalse(mongoId.validate(Number()));
        assert.isFalse(mongoId.validate(String()));
        assert.isFalse(mongoId.validate(null));
        assert.isFalse(mongoId.validate(undefined));
        assert.isFalse(mongoId.validate(true));
        assert.isFalse(mongoId.validate(false));
        assert.isFalse(mongoId.validate('true'));
        assert.isFalse(mongoId.validate('false'));
        assert.isFalse(mongoId.validate('-1.1'));
        assert.isFalse(mongoId.validate('1.1'));
        assert.isFalse(mongoId.validate('1'));
        assert.isFalse(mongoId.validate('-1'));
        assert.isFalse(mongoId.validate('0'));
        assert.isFalse(mongoId.validate(0));
        assert.isFalse(mongoId.validate(-0));
        assert.isFalse(mongoId.validate(1));
        assert.isFalse(mongoId.validate(-1));
        assert.isFalse(mongoId.validate(0.0));
        assert.isFalse(mongoId.validate(-0.0));
        assert.isFalse(mongoId.validate(1.0));
        assert.isFalse(mongoId.validate(-1.0));
        assert.isFalse(mongoId.validate(0.1));
        assert.isFalse(mongoId.validate(-0.1));
        assert.isFalse(mongoId.validate(1.1));
        assert.isFalse(mongoId.validate(-1.1));
        assert.isFalse(mongoId.validate([]));
        assert.isFalse(mongoId.validate({}));
        assert.isFalse(mongoId.validate(new Array('foo')));
        assert.isFalse(mongoId.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(mongoId.validate(new Foo()));
    });

});
