import {
    AlwaysInvalid,
    AlwaysValid,
    ArrayType,
    BooleanType,
    Empty,
    FloatType,
    IntType,
    Json,
    NullType,
    NumberType,
    ObjectStrictType,
    ObjectType,
    Regex,
    RegexType,
    Required,
    Scalar,
    Sorted,
    StringType,
    TypeOf,
    URL,
    Version,
    Vowel
} from './rules';

export interface IValidator {
    alwaysInvalid(): AlwaysInvalid;
    alwaysValid(): AlwaysValid;
    arrayType(): ArrayType;
    booleanType(): BooleanType;
    empty(): Empty;
    floatType(): FloatType;
    intType(): IntType;
    json(): Json;
    nullType(): NullType;
    numberType(): NumberType;
    objectStrictType(): ObjectStrictType;
    objectType(): ObjectType;
    regex(pattern: string | RegExp): Regex;
    regexType(): RegexType;
    required(): Required;
    scalar(): Scalar;
    sorted(fn?: Function | null, ascending?: boolean): Sorted;
    stringType(): StringType;
    typeOf(pattern: string | RegExp): TypeOf;
    url(): URL;
    version(): Version;
    vowel(): Vowel;
}

const validator: IValidator = {
    alwaysInvalid: (): AlwaysInvalid => new AlwaysInvalid(),
    alwaysValid: (): AlwaysValid => new AlwaysValid(),
    arrayType: (): ArrayType => new ArrayType(),
    booleanType: (): BooleanType => new BooleanType(),
    empty: (): Empty => new Empty(),
    floatType: (): FloatType => new FloatType(),
    intType: (): IntType => new IntType(),
    json: (): Json => new Json(),
    nullType: (): NullType => new NullType(),
    numberType: (): NumberType => new NumberType(),
    objectStrictType: (): ObjectStrictType => new ObjectStrictType(),
    objectType: (): ObjectType => new ObjectType(),
    regex: (pattern: string | RegExp): Regex => new Regex(pattern),
    regexType: (): RegexType => new RegexType(),
    required: (): Required => new Required(),
    scalar: (): Scalar => new Scalar(),
    sorted: (fn?: Function | null, ascending: boolean = true): Sorted => new Sorted(fn, ascending),
    stringType: (): StringType => new StringType(),
    typeOf: (pattern: string | RegExp): TypeOf => new TypeOf(pattern),
    url: (): URL => new URL(),
    version: (): Version => new Version(),
    vowel: (): Vowel => new Vowel()
};

export * from './rules';
export { validator };
export default validator;
