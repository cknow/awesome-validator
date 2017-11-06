# Contains

Validates if the input is contains some value.

Valid values:

```js
validator.contains('foo').validate('foobar');
validator.contains('foo').validate(String('foobar'));
validator.contains(1).validate([1, 2, 3]);
validator.contains('foo').validate(new Array('foo', 'bar', 'foobar'));
validator.contains(1).validate(new Set([1, 2, 3]));
validator.contains('foo').validate(new Set(['foo', 'bar', 'foobar']));
validator.contains(1).validate(new Map().set(1, 'bar'));
validator.contains('foo').validate(new Map().set('foo', 'bar'));
validator.contains('foo').validate({foo: 'bar'});
validator.contains('foo').validate(Object({foo: 'bar'}));
validator.contains('foo', false).validate('Foo');
validator.contains('FOO', false, true).validate('FOO');
```

Invalid values:

```js
validator.contains('bar').validate('foo');
validator.contains(String('bar')).validate('foo');
validator.contains(0).validate([1, 2, 3]);
validator.contains('foobar').validate(new Array('foo', 'bar'));
validator.contains(0).validate(new Set([1, 2, 3]));
validator.contains('foobar').validate(new Set(['foo', 'bar']));
validator.contains(0).validate(new Map().set(1, 'bar'));
validator.contains('foobar').validate(new Map().set('foo', 'bar'));
validator.contains('bar').validate({foo: 'bar'});
validator.contains('bar').validate(Object({foo: 'bar'}));
validator.contains().validate(null);
validator.contains('foo', false).validate('foobar');
validator.contains('foo', false, true).validate('FOO');
```
