# Symbol Val

Validates whether the value of input is symbol.

Valid values:

```js
validator.symbolVal().validate(0);
validator.symbolVal().validate(1);
validator.symbolVal().validate(Number(1));
validator.symbolVal().validate(Number());
validator.symbolVal().validate('');
validator.symbolVal().validate('foo');
validator.symbolVal().validate(String());
validator.symbolVal().validate(String('foo'));
validator.symbolVal().validate(Symbol());
validator.symbolVal().validate(undefined);
```

Invalid values:

```js
validator.symbolVal().validate(null);
validator.symbolVal().validate(false);
validator.symbolVal().validate(true);
validator.symbolVal().validate([]);
validator.symbolVal().validate({});
```
