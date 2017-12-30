# Cntrl

Validates if the given input is a cntrl.

Valid values:

```js
validator.cntrl().validate('\n');
validator.cntrl().validate('\r');
validator.cntrl().validate('\t');
validator.cntrl().validate('\n\r\t');
```

Invalid values:

```js
validator.cntrl().validate('');
validator.cntrl().validate('16-50');
validator.cntrl().validate('a');
validator.cntrl().validate(' ');
validator.cntrl().validate('Foo');
validator.cntrl().validate('12.1');
validator.cntrl().validate('-12');
validator.cntrl().validate(-12);
validator.cntrl().validate(null);
validator.cntrl().validate(undefined);
```
