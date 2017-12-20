# Mimetype

Validates if the file mimetype matches the expected one.

Valid values:

```js
validator.mimetype('application/javascript').validate('js');
validator.mimetype('application/json').validate('json');
validator.mimetype('text/plain').validate('txt');
validator.mimetype(['application/json', 'text/plain']).validate('json');
```

Invalid values:

```js
validator.mimetype('false').validate('foobar');
validator.mimetype('foo').validate('bar');
validator.mimetype('txt').validate('foo/txt');
validator.mimetype(['application/json', 'text/plain']).validate('foobar');
```
