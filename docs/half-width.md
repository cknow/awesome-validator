# HalfWidth

Validates if the given input is half width.

Valid values:

```js
validator.halfWidth().validate('!"#$%&()<>/+=-_? ~^|.,@`{}[]');
validator.halfWidth().validate('l-btn_02--active');
```

Invalid values:

```js
validator.halfWidth().validate('あいうえお');
validator.halfWidth().validate('００１１');
```
