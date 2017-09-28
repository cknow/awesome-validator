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
validator.booleanType().validate(null);
validator.booleanType().validate(undefined);
validator.booleanType().validate('foo');
validator.booleanType().validate([]);
validator.booleanType().validate({});
```
