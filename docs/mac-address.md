# Mac Address

Validates a Mac Address.

Valid values:

```js
validator.macAddress().validate('00:11:22:33:44:55');
validator.macAddress().validate('66-77-88-99-aa-bb');
validator.macAddress().validate('AF:0F:bd:12:44:ba');
validator.macAddress().validate('90-bc-d3-1a-dd-cc');
```

Invalid values:

```js
validator.macAddress().validate('');
validator.macAddress().validate('00-1122:33:44:55');
validator.macAddress().validate('66-77--99-jj-bb');
validator.macAddress().validate('HH:0F-bd:12:44:ba');
validator.macAddress().validate('90-bc-nk:1a-dd-cc');
```
