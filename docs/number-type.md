# Number Type

Validates whether the type of an input is number.

Valid values:

```js
validator.numberType().validate(-0);
validator.numberType().validate(0);
validator.numberType().validate(0.0);
validator.numberType().validate(-1);
validator.numberType().validate(1);
validator.numberType().validate(1.0);
validator.numberType().validate(-0.1);
validator.numberType().validate(0.1);
validator.numberType().validate(-1.1);
validator.numberType().validate(1.1);
```

Invalid values:

```js
validator.numberType().validate(undefined);
validator.numberType().validate(null);
validator.numberType().validate(true);
validator.numberType().validate(false);
validator.numberType().validate('foo');
validator.numberType().validate([]);
validator.numberType().validate({});
validator.numberType().validate(new Array());
validator.numberType().validate(new Object());
validator.numberType().validate(Object.create(null));
```
