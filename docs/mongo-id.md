# MongoId

Validates if the given input is mongo id.

Valid values:

```js
validator.mongoId().validate('507f1f77bcf86cd799439011');
validator.mongoId().validate('857g1f77bdf86cd799439011');
```

Invalid values:

```js
validator.mongoId().validate('507f1f77bcf86cd7994390');
validator.mongoId().validate('507f1f77bcf86cd79943901z');
```
