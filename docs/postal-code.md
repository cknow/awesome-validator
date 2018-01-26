# PostalCode

Validates if the given input is a postal code.

Valid values:

```js
validator.postalCode('BR').validate('02179-000');
validator.postalCode('GB').validate('GIR 0AA');
validator.postalCode('US').validate('02179');
validator.postalCode('PL').validate('99-300');
```

Invalid values:

```js
validator.postalCode('BR').validate('99-300');
validator.postalCode('GB').validate('02179');
validator.postalCode('US').validate('PR1 9LY');
validator.postalCode('PL').validate('02179-000');
```

The current supported services are:

- AD
- AM
- AR
- AT
- AU
- AX
- AZ
- BA
- BB
- BD
- BE
- BG
- BH
- BM
- BN
- BR
- BY
- CA
- CH
- CL
- CN
- CR
- CS
- CU
- CV
- CX
- CY
- CZ
- DE
- DK
- DO
- DZ
- EC
- EE
- EG
- ES
- ET
- FI
- FM
- FO
- FR
- GB
- GE
- GF
- GG
- GL
- GP
- GR
- GT
- GU
- GW
- HN
- HR
- HT
- HU
- ID
- IL
- IM
- IN
- IQ
- IR
- IS
- IT
- JE
- JO
- JP
- KE
- KG
- KH
- KP
- KR
- KW
- KZ
- LA
- LB
- LI
- LK
- LR
- LS
- LT
- LU
- LV
- MA
- MC
- MD
- ME
- MG
- MK
- MM
- MN
- MQ
- MT
- MV
- MX
- MY
- MZ
- NC
- NE
- NF
- NG
- NI
- NL
- NO
- NP
- NZ
- OM
- PF
- PG
- PH
- PK
- PL
- PM
- PR
- PT
- PW
- PY
- RE
- RO
- RS
- RU
- SA
- SD
- SE
- SG
- SH
- SI
- SK
- SM
- SN
- SO
- SV
- SZ
- TC
- TH
- TJ
- TM
- TN
- TR
- TW
- UA
- US
- UY
- UZ
- VA
- VE
- VI
- VN
- WF
- YT
- ZA
- ZM
