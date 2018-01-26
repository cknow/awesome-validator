# CountryCode

Validates an ISO country code.

Valid values:

```js
validator.countryCode().validate('BR');
validator.countryCode('alpha-2').validate('BR');
validator.countryCode('alpha-3').validate('BRA');
validator.countryCode('numeric').validate('076');
validator.countryCode('name').validate('Brazil');
```

Invalid values:

```js
validator.countryCode().validate('foo');
validator.countryCode('alpha-2').validate('076');
validator.countryCode('alpha-3').validate('BR');
validator.countryCode('numeric').validate('BRA');
validator.countryCode('name').validate('foobar');
```

You can choose between:

- alpha-2
- alpha-3
- numeric
- name
