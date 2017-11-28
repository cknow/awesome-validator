# Leap Date

Validates if a date is leap.

Valid values:

```js
leapDate.validate(new Date(2008, 1, 29));
leapDate.validate('2008-02-29');
leapDate.validate(moment([2008, 1, 29]));
```

Invalid values:

```js
leapDate.validate(''));
leapDate.validate(new Date(2009, 1, 29));
leapDate.validate('2009');
leapDate.validate('2009-02-29');
leapDate.validate(2009);
leapDate.validate([]);
leapDate.validate({});
leapDate.validate(moment([2009]));
```
