# Age

Validates ranges of years.

Valid values:

```js
validator.age().validate('1969-07-20');
validator.age(18).validate('1969-07-20');
validator.age(undefined, 50).validate(moment().subtract(20, 'years'));
validator.age(undefined, undefined, 'DD/MM/YYYY').validate('20/07/1969');
validator.age(10, 50).validate(moment().subtract(20, 'years'));
```

Invalid values:

```js
validator.age().validate(moment());
validator.age(undefined, undefined, 'DD/MM/YYYY').validate('1969-07-20');
validator.age(10, 50).validate(moment().subtract(5, 'years'));
validator.age(undefined, 10).validate(moment().subtract(20, 'years'));
validator.age(10).validate(moment().subtract(5, 'years'));
```
