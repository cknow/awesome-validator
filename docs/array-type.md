# Array Type

Validates whether the type of an input is array.

Valid values:

```js
validator.arrayType().validate([]);
validator.arrayType().validate([1, 2, 3]);
validator.arrayType().validate(new Array());
validator.arrayType().validate(new Array(1, 2, 3));
```

Invalid values:

```js
validator.arrayType().validate(undefined);
validator.arrayType().validate(null);
validator.arrayType().validate(true);
validator.arrayType().validate(false);
validator.arrayType().validate('foo');
validator.arrayType().validate(0);
validator.arrayType().validate(1);
validator.arrayType().validate(-1);
validator.arrayType().validate(1.1);
validator.arrayType().validate(-1.1);
validator.arrayType().validate({});
validator.arrayType().validate(new Object());
validator.arrayType().validate(Object.create(null));
```
