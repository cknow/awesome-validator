# Awesome Validator
> Awesome validator for node or browser.

[![NPM Version](https://img.shields.io/npm/v/awesome-validator.svg)](https://www.npmjs.com/package/awesome-validator)
[![Downloads](https://img.shields.io/npm/dt/awesome-validator.svg)](https://www.npmjs.com/package/awesome-validator)
[![MIT License](https://img.shields.io/npm/l/awesome-validator.svg)](LICENSE)

[![Build Status](https://travis-ci.org/cknow/awesome-validator.svg?branch=master)](https://travis-ci.org/cknow/awesome-validator)
[![Build status](https://ci.appveyor.com/api/projects/status/64mu0a0cfmtvgicd/branch/master?svg=true)](https://ci.appveyor.com/project/cknow/awesome-validator/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/cknow/awesome-validator/badge.svg?branch=master)](https://coveralls.io/github/cknow/awesome-validator?branch=master)

[![Dependency Status](https://dependencyci.com/github/cknow/awesome-validator/badge)](https://dependencyci.com/github/cknow/awesome-validator)
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
var validator = require('awesome-validator');

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

- [AllOf](docs/all-of.md)
- [AlwaysInvalid](docs/always-invalid.md)
- [AlwaysValid](docs/always-valid.md)
- [AnyOf](docs/any-of.md)
- [ArrayInstance](docs/array-instance.md)
- [ArrayType](docs/array-type.md)
- [ArrayVal](docs/array-val.md)
- [BooleanInstance](docs/boolean-instance.md)
- [BooleanType](docs/boolean-type.md)
- [BooleanVal](docs/boolean-val.md)
- [Cnh](docs/cnh.md)
- [Cnpj](docs/cnpj.md)
- [Consonant](docs/consonant.md)
- [Contains](docs/contains.md)
- [Cpf](docs/cpf.md)
- [Empty](docs/empty.md)
- [Even](docs/even.md)
- [FalseVal](docs/false-val.md)
- [FloatType](docs/float-type.md)
- [FloatVal](docs/float-val.md)
- [FunctionInstance](docs/function-instance.md)
- [FunctionType](docs/function-type.md)
- [In](docs/in.md)
- [InstanceOf](docs/instance-of.md)
- [IntType](docs/int-type.md)
- [IntVal](docs/int-val.md)
- [Json](docs/json.md)
- [Lowercase](docs/lowercase.md)
- [Multiple](docs/multiple.md)
- [Negative](docs/negative.md)
- [NfeAccessKey](docs/nfe-access-key.md)
- [NoWhitespace](docs/no-whitespace.md)
- [No](docs/no.md)
- [NoneOf](docs/none-of.md)
- [Not](docs/not.md)
- [NotEmpty](docs/not-empty.md)
- [NullType](docs/null-type.md)
- [NumberInstance](docs/number-instance.md)
- [NumberType](docs/number-type.md)
- [NumberVal](docs/number-val.md)
- [ObjectInstance](docs/object-instance.md)
- [ObjectTypeStrict](docs/object-type-strict.md)
- [ObjectType](docs/object-type.md)
- [PerfectSquare](docs/perfect-square.md)
- [Pesel](docs/pesel.md)
- [Phone](docs/phone.md)
- [Pis](docs/pis.md)
- [Positive](docs/positive.md)
- [PrimeNumber](docs/prime-number.md)
- [Prnt](docs/prnt.md)
- [Punct](docs/punct.md)
- [RegexInstance](docs/regex-instance.md)
- [RegexType](docs/regex-type.md)
- [RegexVal](docs/regex-val.md)
- [Regex](docs/regex.md)
- [Roman](docs/roman.md)
- [Scalar](docs/scalar.md)
- [Slug](docs/slug.md)
- [Sorted](docs/sorted.md)
- [StringInstance](docs/string-instance.md)
- [StringType](docs/string-type.md)
- [StringVal](docs/string-val.md)
- [SymbolicLink](docs/symbolic-link.md)
- [Tld](docs/tld.md)
- [TrueVal](docs/true-val.md)
- [TypeOf](docs/type-of.md)
- [Unique](docs/unique.md)
- [Uppercase](docs/uppercase.md)
- [Url](docs/url.md)
- [Uuid](docs/uuid.md)
- [Version](docs/version.md)
- [Vowel](docs/vowel.md)
- [When](docs/when.md)
- [Yes](docs/yes.md)
