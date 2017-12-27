# Extension

Validates if the file extension matches the expected one.

Valid values:

```js
validator.extension('png').validate('image.png');
validator.extension('png').validate('image.PNG');
validator.extension('foo').validate('foo');
validator.extension(['png', 'jpg', 'gif']).validate('image.jpg');
```

Invalid values:

```js
validator.extension(null).validate(undefined);
validator.extension(null).validate(null);
validator.extension(null).validate('foo');
validator.extension('xls').validate('file.xlsx');
validator.extension(['png', 'jpg', 'gif']).validate('image.jpeg');
```
