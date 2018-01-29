# Isrc

Validates if the input is isrc.

Valid values:

```js
validator.isrc().validate('USAT29900609');
validator.isrc().validate('GBAYE6800011');
validator.isrc().validate('USRC15705223');
validator.isrc().validate('USCA29500702');
```

Invalid values:

```js
validator.isrc().validate('USAT2990060');
validator.isrc().validate('SRC15705223');
validator.isrc().validate('US-CA29500702');
validator.isrc().validate('USARC15705223');
```
