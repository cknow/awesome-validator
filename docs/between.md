# Between

Validates lengths.

Valid values:

```js
validator.between(1).validate('foo'));
validator.between(100).validate(100));
validator.between(100, 200, false).validate(150));
validator.between(1).validate({foo: 'bar'}));
validator.between(1).validate([1]));
```

Invalid values:

```js
validator.between(5).validate('foo'));
validator.between(3, 5, false).validate('foo'));
validator.between(100).validate(50));
validator.between(100, 200, false).validate(100));
validator.between(2).validate({foo: 'bar'}));
validator.between(2).validate([1]));
```
