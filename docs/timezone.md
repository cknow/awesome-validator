# Timezone

Validates if the given input is a timezone.

Valid values:

```js
validator.timezone().validate('Europe/Paris');
validator.timezone().validate('US/Central');
validator.timezone().validate('America/Sao_Paulo');
```

Invalid values:

```js
validator.timezone().validate('invalid/timezone');
validator.timezone().validate(null);
validator.timezone().validate(undefined);
```
