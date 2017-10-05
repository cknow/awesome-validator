# Position

Validates if a number is higher than zero.

Valid values:

```js
validator.positive().validate(16);
validator.positive().validate('165');
validator.positive().validate(12345);
validator.positive().validate(1e10);
```

Invalid values:

```js
validator.positive().validate('');
validator.positive().validate(null);
validator.positive().validate(undefined);
validator.positive().validate('a');
validator.positive().validate('   ');
validator.positive().validate('Foo');
validator.positive().validate('-1.44');
validator.positive().validate(-1e-5);
validator.positive().validate(0);
validator.positive().validate(-0);
validator.positive().validate(-10);
```
