# Object Strict Type

Validates whether the type of an input is object strict.

Valid values:

```js
validator.objectStrictType().validate({});
validator.objectStrictType().validate({foo: 'bar'});
validator.objectStrictType().validate(new Object());
validator.objectStrictType().validate(new Object({foo: 'bar'}));
```

Invalid values:

```js
validator.objectStrictType().validate(undefined);
validator.objectStrictType().validate(null);
validator.objectStrictType().validate(true);
validator.objectStrictType().validate(false);
validator.objectStrictType().validate('foo');
validator.objectStrictType().validate(0);
validator.objectStrictType().validate(1);
validator.objectStrictType().validate([]);
validator.objectStrictType().validate(new Array());
validator.objectStrictType().validate(Object.create(null));
```
