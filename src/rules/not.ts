import { Validatable } from './../validatable';
import { AbstractRule } from './abstract-rule';

export class Not extends AbstractRule {

    /**
     * Not.
     */
    public constructor(public readonly rule: Validatable) {
        super();
    }

    /**
     * Validate.
     */
    public validate(input: any): boolean {
        return !this.rule.validate(input);
    }
}
