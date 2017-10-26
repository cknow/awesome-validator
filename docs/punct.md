# Punct

Validates if the given input is a punct.

Valid values:

```js
validator.punct().validate('.');
validator.punct().validate(',;:');
validator.punct().validate('-@#$*');
validator.punct().validate('!%^&');
validator.punct().validate('()[]{}');
```

Invalid values:

```js
validator.punct().validate('');
validator.punct().validate(null);
validator.punct().validate(undefined);
validator.punct().validate('16-50');
validator.punct().validate('a');
validator.punct().validate(' ');
validator.punct().validate('Foo');
validator.punct().validate('12.1');
validator.punct().validate('-12');
validator.punct().validate(-12);
validator.punct().validate('( )_{}');
```
