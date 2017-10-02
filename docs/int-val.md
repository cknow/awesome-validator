# Int Val

Validates whether the value of input is integer.

Valid values:

```js
validator.intVal().validate(165);
validator.intVal().validate(1);
validator.intVal().validate(0);
validator.intVal().validate(0.0);
validator.intVal().validate('1');
validator.intVal().validate('19347e12');
validator.intVal().validate(165.0);
validator.intVal().validate(1e12);
```

Invalid values:

```js
validator.intVal().validate(1.1);
validator.intVal().validate(-1.1);
validator.intVal().validate('0.2');
validator.intVal().validate('.2');
validator.intVal().validate('-.2');
validator.intVal().validate('165.7');
validator.intVal().validate('');
validator.intVal().validate(null);
validator.intVal().validate('a');
validator.intVal().validate(' ');
validator.intVal().validate('Foo');
```
