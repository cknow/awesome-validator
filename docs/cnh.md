# Cnh

Validates if the given input is a cnh.

Valid values:

```js
validator.cnh().validate('02650306461');
validator.cnh().validate('04397322870');
```

Invalid values:

```js
validator.cnh().validate('00000000000');
validator.cnh().validate('99999999999');
validator.cnh().validate('0329269440');
validator.cnh().validate('F439732287F');
validator.cnh().validate('foo');
```
