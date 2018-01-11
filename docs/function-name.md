# Function Name

Validates if the given input is function name.

Valid values:

```js
validator.functionName().validate('foo');
validator.functionName().validate('fooBar');
validator.functionName().validate('foo_bar');
```

Invalid values:

```js
validator.functionName().validate('foo bar');
validator.functionName().validate('foo-bar');
validator.functionName().validate('0foo');
```
