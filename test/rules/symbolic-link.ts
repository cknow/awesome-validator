import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { SymbolicLink } from '../../src/rules/symbolic-link';

describe('SymbolicLink', () => {

    let symbolicLink: SymbolicLink;

    beforeEach(() => {
        symbolicLink = new SymbolicLink();
    });

    it('is rule', () => {
        assert.instanceOf(symbolicLink, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(symbolicLink.validate('https://example.org/'));
    });

    it('values is not valid', () => {
        assert.isFalse(symbolicLink.validate('foo'));
        assert.isFalse(symbolicLink.validate(null));
        assert.isFalse(symbolicLink.validate(undefined));
        assert.isFalse(symbolicLink.validate(true));
        assert.isFalse(symbolicLink.validate(false));
    });

});
