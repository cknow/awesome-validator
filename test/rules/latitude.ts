import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Latitude } from '../../src/rules/latitude';

describe('Latitude', () => {

    let latitude: Latitude;

    beforeEach(() => {
        latitude = new Latitude();
    });

    it('is rule', () => {
        assert.instanceOf(latitude, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(latitude.validate('-17.738223'));
        assert.isTrue(latitude.validate('-12.3456789'));
        assert.isTrue(latitude.validate('-60.978437'));
        assert.isTrue(latitude.validate('77.719772'));
        assert.isTrue(latitude.validate('7.264394'));
        assert.isTrue(latitude.validate('0.9557661'));
        assert.isTrue(latitude.validate('31.269161'));
        assert.isTrue(latitude.validate('+12.3456789'));
        assert.isTrue(latitude.validate('-15.379543'));
        assert.isTrue(latitude.validate('11.770570'));
        assert.isTrue(latitude.validate('-55.034319'));
        assert.isTrue(latitude.validate('58.025555'));
        assert.isTrue(latitude.validate('55.720923'));
        assert.isTrue(latitude.validate('-90.00000'));
        assert.isTrue(latitude.validate('-71'));
        assert.isTrue(latitude.validate('-71.616864'));
        assert.isTrue(latitude.validate('-0.55'));
        assert.isTrue(latitude.validate('90'));
        assert.isTrue(latitude.validate('+90'));
        assert.isTrue(latitude.validate('-90'));
        assert.isTrue(latitude.validate('90'));
        assert.isTrue(latitude.validate('0'));
    });

    it('values is not valid', () => {
        assert.isFalse(latitude.validate('020.000000'));
        assert.isFalse(latitude.validate('90.1000000'));
        assert.isFalse(latitude.validate('090.0000'));
        assert.isFalse(latitude.validate('126'));
        assert.isFalse(latitude.validate('-126.400010'));
        assert.isFalse(latitude.validate('-95'));
        assert.isFalse(latitude.validate('-95.738043'));
        assert.isFalse(latitude.validate('137'));
        assert.isFalse(latitude.validate('-137.5942'));
        assert.isFalse(latitude.validate('-120'));
        assert.isFalse(latitude.validate('-119'));
        assert.isFalse(latitude.validate('+119.821728'));
        assert.isFalse(latitude.validate('-110'));
        assert.isFalse(latitude.validate('-110.369532'));
        assert.isFalse(latitude.validate('-120.969949'));
        assert.isFalse(latitude.validate('-116'));
        assert.isFalse(latitude.validate('-116.894222'));
        assert.isFalse(latitude.validate('-112'));
        assert.isFalse(latitude.validate('-112.96381'));
        assert.isFalse(latitude.validate('-90.'));
        assert.isFalse(latitude.validate('+90.1'));
        assert.isFalse(latitude.validate('+,-'));
        assert.isFalse(latitude.validate('(,)'));
        assert.isFalse(latitude.validate(','));
        assert.isFalse(latitude.validate(' '));
        assert.isFalse(latitude.validate(Boolean()));
        assert.isFalse(latitude.validate(String()));
        assert.isFalse(latitude.validate(null));
        assert.isFalse(latitude.validate(undefined));
        assert.isFalse(latitude.validate(true));
        assert.isFalse(latitude.validate(false));
        assert.isFalse(latitude.validate('true'));
        assert.isFalse(latitude.validate('false'));
        assert.isFalse(latitude.validate([]));
        assert.isFalse(latitude.validate({}));
        assert.isFalse(latitude.validate(new Array('foo')));
        assert.isFalse(latitude.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(latitude.validate(new Foo()));
    });

});
