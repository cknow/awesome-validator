import * as moment from 'moment';

import * as rules from './rules';
import { AllOf } from './rules/all-of';
import { VideoService } from './rules/video-url';
import { Validatable } from './validatable';

export class Validator extends AllOf {

    /* tslint:disable completed-docs max-line-length */
    public static age = (min: moment.DurationInputArg1 = 18, max?: moment.DurationInputArg1, format?: moment.MomentFormatSpecification): Validator => new Validator(new rules.Age(min, max, format));
    public static allOf = (...args: Validatable[]): AllOf => new AllOf(...args);
    public static alwaysInvalid = (): Validator => new Validator(new rules.AlwaysInvalid());
    public static alwaysValid = (): Validator => new Validator(new rules.AlwaysValid());
    public static anyOf = (...args: Validatable[]): Validator => new Validator(new rules.AnyOf(...args));
    public static arrayInstance = (): Validator => new Validator(new rules.ArrayInstance());
    public static arrayType = (): Validator => new Validator(new rules.ArrayType());
    public static arrayVal = (): Validator => new Validator(new rules.ArrayVal());
    public static booleanInstance = (): Validator => new Validator(new rules.BooleanInstance());
    public static booleanType = (): Validator => new Validator(new rules.BooleanType());
    public static booleanVal = (): Validator => new Validator(new rules.BooleanVal());
    public static cnh = (): Validator => new Validator(new rules.Cnh());
    public static cnpj = (): Validator => new Validator(new rules.Cnpj());
    public static consonant = (additionalChars?: string): Validator => new Validator(new rules.Consonant(additionalChars));
    public static contains = (value?: any, contains: boolean = true, identical: boolean = false): Validator => new Validator(new rules.Contains(value, contains, identical));
    public static cpf = (): Validator => new Validator(new rules.Cpf());
    public static dateTime = (format?: moment.MomentFormatSpecification): Validator => new Validator(new rules.DateTime(format));
    public static digit = (additionalChars?: string): Validator => new Validator(new rules.Digit(additionalChars));
    public static empty = (): Validator => new Validator(new rules.Empty());
    public static even = (): Validator => new Validator(new rules.Even());
    public static falseVal = (): Validator => new Validator(new rules.FalseVal());
    public static fibonacci = (): Validator => new Validator(new rules.Fibonacci());
    public static file = (): Validator => new Validator(new rules.File());
    public static finite = (): Validator => new Validator(new rules.Finite());
    public static floatType = (): Validator => new Validator(new rules.FloatType());
    public static floatVal = (): Validator => new Validator(new rules.FloatVal());
    public static functionInstance = (): Validator => new Validator(new rules.FunctionInstance());
    public static functionType = (): Validator => new Validator(new rules.FunctionType());
    public static graph = (additionalChars?: string): Validator => new Validator(new rules.Graph(additionalChars));
    public static imei = (): Validator => new Validator(new rules.Imei());
    public static in = (searcher?: any, contains: boolean = true, identical: boolean = false): Validator => new Validator(new rules.In(searcher, contains, identical));
    public static infinite = (): Validator => new Validator(new rules.Infinite());
    public static instanceOf = (instanceName: any): Validator => new Validator(new rules.InstanceOf(instanceName));
    public static intType = (): Validator => new Validator(new rules.IntType());
    public static intVal = (): Validator => new Validator(new rules.IntVal());
    public static iterable = (): Validator => new Validator(new rules.Iterable());
    public static json = (): Validator => new Validator(new rules.Json());
    public static label = (): Validator => new Validator(new rules.Label());
    public static leapDate = (format?: moment.MomentFormatSpecification): Validator => new Validator(new rules.LeapDate(format));
    public static leapYear = (format?: moment.MomentFormatSpecification): Validator => new Validator(new rules.LeapYear(format));
    public static lowercase = (): Validator => new Validator(new rules.Lowercase());
    public static luhn = (): Validator => new Validator(new rules.Luhn());
    public static macAddress = (): Validator => new Validator(new rules.MacAddress());
    public static max = (interval?: any, inclusive: boolean = true): Validator => new Validator(new rules.Max(interval, inclusive));
    public static min = (interval?: any, inclusive: boolean = true): Validator => new Validator(new rules.Min(interval, inclusive));
    public static multiple = (multipleOf: number): Validator => new Validator(new rules.Multiple(multipleOf));
    public static negative = (): Validator => new Validator(new rules.Negative());
    public static nfeAccessKey  = (): Validator => new Validator(new rules.NfeAccessKey());
    public static noWhitespace  = (): Validator => new Validator(new rules.NoWhitespace());
    public static no = (additionalChars?: string): Validator => new Validator(new rules.No(additionalChars));
    public static noneOf = (...args: Validatable[]): Validator => new Validator(new rules.NoneOf(...args));
    public static not = (rule: Validatable): Validator => new Validator(new rules.Not(rule));
    public static notEmpty = (): Validator => new Validator(new rules.NotEmpty());
    public static notOptional = (): Validator => new Validator(new rules.NotOptional());
    public static nullType = (): Validator => new Validator(new rules.NullType());
    public static numberInstance = (): Validator => new Validator(new rules.NumberInstance());
    public static numberType = (): Validator => new Validator(new rules.NumberType());
    public static numberVal = (): Validator => new Validator(new rules.NumberVal());
    public static objectInstance = (): Validator => new Validator(new rules.ObjectInstance());
    public static objectTypeStrict = (): Validator => new Validator(new rules.ObjectTypeStrict());
    public static objectType = (): Validator => new Validator(new rules.ObjectType());
    public static odd = (): Validator => new Validator(new rules.Odd());
    public static oneOf = (...args: Validatable[]): Validator => new Validator(new rules.OneOf(...args));
    public static optional = (validatable: Validatable): Validator => new Validator(new rules.Optional(validatable));
    public static perfectSquare = (): Validator => new Validator(new rules.PerfectSquare());
    public static pesel = (): Validator => new Validator(new rules.Pesel());
    public static phone = (): Validator => new Validator(new rules.Phone());
    public static pis = (): Validator => new Validator(new rules.Pis());
    public static positive = (): Validator => new Validator(new rules.Positive());
    public static primeNumber = (): Validator => new Validator(new rules.PrimeNumber());
    public static prnt = (additionalChars?: string): Validator => new Validator(new rules.Prnt(additionalChars));
    public static punct = (additionalChars?: string): Validator => new Validator(new rules.Punct(additionalChars));
    public static range = (min?: any, max?: any, inclusive: boolean = true): Validator => new Validator(new rules.Range(min, max, inclusive));
    public static readable = (): Validator => new Validator(new rules.Readable());
    public static regexInstance = (): Validator => new Validator(new rules.RegexInstance());
    public static regexType = (): Validator => new Validator(new rules.RegexType());
    public static regexVal = (): Validator => new Validator(new rules.RegexVal());
    public static regex = (pattern: string | RegExp): Validator => new Validator(new rules.Regex(pattern));
    public static roman = (): Validator => new Validator(new rules.Roman());
    public static scalar = (): Validator => new Validator(new rules.Scalar());
    public static size = (min?: any, max?: any, inclusive: boolean = true): Validator => new Validator(new rules.Size(min, max, inclusive));
    public static slug = (): Validator => new Validator(new rules.Slug());
    public static sorted = (fn?: Function | null, ascending: boolean = true): Validator => new Validator(new rules.Sorted(fn, ascending));
    public static space = (additionalChars?: string): Validator => new Validator(new rules.Space(additionalChars));
    public static startsWith = (startValue: string, identical: boolean = false): Validator => new Validator(new rules.StartsWith(startValue, identical));
    public static stringInstance = (): Validator => new Validator(new rules.StringInstance());
    public static stringType = (): Validator => new Validator(new rules.StringType());
    public static stringVal = (): Validator => new Validator(new rules.StringVal());
    public static subdivisionCode = (countryCode: string, identical: boolean = true): Validator => new Validator(new rules.SubdivisionCode(countryCode, identical));
    public static symbolInstance = (): Validator => new Validator(new rules.SymbolInstance());
    public static symbolType = (): Validator => new Validator(new rules.SymbolType());
    public static symbolVal = (): Validator => new Validator(new rules.SymbolVal());
    public static symbolicLink = (): Validator => new Validator(new rules.SymbolicLink());
    public static tld = (): Validator => new Validator(new rules.Tld());
    public static trueVal = (): Validator => new Validator(new rules.TrueVal());
    public static typeOf = (pattern: string | RegExp): Validator => new Validator(new rules.TypeOf(pattern));
    public static unique = (): Validator => new Validator(new rules.Unique());
    public static uppercase = (): Validator => new Validator(new rules.Uppercase());
    public static url = (): Validator => new Validator(new rules.Url());
    public static uuid = (): Validator => new Validator(new rules.Uuid());
    public static version = (): Validator => new Validator(new rules.Version());
    public static videoUrl = (service?: VideoService): Validator => new Validator(new rules.VideoUrl(service));
    public static vowel = (additionalChars?: string): Validator => new Validator(new rules.Vowel(additionalChars));
    public static when = (whenRule: Validatable, thenRule: Validatable, elseRule?: Validatable): Validator => new Validator(new rules.When(whenRule, thenRule, elseRule));
    public static writable = (): Validator => new Validator(new rules.Writable());
    public static xdigit = (additionalChars?: string): Validator => new Validator(new rules.Xdigit(additionalChars));
    public static yes = (additionalChars?: string): Validator => new Validator(new rules.Yes(additionalChars));

