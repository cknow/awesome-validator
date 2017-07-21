# Lowercase

Validates if the given input is lowercase.

Valid values:

```js
validator.lowercase().validate('');
validator.lowercase().validate('foo');
```

Invalid values:

```js
validator.lowercase().validate('Foo');
validator.lowercase().validate('fooBar');
```
