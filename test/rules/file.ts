import * as fs from 'fs';
import * as mock from 'mock-fs';
import * as tempWrite from 'temp-write';

import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { File } from '../../src/rules/file';

describe('File', () => {

    let file: File;

    beforeEach(() => {
        file = new File();

        mock({
            'file.txt': 'foo'
        });
    });

    afterEach(() => {
        mock.restore();
    });

    it('is rule', () => {
        assert.instanceOf(file, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(file.validate('file.txt'));
        assert.isTrue(file.validate(fs.statSync(tempWrite.sync('foo'))));
    });

    it('values is not valid', () => {
        assert.isFalse(file.validate(''));
        assert.isFalse(file.validate('foo'));
        assert.isFalse(file.validate(__dirname));
    });

});
