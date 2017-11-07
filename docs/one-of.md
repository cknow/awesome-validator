# One Of

Will validate if exactly one inner validator passes.

Valid values:

```js
validator.oneOf(
    validator.alwaysInvalid(),
    validator.alwaysInvalid(),
    validator.alwaysValid()
).validate(null);
```

Invalid values:

```js
validator.oneOf(
    validator.alwaysInvalid(),
    validator.alwaysValid(),
    validator.alwaysValid()
).validate(null);
```
