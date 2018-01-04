import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Email } from '../../src/rules/email';

describe('Directory', () => {

    let email: Email;

    beforeEach(() => {
        email = new Email();
    });

    it('is rule', () => {
        assert.instanceOf(email, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(email.validate('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@letters-in-local.org'));
        assert.isTrue(email.validate('01234567890@numbers-in-local.net'));
        assert.isTrue(email.validate('&\'*+-./=?^_{}~@other-valid-characters-in-local.net'));
        assert.isTrue(email.validate('mixed-1234-in-{+^}-local@sld.net'));
        assert.isTrue(email.validate('a@single-character-in-local.org'));
        assert.isTrue(email.validate('one-character-third-level@a.example.com'));
        assert.isTrue(email.validate('single-character-in-sld@x.org'));
        assert.isTrue(email.validate('local@dash-in-sld.com'));
        assert.isTrue(email.validate('letters-in-sld@123.com'));
        assert.isTrue(email.validate('one-letter-sld@x.org'));
        assert.isTrue(email.validate('uncommon-tld@sld.museum'));
        assert.isTrue(email.validate('uncommon-tld@sld.travel'));
        assert.isTrue(email.validate('uncommon-tld@sld.mobi'));
        assert.isTrue(email.validate('country-code-tld@sld.uk'));
        assert.isTrue(email.validate('country-code-tld@sld.rw'));
        assert.isTrue(email.validate('local@sld.newTLD'));
        /* tslint:disable max-line-length */
        assert.isTrue(email.validate('the-total-length@of-an-entire-address.cannot-be-longer-than-two-hundred-and-fifty-four-characters.and-this-address-is-254-characters-exactly.so-it-should-be-valid.and-im-going-to-add-some-more-words-here.to-increase-the-lenght-blah-blah-blah-blah-bla.org'));
        assert.isTrue(email.validate('the-character-limit@for-each-part.of-the-domain.is-sixty-three-characters.this-is-exactly-sixty-three-characters-so-it-is-valid-blah-blah.com'));
        /* tslint:enable max-line-length */

        assert.isTrue(email.validate('local@sub.domains.com'));
        assert.isTrue(email.validate('backticks`are`legit@test.com'));
        assert.isTrue(email.validate('digit-only-domain@123.com'));
        assert.isTrue(email.validate('digit-only-domain-with-subdomain@sub.123.com'));
    });

    it('values is not valid', () => {
        assert.isFalse(email.validate('\"quoted\"@sld.com'));
        assert.isFalse(email.validate('\"\\e\\s\\c\\a\\p\\e\\d\"@sld.com'));
        assert.isFalse(email.validate('\"quoted-at-sign@sld.org\"@sld.com'));
        assert.isFalse(email.validate('\"escaped\\\"quote\"@sld.com'));
        assert.isFalse(email.validate('\"back\\slash\"@sld.com'));
        assert.isFalse(email.validate('punycode-numbers-in-tld@sld.xn--3e0b707e'));
        assert.isFalse(email.validate('bracketed-IP-instead-of-domain@[127.0.0.1]'));
        assert.isFalse(email.validate('@missing-local.org'));
        assert.isFalse(email.validate('! #$%`|@invalid-characters-in-local.org'));
        assert.isFalse(email.validate('(),:;`|@more-invalid-characters-in-local.org'));
        assert.isFalse(email.validate('<>@[]\\`|@even-more-invalid-characters-in-local.org'));
        assert.isFalse(email.validate('.local-starts-with-dot@sld.com'));
        assert.isFalse(email.validate('local-ends-with-dot.@sld.com'));
        assert.isFalse(email.validate('two..consecutive-dots@sld.com'));
        assert.isFalse(email.validate('partially.\"quoted\"@sld.com'));
        assert.isFalse(email.validate('the-local-part-is-invalid-if-it-is-longer-than-sixty-four-characters@sld.net'));
        assert.isFalse(email.validate('missing-sld@.com'));
        assert.isFalse(email.validate('sld-starts-with-dashsh@-sld.com'));
        assert.isFalse(email.validate('sld-ends-with-dash@sld-.com'));
        assert.isFalse(email.validate('invalid-characters-in-sld@! \"#$%(),/;<>_[]`|.org'));
        assert.isFalse(email.validate('missing-dot-before-tld@com'));
        assert.isFalse(email.validate('missing-tld@sld.'));
        assert.isFalse(email.validate('invalid'));

        /* tslint:disable max-line-length */
        assert.isFalse(email.validate('the-total-length@of-an-entire-address.cannot-be-longer-than-two-hundred-and-fifty-four-characters.and-this-address-is-255-characters-exactly.so-it-should-be-invalid.and-im-going-to-add-some-more-words-here.to-increase-the-lenght-blah-blah-blah-blah-bl.org'));
        assert.isFalse(email.validate('the-character-limit@for-each-part.of-the-domain.is-sixty-three-characters.this-is-exactly-sixty-four-characters-so-it-is-invalid-blah-blah.com'));
        /* tslint:enable max-line-length */

        assert.isFalse(email.validate('missing-at-sign.net'));
        assert.isFalse(email.validate('unbracketed-IP@127.0.0.1'));
        assert.isFalse(email.validate('invalid-ip@127.0.0.1.26'));
        assert.isFalse(email.validate('another-invalid-ip@127.0.0.256'));
        assert.isFalse(email.validate('IP-and-port@127.0.0.1:25'));
        assert.isFalse(email.validate('trailing-dots@test.de.'));
        assert.isFalse(email.validate('dot-on-dot-in-domainname@te..st.de'));
        assert.isFalse(email.validate('dot-first-in-domain@.test.de'));
        assert.isFalse(email.validate('mg@ns.i'));
    });

});
