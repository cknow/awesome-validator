# Any Of

Will validate if any internal validator is validate.

Valid values:

```js
validator.anyOf(
    validator.alwaysInvalid(),
    validator.alwaysValid()
).validate(true);
```

Invalid values:

```js
validator.anyOf(
    validator.alwaysInvalid(),
    validator.alwaysInvalid()
).validate('foo');
```
