# Ascii

Validates if the given input is ascii.

Valid values:

```js
validator.ascii().validate('foobar');
validator.ascii().validate('0987654321');
validator.ascii().validate('test@example.com');
validator.ascii().validate('1234abcDEF');
```

Invalid values:

```js
validator.ascii().validate('ｆｏｏbar');
validator.ascii().validate('ｘｙｚ０９８');
validator.ascii().validate('１２３456');
validator.ascii().validate('ｶﾀｶﾅ');
```
