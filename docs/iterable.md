# Iterable

Validates if the input is iterable.

Valid values:

```js
validator.iterable().validate([]);
validator.iterable().validate('foo');
validator.iterable().validate(new Set());
validator.iterable().validate(new Map());
```

Invalid values:

```js

validator.iterable().validate(null);
validator.iterable().validate(undefined);
validator.iterable().validate(false);
validator.iterable().validate(0);
validator.iterable().validate({});
```
