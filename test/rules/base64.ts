import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Base64 } from '../../src/rules/base64';

describe('Base64', () => {

    let base64: Base64;

    beforeEach(() => {
        base64 = new Base64();
    });

    it('is rule', () => {
        assert.instanceOf(base64, AbstractRule);
    });

    it('values is valid', () => {
        const lines: string[] = [
            'TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlz',
            'IHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2Yg',
            'dGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGlu',
            'dWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRo',
            'ZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4='
        ];

        assert.isTrue(base64.validate('YW55IGNhcm5hbCBwbGVhc3VyZS4=')),
        assert.isTrue(base64.validate('YW55IGNhcm5hbCBwbGVhc3VyZQ==')),
        assert.isTrue(base64.validate('YW55IGNhcm5hbCBwbGVhc3Vy')),
        assert.isTrue(base64.validate('YW55IGNhcm5hbCBwbGVhc3U=')),
        assert.isTrue(base64.validate('YW55IGNhcm5hbCBwbGVhcw==')),
        assert.isTrue(base64.validate('cGxlYXN1cmUu')),
        assert.isTrue(base64.validate('bGVhc3VyZS4=')),
        assert.isTrue(base64.validate('ZWFzdXJlLg==')),
        assert.isTrue(base64.validate('YXN1cmUu')),
        assert.isTrue(base64.validate('c3VyZS4=')),
        assert.isTrue(base64.validate('WeJcFMQ/8+8QJ/w0hHh+0g==')),
        assert.isTrue(base64.validate(lines.join('\n')));
        assert.isTrue(base64.validate(lines.join('\r\n')));
    });

    it('values is not valid', () => {
        assert.isFalse(base64.validate(''));
        assert.isFalse(base64.validate('hello!'));
        assert.isFalse(base64.validate('=c3VyZS4'));
        assert.isFalse(base64.validate('YW55IGNhcm5hbCBwbGVhc3VyZ==='));
        assert.isFalse(base64.validate(Boolean()));
        assert.isFalse(base64.validate(Boolean(true)));
        assert.isFalse(base64.validate(Boolean(false)));
        assert.isFalse(base64.validate(Boolean('1')));
        assert.isFalse(base64.validate(Boolean('0')));
        assert.isFalse(base64.validate(true));
        assert.isFalse(base64.validate(false));
        assert.isFalse(base64.validate(String()));
        assert.isFalse(base64.validate(Number()));
        assert.isFalse(base64.validate(null));
        assert.isFalse(base64.validate(undefined));
        assert.isFalse(base64.validate('-1.1'));
        assert.isFalse(base64.validate('1.1'));
        assert.isFalse(base64.validate('1'));
        assert.isFalse(base64.validate('-1'));
        assert.isFalse(base64.validate('0'));
        assert.isFalse(base64.validate(' '));
        assert.isFalse(base64.validate('   '));
        assert.isFalse(base64.validate(0));
        assert.isFalse(base64.validate(-0));
        assert.isFalse(base64.validate(1));
        assert.isFalse(base64.validate(-1));
        assert.isFalse(base64.validate(0.0));
        assert.isFalse(base64.validate(-0.0));
        assert.isFalse(base64.validate(1.0));
        assert.isFalse(base64.validate(-1.0));
        assert.isFalse(base64.validate(0.1));
        assert.isFalse(base64.validate(-0.1));
        assert.isFalse(base64.validate(1.1));
        assert.isFalse(base64.validate(-1.1));
        assert.isFalse(base64.validate([]));
        assert.isFalse(base64.validate({}));
        assert.isFalse(base64.validate(new Array('foo')));
        assert.isFalse(base64.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(base64.validate(new Foo()));
    });

});
