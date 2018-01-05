# Each

Iterates over an array or Iterator and validates the value or key of each entry.

Valid values:

```js
validator.each(validator.alwaysValid()).validate([1, 2, 3, 4, 5]);
validator.each(null, validator.alwaysValid()).validate(['a', 'b', 'c', 'd', 'e']);
validator.each(validator.alwaysValid(), validator.alwaysValid()).validate(['a', 'b', 'c', 'd', 'e']);
```

Invalid values:

```js
validator.each(validator.alwaysInvalid()).validate(['', 2, 3, 4, 5]);
validator.each(null, validator.alwaysInvalid()).validate({age: 22});
```
