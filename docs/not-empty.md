# Not Empty

Validates if the given input is not empty.

Valid values:

```js
validator.notEmpty().validate(true);
validator.notEmpty().validate(1);
validator.notEmpty().validate(-1);
validator.notEmpty().validate('foo');
validator.notEmpty().validate(['foo']);
validator.notEmpty().validate({foo: 'bar'});
validator.notEmpty().validate(new Array('foo'));
validator.notEmpty().validate(new Object({foo: 'bar'}));
```

Invalid values:

```js
validator.notEmpty().validate(undefined);
validator.notEmpty().validate(null);
validator.notEmpty().validate(false);
validator.notEmpty().validate(0);
validator.notEmpty().validate('');
validator.notEmpty().validate('0');
validator.notEmpty().validate(' ');
validator.notEmpty().validate('   ');
validator.notEmpty().validate([]);
validator.notEmpty().validate({});
validator.notEmpty().validate(new Array());
validator.notEmpty().validate(new Object());
validator.notEmpty().validate(Object.create(null));
```
