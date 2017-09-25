# Array Val

Validates whether the value of input is array.

Valid values:

```js
validator.arrayVal().validate([]);
validator.arrayVal().validate([1, 2, 3]);
validator.arrayVal().validate(new Array());
validator.arrayVal().validate(new Array(1, 2, 3));
```

Invalid values:

```js
validator.arrayVal().validate(undefined);
validator.arrayVal().validate(null);
validator.arrayVal().validate(true);
validator.arrayVal().validate(false);
validator.arrayVal().validate('foo');
validator.arrayVal().validate(0);
validator.arrayVal().validate(1);
validator.arrayVal().validate(-1);
validator.arrayVal().validate(1.1);
validator.arrayVal().validate(-1.1);
validator.arrayVal().validate({});
validator.arrayVal().validate(new Object());
validator.arrayVal().validate(Object.create(null));
```
