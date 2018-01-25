import { assert } from 'chai';

import { AbstractRule } from '../../src/rules/abstract-rule';
import { Hash } from '../../src/rules/hash';

describe('Hash', () => {

    let hash: Hash;

    beforeEach(() => {
        hash = new Hash();
    });

    it('is rule', () => {
        assert.instanceOf(hash, AbstractRule);
    });

    it('values is valid', () => {
        assert.isTrue(new Hash('md5').validate('d94f3f016ae679c3008de268209132f2'));
        assert.isTrue(new Hash('md4').validate('751adbc511ccbe8edf23d486fa4581cd'));
        assert.isTrue(new Hash('sha1').validate('3ca25ae354e192b26879f651a51d92aa8a34d8d3'));
        assert.isTrue(new Hash('sha256').validate('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'));

        /* tslint:disable max-line-length */
        assert.isTrue(new Hash('sha384').validate('3fed1f814d28dc5d63e313f8a601ecc4836d1662a19365cbdcf6870f6b56388850b58043f7ebf2418abb8f39c3a42e31'));
        assert.isTrue(new Hash('sha512').validate('9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043'));
        /* tslint:enable max-line-length */

        assert.isTrue(new Hash('ripemd128').validate('88dae00e614d8f24cfd5a8b3f8002e93'));
        assert.isTrue(new Hash('ripemd160').validate('beb8c3f30da46be179b8df5f5ecb5e4b10508230'));
        assert.isTrue(new Hash('tiger128').validate('0bf1c35032a71a14c2f719e5a14c1e96'));
        assert.isTrue(new Hash('tiger160').validate('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d'));
        assert.isTrue(new Hash('tiger192').validate('56268f7bc269cf1bc83d3ce42e07a85632394737918f4760'));
        assert.isTrue(new Hash('crc32').validate('d94f3f01'));
        assert.isTrue(new Hash('crc32b').validate('751adbc5'));

        assert.isTrue(hash.validate('d94f3f016ae679c3008de268209132f2')); // Md5
        assert.isTrue(hash.validate('751adbc511ccbe8edf23d486fa4581cd')); // Md4
        assert.isTrue(hash.validate('3ca25ae354e192b26879f651a51d92aa8a34d8d3')); // Sha1
        assert.isTrue(hash.validate('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824')); // Sha256

        /* tslint:disable max-line-length */
        assert.isTrue(hash.validate('3fed1f814d28dc5d63e313f8a601ecc4836d1662a19365cbdcf6870f6b56388850b58043f7ebf2418abb8f39c3a42e31')); // Sha384
        assert.isTrue(hash.validate('9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043')); // Sha512
        /* tslint:enable max-line-length */

        assert.isTrue(hash.validate('88dae00e614d8f24cfd5a8b3f8002e93')); // Ripemd128
        assert.isTrue(hash.validate('beb8c3f30da46be179b8df5f5ecb5e4b10508230')); // Ripemd160
        assert.isTrue(hash.validate('0bf1c35032a71a14c2f719e5a14c1e96')); // Tiger128
        assert.isTrue(hash.validate('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d')); // Tiger160
        assert.isTrue(hash.validate('56268f7bc269cf1bc83d3ce42e07a85632394737918f4760')); // Tiger192
        assert.isTrue(hash.validate('d94f3f01')); // Crc32
        assert.isTrue(hash.validate('751adbc5')); // Crc32b
    });

    it('values is not valid', () => {
        assert.isFalse(new Hash('md5').validate('KYT0bf1c35032a71a14c2f719e5a14c1'));
        assert.isFalse(new Hash('md4').validate('q94375dj93458w34'));
        assert.isFalse(new Hash('sha1').validate('KYT0bf1c35032a71a14c2f719e5a14c1'));
        assert.isFalse(new Hash('sha256').validate('KYT0bf1c35032a71a14c2f719e5a14c1'));
        assert.isFalse(new Hash('sha384').validate('KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk'));
        assert.isFalse(new Hash('sha512').validate('q94375dj93458w34'));
        assert.isFalse(new Hash('ripemd128').validate('39485729348'));
        assert.isFalse(new Hash('ripemd160').validate('q94375dj93458w34'));
        assert.isFalse(new Hash('tiger128').validate('%&FHKJFvk'));
        assert.isFalse(new Hash('tiger160').validate('KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk'));
        assert.isFalse(new Hash('tiger192').validate('39485729348'));
        assert.isFalse(new Hash('crc32').validate('KYT0bf1c35032a71a14c2f719e5a14c1'));
        assert.isFalse(new Hash('crc32b').validate('q94375dj93458w34'));

        assert.isFalse(hash.validate(''));
        assert.isFalse(hash.validate('foo'));
        assert.isFalse(hash.validate(Boolean()));
        assert.isFalse(hash.validate(Boolean(true)));
        assert.isFalse(hash.validate(Boolean(false)));
        assert.isFalse(hash.validate(Boolean('1')));
        assert.isFalse(hash.validate(Boolean('0')));
        assert.isFalse(hash.validate(true));
        assert.isFalse(hash.validate(false));
        assert.isFalse(hash.validate(String()));
        assert.isFalse(hash.validate(Number()));
        assert.isFalse(hash.validate(null));
        assert.isFalse(hash.validate(undefined));
        assert.isFalse(hash.validate('-1.1'));
        assert.isFalse(hash.validate('1.1'));
        assert.isFalse(hash.validate('1'));
        assert.isFalse(hash.validate('-1'));
        assert.isFalse(hash.validate('0'));
        assert.isFalse(hash.validate(' '));
        assert.isFalse(hash.validate('   '));
        assert.isFalse(hash.validate(0));
        assert.isFalse(hash.validate(-0));
        assert.isFalse(hash.validate(1));
        assert.isFalse(hash.validate(-1));
        assert.isFalse(hash.validate(0.0));
        assert.isFalse(hash.validate(-0.0));
        assert.isFalse(hash.validate(1.0));
        assert.isFalse(hash.validate(-1.0));
        assert.isFalse(hash.validate(0.1));
        assert.isFalse(hash.validate(-0.1));
        assert.isFalse(hash.validate(1.1));
        assert.isFalse(hash.validate(-1.1));
        assert.isFalse(hash.validate([]));
        assert.isFalse(hash.validate({}));
        assert.isFalse(hash.validate(new Array('foo')));
        assert.isFalse(hash.validate(new Object({foo: 'bar'})));

        class Foo {}
        assert.isFalse(hash.validate(new Foo()));
    });

});
