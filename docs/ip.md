# Ip

Validates IP Addresses.

Valid values:

```js
validator.ip('ipv4').validate('172.26.168.134');
validator.ip('ipv6').validate('fe80::217:f2ff:254.7.237.98');
validator.ip('ipv4', 'ipv6').validate('173.194.34.134');
validator.ip('ipv4', 'ipv6').validate('2001:db8::1428:57ab');
validator.ip().validate('173.194.34.134');
validator.ip().validate('2001:db8::1428:57ab');
```

Invalid values:

```js
validator.ip('ipv4').validate('.100.100.100.100');
validator.ip('ipv6').validate('02001:0000:1234:0000:0000:C1C0:ABCD:0876');
validator.ip('ipv4', 'ipv6').validate('foo');
validator.ip().validate('bar');
```

The current supported services are:

- ipv4
- ipv6
