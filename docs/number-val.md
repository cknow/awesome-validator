# Number Val

Validates whether the value of input is number.

Valid values:

```js
validator.numberVal().validate(1.1);
validator.numberVal().validate(-1.1);
validator.numberVal().validate('0.2');
validator.numberVal().validate('.2');
validator.numberVal().validate('-.2');
validator.numberVal().validate('165.7');
validator.numberVal().validate(165.7);
validator.numberVal().validate(165);
validator.numberVal().validate(1);
validator.numberVal().validate(0);
validator.numberVal().validate(0.0);
validator.numberVal().validate('1');
validator.numberVal().validate('19347e12');
validator.numberVal().validate(165.0);
validator.numberVal().validate(1e12);
```

Invalid values:

```js
validator.numberVal().validate(undefined);
validator.numberVal().validate(null);
validator.numberVal().validate(true);
validator.numberVal().validate(false);
validator.numberVal().validate('');
validator.numberVal().validate(' ');
validator.numberVal().validate('foo');
validator.numberVal().validate([]);
validator.numberVal().validate({});
validator.numberVal().validate(new Array());
validator.numberVal().validate(new Object());
validator.numberVal().validate(Object.create(null));
```
