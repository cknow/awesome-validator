# Float Val

Validates whether the value of input is float.

Valid values:

```js
validator.floatVal().validate(1.1);
validator.floatVal().validate(-1.1);
validator.floatVal().validate('0.2');
validator.floatVal().validate('.2');
validator.floatVal().validate('-.2');
validator.floatVal().validate('165.7');
validator.floatVal().validate(165.7);
```

Invalid values:

```js
validator.floatVal().validate('19347e12');
validator.floatVal().validate(1);
validator.floatVal().validate(1e12);
validator.floatVal().validate(1.0);
validator.floatVal().validate(0.0);
validator.floatVal().validate('1');
validator.floatVal().validate('1.0');
validator.floatVal().validate('0.0');
validator.floatVal().validate('');
validator.floatVal().validate(null);
validator.floatVal().validate('a');
validator.floatVal().validate(' ');
validator.floatVal().validate('Foo');
```
