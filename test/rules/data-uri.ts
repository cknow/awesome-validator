import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { DataUri } from '../../src/rules/data-uri';

describe('DataUri', () => {

    let dataUri: DataUri;

    beforeEach(() => {
        dataUri = new DataUri();
    });

    it('is rule', () => {
        assert.instanceOf(dataUri, AbstractRule);
    });

    it('values is valid', () => {
        /* tslint:disable max-line-length */
        assert.isTrue(dataUri.validate('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC'));
        assert.isTrue(dataUri.validate('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAFVBMVEXk5OTn5+ft7e319fX29vb5+fn///++GUmVAAAALUlEQVQIHWNICnYLZnALTgpmMGYIFWYIZTA2ZFAzTTFlSDFVMwVyQhmAwsYMAKDaBy0axX/iAAAAAElFTkSuQmCC'));
        assert.isTrue(dataUri.validate('   data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIBAMAAAA2IaO4AAAAFVBMVEXk5OTn5+ft7e319fX29vb5+fn///++GUmVAAAALUlEQVQIHWNICnYLZnALTgpmMGYIFWYIZTA2ZFAzTTFlSDFVMwVyQhmAwsYMAKDaBy0axX/iAAAAAElFTkSuQmCC   '));
        assert.isTrue(dataUri.validate('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%3E%3Crect%20fill%3D%22%2300B1FF%22%20width%3D%22100%22%20height%3D%22100%22%2F%3E%3C%2Fsvg%3E'));
        assert.isTrue(dataUri.validate('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48cmVjdCBmaWxsPSIjMDBCMUZGIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIvPjwvc3ZnPg=='));
        /* tslint:enable max-line-length */

        assert.isTrue(dataUri.validate(' data:,Hello%2C%20World!'));
        assert.isTrue(dataUri.validate(' data:,Hello World!'));
        assert.isTrue(dataUri.validate(' data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D'));
        assert.isTrue(dataUri.validate(' data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E'));
        assert.isTrue(dataUri.validate('data:,A%20brief%20note'));
        assert.isTrue(dataUri.validate('data:text/html;charset=US-ASCII,%3Ch1%3EHello!%3C%2Fh1%3E'));
    });

    it('values is not valid', () => {
        /* tslint:disable max-line-length */
        assert.isFalse(dataUri.validate('data:base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC'));
        assert.isFalse(dataUri.validate('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAABlBMVEUAAAD///+l2Z/dAAAAM0lEQVR4nGP4/5/h/1+G/58ZDrAz3D/McH8yw83NDDeNGe4Ug9C9zwz3gVLMDA/A6P9/AFGGFyjOXZtQAAAAAElFTkSuQmCC'));
        /* tslint:enable max-line-length */

        assert.isFalse(dataUri.validate('http://wikipedia.org'));
        assert.isFalse(dataUri.validate('base64'));
        assert.isFalse(dataUri.validate('dataxbase64'));
        assert.isFalse(dataUri.validate('data:HelloWorld'));
        assert.isFalse(dataUri.validate('data:text/html;charset=,%3Ch1%3EHello!%3C%2Fh1%3E'));
        assert.isFalse(dataUri.validate('data:text/html;charset,%3Ch1%3EHello!%3C%2Fh1%3E'));
        assert.isFalse(dataUri.validate(''));
        assert.isFalse(dataUri.validate('16-50'));
        assert.isFalse(dataUri.validate('a'));
        assert.isFalse(dataUri.validate(' '));
        assert.isFalse(dataUri.validate('Foo'));
        assert.isFalse(dataUri.validate('12.1'));
        assert.isFalse(dataUri.validate('-12'));
        assert.isFalse(dataUri.validate(-12));
        assert.isFalse(dataUri.validate('( )_{}'));
        assert.isFalse(dataUri.validate(Boolean()));
        assert.isFalse(dataUri.validate(Number()));
        assert.isFalse(dataUri.validate(String()));
        assert.isFalse(dataUri.validate(null));
        assert.isFalse(dataUri.validate(undefined));
        assert.isFalse(dataUri.validate(true));
        assert.isFalse(dataUri.validate(false));
        assert.isFalse(dataUri.validate('true'));
        assert.isFalse(dataUri.validate('false'));
        assert.isFalse(dataUri.validate('-1.1'));
        assert.isFalse(dataUri.validate('1.1'));
        assert.isFalse(dataUri.validate('1'));
        assert.isFalse(dataUri.validate('-1'));
        assert.isFalse(dataUri.validate('0'));
        assert.isFalse(dataUri.validate(0));
        assert.isFalse(dataUri.validate(-0));
        assert.isFalse(dataUri.validate(1));
        assert.isFalse(dataUri.validate(-1));
        assert.isFalse(dataUri.validate(0.0));
        assert.isFalse(dataUri.validate(-0.0));
        assert.isFalse(dataUri.validate(1.0));
        assert.isFalse(dataUri.validate(-1.0));
        assert.isFalse(dataUri.validate(0.1));
        assert.isFalse(dataUri.validate(-0.1));
        assert.isFalse(dataUri.validate(1.1));
        assert.isFalse(dataUri.validate(-1.1));
        assert.isFalse(dataUri.validate([]));
        assert.isFalse(dataUri.validate({}));
        assert.isFalse(dataUri.validate(new Array('foo')));
        assert.isFalse(dataUri.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(dataUri.validate(new Foo()));
    });

});
