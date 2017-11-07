# Not Optional

Validates if the given input is not optional.

Valid values:

```js
validator.notOptional().validate(' ');
validator.notOptional().validate('foo');
validator.notOptional().validate(true);
validator.notOptional().validate(false);
validator.notOptional().validate(0);
validator.notOptional().validate(1);
validator.notOptional().validate([]);
validator.notOptional().validate({});
```

Invalid values:

```js
validator.notOptional().validate('');
validator.notOptional().validate(null);
```
