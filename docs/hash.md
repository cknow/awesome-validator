# Hash

Validates if the given input is a hash.

Valid values:

```js
validator.hash('md5').validate('d94f3f016ae679c3008de268209132f2');
validator.hash('md4').validate('751adbc511ccbe8edf23d486fa4581cd');
validator.hash('sha1').validate('3ca25ae354e192b26879f651a51d92aa8a34d8d3');
validator.hash('sha256').validate('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824');
validator.hash('sha384').validate('3fed1f814d28dc5d63e313f8a601ecc4836d1662a19365cbdcf6870f6b56388850b58043f7ebf2418abb8f39c3a42e31');
validator.hash('sha512').validate('9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043');
validator.hash('ripemd128').validate('88dae00e614d8f24cfd5a8b3f8002e93');
validator.hash('ripemd160').validate('beb8c3f30da46be179b8df5f5ecb5e4b10508230');
validator.hash('tiger128').validate('0bf1c35032a71a14c2f719e5a14c1e96');
validator.hash('tiger160').validate('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d');
validator.hash('tiger192').validate('56268f7bc269cf1bc83d3ce42e07a85632394737918f4760');
validator.hash('crc32').validate('d94f3f01');
validator.hash('crc32b').validate('751adbc5');

validator.hash().validate('d94f3f016ae679c3008de268209132f2'); // Md5
validator.hash().validate('751adbc511ccbe8edf23d486fa4581cd'); // Md4
validator.hash().validate('3ca25ae354e192b26879f651a51d92aa8a34d8d3'); // Sha1
validator.hash().validate('2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824'); // Sha256
validator.hash().validate('3fed1f814d28dc5d63e313f8a601ecc4836d1662a19365cbdcf6870f6b56388850b58043f7ebf2418abb8f39c3a42e31'); // Sha384
validator.hash().validate('9b71d224bd62f3785d96d46ad3ea3d73319bfbc2890caadae2dff72519673ca72323c3d99ba5c11d7c7acc6e14b8c5da0c4663475c2e5c3adef46f73bcdec043'); // Sha512
validator.hash().validate('88dae00e614d8f24cfd5a8b3f8002e93'); // Ripemd128
validator.hash().validate('beb8c3f30da46be179b8df5f5ecb5e4b10508230'); // Ripemd160
validator.hash().validate('0bf1c35032a71a14c2f719e5a14c1e96'); // Tiger128
validator.hash().validate('aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d'); // Tiger160
validator.hash().validate('56268f7bc269cf1bc83d3ce42e07a85632394737918f4760'); // Tiger192
validator.hash().validate('d94f3f01'); // Crc32
validator.hash().validate('751adbc5'); // Crc32b
```

Invalid values:

```js
validator.hash('md5').validate('KYT0bf1c35032a71a14c2f719e5a14c1');
validator.hash('md4').validate('q94375dj93458w34');
validator.hash('sha1').validate('KYT0bf1c35032a71a14c2f719e5a14c1');
validator.hash('sha256').validate('KYT0bf1c35032a71a14c2f719e5a14c1');
validator.hash('sha384').validate('KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk');
validator.hash('sha512').validate('q94375dj93458w34');
validator.hash('ripemd128').validate('39485729348');
validator.hash('ripemd160').validate('q94375dj93458w34');
validator.hash('tiger128').validate('%&FHKJFvk');
validator.hash('tiger160').validate('KYT0bf1c35032a71a14c2f719e5a14c1dsjkjkjkjkkjk');
validator.hash('tiger192').validate('39485729348');
validator.hash('crc32').validate('KYT0bf1c35032a71a14c2f719e5a14c1');
validator.hash('crc32b').validate('q94375dj93458w34');
```

The current supported services are:

- md5
- md4
- sha1
- sha256
- sha384
- sha512
- ripemd128
- ripemd160
- tiger128
- tiger160
- tiger192
- crc32
- crc32b
