# Alnum

Validates if the given input is alphanumeric.

Valid values:

```js
validator.alnum('pt-BR').validate('kre123skção');
validator.alnum('nb-NO').validate('Ære321');
validator.alnum().validate('alganet');
validator.alnum().validate('abc123');
```

Invalid values:

```js
validator.alnum('pt-BR').validate('Ære321');
validator.alnum('nb-NO').validate('kre123skção');
validator.alnum().validate('16-50');
validator.alnum().validate('@#$');
validator.alnum().validate('_');
```
