import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { HexRgbColor } from '../../src/rules/hex-rgb-color';

describe('HexRgbColor', () => {

    let hexRgbColor: HexRgbColor;

    beforeEach(() => {
        hexRgbColor = new HexRgbColor();
    });

    it('is rule', () => {
        assert.instanceOf(hexRgbColor, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(hexRgbColor.validate('#000'));
        assert.isTrue(hexRgbColor.validate('#00000F'));
        assert.isTrue(hexRgbColor.validate('#123'));
        assert.isTrue(hexRgbColor.validate('#123456'));
        assert.isTrue(hexRgbColor.validate('#FFFFFF'));
        assert.isTrue(hexRgbColor.validate('123123'));
        assert.isTrue(hexRgbColor.validate('FFFFFF'));
    });

    it('values is not valid', () => {
        assert.isFalse(hexRgbColor.validate(''));
        assert.isFalse(hexRgbColor.validate(null));
        assert.isFalse(hexRgbColor.validate(undefined));
        assert.isFalse(hexRgbColor.validate('#0'));
        assert.isFalse(hexRgbColor.validate('#0000G0'));
        assert.isFalse(hexRgbColor.validate('#0FG'));
        assert.isFalse(hexRgbColor.validate('#1234'));
        assert.isFalse(hexRgbColor.validate('#AAAAAA1'));
        assert.isFalse(hexRgbColor.validate('#S'));
        assert.isFalse(hexRgbColor.validate('1234'));
        assert.isFalse(hexRgbColor.validate('foo'));
        assert.isFalse(hexRgbColor.validate(0x39F));
        assert.isFalse(hexRgbColor.validate(5));
        assert.isFalse(hexRgbColor.validate(1));
        assert.isFalse(hexRgbColor.validate(443));
        assert.isFalse(hexRgbColor.validate([]));
    });

});
