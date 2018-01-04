# Alpha

Validates if the given input is alpha.

Valid values:

```js
validator.alpha().validate('alganet');
validator.alpha().validate('a');
validator.alpha().validate('\t');
validator.alpha().validate('\n');
```

Invalid values:

```js
validator.alpha().validate('');
validator.alpha().validate('16-50');
validator.alpha().validate('@#$');
validator.alpha().validate('_');
```
