# Leap Date

Validates if a date is leap.

Valid values:

```js
validator.leapDate().validate(new Date(2008, 1, 29));
validator.leapDate().validate('2008-02-29');
validator.leapDate().validate(moment([2008, 1, 29]));
```

Invalid values:

```js
validator.leapDate().validate(''));
validator.leapDate().validate(new Date(2009, 1, 29));
validator.leapDate().validate('2009');
validator.leapDate().validate('2009-02-29');
validator.leapDate().validate(2009);
validator.leapDate().validate([]);
validator.leapDate().validate({});
validator.leapDate().validate(moment([2009]));
```
