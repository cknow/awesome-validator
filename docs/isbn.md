# Isbn

Validates if the input is [ISBN](https://pt.wikipedia.org/wiki/International_Standard_Book_Number).

Valid values:

```js
validator.isbn().validate('9783836221191');
validator.isbn().validate('9783401013190');
validator.isbn().validate('3836221195');
validator.isbn().validate('1617290858');
```

Invalid values:

```js
validator.isbn().validate('9783836221190');
validator.isbn().validate('3423214121');
validator.isbn().validate('123456789a');
validator.isbn().validate('foo');
```
