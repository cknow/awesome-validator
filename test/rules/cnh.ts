import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Cnh } from '../../src/rules/cnh';

describe('Cnh', () => {

    let cnh: Cnh;

    beforeEach(() => {
        cnh = new Cnh();
    });

    it('is rule', () => {
        assert.instanceOf(cnh, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(cnh.validate('02650306461'));
        assert.isTrue(cnh.validate('04397322870'));
        assert.isTrue(cnh.validate('04375701302'));
        assert.isTrue(cnh.validate('02996843266'));
        assert.isTrue(cnh.validate('04375700501'));
        assert.isTrue(cnh.validate('02605113410'));
        assert.isTrue(cnh.validate('03247061306'));
        assert.isTrue(cnh.validate('01258750259'));
        assert.isTrue(cnh.validate('00739751580'));
        assert.isTrue(cnh.validate('03375637504'));
        assert.isTrue(cnh.validate('02542551342'));
        assert.isTrue(cnh.validate('01708111400'));
        assert.isTrue(cnh.validate('00836510948'));
        assert.isTrue(cnh.validate('04365445978'));
        assert.isTrue(cnh.validate('04324384302'));
        assert.isTrue(cnh.validate('04339482949'));
        assert.isTrue(cnh.validate('01036520050'));
        assert.isTrue(cnh.validate('01612581027'));
        assert.isTrue(cnh.validate('00603454740'));
        assert.isTrue(cnh.validate('04129251992'));
        assert.isTrue(cnh.validate('03401740201'));
        assert.isTrue(cnh.validate('03417248301'));
        assert.isTrue(cnh.validate('00670431345'));
        assert.isTrue(cnh.validate('03292694405'));
    });

    it('values is not valid', () => {
        assert.isFalse(cnh.validate('0265131640'));
        assert.isFalse(cnh.validate('0439732280'));
        assert.isFalse(cnh.validate('0437571130'));
        assert.isFalse(cnh.validate('0299684320'));
        assert.isFalse(cnh.validate('0437571150'));
        assert.isFalse(cnh.validate('0261511340'));
        assert.isFalse(cnh.validate('0324716130'));
        assert.isFalse(cnh.validate('0125875120'));
        assert.isFalse(cnh.validate('0173975150'));
        assert.isFalse(cnh.validate('0337563750'));
        assert.isFalse(cnh.validate('0254255130'));
        assert.isFalse(cnh.validate('0171811140'));
        assert.isFalse(cnh.validate('0183651190'));
        assert.isFalse(cnh.validate('0436544590'));
        assert.isFalse(cnh.validate('0432438430'));
        assert.isFalse(cnh.validate('0433948290'));
        assert.isFalse(cnh.validate('0113652110'));
        assert.isFalse(cnh.validate('0161258110'));
        assert.isFalse(cnh.validate('0161345470'));
        assert.isFalse(cnh.validate('0412925190'));
        assert.isFalse(cnh.validate('0341174120'));
        assert.isFalse(cnh.validate('0341724830'));
        assert.isFalse(cnh.validate('0167143130'));
        assert.isFalse(cnh.validate('0329269440'));
        assert.isFalse(cnh.validate('F265F3F6461'));
        assert.isFalse(cnh.validate('F439732287F'));
        assert.isFalse(cnh.validate('F43757F13F2'));
        assert.isFalse(cnh.validate('F2996843266'));
        assert.isFalse(cnh.validate('F43757FF5F1'));
        assert.isFalse(cnh.validate('F26F511341F'));
        assert.isFalse(cnh.validate('F3247F613F6'));
        assert.isFalse(cnh.validate('F125875F259'));
        assert.isFalse(cnh.validate('FF73975158F'));
        assert.isFalse(cnh.validate('F33756375F4'));
        assert.isFalse(cnh.validate('F2542551342'));
        assert.isFalse(cnh.validate('F17F81114FF'));
        assert.isFalse(cnh.validate('FF83651F948'));
        assert.isFalse(cnh.validate('F4365445978'));
        assert.isFalse(cnh.validate('F43243843F2'));
        assert.isFalse(cnh.validate('F4339482949'));
        assert.isFalse(cnh.validate('F1F3652FF5F'));
        assert.isFalse(cnh.validate('F1612581F27'));
        assert.isFalse(cnh.validate('FF6F345474F'));
        assert.isFalse(cnh.validate('F4129251992'));
        assert.isFalse(cnh.validate('F34F174F2F1'));
        assert.isFalse(cnh.validate('F34172483F1'));
        assert.isFalse(cnh.validate('FF67F431345'));
        assert.isFalse(cnh.validate('F32926944F5'));
        assert.isFalse(cnh.validate('00265003006461'));
        assert.isFalse(cnh.validate('0043973228700'));
        assert.isFalse(cnh.validate('00437570013002'));
        assert.isFalse(cnh.validate('002996843266'));
        assert.isFalse(cnh.validate('004375700005001'));
        assert.isFalse(cnh.validate('00260051134100'));
        assert.isFalse(cnh.validate('00324700613006'));
        assert.isFalse(cnh.validate('0012587500259'));
        assert.isFalse(cnh.validate('00007397515800'));
        assert.isFalse(cnh.validate('0033756375004'));
        assert.isFalse(cnh.validate('002542551342'));
        assert.isFalse(cnh.validate('001700811140000'));
        assert.isFalse(cnh.validate('00008365100948'));
        assert.isFalse(cnh.validate('004365445978'));
        assert.isFalse(cnh.validate('0043243843002'));
        assert.isFalse(cnh.validate('004339482949'));
        assert.isFalse(cnh.validate('0010036520000500'));
        assert.isFalse(cnh.validate('0016125810027'));
        assert.isFalse(cnh.validate('000060034547400'));
        assert.isFalse(cnh.validate('004129251992'));
        assert.isFalse(cnh.validate('003400174002001'));
        assert.isFalse(cnh.validate('0034172483001'));
        assert.isFalse(cnh.validate('00006700431345'));
        assert.isFalse(cnh.validate('0032926944005'));
        assert.isFalse(cnh.validate('00329269440'));
        assert.isFalse(cnh.validate('00000000000'));
        assert.isFalse(cnh.validate('11111111111'));
        assert.isFalse(cnh.validate('22222222222'));
        assert.isFalse(cnh.validate('99299929384'));
        assert.isFalse(cnh.validate('84434895894'));
        assert.isFalse(cnh.validate('44242340000'));
        assert.isFalse(cnh.validate('03417248309'));
        assert.isFalse(cnh.validate(null));
        assert.isFalse(cnh.validate(undefined));
        assert.isFalse(cnh.validate([]));
        assert.isFalse(cnh.validate({}));
        assert.isFalse(cnh.validate(new Array('foo')));
        assert.isFalse(cnh.validate(new Object({foo: 'bar'})));
        assert.isFalse(cnh.validate(true));
        assert.isFalse(cnh.validate(false));
        assert.isFalse(cnh.validate(1));
        assert.isFalse(cnh.validate(''));
        assert.isFalse(cnh.validate('foo'));
    });

});
