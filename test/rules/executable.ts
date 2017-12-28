import * as mock from 'mock-fs';

import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Executable } from '../../src/rules/executable';

describe('Executable', () => {

    let executable: Executable;

    beforeEach(() => {
        executable = new Executable();

        mock({
            'dir': {},
            'script.sh': mock.file({
                content: 'foo',
                mode: parseInt('0001', 8)
            })
        });
    });

    afterEach(() => {
        mock.restore();
    });

    it('is rule', () => {
        assert.instanceOf(executable, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(executable.validate('script.sh'));
    });

    it('values is not valid', () => {
        assert.isFalse(executable.validate(undefined));
        assert.isFalse(executable.validate(null));
        assert.isFalse(executable.validate('dir'));
        assert.isFalse(executable.validate('image.png'));
    });

});
