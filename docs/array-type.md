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
validator.arrayType().validate(0);
validator.arrayType().validate('foo');
validator.arrayType().validate(true);
validator.arrayType().validate({});
```
