# False Val

Validates whether the value of input is false.

Valid values:

```js
validator.falseVal().validate(false);
validator.falseVal().validate('false');
validator.falseVal().validate('no');
validator.falseVal().validate('off');
validator.falseVal().validate(0);
```

Invalid values:

```js
validator.falseVal().validate(true);
validator.falseVal().validate('true');
validator.falseVal().validate('yes');
validator.falseVal().validate('on');
validator.falseVal().validate(1);
validator.falseVal().validate(null);
validator.falseVal().validate(undefined);
validator.falseVal().validate('foo');
validator.falseVal().validate([]);
validator.falseVal().validate({});
```
