import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Port } from '../../src/rules/port';

describe('Port', () => {

    let port: Port;

    beforeEach(() => {
        port = new Port();
    });

    it('is rule', () => {
        assert.instanceOf(port, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(port.validate('0'));
        assert.isTrue(port.validate('22'));
        assert.isTrue(port.validate('80'));
        assert.isTrue(port.validate('443'));
        assert.isTrue(port.validate('3000'));
        assert.isTrue(port.validate('8080'));
        assert.isTrue(port.validate('65535'));
    });

    it('values is not valid', () => {
        assert.isFalse(port.validate('-1'));
        assert.isFalse(port.validate('65536'));
        assert.isFalse(port.validate('808080'));
    });

});
