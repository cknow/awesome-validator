# Image

Validates if the file is a valid image.

Valid values:

```js
validator.image().validate('foo.png');
validator.image().validate('foo.jpg');
validator.image().validate('gif');
```

Invalid values:

```js
validator.image().validate('foo/png');
validator.image().validate('foo/jpg');
validator.image().validate('foobar');
```
