# Function Instance

Validates if the given input is function instance.

Valid values:

```js
const foo: Function = (): string => 'foo';
const obj: any = {foo};

validator.functionInstance().validate(() => 'foo');
validator.functionInstance().validate(foo);
validator.functionInstance().validate(obj.foo);
```

Invalid values:

```js
validator.functionInstance().validate(undefined);
validator.functionInstance().validate(null);
validator.functionInstance().validate(true);
validator.functionInstance().validate(false);
validator.functionInstance().validate('foo');
validator.functionInstance().validate(-0);
validator.functionInstance().validate(0);
validator.functionInstance().validate(0.0);
validator.functionInstance().validate(-1);
validator.functionInstance().validate(1);
validator.functionInstance().validate(1.0);
validator.functionInstance().validate([]);
validator.functionInstance().validate({});
validator.functionInstance().validate(new Array());
validator.functionInstance().validate(new Object());
validator.functionInstance().validate(Object.create(null));
```
