# Regex

Evaluates a regex on the input and validates if matches.

Valid values:

```js
validator.regex(/[a-z]/).validate('a');
validator.regex(/[0-9]/).validate(0);
```

Invalid values:

```js
validator.regex(/[a-z]/).validate(0);
validator.regex(/[0-9]/).validate('a');
```

Throw error if the regex is invalid:

```js
validator.regex({}).validate('foo'); // Error('Invalid RegExp.')
```
