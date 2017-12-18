# Size

Validates sizes.

Valid values:

```js
validator.size('5mb', '20mb').validate('10mb');
validator.size().validate('file path');
validator.size('5mb').validate('file path with greather 5mb');
validator.size('5mb').validate(fs.statSync('file path with greather 5mb'));
```

Invalid values:

```js
validator.size('5mb', '20mb').validate('30mb');
validator.size('5mb').validate('file path with length less 5mb');
validator.size('5mb').validate(fs.statSync('file path with length less 5mb'));
```

Sizes are not case-sensitive and the accepted values are:

- B
- KB
- MB
- GB
- TB
- PB
- EB
- ZB
- YB
