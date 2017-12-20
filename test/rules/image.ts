import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Image } from '../../src/rules/image';

describe('Image', () => {

    let image: Image;

    beforeEach(() => {
        image = new Image();
    });

    it('is rule', () => {
        assert.instanceOf(image, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(image.validate('foo.png'));
        assert.isTrue(image.validate('foo.jpg'));
        assert.isTrue(image.validate('jpeg'));
        assert.isTrue(image.validate('gif'));
    });

    it('values is not valid', () => {
        assert.isFalse(image.validate('foo/png'));
        assert.isFalse(image.validate('foo/jpg'));
        assert.isFalse(image.validate('foobar'));
    });

});
