# Symbol Type

Validates whether the type of an input is symbol.

Valid values:

```js
validator.symbolType().validate(Symbol());
validator.symbolType().validate(Symbol('foo'));
validator.symbolType().validate(Symbol(10));
```

Invalid values:

```js
validator.symbolType().validate(null);
validator.symbolType().validate('foo');
validator.symbolType().validate(10);
```
