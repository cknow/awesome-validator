# When

A ternary validator that accepts three parameters.

Valid values:

```js
validator.when(validator.alwaysValid(), validator.alwaysValid()).validate(null);
validator.when(validator.alwaysInvalid(), validator.alwaysValid(), validator.alwaysValid()).validate(null);
```

Invalid values:

```js
validator.when(validator.alwaysInvalid(), validator.alwaysValid()).validate(null);
validator.when(validator.alwaysValid(), validator.alwaysInvalid()).validate(null);
validator.when(validator.alwaysInvalid(), validator.alwaysValid(), validator.alwaysInvalid()).validate(null);
```
