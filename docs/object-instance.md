# Object Instance

Validates if the given input is object instance.

Valid values:

```js
validator.objectInstance().validate({});
validator.objectInstance().validate({foo: 'bar'});
validator.objectInstance().validate(new Object());
validator.objectInstance().validate(new Object({foo: 'bar'}));
validator.objectInstance().validate([]]);
validator.objectInstance().validate(new Array());
validator.objectInstance().validate(['foo']);
validator.objectInstance().validate(new Array('foo'));
```

Invalid values:

```js
validator.objectInstance().validate(null);
validator.objectInstance().validate(Object.create(null));
validator.objectInstance().validate(undefined);
validator.objectInstance().validate(true);
validator.objectInstance().validate(false);
validator.objectInstance().validate('foo');
validator.objectInstance().validate(0);
validator.objectInstance().validate(1);
```
