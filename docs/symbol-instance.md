# Symbol Instance

Validates if the given input is symbol instance.

Valid values:

```js
validator.symbolInstance().validate(Symbol());
validator.symbolInstance().validate(Symbol('foo'));
validator.symbolInstance().validate(Symbol(10));
```

Invalid values:

```js
validator.symbolInstance().validate(null);
validator.symbolInstance().validate('foo');
validator.symbolInstance().validate(10);
```
