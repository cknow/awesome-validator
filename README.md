# Awesome Validator
> Awesome validator for node or browser.

[![NPM Version](https://img.shields.io/npm/v/awesome-validator.svg)](https://www.npmjs.com/package/awesome-validator)
[![Downloads](https://img.shields.io/npm/dt/awesome-validator.svg)](https://www.npmjs.com/package/awesome-validator)
[![MIT License](https://img.shields.io/npm/l/awesome-validator.svg)](LICENSE)

[![Build Status](https://travis-ci.org/cknow/awesome-validator.svg?branch=master)](https://travis-ci.org/cknow/awesome-validator)
[![Build status](https://ci.appveyor.com/api/projects/status/64mu0a0cfmtvgicd/branch/master?svg=true)](https://ci.appveyor.com/project/cknow/awesome-validator/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/cknow/awesome-validator/badge.svg?branch=master)](https://coveralls.io/github/cknow/awesome-validator?branch=master)

[![Code Climate](https://codeclimate.com/github/cknow/awesome-validator/badges/gpa.svg)](https://codeclimate.com/github/cknow/awesome-validator)
[![Test Coverage](https://codeclimate.com/github/cknow/awesome-validator/badges/coverage.svg)](https://codeclimate.com/github/cknow/awesome-validator/coverage)
[![Issue Count](https://codeclimate.com/github/cknow/awesome-validator/badges/issue_count.svg)](https://codeclimate.com/github/cknow/awesome-validator)

[![Dependencies Status](https://david-dm.org/cknow/awesome-validator/status.svg)](https://david-dm.org/cknow/awesome-validator)
[![devDependencies Status](https://david-dm.org/cknow/awesome-validator/dev-status.svg)](https://david-dm.org/cknow/awesome-validator?type=dev)
[![peerDependencies Status](https://david-dm.org/cknow/awesome-validator/peer-status.svg)](https://david-dm.org/cknow/awesome-validator?type=peer)

[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/cknow/awesome-validator.svg)](http://isitmaintained.com/project/cknow/awesome-validator)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/cknow/awesome-validator.svg)](http://isitmaintained.com/project/cknow/awesome-validator)
[![Gitter](https://badges.gitter.im/cknow/awesome-validator.svg)](https://gitter.im/cknow/awesome-validator?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[![NPM](https://nodei.co/npm/awesome-validator.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/awesome-validator)

## Server-side

Install the library with ```npm install --save awesome-validator```

```js
var validator = require('awesome-validator').validator;

validator.notEmpty().stringType().validate('foo'); //=> true
```

### ES6

```js
import validator from 'awesome-validator';

validator.notEmpty().stringType().validate('foo'); //=> true
```

Or, import only a subset of the library:

```js
import StringType from 'awesome-validator/lib/rules/string-type';

new StringType().validate('foo'); //=> true
```

### Typescript

```ts
import { validator } from 'awesome-validator';

validator.notEmpty().stringType().validate('foo'); //=> true
```

Or, import only a subset of the library:

```ts
import { StringType } from 'awesome-validator/lib/rules/string-type';

new StringType().validate('foo'); //=> true
```

##  Client-side usage

The library can be loaded either as a standalone script, or through an [AMD](http://requirejs.org/docs/whyamd.html)-compatible loader

```html
<script type="text/javascript" src="awesome-validator.min.js"></script>
<script type="text/javascript">
    validator.notEmpty().stringType().validate('foo'); //=> true
</script>
```

## Validators

- [Age](docs/age.md)
- [AllOf](docs/all-of.md)
- [Alnum](docs/alnum.md)
- [Alpha](docs/alpha.md)
- [AlwaysInvalid](docs/always-invalid.md)
- [AlwaysValid](docs/always-valid.md)
- [AnyOf](docs/any-of.md)
- [ArrayInstance](docs/array-instance.md)
- [ArrayType](docs/array-type.md)
- [ArrayVal](docs/array-val.md)
- [Ascii](docs/ascii.md)
- [Attribute](docs/attribute.md)
- [Base](docs/base.md)
- [Base64](docs/base64.md)
- [Between](docs/between.md)
- [BooleanInstance](docs/boolean-instance.md)
- [BooleanType](docs/boolean-type.md)
- [BooleanVal](docs/boolean-val.md)
- [Bsn](docs/bsn.md)
- [Call](docs/call.md)
- [Callable](docs/callable.md)
- [Callback](docs/callback.md)
- [Charset](docs/charset.md)
- [Cnh](docs/cnh.md)
- [Cnpj](docs/cnpj.md)
- [Cntrl](docs/cntrl.md)
- [Consonant](docs/consonant.md)
- [Contains](docs/contains.md)
- [Coordinate](docs/coordinate.md)
- [Countable](docs/countable.md)
- [CountryCode](docs/country-code.md)
- [Cpf](docs/cpf.md)
- [CreditCard](docs/credit-card.md)
- [CurrencyCode](docs/currency-code.md)
- [DataUri](docs/data-uri.md)
- [DateTime](docs/date-time.md)
- [Digit](docs/digit.md)
- [Directory](docs/directory.md)
- [Domain](docs/domain.md)
- [Each](docs/each.md)
- [Email](docs/email.md)
- [Empty](docs/empty.md)
- [EndsWith](docs/ends-width.md)
- [Equals](docs/equals.md)
- [Even](docs/even.md)
- [Executable](docs/executable.md)
- [Exists](docs/exists.md)
- [Extension](docs/extension.md)
- [Factor](docs/factor.md)
- [FalseVal](docs/false-val.md)
- [Fibonacci](docs/fibonacci.md)
- [File](docs/file.md)
- [Finite](docs/finite.md)
- [FloatType](docs/float-type.md)
- [FloatVal](docs/float-val.md)
- [FullWidth](docs/full-width.md)
- [FunctionInstance](docs/function-instance.md)
- [FunctionName](docs/function-name.md)
- [FunctionType](docs/function-type.md)
- [Graph](docs/graph.md)
- [HalfWidth](docs/half-width.md)
- [Hash](docs/hash.md)
- [HexRgbColor](docs/hex-rgb-color.md)
- [Identical](docs/identical.md)
- [Image](docs/image.md)
- [Imei](docs/imei.md)
- [In](docs/in.md)
- [Infinite](docs/infinite.md)
- [InstanceOf](docs/instance-of.md)
- [IntType](docs/int-type.md)
- [IntVal](docs/int-val.md)
- [Ip](docs/ip.md)
- [Isin](docs/isin.md)
- [Iso8601](docs/iso8601.md)
- [Isrc](docs/isrc.md)
- [Iterable](docs/iterable.md)
- [Json](docs/json.md)
- [KeyNested](docs/key-nested.md)
- [KeySet](docs/key-set.md)
- [KeyValue](docs/key-value.md)
- [Key](docs/key.md)
- [Label](docs/label.md)
- [LanguageCode](docs/language-code.md)
- [Latitude](docs/latitude.md)
- [LeapDate](docs/leap-date.md)
- [LeapYear](docs/leap-year.md)
- [Locale](docs/locale.md)
- [Longitude](docs/longitude.md)
- [Lowercase](docs/lowercase.md)
- [Luhn](docs/luhn.md)
- [MacAddress](docs/mac-address.md)
- [Max](docs/max.md)
- [Mimetype](docs/mimetype.md)
- [Min](docs/min.md)
- [MobilePhone](docs/mobile-phone.md)
- [MongoId](docs/mongo-id.md)
- [Multibyte](docs/multibyte.md)
- [Multiple](docs/multiple.md)
- [Negative](docs/negative.md)
- [NfeAccessKey](docs/nfe-access-key.md)
- [NoWhitespace](docs/no-whitespace.md)
- [No](docs/no.md)
- [NoneOf](docs/none-of.md)
- [Not](docs/not.md)
- [NotEmpty](docs/not-empty.md)
- [NotOptional](docs/not-optional.md)
- [NullType](docs/null-type.md)
- [NumberInstance](docs/number-instance.md)
- [NumberType](docs/number-type.md)
- [NumberVal](docs/number-val.md)
- [ObjectInstance](docs/object-instance.md)
- [ObjectProperty](docs/object-property.md)
- [ObjectPropertyFunction](docs/object-property-function.md)
- [ObjectTypeStrict](docs/object-type-strict.md)
- [ObjectType](docs/object-type.md)
- [Odd](docs/odd.md)
- [OneOf](docs/one-of.md)
- [Optional](docs/optional.md)
- [PerfectSquare](docs/perfect-square.md)
- [Pesel](docs/pesel.md)
- [Phone](docs/phone.md)
- [Pis](docs/pis.md)
- [Port](docs/port.md)
- [Positive](docs/positive.md)
- [PostalCode](docs/postal-code.md)
- [PrimeNumber](docs/prime-number.md)
- [Prnt](docs/prnt.md)
- [PropertyKey](docs/property-key.md)
- [Punct](docs/punct.md)
- [Readable](docs/readable.md)
- [RegexInstance](docs/regex-instance.md)
- [RegexType](docs/regex-type.md)
- [RegexVal](docs/regex-val.md)
- [Regex](docs/regex.md)
- [Roman](docs/roman.md)
- [Scalar](docs/scalar.md)
- [Size](docs/size.md)
- [Slug](docs/slug.md)
- [Sorted](docs/sorted.md)
- [Space](docs/space.md)
- [StartsWith](docs/starts-with.md)
- [StringInstance](docs/string-instance.md)
- [StringType](docs/string-type.md)
- [StringVal](docs/string-val.md)
- [SubdivisionCode](docs/subdivision-code.md)
- [SurrogatePair](docs/surrogate-pair.md)
- [SymbolInstance](docs/symbol-instance.md)
- [SymbolType](docs/symbol-type.md)
- [SymbolVal](docs/symbol-val.md)
- [SymbolicLink](docs/symbolic-link.md)
- [Time](docs/time.md)
- [Timezone](docs/timezone.md)
- [Tld](docs/tld.md)
- [TrueVal](docs/true-val.md)
- [TypeOf](docs/type-of.md)
- [Unique](docs/unique.md)
- [Uppercase](docs/uppercase.md)
- [Url](docs/url.md)
- [Uuid](docs/uuid.md)
- [VariableWidth](docs/variable-width.md)
- [Version](docs/version.md)
- [VideoUrl](docs/video-url.md)
- [Vowel](docs/vowel.md)
- [When](docs/when.md)
- [Writable](docs/writable.md)
- [Xdigit](docs/xdigit.md)
- [Yes](docs/yes.md)
