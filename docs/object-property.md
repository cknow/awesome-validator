# Object Property

Validates if the input object has the property.

Valid values:

```js
validator.objectProperty('foo').validate({foo: 'bar'});
validator.objectProperty('bar').validate({bar: 'foo'});
validator.objectProperty('foobar').validate({foobar: (): string => 'foobar'});
```

Invalid values:

```js
validator.objectProperty('foo').validate(null);
validator.objectProperty('foo').validate({});
validator.objectProperty('foo').validate({bar: 'foo'});
```
