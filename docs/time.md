# Time

Validates if the input is a time value:

Valid values:

```js
validator.time('Full').validate('22:00');
validator.time('full').validate('22:00');
validator.time('Meridiem').validate('10:00 PM');
validator.time('meridiem').validate('10:00 PM');
validator.time().validate('22:00');
```

Invalid values:

```js
validator.time('Full').validate('10:00 AM');
validator.time('full').validate('10:00 AM');
validator.time('Meridiem').validate('22:00');
validator.time('meridiem').validate('22:00');
validator.time().validate('25:00');
```

The current supported services are:

- Full
- Meridiem
