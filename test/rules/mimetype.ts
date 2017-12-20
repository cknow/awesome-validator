import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Mimetype } from '../../src/rules/mimetype';

describe('Mimetype', () => {

    it('is rule', () => {
        assert.instanceOf(new Mimetype('foo'), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Mimetype('application/javascript').validate('js'));
        assert.isTrue(new Mimetype('application/json').validate('json'));
        assert.isTrue(new Mimetype('text/plain').validate('txt'));
        assert.isTrue(new Mimetype('text/PLAIN').validate('txt'));
        assert.isTrue(new Mimetype(['application/json', 'text/plain']).validate('json'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Mimetype('false').validate('foobar'));
        assert.isFalse(new Mimetype('foo').validate('bar'));
        assert.isFalse(new Mimetype('txt').validate('foo/txt'));
        assert.isFalse(new Mimetype('text/plain').validate('foo/txt'));
        assert.isFalse(new Mimetype(['application/json', 'text/plain']).validate('foobar'));
    });

});
