# Issn

Validates if the input is [ISSN](https://pt.wikipedia.org/wiki/International_Standard_Serial_Number).

Valid values:

```js
validator.issn(true).validate('2434-561X');
validator.issn(true).validate('2434561X');
validator.issn(true).validate('0378-5955');
validator.issn(true).validate('03785955');
validator.issn(false, true).validate('2434-561X');
validator.issn(false, true).validate('2434-561x');
validator.issn(false, true).validate('0378-5955');
validator.issn(true, true).validate('2434-561X');
validator.issn(true, true).validate('0378-5955');

validator.issn().validate('0378-5955');
validator.issn().validate('0000-0000');
validator.issn().validate('2434-561X');
validator.issn().validate('2434-561x');
validator.issn().validate('01896016');
validator.issn().validate('20905076');
```

Invalid values:

```js
validator.issn(true).validate('2434-561x');
validator.issn(true).validate('2434561x');
validator.issn(false, true).validate('2434561X');
validator.issn(false, true).validate('2434561x');
validator.issn(false, true).validate('03785955');
validator.issn(true, true).validate('2434-561x');
validator.issn(true, true).validate('2434561X');
validator.issn(true, true).validate('2434561x');
validator.issn(true, true).validate('03785955');

validator.issn().validate('0378-5954');
validator.issn().validate('0000-0001');
validator.issn().validate('0378-123');
validator.issn().validate('037-1234');
validator.issn().validate('0');
validator.issn().validate('2434-561c');
validator.issn().validate('1684-5370');
validator.issn().validate('19960791');
```
