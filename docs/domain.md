# Domain

Validates domain names.

Valid values:

```js
validator.domain().validate('example.com');
validator.domain().validate('foo.example.com');
validator.domain().validate('bar.foo.example.com');
validator.domain().validate('exa-mple.co.uk');
```

Invalid values:

```js
validator.domain().validate('bar.q-ux');
validator.domain().validate('exa_mple.com');
validator.domain().validate('example');
validator.domain().validate('ex*mple.com');
```
