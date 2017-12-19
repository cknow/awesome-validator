import * as mock from 'mock-fs';

import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Readable } from '../../src/rules/readable';

describe('Readable', () => {

    let readable: Readable;

    beforeEach(() => {
        readable = new Readable();

        mock({
            'file.txt': 'foo'
        });
    });

    afterEach(() => {
        mock.restore();
    });

    it('is rule', () => {
        assert.instanceOf(readable, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(readable.validate(''));
        assert.isTrue(readable.validate('file.txt'));
    });

    it('values is not valid', () => {
        assert.isFalse(readable.validate('foo'));
        assert.isFalse(readable.validate('file-not-found.txt'));
    });

});
