# Not

Validate if negates any rule.

Valid values:

```js
validator.not(validator.notEmpty()).validate(null);
```

Invalid values:

```js
validator.not(validator.notEmpty()).validate('foo');
```
