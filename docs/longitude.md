# Longitude

Validates if the input is longitude.

Valid values:

```js
validator.longitude().validate('85.605469');
validator.longitude().validate('+12.3456789');
validator.longitude().validate('-0.175781');
validator.longitude().validate('-37.529297');
```

Invalid values:

```js
validator.longitude().validate('-196');
validator.longitude().validate('-196.821728');
validator.longitude().validate('-223');
validator.longitude().validate('223.369532');
```
