# Fibonacci

Validates whether the input follows the Fibonacci integer sequence.

Valid values:

```js
validator.fibonacci().validate(1);
validator.fibonacci().validate(2);
validator.fibonacci().validate(3);
validator.fibonacci().validate(5);
validator.fibonacci().validate(8.0);
validator.fibonacci().validate('3');
validator.fibonacci().validate(21);
validator.fibonacci().validate(21.0);
validator.fibonacci().validate('21.0');
validator.fibonacci().validate(34);
validator.fibonacci().validate('34');
validator.fibonacci().validate(1346269);
validator.fibonacci().validate(10610209857723);
```

Invalid values:

```js
validator.fibonacci().validate(true);
validator.fibonacci().validate(false);
validator.fibonacci().validate(0);
validator.fibonacci().validate(1346268);
validator.fibonacci().validate('');
validator.fibonacci().validate(7);
validator.fibonacci().validate(-1);
validator.fibonacci().validate(5.2);
validator.fibonacci().validate('-1');
validator.fibonacci().validate('a');
validator.fibonacci().validate(' ');
validator.fibonacci().validate('foo');
validator.fibonacci().validate(null);
validator.fibonacci().validate(undefined);
validator.fibonacci().validate([]);
validator.fibonacci().validate({});
```
