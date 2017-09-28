# In

Validates if the input is contained in a specific searcher.

Valid values:

```js
validator.in('foobar').validate('foo');
validator.in(String('foobar')).validate('foo');
validator.in([1, 2, 3]).validate(1);
validator.in(new Array('foo', 'bar', 'foobar')).validate('foo');
validator.in(new Set([1, 2, 3])).validate(1);
validator.in(new Set(['foo', 'bar', 'foobar'])).validate('foo');
validator.in(new Map().set(1, 'bar')).validate(1);
validator.in(new Map().set('foo', 'bar')).validate('foo');
validator.in({foo: 'bar'}).validate('foo');
validator.in(Object({foo: 'bar'})).validate('foo');
```

Invalid values:

```js
validator.in('foo').validate('bar');
validator.in(String('foo')).validate('bar');
validator.in([1, 2, 3]).validate(0);
validator.in(new Array('foo', 'bar')).validate('foobar');
validator.in(new Set([1, 2, 3])).validate(0);
validator.in(new Set(['foo', 'bar'])).validate('foobar');
validator.in(new Map().set(1, 'bar')).validate(0);
validator.in(new Map().set('foo', 'bar')).validate('foobar');
validator.in({foo: 'bar'}).validate('bar');
validator.in(Object({foo: 'bar'})).validate('bar');
validator.in().validate(null);
```
