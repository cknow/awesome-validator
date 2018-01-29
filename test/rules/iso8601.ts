import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Iso8601 } from '../../src/rules/iso8601';

describe('Iso8601', () => {

    let iso8601: Iso8601;

    beforeEach(() => {
        iso8601 = new Iso8601();
    });

    it('is rule', () => {
        assert.instanceOf(iso8601, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(iso8601.validate('2009-12T12:34'));
        assert.isTrue(iso8601.validate('2009'));
        assert.isTrue(iso8601.validate('2009-05-19'));
        assert.isTrue(iso8601.validate('20090519'));
        assert.isTrue(iso8601.validate('2009123'));
        assert.isTrue(iso8601.validate('2009-05'));
        assert.isTrue(iso8601.validate('2009-123'));
        assert.isTrue(iso8601.validate('2009-222'));
        assert.isTrue(iso8601.validate('2009-001'));
        assert.isTrue(iso8601.validate('2009-W01-1'));
        assert.isTrue(iso8601.validate('2009-W51-1'));
        assert.isTrue(iso8601.validate('2009-W511'));
        assert.isTrue(iso8601.validate('2009-W33'));
        assert.isTrue(iso8601.validate('2009W511'));
        assert.isTrue(iso8601.validate('2009-05-19'));
        assert.isTrue(iso8601.validate('2009-05-19 00:00'));
        assert.isTrue(iso8601.validate('2009-05-19 14'));
        assert.isTrue(iso8601.validate('2009-05-19 14:31'));
        assert.isTrue(iso8601.validate('2009-05-19 14:39:22'));
        assert.isTrue(iso8601.validate('2009-05-19T14:39Z'));
        assert.isTrue(iso8601.validate('2009-W21-2'));
        assert.isTrue(iso8601.validate('2009-W21-2T01:22'));
        assert.isTrue(iso8601.validate('2009-139'));
        assert.isTrue(iso8601.validate('2009-05-19 14:39:22-06:00'));
        assert.isTrue(iso8601.validate('2009-05-19 14:39:22+0600'));
        assert.isTrue(iso8601.validate('2009-05-19 14:39:22-01'));
        assert.isTrue(iso8601.validate('20090621T0545Z'));
        assert.isTrue(iso8601.validate('2007-04-06T00:00'));
        assert.isTrue(iso8601.validate('2007-04-05T24:00'));
        assert.isTrue(iso8601.validate('2010-02-18T16:23:48.5'));
        assert.isTrue(iso8601.validate('2010-02-18T16:23:48,444'));
        assert.isTrue(iso8601.validate('2010-02-18T16:23:48,3-06:00'));
        assert.isTrue(iso8601.validate('2010-02-18T16:23.4'));
        assert.isTrue(iso8601.validate('2010-02-18T16:23,25'));
        assert.isTrue(iso8601.validate('2010-02-18T16:23.33+0600'));
        assert.isTrue(iso8601.validate('2010-02-18T16.23334444'));
        assert.isTrue(iso8601.validate('2010-02-18T16,2283'));
        assert.isTrue(iso8601.validate('2009-05-19 143922.500'));
        assert.isTrue(iso8601.validate('2009-05-19 1439,55'));
    });

    it('values is not valid', () => {
        assert.isFalse(iso8601.validate('200905'));
        assert.isFalse(iso8601.validate('2009367'));
        assert.isFalse(iso8601.validate('2009-'));
        assert.isFalse(iso8601.validate('2007-04-05T24:50'));
        assert.isFalse(iso8601.validate('2009-000'));
        assert.isFalse(iso8601.validate('2009-M511'));
        assert.isFalse(iso8601.validate('2009M511'));
        assert.isFalse(iso8601.validate('2009-05-19T14a39r'));
        assert.isFalse(iso8601.validate('2009-05-19T14:3924'));
        assert.isFalse(iso8601.validate('2009-0519'));
        assert.isFalse(iso8601.validate('2009-05-1914:39'));
        assert.isFalse(iso8601.validate('2009-05-19 14:'));
        assert.isFalse(iso8601.validate('2009-05-19r14:39'));
        assert.isFalse(iso8601.validate('2009-05-19 14a39a22'));
        assert.isFalse(iso8601.validate('200912-01'));
        assert.isFalse(iso8601.validate('2009-05-19 14:39:22+06a00'));
        assert.isFalse(iso8601.validate('2009-05-19 146922.500'));
        assert.isFalse(iso8601.validate('2010-02-18T16.5:23.35:48'));
        assert.isFalse(iso8601.validate('2010-02-18T16:23.35:48'));
        assert.isFalse(iso8601.validate('2010-02-18T16:23.35:48.45'));
        assert.isFalse(iso8601.validate('2009-05-19 14.5.44'));
        assert.isFalse(iso8601.validate('2010-02-18T16:23.33.600'));
        assert.isFalse(iso8601.validate('2010-02-18T16,25:23:48,444'));
        assert.isFalse(iso8601.validate(''));
        assert.isFalse(iso8601.validate(null));
        assert.isFalse(iso8601.validate(undefined));
        assert.isFalse(iso8601.validate(true));
        assert.isFalse(iso8601.validate(false));
        assert.isFalse(iso8601.validate([]));
        assert.isFalse(iso8601.validate({}));
        assert.isFalse(iso8601.validate(new Array('foo')));
        assert.isFalse(iso8601.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(iso8601.validate(new Foo()));
    });

});
