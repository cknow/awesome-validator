# Ip

Validates IP Addresses.

Valid values:

```js
validator.ip().validate('46.51.197.88');
validator.ip().validate('173.194.34.134');
validator.ip().validate('1:2:3:4:5:6:7:8');
validator.ip().validate('1:2:3:4:5:6::8');
```

Invalid values:

```js
validator.ip().validate('256.256.256.256');
validator.ip().validate('256.100.100.100.100');
validator.ip().validate('1::5:260.2.3.4');
validator.ip().validate('1::5:256.2.3.4');
```
