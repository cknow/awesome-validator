import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Time } from '../../src/rules/time';

describe('Time', () => {

    let time: Time;

    beforeEach(() => {
        time = new Time();
    });

    it('is rule', () => {
        assert.instanceOf(time, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Time('Full').validate('22:00'));
        assert.isTrue(new Time('full').validate('10:00'));
        assert.isTrue(new Time('Meridiem').validate('10:00 AM'));
        assert.isTrue(new Time('meridiem').validate('10:00 PM'));
        assert.isTrue(new Time('Full', 'Meridiem').validate('22:00'));
        assert.isTrue(new Time('full', 'meridiem').validate('10:00 AM'));

        assert.isTrue(time.validate('22:00'));
        assert.isTrue(time.validate('10:00'));
        assert.isTrue(time.validate('10:00 AM'));
        assert.isTrue(time.validate('10:00 PM'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Time('Full').validate('10:00 AM'));
        assert.isFalse(new Time('full').validate('10:00 AM'));
        assert.isFalse(new Time('Meridiem').validate('22:00'));
        assert.isFalse(new Time('meridiem').validate('22:00'));
        assert.isFalse(new Time('Full', 'Meridiem').validate('22:00 AM'));
        assert.isFalse(new Time('full', 'meridiem').validate('22:00 PM'));

        assert.isFalse(time.validate('25:00'));
        assert.isFalse(time.validate('text'));
        assert.isFalse(time.validate(''));
        assert.isFalse(time.validate('foo'));
        assert.isFalse(time.validate(1.0));
        assert.isFalse(time.validate('wrongtld'));
        assert.isFalse(time.validate(null));
        assert.isFalse(time.validate(undefined));
        assert.isFalse(time.validate(true));
        assert.isFalse(time.validate(false));
        assert.isFalse(time.validate([]));
        assert.isFalse(time.validate({}));
        assert.isFalse(time.validate(new Array('foo')));
        assert.isFalse(time.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(time.validate(new Foo()));
    });

});
