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
validator.vowel().validate(nul);
validator.vowel().validate(undefined);
validator.vowel().validate('16');
validator.vowel().validate('foo');
validator.vowel().validate('Foo');
```
