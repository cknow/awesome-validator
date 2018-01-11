import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Extension } from '../../src/rules/extension';

describe('Extension', () => {

    let extension: Extension;

    beforeEach(() => {
        extension = new Extension();
    });

    it('is rule', () => {
        assert.instanceOf(extension, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Extension('foo').validate('foo'));
        assert.isTrue(new Extension('png').validate('image.png'));
        assert.isTrue(new Extension('png').validate('image.PNG'));
        assert.isTrue(new Extension('png', 'jpg', 'gif').validate('image.jpg'));
    });

    it('values is not valid', () => {
        assert.isFalse(new Extension('xls').validate('file.xlsx'));
        assert.isFalse(new Extension('png', 'jpg', 'gif').validate('image.jpeg'));

        assert.isFalse(extension.validate(''));
        assert.isFalse(extension.validate('foo'));
        assert.isFalse(extension.validate(Boolean()));
        assert.isFalse(extension.validate(Number()));
        assert.isFalse(extension.validate(null));
        assert.isFalse(extension.validate(undefined));
        assert.isFalse(extension.validate(true));
        assert.isFalse(extension.validate(false));
        assert.isFalse(extension.validate(0));
        assert.isFalse(extension.validate(-0));
        assert.isFalse(extension.validate(1));
        assert.isFalse(extension.validate(-1));
        assert.isFalse(extension.validate(0.0));
        assert.isFalse(extension.validate(-0.0));
        assert.isFalse(extension.validate(1.0));
        assert.isFalse(extension.validate(-1.0));
        assert.isFalse(extension.validate(0.1));
        assert.isFalse(extension.validate(-0.1));
        assert.isFalse(extension.validate(1.1));
        assert.isFalse(extension.validate(-1.1));
        assert.isFalse(extension.validate([]));
        assert.isFalse(extension.validate({}));
        assert.isFalse(extension.validate(new Array('foo')));
        assert.isFalse(extension.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(extension.validate(new Foo()));
    });

});
