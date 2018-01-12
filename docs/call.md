# Call

This is a very low level validator. It calls a function, method or closure for the input and then validates it.

Valid values:

```js
validator.call((): string[] => [], validator.arrayVal()).validate('foo');
validator.call((inpuy: any): any => input, validator.numberVal()).validate(10);
```

Invalid values:

```js
validator.call((): string => 'foo', validator.arrayVal()).validate('foo');
validator.call((input: any): any => input, validator.numberVal()).validate('foo');
```
