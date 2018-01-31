# Currecy

Validates if input is a currecy.

Valid values:

```js
validator.currecy().validate('-$10,123.45');
validator.currecy().validate('$10,123.45');
validator.currecy().validate('$10123.45');
validator.currecy().validate('$0.10');
```

Invalid values:

```js
validator.currecy().validate('1.234');
validator.currecy().validate('$1.1');
validator.currecy().validate('$ 32.50');
validator.currecy().validate('500$');
```
