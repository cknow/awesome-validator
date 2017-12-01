# Digit

Validates if the given input is digit.

Valid values:

```js
validator.digit().validate('\n\t');
validator.digit().validate(' ');
validator.digit().validate(165);
validator.digit().validate(1650);
validator.digit().validate('01650');
validator.digit().validate('165');
validator.digit().validate('1650');
validator.digit().validate('16 50');
validator.digit().validate('\n5\t');
```

Invalid values:

```js
validator.digit().validate('');
validator.digit().validate(null);
validator.digit().validate('16-50');
validator.digit().validate('a');
validator.digit().validate('Foo');
validator.digit().validate('12.1');
validator.digit().validate('-12');
validator.digit().validate(-50);
validator.digit().validate('basic');
```
