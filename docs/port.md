# Port

Validates if the given input is a port.

Valid values:

```js
validator.port().validate('80');
validator.port().validate('3030');
validator.port().validate('8080');
```

Invalid values:

```js
validator.port().validate('-1');
validator.port().validate('65536');
validator.port().validate('808080');
```
