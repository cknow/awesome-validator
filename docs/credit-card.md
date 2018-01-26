# CreditCard

Validates a credit card number.

Valid values:

```js
validator.creditCard().validate('5376 7473 9720 8720');
validator.creditCard('American Express').validate('340316193809364');
validator.creditCard('Diners Club').validate('30351042633884');
validator.creditCard('Discover').validate('6011000990139424');
validator.creditCard('JCB').validate('3566002020360505');
validator.creditCard('MasterCard').validate('5376747397208720');
validator.creditCard('Visa').validate('4024007153361885');
```

Invalid values:

```js
validator.creditCard().validate('');
validator.creditCard().validate('foo');
validator.creditCard().validate(null);
validator.creditCard().validate('1234 1234 1234 1234');
validator.creditCard('Visa').validate(3530111333300000); // JCB
```

The current supported services are:

- American Express
- Diners Club
- Discover
- JCB
- MasterCard
- Visa
