# Isbn10

Validates if the input is [ISBN-10](https://pt.wikipedia.org/wiki/International_Standard_Book_Number#ISBN-10).

Valid values:

```js
validator.isbn10().validate('3836221195');
validator.isbn10().validate('3-8362-2119-5');
validator.isbn10().validate('3 8362 2119 5');
validator.isbn10().validate('1617290858');
```

Invalid values:

```js
validator.isbn10().validate('3423214121');
validator.isbn10().validate('3-423-21412-1');
validator.isbn10().validate('3 423 21412 ');
validator.isbn10().validate('978-3836221191');
```
