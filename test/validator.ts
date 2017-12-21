import { assert } from 'chai';

import { AlwaysInvalid, AlwaysValid, V } from '../src/validator';

describe('Validator', () => {

    let v: V;

    beforeEach(() => {
        v = new V();
    });

    it('extend', () => {
        const name: string = 'foo';

        assert.isNotFunction(V[name]);
        assert.isNotFunction(v[name]);

        V.extend(name, AlwaysInvalid);

        assert.isFunction(V[name]);
        assert.isFunction(v[name]);

        assert.isFalse(V[name]().validate(null));
        assert.isFalse(v[name]().validate(null));
    });

    it('initialize with rules', () => {
        v = new V(new AlwaysValid(), new AlwaysInvalid());

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
