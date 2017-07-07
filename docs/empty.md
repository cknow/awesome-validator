# Empty

Validates if the given input is empty.

Valid values:

```js
validator.empty().validate(undefined);
validator.empty().validate(null);
validator.empty().validate(false);
validator.empty().validate(0);
validator.empty().validate('');
validator.empty().validate('0');
validator.empty().validate(' ');
validator.empty().validate('   ');
validator.empty().validate([]);
validator.empty().validate({});
validator.empty().validate(new Array());
validator.empty().validate(new Object());
validator.empty().validate(Object.create(null));
```

Invalid values:

```js
validator.empty().validate(true);
validator.empty().validate(1);
validator.empty().validate(-1);
validator.empty().validate('foo');
validator.empty().validate(['foo']);
validator.empty().validate({foo: 'bar'});
validator.empty().validate(new Array('foo'));
validator.empty().validate(new Object({foo: 'bar'}));
```
