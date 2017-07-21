# Even

Validates if the given input is even.

Valid values:

```js
validator.even().validate(null);
validator.even().validate('');
validator.even().validate('2');
validator.even().validate(-2);
validator.even().validate(-0);
validator.even().validate(0);
validator.even().validate(2);
```

Invalid values:

```js
validator.even().validate(undefined);
validator.even().validate('3');
validator.even().validate(-3);
validator.even().validate(-1);
validator.even().validate(1);
validator.even().validate(3);
```
