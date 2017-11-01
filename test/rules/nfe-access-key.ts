import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { NfeAccessKey } from '../../src/rules/nfe-access-key';

describe('Nfe Access Key', () => {

    let nfeAccessKey: NfeAccessKey;

    beforeEach(() => {
        nfeAccessKey = new NfeAccessKey();
    });

    it('is rule', () => {
        assert.instanceOf(nfeAccessKey, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(nfeAccessKey.validate('52060433009911002506550120000007800267301615'));
    });

    it('values is not valid', () => {
        assert.isFalse(nfeAccessKey.validate('31841136830118868211870485416765268625116906'));
        assert.isFalse(nfeAccessKey.validate('21470801245862435081451225624565260861852679'));
        assert.isFalse(nfeAccessKey.validate('45644318091447671194616059650873352394885852'));
        assert.isFalse(nfeAccessKey.validate('17214281716057582143671174314277906696193888'));
        assert.isFalse(nfeAccessKey.validate('56017280182977836779696364362142515138726654'));
        assert.isFalse(nfeAccessKey.validate('90157126614010548506235171976891004177042525'));
        assert.isFalse(nfeAccessKey.validate('78457064241662300187501877048374851128754067'));
        assert.isFalse(nfeAccessKey.validate('39950148079977322431982386613620895568235903'));
        assert.isFalse(nfeAccessKey.validate('90820939577654114875253907311677136672761216'));
        assert.isFalse(nfeAccessKey.validate('11145573386990252067204852181837301'));
        assert.isFalse(nfeAccessKey.validate('6209433147444876'));
        assert.isFalse(nfeAccessKey.validate('00745996227609395385255721262102'));
        assert.isFalse(nfeAccessKey.validate('58215798856653'));
        assert.isFalse(nfeAccessKey.validate('24149625439084262707824706699374326'));
        assert.isFalse(nfeAccessKey.validate('163907274335'));
        assert.isFalse(nfeAccessKey.validate('67229454773008929675906894698'));
        assert.isFalse(nfeAccessKey.validate('5858836670181917762140106857095788313119136'));
        assert.isFalse(nfeAccessKey.validate('6098412281885524361833754087461339281130'));
        assert.isFalse(nfeAccessKey.validate('9025299113310221'));
        assert.isFalse(nfeAccessKey.validate(null));
        assert.isFalse(nfeAccessKey.validate(undefined));
        assert.isFalse(nfeAccessKey.validate([]));
        assert.isFalse(nfeAccessKey.validate({}));
        assert.isFalse(nfeAccessKey.validate(new Array('foo')));
        assert.isFalse(nfeAccessKey.validate(new Object({foo: 'bar'})));
        assert.isFalse(nfeAccessKey.validate(true));
        assert.isFalse(nfeAccessKey.validate(false));
        assert.isFalse(nfeAccessKey.validate(1));
        assert.isFalse(nfeAccessKey.validate(''));
        assert.isFalse(nfeAccessKey.validate('foo'));
    });

});
