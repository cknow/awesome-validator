/* tslint:disable max-file-line-count */
import * as rules from './rules';

import { Validatable } from './validatable';

export class Validator extends rules.AllOf {

    /**
     * All Of.
     */
    public allOf(...args: Validatable[]): rules.AllOf {
        return new rules.AllOf(...args);
    }

    /**
     * Always Invalid.
     */
    public alwaysInvalid(): this {
        return this.addRule(new rules.AlwaysInvalid());
    }

    /**
     * Always Valid.
     */
    public alwaysValid(): this {
        return this.addRule(new rules.AlwaysValid());
    }

    /**
     * Any Of.
     */
    public anyOf(...args: Validatable[]): this {
        return this.addRule(new rules.AnyOf(...args));
    }

    /**
     * Array Instance.
     */
    public arrayInstance(): this {
        return this.addRule(new rules.ArrayInstance());
    }

    /**
     * Array Type.
     */
    public arrayType(): this {
        return this.addRule(new rules.ArrayType());
    }

    /**
     * Array Val.
     */
    public arrayVal(): this {
        return this.addRule(new rules.ArrayVal());
    }

    /**
     * Boolean Type.
     */
    public booleanType(): this {
        return this.addRule(new rules.BooleanType());
    }

    /**
     * Boolean Val.
     */
    public booleanVal(): this {
        return this.addRule(new rules.BooleanVal());
    }

    /**
     * Cnh.
     */
    public cnh(): this {
        return this.addRule(new rules.Cnh());
    }

    /**
     * Cnpj.
     */
    public cnpj(): this {
        return this.addRule(new rules.Cnpj());
    }

    /**
     * Consonant.
     */
    public consonant(additionalChars?: string): this {
        return this.addRule(new rules.Consonant(additionalChars));
    }

    /**
     * Contains.
     */
    public contains(value?: any): this {
        return this.addRule(new rules.Contains(value));
    }

    /**
     * Cpf.
     */
    public cpf(): this {
        return this.addRule(new rules.Cpf());
    }

    /**
     * Empty.
     */
    public empty(): this {
        return this.addRule(new rules.Empty());
    }

    /**
     * Even.
     */
    public even(): this {
        return this.addRule(new rules.Even());
    }

    /**
     * False Val.
     */
    public falseVal(): this {
        return this.addRule(new rules.FalseVal());
    }

    /**
     * Float Type.
     */
    public floatType(): this {
        return this.addRule(new rules.FloatType());
    }

    /**
     * Float Val.
     */
    public floatVal(): this {
        return this.addRule(new rules.FloatVal());
    }

    /**
     * In.
     */
    public in(searcher?: any): this {
        return this.addRule(new rules.In(searcher));
    }

    /**
     * Instance Of.
     */
    public instanceOf(instanceName: any): this {
        return this.addRule(new rules.InstanceOf(instanceName));
    }

    /**
     * Int Type.
     */
    public intType(): this {
        return this.addRule(new rules.IntType());
    }

    /**
     * Int Val.
     */
    public intVal(): this {
        return this.addRule(new rules.IntVal());
    }

    /**
     * Json.
     */
    public json(): this {
        return this.addRule(new rules.Json());
    }

    /**
     * Lowercase.
     */
    public lowercase(): this {
        return this.addRule(new rules.Lowercase());
    }

    /**
     * Multiple.
     */
    public multiple(multipleOf: number): this {
        return this.addRule(new rules.Multiple(multipleOf));
    }

    /**
     * Null Type.
     */
    public nullType(): this {
        return this.addRule(new rules.NullType());
    }

    /**
     * Numer type.
     */
    public numberType(): this {
        return this.addRule(new rules.NumberType());
    }

    /**
     * Object Instance.
     */
    public objectInstance(): this {
        return this.addRule(new rules.ObjectInstance());
    }

    /**
     * Object Type Strict.
     */
    public objectTypeStrict(): this {
        return this.addRule(new rules.ObjectTypeStrict());
    }

    /**
     * Object Type.
     */
    public objectType(): this {
        return this.addRule(new rules.ObjectType());
    }

    /**
     * Regex Instance.
     */
    public regexInstance(): this {
        return this.addRule(new rules.RegexInstance());
    }

    /**
     * Regex Type.
     */
    public regexType(): this {
        return this.addRule(new rules.RegexType());
    }

    /**
     * Regex.
     */
    public regex(pattern: string | RegExp): this {
        return this.addRule(new rules.Regex(pattern));
    }

    /**
     * Required.
     */
    public required(): this {
        return this.addRule(new rules.Required());
    }

    /**
     * Scalar.
     */
    public scalar(): this {
        return this.addRule(new rules.Scalar());
    }

    /**
     * Sorted.
     */
    public sorted(fn?: Function | null, ascending: boolean = true): this {
        return this.addRule(new rules.Sorted(fn, ascending));
    }

    /**
     * String Type.
     */
    public stringType(): this {
        return this.addRule(new rules.StringType());
    }

    /**
     * True Val.
     */
    public trueVal(): this {
        return this.addRule(new rules.TrueVal());
    }

    /**
     * Type Of.
     */
    public typeOf(pattern: string | RegExp): this {
        return this.addRule(new rules.TypeOf(pattern));
    }

    /**
     * Uppercase.
     */
    public uppercase(): this {
        return this.addRule(new rules.Uppercase());
    }

    /**
     * Url.
     */
    public url(): this {
        return this.addRule(new rules.Url());
    }

    /**
     * Version.
     */
    public version(): this {
        return this.addRule(new rules.Version());
    }

    /**
     * Vowel.
     */
    public vowel(additionalChars?: string): this {
        return this.addRule(new rules.Vowel(additionalChars));
    }
}

const validator: Validator = new Validator();

export * from './rules';
export { validator };
export default validator;
