import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { RegexVal } from '../../src/rules/regex-val';

describe('Regex Val', () => {

    let regexVal: RegexVal;

    beforeEach(() => {
        regexVal = new RegexVal();
    });

    it('is rule', () => {
        assert.instanceOf(regexVal, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(regexVal.validate('[a-z]'));
    });

    it('values is not valid', () => {
        assert.isFalse(regexVal.validate('*'));
    });

});
