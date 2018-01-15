# Domain

Validates domain names.

Valid values:

```js
validator.domain().validate('example.com');
validator.domain().validate('foo.example.com');
validator.domain().validate('bar.foo.example.com');
validator.domain().validate('exa-mple.co.uk');
validator.domain(false).validate('a.b');
validator.domain(false).validate('foo.bar.baz');
validator.domain(false).validate('foo-bar.ba-z.qux');
validator.domain(false).validate('hello.world');
```

Invalid values:

```js
validator.domain().validate('bar.q-ux');
validator.domain().validate('exa_mple.com');
validator.domain().validate('example');
validator.domain().validate('ex*mple.com');
validator.domain().validate('@#$@#$%fd');
```
