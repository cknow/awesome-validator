# DateFormat

Validates if input is a date.

Valid values:

```js
validator.dateFormat().validate('2008');
validator.dateFormat().validate(new Date(2008, 1, 29));
validator.dateFormat().validate('2008-02-29');
validator.dateFormat().validate(2008);
validator.dateFormat().validate(moment([2008]));
validator.dateFormat().validate([]);
validator.dateFormat().validate({});
validator.dateFormat('DD-MM-YYYY').validate('29-02-2008');
validator.dateFormat('DD/MM/YYYY HH:mm:ss').validate('20/10/2008 10:30:29');
```

Invalid values:

```js
validator.dateFormat().validate('');
validator.dateFormat().validate('2009-12-00');
validator.dateFormat('DD/MM/YYYY').validate('2008-02-29');
```
