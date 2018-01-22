# KeySet

Validates a keys in a defined structure.

Valid values:

```js
validator.keySet(new Key('foo')).validate({foo: 'foobar'});
validator.keySet(validtor.key('foo')).validate(new Map<string, string>([['foo', 'bar']]));
```

Invalid values:

```js
validator.keySet(validator.key('foo')).validate({bar: 'foobar'});
validator.keySet(new Key('foo')).validate(new Map<string, string>());
```
