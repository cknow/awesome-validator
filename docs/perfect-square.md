# Perfect Square

Validates if the given input is perfect square.

Valid values:

```js
validator.perfectSquare().validate(1);
validator.perfectSquare().validate(9);
validator.perfectSquare().validate(25);
validator.perfectSquare().validate('25');
validator.perfectSquare().validate(400);
validator.perfectSquare().validate('400');
validator.perfectSquare().validate('0');
validator.perfectSquare().validate(81);
validator.perfectSquare().validate(0);
validator.perfectSquare().validate(2500);
```

Invalid values:

```js
validator.perfectSquare().validate(250);
validator.perfectSquare().validate('');
validator.perfectSquare().validate(null);
validator.perfectSquare().validate(7);
validator.perfectSquare().validate(-1);
validator.perfectSquare().validate(6);
validator.perfectSquare().validate(2);
validator.perfectSquare().validate('-1');
validator.perfectSquare().validate('a');
validator.perfectSquare().validate(' ');
validator.perfectSquare().validate('Foo');
```
