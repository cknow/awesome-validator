# Starts With

validates only if the value is at the beginning of the input.

Valid values:

```js
validator.startsWith('foo').validate('Foo');
validator.startsWith('foo', true).validate('foo');
validator.startsWith('foo').validate('FOObarbaz');
validator.startsWith('foo').validate('foobarbaz');
validator.startsWith('foo').validate('foobazfoo');
validator.startsWith('foo').validate(['foo', 'bar']);
validator.startsWith('1').validate([1, 2, 3]);
validator.startsWith('1', true).validate(['1', 2, 3]);
validator.startsWith(1, true).validate([1, 2, 3]);
```

Invalid values:

```js
validator.startsWith('foo').validate('');
validator.startsWith('bat').validate(['foo', 'bar']);
validator.startsWith('foo').validate('barfaabaz');
validator.startsWith('foo', true).validate('FOObarbaz');
validator.startsWith('foo').validate('faabarbaz');
validator.startsWith('foo').validate('baabazfaa');
validator.startsWith('foo').validate('baafoofaa');
validator.startsWith('1', true).validate([1, '1', 3]);
validator.startsWith(1, true).validate(['1', 2, 3]);
```
