# Type Of

Evaluates a regex on the type of input and validates if matches.

Valid values:

```js
validator.typeOf(/boolean/).validate(true);
validator.typeOf(/number/).validate(1);
validator.typeOf(/object/).validate({});
validator.typeOf(/string/).validate('foo');
```

Invalid values:

```js
validator.typeOf(/boolean/).validate('foo');
validator.typeOf(/number/).validate({});
validator.typeOf(/object/).validate(1);
validator.typeOf(/string/).validate(true);
```

Throw error if the regex is invalid:

```js
validator.typeOf({}).validate('foo'); // Error('Invalid RegExp.')
```
