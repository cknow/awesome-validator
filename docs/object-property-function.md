# Object Property Function

Validates if the input object has the property function.

Valid values:

```js
validator.objectPropertyFunction('foo').validate({foo: (): string => 'foobar'});
validator.objectPropertyFunction('foo').validate({foo: (): number => 0});
validator.objectPropertyFunction('foo').validate({foo: (): boolean => true});
```

Invalid values:

```js
validator.objectPropertyFunction('foo').validate({});
validator.objectPropertyFunction('foo').validate({bar: 'foo'});
validator.objectPropertyFunction('foo').validate({foo: 'bar'});
```
