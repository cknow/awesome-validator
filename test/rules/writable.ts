import * as mock from 'mock-fs';

import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Writable } from '../../src/rules/writable';

describe('Writable', () => {

    let writable: Writable;

    beforeEach(() => {
        writable = new Writable();

        mock({
            'file.txt': 'foo'
        });
    });

    afterEach(() => {
        mock.restore();
    });

    it('is rule', () => {
        assert.instanceOf(writable, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(writable.validate(''));
        assert.isTrue(writable.validate('file.txt'));
    });

    it('values is not valid', () => {
        assert.isFalse(writable.validate('foo'));
        assert.isFalse(writable.validate('file-not-found.txt'));
        assert.isFalse(writable.validate(null));
        assert.isFalse(writable.validate(undefined));
        assert.isFalse(writable.validate(true));
        assert.isFalse(writable.validate(false));
    });

});
