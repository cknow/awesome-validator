# Base

Validate numbers in any base, even with non regular bases.

Valid values:

```js
validator.base(2).validate('011010001');
validator.base(3).validate('0120122001');
validator.base(2, 'xy').validate('xyyxyxxy');
validator.base(3, 'pfg').validate('gfpffp');
```

Invalid values:

```js
validator.base(2).validate('01210103001');
validator.base(3).validate('0120125f2001');
validator.base(8).validate('01234dfZ567520');
validator.base(16).validate('012aXS34f5675c20d');
```
