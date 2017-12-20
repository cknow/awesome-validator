# Identical

Validates if the input is identical to some value.

Valid values:

```js
validator.identical('foo').validate('foo');
validator.identical(1).validate(1);
validator.identical([]).validate([]);
validator.identical([1, 2, 3]).validate([1, 2, 3]);
```

Invalid values:

```js
validator.identical('foo').validate('foobar');
validator.identical(1).validate('1');
validator.identical([1, 2, 3]).validate(['1', 2, 3]);
```
