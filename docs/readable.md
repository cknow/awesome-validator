# Readable

Validates if the given data is a file exists and is readable.

Valid values:

```js
validator.readable().validate(__filename);
```

Invalid values:

```js
validator.readable().validate(__dirname);
```
