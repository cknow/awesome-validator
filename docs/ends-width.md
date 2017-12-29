# Ends With

Validates only if the value is at the end of the input.

Valid values:

```js
validator.endsWith('foo').validate('Foo');
validator.endsWith('foo', true).validate('foo');
validator.endsWith('foo').validate('barbazFOO');
validator.endsWith('foo').validate('barbazfoo');
validator.endsWith('foo').validate('foobazfoo');
validator.endsWith('foo').validate(['bar', 'foo']);
validator.endsWith('1').validate([3, 2, 1]);
validator.endsWith('1', true).validate([3, 2, '1']);
validator.endsWith(1, true).validate([3, 2, 1]);
```

Invalid values:

```js
validator.endsWith('foo').validate('');
validator.endsWith('bat').validate(['foo', 'bar']);
validator.endsWith('foo').validate('barfaabaz');
validator.endsWith('foo', true).validate('FOObarbaz');
validator.endsWith('foo').validate('faabarbaz');
validator.endsWith('foo').validate('baabazfaa');
validator.endsWith('foo').validate('baafoofaa');
validator.endsWith('1', true).validate([3, 2, 1]);
validator.endsWith(1, true).validate([3, 2, '1']);
```
