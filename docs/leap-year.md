# Leap Year

Validates if a year is leap.

Valid values:

```js
validator.leapYear().validate('2008');
validator.leapYear().validate(new Date(2008, 1, 29));
validator.leapYear().validate('2008-02-29');
validator.leapYear().validate(2008);
validator.leapYear().validate(moment([2008]));
```

Invalid values:

```js
validator.leapYear().validate(''));
validator.leapYear().validate(new Date(2009, 1, 29));
validator.leapYear().validate('2009');
validator.leapYear().validate('2009-02-29');
validator.leapYear().validate(2009);
validator.leapYear().validate([]);
validator.leapYear().validate({});
validator.leapYear().validate(moment([2009]));
```
