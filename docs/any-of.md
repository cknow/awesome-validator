# Any Of

Will validate if any inner validators validates.

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
