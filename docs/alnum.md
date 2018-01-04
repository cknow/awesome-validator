# Alnum

Validates if the given input is alphanumeric.

Valid values:

```js
validator.alnum().validate('alganet');
validator.alnum().validate('abc 123');
validator.alnum().validate('\t');
validator.alnum().validate('\n');
```

Invalid values:

```js
validator.alnum().validate('');
validator.alnum().validate('16-50');
validator.alnum().validate('@#$');
validator.alnum().validate('_');
```
