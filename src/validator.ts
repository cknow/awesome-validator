import {
    AlwaysInvalid,
    AlwaysValid,
    ArrayInstance,
    ArrayType,
    BooleanType,
    Empty,
    Even,
    FloatType,
    InstanceOf,
    IntType,
    Json,
    Lowercase,
    NullType,
    NumberType,
    ObjectInstance,
    ObjectTypeStrict,
    ObjectType,
    RegexInstance,
    RegexType,
    Regex,
    Required,
    Scalar,
    Sorted,
    StringType,
    TypeOf,
    Uppercase,
    Url,
    Version,
    Vowel
} from './rules';

export interface IValidator {
    alwaysInvalid(): AlwaysInvalid;
    alwaysValid(): AlwaysValid;
    arrayInstance(): ArrayInstance;
    arrayType(): ArrayType;
    booleanType(): BooleanType;
    empty(): Empty;
    even(): Even;
    floatType(): FloatType;
    instanceOf(instanceName: any): InstanceOf;
    intType(): IntType;
    json(): Json;
    lowercase(): Lowercase;
    nullType(): NullType;
    numberType(): NumberType;
    objectInstance(): ObjectInstance;
    objectTypeStrict(): ObjectTypeStrict;
    objectType(): ObjectType;
    regexInstance(): RegexInstance;
    regexType(): RegexType;
    regex(pattern: string | RegExp): Regex;
    required(): Required;
    scalar(): Scalar;
    sorted(fn?: Function | null, ascending?: boolean): Sorted;
    stringType(): StringType;
    typeOf(pattern: string | RegExp): TypeOf;
    uppercase(): Uppercase;
    url(): Url;
    version(): Version;
    vowel(): Vowel;
}

const validator: IValidator = {
    alwaysInvalid: (): AlwaysInvalid => new AlwaysInvalid(),
    alwaysValid: (): AlwaysValid => new AlwaysValid(),
    arrayInstance: (): ArrayInstance => new ArrayInstance(),
    arrayType: (): ArrayType => new ArrayType(),
    booleanType: (): BooleanType => new BooleanType(),
    empty: (): Empty => new Empty(),
    even: (): Even => new Even(),
    floatType: (): FloatType => new FloatType(),
    instanceOf: (instanceName: any): InstanceOf => new InstanceOf(instanceName),
    intType: (): IntType => new IntType(),
    json: (): Json => new Json(),
    lowercase: (): Lowercase => new Lowercase(),
    nullType: (): NullType => new NullType(),
    numberType: (): NumberType => new NumberType(),
    objectInstance: (): ObjectInstance => new ObjectInstance(),
    objectTypeStrict: (): ObjectTypeStrict => new ObjectTypeStrict(),
    objectType: (): ObjectType => new ObjectType(),
    regexInstance: (): RegexInstance => new RegexInstance(),
    regexType: (): RegexType => new RegexType(),
    regex: (pattern: string | RegExp): Regex => new Regex(pattern),
    required: (): Required => new Required(),
    scalar: (): Scalar => new Scalar(),
    sorted: (fn?: Function | null, ascending: boolean = true): Sorted => new Sorted(fn, ascending),
    stringType: (): StringType => new StringType(),
    typeOf: (pattern: string | RegExp): TypeOf => new TypeOf(pattern),
    uppercase: (): Uppercase => new Uppercase(),
    url: (): Url => new Url(),
    version: (): Version => new Version(),
    vowel: (): Vowel => new Vowel()
};

export * from './rules';
export { validator };
export default validator;
