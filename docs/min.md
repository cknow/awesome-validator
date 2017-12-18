# Min

Validates if the input is greater than the minimum value.

Valid values:

```js
validator.min().validate(0);
validator.min(null).validate(0);
validator.min(undefined).validate(0);
validator.min(100).validate(100);
validator.min(99, false).validate(100);
validator.min('a').validate('a');
validator.min('a', false).validate('b');
validator.min('ab').validate('ab');
validator.min('ab', false).validate('abc');
validator.min([2008]).validate([2008]);
validator.min([2007], false).validate([2008]);
validator.min('2010-01-01').validate('2010-01-01');
validator.min('2009-01-01', false).validate('2010-01-01');
```

Invalid values:

```js
validator.min(200).validate(100);
validator.min(100, false).validate(100);
validator.min('b').validate('a');
validator.min('b', false).validate('b');
validator.min('abc').validate('ab');
validator.min('ab', false).validate('ab');
validator.min([2009]).validate([2008]);
validator.min([2008], false).validate([2008]);
validator.min('2011-01-01').validate('2010-01-01');
validator.min('2010-01-01', false).validate('2010-01-01');
```
