# Phone

Validates if the given input is a phone.

Valid values:

```js
validator.phone().validate('+5 555 555 5555');
validator.phone().validate('555.555.5555');
validator.phone().validate('+5(555)555.5555');
validator.phone().validate('(555)555-5555');
validator.phone().validate('55555555555');
```

Invalid values:

```js
validator.phone().validate('123');
validator.phone().validate('(11- 97777-7777');
validator.phone().validate('-11) 97777-7777');
validator.phone().validate('+5(555)555 555 555');
validator.phone().validate('03610666-5');
```
