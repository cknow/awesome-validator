import { assert } from 'chai';

import { AllOf } from '../src/rules/all-of';
import { IntType } from '../src/rules/int-type';
import { Required } from '../src/rules/required';
import { Validator } from '../src/validator';

describe('Validator', () => {

    let validator: Validator;

    beforeEach(() => {
        validator = new Validator();
    });

    it('rules', () => {
        assert.instanceOf(validator.allOf(validator.alwaysValid()), AllOf);
        assert.instanceOf(validator.alwaysInvalid(), Validator);
        assert.instanceOf(validator.alwaysValid(), Validator);
        assert.instanceOf(validator.anyOf(validator.alwaysValid()), Validator);
        assert.instanceOf(validator.arrayInstance(), Validator);
        assert.instanceOf(validator.arrayType(), Validator);
        assert.instanceOf(validator.booleanType(), Validator);
        assert.instanceOf(validator.cnh(), Validator);
        assert.instanceOf(validator.cnpj(), Validator);
        assert.instanceOf(validator.cpf(), Validator);
        assert.instanceOf(validator.empty(), Validator);
        assert.instanceOf(validator.even(), Validator);
        assert.instanceOf(validator.floatType(), Validator);
        assert.instanceOf(validator.instanceOf(Object), Validator);
        assert.instanceOf(validator.intType(), Validator);
        assert.instanceOf(validator.json(), Validator);
        assert.instanceOf(validator.lowercase(), Validator);
        assert.instanceOf(validator.nullType(), Validator);
        assert.instanceOf(validator.numberType(), Validator);
        assert.instanceOf(validator.objectInstance(), Validator);
        assert.instanceOf(validator.objectTypeStrict(), Validator);
        assert.instanceOf(validator.objectType(), Validator);
        assert.instanceOf(validator.regexInstance(), Validator);
        assert.instanceOf(validator.regexType(), Validator);
        assert.instanceOf(validator.regex(/foo/), Validator);
        assert.instanceOf(validator.required(), Validator);
        assert.instanceOf(validator.scalar(), Validator);
        assert.instanceOf(validator.sorted(), Validator);
        assert.instanceOf(validator.sorted(null, false), Validator);
        assert.instanceOf(validator.stringType(), Validator);
        assert.instanceOf(validator.typeOf(/foo/), Validator);
        assert.instanceOf(validator.uppercase(), Validator);
        assert.instanceOf(validator.url(), Validator);
        assert.instanceOf(validator.version(), Validator);
        assert.instanceOf(validator.vowel(), Validator);
    });

    it('get rules', () => {
        assert.isEmpty(validator.getRules());
    });

    it('add rule', () => {
        assert.instanceOf(validator.addRule(new Required()), Validator);
        assert.lengthOf(validator.getRules(), 1);
    });

    it('add rules', () => {
        assert.instanceOf(validator.addRules(new Required(), new IntType()), Validator);
        assert.lengthOf(validator.getRules(), 2);
    });

    it('has rule', () => {
        const rule: Required = new Required();

        assert.instanceOf(validator.addRule(rule), Validator);
        assert.isTrue(validator.hasRule(rule));
    });

    it('no has rule', () => {
        assert.isFalse(validator.hasRule(new Required()));
    });

    it('remove rule', () => {
        const rule: Required = new Required();

        assert.instanceOf(validator.addRule(rule), Validator);
        assert.isTrue(validator.hasRule(rule));
        assert.instanceOf(validator.removeRule(rule), Validator);
        assert.isFalse(validator.hasRule(rule));
    });

    it('remove rule if exists', () => {
        assert.instanceOf(validator.removeRule(new Required()), Validator);
    });

    it('remove rules', () => {
        assert.instanceOf(validator.addRule(new Required()), Validator);
        assert.lengthOf(validator.getRules(), 1);
        assert.instanceOf(validator.removeRules(), Validator);
        assert.isEmpty(validator.getRules());
    });

});
