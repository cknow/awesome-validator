# No

Validates whether the value of input is no.

Valid values:

```js
validator.no().validate('N');
validator.no().validate('Nay');
validator.no().validate('Nix');
validator.no().validate('No');
validator.no().validate('Nope');
validator.no().validate('Not');
validator.no().validate('n');
validator.no().validate('nay');
validator.no().validate('nix');
validator.no().validate('no');
validator.no().validate('nope');
validator.no().validate('not');
```

Invalid values:

```js
validator.no().validate('Donnot');
validator.no().validate('Never');
validator.no().validate('Niet');
validator.no().validate('Noooooooo');
validator.no().validate('Não');
```
