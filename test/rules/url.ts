import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Url } from '../../src/rules/url';

describe('Url', () => {

    let url: Url;

    beforeEach(() => {
        url = new Url();
    });

    it('is rule', () => {
        assert.instanceOf(url, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(url.validate('http://bassistance.de/jquery/plugin.php?bla=blu'));
        assert.isTrue(url.validate('https://bassistance.de/jquery/plugin.php?bla=blu'));
        assert.isTrue(url.validate('ftp://bassistance.de/jquery/plugin.php?bla=blu'));
        assert.isTrue(url.validate('http://www.føtex.dk/'));
        assert.isTrue(url.validate('http://bösendorfer.de/'));
        assert.isTrue(url.validate('http://142.42.1.1'));
        assert.isTrue(url.validate('http://pro.photography'));
        assert.isTrue(url.validate('//code.jquery.com/jquery-1.11.3.min.js'));
        assert.isTrue(url.validate('//142.42.1.1'));
        assert.isTrue(url.validate('ftp://ftp.is.co.za.example.org/rfc/rfc1808.txt'));
        assert.isTrue(url.validate('http://www.ietf.org/rfc/rfc2396.txt'));
        assert.isTrue(url.validate('http://www.math.uio.no.example.net/faq/compression-faq/part1.html'));
        assert.isTrue(url.validate('https://www.youtube.com/watch?v=6FOUqQt3Kg0'));
    });

    it('values is not valid', () => {
        assert.isFalse(url.validate('example.com'));
        assert.isFalse(url.validate('http:/example.com/'));
        assert.isFalse(url.validate('tel:+1-816-555-1212'));
        assert.isFalse(url.validate('urn:oasis:names:specification:docbook:dtd:xml:4.1.2'));
        assert.isFalse(url.validate('htp://code.jquery.com/jquery-1.11.3.min.js'));
        assert.isFalse(url.validate('http://192.168.8.'));
        assert.isFalse(url.validate('http://bassistance'));
        assert.isFalse(url.validate('http://bassistance.'));
        assert.isFalse(url.validate('http://bassistance,de'));
        assert.isFalse(url.validate('http://bassistance;de'));
        assert.isFalse(url.validate('http://.bassistancede'));
        assert.isFalse(url.validate('bassistance.de'));
        assert.isFalse(url.validate('ldap://[2001:db8::7]/c=GB?objectClass?one'));
        assert.isFalse(url.validate('mailto:John.Doe@example.com'));
        assert.isFalse(url.validate('mailto:mduerst@ifi.unizh.example.gov'));
        assert.isFalse(url.validate('news:comp.infosystems.www.servers.unix'));
        assert.isFalse(url.validate('news:comp.infosystems.www.servers.unix'));
        assert.isFalse(url.validate('telnet://192.0.2.16:80/'));
        assert.isFalse(url.validate('telnet://melvyl.ucop.example.edu/'));
        assert.isFalse(url.validate(null));
        assert.isFalse(url.validate(undefined));
        assert.isFalse(url.validate(true));
        assert.isFalse(url.validate(false));
    });

});
