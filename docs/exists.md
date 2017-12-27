# Exists

Validates files or directories.

Valid values:

```js
validator.exists().validate(__dirname);
validator.exists().validate(__filename);
```

Invalid values:

```js
validator.exists().validate('file-not-exists');
validator.exists().validate('dir-not-exists');
validator.exists().validate([]);
validator.exists().validate({});
```
