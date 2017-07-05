# Boolean Type

Validates whether the type of an input is boolean.

Valid values:

```js
validator.booleanType().validate(true);
validator.booleanType().validate(false);
```

Invalid values:

```js
validator.arrayType().validate(0);
validator.arrayType().validate('foo');
validator.arrayType().validate([]);
validator.arrayType().validate({});
```
