import { assert } from 'chai';

import { AbstractRule } from '../src/rules/abstract-rule';
import { validator } from '../src/validator';

describe('Validator', () => {

    it('is object', () => {
        assert.instanceOf(validator, Object);
    });

    it('properties is rules', () => {
        assert.instanceOf(validator.alwaysInvalid(), AbstractRule);
        assert.instanceOf(validator.alwaysValid(), AbstractRule);
        assert.instanceOf(validator.arrayType(), AbstractRule);
        assert.instanceOf(validator.booleanType(), AbstractRule);
        assert.instanceOf(validator.empty(), AbstractRule);
        assert.instanceOf(validator.floatType(), AbstractRule);
        assert.instanceOf(validator.intType(), AbstractRule);
        assert.instanceOf(validator.json(), AbstractRule);
        assert.instanceOf(validator.nullType(), AbstractRule);
        assert.instanceOf(validator.numberType(), AbstractRule);
        assert.instanceOf(validator.objectStrictType(), AbstractRule);
        assert.instanceOf(validator.objectType(), AbstractRule);
        assert.instanceOf(validator.regex(/foo/), AbstractRule);
        assert.instanceOf(validator.regexType(), AbstractRule);
        assert.instanceOf(validator.required(), AbstractRule);
        assert.instanceOf(validator.scalar(), AbstractRule);
        assert.instanceOf(validator.sorted(), AbstractRule);
        assert.instanceOf(validator.sorted(null, false), AbstractRule);
        assert.instanceOf(validator.stringType(), AbstractRule);
        assert.instanceOf(validator.typeOf(/foo/), AbstractRule);
        assert.instanceOf(validator.url(), AbstractRule);
        assert.instanceOf(validator.version(), AbstractRule);
        assert.instanceOf(validator.vowel(), AbstractRule);
    });

});
