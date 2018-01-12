# Attribute

Validates an object attribute.

Valid values:

```js
validator.attribute('foo').validate({foo: 'bar'});
validator.attribute('foo', validator.stringType()).validate({foo: 'bar'});
validator.attribute(null, undefined, false).validate('foo');
```

Invalid values:

```js
validator.attribute('foo').validate({});
validator.attribute('foo', validator.intType()).validate({foo: 'bar'});
validator.attribute(null).validate({});
```
