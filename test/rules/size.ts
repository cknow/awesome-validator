import * as fs from 'fs';
import * as mock from 'mock-fs';
import * as tempWrite from 'temp-write';

import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Size } from '../../src/rules/size';

describe('Size', () => {

    beforeEach(() => {
        mock({
            sizeFake: 'foo'
        });
    });

    afterEach(() => {
        mock.restore();
    });

    it('is rule', () => {
        assert.instanceOf(new Size(), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Size('5mb', '20mb').validate('10mb'));
        assert.isTrue(new Size().validate('sizeFake'));
        assert.isTrue(new Size(null, '20mb').validate('sizeFake'));
        assert.isTrue(new Size().validate(fs.statSync(tempWrite.sync('foo'))));
        assert.isTrue(new Size(null, '20mb').validate(fs.statSync(tempWrite.sync('foo'))));
        assert.isTrue(new Size().validate('sizeFake'));
        assert.isTrue(new Size(null, '20mb').validate('sizeFake'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Size('5mb', '20mb').validate('30mb'));
        assert.isFalse(new Size('5mb').validate('sizeFake'));
        assert.isFalse(new Size('5mb', '20mb').validate('sizeFake'));
        assert.isFalse(new Size(0, 1).validate('sizeFake'));
        assert.isFalse(new Size(0, 1).validate(fs.statSync(tempWrite.sync())));
    });

});
