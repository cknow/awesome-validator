import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Extension } from '../../src/rules/extension';

describe('Extension', () => {

    it('is rule', () => {
        assert.instanceOf(new Extension('foo'), AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Extension('foo').validate('foo'));
        assert.isTrue(new Extension('png').validate('image.png'));
        assert.isTrue(new Extension('png').validate('image.PNG'));
        assert.isTrue(new Extension(['png', 'jpg', 'gif']).validate('image.jpg'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Extension(null).validate(undefined));
        assert.isFalse(new Extension(null).validate(null));
        assert.isFalse(new Extension(null).validate('foo'));
        assert.isFalse(new Extension('xls').validate('file.xlsx'));
        assert.isFalse(new Extension(['png', 'jpg', 'gif']).validate('image.jpeg'));
    });

});
