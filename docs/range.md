# Range

Validates lengths.

Valid values:

```js
validator.range(1).validate('foo'));
validator.range(100).validate(100));
validator.range(100, 200, false).validate(150));
validator.range(1).validate({foo: 'bar'}));
validator.range(1).validate([1]));
```

Invalid values:

```js
validator.range(5).validate('foo'));
validator.range(3, 5, false).validate('foo'));
validator.range(100).validate(50));
validator.range(100, 200, false).validate(100));
validator.range(2).validate({foo: 'bar'}));
validator.range(2).validate([1]));
```
