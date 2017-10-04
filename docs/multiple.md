# Multiple

Validates if the input is a multiple of the given parameter.

Valid values:

```js
validator.multiple(0).validate(0);
validator.multiple(1).validate(0);
validator.multiple(1).validate(1);
validator.multiple(1).validate(2);
validator.multiple(1).validate(3);
validator.multiple(5).validate(0);
validator.multiple(5).validate(5);
validator.multiple(5).validate(10);
validator.multiple(5).validate(20);
validator.multiple(5).validate(500);
validator.multiple(5).validate(-5);
validator.multiple(5).validate(-10);
validator.multiple(5).validate(-500);
validator.multiple(1.5).validate(3);
validator.multiple(1.5).validate(6);
validator.multiple(1.5).validate('6');
```

Invalid values:

```js
validator.multiple(0).validate(1);
validator.multiple(0).validate('');
validator.multiple(1).validate('a');
validator.multiple(1).validate('foo');
validator.multiple(5).validate(11);
validator.multiple(5).validate(3);
validator.multiple(5).validate(-1);
validator.multiple(3).validate(4);
validator.multiple(10).validate(-8);
validator.multiple(10).validate(57);
validator.multiple(10).validate(21);
validator.multiple(0).validate(1);
validator.multiple(0).validate(2);
validator.multiple(1.5).validate(4);
validator.multiple(1.5).validate(2);
validator.multiple(1.5).validate('2');
```
