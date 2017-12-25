# Language Code

Validates a language code based on ISO 639:

Valid values:

```js
validator.languageCode().validate('por');
validator.languageCode().validate('eng');
```

Invalid values:

```js
validator.languageCode().validate('1');
validator.languageCode().validate('wrong code');
```
