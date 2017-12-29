import * as fs from 'fs';
import * as mock from 'mock-fs';

import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Directory } from '../../src/rules/directory';

describe('Directory', () => {

    let directory: Directory;

    beforeEach(() => {
        directory = new Directory();

        mock({
            'dir': {},
            'file.txt': 'foo'
        });
    });

    afterEach(() => {
        mock.restore();
    });

    it('is rule', () => {
        assert.instanceOf(directory, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(directory.validate('dir'));
        assert.isTrue(directory.validate(fs.statSync('dir')));
    });

    it('values is not valid', () => {
        assert.isFalse(directory.validate('foo'));
        assert.isFalse(directory.validate('file.txt'));
        assert.isFalse(directory.validate(__filename));
    });

});
