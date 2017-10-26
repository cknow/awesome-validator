# Prime Number

Validates if the given input is a prime number.

Valid values:

```js
validator.primeNumber().validate(3);
validator.primeNumber().validate(5);
validator.primeNumber().validate(7);
validator.primeNumber().validate('3');
validator.primeNumber().validate('5');
validator.primeNumber().validate('+7');
```

Invalid values:

```js
validator.primeNumber().validate('');
validator.primeNumber().validate(null);
validator.primeNumber().validate(0);
validator.primeNumber().validate(10);
validator.primeNumber().validate(25);
validator.primeNumber().validate(36);
validator.primeNumber().validate(-1);
validator.primeNumber().validate('-1');
validator.primeNumber().validate('25');
validator.primeNumber().validate('0');
validator.primeNumber().validate('a');
validator.primeNumber().validate(' ');
validator.primeNumber().validate('Foo');
```
