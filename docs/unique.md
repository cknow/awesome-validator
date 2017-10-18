# Unique

Validates whether the input array contains only unique values.

Valid values:

```js
validator.unique().validate([]);
validator.unique().validate([1, 2, 3]);
validator.unique().validate([true, false]);
validator.unique().validate(['alpha', 'beta', 'gamma', 'delta']);
validator.unique().validate([0, 2.71, 3.14]);
validator.unique().validate([[], ['str'], [1]]);
validator.unique().validate([{'key': 'value'}, {'other_key': 'value'}]);
```

Invalid values:

```js
validator.unique().validate('test');
validator.unique().validate([1, 2, 2, 3]);
validator.unique().validate([1, 2, 3, 1]);
validator.unique().validate([true, false, false]);
validator.unique().validate(['alpha', 'beta', 'gamma', 'delta', 'beta']);
validator.unique().validate([0, 3.14, 2.71, 3.14]);
validator.unique().validate([[], [1], [1]]);
validator.unique().validate([{'key': 'value'}, {'key': 'value'}]);
validator.unique().validate([1, true, 'test']);
```
