# Negative

Validates if a number is lower than zero.

Valid values:

```js
validator.negative().validate('-1.44');
validator.negative().validate(-1e-5);
validator.negative().validate(-10);
```

Invalid values:

```js
validator.positive().validate(0);
validator.positive().validate(-0);
validator.negative().validate('');
validator.negative().validate(null);
validator.negative().validate(undefined);
validator.negative().validate('a');
validator.negative().validate('   ');
validator.negative().validate('Foo');
validator.negative().validate(16);
validator.negative().validate('156');
validator.negative().validate(123456);
validator.negative().validate(1e10);
```
