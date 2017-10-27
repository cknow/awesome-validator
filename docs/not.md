# Not

Validate if negates any rule.

Valid values:

```js
validator.not(validator.required()).validate(null);
```

Invalid values:

```js
validator.not(validator.required()).validate('foo');
```
