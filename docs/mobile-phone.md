# MobilePhone

Validates if the given input is a mobile phone.

Valid values:

```js
validator.mobilePhone('pt-BR').validate('55-17-3332-2155');
validator.mobilePhone('en-GB').validate('447789345856');
validator.mobilePhone('en-US').validate('19876543210');
validator.mobilePhone('pl-PL').validate('+48 56 6572724');
```

Invalid values:

```js
validator.mobilePhone('pt-BR').validate('+55012962308');
validator.mobilePhone('en-GB').validate('077389f8688');
validator.mobilePhone('en-US').validate('1437439210');
validator.mobilePhone('pl-PL').validate('3454535');
```

The current supported services are:

- ar-AE
- ar-DZ
- ar-EG
- ar-JO
- ar-SA
- ar-SY
- cs-CZ
- da-DK
- de-DE
- el-GR
- en-AU
- en-CA
- en-GB
- en-HK
- en-IN
- en-KE
- en-NG
- en-NZ
- en-PK
- en-RW
- en-SG
- en-TZ
- en-UG
- en-US
- en-ZA
- en-ZM
- es-ES
- et-EE
- fa-IR
- fi-FI
- fo-FO
- fr-BE
- fr-FR
- he-IL
- hu-HU
- id-ID
- it-IT
- ja-JP
- kl-GL
- ko-KR
- lt-LT
- ms-MY
- nb-NO
- nl-BE
- nn-NO
- pl-PL
- pt-BR
- pt-PT
- ro-RO
- ru-RU
- sk-SK
- sr-RS
- tr-TR
- uk-UA
- vi-VN
- zh-CN
- zh-HK
- zh-TW
