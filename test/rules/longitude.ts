import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Longitude } from '../../src/rules/longitude';

describe('Longitude', () => {

    let longitude: Longitude;

    beforeEach(() => {
        longitude = new Longitude();
    });

    it('is rule', () => {
        assert.instanceOf(longitude, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(longitude.validate('85.605469'));
        assert.isTrue(longitude.validate('+12.3456789'));
        assert.isTrue(longitude.validate('-0.175781'));
        assert.isTrue(longitude.validate('-37.529297'));
        assert.isTrue(longitude.validate('165.058594'));
        assert.isTrue(longitude.validate('-19.863281'));
        assert.isTrue(longitude.validate('164.355469'));
        assert.isTrue(longitude.validate('-12.3456789'));
        assert.isTrue(longitude.validate('-137.285156'));
        assert.isTrue(longitude.validate('-162.949219'));
        assert.isTrue(longitude.validate('113.027344'));
        assert.isTrue(longitude.validate('36.738281'));
        assert.isTrue(longitude.validate('-28.652344'));
        assert.isTrue(longitude.validate('-180.00000'));
        assert.isTrue(longitude.validate('-146'));
        assert.isTrue(longitude.validate('-146.616864'));
        assert.isTrue(longitude.validate('+0.22'));
        assert.isTrue(longitude.validate('180'));
        assert.isTrue(longitude.validate('-180'));
        assert.isTrue(longitude.validate('+180'));
        assert.isTrue(longitude.validate('0'));
    });

    it('values is not valid', () => {
        assert.isFalse(longitude.validate('010.000000000'));
        assert.isFalse(longitude.validate('360.0000000'));
        assert.isFalse(longitude.validate('-180.00001'));
        assert.isFalse(longitude.validate('0180.0000'));
        assert.isFalse(longitude.validate('-203'));
        assert.isFalse(longitude.validate('-196'));
        assert.isFalse(longitude.validate('-196.821728'));
        assert.isFalse(longitude.validate('-223'));
        assert.isFalse(longitude.validate('223.369532'));
        assert.isFalse(longitude.validate('+203.969949'));
        assert.isFalse(longitude.validate('-180.'));
        assert.isFalse(longitude.validate('-180.1'));
        assert.isFalse(longitude.validate('+,-'));
        assert.isFalse(longitude.validate('(,)'));
        assert.isFalse(longitude.validate(','));
        assert.isFalse(longitude.validate(' '));
        assert.isFalse(longitude.validate(Boolean()));
        assert.isFalse(longitude.validate(String()));
        assert.isFalse(longitude.validate(null));
        assert.isFalse(longitude.validate(undefined));
        assert.isFalse(longitude.validate(true));
        assert.isFalse(longitude.validate(false));
        assert.isFalse(longitude.validate('true'));
        assert.isFalse(longitude.validate('false'));
        assert.isFalse(longitude.validate([]));
        assert.isFalse(longitude.validate({}));
        assert.isFalse(longitude.validate(new Array('foo')));
        assert.isFalse(longitude.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(longitude.validate(new Foo()));
    });

});
