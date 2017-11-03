# No Whitespace

Validates if a string contains no whitespace.

Valid values:

```js
validator.noWhitespace().validate('');
validator.noWhitespace().validate(null);
validator.noWhitespace().validate(0);
validator.noWhitespace().validate('wpoiur');
validator.noWhitespace().validate('Foo');
```

Invalid values:

```js
validator.noWhitespace().validate(' ');
validator.noWhitespace().validate('w poiur');
validator.noWhitespace().validate('      ');
validator.noWhitespace().validate('Foo\nBar');
validator.noWhitespace().validate('Foo\tBar');
```
