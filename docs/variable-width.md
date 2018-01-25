# VariableWidth

Validates if the given input is variable width.

Valid values:

```js
validator.variableWidth().validate('ひらがなカタカナ漢字ABCDE');
validator.variableWidth().validate('３ー０123');
validator.variableWidth().validate('Ｆｶﾀｶﾅﾞﾬ');
validator.variableWidth().validate('Good＝Parts');
```

Invalid values:

```js
validator.variableWidth().validate('abc');
validator.variableWidth().validate('abc123');
validator.variableWidth().validate('!"#$%&()<>/+=-_? ~^|.,@`{}[]');
validator.variableWidth().validate('ひらがな・カタカナ、．漢字');
```
