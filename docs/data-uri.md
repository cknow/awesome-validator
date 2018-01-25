# DataUri

Validates if the given input is data uri.

Valid values:

```js
validator.dataUri().validate('data:,A%20brief%20note');
validator.dataUri().validate('data:text/html;charset=US-ASCII,%3Ch1%3EHello!%3C%2Fh1%3E');
```

Invalid values:

```js
validator.dataUri().validate('data:HelloWorld');
validator.dataUri().validate('data:text/html;charset,%3Ch1%3EHello!%3C%2Fh1%3E');
```
