# Tld

Validates if the given input is a tld (top-level domain).

Valid values:

```js
validator.tld().validate('br');
validator.tld().validate('cafe');
validator.tld().validate('com');
validator.tld().validate('democrat');
validator.tld().validate('eu');
validator.tld().validate('gmbh');
validator.tld().validate('us');
```

Invalid values:

```js
validator.tld().validate('1');
validator.tld().validate(1.0);
validator.tld().validate('wrongtld');
validator.tld().validate(true);
```
