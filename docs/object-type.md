# Object Type

Validates whether the type of an input is object.

Valid values:

```js
validator.objectType().validate(null);
validator.objectType().validate({});
validator.objectType().validate({foo: 'bar'});
validator.objectType().validate(new Object());
validator.objectType().validate(new Object({foo: 'bar'}));
validator.objectType().validate(Object.create(null));
validator.objectType().validate([]]);
validator.objectType().validate(new Array());
validator.objectType().validate(['foo']);
validator.objectType().validate(new Array('foo'));
```

Invalid values:

```js
validator.objectType().validate('foo');
validator.objectType().validate(undefined);
validator.objectType().validate(true);
validator.objectType().validate(false);
validator.objectType().validate(0);
validator.objectType().validate(1);
```