    public age = (min: moment.DurationInputArg1 = 18, max?: moment.DurationInputArg1, format?: moment.MomentFormatSpecification): this => this.addRule(new rules.Age(min, max, format));
    public allOf = (...args: Validatable[]): this => this.addRule(new AllOf(...args));
    public alwaysInvalid = (): this => this.addRule(new rules.AlwaysInvalid());
    public alwaysValid = (): this => this.addRule(new rules.AlwaysValid());
    public anyOf = (...args: Validatable[]): this => this.addRule(new rules.AnyOf(...args));
    public arrayInstance = (): this => this.addRule(new rules.ArrayInstance());
    public arrayType = (): this => this.addRule(new rules.ArrayType());
    public arrayVal = (): this => this.addRule(new rules.ArrayVal());
    public booleanInstance = (): this => this.addRule(new rules.BooleanInstance());
    public booleanType = (): this => this.addRule(new rules.BooleanType());
    public booleanVal = (): this => this.addRule(new rules.BooleanVal());
    public cnh = (): this => this.addRule(new rules.Cnh());
    public cnpj = (): this => this.addRule(new rules.Cnpj());
    public consonant = (additionalChars?: string): this => this.addRule(new rules.Consonant(additionalChars));
    public contains = (value?: any, contains: boolean = true, identical: boolean = false): this => this.addRule(new rules.Contains(value, contains, identical));
    public cpf = (): this => this.addRule(new rules.Cpf());
    public dateTime = (format?: moment.MomentFormatSpecification): this => this.addRule(new rules.DateTime(format));
    public digit = (additionalChars?: string): this => this.addRule(new rules.Digit(additionalChars));
    public empty = (): this => this.addRule(new rules.Empty());
    public even = (): this => this.addRule(new rules.Even());
    public falseVal = (): this => this.addRule(new rules.FalseVal());
    public fibonacci = (): this => this.addRule(new rules.Fibonacci());
    public file = (): this => this.addRule(new rules.File());
    public finite = (): this => this.addRule(new rules.Finite());
    public floatType = (): this => this.addRule(new rules.FloatType());
    public floatVal = (): this => this.addRule(new rules.FloatVal());
    public functionInstance = (): this => this.addRule(new rules.FunctionInstance());
    public functionType = (): this => this.addRule(new rules.FunctionType());
    public graph = (additionalChars?: string): this => this.addRule(new rules.Graph(additionalChars));
    public imei = (): this => this.addRule(new rules.Imei());
    public in = (searcher?: any, contains: boolean = true, identical: boolean = false): this => this.addRule(new rules.In(searcher, contains, identical));
    public infinite = (): this => this.addRule(new rules.Infinite());
    public instanceOf = (instanceName: any): this => this.addRule(new rules.InstanceOf(instanceName));
    public intType = (): this => this.addRule(new rules.IntType());
    public intVal = (): this => this.addRule(new rules.IntVal());
    public iterable = (): this => this.addRule(new rules.Iterable());
    public json = (): this => this.addRule(new rules.Json());
    public label = (): this => this.addRule(new rules.Label());
    public leapDate = (format?: moment.MomentFormatSpecification): this => this.addRule(new rules.LeapDate(format));
    public leapYear = (format?: moment.MomentFormatSpecification): this => this.addRule(new rules.LeapYear(format));
    public lowercase = (): this => this.addRule(new rules.Lowercase());
    public luhn = (): this => this.addRule(new rules.Luhn());
    public macAddress = (): this => this.addRule(new rules.MacAddress());
    public max = (interval?: any, inclusive: boolean = true): this => this.addRule(new rules.Max(interval, inclusive));
    public min = (interval?: any, inclusive: boolean = true): this => this.addRule(new rules.Min(interval, inclusive));
    public multiple = (multipleOf: number): this => this.addRule(new rules.Multiple(multipleOf));
    public negative = (): this => this.addRule(new rules.Negative());
    public nfeAccessKey  = (): this => this.addRule(new rules.NfeAccessKey());
    public noWhitespace  = (): this => this.addRule(new rules.NoWhitespace());
    public no = (additionalChars?: string): this => this.addRule(new rules.No(additionalChars));
    public noneOf = (...args: Validatable[]): this => this.addRule(new rules.NoneOf(...args));
    public not = (rule: Validatable): this => this.addRule(new rules.Not(rule));
    public notEmpty = (): this => this.addRule(new rules.NotEmpty());
    public notOptional = (): this => this.addRule(new rules.NotOptional());
    public nullType = (): this => this.addRule(new rules.NullType());
    public numberInstance = (): this => this.addRule(new rules.NumberInstance());
    public numberType = (): this => this.addRule(new rules.NumberType());
    public numberVal = (): this => this.addRule(new rules.NumberVal());
    public objectInstance = (): this => this.addRule(new rules.ObjectInstance());
    public objectTypeStrict = (): this => this.addRule(new rules.ObjectTypeStrict());
    public objectType = (): this => this.addRule(new rules.ObjectType());
    public odd = (): this => this.addRule(new rules.Odd());
    public oneOf = (...args: Validatable[]): this => this.addRule(new rules.OneOf(...args));
    public optional = (validatable: Validatable): this => this.addRule(new rules.Optional(validatable));
    public perfectSquare = (): this => this.addRule(new rules.PerfectSquare());
    public pesel = (): this => this.addRule(new rules.Pesel());
    public phone = (): this => this.addRule(new rules.Phone());
    public pis = (): this => this.addRule(new rules.Pis());
    public positive = (): this => this.addRule(new rules.Positive());
    public primeNumber = (): this => this.addRule(new rules.PrimeNumber());
    public prnt = (additionalChars?: string): this => this.addRule(new rules.Prnt(additionalChars));
    public punct = (additionalChars?: string): this => this.addRule(new rules.Punct(additionalChars));
    public range = (min?: any, max?: any, inclusive: boolean = true): this => this.addRule(new rules.Range(min, max, inclusive));
    public readable = (): this => this.addRule(new rules.Readable());
    public regexInstance = (): this => this.addRule(new rules.RegexInstance());
    public regexType = (): this => this.addRule(new rules.RegexType());
    public regexVal = (): this => this.addRule(new rules.RegexVal());
    public regex = (pattern: string | RegExp): this => this.addRule(new rules.Regex(pattern));
    public roman = (): this => this.addRule(new rules.Roman());
    public scalar = (): this => this.addRule(new rules.Scalar());
    public size = (min?: any, max?: any, inclusive: boolean = true): this => this.addRule(new rules.Size(min, max, inclusive));
    public slug = (): this => this.addRule(new rules.Slug());
    public sorted = (fn?: Function | null, ascending: boolean = true): this => this.addRule(new rules.Sorted(fn, ascending));
    public space = (additionalChars?: string): this => this.addRule(new rules.Space(additionalChars));
    public startsWith = (startValue: string, identical: boolean = false): this => this.addRule(new rules.StartsWith(startValue, identical));
    public stringInstance = (): this => this.addRule(new rules.StringInstance());
    public stringType = (): this => this.addRule(new rules.StringType());
    public stringVal = (): this => this.addRule(new rules.StringVal());
    public subdivisionCode = (countryCode: string, identical: boolean = true): this => this.addRule(new rules.SubdivisionCode(countryCode, identical));
    public symbolInstance = (): this => this.addRule(new rules.SymbolInstance());
    public symbolType = (): this => this.addRule(new rules.SymbolType());
    public symbolVal = (): this => this.addRule(new rules.SymbolVal());
    public symbolicLink = (): this => this.addRule(new rules.SymbolicLink());
    public tld = (): this => this.addRule(new rules.Tld());
    public trueVal = (): this => this.addRule(new rules.TrueVal());
    public typeOf = (pattern: string | RegExp): this => this.addRule(new rules.TypeOf(pattern));
    public unique = (): this => this.addRule(new rules.Unique());
    public uppercase = (): this => this.addRule(new rules.Uppercase());
    public url = (): this => this.addRule(new rules.Url());
    public uuid = (): this => this.addRule(new rules.Uuid());
    public version = (): this => this.addRule(new rules.Version());
    public videoUrl = (service?: VideoService): this => this.addRule(new rules.VideoUrl(service));
    public vowel = (additionalChars?: string): this => this.addRule(new rules.Vowel(additionalChars));
    public when = (whenRule: Validatable, thenRule: Validatable, elseRule?: Validatable): this => this.addRule(new rules.When(whenRule, thenRule, elseRule));
    public writable = (): this => this.addRule(new rules.Writable());
    public xdigit = (additionalChars?: string): this => this.addRule(new rules.Xdigit(additionalChars));
    public yes = (additionalChars?: string): this => this.addRule(new rules.Yes(additionalChars));
    /* tslint:enable completed-docs max-line-length */
}

export * from './rules';
export { Validator as V };
export { Validator as validator };
export default Validator;
