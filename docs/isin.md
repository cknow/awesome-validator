# Isin

Validates if the input is [ISIN](https://pt.wikipedia.org/wiki/International_Securities_Identification_Number).

Valid values:

```js
validator.isin().validate('AU0000XVGZA3');
validator.isin().validate('DE000BAY0017');
validator.isin().validate('BE0003796134');
validator.isin().validate('SG1G55870362');
```

Invalid values:

```js
validator.isin().validate('DE000BAY0018');
validator.isin().validate('PLLWBGD00019');
validator.isin().validate('foo');
validator.isin().validate('5398228707871528');
```
