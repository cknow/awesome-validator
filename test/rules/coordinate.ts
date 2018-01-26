import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Coordinate } from '../../src/rules/coordinate';

describe('Coordinate', () => {

    let coordinate: Coordinate;

    beforeEach(() => {
        coordinate = new Coordinate();
    });

    it('is rule', () => {
        assert.instanceOf(coordinate, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(coordinate.validate('(-17.738223, 85.605469)'));
        assert.isTrue(coordinate.validate('(-12.3456789, +12.3456789)'));
        assert.isTrue(coordinate.validate('(-60.978437, -0.175781)'));
        assert.isTrue(coordinate.validate('(77.719772, -37.529297)'));
        assert.isTrue(coordinate.validate('(7.264394, 165.058594)'));
        assert.isTrue(coordinate.validate('0.955766, -19.863281'));
        assert.isTrue(coordinate.validate('(31.269161,164.355469)'));
        assert.isTrue(coordinate.validate('+12.3456789, -12.3456789'));
        assert.isTrue(coordinate.validate('-15.379543, -137.285156'));
        assert.isTrue(coordinate.validate('(11.770570, -162.949219)'));
        assert.isTrue(coordinate.validate('-55.034319, 113.027344'));
        assert.isTrue(coordinate.validate('58.025555, 36.738281'));
        assert.isTrue(coordinate.validate('55.720923,-28.652344'));
        assert.isTrue(coordinate.validate('-90.00000,-180.00000'));
        assert.isTrue(coordinate.validate('(-71, -146)'));
        assert.isTrue(coordinate.validate('(-71.616864, -146.616864)'));
        assert.isTrue(coordinate.validate('-0.55, +0.22'));
        assert.isTrue(coordinate.validate('90, 180'));
        assert.isTrue(coordinate.validate('+90, -180'));
        assert.isTrue(coordinate.validate('-90,+180'));
        assert.isTrue(coordinate.validate('90,180'));
        assert.isTrue(coordinate.validate('0, 0'));
    });

    it('values is not valid', () => {
        assert.isFalse(coordinate.validate('(020.000000, 010.000000000)'));
        assert.isFalse(coordinate.validate('89.9999999989, 360.0000000'));
        assert.isFalse(coordinate.validate('90.1000000, 180.000000'));
        assert.isFalse(coordinate.validate('+90.000000, -180.00001'));
        assert.isFalse(coordinate.validate('090.0000, 0180.0000'));
        assert.isFalse(coordinate.validate('126, -158'));
        assert.isFalse(coordinate.validate('(-126.400010, -158.400010)'));
        assert.isFalse(coordinate.validate('-95, -96'));
        assert.isFalse(coordinate.validate('-95.738043, -96.738043'));
        assert.isFalse(coordinate.validate('137, -148'));
        assert.isFalse(coordinate.validate('(-137.5942, -148.5942)'));
        assert.isFalse(coordinate.validate('(-120, -203)'));
        assert.isFalse(coordinate.validate('(-119, -196)'));
        assert.isFalse(coordinate.validate('+119.821728, -196.821728'));
        assert.isFalse(coordinate.validate('(-110, -223)'));
        assert.isFalse(coordinate.validate('-110.369532, 223.369532'));
        assert.isFalse(coordinate.validate('(-120.969949, +203.969949)'));
        assert.isFalse(coordinate.validate('-116, -126'));
        assert.isFalse(coordinate.validate('-116.894222, -126.894222'));
        assert.isFalse(coordinate.validate('-112, -160'));
        assert.isFalse(coordinate.validate('-112.96381, -160.96381'));
        assert.isFalse(coordinate.validate('-90., -180.'));
        assert.isFalse(coordinate.validate('+90.1, -180.1'));
        assert.isFalse(coordinate.validate('020.000000'));
        assert.isFalse(coordinate.validate('90.1000000'));
        assert.isFalse(coordinate.validate('090.0000'));
        assert.isFalse(coordinate.validate('126'));
        assert.isFalse(coordinate.validate('-126.400010'));
        assert.isFalse(coordinate.validate('-95'));
        assert.isFalse(coordinate.validate('-95.738043'));
        assert.isFalse(coordinate.validate('137'));
        assert.isFalse(coordinate.validate('-137.5942'));
        assert.isFalse(coordinate.validate('-120'));
        assert.isFalse(coordinate.validate('-119'));
        assert.isFalse(coordinate.validate('+119.821728'));
        assert.isFalse(coordinate.validate('-110'));
        assert.isFalse(coordinate.validate('-110.369532'));
        assert.isFalse(coordinate.validate('-120.969949'));
        assert.isFalse(coordinate.validate('-116'));
        assert.isFalse(coordinate.validate('-116.894222'));
        assert.isFalse(coordinate.validate('-112'));
        assert.isFalse(coordinate.validate('-112.96381'));
        assert.isFalse(coordinate.validate('-90.'));
        assert.isFalse(coordinate.validate('+90.1'));
        assert.isFalse(coordinate.validate('010.000000000'));
        assert.isFalse(coordinate.validate('360.0000000'));
        assert.isFalse(coordinate.validate('-180.00001'));
        assert.isFalse(coordinate.validate('0180.0000'));
        assert.isFalse(coordinate.validate('-203'));
        assert.isFalse(coordinate.validate('-196'));
        assert.isFalse(coordinate.validate('-196.821728'));
        assert.isFalse(coordinate.validate('-223'));
        assert.isFalse(coordinate.validate('223.369532'));
        assert.isFalse(coordinate.validate('+203.969949'));
        assert.isFalse(coordinate.validate('-180.'));
        assert.isFalse(coordinate.validate('-180.1'));
        assert.isFalse(coordinate.validate('+,-'));
        assert.isFalse(coordinate.validate('(,)'));
        assert.isFalse(coordinate.validate(','));
        assert.isFalse(coordinate.validate(' '));
        assert.isFalse(coordinate.validate(''));
        assert.isFalse(coordinate.validate('16-50'));
        assert.isFalse(coordinate.validate('a'));
        assert.isFalse(coordinate.validate(' '));
        assert.isFalse(coordinate.validate('Foo'));
        assert.isFalse(coordinate.validate('12.1'));
        assert.isFalse(coordinate.validate('-12'));
        assert.isFalse(coordinate.validate(-12));
        assert.isFalse(coordinate.validate('( )_{}'));
        assert.isFalse(coordinate.validate(Boolean()));
        assert.isFalse(coordinate.validate(Number()));
        assert.isFalse(coordinate.validate(String()));
        assert.isFalse(coordinate.validate(null));
        assert.isFalse(coordinate.validate(undefined));
        assert.isFalse(coordinate.validate(true));
        assert.isFalse(coordinate.validate(false));
        assert.isFalse(coordinate.validate('true'));
        assert.isFalse(coordinate.validate('false'));
        assert.isFalse(coordinate.validate('-1.1'));
        assert.isFalse(coordinate.validate('1.1'));
        assert.isFalse(coordinate.validate('1'));
        assert.isFalse(coordinate.validate('-1'));
        assert.isFalse(coordinate.validate('0'));
        assert.isFalse(coordinate.validate(0));
        assert.isFalse(coordinate.validate(-0));
        assert.isFalse(coordinate.validate(1));
        assert.isFalse(coordinate.validate(-1));
        assert.isFalse(coordinate.validate(0.0));
        assert.isFalse(coordinate.validate(-0.0));
        assert.isFalse(coordinate.validate(1.0));
        assert.isFalse(coordinate.validate(-1.0));
        assert.isFalse(coordinate.validate(0.1));
        assert.isFalse(coordinate.validate(-0.1));
        assert.isFalse(coordinate.validate(1.1));
        assert.isFalse(coordinate.validate(-1.1));
        assert.isFalse(coordinate.validate([]));
        assert.isFalse(coordinate.validate({}));
        assert.isFalse(coordinate.validate(new Array('foo')));
        assert.isFalse(coordinate.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(coordinate.validate(new Foo()));
    });

});
