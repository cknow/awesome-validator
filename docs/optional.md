# Optional

Validates if the given input is optional or not.

Valid values:

```js
validator.optional(validator.AlwaysInvalid()).validate(null);
validator.optional(validator.AlwaysInvalid()).validate('');
validator.optional(validator.AlwaysValid()).validate('foo');
```

Invalid values:

```js
validator.optional(validator.AlwaysInvalid()).validate('foo');
```
