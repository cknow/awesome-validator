# Boolean Instance

Validates if the given input is boolean instance.

Valid values:

```js
validator.booleanInstance().validate(true);
validator.booleanInstance().validate(false);
```

Invalid values:

```js
validator.booleanInstance().validate(undefined);
validator.booleanInstance().validate(null);
validator.booleanInstance().validate('foo');
validator.booleanInstance().validate(0);
validator.booleanInstance().validate(1);
validator.booleanInstance().validate(-1);
validator.booleanInstance().validate(1.1);
validator.booleanInstance().validate(-1.1);
validator.booleanInstance().validate([]);
validator.booleanInstance().validate({});
validator.booleanInstance().validate(new Array());
validator.booleanInstance().validate(new Object());
validator.booleanInstance().validate(Object.create(null));
```
