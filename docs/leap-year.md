# Leap Year

Validates if a year is leap.

Valid values:

```js
leapYear.validate('2008');
leapYear.validate(new Date(2008, 1, 29));
leapYear.validate('2008-02-29');
leapYear.validate(2008);
leapYear.validate(moment([2008]));
```

Invalid values:

```js
leapYear.validate(''));
leapYear.validate(new Date(2009, 1, 29));
leapYear.validate('2009');
leapYear.validate('2009-02-29');
leapYear.validate(2009);
leapYear.validate([]);
leapYear.validate({});
leapYear.validate(moment([2009]));
```
