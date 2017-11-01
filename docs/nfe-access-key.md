# Nfe Access Key

Validates if the given input is a nfe access key.

Valid values:

```js
validator.nfeAccessKey().validate('52060433009911002506550120000007800267301615');
```

Invalid values:

```js
validator.nfeAccessKey().validate('31841136830118868211870485416765268625116906');
validator.nfeAccessKey().validate('21470801245862435081451225624565260861852679');
validator.nfeAccessKey().validate('45644318091447671194616059650873352394885852');
validator.nfeAccessKey().validate('17214281716057582143671174314277906696193888');
validator.nfeAccessKey().validate('56017280182977836779696364362142515138726654');
validator.nfeAccessKey().validate('90157126614010548506235171976891004177042525');
validator.nfeAccessKey().validate('78457064241662300187501877048374851128754067');
validator.nfeAccessKey().validate('39950148079977322431982386613620895568235903');
validator.nfeAccessKey().validate('90820939577654114875253907311677136672761216');
validator.nfeAccessKey().validate('11145573386990252067204852181837301');
validator.nfeAccessKey().validate('6209433147444876');
validator.nfeAccessKey().validate('00745996227609395385255721262102');
validator.nfeAccessKey().validate('58215798856653');
validator.nfeAccessKey().validate('24149625439084262707824706699374326');
validator.nfeAccessKey().validate('163907274335');
validator.nfeAccessKey().validate('67229454773008929675906894698');
validator.nfeAccessKey().validate('5858836670181917762140106857095788313119136');
validator.nfeAccessKey().validate('6098412281885524361833754087461339281130');
validator.nfeAccessKey().validate('9025299113310221');
validator.nfeAccessKey().validate(null);
validator.nfeAccessKey().validate(undefined);
validator.nfeAccessKey().validate([]);
validator.nfeAccessKey().validate({});
validator.nfeAccessKey().validate(new Array('foo');
validator.nfeAccessKey().validate(new Object({foo: 'bar'});
validator.nfeAccessKey().validate(true);
validator.nfeAccessKey().validate(false);
validator.nfeAccessKey().validate(1);
validator.nfeAccessKey().validate('');
validator.nfeAccessKey().validate('foo');
```
