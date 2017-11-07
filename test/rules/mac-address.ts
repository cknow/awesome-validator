import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { MacAddress } from '../../src/rules/mac-address';

describe('MacAddress', () => {

    let macAddress: MacAddress;

    beforeEach(() => {
        macAddress = new MacAddress();
    });

    it('is rule', () => {
        assert.instanceOf(macAddress, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(macAddress.validate('00:11:22:33:44:55'));
        assert.isTrue(macAddress.validate('66-77-88-99-aa-bb'));
        assert.isTrue(macAddress.validate('AF:0F:bd:12:44:ba'));
        assert.isTrue(macAddress.validate('90-bc-d3-1a-dd-cc'));
    });

    it('values is not valid', () => {
        assert.isFalse(macAddress.validate(''));
        assert.isFalse(macAddress.validate('00-1122:33:44:55'));
        assert.isFalse(macAddress.validate('66-77--99-jj-bb'));
        assert.isFalse(macAddress.validate('HH:0F-bd:12:44:ba'));
        assert.isFalse(macAddress.validate('90-bc-nk:1a-dd-cc'));
    });

});
