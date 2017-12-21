import * as rules from './rules';

import { Validatable } from './validatable';

export class Validator extends rules.AllOf {

    /**
     * Static Extend.
     */
    public static extend(name: string, rule: { new (...args: any[]): Validatable }): Validator {
        return new Validator().extend(name, rule);
    }

    /**
     * Extend.
     */
    public extend(name: string, rule: { new (...args: any[]): Validatable }): this {
        Validator[name] = (...args: any[]): Validator => new Validator(new rule(args));
        Validator.prototype[name] = (...args: any[]): this => this.addRule(new rule(args));

        return this;
    }
}

for (const rule of Object.keys(rules)) {
    Validator.extend(rule.charAt(0).toLocaleLowerCase() + rule.slice(1), rules[rule]);
}

export * from './rules';
export { Validator as V };
export { Validator as validator };
export default Validator;
