# DateTime

Validates if input is a date.

Valid values:

```js
validator.dateTime().validate('2008');
validator.dateTime().validate(new Date(2008, 1, 29));
validator.dateTime().validate('2008-02-29');
validator.dateTime().validate(2008);
validator.dateTime().validate(moment([2008]));
validator.dateTime().validate([]);
validator.dateTime().validate({});
validator.dateTime('DD-MM-YYYY').validate('29-02-2008');
validator.dateTime('DD/MM/YYYY HH:mm:ss').validate('20/10/2008 10:30:29');
```

Invalid values:

```js
validator.dateTime().validate('');
validator.dateTime().validate('2009-12-00');
validator.dateTime('DD/MM/YYYY').validate('2008-02-29');
```
