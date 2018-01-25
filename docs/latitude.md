# Latitude

Validates if the input is latitude.

Valid values:

```js
validator.latitude().validate('-17.73822');
validator.latitude().validate('-12.345678');
validator.latitude().validate('-60.978437');
validator.latitude().validate('77.719772');
```

Invalid values:

```js
validator.latitude().validate('020.000000');
validator.latitude().validate('90.1000000');
validator.latitude().validate('090.0000');
validator.latitude().validate('126');
```
