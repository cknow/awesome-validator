# Decimal

Validates if input is a decimal

Valid values:

```js
validator.decimal().validate('12345');
validator.decimal('en-US').validate('123.45');
validator.decimal('pt-BR').validate('123,45');
validator.decimal('ar-JO').validate('123٫45');
```

Invalid values:

```js
validator.decimal().validate('foo');
validator.decimal('en-US').validate('123٫45');
validator.decimal('pt-BR').validate('123.45');
validator.decimal('ar-JO').validate('123,45');
```
