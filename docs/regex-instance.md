# Regex Instance

Validates if the given input is regex instance.

Valid values:

```js
validator.regexInstance().validate(/^[a-z]/);
validator.regexInstance().validate(RegExp(/^[a-z]/));
validator.regexInstance().validate(new RegExp(/^[a-z]/));
```

Invalid values:

```js
validator.regexInstance().validate(undefined);
validator.regexInstance().validate(null);
validator.regexInstance().validate(true);
validator.regexInstance().validate(false);
validator.regexInstance().validate('foo');
validator.regexInstance().validate(0);
validator.regexInstance().validate(1);
validator.regexInstance().validate([]);
validator.regexInstance().validate({});
validator.regexInstance().validate(new Array());
validator.regexInstance().validate(new Object());
validator.regexInstance().validate(Object.create(null));
```
