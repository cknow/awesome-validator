# Callable

Validates if the input is a callable.

Valid values:

```js
const obj: any = {
    foo(): string {
        return 'foo';
    }
};

validator.callable().validate((): string => 'foo');
validator.callable().validate('eval');
validator.callable().validate('Array.isArray');
validator.callable().validate([obj, 'foo']);
```

Invalid values:

```js
validator.callable().validate('');
validator.callable().validate('foo');
validator.callable().validate(null);
validator.callable().validate(undefined);
```
