# Bsn

Validates a Dutch citizen service number [BSN](https://nl.wikipedia.org/wiki/Burgerservicenummer).

Valid values:

```js
validator.bsn().validate('612890053');
validator.bsn().validate('087880532');
validator.bsn().validate('386625918');
```

Invalid values:

```js
validator.bsn().validate('1234567890');
validator.bsn().validate('0987654321');
validator.bsn().validate('612890054');
```
