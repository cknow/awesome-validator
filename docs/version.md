# Version

Validates if the given input is version using [Semantic Versioning](http://semver.org/).

Valid values:

```js
validator.version().validate('1.0.0');
validator.version().validate('1.0.0-alpha');
validator.version().validate('1.0.0-alpha.1');
validator.version().validate('1.0.0-0.3.7');
validator.version().validate('1.0.0-x.7.z.92');
validator.version().validate('1.3.7+build.2.b8f12d7');
validator.version().validate('1.3.7-rc.1');
```

Invalid values:

```js
validator.version().validate('');
validator.version().validate('1.3.7--');
validator.version().validate('1.3.7++'))];
validator.version().validate('foo'))];
validator.version().validate('1.2.3.4');
validator.version().validate('1.2.3.4-beta');
validator.version().validate('beta');
```
