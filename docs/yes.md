# Yes

Validates if value is considered as "Yes".

Valid values:

```js
validator.yes().validate('Y');
validator.yes().validate('Yea');
validator.yes().validate('Yeah');
validator.yes().validate('Yep');
validator.yes().validate('Yes');
validator.yes().validate('y');
validator.yes().validate('yea');
validator.yes().validate('yeah');
validator.yes().validate('yep');
validator.yes().validate('yes');
```

Invalid values:

```js
validator.yes().validate('Si');
validator.yes().validate('Sim');
validator.yes().validate('Yoo');
validator.yes().validate('Young');
validator.yes().validate('Yy');
```
