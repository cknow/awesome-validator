# HexRgbColor

Validates a hex RGB color.

Valid values:

```js
validator.hexRgbColor().validate('#000');
validator.hexRgbColor().validate('#00000F');
validator.hexRgbColor().validate('#123');
validator.hexRgbColor().validate('#123456');
validator.hexRgbColor().validate('#FFFFFF');
validator.hexRgbColor().validate('123123');
validator.hexRgbColor().validate('FFFFFF');
```

Invalid values:

```js
validator.hexRgbColor().validate('');
validator.hexRgbColor().validate(null);
validator.hexRgbColor().validate(undefined);
validator.hexRgbColor().validate('#0');
validator.hexRgbColor().validate('#0000G0');
validator.hexRgbColor().validate('#0FG');
validator.hexRgbColor().validate('#1234');
validator.hexRgbColor().validate('#AAAAAA1');
validator.hexRgbColor().validate('#S');
validator.hexRgbColor().validate('1234');
validator.hexRgbColor().validate('foo');
validator.hexRgbColor().validate(0x39F);
validator.hexRgbColor().validate(5);
validator.hexRgbColor().validate(1);
validator.hexRgbColor().validate(443);
validator.hexRgbColor().validate([]);
```
