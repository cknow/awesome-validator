# Uuid

Validates if the given input is a uuid.

Valid values:

```js
validator.uuid().validate('a71a18f4-3a13-11e7-a919-92ebcb67fe33');
validator.uuid().validate('afa0eb06-3a13-11e7-a919-92ebcb67fe33');
validator.uuid().validate('b46e09d4-3a13-11e7-a919-92ebcb67fe33');
validator.uuid().validate('541b0e81-7afe-4fc4-a5f7-c01e9150df00');
validator.uuid().validate('2481103e-2cd1-4c7a-b4c9-19defde3dd94');
validator.uuid().validate('74077441-ea55-478a-a6f2-7dcd92239645');
```

Invalid values:

```js
validator.uuid().validate('00000000-0000-0000-0000-000000000000');
validator.uuid().validate('Not a UUID');
validator.uuid().validate('g71a18f4-3a13-11e7-a919-92ebcb67fe33');
validator.uuid().validate('a71a18f4-3g13-11e7-a919-92ebcb67fe33');
validator.uuid().validate('a71a18f4-3a13-11g7-a919-92ebcb67fe33');
validator.uuid().validate('a71a18f4-3a13-11e7-g919-92ebcb67fe33');
validator.uuid().validate('a71a18f4-3a13-11e7-a919-92gbcb67fe33');
```
