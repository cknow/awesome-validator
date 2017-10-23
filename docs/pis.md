# Pis

Validates if the given input is a pis.

Valid values:

```js
validator.pis().validate('120.4454.683-5');
validator.pis().validate('120.8995.084-8');
validator.pis().validate('120.5146.8577');
validator.pis().validate('120.01842459');
validator.pis().validate('1.2.0.7.9.8.1.6.7.8.2');
validator.pis().validate('12044546835');
validator.pis().validate('12089950848');
validator.pis().validate('12051468577');
validator.pis().validate('12001842459');
validator.pis().validate('12079816782');
validator.pis().validate(12079816782);
```

Invalid values:

```js
validator.pis().validate('');
validator.pis().validate('000.0000.000-0');
validator.pis().validate('111.2222.444-5');
validator.pis().validate('999999999.99');
validator.pis().validate('8.8.8.8.8.8.8.8.8.8.8');
validator.pis().validate('693-3129-110-1');
validator.pis().validate('698.1131-111.2');
validator.pis().validate('11111111111');
validator.pis().validate('22222222222');
validator.pis().validate('12345678901');
validator.pis().validate('99299929384');
validator.pis().validate('84434895894');
validator.pis().validate('44242340002');
validator.pis().validate('1');
validator.pis().validate('22');
validator.pis().validate('123');
validator.pis().validate('992999999999929384');
validator.pis().validate(false);
validator.pis().validate([]);
```
