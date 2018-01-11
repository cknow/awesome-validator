import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Mimetype } from '../../src/rules/mimetype';

describe('Mimetype', () => {

    let mimetype: Mimetype;

    beforeEach(() => {
        mimetype = new Mimetype();
    });

    it('is rule', () => {
        assert.instanceOf(mimetype, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Mimetype('application/javascript').validate('js'));
        assert.isTrue(new Mimetype('application/json').validate('json'));
        assert.isTrue(new Mimetype('text/plain').validate('txt'));
        assert.isTrue(new Mimetype('text/PLAIN').validate('txt'));
        assert.isTrue(new Mimetype('application/json', 'text/plain').validate('json'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Mimetype('false').validate('foobar'));
        assert.isFalse(new Mimetype('foo').validate('bar'));
        assert.isFalse(new Mimetype('txt').validate('foo/txt'));
        assert.isFalse(new Mimetype('text/plain').validate('foo/txt'));
        assert.isFalse(new Mimetype('application/json', 'text/plain').validate('foobar'));

        assert.isFalse(mimetype.validate(''));
        assert.isFalse(mimetype.validate('foo'));
        assert.isFalse(mimetype.validate(Boolean()));
        assert.isFalse(mimetype.validate(Number()));
        assert.isFalse(mimetype.validate(null));
        assert.isFalse(mimetype.validate(undefined));
        assert.isFalse(mimetype.validate(true));
        assert.isFalse(mimetype.validate(false));
        assert.isFalse(mimetype.validate(0));
        assert.isFalse(mimetype.validate(-0));
        assert.isFalse(mimetype.validate(1));
        assert.isFalse(mimetype.validate(-1));
        assert.isFalse(mimetype.validate(0.0));
        assert.isFalse(mimetype.validate(-0.0));
        assert.isFalse(mimetype.validate(1.0));
        assert.isFalse(mimetype.validate(-1.0));
        assert.isFalse(mimetype.validate(0.1));
        assert.isFalse(mimetype.validate(-0.1));
        assert.isFalse(mimetype.validate(1.1));
        assert.isFalse(mimetype.validate(-1.1));
        assert.isFalse(mimetype.validate([]));
        assert.isFalse(mimetype.validate({}));
        assert.isFalse(mimetype.validate(new Array('foo')));
        assert.isFalse(mimetype.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(mimetype.validate(new Foo()));
    });

});
