# Sorted

Validates if the given input is sorted.

Valid values:

```js
validator.sorted().validate([1, 2, 3]);
validator.sorted(null, false).validate([3, 2, 1]);
validator.sorted((obj: any) => obj.key).validate({a: {key: 1}, b: {key: 2}, c: {key: 3}});
validator.sorted((obj: any) => obj.key, false).validate({c: {key: 'c'}, b: {key: 'b'}, a: {key: 'a'}});
```

Invalid values:

```js
validator.sorted().validate([3, 2, 1]);
validator.sorted(null, false).validate([1, 2, 3]);
validator.sorted((obj: any) => obj.key).validate({c: {key: 'c'}, b: {key: 'b'}, a: {key: 'a'}});
validator.sorted((obj: any) => obj.key, false).validate({a: {key: 1}, b: {key: 2}, c: {key: 3}});
```
