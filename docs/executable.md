# Executable

Validates if a file is an executable.

Valid values:

```js
validator.executable().validate('script.sh');
validator.executable().validate('script.exe');
```

Invalid values:

```js
validator.executable().validate(undefined);
validator.executable().validate(null);
validator.executable().validate('dir');
validator.executable().validate('image.png');
```
