# Boolean Val

Validates whether the value of input is boolean.

Valid values:

```js
validator.booleanVal().validate(true);
validator.booleanVal().validate('true');
validator.booleanVal().validate('yes');
validator.booleanVal().validate('on');
validator.booleanVal().validate(1);
validator.booleanVal().validate(false);
validator.booleanVal().validate('false');
validator.booleanVal().validate('no');
validator.booleanVal().validate('off');
validator.booleanVal().validate(0);
```

Invalid values:

```js
validator.booleanVal().validate(null);
validator.booleanVal().validate(undefined);
validator.booleanVal().validate('foo');
validator.booleanVal().validate([]);
validator.booleanVal().validate({});
```
