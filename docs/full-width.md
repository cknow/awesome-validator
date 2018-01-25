# FullWidth

Validates if the given input is full width.

Valid values:

```js
validator.fullWidth().validate('ひらがな・カタカナ、．漢字');
validator.fullWidth().validate('Ｆｶﾀｶﾅﾞﾬ');
validator.fullWidth().validate('Good＝Parts');
```

Invalid values:

```js
validator.fullWidth().validate('abc');
validator.fullWidth().validate('abc123');
validator.fullWidth().validate('!"#$%&()<>/+=-_? ~^|.,@`{}[]');
```
