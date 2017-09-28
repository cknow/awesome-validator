# Instance Of

Evaluates a instance on the input and validates if matches.

Valid values:

```js
validator.instanceOf(Array).validate([]);
validator.instanceOf(Object).validate({});
validator.instanceOf(RegExp).validate(/foo/);
```

Invalid values:

```js
validator.instanceOf(Array).validate(/foo/);
validator.instanceOf(Object).validate(null);
validator.instanceOf(RegExp).validate([]]);
```

Throw error if the instance is invalid:

```js
validator.instanceOf().validate('foo'); // Error(''Invalid instance name.')
```
