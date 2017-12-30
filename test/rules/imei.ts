import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Imei } from '../../src/rules/imei';

describe('Imei', () => {

    let imei: Imei;

    beforeEach(() => {
        imei = new Imei();
    });

    it('is rule', () => {
        assert.instanceOf(imei, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(imei.validate('35-007752-323751-3'));
        assert.isTrue(imei.validate('35-209900-176148-1'));
        assert.isTrue(imei.validate('350077523237513'));
        assert.isTrue(imei.validate('356938035643809'));
        assert.isTrue(imei.validate('490154203237518'));
        assert.isTrue(imei.validate(350077523237513));
        assert.isTrue(imei.validate(356938035643809));
        assert.isTrue(imei.validate(490154203237518));
    });

    it('values is not valid', () => {
        assert.isFalse(imei.validate('490154203237512'));
        assert.isFalse(imei.validate('4901542032375125'));
        assert.isFalse(imei.validate('Whateveeeeeerrr'));
        assert.isFalse(imei.validate(null));
        assert.isFalse(imei.validate(undefined));
        assert.isFalse(imei.validate(false));
        assert.isFalse(imei.validate('foo'));
        assert.isFalse(imei.validate(' '));
    });

});
