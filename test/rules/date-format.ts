import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { DateFormat } from '../../src/rules/date-format';

describe('DateFormat', () => {

    let dateFormat: DateFormat;

    beforeEach(() => {
        dateFormat = new DateFormat();
    });

    it('is rule', () => {
        assert.instanceOf(dateFormat, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(dateFormat.validate(1318781876.721));
        assert.isTrue(dateFormat.validate(true));
        assert.isTrue(dateFormat.validate(false));
        assert.isTrue(dateFormat.validate('2008'));
        assert.isTrue(dateFormat.validate(new Date(2008, 1, 29)));
        assert.isTrue(dateFormat.validate('2008-02-29'));
        assert.isTrue(dateFormat.validate(2008));
        assert.isTrue(dateFormat.validate('2009-12-00'));
    });

    it('values is valid with format', () => {
        assert.isTrue(new DateFormat('DD-MM-YYYY').validate('29-02-2008'));
        assert.isTrue(new DateFormat('DD/MM/YYYY HH:mm:ss').validate('20/10/2008 10:30:29'));
    });

    it('values is not valid', () => {
        assert.isFalse(dateFormat.validate(''));
        assert.isFalse(dateFormat.validate([]));
        assert.isFalse(dateFormat.validate({}));
        assert.isFalse(dateFormat.validate(new Array('foo')));
        assert.isFalse(dateFormat.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(dateFormat.validate(new Foo()));
    });

    it('values is not valid with format', () => {
        assert.isFalse(new DateFormat('DD/MM/YYYY').validate('2008-02-29'));
    });

});
