# Luhn

Validate whether a given input is a [Luhn](https://en.wikipedia.org/wiki/Luhn_algorithm) number.

Valid values:

```js
validator.luhn().validate('2222400041240011');
validator.luhn().validate('340316193809364');
validator.luhn().validate('6011000990139424');
validator.luhn().validate('2223000048400011');
```

Invalid values:

```js
validator.luhn().validate('2222400041240021');
validator.luhn().validate('340316193809334');
validator.luhn().validate('6011000990139421');
validator.luhn().validate('2223000048400010');
validator.luhn().validate(null);
validator.luhn().validate(undefined);
validator.luhn().validate('foo');
validator.luhn().validate(' ');
