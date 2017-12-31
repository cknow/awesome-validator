# CurrencyCode

Validates an [ISO 4217](http://en.wikipedia.org/wiki/ISO_4217) currency code.

Valid values:

```js
validator.currencyCode().validate('EUR');
validator.currencyCode().validate('BRL');
validator.currencyCode().validate('USD');
```

Invalid values:

```js
validator.currencyCode().validate('USA');
validator.currencyCode().validate('foo');
validator.currencyCode().validate('eu');
```
