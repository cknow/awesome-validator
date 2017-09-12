# All Of

Will validate if all inner validators validates.

Valid values:

```js
validator.allOf(
    validator.required(),
    validator.booleanType()
).validate(true);
```

Invalid values:

```js
validator.allOf(
    validator.required(),
    validator.booleanType()
).validate('foo');
```
