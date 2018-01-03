# Base64

Validate if a string is Base64-encoded.

Valid values:

```js
validator.base64().validate('YW55IGNhcm5hbCBwbGVhc3VyZS4=');
validator.base64().validate('YW55IGNhcm5hbCBwbGVhc3VyZQ==');
validator.base64().validate('YW55IGNhcm5hbCBwbGVhc3Vy');
validator.base64().validate('YW55IGNhcm5hbCBwbGVhc3U=');
validator.base64().validate('YW55IGNhcm5hbCBwbGVhcw==');
```

Invalid values:

```js
validator.base64().validate(null);
validator.base64().validate(undefined);
validator.base64().validate('');
validator.base64().validate('hello!');
validator.base64().validate('=c3VyZS4');
validator.base64().validate('YW55IGNhcm5hbCBwbGVhc3VyZ===');
```
