# Scalar

Validates if the given input is scalar.

Valid values:

```js
validator.scalar().validate(true);
validator.scalar().validate(false);
validator.scalar().validate(0);
validator.scalar().validate(1);
validator.scalar().validate(-1);
validator.scalar().validate(1.1);
validator.scalar().validate(-1.1);
validator.scalar().validate('');
validator.scalar().validate(' ');
validator.scalar().validate('foo');
```

Invalid values:

```js
validator.scalar().validate(undefiend);
validator.scalar().validate(null);
validator.scalar().validate([]);
validator.scalar().validate({});
validator.scalar().validate(new Array());
validator.scalar().validate(new Object());
validator.scalar().validate(Object.create(null));
```
