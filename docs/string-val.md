# String Val

Validates whether the value of input is string.

Valid values:

```js
validator.stringVal().validate('6');
validator.stringVal().validate('String');
validator.stringVal().validate(1.0);
validator.stringVal().validate(42);
validator.stringVal().validate(false);
validator.stringVal().validate(true);
validator.stringVal().validate({toString: () => {}});
```

Invalid values:

```js
validator.stringVal().validate([]);
validator.stringVal().validate(() => {});
validator.stringVal().validate(null);
validator.stringVal().validate(undefined);
validator.stringVal().validate({toString: 'foo'});
```
