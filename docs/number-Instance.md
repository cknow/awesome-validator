# Number Instance

Validates if the given input is number instance.

Valid values:

```js
validator.numberInstance().validate(-0);
validator.numberInstance().validate(0);
validator.numberInstance().validate(0.0);
validator.numberInstance().validate(-1);
validator.numberInstance().validate(1);
validator.numberInstance().validate(1.0);
validator.numberInstance().validate(-0.1);
validator.numberInstance().validate(0.1);
validator.numberInstance().validate(-1.1);
validator.numberInstance().validate(1.1);
```

Invalid values:

```js
validator.numberInstance().validate(undefined);
validator.numberInstance().validate(null);
validator.numberInstance().validate(true);
validator.numberInstance().validate(false);
validator.numberInstance().validate('foo');
validator.numberInstance().validate([]);
validator.numberInstance().validate({});
validator.numberInstance().validate(new Array());
validator.numberInstance().validate(new Object());
validator.numberInstance().validate(Object.create(null));
```
