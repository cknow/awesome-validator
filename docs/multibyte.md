# Multibyte

Validates if the given input is multibyte.

Valid values:

```js
validator.multibyte().validate('ひらがな・カタカナ、．漢字');
validator.multibyte().validate('あいうえお foobar');
validator.multibyte().validate('1234abcDEｘｙｚ');
```

Invalid values:

```js
validator.multibyte().validate('abc');
validator.multibyte().validate('abc123');
validator.multibyte().validate('<>@" *.');
```
