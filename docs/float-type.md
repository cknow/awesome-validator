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
validator.floatType().validate(undefined);
validator.floatType().validate(null);
validator.floatType().validate(true);
validator.floatType().validate(false);
validator.floatType().validate('foo');
validator.floatType().validate(-0);
validator.floatType().validate(0);
validator.floatType().validate(0.0);
validator.floatType().validate(-1);
validator.floatType().validate(1);
validator.floatType().validate(1.0);
validator.floatType().validate([]);
validator.floatType().validate({});
validator.floatType().validate(new Array());
validator.floatType().validate(new Object());
validator.floatType().validate(Object.create(null));
```
