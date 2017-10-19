import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Slug } from '../../src/rules/slug';

describe('Slug', () => {

    let slug: Slug;

    beforeEach(() => {
        slug = new Slug();
    });

    it('is rule', () => {
        assert.instanceOf(slug, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(slug.validate('o-rato-roeu-o-rei-de-roma'));
        assert.isTrue(slug.validate('o-alganet-e-um-feio'));
        assert.isTrue(slug.validate('a-e-i-o-u'));
        assert.isTrue(slug.validate('anticonstitucionalissimamente'));
    });

    it('values is not valid', () => {
        assert.isFalse(slug.validate(''));
        assert.isFalse(slug.validate('o-alganet-é-um-feio'));
        assert.isFalse(slug.validate('á-é-í-ó-ú'));
        assert.isFalse(slug.validate('-assim-nao-pode'));
        assert.isFalse(slug.validate('assim-tambem-nao-'));
        assert.isFalse(slug.validate('nem--assim'));
        assert.isFalse(slug.validate('--nem-assim'));
        assert.isFalse(slug.validate('Nem mesmo Assim'));
        assert.isFalse(slug.validate('Ou-ate-assim'));
        assert.isFalse(slug.validate('-Se juntar-tudo-Então-'));
    });

});
