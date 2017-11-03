import { assert } from 'chai';

import { AllOf } from '../src/rules/all-of';
import { AlwaysInvalid } from '../src/rules/always-invalid';
import { AlwaysValid } from '../src/rules/always-valid';
import { V } from '../src/validator';

describe('Validator', () => {

    let v: V;

    beforeEach(() => {
        v = new V();
    });

    it('static rules', () => {
        assert.instanceOf(V.allOf(), AllOf);
        assert.instanceOf(V.allOf(V.alwaysValid()), AllOf);
        assert.instanceOf(V.alwaysInvalid(), V);
        assert.instanceOf(V.alwaysValid(), V);
        assert.instanceOf(V.anyOf(V.alwaysValid()), V);
        assert.instanceOf(V.arrayInstance(), V);
        assert.instanceOf(V.arrayType(), V);
        assert.instanceOf(V.arrayVal(), V);
        assert.instanceOf(V.booleanInstance(), V);
        assert.instanceOf(V.booleanType(), V);
        assert.instanceOf(V.booleanVal(), V);
        assert.instanceOf(V.cnh(), V);
        assert.instanceOf(V.cnpj(), V);
        assert.instanceOf(V.consonant(), V);
        assert.instanceOf(V.contains('foo'), V);
        assert.instanceOf(V.cpf(), V);
        assert.instanceOf(V.empty(), V);
        assert.instanceOf(V.even(), V);
        assert.instanceOf(V.falseVal(), V);
        assert.instanceOf(V.floatType(), V);
        assert.instanceOf(V.floatVal(), V);
        assert.instanceOf(V.functionInstance(), V);
        assert.instanceOf(V.functionType(), V);
        assert.instanceOf(V.in([]), V);
        assert.instanceOf(V.instanceOf(Object), V);
        assert.instanceOf(V.intType(), V);
        assert.instanceOf(V.intVal(), V);
        assert.instanceOf(V.json(), V);
        assert.instanceOf(V.lowercase(), V);
        assert.instanceOf(V.multiple(0), V);
        assert.instanceOf(V.negative(), V);
        assert.instanceOf(V.nfeAccessKey(), V);
        assert.instanceOf(V.noWhitespace(), V);
        assert.instanceOf(V.no(), V);
        assert.instanceOf(V.noneOf(), V);
        assert.instanceOf(V.not(V.alwaysInvalid()), V);
        assert.instanceOf(V.notEmpty(), V);
        assert.instanceOf(V.nullType(), V);
        assert.instanceOf(V.numberInstance(), V);
        assert.instanceOf(V.numberType(), V);
        assert.instanceOf(V.numberVal(), V);
        assert.instanceOf(V.objectInstance(), V);
        assert.instanceOf(V.objectTypeStrict(), V);
        assert.instanceOf(V.objectType(), V);
        assert.instanceOf(V.perfectSquare(), V);
        assert.instanceOf(V.pesel(), V);
        assert.instanceOf(V.phone(), V);
        assert.instanceOf(V.pis(), V);
        assert.instanceOf(V.positive(), V);
        assert.instanceOf(V.primeNumber(), V);
        assert.instanceOf(V.prnt(), V);
        assert.instanceOf(V.punct(), V);
        assert.instanceOf(V.regexInstance(), V);
        assert.instanceOf(V.regexType(), V);
        assert.instanceOf(V.regexVal(), V);
        assert.instanceOf(V.regex(/foo/), V);
        assert.instanceOf(V.roman(), V);
        assert.instanceOf(V.scalar(), V);
        assert.instanceOf(V.slug(), V);
        assert.instanceOf(V.sorted(), V);
        assert.instanceOf(V.sorted(null, false), V);
        assert.instanceOf(V.stringInstance(), V);
        assert.instanceOf(V.stringType(), V);
        assert.instanceOf(V.stringVal(), V);
        assert.instanceOf(V.symbolicLink(), V);
        assert.instanceOf(V.tld(), V);
        assert.instanceOf(V.trueVal(), V);
        assert.instanceOf(V.typeOf(/foo/), V);
        assert.instanceOf(V.unique(), V);
        assert.instanceOf(V.uppercase(), V);
        assert.instanceOf(V.url(), V);
        assert.instanceOf(V.uuid(), V);
        assert.instanceOf(V.version(), V);
        assert.instanceOf(V.vowel(), V);
        assert.instanceOf(V.when(V.alwaysValid(), V.alwaysValid()), V);
        assert.instanceOf(V.when(V.alwaysInvalid(), V.alwaysValid(), V.alwaysValid()), V);
        assert.instanceOf(V.yes(), V);
    });

    it('rules', () => {
        assert.instanceOf(v.allOf(), V);
        assert.instanceOf(v.allOf(V.alwaysValid()), V);
        assert.instanceOf(v.alwaysInvalid(), V);
        assert.instanceOf(v.alwaysValid(), V);
        assert.instanceOf(v.anyOf(v.alwaysValid()), V);
        assert.instanceOf(v.arrayInstance(), V);
        assert.instanceOf(v.arrayType(), V);
        assert.instanceOf(v.arrayVal(), V);
        assert.instanceOf(v.booleanInstance(), V);
        assert.instanceOf(v.booleanType(), V);
        assert.instanceOf(v.booleanVal(), V);
        assert.instanceOf(v.cnh(), V);
        assert.instanceOf(v.cnpj(), V);
        assert.instanceOf(v.consonant(), V);
        assert.instanceOf(v.contains('foo'), V);
        assert.instanceOf(v.cpf(), V);
        assert.instanceOf(v.empty(), V);
        assert.instanceOf(v.even(), V);
        assert.instanceOf(v.falseVal(), V);
        assert.instanceOf(v.floatType(), V);
        assert.instanceOf(v.floatVal(), V);
        assert.instanceOf(v.functionInstance(), V);
        assert.instanceOf(v.functionType(), V);
        assert.instanceOf(v.in([]), V);
        assert.instanceOf(v.instanceOf(Object), V);
        assert.instanceOf(v.intType(), V);
        assert.instanceOf(v.intVal(), V);
        assert.instanceOf(v.json(), V);
        assert.instanceOf(v.lowercase(), V);
        assert.instanceOf(v.multiple(0), V);
        assert.instanceOf(v.negative(), V);
        assert.instanceOf(v.nfeAccessKey(), V);
        assert.instanceOf(v.noWhitespace(), V);
        assert.instanceOf(v.no(), V);
        assert.instanceOf(v.noneOf(), V);
        assert.instanceOf(v.not(v.alwaysInvalid()), V);
        assert.instanceOf(v.notEmpty(), V);
        assert.instanceOf(v.nullType(), V);
        assert.instanceOf(v.numberInstance(), V);
        assert.instanceOf(v.numberType(), V);
        assert.instanceOf(v.numberVal(), V);
        assert.instanceOf(v.objectInstance(), V);
        assert.instanceOf(v.objectTypeStrict(), V);
        assert.instanceOf(v.objectType(), V);
        assert.instanceOf(v.perfectSquare(), V);
        assert.instanceOf(v.pesel(), V);
        assert.instanceOf(v.phone(), V);
        assert.instanceOf(v.pis(), V);
        assert.instanceOf(v.positive(), V);
        assert.instanceOf(v.primeNumber(), V);
        assert.instanceOf(v.prnt(), V);
        assert.instanceOf(v.punct(), V);
        assert.instanceOf(v.regexInstance(), V);
        assert.instanceOf(v.regexType(), V);
        assert.instanceOf(v.regexVal(), V);
        assert.instanceOf(v.regex(/foo/), V);
        assert.instanceOf(v.roman(), V);
        assert.instanceOf(v.scalar(), V);
        assert.instanceOf(v.slug(), V);
        assert.instanceOf(v.sorted(), V);
        assert.instanceOf(v.sorted(null, false), V);
        assert.instanceOf(v.stringInstance(), V);
        assert.instanceOf(v.stringType(), V);
        assert.instanceOf(v.stringVal(), V);
        assert.instanceOf(v.symbolicLink(), V);
        assert.instanceOf(v.tld(), V);
        assert.instanceOf(v.trueVal(), V);
        assert.instanceOf(v.typeOf(/foo/), V);
        assert.instanceOf(v.unique(), V);
        assert.instanceOf(v.uppercase(), V);
        assert.instanceOf(v.url(), V);
        assert.instanceOf(v.uuid(), V);
        assert.instanceOf(v.version(), V);
        assert.instanceOf(v.vowel(), V);
        assert.instanceOf(v.when(v.alwaysValid(), v.alwaysValid()), V);
        assert.instanceOf(v.when(v.alwaysInvalid(), v.alwaysValid(), v.alwaysValid()), V);
        assert.instanceOf(v.yes(), V);
    });

    it('initialize with rules', () => {
        v = new V(V.alwaysValid(), V.alwaysInvalid());

        assert.lengthOf(v.getRules(), 2);
        assert.isFalse(v.validate(null));
    });

    it('validates if empty rules', () => {
        assert.isTrue(v.validate(null));
    });

    it('get rules', () => {
        assert.isEmpty(v.getRules());
    });

    it('add rule', () => {
        assert.instanceOf(v.addRule(new AlwaysValid()), V);
        assert.lengthOf(v.getRules(), 1);
    });

    it('add rules', () => {
        assert.instanceOf(v.addRules(new AlwaysValid(), new AlwaysInvalid()), V);
        assert.lengthOf(v.getRules(), 2);
    });

    it('has rule', () => {
        const rule: AlwaysValid = new AlwaysValid();

        assert.instanceOf(v.addRule(rule), V);
        assert.isTrue(v.hasRule(rule));
    });

    it('no has rule', () => {
        assert.isFalse(v.hasRule(new AlwaysValid()));
    });

    it('remove rule', () => {
        const rule: AlwaysValid = new AlwaysValid();

        assert.instanceOf(v.addRule(rule), V);
        assert.isTrue(v.hasRule(rule));
        assert.instanceOf(v.removeRule(rule), V);
        assert.isFalse(v.hasRule(rule));
    });

    it('remove rule if exists', () => {
        assert.instanceOf(v.removeRule(new AlwaysValid()), V);
    });

    it('remove rules', () => {
        assert.instanceOf(v.addRule(new AlwaysValid()), V);
        assert.lengthOf(v.getRules(), 1);
        assert.instanceOf(v.removeRules(), V);
        assert.isEmpty(v.getRules());
    });

});
