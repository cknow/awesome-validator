import * as mock from 'mock-fs';

import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Charset } from '../../src/rules/charset';

describe('Charset', () => {

    let charset: Charset;

    beforeEach(() => {
        charset = new Charset('utf-8');

        mock({
            'file.txt': 'foo'
        });
    });

    afterEach(() => {
        mock.restore();
    });

    it('is rule', () => {
        assert.instanceOf(charset, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Charset('utf-8').validate('foo'));
        assert.isTrue(new Charset('iso-8859-1', 'utf-8').validate('foo'));
        assert.isTrue(new Charset('utf-8').validate('file.txt'));
        assert.isTrue(new Charset('iso-8859-1', 'utf-8').validate('file.txt'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Charset('foo').validate('foo'));
        assert.isFalse(new Charset('iso-8859-1').validate('foo'));
        assert.isFalse(new Charset('foo').validate('file.txt'));
        assert.isFalse(new Charset('iso-8859-1').validate('file.txt'));

        assert.isFalse(charset.validate(Boolean()));
        assert.isFalse(charset.validate(Number()));
        assert.isFalse(charset.validate(null));
        assert.isFalse(charset.validate(undefined));
        assert.isFalse(charset.validate(true));
        assert.isFalse(charset.validate(false));
        assert.isFalse(charset.validate(0));
        assert.isFalse(charset.validate(-0));
        assert.isFalse(charset.validate(1));
        assert.isFalse(charset.validate(-1));
        assert.isFalse(charset.validate(0.0));
        assert.isFalse(charset.validate(-0.0));
        assert.isFalse(charset.validate(1.0));
        assert.isFalse(charset.validate(-1.0));
        assert.isFalse(charset.validate(0.1));
        assert.isFalse(charset.validate(-0.1));
        assert.isFalse(charset.validate(1.1));
        assert.isFalse(charset.validate(-1.1));
        assert.isFalse(charset.validate([]));
        assert.isFalse(charset.validate({}));
        assert.isFalse(charset.validate(new Array('foo')));
        assert.isFalse(charset.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(charset.validate(new Foo()));
    });

});
