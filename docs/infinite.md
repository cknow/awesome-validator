# Infinite

Validates if the input is an infinite number.

Valid values:

```js
validator.infinite().validate(Infinity);
validator.infinite().validate(Infinity * -1);
```

Invalid values:

```js
validator.infinite().validate(' ');
validator.infinite().validate([]);
validator.infinite().validate(Number.MAX_SAFE_INTEGER);
validator.infinite().validate(null);
validator.infinite().validate(undefined);
validator.infinite().validate('123456');
validator.infinite().validate(-9);
validator.infinite().validate(0);
validator.infinite().validate(16);
validator.infinite().validate(2);
```
