# Json

Validates whether the type of an input is json.

Valid values:

```js
validator.json().validate(JSON.stringify([]));
validator.json().validate(JSON.stringify({}));
validator.json().validate(JSON.stringify(['foo']));
validator.json().validate(JSON.stringify({foo: 'bar'}));
```

Invalid values:

```js
validator.json().validate(undefined);
validator.json().validate(null);
validator.json().validate(true);
validator.json().validate(false);
validator.json().validate('foo');
validator.json().validate(0);
validator.json().validate(1);
validator.json().validate([]);
validator.json().validate({});
validator.json().validate(new Array());
validator.json().validate(new Object());
validator.json().validate(Object.create(null));
```
