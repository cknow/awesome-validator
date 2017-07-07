# Int Type

Validates whether the type of an input is int.

Valid values:

```js
validator.intType().validate(-0);
validator.intType().validate(0);
validator.intType().validate(0.0);
validator.intType().validate(-1);
validator.intType().validate(1);
validator.intType().validate(1.0);
```

Invalid values:

```js
validator.intType().validate(undefined);
validator.intType().validate(null);
validator.intType().validate(true);
validator.intType().validate(false);
validator.intType().validate('foo');
validator.intType().validate(-0.1);
validator.intType().validate(0.1);
validator.intType().validate(-1.1);
validator.intType().validate(1.1);
validator.intType().validate([]);
validator.intType().validate({});
validator.intType().validate(new Array());
validator.intType().validate(new Object());
validator.intType().validate(Object.create(null));
```
