# Cnpj

Validates if the given input is a cnpj.

Valid values:

```js
validator.cnpj().validate('36.310.327/0001-07');
validator.cnpj().validate('38175021000110');
```

Invalid values:

```js
validator.cnpj().validate('00000000000000');
validator.cnpj().validate('99999999999999');
validator.cnpj().validate('12345678900123');
validator.cnpj().validate('foo');
```
