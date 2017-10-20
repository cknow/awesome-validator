# Function Type

Validates whether the type of an input is function.

Valid values:

```js
const foo: Function = (): string => 'foo';
const obj: any = {foo};

validator.functionType().validate(() => 'foo');
validator.functionType().validate(foo);
validator.functionType().validate(obj.foo);
```

Invalid values:

```js
validator.functionType().validate(undefined);
validator.functionType().validate(null);
validator.functionType().validate(true);
validator.functionType().validate(false);
validator.functionType().validate('foo');
validator.functionType().validate(-0);
validator.functionType().validate(0);
validator.functionType().validate(0.0);
validator.functionType().validate(-1);
validator.functionType().validate(1);
validator.functionType().validate(1.0);
validator.functionType().validate([]);
validator.functionType().validate({});
validator.functionType().validate(new Array());
validator.functionType().validate(new Object());
validator.functionType().validate(Object.create(null));
```
