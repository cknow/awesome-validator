# Vowel

Validates if the given input is vowel.

Valid values:

```js
validator.vowel().validate('a');
validator.vowel().validate('e');
validator.vowel().validate('i');
validator.vowel().validate('o');
validator.vowel().validate('u');
validator.vowel().validate('aeiou');
validator.vowel().validate('aei ou');
validator.vowel().validate('\na\t');
validator.vowel().validate('uoiea');
```

Invalid values:

```js
validator.vowel().validate('');
validator.vowel().validate('b');
validator.vowel().validate('c');
validator.vowel().validate('d');
validator.vowel().validate('w');
validator.vowel().validate('y');
validator.vowel().validate('bcdfghklmnp');
validator.vowel().validate('bcdfghklm np');
validator.vowel().validate('1a');
validator.vowel().validate('foo');
validator.vowel().validate('Foo');
```
