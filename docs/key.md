# Key

Validates an array key.

Valid values:

```js
validator.key(0).validate(['foo']);
validator.key('foo').validate({foo: 'bar'});
validator.key('foo').validate(new Map<string, string>([['foo', 'bar']]));
validator.key('foo', validator.stringType()).validate(new Map<string, string>([['foo', 'bar']]));
validator.key(null, undefined, false).validate('foo');
```

Invalid values:

```js
validator.key('foo').validate(new Set('foo'));
validator.key('foo').validate({bar: 'foo'});
validator.key('foo').validate([]);
validator.key('foo', validator.intType()).validate(new Map<string, string>([['foo', 'bar']]));
validator.key(null).validate([]);
```
