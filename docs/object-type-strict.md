# Object Type Strict

Validates whether the type of an input is object (strict).

Valid values:

```js
validator.objectTypeStrict().validate({});
validator.objectTypeStrict().validate({foo: 'bar'});
validator.objectTypeStrict().validate(new Object());
validator.objectTypeStrict().validate(new Object({foo: 'bar'}));
```

Invalid values:

```js
validator.objectTypeStrict().validate(undefined);
validator.objectTypeStrict().validate(null);
validator.objectTypeStrict().validate(true);
validator.objectTypeStrict().validate(false);
validator.objectTypeStrict().validate('foo');
validator.objectTypeStrict().validate(0);
validator.objectTypeStrict().validate(1);
validator.objectTypeStrict().validate([]);
validator.objectTypeStrict().validate(new Array());
validator.objectTypeStrict().validate(Object.create(null));
```
