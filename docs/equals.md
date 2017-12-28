# Equals

Validates if the input is equal to some value.

Valid values:

```js
validator.equals('foo').validate('foo');
validator.equals(1).validate('1');
validator.equals(1).validate(1);
validator.equals([]).validate([]);
validator.equals([1, 2, 3]).validate([1, 2, 3]);
validator.equals([1, 2, 3]).validate(['1', 2, 3]);
validator.equals(null).validate(null);
```

Invalid values:

```js
validator.equals('foo').validate('foobar');
validator.equals(null).validate('foo');
validator.equals('foo').validate(null);
```
