# Pesel

Validates if the given input is a pesel.

Valid values:

```js
validator.pesel().validate(0x4EADCD168);
validator.pesel().validate(49040501580);
validator.pesel().validate('49040501580');
validator.pesel().validate('39012110375');
validator.pesel().validate('50083014540');
validator.pesel().validate('69090515504');
validator.pesel().validate('21120209256');
validator.pesel().validate('01320613891');
```

Invalid values:

```js
validator.pesel().validate('1');
validator.pesel().validate('22');
validator.pesel().validate('PESEL');
validator.pesel().validate('0x4EADCD168');
validator.pesel().validate('PESEL123456');
validator.pesel().validate('690905155.4');
validator.pesel().validate('21120209251');
validator.pesel().validate('21120209250');
validator.pesel().validate('01320613890');
```
