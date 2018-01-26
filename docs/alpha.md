# Alpha

Validates if the given input is alpha.

Valid values:

```js
validator.alpha('pt-BR').validate('ÀÂÇÉÊÍÕÓ');
validator.alpha('fr-FR').validate('ÂÆÇÉÈÊË');
validator.alpha().validate('alganet');
validator.alpha().validate('a');
```

Invalid values:

```js
validator.alpha('pt-BR').validate('ÂÆÇÉÈÊË');
validator.alpha('fr-FR').validate('ÀÂÇÉÊÍÕÓ');
validator.alpha().validate('16-50');
validator.alpha().validate('@#$');
validator.alpha().validate('_');
```
