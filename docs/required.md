# Required

Validates if the given input is not empty.

Valid values:

```js
validator.required().validate(true);
validator.required().validate(1);
validator.required().validate(-1);
validator.required().validate('foo');
validator.required().validate(['foo']);
validator.required().validate({foo: 'bar'});
validator.required().validate(new Array('foo'));
validator.required().validate(new Object({foo: 'bar'}));
```

Invalid values:

```js
validator.required().validate(undefiend);
validator.required().validate(null);
validator.required().validate(false);
validator.required().validate(0);
validator.required().validate('');
validator.required().validate('0');
validator.required().validate(' ');
validator.required().validate('   ');
validator.required().validate([]);
validator.required().validate({});
validator.required().validate(new Array());
validator.required().validate(new Object());
validator.required().validate(Object.create(null));
```
