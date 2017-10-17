# True Val

Validates if a value is considered as `true`.

Valid values:

```js
validator.trueVal().validate(true);
validator.trueVal().validate('true');
validator.trueVal().validate('yes');
validator.trueVal().validate('on');
validator.trueVal().validate(1);
```

Invalid values:

```js
validator.trueVal().validate(false);
validator.trueVal().validate('false');
validator.trueVal().validate('no');
validator.trueVal().validate('off');
validator.trueVal().validate(0);
validator.trueVal().validate(null);
validator.trueVal().validate(undefined);
validator.trueVal().validate('foo');
validator.trueVal().validate([]);
validator.trueVal().validate({});
```
