# Charset

Validates if a string or file is in a specific charset.

Valid values:

```js
validator.charset('utf-8').validate('foo');
validator.charset(['iso-8859-1', 'utf-8']).validate('foo');
validator.charset('utf-8').validate('file-path-utf8');
```

Invalid values:

```js
validator.charset('foo').validate('foo');
validator.charset('iso-8859-1').validate('foo');
validator.charset('iso-8859-1').validate('file-path-utf8');
```
