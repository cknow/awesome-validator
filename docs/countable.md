# Countable

Validates if the input is countable.

Valid values:

```js
validator.countable().validate([]);
validator.countable().validate(new Set());
validator.countable().validate(new Map());
```

Invalid values:

```js
validator.countable().validate('foo');
validator.countable().validate(null);
validator.countable().validate(undefined);
validator.countable().validate(false);
validator.countable().validate(0);
validator.countable().validate({});
```
