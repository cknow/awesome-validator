# Graph

Validates all characters that are graphically represented.

Valid values:

```js
validator.graph().validate('LKA#@%.54');
validator.graph().validate('foobar');
validator.graph().validate('16-50');
validator.graph().validate('123');
validator.graph().validate('#$%&*_');
```

Invalid values:

```js
validator.graph().validate('');
validator.graph().validate(' ');
validator.graph().validate('foo\nbar');
validator.graph().validate('foo\tbar');
validator.graph().validate('foo bar');
validator.graph().validate('( )_{}');
validator.graph().validate(null);
validator.graph().validate(undefined);
```
