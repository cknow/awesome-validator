# Null Type

Validates whether the type of an input is null.

Valid values:

```js
validator.nullType().validate(null);
```

Invalid values:

```js
validator.nullType().validate([]);
validator.nullType().validate({});
validator.nullType().validate('foo');
validator.nullType().validate(undefined);
validator.nullType().validate(true);
validator.nullType().validate(false);
validator.nullType().validate(0);
validator.nullType().validate(1);
```
