# Coordinate

Validates if the input is coordinate.

Valid values:

```js
validator.coordinate().validate('(-17.738223,85.605469)');
validator.coordinate().validate('(-60.978437, -0.175781)');
validator.coordinate().validate('0.955766 ,-19.863281');
validator.coordinate().validate('-55.034319 , 113.027344');
```

Invalid values:

```js
validator.coordinate().validate('(-126.400010,-158.400010)');
validator.coordinate().validate('(-137.5942, -148.5942)');
validator.coordinate().validate('-90. ,-180.');
validator.coordinate().validate('-112 , -160');
```
