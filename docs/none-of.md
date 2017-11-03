# None Of

Will validate if none internal validator is validate.

Valid values:

```js
validator.noneOf(
    validator.alwaysInvalid(),
    validator.alwaysInvalid()
).validate(null);
```

Invalid values:

```js
validator.noneOf(
    validator.alwaysInvalid(),
    validator.alwaysValid()
).validate(null);
```
