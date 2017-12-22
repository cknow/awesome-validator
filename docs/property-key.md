# Property Key

Validates if the given input is a property key.

Valid values:

```js
validator.propertyKey().validate('foo');
validator.propertyKey().validate(10);
validator.propertyKey().validate(String('foo'));
validator.propertyKey().validate(Number(5));
validator.propertyKey().validate(Symbol('foo'));
```

Invalid values:

```js
validator.propertyKey().validate(true);
validator.propertyKey().validate(false);
validator.propertyKey().validate(null);
validator.propertyKey().validate(undefined);
```
