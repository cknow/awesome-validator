# Space

Accepts only whitespace.

Valid values:

```js
validator.space().validate('\n');
validator.space().validate(' ');
validator.space().validate('   ');
validator.space().validate('\t');
```

Invalid values:

```js
validator.space().validate('');
validator.space().validate('Foo');
validator.space().validate(12);
validator.space().validate(-12);
validator.space().validate(null);
validator.space().validate(undefined);
validator.space().validate(true);
validator.space().validate(false);
```
