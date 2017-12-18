# Imei

Validates is the input is a valid [IMEI](https://en.wikipedia.org/wiki/International_Mobile_Station_Equipment_Identity).

Valid values:

```js
validator.imei().validate('35-007752-323751-3');
validator.imei().validate('35-209900-176148-1');
validator.imei().validate('350077523237513');
validator.imei().validate('356938035643809');
validator.imei().validate('490154203237518');
validator.imei().validate(350077523237513);
validator.imei().validate(356938035643809);
validator.imei().validate(490154203237518);
```

Invalid values:

```js
validator.imei().validate('490154203237512');
validator.imei().validate('4901542032375125');
validator.imei().validate('Whateveeeeeerrr');
validator.imei().validate(null);
validator.imei().validate(undefined);
validator.imei().validate('foo');
validator.imei().validate(' ');
```
