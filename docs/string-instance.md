# String Instance

Validates if the given input is string instance.

Valid values:

```js
validator.stringInstance().validate('');
validator.stringInstance().validate(' ');
validator.stringInstance().validate('   ');
validator.stringInstance().validate('0');
validator.stringInstance().validate('foo');
validator.stringInstance().validate(String());
```

Invalid values:

```js
validator.stringInstance().validate(undefined);
validator.stringInstance().validate(null);
validator.stringInstance().validate(true);
validator.stringInstance().validate(false);
validator.stringInstance().validate(0);
validator.stringInstance().validate(1);
validator.stringInstance().validate(-1);
validator.stringInstance().validate(1.1);
validator.stringInstance().validate(-1.1);
validator.stringInstance().validate([]);
validator.stringInstance().validate({});
validator.stringInstance().validate(new Array());
validator.stringInstance().validate(new Object());
validator.stringInstance().validate(Object.create(null));
```
