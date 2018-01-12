# Callback

This is a wildcard validator, it uses a function name, method or closure to validate something.

Valid values:

```js
validator.callback((): boolean => true).validate(null);
validator.callback((input: any): boolean => input === 'foo').validate('foo');
validator.callback('Array.isArray').validate([]);
```

Invalid values:

```js
validator.callback((): boolean => false).validate(null);
validator.callback((input: any): boolean => input === 'foo').validate('bar');
validator.callback('Array.isArray').validate({});
```
