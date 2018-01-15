# Key Nested

Validates property using `.` to represent nested data.

Valid values:

```js
validator.keyNested('foo.bar').validate({foo: {bar: 'foobar'}});
validator.keyNested('foo.bar').validate(
    new Map<string, Map<string, string>>([['foo', new Map<string, string>([['bar', 'foobar']])]])
);
```

Invalid values:

```js
validator.keyNested('foo.bar').validate({foo: {baz: 'bar'}});
validator.keyNested('foo.*').validate({});
validator.keyNested('bar').validate([]);
```
