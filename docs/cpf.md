# Cpf

Validates if the given input is a cpf.

Valid values:

```js
validator.cpf().validate('342.444.198-88');
validator.cpf().validate('11598647644');
```

Invalid values:

```js
validator.cpf().validate('00000000000');
validator.cpf().validate('99999999999');
validator.cpf().validate('12345678900');
validator.cpf().validate('foo');
```
