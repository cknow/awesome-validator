# Locale

Validates if the given input is a locale.

Valid values:

```js
validator.locale().validate('en_US');
validator.locale().validate('pt_BR');
validator.locale().validate('fr_FR');
```

Invalid values:

```js
validator.locale().validate('invalid_locale');
validator.locale().validate(null);
validator.locale().validate(undefined);
```
