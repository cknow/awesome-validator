# Xdigit

Accepts an hexadecimal number.

Valid values:

```js
validator.xdigit().validate('FFF');
validator.xdigit().validate('15');
validator.xdigit().validate('DE12FA');
validator.xdigit().validate('1234567890abcdef');
validator.xdigit().validate(0x123);
```

Invalid values:

```js
validator.xdigit().validate('');
validator.xdigit().validate(' ');
validator.xdigit().validate('16-50');
validator.xdigit().validate('j');
validator.xdigit().validate('Foo');
validator.xdigit().validate(null);
validator.xdigit().validate(undefined);
```
