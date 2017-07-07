# String Type

Validates if the given input is string.

Valid values:

```js
validator.stringType().validate('');
validator.stringType().validate(' ');
validator.stringType().validate('   ');
validator.stringType().validate('0');
validator.stringType().validate('foo');
validator.stringType().validate(String());
```

Invalid values:

```js
validator.stringType().validate(undefiend);
validator.stringType().validate(null);
validator.stringType().validate(true);
validator.stringType().validate(false);
validator.stringType().validate(0);
validator.stringType().validate(1);
validator.stringType().validate(-1);
validator.stringType().validate(1.1);
validator.stringType().validate(-1.1);
validator.stringType().validate([]);
validator.stringType().validate({});
validator.stringType().validate(new Array());
validator.stringType().validate(new Object());
validator.stringType().validate(Object.create(null));
```
