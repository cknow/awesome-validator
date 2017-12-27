import * as mock from 'mock-fs';

import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Exists } from '../../src/rules/exists';

describe('Exists', () => {

    let exists: Exists;

    beforeEach(() => {
        exists = new Exists();

        mock({
            'file.txt': 'foo',
            'dir': {}
        });
    });

    afterEach(() => {
        mock.restore();
    });

    it('is rule', () => {
        assert.instanceOf(exists, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(exists.validate('file.txt'));
        assert.isTrue(exists.validate('dir'));
    });

    it('values is not valid', () => {
        assert.isFalse(exists.validate('file-not-exists'));
        assert.isFalse(exists.validate('dir-not-exists'));
        assert.isFalse(exists.validate([]));
        assert.isFalse(exists.validate({}));
    });

});
