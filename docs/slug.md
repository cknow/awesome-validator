# Slug

Validates if the given input is a slug.

Valid values:

```js
validator.slug().validate('o-rato-roeu-o-rei-de-roma');
validator.slug().validate('o-alganet-e-um-feio');
validator.slug().validate('a-e-i-o-u');
validator.slug().validate('anticonstitucionalissimamente');
```

Invalid values:

```js
validator.slug().validate('');
validator.slug().validate('o-alganet-é-um-feio');
validator.slug().validate('á-é-í-ó-ú');
validator.slug().validate('-assim-nao-pode');
validator.slug().validate('assim-tambem-nao-');
validator.slug().validate('nem--assim');
validator.slug().validate('--nem-assim');
validator.slug().validate('Nem mesmo Assim');
validator.slug().validate('Ou-ate-assim');
validator.slug().validate('-Se juntar-tudo-Então-');
```
