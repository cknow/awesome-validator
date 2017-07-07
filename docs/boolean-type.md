# Boolean Type

Validates whether the type of an input is boolean.

Valid values:

```js
validator.booleanType().validate(true);
validator.booleanType().validate(false);
```

Invalid values:

```js
validator.booleanType().validate(undefined);
validator.booleanType().validate(null);
validator.booleanType().validate('foo');
validator.booleanType().validate(0);
validator.booleanType().validate(1);
validator.booleanType().validate(-1);
validator.booleanType().validate(1.1);
validator.booleanType().validate(-1.1);
validator.booleanType().validate([]);
validator.booleanType().validate({});
validator.booleanType().validate(new Array());
validator.booleanType().validate(new Object());
validator.booleanType().validate(Object.create(null));
```
