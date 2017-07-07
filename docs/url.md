# Url

Validates if the given input is url.

Valid values:

```js
validator.url().validate('http://example.com');
validator.url().validate('https://www.youtube.com/watch?v=6FOUqQt3Kg0');
validator.url().validate('ldap://[::1]');
validator.url().validate('mailto:john.doe@example.com');
validator.url().validate('news:new.example.com');
```

Invalid values:

```js
validator.url().validate('');
validator.url().validate('foo');
validator.url().validate('http:/example.com/');
validator.url().validate('foo,bar');
```
