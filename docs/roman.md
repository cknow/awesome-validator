# Roman

Validates if the given input is roman.

Valid values:

```js
validator.roman().validate('');
validator.roman().validate('III');
validator.roman().validate('IV');
validator.roman().validate('VI');
validator.roman().validate('XIX');
validator.roman().validate('XLII');
validator.roman().validate('LXII');
validator.roman().validate('CXLIX');
validator.roman().validate('CLIII');
validator.roman().validate('MCCXXXIV');
validator.roman().validate('MMXXIV');
validator.roman().validate('MCMLXXV');
validator.roman().validate('MMMMCMXCIX');
```

Invalid values:

```js
validator.roman().validate(' ');
validator.roman().validate('IIII');
validator.roman().validate('IVVVX');
validator.roman().validate('CCDC');
validator.roman().validate('MXM');
validator.roman().validate('XIIIIIIII');
validator.roman().validate('MIMIMI');
```
