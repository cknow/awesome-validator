# Max

Validates if the input is less than the maximum value.

Valid values:

```js
validator.max().validate(0);
validator.max(null).validate(0);
validator.max(undefined).validate(0);
validator.max(100).validate(100);
validator.max(100, false).validate(99);
validator.max('a').validate('a');
validator.max('b', false).validate('a');
validator.max('ab').validate('ab');
validator.max('abc', false).validate('ab');
validator.max([2008]).validate([2008]);
validator.max([2008], false).validate([2007]);
validator.max('2010-01-01').validate('2010-01-01');
validator.max('2010-01-01', false).validate('2009-01-01');
```

Invalid values:

```js
validator.max(100).validate(200);
validator.max(100, false).validate(100);
validator.max('a').validate('b');
validator.max('b', false).validate('b');
validator.max('ab').validate('abc');
validator.max('ab', false).validate('ab');
validator.max([2008]).validate([2009]);
validator.max([2008], false).validate([2008]);
validator.max('2010-01-01').validate('2011-01-01');
validator.max('2010-01-01', false).validate('2010-01-01');
```
