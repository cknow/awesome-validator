# Finite

Validates if the input is a finite number.

Valid values:

```js
validator.finite().validate('123456');
validator.finite().validate(-9);
validator.finite().validate(0);
validator.finite().validate(16);
validator.finite().validate(2);
validator.finite().validate(Number.MAX_SAFE_INTEGER);
```

Invalid values:

```js
validator.finite().validate('');
validator.finite().validate(' ');
validator.finite().validate('123foo456');
validator.finite().validate([]);
validator.finite().validate(Infinity);
validator.finite().validate(null);
validator.finite().validate(undefined);
```
