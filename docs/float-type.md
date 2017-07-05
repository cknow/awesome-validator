# Float Type

Validates whether the type of an input is float.

Valid values:

```js
validator.floatType().validate(-0.1);
validator.floatType().validate(0.1);
validator.floatType().validate(-1.1);
validator.floatType().validate(1.1);
```

Invalid values:

```js
validator.floatType().validate(1);
validator.floatType().validate('foo');
validator.floatType().validate(true);
validator.floatType().validate([]);
validator.floatType().validate({});
```
