# Factor

Validates if the input is a factor of the defined dividend.

Valid values:

```js
validator.factor(1).validate('1');
validator.factor(0).validate(5);
validator.factor(4).validate(2);
validator.factor(0).validate(1);
```

Invalid values:

```js
validator.factor(1).validate('.2');
validator.factor(1).validate(1.1);
validator.factor(4).validate(3);
validator.factor(1).validate(0);
```
