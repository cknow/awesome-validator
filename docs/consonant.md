# Consonant

Validates if the given input is consonant.

Valid values:

```js
validator.consonant().validate('b');
validator.consonant().validate('c');
validator.consonant().validate('d');
validator.consonant().validate('w');
validator.consonant().validate('y');
validator.consonant().validate('bcdfghklmnp');
validator.consonant().validate('bcdfghklm np');
validator.consonant().validate('qrst');
validator.consonant().validate('\nz\t');
```

Invalid values:

```js
validator.consonant().validate('');
validator.consonant().validate('a');
validator.consonant().validate('e');
validator.consonant().validate('i');
validator.consonant().validate('o');
validator.consonant().validate('u');
validator.consonant().validate('aeiou');
validator.consonant().validate('aei ou');
validator.consonant().validate('1a');
validator.consonant().validate('foo');
validator.consonant().validate('Foo');
```
