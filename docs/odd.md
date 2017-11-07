# Odd

Validates an odd number.

Valid values:

```js
validator.odd().validate(-5);
validator.odd().validate(-1);
validator.odd().validate(1);
validator.odd().validate(13);
validator.odd().validate(165);
validator.odd().validate(1);
validator.odd().validate('1');
validator.odd().validate(165.0);
```

Invalid values:

```js
validator.odd().validate(null);
validator.odd().validate('');
validator.odd().validate(-2);
validator.odd().validate(-0);
validator.odd().validate(0);
validator.odd().validate(32);
validator.odd().validate(1.1);
validator.odd().validate(-1.1);
validator.odd().validate('0.2');
validator.odd().validate('165.7');
```
