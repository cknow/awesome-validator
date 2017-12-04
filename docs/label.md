# Label

Validates if the given input is label.

Valid values:

```js
validator.label().validate('_');
validator.label().validate('foo');
validator.label().validate('f00');
validator.label().validate('_5a25378bed85f');
validator.label().validate('a5a25378bed85f');
validator.label().validate('_5A25378BED85F');
validator.label().validate('A5A25378BED85F');
```

Invalid values:

```js
validator.label().validate(null);
validator.label().validate('%');
validator.label().validate('*');
validator.label().validate('-');
validator.label().validate('f-o-o-');
validator.label().validate('\n');
validator.label().validate('\r');
validator.label().validate('\t');
validator.label().validate(' ');
validator.label().validate('f o o');
validator.label().validate('0ne');
validator.label().validate('0_ne');
validator.label().validate('35a2537e6ea1d6');
validator.label().validate('1544832632');
```
