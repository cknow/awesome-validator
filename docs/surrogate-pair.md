# SurrogatePair

Validates if the given input is surrogate pair.

Valid values:

```js
validator.surrogatePair().validate('𠮷野𠮷');
validator.surrogatePair().validate('𩸽');
validator.surrogatePair().validate('ABC千𥧄1-2-3');
```

Invalid values:

```js
validator.surrogatePair().validate('吉野竈');
validator.surrogatePair().validate('鮪');
validator.surrogatePair().validate('ABC1-2-3');
```
