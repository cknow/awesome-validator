# Prnt

Validates if the given input is a prnt.

Valid values:

```js
validator.prnt().validate(' ');
validator.prnt().validate('LKA#@%.54');
validator.prnt().validate('foobar');
validator.prnt().validate('16-50');
validator.prnt().validate('123');
validator.prnt().validate('foo bar');
validator.prnt().validate('#$%&*_');
```

Invalid values:

```js
validator.prnt().validate('');
validator.prnt().validate(null);
validator.prnt().validate(undefined);
validator.prnt().validate(`foo${String.fromCharCode(7)}bar`);
validator.prnt().validate(`foo${String.fromCharCode(10)}bar`);
```
