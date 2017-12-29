# Email

Validates an email address.

Valid values:

```js
validator.email().validate('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@letters-in-local.org');
validator.email().validate('single-character-in-sld@x.org');
validator.email().validate('local@dash-in-sld.com');
validator.email().validate('country-code-tld@sld.uk');
validator.email().validate('digit-only-domain@123.com');
```

Invalid values:

```js
validator.email().validate('punycode-numbers-in-tld@sld.xn--3e0b707e');
validator.email().validate('bracketed-IP-instead-of-domain@[127.0.0.1]');
validator.email().validate('@missing-local.org');
validator.email().validate('! #$%`|@invalid-characters-in-local.org');
validator.email().validate('(),:;`|@more-invalid-characters-in-local.org');
validator.email().validate('<>@[]\\`|@even-more-invalid-characters-in-local.org');
validator.email().validate('.local-starts-with-dot@sld.com`0');
```
