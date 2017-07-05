# Regex Type

Validates whether the type of an input is regex.

Valid values:

```js
validator.regexType().validate(/^[a-z]/);
validator.regexType().validate(RegExp(/^[a-z]/));
validator.regexType().validate(new RegExp(/^[a-z]/));
```

Invalid values:

```js
validator.regexType().validate('foo');
validator.regexType().validate(null);
validator.regexType().validate(undefined);
validator.regexType().validate(true);
validator.regexType().validate(false);
validator.regexType().validate(0);
validator.regexType().validate(1);
validator.regexType().validate([]);
validator.regexType().validate({});
```
