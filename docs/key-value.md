# Key Value

Valid values:

```js
validator.keyValue('foo', 'equals', 'bar').validate({foo: 'foobar', bar: 'foobar'});
validator.keyValue('foo', 'equals', 'bar').validate({foo: 10, bar: 10});
```

Invalid values:

```js
validator.keyValue('invalidCompared', 'equals', 'bar').validate({foz: 'foobar', bar: 'foobar'});
validator.keyValue('foo', 'invalidRule', 'bar').validate({foo: 'foobar', bar: 'foobar'});
validator.keyValue('foo', 'equals', 'invalidBase').validate({foo: 'foobar', baz: 'foobar'});
validator.keyValue('foo', 'equals', 'bar').validate({foo: 'foobar', bar: 'foobaz'});
```
