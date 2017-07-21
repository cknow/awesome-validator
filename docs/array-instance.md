# Array Instance

Validates if the given input is array instance.

Valid values:

```js
validator.arrayInstance().validate([]);
validator.arrayInstance().validate([1, 2, 3]);
validator.arrayInstance().validate(new Array());
validator.arrayInstance().validate(new Array(1, 2, 3));
```

Invalid values:

```js
validator.arrayInstance().validate(undefined);
validator.arrayInstance().validate(null);
validator.arrayInstance().validate(true);
validator.arrayInstance().validate(false);
validator.arrayInstance().validate('foo');
validator.arrayInstance().validate(0);
validator.arrayInstance().validate(1);
validator.arrayInstance().validate(-1);
validator.arrayInstance().validate(1.1);
validator.arrayInstance().validate(-1.1);
validator.arrayInstance().validate({});
validator.arrayInstance().validate(new Object());
validator.arrayInstance().validate(Object.create(null));
```
